import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      stars: 0,
    };
  }

  render() {
    <form className="review-form">
      <label>Review</label>
      <input type="text" 
        value={this.state.body}
        onChange={this.handleBody}/>
      <label>Rating</label>
      <input />
    </form>
  }
}

export default ReviewForm;