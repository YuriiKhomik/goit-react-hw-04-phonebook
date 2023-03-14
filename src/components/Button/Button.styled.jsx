import styled from 'styled-components';

export const Button = styled.button`
  width: fit-content;
  height: 30px;
  background-color: ${p => p.theme.colors.backgroundGrey}
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;
