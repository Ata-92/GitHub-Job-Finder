import "./Form.css";

const Form = () => {

  return (
    <div className="Form">
      <form action="/" method="get" className="container">
        <div className="description">
          <input className="description__input" type="text" placeholder="DESCRIPTION"/>
        </div>
        <div className="location">
          <input className="location__input" type="text" placeholder="LOCATION"/>
        </div>
        <button className="search" type="submit">search</button>
      </form>
    </div>
  );
}

export default Form;
