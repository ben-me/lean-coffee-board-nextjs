import { useState } from "react";

import styled from "styled-components";
import Card from "../components/Card";
import Form from "../components/Form";
import getAllCards from "../services/cardService";

export async function getServerSideProps() {
  const cards = await getAllCards();
  return {
    props: {
      cards: cards,
    },
  };
}

export default function Home({ cards }) {
  const [cardList, setCardList] = useState(cards);

  function addCard(newCard) {
    setCardList([newCard, ...cardList]);
  }

  function removeCard(id) {
    fetch(`/api/card/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <BoardWrapper>
      <CardGrid>
        {cardList.map((card) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              text={card.text}
              onRemoveCard={removeCard}
              id={card.id}
            />
          );
        })}
      </CardGrid>
      <Form onAddCard={addCard} />
    </BoardWrapper>
  );
}

const BoardWrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
`;

const CardGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 20px;
  overflow-y: auto;
`;
