import React from 'react';


const Card = props => (

    <div className="card" onClick={() => props.handleClick(props.id)}>
        <img className="img-container" alt={props.name} src={props.src}/>
    </div>
);

export default Card;