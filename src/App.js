import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card/Card.js';
import Pagination from './components/Pagination/Pagination.js';
import './App.css';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const[count ,setCount] =useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(res.data);
      } catch (err) {
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Pagination logic
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <div className="App">
     
      <div className='buttons_count'>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <h2>API Pagination</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="card-container">
        {currentTodos.length > 0 ? (
          currentTodos.map((todo) => <Card key={todo.id} todo={todo} />)
        ) : (
          <p>No data available</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(todos.length / todosPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 3de099b (code resent)
