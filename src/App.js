import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light  navbar-fixed-top " style={{ background: 'red' }}>
          <a className="navbar-brand" href="#"></a>

          <h1 style={{ color: 'white' }}>Clicky</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <h3> Click the pictures only once.</h3>
              </li>

            </ul>
            <span className="navbar-text" style={{ color: 'white' }}>
              Current Score
        </span>
            <span className="navbar-text" style={{ color: 'white' }}>
              High Score
        </span>
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
            <div className="col-md-3">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon1.jpg" alt="Card image cap" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon2.jpg" alt="Card image cap" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top border-dark" src="./images/mon3.jpg" alt="Card image cap" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top border-dark" src="./images/mon4.jpg" alt="Card image cap" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon5.jpg" alt="Card image cap" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon6.jpg" alt="Card image cap" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon7.jpg" alt="Card image cap" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 box-shadow border-dark">
                <a className="charId">
                  <img className="img-fluid card-img-top" src="./images/mon8.jpg" alt="Card image cap" />
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
