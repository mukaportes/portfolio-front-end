import PropTypes from 'prop-types'
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
          content='Imagine-a-Company'
          className='home-header'
          inverted
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          className='home-sub-header'
          inverted
        />
        <Button primary size='huge'>
          Get Started
      <Icon name='right arrow' />
        </Button>
      </Container>
    );
  }
}

export default HomeSection;
