import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const coloums = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      type: "number",
      headerAlign: "left",
      flex: 1,
      align: "left",
      renderCell: params => (<Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
      </Typography>),
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box margin="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        margin="40px 0 0 0"
        height="65vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[700],
            borderTop: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={coloums} />
      </Box>
    </Box>
  );
};

export default Invoices;
