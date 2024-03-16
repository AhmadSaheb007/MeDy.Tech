import React from 'react';
import "../pages/UserAs.css";
import { FaRegUser } from "react-icons/fa";

interface Props{
    title: string;
    logo: string
}


const UserAsButton = () => {
    return (
        <div>
            <div className="row user-container">
                    <div className="col-lg-6 text-center">
                        <button className="py-3 mx-3 user-as-btn">
                            <FaRegUser />
                        </button>
                        <p className="fs-4 text-secondary-color">User</p>
                    </div>
                </div>
        </div>
    );
};

export default UserAsButton;