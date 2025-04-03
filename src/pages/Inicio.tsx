import styled from "styled-components";

const Modelo = styled.div
`
    background-color: lightblue;
    width: 100%;
    height: 100px;
    text-align: start;
    display: flex;
    justify-content: space-arround;
`

const Logo = styled.h1
`
    text-align: start;
`

const Fds = styled.h1
`
    text-align: end;
`

const Inicio = ()=>{
    return(
        <Modelo>        
            <Fds>a</Fds>
            <Logo>b</Logo>
        </Modelo>
    );
}

export default Inicio;