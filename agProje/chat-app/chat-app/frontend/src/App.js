
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import HomePage from './Pages/HomePage';
import ChatPage from "./Pages/ChatPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element = {<HomePage/>}/>
        <Route path= "/api/chat" element = {<ChatPage/>}/>
      </Routes>
    </div>
 
  );
}

export default App;
