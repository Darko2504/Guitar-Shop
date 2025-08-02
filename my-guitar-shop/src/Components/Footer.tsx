import "../Models/Footer.css";
import butterfly from "../assets/Butterfly.png";
import vibeStringImg from "../assets/VibeStrings.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/Facebook.png";
import twitter from "../assets/Twitter.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logoTopLeft">
        <img src={butterfly} alt="" />
        <img src={vibeStringImg} alt="" />
        <p>Enquiry@VibeStrings.com</p>
        <p>+1 (800) 555-1234</p>
      </div>

      <div>
        <h5>Pages</h5>
        <a href="#">Store</a>
        <a href="#">Collections</a>
        <a href="#">Support</a>
      </div>

      <div>
        <h5>Product</h5>
        <a href="#">Shop</a>
        <a href="#">Favorites</a>
        <a href="#">Categories</a>
      </div>

      <div className="followus">
        <h5>Follow us</h5>
        <div className="social-icons">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} VibeStrings. All rights reserved.
      </div>
    </footer>
  );
}
