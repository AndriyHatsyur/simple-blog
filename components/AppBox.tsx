import styled from 'styled-components';

const StyledBox = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const AppBox = ({ children }) => {
  return <AppBox>{children}</AppBox>;
};
