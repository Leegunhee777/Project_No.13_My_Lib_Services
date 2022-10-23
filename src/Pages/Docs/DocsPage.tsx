import React from 'react'
import { Wrap } from './styled'
import { useDispatch } from '../../Context/GlobalContextProvider'
import {
    useParams
  } from "react-router-dom";
  
import ButtonContainer from './Container/Button';
import CalendarContainer from './Container/Calendar';
import CheckBoxContainer from './Container/CheckBox';
import CounterContainer from './Container/Counter';
import InputContainer from './Container/Input';
import RadioGroupContainer from './Container/RadioGroup';
import SelectorContainer from './Container/Selector';
import TextAreaContainer from './Container/TextArea';
import SliderContainer from './Container/Slider';
const DocsPage = () => {
    const { navBarDispatch } = useDispatch();
    let { path } = useParams();
    console.log(path, 'path')
    React.useEffect(()=>{
        navBarDispatch({type:'CHANGE_PATH_VALIDATEION', payload: true})
        return (()=>{
            navBarDispatch({type:'CHANGE_PATH_VALIDATEION', payload: false})
        })
    }, [])
    

    function matchParamsToContainer(path: string){
        switch (path) {
            case "button":
                return <ButtonContainer />
            case "checkbox":
                return <CheckBoxContainer />
            case "counter":
                return <CounterContainer />
            case "calendar":
                return <CalendarContainer />
            case "textarea":
                return <TextAreaContainer />
            case "input":
                return <InputContainer />
            case "radiogroup":    
                return <RadioGroupContainer />
            case "selector":
                return <SelectorContainer />   
             case "slider":
                return <SliderContainer />                                                               
            default:
                break;
        }
    }
    
    return (
        <Wrap>
            <div>
                {path && matchParamsToContainer(path)}
            </div>
        </Wrap>
    )
}

export default DocsPage