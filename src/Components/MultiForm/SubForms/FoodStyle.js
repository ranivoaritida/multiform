import React,{useRef} from 'react';
import './SubForm.css';


const FoodStyle = (props) => {

    const preventFunc = e => {
        e.preventDefault();

        const styleData = {
          foodStyle :[]
        }

        allCheckBoxes.current.forEach(checkbox=> {
          if(checkbox.checked){
            styleData.foodStyle.push(checkbox.value);
          }
        })

        props.modifyIndex(4,styleData)
    }

    const allCheckBoxes = useRef([]);

    const addCheck = el =>{
      if(el && !allCheckBoxes.current.includes(el)){
        allCheckBoxes.current.push(el);
      }
    }
    const handleReturn = () => props.modifyIndex(2) 

    console.log(allCheckBoxes);

  return (
    
    <form className='checkbox-form' onSubmit={preventFunc}>
        <p>Quelles sont tes cuisines préférées ?</p>
        <span>Choix multiples.</span>

        <label htmlFor='italian'>Italienne </label>
        <input ref={addCheck} type="checkbox" value="italian" id="italian" />
        <label htmlFor='japanese'>Japonaise </label>
        <input ref={addCheck} type="checkbox" value="japanese" id="japanese" />
        <label htmlFor='indian'>Indienne </label>
        <input ref={addCheck} type="checkbox" value="indian" id="indian" />
        <label htmlFor='thai'>Thailandaise </label>
        <input ref={addCheck} type="checkbox" value="thai" id="thai" />
        <label htmlFor='french'>Française </label>
        <input ref={addCheck} type="checkbox" value="french" id="french" />
        <label htmlFor='chinese'>Chinoise </label>
        <input ref={addCheck} type="checkbox" value="chinese" id="chinese" />
        <div className='container-nav-btns'>
            <button onClick={handleReturn} type="button" className='prev' >Précédent</button>
            <button>Valider</button>
        </div>
    </form>
  )
}

export default FoodStyle