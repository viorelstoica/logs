import { useState } from 'react'
import { AppProvider } from './Context'
import { BrowserRouter, Routes, Route } from 'react-router'
import TheMenu from './TheMenu'
import TheFooter from './TheFooter'
import MainPage from './MainPage';
import Folders from './Folders';
import Tti from './Tti'
import TtiPerMin from './TtiPerMin'
import Graph1 from './Graph1'
import Test from './Test'
import Orders from './Orders'
import GwpTimeSpent from './GwpTimeSpent'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TtiPerMinAndCateg from './TtiPerMinAndCateg'
import HeatMap from './HeatMap'

function App() {

  const [date, setDate] = useState("")

  return (
    <AppProvider>
      <TheMenu onDate={setDate}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/folders" element={<Folders />} />
          <Route path="/tti" element={<Tti />} />
          <Route path="/ttipermin" element={<TtiPerMin />} />
          <Route path="/ttipermincateg" element={<TtiPerMinAndCateg />} />

          <Route path="/gwptimespent" element={<GwpTimeSpent date={date}/>} />

          <Route path="/graph1" element={<Graph1 />} />
          <Route path="/heatmap" element={<HeatMap/>} />
          
          <Route path="/orders" element={<Orders/>} />
          <Route path="/test" element={<Test date={date}/>} />
        </Routes>
      </BrowserRouter>
      <TheFooter />
    </AppProvider>
  )
}

export default App