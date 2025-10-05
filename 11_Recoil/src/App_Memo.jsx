import { useEffect, useState, memo } from "react";

function App() {
  return <Counter />;
}

function Counter() { 
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1);
    }, 3000);
  }, []);

  return (
    <div>
      {/* <MemoizedCurrentCount/> */}
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

// const MemoizedCurrentCount = memo(CurrentCount); // OR

const CurrentCount = memo(function() {
  return <div>1</div>;
});

// function CurrentCount() {
//   return <div>1</div>;
// }

const Increase = memo(function() {
  function increase() {}
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
})

const Decrease = memo(function() {
  function decrease() {}
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
})

export default App;
