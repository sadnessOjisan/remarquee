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
  truespeed?: string;
  vspace?: number;
  children?: string | React.ReactNode;
  className?: string;
}

interface State {
  loopNum: number;
  elementHeight: number | null;
  elementWidth: number | null;
  animationSec: number | null;
}

const Direction = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down'
};

class Remarquee extends React.Component<Props, State> {
  private text = React.createRef<HTMLParagraphElement>();
  private wrapper = React.createRef<HTMLParagraphElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      loopNum: -1,
      elementHeight: null,
      elementWidth: null,
      animationSec: null
    };
  }

  componentDidMount() {
    const { direction, scrollamount, scrolldelay, truespeed } = this.props;
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
    const wrapperWidth = this.wrapper.current.clientWidth;
    const wrapperHeight = this.wrapper.current.clientHeight;
    let animationSec: number;
    if (direction === Direction.up || direction === Direction.down) {
      if (truespeed === 'true') {
        animationSec =
          ((wrapperHeight / (scrollamount || 6)) * (scrolldelay || 85)) / 1000;
      } else {
        animationSec =
          ((wrapperHeight / (scrollamount || 6)) *
            (scrolldelay < 60 ? 60 : scrolldelay || 85)) /
          1000;
      }
    } else if (
      !direction ||
      direction === Direction.left ||
      direction === Direction.right
    ) {
      if (truespeed === 'true') {
        animationSec =
          ((wrapperWidth / (scrollamount || 6)) * (scrolldelay || 85)) / 1000;
      } else {
        animationSec =
          ((wrapperWidth / (scrollamount || 6)) *
            (scrolldelay < 60 ? 60 : scrolldelay || 85)) /
          1000;
      }
    }
    this.setState({
      elementHeight: this.text.current.clientHeight,
      elementWidth: this.text.current.clientWidth,
      animationSec: animationSec
    });
  }

  decrementLoopCount() {
    const { loopNum } = this.state;
    if (loopNum > 0) {
      this.setState({ loopNum: this.state.loopNum - 1 });
    }
  }

  render() {
    const { loopNum, animationSec, elementHeight, elementWidth } = this.state;
    const isLoop = loopNum === -1;
    const { children, direction, hspace, vspace, className } = this.props;
    return (
      <Wrapper {...this.props} ref={this.wrapper} className={className}>
        <Text
          ref={this.text}
          isLoop={isLoop}
          loopNum={loopNum}
          direction={direction}
          animationSec={animationSec}
          hspace={hspace + elementWidth || 0}
          vspace={vspace + elementHeight || 0}
        >
          {children}
        </Text>
      </Wrapper>
    );
  }
}

const Left = props => keyframes`
  0% { left: calc(100% - ${props.hspace}px); transform: translate(0); }
  100% { left: ${props.hspace}px; transform: translate(-100%); }
`;

const Right = props => keyframes`
  0% { left: ${props.hspace}px; transform: translate(-100%); }
  100% { left: calc(100% - ${props.hspace}px); transform: translate(0); }
`;

const Up = props => keyframes`
  0% { top: calc(100% - ${props.vspace}px); transform: translate(0,0); }
  100% { top: ${props.vspace}px; transform: translate(0,0); }
`;

const Down = props => keyframes`
0% { bottom: ${props.vspace}px; transform: translate(0,0); }
100% { bottom: calc(100% - ${props.vspace}px); transform: translate(0,100%); }
`;

const Wrapper = styled.div`
  position: relative;
  background-color: ${props => props.bgcolor};
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '16px')};
  padding-right: ${props => props.hspace}px;
  padding-left: ${props => props.hspace}px;
  padding-top: ${props => props.vspace}px;
  padding-bottom: ${props => props.vspace}px;
  overflow: hidden;
`;

const Text = styled.p`
  position: absolute;
  animation: ${props => {
      switch (props.direction) {
        case Direction.left:
          return Left(props);
        case Direction.right:
          return Right;
        case Direction.up:
          return Up;
        case Direction.down:
          return Down;
        default:
          return Left(props);
      }
    }}
    ${props => props.animationSec}s linear;
  animation-iteration-count: ${props =>
    props.isLoop ? 'infinite' : props.loopNum};
  white-space: nowrap;
  display: inline-block;
`;

export default Remarquee;
