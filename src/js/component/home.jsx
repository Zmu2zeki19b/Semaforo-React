import React, { useState } from "react"; 
import "../../styles/home.css";  


const TrafficLight = () => {
	const [color, setColor] = useState("red");
	const [extraColor, setExtraColor] = useState(false);
	const handleClick = (selectedColor) => {
	  if (selectedColor === "purple" && extraColor) {
		setColor("purple");  
	  } else if (selectedColor !== "purple") {
		setColor(selectedColor); 
	  }
	};
	const toggleColor = () => {
	  const colors = extraColor ? ["red", "yellow", "green", "purple"] : ["red", "yellow", "green"];
	  const nextColor = colors[(colors.indexOf(color) + 1) % colors.length];
	  setColor(nextColor);
	};
	const addPurple = () => {
	  setExtraColor(!extraColor); 
	};
	return (
	  <div className="traffic-light">
		<div
		  className={`light ${color === "red" ? "active" : ""}`}
		  id="red"
		  onClick={() => handleClick("red")}
		></div>
		<div
		  className={`light ${color === "yellow" ? "active" : ""}`}
		  id="yellow"
		  onClick={() => handleClick("yellow")}
		></div>
		<div
		  className={`light ${color === "green" ? "active" : ""}`}
		  id="green"
		  onClick={() => handleClick("green")}
		></div>
		{extraColor && (
		  <div
			className={`light ${color === "purple" ? "active" : ""}`}
			id="purple"
			onClick={() => handleClick("purple")}
		  ></div>
		)}
		<button onClick={toggleColor}>Alternar Color</button>
		<button onClick={addPurple}>Añadir color púrpura</button>
	  </div>
	);
  };
const Home = () => {
  return (
    <div className="home">
      <h1>Semáforo Interactivo</h1>
      <TrafficLight />
    </div>
  );
};
export default Home;
