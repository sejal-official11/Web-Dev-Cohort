import { useState } from "react";




function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    // setCount(count + 1);
    setCount((c) => c + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}

function App() {


  return (
    <div>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}


function Counter() {
  const {count, increaseCount} = useCounter();
  return (
    <>
      <div>
        <button onClick={increaseCount}>Increase {count}</button>
      </div>
    </>
  );
}

export default App;
