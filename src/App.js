import { Card } from './components/Card';
import './App.css';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    `;

function App() {
  return <>
  <Container>
   <Card title="teste" />
   <Card content="teste" />
   </Container>
  </>
}

export default App;
