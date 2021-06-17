import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    width: auto;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 775px) {
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 0 20px;
  }
`;

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200;

  @media (max-width: 800px) {
    display: inherit;
    justify-content: center;
    max-width: auto;
    align-items: center;
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 40px);

  @media (max-width: 800px) {
    width: 50%;
    max-width: auto;
  }
`;

export const SortCheck = styled.div`
  display: inline;
  justify-items: right;
  position: relative;
  padding: 2rem 1rem 0 52rem;
  padding-left: 70%;

  @media (max-width: 800px) {
    padding: 1rem 1rem 0 3rem;
    width: 50%;
  }
`;
