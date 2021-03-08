import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  padding: 5px;
`;

export const TextArea = (props) => {
  return <StyledTextArea {...props}></StyledTextArea>;
};
