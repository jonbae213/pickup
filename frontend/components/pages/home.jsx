import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     img_index: 0,
  //     content_index: 0,
  //   }
  // }

  render() {
    let things;
    let thingElements;
    if (Object.keys(this.props.things).length === 0) {
      thingElements = [];
    } else if (this.props.currentUser.hobby_ids.length > 0 
        && Object.keys(this.props.hobbies).length !== 0) {
      let hobbies = this.props.currentUser.hobby_ids.map((hobbyId) => {
        return this.props.hobbies[hobbyId] 
      });
      let thingArr = [];
      things = hobbies.forEach(hobby => {
        thingArr = thingArr.concat(hobby.thing_ids);
      });
      
      things = thingArr.map(thingId => {
        return this.props.things[thingId]
      });
      
      thingElements = things.map((thing, i) => {
        if (i < 3) {
          return (
            <li className="thing-item" key={i}>
              <h2 className="thing-name">{thing.name}</h2>
              <h3 className="thing-price">${thing.price}</h3>
              <h3 className="review-count">{thing.review_ids.length}</h3>
            </li>
          );
        }
      })
    } else {
      things = Object.values(this.props.things);
      thingElements = things.map((thing, i) => {
        if (i < 3) {
          return (
            <li className="thing-item" key={i}>
              <h2 className="thing-name">{thing.name}</h2>
              <h3 className="thing-price">${thing.price}</h3>
              <h3 className="review-count">{thing.review_ids.length}</h3>
            </li>
          );
        }
      })
    }
  
    

    return (
      <main className="home-section">
        <section className="home-things-header">
          <h1> RECOMMENDED THINGS </h1>
          <Link to="/all-hobbies">SEE ALL</Link>
        </section>
        <ul className="home-things-index">
          {thingElements}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.props.getAllThings();
    this.props.getAllHobbies();
  }
}

export default Home;