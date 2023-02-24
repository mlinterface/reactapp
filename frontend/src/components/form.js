import React, { Component } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption);
    }

    render() {
        return (
            <><RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="ds1"
                name="radio-buttons-group"
                onSubmit={this.formSubmit}>
                <FormControlLabel value="Dataset 1" checked={this.state.selectedOption === "Dataset 1"} onChange={this.onValueChange} control={<Radio />} label="Dataset 1" />
                <FormControlLabel value="Dataset 2" checked={this.state.selectedOption === "Dataset 2"} onChange={this.onValueChange} control={<Radio />} label="Dataset 2" />
                <FormControlLabel value="Dataset 3" checked={this.state.selectedOption === "Dataset 3"} onChange={this.onValueChange} control={<Radio />} label="Dataset 3" />
            </RadioGroup>
                <div>Selected option is : {this.state.selectedOption}</div>
            </>
        );
    }
}

export default Form;
