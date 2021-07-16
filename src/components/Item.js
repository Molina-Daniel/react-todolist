import React from "react";

function Item(props) {
   const { item } = props;
   const [isChecked, setIsChecked] = React.useState(false);

   const handleChecking = () => {
      if (isChecked) {
         setIsChecked(false);
      } else {
         setIsChecked(true);
      }
   }

   return (
      <div>
         <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleChecking()}
         >
         </input>
         <label>{item}</label>
      </div>
   );
}

export default Item;