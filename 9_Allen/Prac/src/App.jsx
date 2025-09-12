import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increasedCount(){
    setCount(function(currVal) {
      return currVal + 1;
    })
  }

  function decreaseCount(){
    setCount(function(currVal) {
      return currVal - 1;
    })
  }
  useEffect(function(){
    console.log("Hello")
    setInterval(increasedCount, 1000)
  }, [])

  useEffect(function(){
    console.log("The count has been updated to " + count);
  }, [count])



  return (
    <div>
      {count}
    </div>
  )

}





export default App;