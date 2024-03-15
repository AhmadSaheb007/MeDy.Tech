import "../pages/Home.css";


interface Props{
  title: string;
  description: string;
  img: string;
}

const CareSection = ({title, description, img}: Props) => {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="offset-1 col-lg-5 my-auto text-end">
          <p className="fs-1">{title}</p>
            {description}
          </div>
          <div className="offset-1 col-lg-5 text-end">
            <img className="w-100 img-fluid rounded-2" src= {img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareSection;
