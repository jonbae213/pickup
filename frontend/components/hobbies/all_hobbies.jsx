import React from 'react';

export default class AllHobbies extends React.Component {
  render() {
    let thingItems = Object.values(this.props.things).map(thing => {
      return (
        <li className="all-things-item" key={thing.id}>
          <h2 className="thing-name">{thing.name}</h2>
          <h3 className="thing-price">{thing.price}</h3>
          <h3 className="review-count">{thing.review_ids.length}</h3>
        </li>
      );
    });

    return(
      <section className="all-things-index">
        <h1>SHOP:ALL PRODUCTS</h1>
      </section>
    )
  }
}