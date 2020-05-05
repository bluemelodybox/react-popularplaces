import React from "react";
import MUIDataTable from "mui-datatables";

export default function AnalysisTable({ data, title }) {
  const columns = [
    {
      name: "Location",
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: { fontWeight: "bold" },
        }),
        customBodyRender: (value) => {
          return (
            <a href={`https://maps.google.com/?q=${value}`} target="_blank" rel="noopener noreferrer">
              {value}
            </a>
          );
        },
      },
    },
    {
      name: "Morning Crowd (%)",
      options: {
        filter: false,
        sortDirection: "desc",
        setCellHeaderProps: () => ({
          style: { fontWeight: "bold", color: "#334253" },
        }),
      },
    },
    {
      name: "Afternoon Crowd (%)",
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: { fontWeight: "bold", color: "#334253" },
        }),
      },
    },
    {
      name: "Evening Crowd (%)",
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: { fontWeight: "bold", color: "#334253" },
        }),
      },
    },
    {
      name: "Changes (%)",
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: { fontWeight: "bold", color: "#334253" },
        }),
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    rowHover: true,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 15, 25, 50],
    print: false,
    responsive: "scrollFullHeight",
    fixedHeaderOptions: {
      xAxis: true,
      yAxis: true,
    },
    setTableProps: () => ({
      size: "small",
    }),
    selectableRows: false,
  };

  return (
    <div style={{ boxSizing: "border-box" }}>
      <MUIDataTable title={title} data={data} columns={columns} options={options} />
    </div>
  );
}
