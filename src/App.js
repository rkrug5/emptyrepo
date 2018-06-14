import React, { Component } from 'react';
import './style.css';







// import Images from './components/Images';
class App extends Component {


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


  handleClick = () => {
    // this.setState({ score: this.state.score + 1 });
    // this.handleScoreIncrement();
    this.incrementScore();
    this.pushSelection();

  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
    this.gameOverCheck();


  };

  highScore = () => {
if (this.score >= this.highScore) {

    this.setState({ highScore: this.state.highScore + 1 });
}
  }
gameOverCheck = () => {
  let youWon = "you won.  you have a great memory!"
if (this.state.score === 9 ) {

  alert(youWon);
  this.setState({score: 0});
}
};



  

  
  pushSelection = () => {
    let clickedImages = [];



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
        </nav>





        <div className="jumbotron">
          <h1>Hi. Welcome to the game.</h1>
          <p>
            This game will test your memory.  The objective is to click on each picture just once.  When you get to 8, you win.  However, if you click on the same image twice the game will end.
          </p>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon1.jpg" alt="Monsoon 1" onClick={this.handleClick}/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon2.jpg" alt="Monsoon 2" onClick={this.handleClick}/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top border-dark" src="./images/mon3.jpg" alt="Monsoon 3" onClick={this.handleClick}/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top border-dark" src="./images/mon4.jpg" alt="Monsoon 4" onClick={this.handleClick}/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon5.jpg" alt="Monsoon 5" onClick={this.handleClick}/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon6.jpg" alt="Monsoon 6" onClick={this.handleClick}/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon7.jpg" alt="Monsoon 7" onClick={this.handleClick}/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon10.jpg" alt="Monsoon 8" onClick={this.handleClick}/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon9.jpg" alt="Monsoon 9" onClick={this.handleClick}/>
                </a>
              </div>
            </div>
          </div>


        </div>


















        {/* <div className="card">
          <div className="img-container">
            <img alt='trump' src='./images/stand.jpg' />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong>
              </li>
              <li>
                <strong>Occupation:</strong>
              </li>
              <li>
                <strong>Location:</strong>
              </li>
            </ul>
          </div>
        </div> */}







      </div>
    );
  }
}

export default App;
