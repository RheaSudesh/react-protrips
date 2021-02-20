import React, { Component } from 'react'
import './Trip.css'
export default class AddTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            date: '',
            place: '',
            type: ''
        }
    }


    getDate = (e) => {
        this.setState({ ...this.state, date: e.target.value })
    }
    getPlace = (e) => {
        this.setState({ ...this.state, place: e.target.value })
        console.log('state', this.state);
    }
    findValue = (e) => {
        this.setState({ ...this.state, type: e.target.value })
    }
    addTripToList = (e) => {
        e.preventDefault();
        this.setState({
            trips: [...this.state.trips, {
                date: this.state.date,
                place: this.state.place,
                type: this.state.type
            }],
        });
    }
    componentDidUpdate() {
        this.props.initializeTripList(this.state.trips);
    }


    render() {
        return (
            <>
                <div className="trip-container">
                    <div className="header-container">
                        <h1>Add a Trip</h1>
                    </div>
                    <form className="form-container">
                        <label className="spacing">Date:</label>
                            <input type="date" onChange={this.getDate} />
                        <label className="spacing">Place:</label>
                             <input type="text" onChange={this.getPlace} />
                        <label className="spacing">Type:</label>
                            <select onChange={this.findValue}>
                                <option hidden>Choose Type</option>
                                <option>Trek</option>
                                <option>Club</option>
                                <option>Tropic</option>
                             </select>
                        <button type="submit" className="spacing submit-button" onClick={this.addTripToList}>SUBMIT</button>
                        
                    </form>
                </div>

            </>
        )
    }
}