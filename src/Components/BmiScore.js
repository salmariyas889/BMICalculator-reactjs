import '../App.css';

function BmiScore({bmiNo,bmiName,changeWeight}) {
  console.log(changeWeight);

  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score </div>
    <div className="row justify-content-md-center">
      <div className="p-3 my-2 alert fs-2 alert-primary col-sm-4">{bmiNo}</div>
    </div>
    <div className="fs-4 fw-bold text-primary">{bmiName}</div>
    {changeWeight.type === "positive" && (
      <div className="fs-5">"You Need To Lose&nbsp;<span className="fw-bold">{changeWeight.weight} kg"</span></div>
    )}
    {changeWeight.type === "negative" && (
      <div className="fs-4">"You Need To Gain&nbsp;<span className="fw-bold">{changeWeight.weight} kg"</span></div>
    )}
    {changeWeight.type === "normal" && (
      <div className="fs-4">"Your Weight Is Normal"</div>
    )}



    </div>
  );
}

export default BmiScore;
