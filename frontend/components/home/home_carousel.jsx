import React from 'react';

// inspiration from Will Soares - https://codepen.io/willamesoares/pen/PQpEzx 
class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      currentIndex: 0,
      images: [window.carousel1, window.carousel2, window.carousel3],
      headings: ["EXPERIENCE INSTANT GIFTIFICATION", "GET YER KEYCAPS", "NEW SWITCHES"],
      content: ["Get ready for the holidays!", "Clean look and great feel!", "Create an environment that's enjoyabe to work in!"]
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    // this.carouselMove = this.carouselMove.bind(this);
  }

  previousSlide(e) {
    // e.preventDefault();
    const lastInd = this.state.images.length - 1;
    const current = this.state.currentIndex;
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: lastInd });
    } else {
      this.setState({ currentIndex: current - 1 });
    }
  }

  nextSlide(e) {
    // e.preventDefault();
    const lastInd = this.state.images.length - 1;
    const current = this.state.currentIndex;
    if (this.state.currentIndex === lastInd) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: current + 1 });
    }
  }

  componentDidMount() {
    setInterval(() => {this.nextSlide();}, 4000);
  }

  render() {
    const index = this.state.currentIndex;
    return (
      <>
        <section className="home-carousel-container"> 
          <section className="home-carousel-text">
            <h1>{this.state.headings[index]}</h1>
            <p>{this.state.content[index]}</p>
            <span>{`0${this.state.currentIndex + 1}/03`}</span>   
          </section>
          <section className="home-carousel-btn">
            <button onClick={this.previousSlide} className="left-arrow">
              <img src={window.leftArrow} />
            </button>
            <button onClick={this.nextSlide} className="right-arrow">
              <img src={window.rightArrow} />
            </button>
          </section>   
        </section>
        <section className="home-carousel-image">
          <img src={this.state.images[index]} />
        </section>
      </>
    );
  }

}

export default HomeCarousel;