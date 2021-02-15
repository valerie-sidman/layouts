import React from 'react';
import ShopItem from './ShopItem.js';

export default function ListView({items}) {

  return (
    <ul className="cards-list">
      {
        items.map((item, index) => <ShopItem item={item} key={index}/>)
      }
    </ul>
  )
}
