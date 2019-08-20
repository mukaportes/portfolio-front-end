import React, { Component } from 'react';
import {
  Container,
  Icon,
  Header,
  Button
} from 'semantic-ui-react';

const phrases = [
  'Needs consulting services to enhance code quality?',
  'Needs a full-stack software engineer to build your idea from scratch?',
  'Needs a software engineer to refactor your codebase?',
  'Needs a software engineer to set a pattern to your codebase?',
  'Needs a programmer to review your codebase?',
  'Needs a software engineer to help with an ongoing project?',
];

class HomeSection extends Component {
  constructor() {
    super();
    this.state = { currentPhrase: 0, phrases };
  }

  componentDidMount() {
    var thiz = this;
    let phrases = this.state.phrases;
    let currentPhrase = this.state.currentPhrase;
    
    setInterval(function () {
      let newPhrase = currentPhrase += 1;
      if (newPhrase > phrases.length) newPhrase = 0;

      thiz.setState({ phrases, currentPhrase: newPhrase });
    }, 1000);
  }

  render() {
    let content = this.state.currentPhrase;

    return (
      <Container text>
        <div class="typewriter">
          <h1>{content}</h1>
        </div>
      </Container >
    );
  }
}

export default HomeSection;
