import { useState } from "react";
import useFetchData from "../hooks/useFetchData";

function ProfileCards() {
  const { cardData } = useFetchData();

  const [cards, setCards] = useState(2);

  return (
    <div className="cards-container">
      <h2>Profile Cards</h2>

      <div className="cards">
        {cardData
          .slice(0, cards)
          .map((profile) => (
            <div className="card" key={profile.id}>
              <img
                src={profile.image}
                alt={profile.name}
              />

              <h3>{profile.name}</h3>
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
            </div>
          ))}
      </div>

      <button onClick={() => setCards(cards + 2)} disabled={cards >= cardData.length}>
        Load 2 More Cards
      </button>
    </div>
  );
}

export default ProfileCards;