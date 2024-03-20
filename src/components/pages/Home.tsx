import CareSection from "../shared/CareSection";
import "./Home.css";
import PetCareSection from "./../shared/PetCareSection";
import { Link } from "react-router-dom";
import ServiceSection from "../shared/ServiceSection";

const Home = () => {
  return (
    <div className="bg-primary-color">
      <div className="banner">
        <div className="container">
          <div className="row hero">
            <div className="offset-lg-7 offset-md-5 col-lg-5 col-md-7 my-auto bg-blur">
              <p>
                <span className="hero-heading">MeDy.Tech</span>
                <br />
                <span className="fs-4 hero-sub-heading">
                  A Perfect Platform For Your Close One
                </span>
              </p>
              <div className="py-4">
                <Link to="/login">
                  <button className="btn btn-success border border-2 text-light px-5 py-2 me-2">
                    {" "}
                    Log in{" "}
                  </button>
                </Link>
                <Link to="/UserAs">
                  <button className="btn btn-primary border border-2  text-light px-5 py-2">
                    {" "}
                    Sign Up{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-11 pt-5 family-care">
                <CareSection
                  title="Care Your Family"
                  img="/src/assets/oldPeople.avif"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              sunt temporibus enim. Nesciunt aut laborum rerum mollitia
              laudantium. Praesentium sint exercitationem accusantium error
              molestias libero volussimus veritatis itaque, repudiandae
              pariatur? Sunt cupiditate labore repellendus debitis porro
              voluptatibus, magnam nostrum omnis tenetur excepturi ex eum repellat
              alias facilis eius officia ut! Vero excepturi officiis iure sint
              voluptatibus mollitia optio, quasi obcaecati voluptates."
                />

                <PetCareSection
                  title="Care Your Pet"
                  img="/src/assets/pets.jpg"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              libero volussimus veritatis itaque, repudiandae
              pariatur? Sunt cupiditate labore repellendus debitis porro
              voluptatibus, magnam nostrum omnis tenetur excepturi ex eum repellat
              alias facilis eius officia ut! Vero excepturi Quaerat"
                />
              </div>
            </div>
          </div>
        </div>
        <ServiceSection />

        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-11 pt-5 family-care">
                <CareSection
                  title="Model Working Mechanism"
                  img="/src/assets/AIModel.jpg"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              sunt temporibus enim. Nent exercitationem accusantium error
              molestias libero volussim omnis tenetur excepturi ex eum repellat
              alias facilis eius officia ut! Vero excepturi officiis iure sint
              voluptatibus mollitia optio, quasi obcaecati voluptates."
                />

                <PetCareSection
                  title="Why Trust Us"
                  img="/src/assets/trust.jpg"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              libero volussimus veritatis itaque, repudiandae
              pariatur? Sunt cupiditate labore repellendus debitis porro
              voluptatibus, magnam nostrum omnis tenetur excepturi ex eum repellat
              alias facilis eius officia ut! Vero excepturi Quaerat"
                />
              </div>
            </div>
          </div>
        </div>


    </div>
  );
};

export default Home;
