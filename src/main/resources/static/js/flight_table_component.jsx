
var FlightTableComponent = React.createClass({
    render: function () {
       return (
           <div className="container">
              <table className="table">
                  <thead className="thead-default">
                      <tr>
                          <td>Id</td>
                          <td>Flight No.</td>
                          <td>Date</td>
                          <td>Time</td>
                          <td>Company</td>
                          <td>Status</td>
                      </tr>
                  </thead>
                  <TableRowListContainer />
              </table>
           </div>
       )
    }
});

window.FlightTableComponent = FlightTableComponent;