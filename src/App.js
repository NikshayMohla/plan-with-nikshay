import React, { useState } from "react";
import Tours from "./components/tours";
import Data from "./data";

const App = () => {
  const [tours, setTours] = useState(Data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
