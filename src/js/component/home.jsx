import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
	<div>
        <Navbar/>
	      <div class="container">
		   <Jumbotron/>
		   <br/>
		   <Card/>
		   <br/>
		  </div>
		  
		<Footer/>
	</div>
	);
};

export default Home;
