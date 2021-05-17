import "./Form.css";
import loading from "../../assets/loading.gif";
import { useState } from "react";
import axios from "axios";
import error from "../../assets/404.png";
import Job from "../job/Job";

const Form = () => {
  const [jobs, setJobs] = useState([]);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [gif, setGif] = useState(false);

  const getDescription = (e) => {
    setDescription(e.target.value);
  };

  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  const findJobs = () => {
    setGif(true);

    axios
      .get(`/positions.json?description=${description}&location=${location}`)
      .then((response) =>
        response.data.map((job) => ({
          id: `${job.id}`,
          company_logo: `${job.company_logo}`,
          title: `${job.title}`,
          company_and_location: `${job.company}-${job.location}`,
          type: `${job.type}`,
          apply: `${job.how_to_apply}`,
        }))
      )
      .then((jobs) => {
        setGif(false);
        setJobs(jobs);
      })
      .catch(() => setJobs(error));
  };

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
      {gif && <img src={loading} alt="Loading Gif" className="loading-gif w-25 mx-auto" />}
      {jobs.map((job, index) => (
        <Job key={`job${index}`} data={job} />
      ))}
    </div>
  );
};

export default Form;
