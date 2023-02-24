import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        // log in
        console.log(userAuth)
      }else{
        //log out
      }
    });

    return unsubscribe; 
  }, []);


  return (
    <BrowserRouter>
      <div className="app">
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
