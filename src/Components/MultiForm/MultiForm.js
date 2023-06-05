import React,{useState} from 'react';
import  './MultiForm.css';
import Indicator from './Indicator/Indicator';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';
import DietForm from './SubForms/DietForm';
import FoodStyle from './SubForms/FoodStyle';


const MultiForm = () => {
    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setAllFormData] = useState({
        dietForm:'',
        foodStyle:[],
        allergies:[],
        prefs:{}
    })
    const modifyIndex = (index,data) => {
        setFormIndex(index);
        if(data){
            const newData = {...allFormData}; 
            const firstPropNewData= Object.keys(data)[0];
            newData[firstPropNewData]=data[firstPropNewData];
            setAllFormData(newData);
        }
    }
    console.log(allFormData);
  return (
    <div className='container-multiform' >
      <Indicator />
      { formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} /> 
      : formIndex === 2 ?  <DietForm modifyIndex={modifyIndex} />
      : formIndex === 3 ?  <FoodStyle modifyIndex={modifyIndex} /> 

      : ""}

    </div>
  )
}

export default MultiForm
