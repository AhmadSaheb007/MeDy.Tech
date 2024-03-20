import React, { ReactNode } from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../pages/UserDashboard.css";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePets } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa";
import "./Sidebar.css";
interface Props{
  children: ReactNode;
}
const Sidebar = ({children}: Props) => {
  return (
    <div className="d-flex">
      <div className="container-fluid">
        <div className="row">
          <div className="bg-dark col-auto col-lg-12 col-sm-2 col-md-12 min-vh-100 bg-dark py-3">
            <Link
              to=""
              className="text-decoration-none d-flex align-item-center px-3 d-sm-inline nav-animation"
            >
              <FaRegHospital className="me-2 mb-3 fs-3 text-secondary-color"/>
              <span className="fs-2 pt-1 text-light d-none d-sm-inline">Pet </span>
            </Link>
            <hr className="text-secondary-color pb-3" />
            <nav className="nav nav-tabs flex-column bg-transparent">
              <Link
                to="/UserDashboard"
                className="nav-link d-flex text-secondary-color py-3 nav-animation"
                aria-current="page"
              >
                <RxDashboard className="my-auto me-2 fs-3" />
                <span className="fs-4 pt-2 d-none d-sm-inline">Dashboard</span>
              </Link>

              <Link
                to="/UserPets"
                className="nav-link d-flex text-secondary-color py-3 nav-animation"
                aria-current="page"
              >
                <MdOutlinePets className="my-auto me-2 fs-3" />
                <span className="fs-4 pt-2 d-none d-sm-inline">Pets</span>
              </Link>

              <Link
                to="/UserHumanDetails"
                className="nav-link d-flex text-secondary-color py-3 nav-animation"
                aria-current="page"
              >
                <FaRegUser className="my-auto me-2 fs-3" />
                <span className="fs-4 pt-2 d-none d-sm-inline">Human</span>
              </Link>

              <Link
                to=""
                className="nav-link d-flex text-secondary-color py-3 nav-animation"
                aria-current="page"
              >
                <IoSettingsOutline className="my-auto me-2 fs-3" />
                <span className="fs-4 pt-2 d-none d-sm-inline">Settings</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="col-lg-10 col-md-12 col-sm-12">
        {children}
      </div>

      

      
    </div>
  );
};

export default Sidebar;
