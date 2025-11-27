
import React from "react";
import './../styles/App.css';

const App = () => {
   const [inputValue, setInputValue] = useState('')
    const takeInput= (el)=>{
      console.log('keyDown',el)
      console.log('keyDown',el.key)
      
    }

    const handleChange=(event)=>{
      setInputValue(event.target.value)  
    }

   return (
      <div>
         <label>Enter name
            <input type='text' value={inputValue} onChange={handleChange} onKeyDown={takeInput} />
         </label>
            {inputValue && <p>Hello {inputValue}!</p>}
      </div>
    )
}

export default App
