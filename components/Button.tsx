import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px;
`;

export const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
