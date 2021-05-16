import "./Job.css";

const Job = ({data}) => {


  return (
    <div className="Job">
      <img src={data.company_logo} alt="Company Logo" className="company-logo"/>
      <p className="title">{data.title}</p>
      <p className="company-and-location">{data.company_and_location}</p>
      <p className="job-type">{data.type}</p>
      <button className="job-apply"><a href={data.apply}>APPLY</a></button>
    </div>
  )
}

export default Job;
