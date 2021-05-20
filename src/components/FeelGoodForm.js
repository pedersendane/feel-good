import React from 'react';
import { faBed, faPills, faUtensils, faRunning, faSmile, faClock, faEraser, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DaneForm from './DaneForm';
import BreezieForm from './BreezieForm';

export default function FeelGoodForm(props){
  const user = props.user
  
    const isDane = user.email === "pedersen.dane@outlook.com";
    const isBreezie = user.email === "bree1224@yahoo.com";
    let form;
    if (isDane) {
      form = <DaneForm/>
    } else if (isBreezie) {
      form = <BreezieForm/>
    }
    return (
      form
    );
};


