import React, { useState } from 'react'

const TextForm = (props) => {
  const[text,setText] = useState('Enter text');
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleClear = () => {
    setText('');
  }
  const handleExtraSpace = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "))

}

  return (
    <>
    <div className='container ' style={{color : props.mode === 'light' ? 'black': 'white'}} >
        <h1 className='mb-3' >{props.heading} </h1>
        <div className='mb-3'>
            <textarea className='form-control' value={text} style={{backgroundColor : props.mode === 'light' ? 'white': 'grey' , color: props.mode === 'light' ? 'black' : 'white'}} onChange={handleOnChange} id='mybox' rows='8'></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${props.mode ==='light' ? 'dark' : 'light'} mx-2 my-3`} onClick={handleOnClick}>Convert Uppercase</button>
        <button disabled={text.length===0}  className={`btn btn-${props.mode ==='light' ? 'dark' : 'light'} mx-2 my-3`} onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0}  className={`btn btn-${props.mode ==='light' ? 'dark' : 'light'} mx-2 my-3`} onClick={handleExtraSpace}>Remove extra space</button>
    </div>
    <div className='container'  style={{color : props.mode === 'light' ? 'black': 'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters </p>
      <p> Time to read is: { 0.008 * text.split(" ").filter((e)=> {return e.length!==0}).length} minutes</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm