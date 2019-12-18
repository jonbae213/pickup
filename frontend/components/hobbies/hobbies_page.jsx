import React from 'react';

export default class AllHobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: this.props.currentUser.thing_ids
    }
    this.saveAndUnsave = this.saveAndUnsave.bind(this);
    this.bookmarkIcon = this.bookmarkIcon.bind(this);
    this.thingShowPage = this.thingShowPage.bind(this);
  }
  
  saveAndUnsave(e) {
    e.preventDefault();
    const thingId = Number(e.currentTarget.parentElement.attributes.idnum.value);
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
    const id = Number(e.currentTarget.parentElement.attributes.idnum.value);
    this.props.history.push(`/things/${id}`);
  }

  hobbiesList() {
    
  }

  render() {
    let things = this.props.page === 'my-hobbies' ? this.props.things : Object.values(this.props.things)
    let thingItems;
    
    if (things.length !== 0) {
      thingItems = things.map(thing => {
        return (        
          <li className="all-things-item" key={thing.id} idnum={thing.id}>
            <button onClick={this.saveAndUnsave}>
              {this.bookmarkIcon(thing.id)}
            </button>
            <button className="all-things-item-content" onClick={this.thingShowPage}>
              <h2 className="thing-name">{thing.name}</h2>
              <h3 className="thing-price">{thing.price}</h3>
              <div className="reviews">
                <img src={window.reviewIcon} className="review-icon" />
                <h3 className="review-count">{thing.review_ids.length}</h3>
              </div>
            </button>
          </li>
        );
      });
    } else {
      return (
        <div>rendering</div>
      )
    }
    return(
      <section className="all-things-section">
        <h1>SHOP:ALL PRODUCTS</h1>
        <ul className="all-things-index">
          {thingItems}
        </ul>
      </section>
    )
  }
}