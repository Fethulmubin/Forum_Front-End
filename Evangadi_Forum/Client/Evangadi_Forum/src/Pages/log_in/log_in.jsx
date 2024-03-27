import React ,{useRef} from 'react'
import Footer from '../Footer/Footer';
import axios from '../../Utility/axios_config';
import { Link , useNavigate} from 'react-router-dom';

function log_in() {
    const navigate = useNavigate();
    const emailDom = useRef();
    const passwordDom = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        const emailC = emailDom.current.value;
        const passC = passwordDom.current.value;
      
        if (
          !emailC ||
          !passC
        ) {
          alert("Please provide all required information");
          return;
        }
       
        try {
         const {data} = await axios.post("/users/login", {
            email: emailC,
            password: passC
          });
          alert("logged in successfully");
          
          localStorage.setItem('token', data.token)
          navigate("/");
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
                            <h3>Login to your account</h3>
                            <p>Don’t have an account? <Link to="/signup" className="text-warning text-decoration-none">Create a
                                    new
                                    account</Link></p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input ref={emailDom} type="email" className="form-control" 
                                    placeholder="support@evangadi.com"/>
                                <label >Email address</label>
                            </div>
                            <div className="form-floating my-4">
                                <input ref={passwordDom} type="password" className="form-control"
                                    placeholder="Password"/>
                                <label >Password</label>
                            </div>
                            <button type='submit' className="btn btn-primary w-100 mb-5 py-3">Login</button>
                                                   
                        </form>
                       
                        <p className="text-end py-2"><a href="#" className="text-decoration-none  text-warning">Forget
                                Password?</a></p>
                        
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
                {/* <button className="btn  btn-lg mb-5 text-center" style="background-color: #FE8402;">
                    How It works
                </button> */}
            </div>
        </div>
    </div>
    </section>
<Footer/>
</>
  )
}

export default log_in