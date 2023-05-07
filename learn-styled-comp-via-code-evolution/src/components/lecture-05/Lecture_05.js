import React from 'react';
import styled from 'styled-components';
import StyledButton from '../lecture-03/Lecture_03';

export const FancyButton = styled(StyledButton)`
 border-radius: 24px;
`

const Lecture_05 = (props) => {

    return (
      <FancyButton {...props} >
        
        </FancyButton>
    )
  }
  
  
  
  export default Lecture_05;