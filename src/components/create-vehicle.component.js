import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateVehicle extends Component {

    render() {
        return (
            <div className='form-wrapper'>
                <Form>
                    <Form.Group controlId='VehicleName'>
                        <Form.Label> Name Of the Vehicle</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>

                    <Form.Group controlId='VehicleColor'>
                        <Form.Label>Color of the Vehicle</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>

                    <Form.Group controlId='VehicleNumber'>
                        <Form.Label>Number of the Vehicle</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>


                    <Button variant='danger' size='lg' block="block" type='submit'>
                        Add Vehicle
                    </Button>


                </Form>

            </div>
        );
    }
}