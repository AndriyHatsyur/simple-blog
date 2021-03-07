import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StylePostTitle = styled.h3`
  font-weigth: 20px;
`;

export const PostTitle: React.FC<ReactNode> = ({ children }) => {
  return <StylePostTitle>{children}</StylePostTitle>;
};
