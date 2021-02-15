import React from 'react';

export default function ShopCard({card}) {

  return (
    <li className="shop-card">
      <h3 className="card-name">{card.name}</h3>
      <div className="card-color">{card.color}</div>
      <img className="card-image" src={card.img} alt=""/>
      <div className="card-price">{card.currency}{card.price}</div>
      <button className="card-btn">Add to cart</button>
    </li>
  )
}
