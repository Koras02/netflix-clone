import styled from 'styled-components';
import { BasicInputContainer, BasicButton } from '../../common-styles';
import * as BREAKPOINTS from '../../../constants/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 20rem;
  max-width: 59.375rem;
  padding: 1.875rem 5% 0;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-weight: normal;
  font-size: 1.2rem;
  text-align: center;
  padding-bottom: 1.25rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    max-width: 28.125rem;
    font-size: 1.45rem;
    padding-bottom: 0.75rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding-bottom: 0.625rem;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.LG}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContainer = styled(BasicInputContainer)`
  min-width: 31.25rem;
  max-width: 3.125rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    min-width: 28.25rem;
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    margin-bottom: 1.25rem;
    height: 3.75rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    min-width: 18.75rem;
    height: 3rem;
  }

  input {
    border: solid 0.06rem var(--light-gray);
    border-top-left-radius: 0.125rem;
    border-bottom-left-radius: 0.125rem;
  }

  label {
    @media (max-width: ${BREAKPOINTS.MD}) {
      font-size: 0.875rem;
    }
  }
`;

export const Button = styled(BasicButton)`
  border-left: 0.06rem solid var(--lightest-black);
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
  padding: 1.125rem 1.7rem;
  font-size: 1.875rem;

  svg {
    width: 0.8em;
    height: 0.8em;
  }

  @media (max-width: ${BREAKPOINTS.XL}) {
    font-size: 1.625rem;
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    border-radius: 0.125rem;
    font-size: 1rem;
  }
`;

export const Error = styled.p`
  color: var(--orange);
  font-weight: bold;
  padding-top: 0.4rem;
`;
