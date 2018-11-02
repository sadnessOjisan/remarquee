import * as React from 'react'; 
import * as ReactDOM from "react-dom";
import styled, { keyframes } from 'styled-components'
import './util/reset.css'

interface Props {
  width?: number
  behavior?: string
  bgcolor?: string
  direction?: number
  height?: number
  hspace?: number
  loop?: number
  scrollamount?: number
  scrolldelay?: number
  truespeed?: number
  vspace?: number
  children?: string
  className?: string
}

interface State {
  loomNum: number
}

class App extends React.Component<Props, State>{
  constructor(props:Props){
    super(props)
    this.state = {
      loomNum: 0
    }
  }
    render(){
      const {children, className, width} = this.props;
        return <Wrapper width={width} className={className}><p>{children}</p></Wrapper>
    }
}

const Move = keyframes`
  0% { left: 100%; transform: translate(0); }
  100% { left: 0; transform: translate(-100%); }
`;

const Wrapper = styled.div`
  width: ${props => props.width? props.width:'100%'};
  > * {
    position: absolute;
    animation: ${Move} 10s infinite linear;
    white-space: nowrap;
    display:inline-block;
  }
`



ReactDOM.render(
    <App>aaaaaaaaaaaa</App>,
    document.getElementById('root')
);