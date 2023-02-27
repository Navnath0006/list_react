import "./styles.css";
import React, { useState } from "react";
var shoppinglist = ["milk", "eggs", "apples", "tomato", "bread", "butter"];

export default function App() {
  // const [itemselected, setItemSelection] = useState("");
  // function selectedItem(event) {
  //   var item = event.target.value;
  //   var itemselected = shoppinglist[item];
  //   setItemSelection(itemselected);

  function getbgcolor(index) {
    if (index % 2 === 0) {
      return "yellow";
    }
    return "pink";
  }

  return (
    <div className="App">
      <h1> printing shopping list </h1>
      <ul>
        {/* <li>{shoppinglist[0]}</li>
        <li>{shoppinglist[1]}</li>
        <li>{shoppinglist[2]}</li>
        <li>{shoppinglist[3]}</li>
        <li>{shoppinglist[4]}</li>
        <li>{shoppinglist[5]}</li> */}
      </ul>
      <ol>
        {shoppinglist.map(function (item) {
          return <li>{item}</li>;
        })}
      </ol>
      <ul>
        {shoppinglist.map(function (item2, index) {
          return (
            <li style={{ backgroundColor: getbgcolor(index) }}>{item2}</li>
          );
        })}
      </ul>
    </div>
  );
}
