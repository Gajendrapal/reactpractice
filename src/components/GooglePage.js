import React from "react"
import '../App.css';
import CustomInput from './CustomInput';

class GoogleSearchBox extends React.Component{
    state = {
        // myFirstTextboxInputValue :"",
        // myLastTextboxInputValue :"",
        myApiData: [],
        gender: '',
        moves:[],
        myButtonClickValue:""
    };

    componentDidMount()
    {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
            .then(response => {
                const data=response.json();
                // console.log(data)
                return data;
             }).then(response => {
                // console.log(response)
                const gameIndices =response.game_indices;
                const movesList = response.moves;
                this.setState({
                    myApiData: gameIndices,
                    moves:movesList
                })                
             }).catch(error => console.log(error)

             )

    }
    componentDidUpdate(prevProps,prevState)
    {
        if(this.state.moves !== prevState.moves)
        {
            console.log("Hello world");
        }
        if(this.state.myButtonClickValue !== prevState.myButtonClickValue)
        {
            console.log("Button clicked");
        }
        
        console.log("prev state: ", prevState);
        console.log("this state: ", this.state);
    }

    onButtonClick = (event)=>{
        event.preventDefault()
this.setState({
    myButtonClickValue:"Hello"
})
    }

    render(){
        //  console.log(this.state.moves)
        
        return (
        <div className="App-button">
        
        <button type="submit" onClick={this.onButtonClick}>Button </button>

            {/* {this.state.myApiData.map(item => {
                 return <div>{item.game_index}</div>
            })
            } */}
            {this.state.moves.map(item => {
            return <div>{item.move.name}</div>
            })}

            {/* {this.state.moves.map(item => {
            return <div>{item.version_group_details.map( item1 => {
                return <div>{item1.level_learned_at}</div>
                })}</div>
            })} */}



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
        // console.log(event.target.value);
        this.setState({gender:event.target.value
        })
    }
}

export default GoogleSearchBox;