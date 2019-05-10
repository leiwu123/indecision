import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    // state = {
    //     options: []
    // }
    constructor(props) {
        super(props);
        this.state = {
            // options: props.options
            options: [],
            selectedOption: undefined
        };
    }
    
    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })

        this.setState(() => ({ options: [] }));  // es6 using ({}) for returning object
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        // this.setState((prevState) => {
        //     return {
        //         // options: prevState.options.concat([option])
        //         options: prevState.options.concat(option)
        //     }
        // }) 

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render() {
        const title = 'New App!'
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick} 
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}