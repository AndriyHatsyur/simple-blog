import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

export const Form = ({ children }) => {
  return <StyledForm onSubmit={(e) => e.preventDefault()}>{children}</StyledForm>;
};
