import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import Contagion from './components/Contagion/Contagion';
import Symptoms from './components/Symptoms/Symptoms';
import Prevention from './components/Prevention/Prevention';
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {


  const [datas, setDatas] = useState([])

  useEffect(() => {
    getData();
  }, []);

  // const url = `https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?start=${0}&limit=${10}`

  const getData = async () => {
    const response = await fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search", {
      method: 'GET'
    })
    const data = await response.json();
    // console.log(data.data.rows)
    setDatas(data.data.rows)
    if (data.data.rows) {
      setDatas(data.data.rows)
    }
  }
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hero />
        <Overview />
        <Contagion />
        <Symptoms />
        <Prevention />
        <Dashboard
          key={datas.country}
           datas={datas}
         />

      </div>
    </div>
  )
}

export default App;