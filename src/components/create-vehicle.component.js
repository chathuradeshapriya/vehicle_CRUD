import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios, { Axios } from 'axios';

export default class CreateVehicle extends Component {


    constructor(props) {
        super(props)

        this.onChangeVehicleName = this.onChangeVehicleName.bind(this);
        this.onChangeVehicleColor = this.onChangeVehicleColor.bind(this);
        this.onChangeVehicleNumber = this.onChangeVehicleNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : '',
            color : '',
            number : ''
        }
    }

    onChangeVehicleName(e) {
        this.setState({name :e.target.value})
    }

    onChangeVehicleColor(e) {
        this.setState({color: e.target.value})
    }

       onChangeVehicleNumber(e) {
        this.setState({number: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const vehicleObject = {
            name: this.state.name,
            color: this.state.color,
            number: this.state.number
        };

        axios
        .post('http://localhost:4000/vehicles/create-vehicle', vehicleObject)
        .then(res => console.log(res.data));
        // .catch(err => console.error(err));


        this.setState({name: '', color: '', number: ''})
    }






    render() {
        return (
            <div className='form-wrapper'>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId='Name'>
                        <Form.Label> Name Of the Vehicle</Form.Label>
                        <Form.Control type='text' value={this.state.name} onChange ={this.onChangeVehicleName} />
                    </Form.Group>

                    <Form.Group controlId='Color'>
                        <Form.Label>Owner Email</Form.Label>
                        <Form.Control type='text' value={this.state.color} onChange={this.onChangeVehicleColor}/>
                    </Form.Group>

                    <Form.Group controlId='Number'>
                        <Form.Label>Number of the Vehicle</Form.Label>
                        <Form.Control type='text' value={this.state.number} onChange={this.onChangeVehicleNumber}/>
                    </Form.Group>


                    <Button variant='danger' size='lg' block="block" type='submit'>
                        Add Vehicle
                    </Button>


                </Form>

            </div>
        );
    }
}