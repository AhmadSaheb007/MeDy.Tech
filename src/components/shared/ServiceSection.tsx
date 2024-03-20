import React from 'react';
import "./ServiceSection.css";
import { MdCameraFront } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
const ServiceSection = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className='fs-1'>Service</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-between px-3">
                    <div className="col-lg-2 text-center border border-5 py-4 rounded-3 service-card">
                        <span><MdCameraFront className='service-icon'/></span><br />
                        <span className='fs-5'>Diseases detaction using camera</span>
                    </div>

                    <div className="col-lg-2 text-center border border-5 py-4 rounded-3 service-card">
                        <span><MdOutlineEventNote className='service-icon'/></span><br />
                        <span className='fs-5'>Perfectly track your health checkups</span>
                    </div>

                    <div className="col-lg-2 text-center border border-5 py-4 rounded-3 service-card">
                        <span><FaMapMarkedAlt className='service-icon'/></span><br />
                        <span className='fs-5'>Direction ton your nearest doctor</span>
                    </div>


                    <div className="col-lg-2 text-center border border-5 py-4 rounded-3 service-card">
                        <span><VscFeedback  className='service-icon'/></span><br />
                        <span className='fs-5'>Provide you the appropriate first aid suggestion</span>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ServiceSection;