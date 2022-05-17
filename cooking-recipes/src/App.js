import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Nav } from './Nav';
import { Back } from './Back';
import { Welcome } from './Welcome';
import { NotFound } from './NotFound';
import Register from './Register';
import Login from './Login';
import RecipeForm from './RecipeForm';

function App() {
  const [activeUser, setActiveUser] = useState(undefined);
  const registerUser = user => {
    let uuid = window.crypto.randomUUID().substring(1,24);
    window.localStorage.setItem(uuid, JSON.stringify({
      firstName: user.firstName,
      username: user.username,
      password: user.password,
      sex: user.sex,
      role: user.role,
      avatar: user.avatar,
      summary: user.summary,
      active: user.active,
      registrationDateTime: user.registrationDateTime,
      lastModificationDateTime: user.lastModificationDateTime
    }));

    console.log("GG");
  }

  const addRecipe = recipe => {
    
  }

  const login = (username, password) => {
    for (let i = 0; i < localStorage.length; i++) {
      let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log(username);
      console.log(password);
      //console.log(user);
      if (user.username === username && user.password === password) {
        setActiveUser(localStorage.key(i));
        return true;
      }
    }

    return false;
  }
  
  const logout = () => {
    setActiveUser(undefined);
  }

  return (
    <BrowserRouter>
      <Nav activeUser={activeUser} onLogout={logout}/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/register' element={<Register onAddUser={registerUser} />} />
        <Route path='/login' element={<Login onLogin={login} />} />
        <Route path='/create-recipe' element={<RecipeForm onAddRecipe={addRecipe} />} />
        <Route path='*' element={<NotFound />} /> 
      </Routes>
      <Back/>
    </BrowserRouter>
  );
}

export default App;
