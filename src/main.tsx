import * as React from 'react'; 
import * as ReactDOM from "react-dom";
import styled from 'styled-components'
import './util/reset.css'

interface Props {
    className?: string;
    children?: string;
}

class Marquee extends React.Component<Props>{
    render(){
        const {children, className} = this.props;
        return <Wrapper className={className}>{children}</Wrapper>
    }
}

const Wrapper = styled.div`
`

export default Marquee;

ReactDOM.render(
    <Marquee>test</Marquee>,
    document.getElementById('root')
);