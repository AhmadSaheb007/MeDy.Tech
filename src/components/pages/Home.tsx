import CareSection from "../shared/CareSection";
import "./Home.css";
import PetCareSection from './../shared/PetCareSection';

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row hero">
            <div className="offset-7 col-lg-5 my-auto bg-blur">
              <p>
                  <span className="hero-heading">MeDy.Tech</span>
                  <br />
                  <span className="fs-4">A Perfect Platform For Your Close One</span>
              </p>
              <div className="py-4">
                <button className="btn btn-success border border-2 text-light px-5 py-2 me-2"> Log in </button>
                <button className="btn btn-primary border border-2  text-light px-5 py-2"> Sign Up </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-color bg-fixed pt-5">
        <CareSection title = "Care Your Family" img = "/src/assets/oldPeople.avif" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            sunt temporibus enim. Nesciunt aut laborum rerum mollitia
            laudantium. Praesentium sint exercitationem accusantium error
            molestias libero volussimus veritatis itaque, repudiandae
            pariatur? Sunt cupiditate labore repellendus debitis porro
            voluptatibus, magnam nostrum omnis tenetur excepturi ex eum repellat
            alias facilis eius officia ut! Vero excepturi officiis iure sint
            voluptatibus mollitia optio, quasi obcaecati voluptates."/>
        
        <PetCareSection title = "Care Your Pet" img="/src/assets/pets.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.  
            libero volussimus veritatis itaque, repudiandae
            pariatur? Sunt cupiditate labore repellendus debitis porro
            voluptatibus, magnam nostrum omnis tenetur excepturi ex eum repellat
            alias facilis eius officia ut! Vero excepturi Quaerat"/>
      </div>
    </>
  );
};

export default Home;
