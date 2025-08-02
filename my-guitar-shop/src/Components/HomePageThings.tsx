import vibeStringImg from "../assets/VibeStrings.png";
import butterfly from "../assets/Butterfly.png";
import mainguitar from "../assets/GUITAR.jpg";
import whiteEclipse from "../assets/Ellipse 5.png";


export default function HomePage(){
return(
    <>
    <div className="logoTopLeft">
        <img src={butterfly} alt="" />
        <img src={vibeStringImg} alt="" />
      </div>

      <div className="homePageTopRightImg">
        <div className="circleGuitar">
          <img src={mainguitar} alt="" />
        </div>
      </div>

      <div className="whiteEclipse">
        <img src={whiteEclipse} alt="White Eclipse" className="eclipse-img" />
        <img src={butterfly} alt="Butterfly" className="butterfly-img" />
      </div>

      <div className="HomeTitle">
        <h2 className="home-subtitle">
          Browse top quality <br></br>{" "}
          <span style={{ color: "#FF6347" }}>Guitars</span> online
        </h2>
        <p className="home-description">
          Explore 50k+ latest collections of branded guitars online with
          VibeStrings.
        </p>
      </div>

      <div className="divider"></div>

      <div className="TitleForBrands">
        <h3 className="section-title">
          Featuring the <span style={{ color: "#FF6347" }}>Best Brands</span>
        </h3>
        <p className="section-description">
          Select your previous version to create an updated website.
        </p>
      </div>
      </>
)
}