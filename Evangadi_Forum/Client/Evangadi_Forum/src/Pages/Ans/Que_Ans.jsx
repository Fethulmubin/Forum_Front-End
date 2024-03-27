import React,{useState,useEffect,useRef} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from '../../Utility/axios_config';
import './Que_Ans.css'
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: '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' , dangerouslyAllowBrowser: true});
// OpenAI({ apiKey: 'My API Key' })

// import AnswerQuestion from './AnswerQuestion';

function Que_Ans() {
    const token = localStorage.getItem('token')
  const [question, setQuestion] = useState({});
  const [answer, setanswer] = useState([])
  const answerDom = useRef();
  const navigate = useNavigate();
  const {question_id} = useParams()
  // const openai = new OpenAiApi(new Configuration({
  //   apikey: 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
  // }))

 
//   console.log(answerValue)

//function to get single question detail
   async function get_sing_Q(){
    // const token = localStorage.getItem('token')
    try {
        const {data}  = await axios.get(`/questions/single_que/${question_id}`, {
          headers: {
            Authorization: "Bearer " + token
          }
        });
        setQuestion(data);
        // console.log(data)
      } catch (error) {
        console.log(error.response);
        navigate("/login");
      }
      }
      //function to get all answer
      async function get_answers(){
        // const token = localStorage.getItem('token')
        try {
            const {data}  = await axios.get(`/answers/get_answer/${question_id}`, {
              headers: {
                Authorization: "Bearer " + token
              }
            });
            setanswer(data);
            // const completion = await openai.chat.completions.create({
            //   messages: [{ role: "user", content: "You are a helpful assistant." }],
            //   model: "gpt-3.5-turbo",
            // });
          
            // console.log(completion);
            // console.log(data)
          } catch (error) {
            console.log(error.response);
            navigate("/login");
          }
          }
        
          //function to add answer
          const handleSubmit = async (e) => {
            e.preventDefault();
            const answerC = answerDom.current.value;
             if (!answerC) {
               alert("please fill the answer field");
             }
            //  console.log(answerValue);
            try {
              await axios.post(
                `/answers/add_answer`,
                {
                  questionid: question_id,
                  answer: answerC,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              alert("answer added successful.");
                 
            } catch (error) {
              alert(error?.response?.data?.msg);
              console.log(error.response.data);
            }
          }
        //  
      useEffect(() => {
        get_sing_Q();
        get_answers();
      }, [answer]);
      // async function main() {
       
      // }
      
      // main();
     
  return (
    <div>
<div className='my-5'>  

        <div className='title'>
        <p>Title : {question.title}</p><br/>
        </div>
        <div className='ques'>
        <p>Q : {question.description}</p>
        <hr/>
        </div>
        {/* {console.log(answer[0])} */}
        <div className='com'><h4>Answers From The Community</h4><hr/></div>
        {answer?.map((item)=>(
            <div key={item.question_id} className=''>
                <div className='ans ms-5'><p> ID {item.answer_id} : {item.answer}</p><hr/></div>
            </div> 
                   )) }
       
    </div>
    <div className='formpages'>
        <div className='txt'>
            <h3 className='text-center answer'>Answer To The Top Question</h3>
            <p className='text-center go'>go to question page</p>
            <form onSubmit={handleSubmit}>
            
      <textarea ref={answerDom}
        className="form-control"
        id="exampleFormControlTextarea1" placeholder='your Answer..'
        rows="5"
      />
      <button type='submit' className='px-5 my-3 btn btn-primary py-2 '>post your answer</button>
            </form>
        </div>
    </div>
    </div>
     
  )

}
export default Que_Ans