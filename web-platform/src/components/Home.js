/**
 * @Author: Daniel Carlson <DanCarl857>
 * @Date:   2017-11-10T03:40:13+01:00
 * @Project: PL Meetup Application
 * @Last modified by:   DanCarl857
 * @Last modified time: 2017-11-10T03:43:37+01:00
 */
import React, { Component } from 'react'
// import of image.js whitch contains refference of image

import semantic from '../image/semantic.png'
import react from '../image/react.png'
import reactt from '../image/reactt.png'
import angular from '../image/angular.png'
import angular2 from '../image/angular2.jpeg'
import pwa from '../image/pwa.png'
import java from '../image/java.jpeg'
import node from '../image/node.png'
import dev from '../image/dev.jpeg'
import pl from '../image/pl.JPG'
import pi from '../image/pi.jpeg'
import bg from '../image/bg.png'




import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Card
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class Home extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  //state = {}
  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { activeItem } = this.state
    const { visible } = this.state

    return (
      <div>
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em', backgroundImage: "url(" + require('../image/pi.jpeg') + ")", backgroundSize: "cover" }}
            vertical
          >
            <Menu pointing secondary size="huge" color="red">
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Menu position='right'>
                <Menu.Item name='SignUp' active={activeItem === 'SignUp'} onClick={this.handleItemClick} />
                <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />
              </Menu.Menu>
            </Menu>

            {/*}  <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>Log in</Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>
    */}

            <Container text >
              <Header
                as='h1'
                content='Programming Language Meetups'
                inverted
                style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                color="red"
              />
              <Header
                as='h2'
                content='You no longer have an excuse'
                inverted
                style={{ fontSize: '1.3em', fontWeight: 'normal', marginBottom: 10,  }}
                color="#8b9a71"
              />
              <Button primary size='huge'>
                Get Started
                 <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <br />
        <Container text textAlign="center" color="" >
          <h1>Open Source Guides</h1>
          <h2>Open source software is made by people just like you. Learn how to launch and grow your project. </h2>
        </Container>
        <br />

        <Segment 
          style={{  backgroundImage: "url(" + require('../image/bg.png') + ")"}}
        >
          <Card.Group itemsPerRow="4" stackable="true" >
            <Card>
              <Card.Content>
                <Card.Meta>DevFest 2017</Card.Meta>
                <Card.Header>Reactjs</Card.Header>
                <Image floated='right' src={react} alt="sadone" />
                <Card.Description>React is a javascript library.</Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Nodejs</Card.Header>
                <Card.Meta>DevFest 2017</Card.Meta>
                <Image floated='right' src={node} alt="sadone" />
                <Card.Description>Nodejs is a javascript library.</Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Angularjs</Card.Header>
                <Card.Meta>DevFest 2017</Card.Meta>
                <Image floated='right' src={angular2} alt="sadone" />
                <Card.Description>Angularjs is a javascript library.</Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Sementic</Card.Header>
                <Card.Meta>DevFest 2017</Card.Meta>
                <Image floated='right' src={semantic} alt="sadone" />
                <Card.Description>Sementic is a styling for javascript framework.</Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>pwa</Card.Header>
                <Card.Meta>DevFest 2017</Card.Meta>
                <Image floated='right' src={pwa} alt="sadone" />
                <Card.Description>progressive app.</Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>javascript</Card.Header>
                <Card.Meta>DevFest 2017</Card.Meta>
                <Image floated='right' src={java} alt="sadone" />
                <Card.Description>.</Card.Description>
              </Card.Content>
            </Card>

          </Card.Group>
        </Segment>
        <Segment
          style={{ backgroundImage: "url(" + require('../image/bg.png') + ")" }}
        >
          <h3>copyright</h3>
        </Segment>

      </div>
    )
  }
}
