import React from 'react';
import styled from 'styled-components';


export const StyledButton = styled.button`
    background-color: ${(props) => 
        props.variant === 'primary' ? 'green' : '#000' };

    color: #fafafa;
    cursor: pointer;
    span {
        text-decoration: underline;
    }

    &:hover {
        background-color: #fff;
        color: #000;
    }
`
const Lecture_03 = (props) => {
  return (
    <StyledButton {...props}>
        Styled Btn 
        <span> 
        {props.linkText ? props.linkText : 'Lec-3'}
        </span>
    </StyledButton>
  )
}



export default Lecture_03;