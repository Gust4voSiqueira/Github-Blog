import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding-top: 100px;
  max-width: 54rem;

  margin: 0 auto;

  @media (${(props) => props.theme.smartphone}) {
    max-width: 90vw;
  }
`
