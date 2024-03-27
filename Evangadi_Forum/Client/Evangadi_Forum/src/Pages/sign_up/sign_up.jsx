// import { useRef } from 'react';
import React ,{useRef} from 'react'
import axios from '../../Utility/axios_config'
import Footer from '../Footer/Footer';
import { Link ,useNavigate} from 'react-router-dom';

function sign_up() {
    const navigate = useNavigate();
    const usernameDom = useRef();
    const firstnameDom = useRef();
    const lastnameDom = useRef();
    const emailDom = useRef();
    const passwordDom = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        const usernameC = usernameDom.current.value;
        const firstC = firstnameDom.current.value;
        const lastC = lastnameDom.current.value;
        const emailC = emailDom.current.value;
        const passC = passwordDom.current.value;
      
        if (
          !usernameC ||
          !firstC ||
          !lastC ||
          !emailC ||
          !passC
        ) {
          alert("Please provide all required information");
          return;
        }
       
        try {
          await axios.post("/users/register", {
            username: usernameC,
            firstName: firstC,
            lastName: lastC,
            email: emailC,
            password: passC
          });
          alert("register successfull. please login");
          navigate("/login");
        } catch (error) {
          alert(error?.response?.data?.msg);
          console.log(error.response.data);
        }
    }
  return (
    <>
    <section id="home" >
    <div className="container pt-5 mt-5">
        <div className="d-sm-flex align-items-center justify-content-between">
            <div className="col-md m-5 shadow-lg p- mb-5 bg-body rounded-2  ">
                <div className="card bg-white text-dark border-0">
                    <div className="card-body text-center">
                        <div className="my-3">
                            <h3>Create your account</h3>
                            <p>Already have an account? <Link to="/login" className="text-warning text-decoration-none">Signin</Link></p>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                                <input type="text" ref={usernameDom} className="form-control" 
                                    placeholder="username"/>
                                <label ></label>username
                            </div>
                            <div className='row'>
                            <div className="form-floating mb-3 col">
                                <input type="text" ref={firstnameDom} className="form-control" 
                                    placeholder="firstName"/>
                                <label >firstname</label>
                            </div>
                            <div className="form-floating mb-3 col">
                                <input type="text" ref={lastnameDom} className="form-control" 
                                    placeholder="lastName"/>
                                <label >lastname</label>
                            </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" ref={emailDom} className="form-control" 
                                    placeholder="support@evangadi.com"/>
                                <label >Email address</label>
                            </div>
                            <div className="form-floating my-4">
                                <input type="password" ref={passwordDom} className="form-control"
                                    placeholder="Password"/>
                                <label >Password</label>
                            </div>
                                              
                        <p className="text-end py-2"><a href="#" className="text-decoration-none  text-warning">Forget
                                Password?</a></p>
                        <button type='submit' className="btn btn-primary w-100 mb-5 py-3">Agree And Join</button>
                        </form>
                        <div className="mb-5 pb-5"></div>
                    </div>
                </div>
            </div>
            <div className="ms-3 col-md">
                <p> <span className="text-warning"> About </span></p>
                <h1>Evangadi Networks</h1>
                <p className="my-2 lh-lg">
                    No matter what stage of life you are in, whether you’re just starting elementary school or being
                    promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to
                    follow
                    in your footsteps.
                </p>
                <p className="py-4">Wheather you are willing to share your knowledge or you are just looking to meet
                    mentors
                    of your own, please start by joining the network here.</p>
                
            </div>
        </div>
    </div>
    </section>
<Footer/>
    </>
  )
}

export default sign_up
