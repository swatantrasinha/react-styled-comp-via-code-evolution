import React from 'react';
import spinnerLogo from '../../static-assets/logo.svg';
import {AnimationsStyles, AnimationWithoutStyledCompStyles, AnimationWithStyledCompStyles} from './AnimationUsingKeyFrame.style';

const AnimationUsingKeyFrame = () => {
  return (
    <div>
        <h3>This component will display animation via keyframes in styled-components</h3>
        <AnimationsStyles>
        <div className='animations-container'>
        
        <AnimationWithoutStyledCompStyles>
            <div className='animations-without-styled-comp'>
                <h4>Without Styled Components</h4>
                <img src={spinnerLogo} className='App-logo' alt="logo" />
            </div>
        </AnimationWithoutStyledCompStyles>
       
       <AnimationWithStyledCompStyles>
        <div className='animations-with-styled-comp'>
            <h4>With Styled Components</h4>
            <img src={spinnerLogo} className='App-logo' alt="logo" />
        </div>
       </AnimationWithStyledCompStyles>
       
       
       
        </div>
        </AnimationsStyles>
        
    </div>
  )
};

export default AnimationUsingKeyFrame;