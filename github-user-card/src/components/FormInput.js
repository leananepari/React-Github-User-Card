import React from 'react';
import { Form } from 'semantic-ui-react'

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form style={{paddingTop: '30px'}} onSubmit={() => this.props.searchUser(this.state.user)}>
        <Form.Group>
          <Form.Input 
           placeholder='search user' 
           name='user' 
           value={this.state.user} 
           onChange={this.handleChange} 
          />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }
}

export default FormInput;