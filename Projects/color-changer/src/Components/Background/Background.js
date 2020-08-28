import React from 'react';
import './style.css'

class Background extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            selectedColor: "white" 
        }
    }


    changeBackgroundColour = (event) => {
        console.log("current color selected ---",event.target.value);
        
        //const val = event.target.value;
        
        this.setState({
            selectedColor: event.target.value
        })
    };
    
    
    // @override
    render = () => {
        return(
            <div style={
                { 
                backgroundColor:this.state.selectedColor 
                }
            }
             className="back-container">
                <div className="color-box">
                    <h2>Choose a colour</h2>
                    <input onChange={this.changeBackgroundColour} type="color"/>
                    <p>{this.state.selectedColor}</p>
                </div>
            </div>
        )
    }
}

export default Background;