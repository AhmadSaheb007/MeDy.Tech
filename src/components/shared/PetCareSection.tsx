import "../pages/Home.css";
import ImageButton from './ImageButton';


interface Props{
  title: string;
  description: string;
  img: string;
}

const PetCareSection = ({title, img, description}: Props) => {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <img className="w-75 img-fluid rounded-2" src={img} alt="" />
          </div>

          <div className="col-lg-5 my-auto">
            <p className="fs-1">{title}</p>
            <p>{description}</p>
            <ImageButton />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PetCareSection;
