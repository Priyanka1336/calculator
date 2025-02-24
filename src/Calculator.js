import React, { useState } from "react";

export default function Calculator() {
  const [exp, setExp] = useState("");
  const [ans, setAns] = useState("");
  const [isEvaluated, setIsEvaluated] = useState(false);

  const arr = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

  const handleClick = (event, element) => {
    if (element === "=") {
      try {
        // Evaluate the expression and store the result
        const result = eval(exp);
        setAns(result);
        setExp(result.toString()); // Continue calculation with the result
        setIsEvaluated(true);
      } catch (error) {
        setAns("Error");
      }
    } else if (element === "C") {
      setExp("");
      setAns("");
      setIsEvaluated(false);
    } else {
      // If the last operation was an evaluation
      if (isEvaluated) {
        // If the user clicks an operator after evaluation, continue the calculation
        if (["+", "-", "*", "/"].includes(element)) {
          setExp(ans.toString() + element);
          setIsEvaluated(false);
        } else {
          // If the user clicks a number, start a new expression
          setExp(element.toString());
          setAns("");
          setIsEvaluated(false);
        }
      } else {
        setExp((prev) => prev + element);
      }
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>React Calculator</h1>
      <input
        type="text"
        value={exp}
        readOnly
        style={{
          width: "250px",
          textAlign: "right",
          padding: "10px",
          fontSize: "20px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <p>{ans}</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "250px",
          margin: "auto",
        }}
      >
        {arr.map((element) => (
          <button
            key={element}
            style={{
              height: "50px",
              width: "50px",
              margin: "5px",
              fontSize: "20px",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
            }}
            onClick={(event) => handleClick(event, element)}
          >
            {element}
          </button>
        ))}
      </div>
    </div>
  );
}

// import React, { use, useState } from "react";

// export default function Calculator() {
//   const [exp, setExp] = useState("");
//   const [ans, setAns] = useState("");
//   const arr = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];
//   const handleClick = (event, element) => {
//     if (element == "=") {
//     } else {
//       setExp((prev) => prev + element);
//     }
//   };
//   console.log(exp);
//   return (
//     <div>
//       <h1>React Calculator</h1>
//       <input type="text" value={exp}></input>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           marginLeft: "550px",
//           marginRight: "550px",
//         }}
//       >
//         {arr.map((element) => (
//           <button
//             key={element}
//             style={{ height: "50px", width: "50px", margin: "20px" }}
//             onClick={(event) => handleClick(event, element)}
//           >
//             {element}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
