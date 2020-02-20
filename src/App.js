import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects'
import Socials from './Socials'
import './index.css'

class App extends Component {
  state = {
    displayBio: true
  }
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio})
  }
  render(){
    return (
      <>
            <h1>Hello!</h1>
            <p>My name is David. I'm a Software Engineer</p>
            <p>I'm always looking forward to working on meaningful projects.</p>
          {
            this.state.displayBio ? (
            <button onClick={this.toggleDisplayBio}>Read More</button>
          ) : (          
            <div>
              <p>I live in San Francisco, and code every day.</p>
              <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love music and ramen!</p>
              <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
            )
          }
          
          <hr />

          <Projects />

          <hr />

          <Socials />
    </>
    );
  }
}
export default App;
