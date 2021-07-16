import React from 'react'

function List(props) {
   const { itemList } = props;

   return (
      itemList.map((item) => (
         <p>{item}</p>
      ))
   );
}

export default List;