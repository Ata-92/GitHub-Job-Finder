import "./Job.css";

const Job = ({ data }) => {
  return (
    <div className="Job card border border-success rounded w-50 my-5 text-uppercase">
      {data.company_logo !== "null" ? (
        <img
          src={data.company_logo}
          alt="Company Logo"
          className="company-logo card-img-top py-3"
        />
      ) : (
        <div className="no-company_logo py-5"></div>
      )}
      <div className="job-info border border-success">
        <h2 className="title card-header text-danger">
          {data.title.split(" ").map((word, index) => (
            <span key={`word${index}`}>
              <span className="title-initial">{word[0]}</span>
              {word.slice(1)}{" "}
            </span>
          ))}
        </h2>
        <div className="card-body">
          <p className="company-and-location fw-bold">
            {data.company_and_location.split(" ").map((word, index) => (
              <span key={`word${index}`}>
                <span className="cl-initial">{word[0]}</span>
                {word.slice(1)}{" "}
              </span>
            ))}
          </p>
          <p className="job-type">
            {data.type.split(" ").map((word, index) => (
              <span key={`word${index}`}>
                <span className="type-initial">{word[0]}</span>
                {word.slice(1)}{" "}
              </span>
            ))}
          </p>
          <a
            className="job-apply btn btn-success text-white w-50"
            href={data.apply
              .split("href=")[1]
              .split(">")[0]
              .slice(1, -1)}
            rel="noreferrer"
            target="_blank"
          >
            APPLY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
