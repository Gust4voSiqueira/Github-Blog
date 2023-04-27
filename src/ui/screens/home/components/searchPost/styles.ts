import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  color: ${(props) => props.theme.white};

  input {
    width: 100%;
    padding: 17px;
    border-radius: 6px;
    margin-top: 17px;
    font-size: 1rem;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['black-500']};
    border: 1px solid ${(props) => props.theme['gray-500']};

    ::placeholder {
      color: ${(props) => props.theme['gray-500']};
      font-size: 1rem;
    }
  }

  @media (${(props) => props.theme.smartphone}) {
    margin-top: 200px;
  }

  @media (${(props) => props.theme.tablet}) {
    margin-top: 50px;
  }
`

export const HeaderSearchForm = styled.header`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme['gray-200']};
    font-size: 1.125rem;
  }

  p {
    color: ${(props) => props.theme['gray-400']};
    font-size: 0.875rem;
  }
`
