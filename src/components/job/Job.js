import "./Job.css";

const Job = ({data}) => {


  return (
    <div className="Job card rounded-5 w-50">
      <img src={data.company_logo} alt="Company Logo" className="company-logo card-img-top w-25"/>
      <h2 className="title card-header bg-secondary text-warning">{data.title}</h2>
      <div className="card-body">
        <p className="company-and-location">{data.company_and_location}</p>
        <p className="job-type">{data.type}</p>
        <button className="job-apply btn btn-success text-white"><a href={data.apply}>APPLY</a></button>
      </div>
    </div>
  )
}

export default Job;
