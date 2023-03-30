import './App.css';
import { StyledMainCard } from './Components/MainCard-style';
import { useState } from "react";
import { getQuestions } from './integration.ts'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userID, setUserID] = useState('0')
  const [data, setData] = useState(null)
  const [surveyID, setSurveyId] = useState(null)
  const [numberQuestions, setNumberQuestions] = useState(0)

  const restartFunction = (mood) => {
    setIsLoading(mood)
  }

  window.addEventListener('message', function(event) {
    if (event.data.source === "survey-parent" ) {
      setUserID(event.data.value)
      getQuestions(event.data.value)
      .then(dataFetched => {
        setData(dataFetched.questions)
        setSurveyId(dataFetched.surveyId)
        setIsLoading(false)
        if (dataFetched.questions) {
          setNumberQuestions(dataFetched.questions.length)
        } else {
          setNumberQuestions(0)
        }
      })
    }
  }, false);

  


  return (
      
      <div className='main-div'>
        {<StyledMainCard isLoading={isLoading} data={data} numberQuestions={numberQuestions} userID={userID} surveyID={surveyID} restartFunction={restartFunction}></StyledMainCard>}
      </div>
  );
}

export default App;
