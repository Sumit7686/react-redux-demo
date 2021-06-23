import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Increment / Decrement Counter</h1>
        <h4>Using React & Redux</h4>

        <div className="quantity">
          <p
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decNumber(5))}
          >
            <span>-</span>
          </p>
          <input
            name="quentity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <p
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incNumber(10))}
          >
            <span>+</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
