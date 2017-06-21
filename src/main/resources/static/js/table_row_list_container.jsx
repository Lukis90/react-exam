var TableRowListContainer = React.createClass({

    getInitialState: function () {
        return {
            flights: [],
            rowsClicked: []
        }
    },

    componentDidMount: function () {
        var self = this;
        axios.get('http://localhost:8080/api/flights/').then(function(response) {
            self.setState({
                flights: response.data
            });
            self.wrapFlights();
        });

    },
    
    wrapFlights: function () {
        var flights = this.state.flights;
        flights.map(function (flight) {
            flight.color = 'default';
        });
        this.setState({
            flights: flights
        });
    },

    handleRowClick: function (flight) {
        var self = this;
        var rowsClicked = this.state.rowsClicked;
        if (flight.color === 'default') {
            flight.color = 'danger';
            rowsClicked.push(flight.id);
            self.setState({
                rowsClicked: rowsClicked
            });
        } else {
            flight.color = 'default';
            var index = rowsClicked.indexOf(flight.id);
            rowsClicked.splice(index, 1);
            self.setState({
                rowsClicked: rowsClicked
            });
        }
        console.log(this.state.rowsClicked);
    },

    handleDeleteClick: function () {
        var rowsToDelete = this.state.rowsClicked;
        for (var i = 0; i < rowsToDelete.length; i++) {
            axios.delete('http://localhost:8080/api/flights/' + rowsToDelete[i]);
        }
        this.componentDidMount();
    },

    render: function () {
        return (
            <TableRowListComponent
                flights = {this.state.flights}
                onRowClick = {this.handleRowClick}
                onDeleteClick = {this.handleDeleteClick}
            />
        )
    }
});

window.TableRowListContainer = TableRowListContainer;