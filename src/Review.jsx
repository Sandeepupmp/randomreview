import { useState } from "react"
import Data from "./Data"
import { FaQuoteLeft } from "react-icons/fa";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

function Review() {
    const [index, setIndex] = useState(0)
    const {id, name, job , image, text} = Data[index]

    const checkNumber = (number) => {
      if (number > Data.length - 1) {
        return 0;
      }
      if (number < 0) {
        return people.length - 1;
      }
      return number;
    };
    
    const nextfun = ()=>{
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    }

    const prevfun = ()=>{
      setIndex((index) => {
        let newIndex = index -1;
        return checkNumber(newIndex);
      });
    }
    const randomnun = ()=>{
      let randomNumber = Math.floor(Math.random() * Data.length);
      if (randomNumber === index) {
        randomNumber = index + 1;
      }
      setIndex(checkNumber(randomNumber));
    }
  return (
    <article className="review">
        <div className="img-container">
        <img  src={image} alt={name} className="person-img" />
        <span className="quote-icon">
        <FaQuoteLeft/>
        </span>
        </div>
      
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevfun}>
        <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextfun}>
        <FaChevronRight/>
        </button>
       
      </div>
      <button className="random-btn" onClick={randomnun}>Random</button>

    </article>
  )
}
export default Review