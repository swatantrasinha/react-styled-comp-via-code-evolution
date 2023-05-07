import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
button {
    font-family: ${(props) => props.theme.globalBtnFontStyle};
}
`
