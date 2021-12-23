import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


class Edit extends Component {
    constructor (props) {
        super(props);

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonPosition = this.onChangePersonPosition.bind(this);
        this.onChangePersonLevel = this.onChangePersonLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: "",
            person_position: "",
            person_level: "",
            records: [],
        };
    }

    componentDidMount () {
        axios
            .get('http://localhost:5000/record/' + this.props.params.id)
            .then((response) => {
                this.setState({
                    person_name: response.data.person_name,
                    person_position: response.data.person_position,
                    person_level: response.data.person_level,
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    onChangePersonName(e) {
        this.setState({
            person_name: e.target.value,
        })
    }

    onChangePersonPosition(e) {
        this.setState({
            person_position: e.target.value,
        });
    }

    onChangePersonLevel(e) {
        this.setState({
            person_level: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newEditedperson = {
            person_name: this.state.person_name,
            person_level: this.state.person_level,
            person_position: this.state.person_position,
        }

        axios
            .post('http://localhost:5000/update/' + this.props.params.id, 
            newEditedperson)
            .then((res) => console.log(res.data));

        // this.props.history.push('/');
    }

    render() {
        return(

            <div className='container' style={{ marginTop : 20 }}>
            <h3>Update Record</h3>
            <form onSubmit={this.onSubmit}>
                <div className='form-group row p-2 align-items-center'>
                    <label className='col-md-3'>Name of the person:</label>
                    <div className='col-md-3'>
                        <input 
                            type='text'
                            className='form-control'
                            value={this.state.person_name}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                </div>
                <div className='form-group row p-2 align-items-center'>
                    <label className='col-md-3'>Person's position:</label>
                    <div className='col-md-3'>
                        <input 
                            type='text'
                            className='form-control'
                            value={this.state.person_position}
                            onChange={this.onChangePersonPosition}
                        />
                    </div>
                </div>
                <div className='form-group row p-2 align-items-center'>
                    <label className='col-md-3'>Person's level</label>
                    <div className='col-md-6 d-flex align-items-start'>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='priorityOptions'
                                id='priorityLow'
                                value='Intern'
                                checked={this.state.person_level === 'Intern'}
                                onChange={this.onChangePersonLevel}
                            />
                            <label className='form-check-level'>Intern</label>
                        </div>

                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='priorityOptions'
                                id='priorityLow'
                                value='Junior'
                                checked={this.state.person_level === 'Junior'}
                                onChange={this.onChangePersonLevel}
                            />
                            <label className='form-check-level'>Junior</label>
                        </div>

                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='priorityOptions'
                                id='priorityLow'
                                value='Senior'
                                checked={this.state.person_level === 'Senior'}
                                onChange={this.onChangePersonLevel}
                            />
                            <label className='form-check-level'>Senior</label>
                        </div>
                    </div>
                </div>

                <div className='form-group row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-3 d-flex'>
                        <input
                            type='submit'
                            value='Edit person'
                            className='btn btn-primary align-self-start'
                        />
                    </div>
                </div>
            </form>
        </div>
            
        );
    }
}

export default (props) => (<Edit {...props} params={useParams()}/>);