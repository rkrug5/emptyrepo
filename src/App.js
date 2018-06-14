import React, { Component } from 'react';
import './style.css';
// import Images from './components/Images';
import Card from './components/Card';
// import cards from './components/cards.json';
// import pics from './pics.json';

let clickedImages = [];


class App extends Component {

  constructor (props) {
    super(props);
    
  }
  // let clickedPics = [];

  // Setting the initial state of the score component
  state = {
    score: 0,
    highScore: 0,
    clickedImages: []
    
  };


  // handleIncrement increases this.state.score by 1
  // handleScoreIncrement = () => {
    // We always use the setState method to update a component's state
    // this.setState({ score: this.state.score + 1 });
  // };


  handleClick = id => {
      // check clickedArr to see if id is there
      if (clickedImages.indexOf(id) !== -1) {
        //this would mean the image id is already part of the array
        //therefore it is an incorrect choice and the game is over
        alert('You already chose that image.  Game Over.');
        this.setState({score:0});
        clickedImages = [];
      
        
 
        console.log(JSON.stringify("Array: " + clickedImages));
      } 
      
      else{
        this.incrementScore();
        
    this.highScore();


    clickedImages.push(id);
      

      }





  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
    this.gameOverCheck();

  };

  highScore = () => {
if (this.state.score >= this.state.highScore) {

    this.setState({ highScore: this.state.score});
}
  };

gameOverCheck = () => {
  let youWon = "you won.  you have a great memory!"
if (this.state.score === 9 ) {

  alert(youWon);
  this.setState({score: 0});
}
};



  

  
  pushSelection = id => {

clickedImages.push(this.id);
  };
  //THIS COPY PASTED CODE FOR TESTING/DEVLOPMENT
  // handleDecrement decreases this.state.count by 1
  // handleDecrement = () => {
  // We always use the setState method to update a component's state
  // this.setState({ count: this.state.count - 1 });
  // };















  render() {
    return (
      <div className="App">



        <nav className="navbar navbar-expand-lg navbar-light fixed-top " style={{ background: 'red' }}>
          <h1 id='logo' style={{ color: 'white' }}>Clicky</h1>
       
            <div className="navbar-text" id='score'>
              
              <h3 className="card-text"> Current Score: {this.state.score}</h3>
        </div>
        <div className="navbar-text" id='highscore'>
              
              <h3 className="card-text"> High Score: {this.state.highScore}</h3>
        </div>
        </nav>





        <div className="jumbotron">
          <h1>Hi. Welcome to the game.</h1>
          <p>
            This game will test your memory.  The objective is to click on each picture just once.  When you get to 9, you win.  However, if you click on the same image twice the game will end.
          </p>
        </div>

<div className="container">

<div className="row">
  <div className="col-md-4">
  <div className="card mb-3 box-shadow border-dark">
    <a className="charId">
    <img className="img-fluid card-img-top" src="./images/mon1.jpg" alt="Monsoon 1" id="1" onClick={this.handleClick}/>
    </a>
  </div>
  </div>
  <div className="col-md-4">
  <div className="card mb-3 box-shadow border-dark">
    <a className="charId">
    <img className="img-fluid card-img-top" src="./images/mon2.jpg" alt="Monsoon 2" id="2" onClick={this.handleClick}/>
    </a>
  </div>
  </div>
  <div className="col-md-4">
  <div className="card mb-3 box-shadow border-dark">
    <a className="charId">
    <img className="img-fluid card-img-top border-dark" src="./images/mon3.jpg" alt="Monsoon 3" id="3" onClick={this.handleClick}/>
    </a>
  </div>
  </div>
  <div className="col-md-4">
  <div className="card mb-3 box-shadow border-dark">
    <a className="charId">
    <img className="img-fluid card-img-top border-dark" src="./images/mon4.jpg" alt="Monsoon 4" id="4" onClick={this.handleClick}/>
    </a>
  </div>
  </div>
  <div className="col-md-4">
  <div className="card mb-3 box-shadow border-dark">
    <a className="charId">
    <img className="img-fluid card-img-top" src="./images/mon5.jpg" alt="Monsoon 5" id="5" onClick={this.handleClick}/>
    </a>
  </div>
  </div>
  <div className="col-md-4">
  <div className="card mb-3 box-shadow border-dark">
    <a className="charId">
    <img className="img-fluid card-img-top" src="./images/mon6.jpg" alt="Monsoon 6" id="6" onClick={this.handleClick}/>
    </a>
  </div>
  </div>
  <div className="col-md-4">
  <div className="card mb-3 box-shadow border-dark">
    <a className="charId">
    <img className="img-fluid card-img-top" src="./images/mon7.jpg" alt="Monsoon 7" id="7" onClick={this.handleClick}/>
    </a>
  </div>
  </div>
  <div className="col-md-4">
  <div className="card mb-3 box-shadow border-dark">
    <a className="charId">
    <img className="img-fluid card-img-top" src="./images/mon10.jpg" alt="Monsoon 8" id="8" onClick={this.handleClick}/>
    </a>
  </div>
  </div>
  <div className="col-md-4">
  <div className="card mb-3 box-shadow border-dark">
    <a className="charId">
    <img className="img-fluid card-img-top" src="./images/mon9.jpg" alt="Monsoon 9" id="9" onClick={this.handleClick}/>
    </a>
  </div>
  </div>
</div>


</div>
    
    {/* <Images /> */}
  


      </div>
    );
  }
}

export default App;
