import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("")

  const handleUpClick = () =>{
    // console.log("Converting to uppercase"+text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase!","success")
  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase!","success")
  }
  const handleClearClick = () =>{
    setText("")
    props.showAlert("Cleared the text!","success")
  }
  const handleCopyClick = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied the text!","success")
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[" "]+/)
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces!","success")
  }
  const handleOnChange = (event) =>{
    // console.log("On Change")
    setText(event.target.value)
  }

  return (
    <div>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1 className='my-4'>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#0b1a4c':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="text" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </div>
  )
}
