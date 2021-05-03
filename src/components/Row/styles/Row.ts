import styled from 'styled-components/macro';
import * as BREAKPOINTS from '../../../constants/breakpoints';
import { homeSidePadding } from '../../../pages/Home/styles/Home';

export const sliderGap = '0.25rem';

export const Container = styled.div`
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    font-size: 1.25rem;
  }
`;

export const ContentsContainer = styled.div`
  position: relative;
  display: flex;
  gap: ${sliderGap};
`;

export const Slider = styled.div<{ sliderPositionX: string }>`
  display: flex;
  gap: ${sliderGap};
  transform: ${({ sliderPositionX }) => `translateX(${sliderPositionX})`};
  transition: transform 0.4s;
`;

const SliderControlButton = styled.button`
  cursor: pointer;
  display: var(--slider-control-button-display);
  opacity: 0.7;
  position: absolute;
  top: 0;
  width: calc(${homeSidePadding} - ${sliderGap});
  height: 100%;
  outline: 0;
  border: 0;
  background: var(--gray-700);
  color: var(--gray-100);

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.75rem;
    height: 1.75rem;
  }

  &:focus-visible {
    box-shadow: 0 0 0 0.125rem var(--gray-100);
  }

  &:hover {
    opacity: 0.9;

    svg {
      width: 2.25rem;
      height: 2.25rem;
    }
  }
`;

export const PrevButton = styled(SliderControlButton)`
  left: -${homeSidePadding};

  svg {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

export const NextButton = styled(SliderControlButton)`
  right: -${homeSidePadding};

  svg {
    transform: translate(-50%, -50%) rotate(-90deg);
  }
`;
