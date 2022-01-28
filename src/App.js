import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<HomePage />} exact />
        <Route path="*" component={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
