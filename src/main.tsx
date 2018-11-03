import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import "./util/reset.css";

interface Props {
  width?: number;
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
  children?: string;
  className?: string;
}

interface State {
  loopNum: number;
}

const Direction = {
  left: "left",
  right: "right",
  up: "up",
  down: "down"
};

class Remarquee extends React.Component<Props, State> {
    private text = React.createRef<HTMLParagraphElement>()
  constructor(props: Props) {
    super(props);
    this.state = {
      loopNum: -1
    };
  }

  componentDidMount(){
    this.text.current.addEventListener("webkitAnimationEnd", ()=>{this.decrementLoopCount()});
    this.text.current.addEventListener("AnimationEnd", ()=>{this.decrementLoopCount()});
    this.text.current.addEventListener("animationend", ()=>{this.decrementLoopCount()});
    this.text.current.addEventListener("oAnimationEnd", ()=>{this.decrementLoopCount()});
  }

  decrementLoopCount(){
    const {loopNum} = this.state
    console.log('<decrementLoopCount> loopNum: ', loopNum)
    if(loopNum > 0){
        this.setState({loopNum: this.state.loopNum-1})
    }
  }

  render() {
      const {loopNum} = this.state
      console.log('loopNum: ', loopNum)
      const isLoop = loopNum === -1;
    const { children } = this.props;
    return (
      <Wrapper {...this.props}>
        <Text ref={this.text} isLoop={isLoop} loopNum={loopNum} {...this.props}>{children}</Text>
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

const Up = keyframes`
  0% { bottom: 100%; transform: translate(0,100%); }
  100% { bottom: 0px; transform: translate(0,0); }
`;

const Down = keyframes`
  0% { bottom: 0px; transform: translate(0,0); }
  100% { bottom: 100%; transform: translate(0,100%); }
`;

const Wrapper = styled.div`
  position: relative;
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => props.height && props.height};
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
  animation-iteration-count: ${props=>props.isLoop? 'infinite' : props.loopNum};
  white-space: nowrap;
  display: inline-block;
`

ReactDOM.render(<Remarquee direction='left'>aaaaaaaaaaaa</Remarquee>, document.getElementById("root"));

export default Remarquee;

