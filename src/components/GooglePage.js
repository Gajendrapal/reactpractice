import React from "react"
import '../App.css';
import CustomInput from './CustomInput';

class GoogleSearchBox extends React.Component{
    state = {
        // myFirstTextboxInputValue :"",
        // myLastTextboxInputValue :"",
        
        gender: '',
    };

    render(){
        // console.log(this.state.myInputValue)
        return (
        <div className="App-button">
        
        {this.props.customprops}



            <CustomInput
                myLabel="First Name:"
                myPlaceHolder="Please Type First Name"
                myType="text"
                mycustomprops={this.props.customprops}
            />
            <CustomInput
                myLabel="Last Name:" 
                myPlaceHolder="Please Enter Last Name"
                myType="text"
            />
            <CustomInput
                myLabel="Age:" 
                myPlaceHolder="Please Enter Age"
                myType="number"
            />
            <CustomInput
                myLabel="Email:" 
                myPlaceHolder="Please Enter Email"
                myType="email"
            />
            <CustomInput
                myLabel="DOB:" 
                myPlaceHolder="Please Enter DOB"
                myType="date"
            />
                
                
           <select 
                value = {this.state.gender}
                placeholder = 'Select Gender'
                
                onChange   = {this.handleInput}
            >
                
             <option value="select">Select Gender..</option>  
             <option value="male">Male</option> 
             <option value="female">Female</option> 
             <option value="other">Other</option> 


            </select>
        </div>
        
        )
    }

    handleInput = (event) => {
        console.log(event.target.value);
        this.setState({gender:event.target.value
        })
    }
    
}

export default GoogleSearchBox;