import React from 'react';

export default class AllHobbies extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  
  onClick(e) {
    e.preventDefault();
    this.props.history.push(`/things/${e.target.idnum}`)
  }

  render() {
    let thingItems = Object.values(this.props.things).map(thing => {
      return (
        <li className="all-things-item" key={thing.id} idnum={thing.id}>
          <h2 className="thing-name">{thing.name}</h2>
          <h3 className="thing-price">{thing.price}</h3>
          <h3 className="review-count">{thing.review_ids.length}</h3>
        </li>
      );
    });

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