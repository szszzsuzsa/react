import "./App.css";
import React, {useState, useEffect} from "react";
import Hotels from './components/Hotels';
import LoadingMask from './components/LoadingMask';
import Subscription from './components/Subscription';




const App = () => {
  const [hotel, setHotels] = useState(null);
  const [showSub, setShowSub] = useState(null);
  const [response, setResponse] = useState(null);

  const url = "api/hotels";

  const getHotels = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setHotels(data);
    } catch (error) {
      setResponse(false);
    }
  };

  const subHandler = () => {
    setTimeout(function () {
      setShowSub(true)
    }, 5000)
  }

  useEffect(() => {
    getHotels()
    subHandler()
  }, [])






  return (
    <div className="App">
      
      {hotel !== null ? hotel.map((hotel, index) => <Hotels key={index} hotel={hotel} />) :<LoadingMask />}
    
    {showSub && <Subscription />}
    </div>
  );
};

export default App;
