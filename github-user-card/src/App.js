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
      followers: [],
      apiUser: 'leananepari'
    }
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData = () => {
    axios.get(`https://api.github.com/users/${this.state.apiUser}`)
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.apiUser !== this.state.apiUser) {
      this.setState({
        followers: []
      })
      this.fetchData();
    }
  }

  searchUser = (user) => {
    this.setState({
      apiUser: user
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
        <FormInput searchUser={this.searchUser}/>
        <UserCard user={this.state.user}/>
        <FollowersList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
