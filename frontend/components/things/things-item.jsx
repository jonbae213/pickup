import React from 'react';

export default ({ thing }) => {
  const thingShowPage = id => e => {
    e.preventDefault();
    e.stopPropagation();
    this
  };
  
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
  )
}