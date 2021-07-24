import React, {useState} from 'react';
import './singleQuestion.css'

const SingleQuestion = ({title, info}) => {
   const [showInfo, setShowInfo] = useState(false);
   return (
      <div className="single-question">
         <div>
         <p className="question">{title}</p>
         <p>{showInfo && info}</p>
         </div>
         
         <button className="btn" onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'HIDE' : 'SHOW'}</button>
      </div>)
}

export default SingleQuestion;