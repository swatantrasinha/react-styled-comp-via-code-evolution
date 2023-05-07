import styled from 'styled-components';
import StyledButton from '../lecture-03/Lecture_03';

export const CustomButtonStyles = styled(StyledButton).attrs({
    tabIndex: '0', /* since is passed as link in App.js for CustomButon so giving tabindex as zero */
  })`
    color: cyan;
    border-radius: 24px;
        &:hover {
            font-size: 1.5rem;
        }
  `