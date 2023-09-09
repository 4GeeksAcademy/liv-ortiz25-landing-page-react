// importar React
import React from "react";
//crear componente
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg text-white bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
      <div className="navbar-nav">
        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a className="nav-link text-white-50" href="#">About</a>
        <a className="nav-link text-white-50" href="#">Services</a>
        <a className="nav-link text-white-50" href= "#">Contact</a>
      </div>
    </div>
</nav>
	);
};
//exportar componente
export default Navbar;