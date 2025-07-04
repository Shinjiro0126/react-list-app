import React from "react";
import Postcard from "./Postcard";
import './WishList.css';

export default function WishList({wishes, onRemoveWish}: {wishes: string[], onRemoveWish: (wish: string) => void}) {
  return (
    <div className="wish-wall">
      {wishes.map((wish, index) => (
        <Postcard key={index} wish={wish} onRemoveWish={onRemoveWish} />
      ))}
    </div>
  );
}