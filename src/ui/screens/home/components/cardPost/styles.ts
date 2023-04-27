import styled from 'styled-components'

export const CardPostContainer = styled.button`
  width: 26rem;
  border-radius: 10px;
  padding: 40px 32px;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme['gray-700']};

  &:hover {
    transition: background-color 0.3s;
    cursor: pointer;
    background-color: ${(props) => props.theme['gray-800']};
  }

  .previewContent {
    margin-top: 10px;
    font-size: 1rem;
    color: ${(props) => props.theme['blue-100']};
    line-height: 160%;
    text-align: left;

    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 100%;
  }

  @media (${(props) => props.theme.smartphone}) {
    width: 100%;
    margin-bottom: 15px;
    padding: 15px;

    .previewContent {
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 120px;
    }
  }

  @media (${(props) => props.theme.tablet}) {
    width: 49%;
    margin-bottom: 15px;
    padding: 15px;

    .previewContent {
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 120px;
    }
  }
`

export const HeaderCardPost = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.25rem;
    line-height: 160%;
    width: 80%;
    text-align: left;

    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 100px;
  }

  time {
    margin: 8px 0 auto;
    text-align: end;

    width: 30%;
    color: ${(props) => props.theme['gray-400']};
    font-size: 0.875rem;
  }
`
