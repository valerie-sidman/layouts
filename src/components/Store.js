import React, { useState } from 'react';
import CardsView from './CardsView.js';
import ListView from './ListView.js';
import IconSwitch from './IconSwitch.js';

export default function Store() {
  const [display, setDisplay] = useState('view_module');
  console.log();

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    currency: '$',
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    currency: '$',
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    currency: '$',
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    currency: '$',
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    currency: '$',
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    currency: '$',
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const handleClick = () => {
    setDisplay((display) => display === 'view_list' ? 'view_module' : 'view_list');
  }

  return (
    <div className="container">
      <IconSwitch icon={display} onSwitch={handleClick} />
      <div className="goods">{display === 'view_list' ? <ListView items={products}/> : <CardsView cards={products}/>}
      </div>
    </div>
  )
}
