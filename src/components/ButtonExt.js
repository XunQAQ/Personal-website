import React from 'react'
import "./styles/Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = [ "btn--med", "btn--large"];

export const ButtonExt =({children, type, onClick, buttonStyle, buttonSize, path}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize: SIZES[0];
    return(
        <a activeClass="active" href={path} without rel="noopener noreferrer" target="_blank">
            <button
                className= {`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
            {children}
            </button>
        </a>
    )
}
