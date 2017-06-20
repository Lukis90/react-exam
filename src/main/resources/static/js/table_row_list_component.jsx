var TableRowListComponent = React.createClass({
    render: function() {
        var self = this;
        var flightRows = this.props.flights.map(function (flight) {
            return (
                <tr key={flight.id} onClick={function() {self.props.onRowClick(flight.id)}}>
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
            </tbody>
        );
    }
});

window.TableRowListComponent = TableRowListComponent;