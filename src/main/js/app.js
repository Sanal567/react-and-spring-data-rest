import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  componentDidMount() {
    fetch("/api/employees")
      .then((response) => {
        return response.json();
      })
      .then((responseInJSONFormat) => {
        this.setState({ employees: responseInJSONFormat._embedded.employees });
      });
  }

  render() {
    return (
      <div>
        <span> Welcome to React + Spring Boot</span>
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

class EmployeeList extends React.Component {
  render() {
    const employees = this.props.employees.map((employee) => (
      <Employee key={employee._links.self.href} employee={employee} />
    ));
    return (
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
          </tr>
          {employees}
        </tbody>
      </table>
    );
  }
}

class Employee extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.employee.firstName}</td>
        <td>{this.props.employee.lastName}</td>
        <td>{this.props.employee.description}</td>
      </tr>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
