import React from 'react';

class UserProfile extends React.Component{
  static propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  }

  render(){
    const {bio} = this.props;
    return(
      <div>
        <h3>User Profile</h3>
        <ul className="list-group">
          {bio.avatar_url && <li className="list-group-item"><img src={bio.avatar_url} className="img-thumbnail" /></li>}
          {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
          {bio.login && <li className="list-group-item">Username: {bio.login}</li>}
          {bio.email && <li className="list-group-item">Email: {bio.email}</li>}
          {bio.company && <li className="list-group-item">Company: {bio.company}</li>}
          {bio.location && <li className="list-group-item">Location: {bio.location}</li>}
          {bio.blog && <li className="list-group-item">Blog: <a href="{bio.blog}">{bio.blog}</a></li>}
        </ul>
      </div>
    )
  }
};

export default UserProfile;
