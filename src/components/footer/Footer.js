import design from "../../assets/design.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="wrapper">
        <span className="wrapper__designer">
          <em>{String(`<ata/>`)}</em>
        </span>
        <img src={design} alt="Design Icon" className="wrapper__icon" />
        <span className="wrapper__design">design</span>
      </div>
    </div>
  );
};

export default Footer;
