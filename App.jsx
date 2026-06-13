import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense,
      date: new Date(expense.date).toISOString().split('T')[0]
    }
    setExpenses([...expenses, newExpense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  const editExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(e => 
      e.id === id ? { ...e, ...updatedExpense } : e
    ))
  }

  return (
    <div className="app">
      <Dashboard 
        expenses={expenses} 
        onAddExpense={addExpense}
        onDeleteExpense={deleteExpense}
        onEditExpense={editExpense}
      />
    </div>
  )
}

export default App
