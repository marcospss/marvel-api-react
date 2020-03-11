import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #000;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;
