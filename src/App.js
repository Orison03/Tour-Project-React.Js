import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) =>{
    const newTour = tours.filter((tour) =>{
      return tour.id !== id
    })
    setTours(newTour)
  }
  const fetchRequest = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } 
  if(tours.length === 0){
    return (
      <main>
        <h2>Sorry, no tour to visit</h2>
        <button onClick={()=> fetchRequest()} className="btn">refresh</button>
      </main>
    )
  }
  
  else return (
      <main>
        <Tours toursProp={tours} reomoveTourProp={removeTour}/>
      </main>
    );
}

export default App;
