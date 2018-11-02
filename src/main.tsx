import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import "./util/reset.css";

interface Props {
  width?: number;
  behavior?: string;
  bgcolor?: string;
  direction?: string;
  height?: number;
  hspace?: number;
  loop?: number;
  scrollamount?: number;
  scrolldelay?: number;
  truespeed?: number;
  vspace?: number;
  children?: string;
  className?: string;
}

interface State {
  loomNum: number;
}

const Direction = {
  left: "left",
  right: "right",
  up: "up",
  down: "down"
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loomNum: 0
    };
  }
  render() {
    const { children, className, width, height, direction } = this.props;
    console.log('direction: ', direction)
    return (
      <Wrapper width={width} height={height} className={className} direction={direction}>
        <p>{children}</p>
      </Wrapper>
    );
  }
}

const Left = keyframes`
  0% { left: 100%; transform: translate(0); }
  100% { left: 0; transform: translate(-100%); }
`;

const Right = keyframes`
  0% { left: 0; transform: translate(-100%); }
  100% { left: 100%; transform: translate(0); }
`;

const Wrapper = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => props.height && props.height};
  > * {
    position: absolute;
    animation: ${props => {
        switch (props.direction) {
          case Direction.left:
            return Left;
          case Direction.right:
            return Right;
          case Direction.up:
            return Left;
          case Direction.down:
            return Left;
          default:
            return Left;
        }
      }}
      10s infinite linear;
    white-space: nowrap;
    display: inline-block;
  }
`;

ReactDOM.render(<App direction='right'>aaaaaaaaaaaa</App>, document.getElementById("root"));
