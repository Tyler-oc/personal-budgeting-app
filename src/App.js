import { Container, Stack } from 'react-bootstrap';
import { Button } from 'bootstrap';
import BudgetCard from './components/BudgetCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App_style.css';

function App() {
  return (
    <Container className='my-4'>
      <Stack direction="horizontal" gap="2" className='mb-4'>
        <h1 className='me-auto'>Budget</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div id='budget-card-div'>
        <BudgetCard></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
