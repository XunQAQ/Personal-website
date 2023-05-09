import React, {useState} from 'react';
import Landing from "../Landing";
import Experience from "../Experience";
import Navbar from '../Navbar';
import Cards from '../Cards';
import Footer from '../Footer';
import { About } from '../About';


  export function HomePage() {

    return (
      <div className="home" id="home">
        <Navbar header="Home"/>
        <Landing />
        <About />
        <Experience />
        <Cards />
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }

  export default HomePage;
