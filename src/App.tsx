import * as React from 'react';
import './App.css';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="text">
          It's an app to transform recorded audio and speech to the text file. I
          had come up with this idea when I thought about that it would be great
          to transform my audio records into the formal text. I know that there
          are a lot of solutions from Google and other which made this process
          easy. But it cost a little bit. And I decided to train my own neural
          network using JavaScript. Wish me luck.
        </p>
        <div className="controll">
          <button className="button">Click me</button>
        </div>
      </div>
    );
  }
}

export default App;
