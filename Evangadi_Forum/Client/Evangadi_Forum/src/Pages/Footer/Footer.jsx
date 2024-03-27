import React from 'react'
import logo from '../../assets/evangadi_nav.png'

function Footer() {
  return (
    <>
      <div className="container my-5">
        {/* Footer */}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#45526e" }}
        >
          {/* Grid container */}
          <div className="container p-4 pb-0">
            {/* Section: Links */}
            <section className="">
              {/*Grid row*/}
              <div className="row">
                {/* Grid column */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <img src={logo}/>
                  </h6>
                  <a className="btn btn-outline-light btn-floating m-1" role="button">
                    <i className="fab fa-facebook-f" />
                  </a>
                  {/* Twitter */}
                  <a className="btn btn-outline-light btn-floating m-1" role="button">
                    <i className="fab fa-twitter" />
                  </a>
                  {/* Google */}
                  <a className="btn btn-outline-light btn-floating m-1" role="button">
                    <i className="fab fa-google" />
                  </a>
                  {/* Instagram */}
                  <a className="btn btn-outline-light btn-floating m-1" role="button">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
              
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a className="text-white">How it works</a>
                  </p>
                  <p>
                    <a className="text-white">Terms of Service</a>
                  </p>
                  <p>
                    <a className="text-white">Privacy policy</a>
                  </p>
              
                </div>
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact Info</h6>
                  <p>
                    <i className="fas fa-home mr-3" /> Evangadi Networks
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" /> support@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" /> + 01 234 567 88
                  </p>

                </div>
                {/* Grid column */}
              </div>
              {/*Grid row*/}
            </section>
            {/* Section: Links */}
            <hr className="my-3" />
           
          </div>
        
        </footer>
        {/* Footer */}
      </div>

    </>


  )
}

export default Footer