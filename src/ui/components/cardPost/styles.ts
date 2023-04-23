import styled from "styled-components";

export const CardPostContainer = styled.div`
  width: 26rem;
  border-radius: 10px;
  padding: 40px 32px;
  margin-bottom: 30px;
  background-color: ${props => props.theme['gray-600']};

  p {
    margin-top: 20px;
    font-size: 1rem;
    color: ${props => props.theme['blue-100']};
    line-height: 160%;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    -webkit-box-orient: vertical; 
  }
`

export const HeaderCardPost = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${props => props.theme['gray-100']};
    font-size: 1.25rem;
    line-height: 160%;
    width: 70%;
  }

  span {
    margin: 7px 0 auto;
    width: 20%;
    color: ${props => props.theme['gray-400']};
    font-size: .875rem;
  }
`