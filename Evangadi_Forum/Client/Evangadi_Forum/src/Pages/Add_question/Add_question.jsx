import React, {useRef} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from '../../Utility/axios_config';
import './Question.css'
const NewQuestion = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
    const titleDom = useRef();
    const descDom = useRef();

    async function handleSubmit(e) {
      
        e.preventDefault();
        const titleC = titleDom.current.value;
        const descC = descDom.current.value;
      
        if (
          !titleC ||
          !descC
        ) {
          alert("Please provide all required information");
          return;
        }
        const token = localStorage.getItem('token')
        // console.log(token)
        try {
          await axios.post(
            `/questions/ask`,
            {
              title: titleC, 
            description: descC, 
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          // window.location.reload(false);
          alert("question added successful.");
          
          // window.location.reload(false);
          navigate("/");    
                
        } catch (error) {
          alert(error?.response?.data?.msg);
          // console.log(error.response.data);
        }
    }
  return (
    <>
      <section>
        <div>
        <h2 className='text-center font-bold text-2xl mt-10'>Step To Write Good Questions</h2>
            {/* <div className='text-center guide'> */}
              <ul className=' lis'>
                <li >summeraize your problem in one line title</li>
                <li >Describe your problem in more Detail</li>
                <li>Describe what you tired and what you expect happen</li>
               <li >Review your questions and post it to site</li>
               </ul>

            {/* </div> */}
        </div>
       <div className='text-center'> 
        <h2>Ask public questions</h2>
        <p>go to paragraph page</p>
       </div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                  <input ref={titleDom} type='text' placeholder='title' name='questions'  className='textinput'/> <br/> 
                  <label htmlFor="exampleFormControlTextarea1">Basic textarea</label>
      <textarea ref={descDom}
        className="form-control"
        id="exampleFormControlTextarea1" placeholder='question Description...'
        rows="5"
      />
      <button type='submit' className='px-5 my-3 btn btn-primary py-2 mx-5'>post your questions</button>
                </div>
                {/* <button type='submit' className='px-5 my-3 btn mx-5 btn-primary py-2'>post your questions</button> */}
                {/* <button type='submit' className='px-5 my-3 btn btn-primary py-2 mx-5'>post your questions</button> */}
            </form>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default NewQuestion;
