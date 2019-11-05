import React from "react";
import Table from "react-bootstrap/Table";

export const Projects = ({ projects }) => {
  const ProjectRow = (project, index) => {
    return (
      <tr key={index} className="even">
        {/* <td> {index + 1} </td> */}
        <td>{project.id}</td>
        <td>{project.id}</td>
        <td>{project.projectName}</td>
        <td>{project.customer.customerName}</td>
      </tr>
    );
  };

  const ProjectTable = projects.map((proj, index) => ProjectRow(proj, index));

  const tableHeader = (
    <thead className="bgvi">
      <tr>
        {/* <th>#</th> */}
        <th>System Record ID</th>
        <th>Project ID</th>
        <th>Project Name</th>
        <th>Customer Name</th>
      </tr>
    </thead>
  );

  return (
    <Table striped bordered hover id="table-to-xls">
      {tableHeader}
      <tbody>{ProjectTable}</tbody>
    </Table>
  );
};
