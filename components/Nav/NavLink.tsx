import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledNavLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

type NavLinkProps = {
  href: string;
  title: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href}>
      <StyledNavLink>{title}</StyledNavLink>
    </Link>
  );
};
