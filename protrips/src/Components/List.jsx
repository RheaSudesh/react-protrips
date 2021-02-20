import React from 'react'
import './List.css'


export default class List extends React.Component {

    printListOfTrips = () => {
        const trips = this.props.trips;
        const mapRows = trips.map((trip, index) => (
            <tr key={index} className="table-content">
                <td>{trip.date}</td>
                <td>{trip.place}</td>
                <td>{trip.type}</td>
            </tr>
        ))
        return mapRows;
    }


    render() {

        return (
            <>
              <table >
                    <thead >
                        <tr >
                            <th>Date</th>
                            <th>Place</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.printListOfTrips()}
                    </tbody>
                </table>

            </>
        );
    }
}
