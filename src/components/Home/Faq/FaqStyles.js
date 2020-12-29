import styled from 'styled-components';
import * as STYLES from '../../../constants/styles';

export const Container = styled.li`
  font-size: 1.625rem;

  @media (max-width: ${STYLES.breakpoints.lg}) {
    font-size: 1.25rem;
  }

  @media (max-width: ${STYLES.breakpoints.sm}) {
    font-size: 1.125rem;
  }
`;

export const Question = styled.button`
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 1.4rem;
  margin-bottom: 0.07rem;
  border: 0;
  text-align: left;
  background-color: ${STYLES.colors.gray3};
  color: ${STYLES.colors.white1};

  &:focus:not(:focus-visible) {
    outline: 0;
  }

  svg {
    position: absolute;
    right: 1em;
    top: 50%;
    width: 1.4em;
    height: 1.4em;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(-50%)'};
  }
`;

export const Answer = styled.div`
  white-space: pre-wrap;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '75rem' : 0)};
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  margin-bottom: 0.5rem;
  background-color: ${STYLES.colors.gray3};

  span {
    display: block;
    padding: 1.4rem;
  }
`;
