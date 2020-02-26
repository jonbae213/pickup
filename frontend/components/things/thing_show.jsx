import React from 'react';
import StarRatings from 'react-star-ratings';

export default class ThingShow extends React.Component {
  constructor(props) {
    super(props);

  }
  
  componentDidMount() {
    this.props.fetchAllThings();
    this.props.fetchAllHobbies();
    this.props.fetchReviews(parseInt(this.props.match.params.thingId));
  }

  render() {
    if (Object.keys(this.props.things).length === 0) {
      return (
        <>
        </>
      );
    }
    let reviews;
    // if (Object.keys(this.props.reviews).length === 0) {
    //   reviews = (
    //     <h4>
    //       Be the first one to review this item!
    //     </h4>
    //   );
    // } else {
    //   reviews = Object.values(this.props.reviews).map((review, i) => {
    //     return (
    //       <section className={`thing-review-${i}`}>
    //         <h1>{this.props.users[review.user_id]}</h1>
    //         <StarRatings
    //           rating={review.stars}
    //           starRatedColor="black"
    //           numberOfStars={5}
    //           name="rating"
    //         />
    //         <h2>{review.body}</h2>
    //       </section>
    //     );
    //   });
    // }
    const thingId = parseInt(this.props.match.params.thingId);
    const thing = this.props.things[thingId];
    
    return (
      <>
        <section className="show-page-container">
          <img className="show-page-image" src={window.showPage} style={{width: "820px"}} />
          <div className="item-info">
            <h1>{thing.name}</h1>
            <h2>${thing.price}</h2>
            <h3>{thing.description}</h3>
          </div>
        </section>
        <section className="reviews">
          {reviews}
        </section>
      </>
    );

  }
}