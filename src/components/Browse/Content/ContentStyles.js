import styled from 'styled-components';

const borderRadius = '0.2rem';
const boxShadow = '0 0 0.2rem 0.07rem var(--black)';
export const transitionDuration = 300;
const cssTransitionDuration = `${transitionDuration / 1000}s`;

const moveAndScale = (transLength, scaleRatio) => {
  return `translate(${transLength.x}, ${transLength.y}) scale(${scaleRatio})`;
};

export const Container = styled.div`
  position: relative;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  transition: transform ${cssTransitionDuration};
  z-index: ${({ isMouseOn, isMouseLeave }) => (isMouseOn || isMouseLeave) && 1};
  z-index: ${({ transLength }) => transLength && 3};
  transform: ${({ isMouseOn }) => isMouseOn && 'scale(1.3)'};
  transform: ${({ transLength, scaleRatio }) =>
    transLength && moveAndScale(transLength, scaleRatio)};
`;

export const ImgContainer = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: ${borderRadius};
  border-bottom-left-radius: ${({ isMouseOn, transLength }) =>
    (isMouseOn || transLength) && '0'};
  border-bottom-right-radius: ${({ isMouseOn, transLength }) =>
    (isMouseOn || transLength) && '0'};
`;

export const Title = styled.h3`
  position: absolute;
  bottom: 0.38rem;
  right: 0.5rem;
  text-align: right;
  font-family: 'Nanum Brush Script', cursive;
  font-size: 1em;
  mix-blend-mode: luminosity;
  background: ${({ length }) =>
    length < 7
      ? 'radial-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0) 70%)'
      : 'radial-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0) 100%)'};
`;

export const Img = styled.img`
  width: 100%;
`;

const roundButton = styled.button`
  cursor: pointer;
  position: relative;
  border: 0;
  border-radius: 100%;
  background-color: var(--light-black);
  color: var(--darkest-white);

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
    padding: 0.05em;
  }
`;

export const BottomPanel = styled.div`
  z-index: -1;
  position: absolute;
  top: 100%;
  width: 100%;
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  background-color: var(--light-black);
  opacity: ${({ isMouseOn }) => (isMouseOn ? 1 : 0)};
  opacity: ${({ transLength }) => transLength && 1};
  transition: all ${cssTransitionDuration};
`;

export const PanelButton = styled(roundButton)`
  width: 1.25em;
  height: 1.25em;
  border: 0.09em solid var(--gray);
  margin: 0.3em;

  &:hover {
    border-color: var(--darkest-white);
    background-color: var(--lightest-black);
  }

  svg {
    padding: 0.25em;
  }
`;

export const Text = styled.p`
  white-space: pre-line;
  font-size: 0.35em;
  padding: 1em 1.5em;
`;

export const ModalBackground = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  background-color: hsla(0, 0%, 0%, 0.5);
`;
