import React from 'react'

import Action from "./Action";
import AddOption from "./Addoption";
import Options from "./Options";
import Header from "./Header";
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
 
    state = {
        options:[], 
        selectedOption:undefined 
    }

    handleDeleteOptions = () =>{
        this.setState(()=> ({options:[]}))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) =>  optionToRemove !== option)
        }));
    }

    handlePick= () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item'

        }else if (this.state.options.indexOf(option) > -1){
            return "this option already exists "
        }

        this.setState((prevState) => ({
            options:prevState.options.concat(option)
        }))

    }
    handleClearSelectionOption = () =>{
        this.setState(()=> ({
            selectedOption:undefined
        }))
    }

    //lifecycle method and can only be used with class based components 
    componentDidMount(){
        try {
            const json = localStorage.getItem('options'); 
            const options = JSON.parse(json) 
            
            if(options){
                this.setState(() => ({options})); 
            }
    
        } catch(e){
            //do nothing at all 
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }

    //when a componenet gets unrendered 
    componentWillUnmount(){
        console.log('component will unmount')
    }

    render(){
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectionOption={this.handleClearSelectionOption}
                /> 
                <Header subtitle = {subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                /> 
                <AddOption
                    handleAddOption={this.handleAddOption}
                /> 
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options:[]
}
