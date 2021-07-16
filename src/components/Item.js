import React from "react";

function Item(props) {
   const { item } = props;

   return (
      <p>{item}</p>
   );
}

export default Item;