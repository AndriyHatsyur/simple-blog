import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px;
`;

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
