import "./UserAs.css";
import { FaRegUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const UserAs = () => {
    return (
        <div>
            <div className="container">
                <div className="row user-container">
                    <div className="col-lg-6 text-center">
                        <Link to ="/UserAs/PetOwnerSignUp"> <button className="py-3 my-3 user-as-btn">
                            <FaRegUser />
                        </button> </Link>
                        <p className="fs-4 text-secondary-color">Pet Owner</p>
                    </div>

                    <div className="col-lg-6 text-center">
                        <Link to ="/UserAs/DoctorSignUp"> <button className="py-3 my-3 user-as-btn">
                        <FaUserDoctor />
                        </button> </Link>
                        
                        <p className="fs-4 text-secondary-color">Doctor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAs;