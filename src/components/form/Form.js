import "./Form.css";
import loading from "../../assets/loading.gif";
import { useState } from "react";
import axios from "axios";
import error from "../../assets/404.png";
import Job from "../job/Job";

const Form = () => {

  return (
    <div className="Form">
      <form action="/" method="get" className="container">
        <div className="description">
          <input
            className="description__input"
            type="text"
            value={description}
            onChange={getDescription}
            placeholder="DESCRIPTION"
          />
        </div>
        <div className="location">
          <input
            className="location__input"
            type="text"
            value={location}
            onChange={getLocation}
            placeholder="LOCATION"
          />
        </div>
        <button className="search" type="button" onClick={findJobs}>
          search
        </button>
      </form>
    </div>
  );
};

export default Form;
