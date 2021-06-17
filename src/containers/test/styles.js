import styled, { css } from 'styled-components';

export const Root = styled.div`
  width: 800;
`;

export const Header = styled.section`
  display: contents;
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 40px);
`;

export const Button = styled.button`
  display: inline;
  background: linear-gradient(to top, #00018b, #00bdfe);
  box-shadow: 0 10px 10px -2px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  border: none;
  font-size: 12px;
  font-weight: 10px;
  padding: 10px;
  margin-right: 10px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  ${({ back }) =>
    back &&
    css`
      margin-left: 2px;
      position: absolute;
      justify-content: left;
    `};
`;

export const WrapperButton = styled.div`
  display: flex;
  padding-top: 3rem;
  align-items: center;
  justify-content: center;
`;

export const TestTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  padding: 0 20px;

  @media (max-width: 800px) {
    font-size: 25px;
    justify-content: center;
  }
`;

export const LabelTest = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-top: 1rem;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 0 7rem 1rem;
  }
`;

export const Question = styled.label`
  display: block;
  width: 100%;
  padding: 2rem 60rem 0 2rem;
  margin: 0;
  font-size: 25px;

  @media (max-width: 1056px) {
    padding: 2rem 30rem 0 1rem;
    font-size: 20px;
  }

  @media (max-width: 800px) {
    padding: 2rem 20rem 0 1rem;
    font-size: 20px;
  }
`;

export const Answers = styled.div`
  display: inline-block;
  padding-top: 1rem;
  padding-left: 5rem;
  font-size: 15px;

  @media (max-width: 1056px) {
    display: block;
    padding-left: 2rem;
    font-size: 14px;
  }

  @media (max-width: 807px) {
    display: block;
    padding-left: 1rem;
    font-size: 13px;
  }

  @media (max-width: 600px) {
    display: block;
    padding-left: 1rem;
    font-size: 13px;
  }
`;
