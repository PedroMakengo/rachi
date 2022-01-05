import React from "react";

import { Item } from './style.js';

const ItemInfo = ({img, text}) => {
  return (
    <Item className="item">
      <img src={img} alt="" />
      <h2>{text}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur </p>
    </Item>
  )
}

export { ItemInfo };