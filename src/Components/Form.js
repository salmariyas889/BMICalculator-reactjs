import '../App.css';
import { useState } from "react";


function Form({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(height) || isNaN(weight)) {
      console.log("Not a Number");
      setAlert(true);
    } else {
      console.log("Are NUmbers");
      setAlert(false);
      getData(weight, height);
      setHeight("");
      setWeight("");
      console.log(weight);
    }
  };

  return (
    <div className="col-sm-4 shadow rounded px-4">
      <h1 className="text-center pt-3 text-secondary h2 fs-3">BMI Calculator</h1>

      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Weight (in kg)</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Height (in m)</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
          </div>

          <input
            type="submit"
            className="btn btn-primary my-3"
            value="Get BMI"
          />
        </div>
      </form>

      {alert && (
        <div className="alert alert-danger" role="alert">
          Please Enter Valid Datas
        </div>
      )}
    </div>
  );
}

export default Form;
