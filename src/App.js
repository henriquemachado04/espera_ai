import { Card } from './components/Card';
import './App.css';
import { styled } from 'styled-components';
import { Dracula } from "./components/Dracula";

const Container = styled.div`
    display: flex;
    `;

function App() {
  return <>
  <Container>
   <Card title="teste" />
   <Card content="teste" />
   <Dracula/>
   </Container>
  </>
}

export default App;
