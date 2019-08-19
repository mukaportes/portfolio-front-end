import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

// TODO: Update <Search> usage after its will be implemented

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top'>
          <Menu.Item
            name='home'
            active={activeItem === 'editorials'}
            onClick={this.handleItemClick}
          >
            <b>MUKAPORTES</b>
          </Menu.Item>

          <Dropdown item text='About Me' simple>
            <Dropdown.Menu>
              <Dropdown.Item href="/about/intro">Intro</Dropdown.Item>
              <Dropdown.Item href="/about/skills">Skills</Dropdown.Item>
              {/* <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text='Jobs' simple>
            <Dropdown.Menu>
              <Dropdown.Item href="/jobs/front-end">Front-end</Dropdown.Item>
              <Dropdown.Item href="/jobs/back-end">Back-end</Dropdown.Item>
              <Dropdown.Item href="/jobs/others">Others</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text='Content' simple>
            <Dropdown.Menu>
              <Dropdown.Item href="/content/articles">Articles</Dropdown.Item>
              <Dropdown.Item href="/content/tutorials">Tutorials</Dropdown.Item>
              <Dropdown.Item href="/content/packages">Packages</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
            href='/contact'
          >
          </Menu.Item>

          <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
              <div className='ui transparent icon input'>
                <input className='prompt' type='text' placeholder='Search...' />
                <i className='search link icon' />
              </div>
              <div className='results' />
            </div>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavBar;