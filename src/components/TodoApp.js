import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../routes/About';
import Home from '../routes/Home';
import LogIn from '../routes/LogIn';
import NotMatch from '../routes/NotMatch';
import Profile from '../routes/Profile';

function TodoApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default TodoApp;
