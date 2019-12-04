import React from "react"
import '../App.css';

class CustomInput extends React.Component{

    state={
        myInputValue:""

    }
    render()
    {
        return (
<div>
   <span style={{ color:"black"}}> {this.props.myLabel}</span>
            <input value={this.state.myInputValue}
                   onChange={this.myOnChange}
                   type={this.props.myType}
                   placeholder={this.props.myPlaceHolder}
            />
            {console.log(this.props.mycustomprops)}
            <span>{this.props.mycustomprops}</span>
</div>
        );

        
    }
   myOnChange= (event)=>{
       this.setState({
           myInputValue:event.target.value
       })
   }

}
export default CustomInput;