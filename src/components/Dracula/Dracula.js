import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
    button{
        width: 150px;
        height: 50px;
        
    }

    h1{
        color: orange
    }
    
    `



export function Dracula(){
    const [count, setCount] = useState(0);

    return (<div>
        <Container>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Aumentar 1</button>
            <button onClick={() => setCount(count - 1)}>Diminuir 1</button>
        </Container>
    </div>
    );
}