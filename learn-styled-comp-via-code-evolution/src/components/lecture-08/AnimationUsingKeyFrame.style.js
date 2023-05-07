import styled, {keyframes} from 'styled-components';

export const rotateUsingStyledComp = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`


export const AnimationsStyles = styled.div`
    .animations-container {
        display: flex;
        justify-content: center;

        div {
            padding: 10px;
            margin: 10px;
        }
    }
`

export const AnimationWithoutStyledCompStyles = styled.div`
    .animations-without-styled-comp {
        border: 1px solid black;
        img {
            width: 200px;
            height: 200px;
        }

        /* Code from CRA starts */
        .App-logo {
            animation: App-logo-spin infinite 20s linear;
        }

        @keyframes App-logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        /* Code from CRA ends */
    }
`

export const AnimationWithStyledCompStyles = styled.div`
    .animations-with-styled-comp {
        border: 1px solid black;
        img {
            width: 200px;
            height: 200px;
        }
        .App-logo {
            animation: ${rotateUsingStyledComp} infinite 20s linear;
        }
    }
`