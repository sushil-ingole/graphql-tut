import { useState } from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query GetAllTodos {
    getTodos {
      title
      completed
      user {
        name
        email
        phone
      }
    }
  }
`

function App() {
  const {data, loading} = useQuery(query);
  const [count, setCount] = useState(0);

  if(loading) return <h1>Loading...</h1>

  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default App
