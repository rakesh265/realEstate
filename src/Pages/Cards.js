import React, {useState, useEffect} from 'react';
import './Cards.css';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      const limit = 30;
     
      fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
        .then((res) => res.json())
        .then((data) => setCards(data));
    }, []);
  return (
    <div className="card-container">
    {cards.map((card) => (
      <div key={card.id} className="card">
        <img src={card.thumbnailUrl} alt={card.title} />
        <div className="card-content">
          <h2>{card.title}</h2>
          <p>{card.albumId}</p>
          <p>{card.id}</p>
          <a href={card.url}>View</a>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Cards;