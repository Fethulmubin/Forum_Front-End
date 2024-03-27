import React from 'react';
import logo from '../../assets/evangadi_nav.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
  function handleLogout(){
    // const token = localStorage.getItem('token')
    localStorage.removeItem('token')
    window.location.reload();
  }
  return (
    <>
     <nav className="navbar bg-body-tertiary border-2 pb-3">
  <div style={{maxWidth:'70%'}} className="container-fluid  ">
    <a className="navbar-brand"><img src={logo}/></a>
    <div className="d-flex justify-content-between" role="search">
      <div className="mx-3 mt-2" type="submit"><Link to={'/'}> Home</Link></div>
      <div className="mx-3 mt-2" type="submit">How it works</div>
      <button onClick={handleLogout} className="btn btn-primary px-5" type="submit">logout</button>
    </div>
    
  </div>
  
</nav>
{/* <div className='d-flex justify-content-around mt-5'>
        <div><button className='btn btn-primary px-5'>Ask Question</button></div>
        <div>wellcome</div>
    </div>
    <div className='mx-5 mt-5'>Questions</div>
    <hr className='mx-5'/> */}
   
    </>
  );
}

export default Navbar;


