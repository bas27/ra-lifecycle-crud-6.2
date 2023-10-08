import { memo } from "react";
import { TextCard } from "../interfaces";

const Card = memo(function Card({
  id,
  text,
  onDelete,
}: {
  id: string;
  text: string;
  onDelete: (id: string) => void;
}) {
  const handleDeleteCard = (): void => {
    onDelete(id);
  };

  return (
    <div className="card">
      <div className="card-body">{text}</div>
      <button
        type="button"
        className="btn btn-delete"
        onClick={handleDeleteCard}
      />
    </div>
  );
});

function Cards({
  textCards = [],
  onDelete,
}: {
  textCards: TextCard[];
  onDelete: (id: string) => void;
}) {
  return (
    <div className="cards">
      {textCards.map((card) => (
        <Card key={card.id} id={card.id} text={card.body} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Cards;
