import React from "react";
import MUIDataTable from "mui-datatables";

export default function SimpleTable({ data }) {
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
      name: "Current Crowd (%)",
      options: {
        filter: false,
        sortDirection: "desc",
        setCellHeaderProps: () => ({
          style: { fontWeight: "bold", color: "#334253" },
        }),
      },
    },
    {
      name: "Usual Crowd (%)",
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: { fontWeight: "bold", color: "#334253" },
        }),
      },
    },
    {
      name: "Crowd Ratio (%)",
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: { fontWeight: "bold", color: "#334253" },
        }),
      },
    },
    {
      name: "Crowd Changes (%)",
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: { fontWeight: "bold", color: "#334253" },
        }),
      },
    },
    {
      name: "Type",
      options: {
        filter: true,
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
    fixedHeaderOptions: {
      xAxis: true,
      yAxis: true,
    },
    setTableProps: () => ({
      size: "small",
    }),
    selectableRows: false,
  };

  return <MUIDataTable title={"Popular places"} data={data} columns={columns} options={options} />;
}
