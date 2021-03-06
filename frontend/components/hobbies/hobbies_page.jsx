import React from 'react';
import { Link } from 'react-router-dom';

export default class AllHobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: this.props.currentUser.thing_ids,
      followed: this.props.currentUser.hobby_ids
    }
    this.saveAndUnsave = this.saveAndUnsave.bind(this);
    this.bookmarkIcon = this.bookmarkIcon.bind(this);
    this.thingShowPage = this.thingShowPage.bind(this);
    this.hobbiesList = this.hobbiesList.bind(this);
    this.followAndUnfollow = this.followAndUnfollow.bind(this);
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

  followAndUnfollow(e) {
    e.preventDefault();
    const hobbyId = Number(e.currentTarget.parentElement.attributes.idnum.value);
    let newArr;

    if (this.props.currentUser.hobby_ids.includes(hobbyId)) {
      newArr = this.state.followed.filter(id => {
        id !== hobbyId
      });

      this.props.unfollowTheHobby(hobbyId)
        .then(this.setState({ followed: newArr }));
    } else {
      newArr = this.state.followed.concat([hobbyId])

      this.props.followTheHobby(hobbyId)
        .then(this.setState({ followed: newArr }));
    }
  }

  componentDidMount() {
    this.props.getAllHobbies();
    this.props.getAllThings();
  }

  bookmarkIcon(id) {
    if (this.props.currentUser.thing_ids.includes(id)) {
      return <img src={window.bookmarkedIcon} className="bookmark-icon" />
    } else {
      return <img src={window.bookmarkIcon} className="bookmark-icon" />
    }
  }

  thingShowPage(e) {
    e.preventDefault();
    const id = Number(e.currentTarget.parentElement.parentElement.attributes.idnum.value);
    this.props.history.push(`/things/${id}`);
  }

  followIcon(id) {
    if (this.props.currentUser.hobby_ids.includes(id)) {
      return <img src={window.unfollowIcon} className="follow-icon" />;
    } else {
      return <img src={window.followIcon} className="follow-icon" />;
    }
  }

  hobbiesList() {
    let allHobbies = Object.values(this.props.hobbies);
    allHobbies = allHobbies.map(hobby => {
      return (
        <li className="hobbies-list-item" key={hobby.id} idnum={hobby.id}>
          <h3>
            {hobby.name} ({hobby.thing_ids.length})
          </h3>
          <button onClick={this.followAndUnfollow} >
            {this.followIcon(hobby.id)}
          </button>
        </li>
      );
    });
    return allHobbies;
  }

  render() {
    if (Object.values(this.props.things).length === 0) return null;

    let things;
    
    if (this.props.currentUser.hobby_ids.length === 0) {
      things = Object.values(this.props.things);
    } else {
      let personalizedThings = Object.values(this.props.things);   
      // problem with thing_ids
      let thingIds = [];
      let hobbies = this.props.hobbies;
      
      this.props.currentUser.hobby_ids.forEach(hobbyId => {
        thingIds = thingIds.concat(hobbies[hobbyId].thing_ids);
      });
      things = [];

      personalizedThings.forEach(thing => {
        if (thingIds.includes(thing.id)) {
          things.push(thing);
        }
      });
    }
    
    let thingItems = things.map(thing => {
      return (        
        <li className="thing-item" key={thing.id} idnum={thing.id}>
          <section className="bookmark-holder">
            <button onClick={this.saveAndUnsave}>
              {this.bookmarkIcon(thing.id)}
            </button>
          </section>
          <Link to={`/things/${thing.id}`}>
            <img className="stock-photo" src={window.stockPhoto}/>
            <h2 className="thing-name">{thing.name}</h2>
            <h3 className="thing-price">${thing.price}</h3>
            <div className="reviews">
              <img src={window.reviewIcon} className="review-icon" />
              <h3 className="review-count">{thing.review_ids.length}</h3>
            </div>
          </Link>
        </li>
      );
    });
    
    return (
      <section className="hobbies-things-section">
        <h1>VIEW: {this.props.match.path.toUpperCase().slice(1).split('-').join(' ')}</h1>  
        <section className="hobbies-things-container">        
          <ul className="hobbies-list">
            <h1>HOBBIES</h1>
            {this.hobbiesList()}
          </ul>
          <ul className="all-things-index">
            {thingItems}
          </ul>
        </section>
      </section>
    )
  }
}