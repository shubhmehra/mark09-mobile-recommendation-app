import React, { useState } from "react";
import "./styles.css";

const mobilesDB = {
  "20000": [
    {
      name: "REDMI NOTE 10 PRO MAX",
      pros: "6GB RAM, 108MP Camera.",
      cons: "Mediocre camera performance."
    },
    {
      name: "IQOO Z3 5G",
      pros: "Reliable performance for day-to-day tasks and gaming.",
      cons: "Teardrop notch looks dated."
    },
    {
      name: "REALME 8 PRO",
      pros: "Versatile camera set-up.",
      cons: "No fast-refresh rate display."
    }
  ],
  "30000": [
    {
      name: "SAMSUNG GALAXY M31S",
      pros: "Good battery life.",
      cons: "Slow charging."
    },
    {
      name: "SAMSUNG GALAXY M31S.",
      pros: "Reliable performance.",
      cons: "No fast-refresh rate display."
    },
    {
      name: "REALME X7 5G",
      pros: "Satisfactory performance.",
      cons: "Display not colour accurate."
    }
  ],
  "35000": [
    {
      name: "MOTO G60",
      pros: "Big battery.",
      cons: "Basic design."
    },
    {
      name: "REALME NARZO 30 PRO",
      pros: "120Hz refresh rate display.",
      cons: "Lacklustre camera performance."
    },
    {
      name: "POCO X3 PRO",
      pros: "90Hz refresh rate display.",
      cons: "Bloatware-riddled UI."
    }
  ]
};

export default function App() {
  const [budget, setBudget] = useState("35000");

  const budgetSelector = (price) => {
    setBudget(price);
  };
  return (
    <div className="App">
      <h1>
        <span role="img" aria-labelledby="mobile">
          📱
        </span>
        Mobile Recommendations!
      </h1>
      <h4>
        See my recommendations for{" "}
        <span role="img" aria-labelledby="mobile">
          📱
        </span>
        in 2021!
      </h4>
      <h5>Select your Budget:</h5>
      <div>
        {Object.keys(mobilesDB).map((price) => {
          return (
            <button
              key={price}
              onClick={() => budgetSelector(price)}
              className={
                budget === price ? "button-selected" : "button-not-selected"
              }
            >
              {price} <span>₹</span>
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul style={{ listStyleType: "none" }}>
          {mobilesDB[budget].map((mobile) => {
            return (
              <li key={mobile.name}>
                <div className="details">
                  {/* Tried to add dynamic entry */}
                  {/* {Object.entries(mobile).map(([key, value]) => (
                    <p>
                      <span style={{ textTransform: "capitalize" }}>{key}</span>{" "}
                      - {value}
                    </p>
                  ))} */}
                  <h3>{mobile.name}</h3>
                  <p>Pros: {mobile.pros}</p>
                  <p>Cons: {mobile.cons}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
