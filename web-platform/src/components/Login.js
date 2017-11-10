/**
 * @Author: Daniel Carlson <DanCarl857>
 * @Date:   2017-11-10T04:25:04+01:00
 * @Project: PL Meetup Application
 * @Last modified by:   DanCarl857
 * @Last modified time: 2017-11-10T04:39:59+01:00
 */
 import React from 'react'
 import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

 const Login = () => (
   <div className='login-form'>
     <style>{`
       body > div,
       body > div > div,
       body > div > div > div.login-form {
         height: 100%;
       }
     `}</style>
     <Grid
       textAlign='center'
       style={{ height: '100%', margin: 10 }}
       verticalAlign='middle'
     >
       <Grid.Column style={{ maxWidth: 450 }}>
         <Header as='h2' color='teal' textAlign='center'>
           {/*<Image src='../assets/logo.png' />
           {' '}Log-in to your account*/}
           Log-in to your account
         </Header>
         <Form size='large'>
           <Segment stacked>
             <Form.Input
               fluid
               icon='user'
               iconPosition='left'
               placeholder='E-mail address'
             />
             <Form.Input
               fluid
               icon='lock'
               iconPosition='left'
               placeholder='Password'
               type='password'
             />

             <Button color='teal' fluid size='large'>Login</Button>
           </Segment>
         </Form>
         <Message>
           New to us? <a href=''>Sign Up</a>
         </Message>
       </Grid.Column>
     </Grid>
   </div>
 )

 export default Login;
