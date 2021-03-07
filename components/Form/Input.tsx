import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 5px;
`;

export const Input = (props) => {
  return <StyledInput {...props} />;
};
