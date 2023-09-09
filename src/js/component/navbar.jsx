// importar React
import React from "react";
//crear componente
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-xl text-light bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Services</a>
        <a className="nav-link" href= "#">Contact</a>
      </div>
    </div>
</nav>
	);
};
//exportar componente
export default Navbar;