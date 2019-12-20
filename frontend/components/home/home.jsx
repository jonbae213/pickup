import React from 'react';
import { Link } from 'react-router-dom';
import HomeCarousel from './home_carousel';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: this.props.currentUser.thing_ids,
    }
    this.bookmarkIcon = this.bookmarkIcon.bind(this);
    this.saveAndUnsave = this.saveAndUnsave.bind(this);
  }
  
  bookmarkIcon(id) {
    if (this.props.currentUser.thing_ids.includes(id)) {
      return <img src={window.bookmarkedIcon} className="bookmark-icon" />
    } else {
      return <img src={window.bookmarkIcon} className="bookmark-icon" />
    }
  }

  saveAndUnsave(e) {
    e.preventDefault();
    const thingId = Number(e.currentTarget.parentElement.parentElement.attributes.idnum.value);
    let newArr;
    
    if (this.props.currentUser.thing_ids.includes(thingId)) {
      newArr = this.state.saved.filter(id => {
        id !== thingId
      });
      this.props.unsaveTheThing(thingId)
        .then(this.setState({ saved: newArr }));
    } else {
      newArr = this.state.saved.concat([thingId])

      this.props.saveTheThing(thingId)
        .then(this.setState({ saved: newArr }));
    }
  }

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
        if (i < 4) {
          return (
            <li className="thing-item" key={thing.id} idnum={thing.id}>
              <section className="bookmark-holder">
                <button onClick={this.saveAndUnsave}>
                  {this.bookmarkIcon(thing.id)}
                </button>
              </section>
              <Link to={`/things/${thing.id}`}>
                <h2 className="thing-name">{thing.name}</h2>
                <h3 className="thing-price">${thing.price}</h3>
                <div className="reviews">
                  <img src={window.reviewIcon} className="review-icon" />
                  <h3 className="review-count">{thing.review_ids.length}</h3>
                </div>
              </Link>
            </li>
          );
        }
      })
    } else {
      things = Object.values(this.props.things);
      thingElements = things.map((thing, i) => {
        if (i < 4) {
          return (
            <li className="thing-item" key={thing.id} idnum={thing.id}>
              <section className="bookmark-holder">
                <button onClick={this.saveAndUnsave}>
                  {this.bookmarkIcon(thing.id)}
                </button>
              </section> 
              <Link to={`/things/${thing.id}`}>
                <h2 className="thing-name">{thing.name}</h2>
                <h3 className="thing-price">${thing.price}</h3>
                <div className="reviews">
                  <img src={window.reviewIcon} className="review-icon" />
                  <h3 className="review-count">{thing.review_ids.length}</h3>
                </div>
              </Link>
            </li>
          );
        }
      })
    }
  
    return (
      <main className="home-section">
        <HomeCarousel />
        <section className="home-things-header">
          <h1> RECOMMENDED THINGS </h1>
          <Link to="/all-hobbies">
            SEE ALL <img src={window.rightArrow} />
          </Link>
        </section>
        <ul className="home-things-index">
          {thingElements}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.props.getAllThings()
      .then(this.props.getAllHobbies());
  }
}

export default Home;