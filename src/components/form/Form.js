import "./Form.css";

const Form = () => {

  return (
    <div className="Form">
      <form action="/" method="get" className="container">
        <div className="description">
          <input className="description__input" type="text" placeholder="DESCRIPTION"/>
        </div>
      </form>
    </div>
  );
}

export default Form;
