import styled from 'styled-components';
import { TestTitle } from '../test/styles';

export const TestResult = styled.p`
  display: flex;
  justify-content: center;
  padding: 7rem;
  font-size: 20px;
`;

export const WrapperFeedback = styled.div`
  & ${TestTitle} {
    padding: 0 20px;
    display: grid;

    @media (max-width: 800px) {
      justify-content: center;
    }
  }
`;
