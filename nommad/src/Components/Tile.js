import React, { Component } from 'react';
import Profile from './Profile';

class Tile extends Component {
  constructor(props){
    super(props);

    this.state = {
      truck: this.props.truck,
      isProfileShowing: false
    }
    this._showProfile = this._showProfile.bind(this);
  }

  _showProfile() {
    if(!this.state.isProfileShowing){
      this.setState({
        isProfileShowing: true
      })
    }else{
      this.setState({
        isProfileShowing: false
      })
    }
  }

  render() {
    let sectionStyle = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${this.state.truck.image_url})`,
        backgroundSize: "cover"
      };

    return (
      <div className="tile" style={ sectionStyle } onClick={this._showProfile}>
         <h4>{this.state.truck.name}</h4>
        <div className="iconContainer">
          <img src={require('../images/nom.svg')} className="nom" alt=""/>
          <img src={require('../images/bubble.svg')} className="bubble" alt="" />
        </div>
        <div className="profilePage" style={{display: this.state.isProfileShowing ? 'flex' : 'none', height: '50vh'}}>
          <Profile truck={this.state.truck} />
        </div>
      </div>
    );
  }
}

export default Tile;
