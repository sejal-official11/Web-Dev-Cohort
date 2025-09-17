import { useState } from "react";

//custom hook
function useCounter() {
  const [count, setCount] = useState(0);
  
  function increaseCount() {
    setCount((count) => count + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}


function App() {

  return (
    <div>
      {/* <button onClick={increaseCount}>Increase Count {count}</button> */}
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}


function Counter() {
  const { count, increaseCount } = useCounter();
return (
  <div>
    <button onClick={increaseCount}>Increase Count {count}</button>
  </div>
)
}

export default App;
