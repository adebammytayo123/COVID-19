import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import Contagion from './components/Contagion/Contagion';
import Dashboard from './components/Dashboard/Dashboard';
import Prevention from './components/Prevention/Prevention';
import Symptoms from './components/Symptoms/Symptoms';
import Hero from './components/Hero/Hero';


class App extends Component {
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Hero />
         <Overview />
         <Contagion />
          <Symptoms />
          <Prevention />
            <Dashboard />
       </div>
      </div>
    )
  }
}

export default App


// import React, { Component } from 'react'
// import './App.css';
// import Header from './components/Header/Header';
// import Overview from './components/Sections/Overview';
// import Contagion from './components/Sections/Contagion';
// import Dashboard from './components/Sections/Dashboard';
// import Prevention from './components/Sections/Prevention';
// import Treatment from './components/Sections/Treatment';
// import Symptoms from './components/Sections/Symptoms';
// import comfort from './comfort.jpg';
// import SideDeawer from './components/SideDrawer/SideDeawer';
// import Backdrop from './components/Backdrop/Backdrop';

// class App extends Component() {
//   state = {
//     sideDrawerOpen: false
//   }

//   DrawerToggleClickHandler = () => {
//     this.setState((prevState) => {
//       return {sideDrawerOpen : !prevState.sideDrawerOpen }
//     });
//   }


//   render() {
  

//     return (
//       <div style={{ height: "100vh" }}>
//       <Header />
//         <SideDeawer />
//         <Backdrop />
//       <div className="main">
//         <section className="hero">
//           <div className="hero-info">
//             <h1 className="title">HIV/AIDS Awareness</h1>
//             <h3 className="sub-title">Hiv is not a death sentence. You can still a healthy Life.</h3>
//             <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima voluptate dolorum fugit, ut quia tempore facere sit laudantium dolores, mollitia laboriosam dicta enim vitae quo! Similique dolorum iste accusantium quidem quibusdam soluta, nisi totam sint rem eaque exercitationem. Expedita qui perferendis aperiam quae error sed, excepturi amet in consequatur fugit.</p>
//             <button className="help-button">
//               <a href="https://www.who.int/news-room/fact-sheets/detail/hiv-aids">we can help</a>
//             </button>
//           </div>
//           <div className="hero-image">
//             <img src={comfort} alt="" />
//           </div>
//         </section>
//         <Overview />
//         <Contagion />
//         <Prevention />
//         <Symptoms />
//         <Treatment />
//         <Dashboard />
//       </div>
//     </div>
//     )
//   };
// }


// export default App;
