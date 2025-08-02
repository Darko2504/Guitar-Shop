import butterfly from "../assets/Butterfly.png";
import vibeStringImg from "../assets/VibeStrings.png";
import mainguitar from '../assets/orangeCircle.png'
interface Musician {
  name: string;
  musicianImage: string;
}

interface Specs {
  bodyWood: string;
  neckWood: string;
  fingerboardWood: string;
  pickups: string;
  tuners: string;
  scaleLength: string;
  bridge: string;
}

interface ThirdPageTopProps {
  guitarName: string;
  guitarImage: string;
  musicians: Musician[];
  specs: Specs;
}

export default function ThirdPageTop({
  guitarName,
  guitarImage,
}: ThirdPageTopProps) {
  return (
    <>
      <div className="logoTopLeft">
        <img src={butterfly} alt="Butterfly logo" />
        <img src={vibeStringImg} alt="Vibe Strings logo" />
      </div>
  
        <div className="guitarTopLeft">
          <img src={mainguitar} alt="" />
           <img src={guitarImage} alt={guitarName} className="guitarOnCircle" />
        </div>
       
      
    </>
  );
}
