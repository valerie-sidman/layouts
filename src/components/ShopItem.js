import React from 'react';

export default function ShopItem({item}) {

  return (
    <li className="shop-item">
      <img className="item-image" src={item.img} alt=""/>
      <h3 className="item-name">{item.name}</h3>
      <div className="item-color">{item.color}</div>
      <div className="item-price">{item.currency}{item.price}</div>
      <button className="item-btn">Add to cart</button>
    </li>
  )
}
