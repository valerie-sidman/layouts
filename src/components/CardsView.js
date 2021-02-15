import React from 'react';
import ShopCard from './ShopCard.js';

export default function CardsView({cards}) {

  return (
    <ul className="cards-module">
      {
        cards.map((card, index) => <ShopCard card={card} key={index}/>)
      }
    </ul>
  )
}
