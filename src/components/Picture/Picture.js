import React from 'react';


const Picture = props => (

	<div className="card mb-3 box-shadow border-dark">
	  <img className="img-fluid card-img-top border-dark" src={props.src} alt={props.name} id={props.id} onClick={props.onClick}/>
	</div>





);


export default Picture;





