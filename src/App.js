import { Container, Stack, Button } from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App_style.css';
import AddBudgetModal from './components/AddBudgetModal';
import { useState } from 'react';
import { useBudgets } from './contexts/BudgetsContext';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets, getBudgetExpenses } = useBudgets()

  return (
    <Container className='my-4'>
      <Stack direction="horizontal" gap="2" className='mb-4'>
        <h1 className='me-auto'>Budget</h1>
        <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div id='budget-card-div'>
        {budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
          return (
            <BudgetCard 
              key={budget.id}
              name={budget.name}
              amount={amount}
              max={budget.max}
            />
          )
        })}
      </div>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
    </Container>
  )
}

export default App;
