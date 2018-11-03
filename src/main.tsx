import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import './util/reset.css';

interface Props {
  width?: string;
  behavior?: string;
  bgcolor?: string;
  direction?: string;
  height?: string;
  hspace?: number;
  loop?: number;
  scrollamount?: number;
  scrolldelay?: number;
  truespeed?: number;
  vspace?: number;
  children?: React.ReactNode;
  className?: string;
}

interface State {
  loopNum: number;
  elementHeight: number | null;
  elementWidth: number | null;
}

interface Window {
  hspace: number;
}
declare var window: Window;

const Direction = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down'
};

class Remarquee extends React.Component<Props, State> {
  private text = React.createRef<HTMLParagraphElement>();
  constructor(props: Props) {
    super(props);
    this.state = {
      loopNum: -1,
      elementHeight: null,
      elementWidth: null
    };
  }

  componentDidMount() {
    this.text.current.addEventListener('webkitAnimationEnd', () => {
      this.decrementLoopCount();
    });
    this.text.current.addEventListener('AnimationEnd', () => {
      this.decrementLoopCount();
    });
    this.text.current.addEventListener('animationend', () => {
      this.decrementLoopCount();
    });
    this.text.current.addEventListener('oAnimationEnd', () => {
      this.decrementLoopCount();
    });
    window.hspace = this.props.hspace + this.text.current.clientWidth;
    this.setState({
      elementHeight: this.text.current.clientHeight,
      elementWidth: this.text.current.clientWidth
    });
  }

  decrementLoopCount() {
    const { loopNum } = this.state;
    if (loopNum > 0) {
      this.setState({ loopNum: this.state.loopNum - 1 });
    }
  }

  render() {
    const { loopNum } = this.state;
    const isLoop = loopNum === -1;
    const { children, direction, hspace } = this.props;
    return (
      <Wrapper {...this.props}>
        <Text
          ref={this.text}
          isLoop={isLoop}
          loopNum={loopNum}
          direction={direction}
        >
          {children}
        </Text>
      </Wrapper>
    );
  }
}

const Left = keyframes`
  0% { left: calc(100% - ${window.hspace}px); transform: translate(0); }
  100% { left: ${window.hspace}px; transform: translate(-100%); }
`;

const Right = keyframes`
  0% { left: 0; transform: translate(-100%); }
  100% { left: 100%; transform: translate(0); }
`;

const Up = keyframes`
  0% { top: 100%; transform: translate(0,0); }
  100% { top: 0; transform: translate(0,0); }
`;

const Down = keyframes`
  0% { bottom: 0px; transform: translate(0,0); }
  100% { bottom: 100%; transform: translate(0,100%); }
`;

const Wrapper = styled.div`
  position: relative;
  background-color: ${props => props.bgcolor};
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '16px')};
  padding-right: ${props => props.hspace}px;
  padding-left: ${props => props.hspace}px;
  overflow: hidden;
`;

const Text = styled.p`
  position: absolute;
  animation: ${props => {
      switch (props.direction) {
        case Direction.left:
          return Left;
        case Direction.right:
          return Right;
        case Direction.up:
          return Up;
        case Direction.down:
          return Down;
        default:
          return Left;
      }
    }}
    1s linear;
  animation-iteration-count: ${props =>
    props.isLoop ? 'infinite' : props.loopNum};
  white-space: nowrap;
  display: inline-block;
`;

export default Remarquee;
