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
`

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);