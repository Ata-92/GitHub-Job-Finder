import "./Job.css";

const Job = ({ data }) => {
  return (
    <div className="Job card border border-success rounded w-50 my-5 text-uppercase">
      <img
        src={data.company_logo}
        alt="Company Logo"
        className="company-logo card-img-top w-25"
      />
      <div className="job-info border border-success">
        <h2 className="title card-header text-danger">
          {data.title.split(" ").map((word, index) => (
            <span key={`word${index}`}><span className="initial">{word[0]}</span>{word.slice(1)} </span>
          ))}
        </h2>
        <div className="card-body">
          <p className="company-and-location fw-bold">
            {data.company_and_location}
          </p>
          <p className="job-type">{data.type}</p>
          <a
            className="job-apply btn btn-success text-white w-50"
            href={data.apply} rel="noreferrer" target="_blank"
          >
            APPLY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
