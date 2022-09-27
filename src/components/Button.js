import { React } from "react";

export let Button = (props) => {
    return (
        <button type='button' onClick={props.click} className={`btn ${props.otherClasses}`}>{props.btnVal}</button>
    );
};