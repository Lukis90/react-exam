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
        });

    },

    handleRowClick: function (rowId) {
        console.log(rowId);
        var rows = this.state.rowsClicked;
        if (rows.indexOf(rowId) !== 1) {
            rows = rows.filter(function (rowId) {
                return el !== rowId;
            });
        } else {
            rows = rows.push(rowId);
        }
        this.setState({
            rowsClicked: rows
        })
    },

    render: function () {
        return (
            <TableRowListComponent
                flights = {this.state.flights}
                onRowClick = {this.handleRowClick}
            />
        )
    }
});

window.TableRowListContainer = TableRowListContainer;