import * as React from 'react'; 
import * as ReactDOM from "react-dom";
import styled from 'styled-components'
import './util/reset.css'

interface Props {
  width: number
  behavior: string
  bgcolor: string
  direction: number
  height: number
  hspace: number
  loop: number
  scrollamount: number
  scrolldelay: number
  truespeed: number
  vspace: number
  children: string
  className: string
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
      const {children, className} = this.props;
        return <Wrapper className={className}>{children}</Wrapper>
    }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);