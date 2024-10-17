import "./App.css";
import Form from "./Components/Form";
import BmiScore from "./Components/BmiScore";
import BmiLIst from "./Components/BmiLIst";
import { useState } from "react";

function App() {
  const[show,setShow] = useState(false);
  const [bmi, setbmi] = useState("00");
  const [bmiType, setbmiType] = useState("Not Calculated");
  const[bmiRange,setbmiRange] = useState({
    underWeight:{low:""},
    normal:{low:"",high:""},
    overWeight:{low:"",high:""},
    obesityOne:{low:"",high:""},
    obesityTwo:{low:"",high:""},
    obesityThree:{high:""},
  });
  const[changeWeight,setChangeWeight] = useState({ weight:"",type:"" });
  const onFormSub = (w, h) => {
    console.log(w, h);
    let b = bmiCal(w, h);
    setbmi(b);
    console.log(b);

    let bType = weightType(b);
    setbmiType(bType);
    console.log(bType);

    const range={
      underWeight:{low:calWeight(18.5,h)},
    normal:{low:calWeight(18.5,h),high:calWeight(24.9,h)},
    overWeight:{low:calWeight(25,h),high:calWeight(29.9,h)},
    obesityOne:{low:calWeight(30,h),high:calWeight(34.9,h)},
    obesityTwo:{low:calWeight(35,h),high:calWeight(39.9,h)},
    obesityThree:{high:calWeight(40,h)},
    };
    setbmiRange(range);
    setChangeWeight(weightChange(b,w,range));
    setShow(true);
  };
  const bmiCal = (w, h) => (w / (h * h)).toFixed(2);
  const calWeight = (b,h) =>(b * h * h).toFixed(2);

  const weightChange = (b,w,range) => {
    let changeObject;
    if(b>24.9){
      changeObject = {
        weight:(w-range.normal.high).toFixed(2),
        type:"positive",
      };
      return changeObject;
    }else if(b<18.5){
      changeObject = {
        weight:(range.normal.low-w).toFixed(2),
        type:"negative",
      };
      return changeObject;
  } else {
    changeObject={
      weight:0,
      type:"normal",
    };
    return changeObject;
  }
}

  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "UnderWeight";
    } else if (bmi > 18.5 && bmi < 24.9) {
      return "Normal";
    } else if (bmi > 24.9 && bmi < 29.9) {
      return "OverWeight";
    } else if (bmi > 29.9 && bmi < 34.9) {
      return "Obesity Class I";
    } else if (bmi > 34.9 && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    } else {
      return "Invalid inputs";
    }
  };

  

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-3 mx-2">
          <Form getData={onFormSub} />
        </div>
        {show && (<div className="row justify-content-center mt-4">
          <div className="col-12 col-sm-6 mb-5">
            <BmiScore bmiNo={bmi} bmiName={bmiType} changeWeight={changeWeight} />
          </div>
          <div className="col-12 col-sm-6 mb-5">
            <BmiLIst range={bmiRange} bmi={bmi}/>
          </div>
        </div>)}
      </div>
    </>
  );
}

export default App;
