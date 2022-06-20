import Button from "./Button"
import styles from "./App.module.css"
import {useState, useEffect} from "react"

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setCounter((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)

  useEffect(()=>{
    console.log("I run only once")
  }, [])
  useEffect(()=>{
    if (keyword !== ""){
      console.log("I run when keyword changes")
    }
  }, [keyword])
  useEffect(()=>{
    console.log("I run when counter changes")
  }, [counter])

  return (
    <div>
      <input 
        value={keyword} 
        onChange ={onChange} 
        type="text" 
        placeholder="Serach here..."/>
      <h1 className={styles.title}> {counter} </h1>
      <button onClick={onClick}> click me </button>
    </div>
  );
}

export default App;
