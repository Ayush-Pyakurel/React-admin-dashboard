import React from 'react'
import { useTheme, Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    {field: 'id'}
  ]

  return (
    <Box>
      <DataGrid rows={mockDataContacts} columns={columns}/>
    </Box>
  )
}

export default Contacts