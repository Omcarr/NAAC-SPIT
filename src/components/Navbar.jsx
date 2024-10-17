import React from "react";
import logo from "../assets/logo2.png";
import logo2 from "../assets/spit-transparent-bg-logo.png";
import college from "../assets/clg bg 2.jpeg";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const undertaking_pdf = "Undertaking.pdf";

const Navbar = () => {
  const openPDF = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <img className="w-[5rem] spit-logo" src={logo2} alt="logo" />
          <img className="w-[25rem]" src={logo} alt="logo" />
        </div>
        <input type="checkbox" id="menu-btn" />
        <label htmlFor="menu-btn" className="btn menu-btn">
          <FaBars className="icon" />
        </label>
        <ul className="nav-links">
          <label htmlFor="menu-btn" className="btn close-btn">
            <FaTimes className="icon" />
          </label>
          <li>
            <a href="https://www.spit.ac.in/">Home</a>
          </li>
          <li>
            <a href="#" className="desktop-item">
              Academics
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Academics
            </label>
            <ul className="drop-menu">
              <li>
                <a href="https://www.spit.ac.in/academics/graduate/">
                  UG Programme
                </a>
              </li>
              <li>
                <a href="https://www.spit.ac.in/academics/post-graduate/">
                  PG Programme
                </a>
              </li>
              <li>
                <a href="https://www.spit.ac.in/academics/ph-d-programme/">
                  Ph.D.Programme
                </a>
              </li>
              <li>
                <a href="https://www.spit.ac.in/academics/departments/">
                  Departments
                </a>
              </li>
            </ul>
          </li>



          {/* <li>
            <a href="https://www.spit.ac.in/">Library</a>
          </li>
            <ul className="drop-menu">
              <li>
                <a href="http://dspace.spit.ac.in/xmlui/handle/123456789/6">
                  DSpace
                </a>
              </li>
              <li>
                <a href="http://library.spit.ac.in/qp.html#new_tab">
                  Question Papers
                </a>
              </li>
              <li>
                <a href="http://library.spit.ac.in/syllabus.html#new_tab">
                  Syllabus
                </a>
              </li>
            </ul> */}

            {/* <li>
            <a href="#" className="desktop-item">
              Library
            </a>
            <input type="checkbox" id="showDropLibrary" />
            <label htmlFor="showDropLibrary" className="mobile-item">
             Library
            </label>
            <ul className="drop-menu">
              <li>
                <a href="http://dspace.spit.ac.in/xmlui/handle/123456789/6">
                DSpace
                </a>
              </li>
              <li>
                <a href="http://library.spit.ac.in/qp.html#new_tab">
                 Question papers
                </a>
              </li>
              <li>
                <a href="http://library.spit.ac.in/syllabus.html#new_tab">
                Syllabus
                </a>
              </li>
            </ul>
          </li> */}
          <li>
            <a href="#" className="desktop-item">
              Library
            </a>
            <input type="checkbox" id="showDropLibrary" />
            <label htmlFor="showDropLibrary" className="mobile-item">
              Library
            </label>
            <ul className="drop-menu">
              <li>
                <a href="http://dspace.spit.ac.in/xmlui/handle/123456789/6">
                  DSpace
                </a>
              </li>
              <li>
                <a href="http://library.spit.ac.in/qp.html#new_tab">
                  Question Papers
                </a>
              </li>
              <li>
                <a href="http://library.spit.ac.in/syllabus.html#new_tab">
                  Syllabus
                </a>
              </li>
            </ul>
          </li>



          <li>
            <a href="#" className="desktop-item">
              About
            </a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">
              About
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img src={college} alt="" />
                </div>
                <div className="row">
                  <header className="abcd">Students</header>
                  <ul className="mega-links">
                    <li>
                      <a href="https://www.spit.ac.in/wp-content/uploads/2023/11/Students-Council-2023-24.pdf">
                        Students Council
                      </a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/placements/">
                        Placements
                      </a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/admissions/">
                        Admissions
                      </a>
                    </li>
                    <li>
                      <a href="http://www.spit.ac.in/category/exam/">Exams</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header className="abcd">Research and Innovation</header>
                  <ul className="mega-links">
                    <li>
                      <a href="https://www.spit.ac.in/idealab/">IdeaLab</a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/faculty-research/rd-committee/">
                        R&D Committee
                      </a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/faculty-research/funded-projects/">
                        Funded Projects
                      </a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/faculty-research/international-conferences/">
                        Internation Conferences
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header className="abcd">Events</header>
                  <ul className="mega-links">
                    <li>
                      <a href="https://oculus.spit.ac.in/">Oculus</a>
                    </li>
                    <li>
                      <a href="https://ecell.spit.ac.in/">E-cell</a>
                    </li>
                    <li>
                      <a href="http://ieee.spit.ac.in/">IEEE</a>
                    </li>
                    <li>
                      <a href="http://alumni.spit.ac.in/">Alumni</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="undertaking" onClick={() => openPDF(undertaking_pdf)}>
              Undertaking
            </a>
          </li>
          {/* <li>
            <a className="row" href="#">
              Login
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
