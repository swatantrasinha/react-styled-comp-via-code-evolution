import styled from 'styled-components';
import StyledButton from '../lecture-03/Lecture_03';

export const RedAndWhiteBtnStyles = styled(StyledButton)`
    background-color: ${(props) => props.theme.redAndWhite.primary};
    color: ${(props) => props.theme.redAndWhite.text};
`