import React from 'react'
import { Route, Routes } from 'react-router'
import { Videos } from './pages/Videos'
import Home from './pages/Home'
import { Test } from './pages/Test'


export default function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/test" element={<Test />} />

      </Routes>
    </>
  )
}
