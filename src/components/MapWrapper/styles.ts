import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{mapSize: string}>`
    min-width: 500px;
    max-height: 550px;
    width: ${props => props.mapSize};
    height: ${props => 
        css`calc(${props.mapSize} - 100px)`
    };
`