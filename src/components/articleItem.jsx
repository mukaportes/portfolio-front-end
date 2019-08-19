import React from 'react';
import { Button, Icon, Item, Label, Image } from 'semantic-ui-react';

const paragraph = <Image src='/assets/images/wireframe/short-paragraph.png' />;

const ItemDivided = () => (
  <Item.Group divided>
    <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>The Force Awakens</Item.Header>
        <Item.Meta>
          <span className='cinema'>IMAX</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Rogue One</Item.Header>
        <Item.Meta>
          <span className='cinema'>Fox Cinema</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>The Last Jedi</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ItemDivided;