import React from "react";

const ItemInfo = ({img, text}) => {
  return (
    <div className="item">
      <img src={img} alt="" />
      <h2>{text}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur </p>
    </div>
  )
}

export { ItemInfo };