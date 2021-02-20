import React, { Component } from 'react'

export default class Home extends Component {

    renderOutput= () =>
    {
        if(this.props.trips)
        {
            return (
                <>
                <div className="main-container">
                    <h1 className="count-value">{this.props.trips.length} Trips</h1>
                   
                </div>

                <div className="info-container">
                    <img src="https://img.icons8.com/wired/50/000000/sun.png" alt="tropic-img" />
                    <img src="https://img.icons8.com/ios-filled/50/000000/mountain.png" alt="trek-img" />
                    <img src="https://img.icons8.com/ios-filled/50/000000/bavarian-beer-mug.png" alt=
                        "club-img" />
                </div>
                <div className="count-container">
                    <h1>{this.findTropicCount()}</h1>
                    <h1>{this.findTrekCount()}</h1>
                    <h1>{this.findClubCount()}</h1>
                </div>

            </>
            );
        }
        else{
            return (
                <>
                    <div className="main-container">
                        <h1 className="count-value">{this.props.trips.length} Trips</h1>
                    </div>

                    <div className="info-container">
                        <img src="https://img.icons8.com/wired/50/000000/sun.png" alt="tropic-img" />
                        <img src="https://img.icons8.com/ios-filled/50/000000/mountain.png" alt="trek-img" />
                        <img src="https://img.icons8.com/ios-filled/50/000000/bavarian-beer-mug.png" alt="club-img" />
                    </div>
                    <div className="count-container">
                        <h1>0</h1>
                        <h1>0</h1>
                        <h1>0</h1>
                    </div>

                </>
            );
        }
    }
    findTropicCount = () => {
        const trips = this.props.trips;
        let tropicCount = trips.reduce((count, trip) => {
            return count + (trip.type.toLowerCase() === 'tropic')
        }, 0);
        return tropicCount;
    }

    findTrekCount = () => {
        const trips = this.props.trips;
        let trekCount = trips.reduce((count, trip) => {
            return count + (trip.type.toLowerCase() === 'trek')
        }, 0);
        return trekCount;
    }

    findClubCount = () => {
        const trips = this.props.trips;
        let clubCount = trips.reduce((count, trip) => {
            return count + (trip.type.toLowerCase() === 'club')
        }, 0);
        return clubCount;
    }

    render() {
        return (
        <>
            {this.renderOutput()}
        </>
        )
    }
}