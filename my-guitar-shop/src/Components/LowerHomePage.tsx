import eclipse from "../assets/Ellipse 6.png";
import leftPic from "../assets/guitar s3.png";
import rightPic from "../assets/guitar s1.png";
import googlePay from "../assets/GooglePay.png";
import appStore from "../assets/AppStore.png";

export default function LowerHomePage() {
  return (
    <div className="lowerHomeWrapper">
      <div className="container">
        <p className="textLowerHome">
          Browse and buy your <br />
          <span style={{ color: "#FF6347" }}>favorite guitars</span> <br />
          with VibeStrings
        </p>

        <div className="mediaPics">
          <img src={appStore} alt="App Store" />
          <img src={googlePay} alt="Google Play" />
        </div>
      </div>

      <div className="rightImageDiv">
        <img src={eclipse} alt="Background" className="bg-image" />
        <img src={leftPic} alt="Guitar Left" className="top-image top1" />
        <img src={rightPic} alt="Guitar Right" className="top-image top2" />
      </div>
    </div>
  );
}
