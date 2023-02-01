import { useState } from "react"
import './App.css'

export default function App(){
  const [rating, setRating] = useState(null)
  const [ratings, setRatings] = useState([
    {
      rating: 1,
      selected: false,
    },
    {
      rating: 2,
      selected: false,
    },
    {
      rating: 3,
      selected: false,
    },
    {
      rating: 4,
      selected: false,
    },
    {
      rating: 5,
      selected: false,
    }
  ])

  // what do i use? buttons? divs? checkboxes? radio buttons?
  // listen for selected. if selected,

  const handleClick = (thisRating) => {
    // map over the array.
      // if something else is selected, then un-select that.
    const resetRatings = ratings.map((i) => {
      if(i.rating !== thisRating && i.selected){
        return {...i, selected: false}
      } else { return i }
    })
    const newRatings = resetRatings.map((x) => {
      if(x.rating === thisRating){
        return {...x, selected: true}
      } else { return x }
    })

    setRatings(newRatings)
  }

  const handleSubmitRatings = () => {
    ratings.forEach((rating) => {
      if(rating.selected) { setRating(rating.rating) }
    })
  }

  const buttonElements = ratings.map((rating) => {
    return <button className={rating.selected ? 'selected' : 'unselected'} onClick={() => handleClick(rating.rating)}>{rating.rating}</button>
  })

  const RatingComponent = () => (
    <div className="ratingContainer">
      <div className="iconContainer">
          <img src="/icon-star.svg" alt="star-icon" className="icon"/>  
      </div>
      <h1>How did we do?</h1>
      <p className="para1">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="inputContainer">
        {buttonElements}
      </div>
      <button onClick={handleSubmitRatings} className="submitButton">SUBMIT</button>
    </div>
  )

  const EndComponent = () => (
    <div className="endContainer">
      <div className="imageContainer">
        <img src="/illustration-thank-you.svg" alt="thank-you-image" />
      </div>

      <div className="rating">
        <span>You selected {rating} out of 5</span>
      </div>

      <h1>Thank you!</h1>
      <div>
        <p className="paragraph" >We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  )

  return(
    <div className="container">
      {typeof rating === 'object' && <RatingComponent />}
      {typeof rating !== 'object' && <EndComponent /> }
    </div>
  )
}