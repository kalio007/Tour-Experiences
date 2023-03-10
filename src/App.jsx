import React, { useState } from 'react';
import Hero from './Components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero />
    </div>
  )
}

export default App
