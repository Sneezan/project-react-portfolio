import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from 'components/MainPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>

  )
}
