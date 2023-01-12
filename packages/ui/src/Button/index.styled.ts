import styled from 'styled-components';

export const MainButton = styled.button`
  background: blue;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
`;
