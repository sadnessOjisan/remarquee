import * as React from 'react'; 
import * as ReactDOM from "react-dom";
import styled from 'styled-components'
import './util/reset.css'

class App extends React.Component{
    render(){
        return <Wrapper>aaa</Wrapper>
    }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const PhoneWrapper = styled.div`
height: 736px;
  width: 414px;
  position: relative;
`

const Phone = styled.img`
  height: 736px;
  width: 414px;
`

const UIView = styled.div`
  width: 320px;
  height: 520px;
  position: absolute;
  top: 110px;
  left: 47px;
  background-color: white;
`

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);