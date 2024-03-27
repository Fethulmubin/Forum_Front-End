import React, { useContext, useState, useEffect } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { BsPersonFill } from "react-icons/bs";
import { client } from '../../App';
import { useNavigate, Link } from 'react-router-dom'
import axios from '../../Utility/axios_config';
import Que_Ans from '../Ans/Que_Ans';
import './Home.css'
import Footer from '../Footer/Footer';

export default function Home() {
  const [search, setSearch] = useState('')
  console.log(search)
  const { user } = useContext(client);
  const navigate = useNavigate();
  const [getQuestion, setGetQuestion] = useState([]);


  const getQuestionById = async () => {
    const token = localStorage.getItem('token')
    try {
      const { data } = await axios.get(
        '/questions/all_que',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(data);
      setGetQuestion(data);
    } catch (error) {
      // alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  };
  //all answers
  //add answer

  useEffect(() => {
    getQuestionById();
    // answerQuestion();
  }, []);
  async function clickhandler() {
    navigate('/ask')
  }

  return (

    <section className=''>
      <div className='d-flex justify-content-between'>
        <div style={{ maxWidth: '50%' }} className='w-33 p-3'>
          <button type='submit' className=" ms-5 btn btn-primary btn-primary position-relative" onClick={clickhandler}>Ask Question</button>
        </div>
        <div style={{ maxWidth: '50%' }} className="input-group rounded w-33 p-3">
          <input type="search" onChange={(e) => setSearch(e.target.value)} className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span className="input-group-text border-0" id="search-addon">
            <LuSearch />
          </span>
        </div>
        <div style={{ maxWidth: '40%' }} className='w-33 p-3 d-flex'>
          <BsPersonFill size={40} />
          <h6 className='mt-2 ms-2'>  Wellcome {user.username}</h6>
        </div>
        <hr />
      </div>
      {/* {console.log(getQuestion)} */}

      {getQuestion[0]?.filter((item) => {
        return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
      }).map((item) => (
        <div key={item.question_id} className=''>
          <Link to={`/qs/${item.question_id}`} className='link'>
      <hr className='mx-5'/>
      <div className=' wrapper d-flex justify-content-between mx-5 align-items-center'>
       <div className='d-flex'>
       <div className=' name pt-3 pb-0'><FaUserCircle size={50}/> <p>{item.user_name}</p></div>
        <div className='mt-4 mx-2 fon'>{item.title}</div>
       </div>
        <div className='arr'><MdArrowForwardIos size={30} /></div>
        </div>
          </Link>
          
        </div>
      ))}
      <span className='badge badge-primary badge-pill'>14</span>
    <Footer />
    
    </section>

  )
}
