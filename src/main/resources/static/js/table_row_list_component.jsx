var TableRowListComponent = React.createClass({
    render: function() {
        var self = this;
        var flightRows = this.props.flights.map(function (flight) {
            return (
                <tr className={flight.color} key={flight.id} onClick={function() {self.props.onRowClick(flight)}}>
                    <td>{flight.id}</td>
                    <td>{flight.flightNumber}</td>
                    <td>{flight.date}</td>
                    <td>{flight.time}</td>
                    <td>{flight.company}</td>
                    <td>{flight.status}</td>
                </tr>
            )
        });

        return (
            <tbody>
                {flightRows}
                <button className="text-center" onClick={this.props.onDeleteClick}>Ištrinti</button>
            </tbody>
        );
    }
});

window.TableRowListComponent = TableRowListComponent;