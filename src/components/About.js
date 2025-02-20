// import React,{useState} from 'react'
import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#0b1a4c':'white'
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    
    // const toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //     }
    // }
  return (
    <div className='container' style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong> 
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils gives you a way to analyze your text quickly and efficiently.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong> 
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils ia a free character counter and word counter tool that provides instant character and word count. This allows to limit the number of words and characters to write.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong> 
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This word counter software works in any browsers such as Chrome, Firefox, Internet Exploror, Safari, Opera. It suits to count characters in Facebook, blog, book, pdf and essay.
                    </div>
                </div>
            </div>
        </div>
        {/*<div className="conatainer my-3">
            <button type='button' className="btn btn-primary" onClick={toggleStyle} >{btnText}</button>
        </div>*/}
    </div>
  )
}
