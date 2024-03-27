import React, { useContext, useRef, useState } from "react";
import { AppState } from "../../App";
import axios from "../../Utility/axios_config";
import {useParams, useNavigate} from 'react-router-dom'

const AnswerQuestion = () => {
 const { user } = useContext(AppState);
 const token = localStorage.getItem("token");
 const answerDom = useRef();
  const { question_id } = useParams();
  // console.log(questionid);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const answerValue = answerDom.current.value;
     if (!answerValue) {
       alert("please fill the answer field");
       return;
     }
     console.log(answerValue);
    try {
      await axios.post(
        `/answers/add_answer`,
        {
          questionid: question_id,
          answer: answerValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
   
      alert("answer added successful.");
         
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  };
  return (
    <div className='formpages'>
        <div className=''>
            <h3 className='text-center'>Answer to the top question</h3>
            <p className='text-center'>go to question page</p>
            <form onSubmit={handleSubmit}>
            
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1" placeholder='your Answer..'
        rows="5"
      />
      <button type='submit' className='px-5 my-3 btn btn-primary py-2'>post your answer</button>
            </form>
        </div>
    </div>
  );
};

export default AnswerQuestion;
