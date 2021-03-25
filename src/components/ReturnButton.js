import React from 'react';
import styled from 'styled-components';

const StyledReturnButton = styled.a`
  box-sizing: border-box;
  margin: 0px 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;

const ReturnButton = ({ callback }) => (
  <StyledReturnButton href="../portfolio-details-projet-4.html">Return</StyledReturnButton>
);

export default ReturnButton;