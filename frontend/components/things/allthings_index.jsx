import React from 'react';

export const ThingsIndex = ({ things }) => {
  const thingInfos = Object.values(things).map((thing, i) => {
  let stars = '';  
    return (
      <li key={thing.id} className="thing-in-index">
        <p className="name">{thing.name}</p>
        <p className="price">"{thing.price}"</p>
        <p className="stars">
          {'\u2605'}
        </p>
        <p className="review-count">
          {thing.review_ids.length}
        </p>
      </li>
    )
  });
  
  return (
    <section className="things">  
      <ul className="things-index">
        {thingInfos}
      </ul>
    </section>
  );
};