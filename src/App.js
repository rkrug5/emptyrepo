import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>Your Project</h1>
          <p>
            Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris magna exercitation.
            Aliquip reprehenderit magna elit cillum adipisicing dolore aliquip velit. Ipsum ullamco
            nostrud tempor eu deserunt ipsum incididunt fugiat esse ipsum. Exercitation nostrud
            exercitation sit ex nostrud aliqua officia magna nostrud deserunt et esse eu deserunt. Non
            dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
          </p>
        </div>
        <div className="card">
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
        </div>







      </div>
    );
  }
}

export default App;
