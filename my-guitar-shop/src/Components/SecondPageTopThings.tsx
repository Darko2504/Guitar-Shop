import vibeStringImg from "../assets/VibeStrings.png";
import butterfly from "../assets/Butterfly.png";
import mainguitar from '../assets/orangeCircle.png'

type Props = {
  brandName: string;
  brandImage?: string;
  description?: string; 
};



export default function SecondPageTop({ brandName, brandImage, description }: Props) {
  return (
    <div className="body">
      <div className="logoTopLeft">
        <img src={butterfly} alt="" />
        <img src={vibeStringImg} alt="" />
      </div>

       <div  className="secondPageRightTop">
        <div className="orangeCircleSecondPage">
          <img src={mainguitar} alt="" />
           <img src={brandImage} alt={brandName} className="brandNameOnCircle" />
        </div>
      </div>

     <div className="HomeTitle">
        <h2 className="secondHomeSubtitle">
          Play like a   
           <span style={{ color: "#FF6347" }}> Rock Star</span> 
        </h2>
        <p className="secondPageDesc">
            {description}
        </p>
      </div>
   </div>
  );
}
