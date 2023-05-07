import React from 'react'
import {RedAndWhiteBtnStyles} from './ButtonCompUsingTheme.style';
const ButtonCompUsingTheme = (props) => { 
     return (
    <>
    <h4> Below is Red and White Btn using theme</h4>
    <RedAndWhiteBtnStyles {...props} />
    </> 
    )
}

export default ButtonCompUsingTheme;