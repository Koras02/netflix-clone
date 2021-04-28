import styled, { css } from 'styled-components/macro';

export const borderRadius = '0.2rem';
export const boxShadow = '0 0 0.2rem 0.07rem var(--black)';
export const transitionDuration = 300;
export const cssTransitionDuration = `${transitionDuration / 1000}s`;

const moveAndScale = (
  transLength: { x: string; y: string } | null,
  scaleRatio: number | null
): string | undefined => {
  if (!transLength) return;
  return `translate(${transLength.x}, ${transLength.y}) scale(${scaleRatio})`;
};

export const Container = styled.div<{
  transLength: { x: string; y: string } | null;
  isMouseOn: boolean;
  isContentOnTopZ: boolean;
  contentHeight: string;
}>`
  z-index: ${({ transLength, isMouseOn, isContentOnTopZ }) =>
    !transLength && (isMouseOn || isContentOnTopZ) && 1};
  ${({ transLength, contentHeight }) =>
    transLength &&
    css`
      z-index: 3;
      overflow: auto;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: ${contentHeight};
      background-color: hsla(0, 0%, 0%, 0.7);
    `};
`;

export const Inner = styled.div<{
  transLength: { x: string; y: string } | null;
  contentOffset: {
    top: string;
    left: string;
    width: string;
    height: string;
  } | null;
  scaleRatio: number | null;
  isMouseOn: boolean;
}>`
  ${({ transLength, contentOffset }) =>
    transLength &&
    contentOffset &&
    css`
      position: absolute;
      top: ${contentOffset.top};
      left: ${contentOffset.left};
      width: ${contentOffset.width};
    `};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  transform: ${({ transLength, isMouseOn }) => !transLength && isMouseOn && 'scale(1.3)'};
  transform: ${({ transLength, scaleRatio }) =>
    transLength && moveAndScale(transLength, scaleRatio)};
  transition: transform ${cssTransitionDuration};
`;

export const ImgContainer = styled.div<{
  transLength: { x: string; y: string } | null;
  isMouseOn: boolean;
}>`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: ${borderRadius};
  border-bottom-left-radius: ${({ isMouseOn, transLength }) => (isMouseOn || transLength) && '0'};
  border-bottom-right-radius: ${({ isMouseOn, transLength }) => (isMouseOn || transLength) && '0'};
`;

export const Title = styled.h3<{
  length: number;
}>`
  position: absolute;
  bottom: 0.38rem;
  right: 0.5rem;
  text-align: right;
  font-family: 'Nanum Brush Script', cursive;
  font-size: 1em;
  mix-blend-mode: luminosity;
  ${({ length }) =>
    length < 7
      ? css`
          background: radial-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0) 70%);
        `
      : css`
          background: radial-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0) 100%);
        `};
`;

export const Img = styled.img`
  width: 100%;
`;

export const roundButton = styled.button`
  cursor: pointer;
  position: relative;
  border: 0;
  border-radius: 100%;
  background-color: var(--gray-900);
  color: var(--gray-100);

  &:focus:not(:focus-visible) {
    outline: 0;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
`;

export const CloseButton = styled(roundButton)`
  position: absolute;
  top: -0.3em;
  right: -0.3em;
  width: 1em;
  height: 1em;
  transform: scale(0.3);

  svg {
    width: 0.8em;
    padding: 0.05em;
  }
`;

export const FakeContent = styled.div<{
  contentOffset: {
    top: string;
    left: string;
    width: string;
    height: string;
  } | null;
}>`
  ${({ contentOffset }) =>
    contentOffset &&
    `
      width: ${contentOffset.width};
      height: ${contentOffset.height};
    `}
`;
