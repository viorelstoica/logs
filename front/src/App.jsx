import { AppProvider } from './Context'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'
import TheMenu from './TheMenu'
import TheFooter from './TheFooter'
import MainPage from './MainPage';
import Folders from './Folders';
import Tti from './Tti'
import TtiPerMin from './TtiPerMin'
import Graph1 from './Graph1'
import Test from './test/Test'
import Orders from './Orders'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TtiPerMinAndCateg from './TtiPerMinAndCateg'
import HeatMap from './HeatMap'

function App() {

  return (
    <AppProvider>
      <TheMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/folders" element={<Folders />} />
          <Route path="/tti" element={<Tti />} />
          <Route path="/ttipermin" element={<TtiPerMin />} />
          <Route path="/ttipermincateg" element={<TtiPerMinAndCateg />} />
          <Route path="/graph1" element={<Graph1 />} />
          <Route path="/heatmap" element={<HeatMap/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
      <TheFooter />
    </AppProvider>
  )
}

export default App