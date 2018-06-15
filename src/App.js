import React, { Component } from 'react';
import './style.css';
// import Images from './components/Images';
import Picture from './components/Picture/Picture.js';
import cards from './cards.js';
// import pics from './pics.js';

let clickedImages = [];
console.log(cards);

class App extends Component {

  constructor (props) {
    super(props);
    
  }

  // Setting the initial state of the score component
  state = {
    score: 0,
    highScore: 0,
    clickedImages: [],
    cards: cards
    
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
        this.setState({ score: this.state.score + 1 }, () => {
          this.highScore();
          this.gameOverCheck();
          clickedImages.push(id);
        });
        
    
      
     }
  };

  incrementScore = () => {
    
    // this.gameOverCheck();

  };

  highScore = () => {
  if (this.state.score > this.state.highScore) {

    this.setState({ highScore: this.state.score});
    }
  };

gameOverCheck = () => {
  let youWon = "you won.  you have a great memory!"
if (this.state.score === this.state.cards.length) {

  alert(youWon);
  this.setState({score: 0});
}
};



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

{this.state.cards.map(card => (
  <Picture src={card.src} name={card.name} id={card.id} onClick={this.handleClick.bind(this, card.id)}/>

))}

</div>
    
    {/* <Images /> */}
  


      </div>
    );
  }
}

export default App;
