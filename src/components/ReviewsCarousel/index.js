// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewNumber: 0,
  }

  onLeftArrowClick = () => {
    const {reviewNumber} = this.state

    if (reviewNumber !== 0) {
      this.setState(prevState => ({reviewNumber: prevState.reviewNumber - 1}))
    }
  }

  onRightArrowClick = () => {
    const {reviewNumber} = this.state
    const {reviewsList} = this.props

    if (reviewNumber !== reviewsList.length - 1) {
      this.setState(prevState => ({reviewNumber: prevState.reviewNumber + 1}))
    }
  }

  render() {
    const {reviewNumber} = this.state
    const {reviewsList} = this.props

    const review = reviewsList[reviewNumber]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-button-container">
          <button
            type="button"
            className="arrow-button"
            onClick={this.onLeftArrowClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={review.imgUrl} alt={review.username} />
            <p className="username">{review.username}</p>
            <p className="company-des-text">{review.companyName}</p>
            <p className="company-des-text">{review.description}</p>
          </div>
          <button
            type="button"
            className="arrow-button"
            onClick={this.onRightArrowClick}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
