import React from 'react'
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";


function Properties() {
  return (
    <div className="properties">

      <div className="prop">
        <img src={icon1} alt="icon1" />
        <h1>Declarative</h1>
        <p>React makes it paintless to create interactive UIs.</p>
      </div>

      <div className="prop">
        <img src={icon2} alt="icon2" />
        <h1>Components</h1>
        <p>Build encapsulated components that manade their state.</p>
      </div>

      <div className="prop">
        <img src={icon3} alt="icon3" />
        <h1>Single-Way</h1>
        <p>A set of inmutable values are passed to the components.</p>

      </div><div className="prop">
        <img src={icon4} alt="icon4" />
        <h1>JSX</h1>
        <p>Statically-typed designed to run on modern browsers.</p>
      </div>
    </div>

  )
}

export default Properties
