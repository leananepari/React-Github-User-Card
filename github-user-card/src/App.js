import React from 'react';
import './App.css';
import axios from 'axios';
import FollowersList from './components/FollowersList';
import UserCard from './components/UserCard';
import FormInput from './components/FormInput';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      followers: []
    }
  }

  componentDidMount () {
    axios.get('https://api.github.com/users/leananepari')
    .then(res => {
      return res.data
    })
    .then(user => {
      axios.get(user.followers_url)
      .then(res => {
        this.setState({
          user: user
        })
        res.data.forEach(item => {
          this.getFollower(item.url)
        })
      })
    })
  }

  componentDidUpdate = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      return res.data
    })
    .then(user => {
      axios.get(user.followers_url)
      .then(res => {
        this.setState({
          user: user
        })
        this.setState({
          followers: []
        })
        res.data.forEach(item => {
          this.getFollower(item.url)
        })
      })
    })
  }

  getFollower = (url) => {
    axios.get(url)
    .then(res => {
      this.setState({
        followers: [...this.state.followers, res.data]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <FormInput searchUser={this.componentDidUpdate}/>
        <UserCard user={this.state.user}/>
        <FollowersList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
