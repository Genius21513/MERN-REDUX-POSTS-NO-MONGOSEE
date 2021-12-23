import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Record = (props) => (
    <tr>
        <td>{ props.record.person_name }</td>
        <td>{ props.record.person_position }</td>
        <td>{ props.record.person_level }</td>
        <td>
            <Link to={'/edit/' + props.record._id}>Edit</Link> |
            <a
                href='/'
                onClick={() => {
                    props.deleteRecord(props.record._id);
                }}
            >
            Delete</a>
        </td>
    </tr>
);


export default class RecordList extends Component {
    constructor(props) {
        super(props);
        this.deleteRecord = this.deleteRecord.bind(this);
        // this.recordList = this.recordList.bind(this);
        this.state = { records: [] };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/record')
            .then((response)=>{
                this.setState({ records: response.data });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    deleteRecord(id) {
        axios.delete('http://localhost:5000/' + id)
        .then((response)=>{
          console.log(response.data);  
        });

        this.setState({
            record: this.state.records.filter((el) => el._id !== id),
        });
    }

    render() {         
        const rows = [];

        this.state.records.forEach((currentRecord) => {
            rows.push(
                <Record
                    record={currentRecord}
                    deleteRecord={this.deleteRecord}
                    key={currentRecord._id}
                />
            );
        });
        
        return (
            <div>
                <h3>Record List</h3>
                <table className='table table-striped' style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}