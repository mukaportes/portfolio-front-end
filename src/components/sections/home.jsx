import React, { Component } from 'react';
import {
  Container,
  Icon,
  Header,
  Button
} from 'semantic-ui-react';

class HomeSection extends Component {
  render() {
    return (
      <Container text>
        <Header
          as='h1'
          content='MUKAPORTES'
          className='home-header'
          inverted
        />
        <Header
          as='h2'
          content='Software consulting services'
          className='home-sub-header'
          inverted
        />
        <Button primary size='huge'>
          Learn more
      <Icon name='right arrow' />
        </Button>
      </Container>
    );
  }
}

export default HomeSection;
