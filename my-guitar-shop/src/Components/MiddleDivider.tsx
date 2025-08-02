import rectangleMiddle from "../assets/rectanglemiddle.png";
import fourDots from '../assets/FourDots.png';
import card from '../assets/Card.png';
import car from '../assets/car.png';


export default function MiddleDivider(){
return(

    <div className="dividerCenter">
        <h3 className="section-title">
          <span style={{ color: "white" }}>Why try </span>
          <span style={{ color: "#FF6347" }}>VibeStrings?</span>
        </h3>
        <div className="rectanglesDiv">
          <div className="rectangleItem">
            <img src={fourDots} alt="icon" className="smallIcon" />
            <img src={rectangleMiddle} alt="" />
            <p className="rectangletext">SMOOTH BROWSING
              <br />
              <p style={{fontSize: '15px', color: 'grey'}}>Lorem ipsum dolor sit <br />amet consectetur adipisicing elit</p>
            </p>
          </div>
          <div className="rectangleItem">
            <img src={car} alt="" className="smallIcon"/>
            <img src={rectangleMiddle} alt="" />
            <p className="rectangletext">EASY DELIVERY
              <br />
              <p style={{fontSize: '15px', color: 'grey'}}>Lorem ipsum dolor sit  <br />amet consectetur adipisicing elit</p>
            </p>
          </div>
          <div className=" rectangleItem">
            <img src={card} alt=""className="smallIcon" />
            <img src={rectangleMiddle} alt="" />
            <p className="rectangletext">SWIFT PAYMENTS
              <br />
              <p style={{fontSize: '15px', color: 'grey'}}>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit</p>
            </p>
          </div>
        </div>
      </div>
)}