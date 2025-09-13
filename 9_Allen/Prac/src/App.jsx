import {useState, useEffect} from 'react'

function App(){
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true)
  

  const Timer = function(){
    const [seconds, setSeconds] = useState(0);

    useEffect(function(){
      let clock = setInterval(function() {
        console.log("from inside clock");
        setSeconds(prev => prev + 1);
      }, 1000)

      return function(){
        clearInterval(clock);
      }
    }, [])

    return <div>{seconds} seconds</div>
  }

  useEffect(function() {
   // send a backend request to get data for this tab
   setLoading(true)
 fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(async res => {
  const json = await res.json();
  setTabData(json)
  setLoading(false)
 })

  }, [currentTab])

  return(
    <div>
      <button onClick={function(){
        setCurrentTab(1)
      }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
      <button onClick={function(){
        setCurrentTab(2)
      }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
      <button onClick={function(){
        setCurrentTab(3)
      }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
      <button onClick={function(){
        setCurrentTab(4)
      }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
     
     <br/>
     {loading ? "Loading..." : tabData.title}
    </div>
  )
}

export default App