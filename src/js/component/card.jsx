// importar React
import React from "react";
//crear componente
const Card = () => {
	return (
		<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col text-center">
    <div className="card h-100">
      <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="img"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi in nobis ex quaerat, excepturi autem architecto alias vitae reiciendis sapiente ullam nam eos ipsam est dolore ea quo necessitatibus similique.</p>
      </div>
      <div className="card-footer">
	  <button className="btn btn-primary btn-sm" type="button">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="col text-center">
    <div className="card h-100">
      <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="img"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis ex debitis exercitationem molestias, a, assumenda velit commodi ut incidunt nisi? Dolore excepturi accusamus cumque sapiente maiores quam?.</p>
      </div>
      <div className="card-footer">
	  <button className="btn btn-primary btn-sm" type="button">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="col text-center">
    <div className="card h-100">
      <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="img"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem. Reiciendis eaque, tempora eos necessitatibus obcaecati consectetur quaerat explicabo , expedita doloribus dicta, omnis aliquam dolore!</p>
      </div>
      <div className="card-footer">
	  <button className="btn btn-primary btn-sm" type="button">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="col text-center">
    <div className="card h-100">
      <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="img"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt non facere excepturi omnis ducimus perspiciatis vel delectus, numquam voluptatum. Ex impedit, magnam corrupti perferendis tempore fuga.</p>
      </div>
      <div className="card-footer">
	  <button className="btn btn-primary btn-sm" type="button">Find Out More!</button>
      </div>
    </div>
  </div>
</div>
	);
};
//exportar componente
export default Card;