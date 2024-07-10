import React, { useState } from "react";
import Tours from "./components/tours";
import Data from "./data";

const App = () => {
  const [tours, setTours] = useState(Data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

if(tours.length===0){
  return(
    <div className="refresh">
      <h2>Not Tours Left</h2>
      <button className="btn-white" onClick={()=>setTours(Data)}>Refresh</button>
    </div>
  )
}

  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
