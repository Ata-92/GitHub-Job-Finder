import octocat from "../../assets/octocat.png";
import joblogo from "../../assets/job-logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="logos">
        <img src={octocat} alt="GitHub Logo" className="github-logo"/>
        <img src={joblogo} alt="Job Logo" className="job-logo"/>
      </div>
      <h1><span>G</span>ITHUB <span>J</span>OB <span>F</span>INDER</h1>
    </div>
  )
}

export default Header;
