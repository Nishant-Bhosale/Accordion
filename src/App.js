import React, { Component } from 'react';
import data from './data';
import SingleQuestion from './components/SingleQuestion'
import './App.css';

class App extends Component {
  

  render(){
    let questions = null;

    questions= data.map((question) => {
      return <SingleQuestion 
      {...question}
      key={question.id} />
    })

  return (
    <div className="App">
      <div className="card">
        <h1>Questions and answers about login</h1>
        <div className="questions">
          {questions}
        </div>
      </div>
    </div>
  );
  }
}

export default App;

// ques={question.title} 
//       answer={question.info} 