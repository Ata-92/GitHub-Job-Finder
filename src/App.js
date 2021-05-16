import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Job from "./components/job/Job";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Job />
      <Footer />
    </div>
  );
}

export default App;
