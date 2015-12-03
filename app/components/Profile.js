import React from 'react';
import Router from 'react-router';
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

import {helpers} from '../utils/helpers';

module.exports = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState(){
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },

  init(){
    let username = this.props.params.username;
    let childRef = this.ref.child(username);

    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(username)
      .then(function (data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      }.bind(this));
  },

  componentDidMount(){
    this.ref = new Firebase('https://blistering-heat-6574.firebaseio.com/');
    this.init();
  },

  componentWillUnmount(){
    this.unbind('notes');
  },

  componentWillReceiveProps(){  //when there's a route change
    this.unbind('notes');
    this.init();
  },

  handleAddNote(newNote){
    let childRef = this.ref.child(this.props.params.username);
    let newObj = childRef.push();
    newObj.set(newNote);
  },

  render(){
    const {username} = this.props.params;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={username} notes={this.state.notes} addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
});
