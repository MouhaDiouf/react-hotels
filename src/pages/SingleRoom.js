import React, { Component } from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import defaultBcg from '../images/room-1.jpeg';
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found....</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }
    return (
      <div>
        <p>Hello from single room page {room.name}</p>
        <Hero />
        <Banner />
      </div>
    );
  }
}
