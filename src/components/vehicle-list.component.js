import React,{Component} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import VehicleTableRow from './VehicleTableRow'

export default class VehicleList extends Component{

    constructor(props){
        super(props)
        this.state = {
            Vehicles : []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/vehicles/')
        .then(res=> {
            this.setState({
                Vehicles : res.data
            });
        } )


        .catch((error) => {
            console.log(error);
        })
    }


    DataTable(){
        return this.state.Vehicles.map((res, i) => {
            return <VehicleTableRow obj = {res} key={i} /> 
        });
    }

    render() {

        return (<div className="table-wrapper">
            <Table striped border hover>

<thead>
    <tr>
        <th>Name</th>
        <th>Color</th>
        <th>Number</th>
    </tr>
</thead>

<tbody>
    {this.DataTable()}
</tbody>
     </Table>
        </div>)
    }
}