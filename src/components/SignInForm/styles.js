import styled from 'styled-components';
import {
  BasicLogoLink,
  BasicInputContainer,
  BasicButtonLink,
} from '../../common-styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: 50% 40%;
  padding-top: 10px;

  @media (max-width: 739px) {
    background: none;
    align-items: stretch;
  }
`;

export const LogoLink = styled(BasicLogoLink)`
  width: 95%;

  @media (max-width: 439px) {
    font-size: 1.6rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 50px 70px 100px;
  border-radius: 4px;
  margin-bottom: 100px;

  @media (max-width: 739px) {
    padding: 50px 20px;
  }
`;

export const Title = styled.h1``;

export const Error = styled.p`
  min-width: 260px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(32, 98%, 46%);
  font-size: 0.875rem;
  font-weight: bold;
`;

export const InputContainer = styled(BasicInputContainer)`
  min-width: 400px;
  margin-bottom: 20px;

  @media (max-width: 739px) {
    min-width: 300px;
  }

  input {
    border-radius: 4px;
    height: 40px;
    color: hsl(0, 0%, 100%);
    background-color: hsl(0, 0%, 20%);
  }
`;

export const ButtonLink = styled(BasicButtonLink)`
  border-radius: 4px;
  min-width: 300px;
  padding: 0.8em;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  svg {
    width: 0.8em;
    height: 0.8em;
  }
`;
