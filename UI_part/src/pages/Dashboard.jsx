import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BarChart from "../components/home/charts/BarChart";
import Stats from "../components/home/stats/Stats";
import TransactionCustomer from "../components/home/TransactionCustomer";
import Table from "../components/Table";

export const employeesColumns = [
  {
    accessorKey: "name",
    header: "Employee Name",
  },
  {
    accessorKey: "number",
    header: "Number",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "project_id",
    header: "Project ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    Cell: ({ cell, row }) => (
      <div>
        {row.original.status === "Absent" && (
          <span className="text-red-500">{cell.getValue()}</span>
        )}
        {row.original.status === "Present" && (
          <span className="text-green-500">{cell.getValue()}</span>
        )}
        {row.original.status === "Late" && (
          <span className="text-yellow-500">{cell.getValue()}</span>
        )}
      </div>
    ),
  },
];

export const employees = [
  {
    name: "John Doe",
    number: "123456",
    role: "Engineer",
    project_id: "P001",
    status: "Present",
  },
  {
    name: "Jane Smith",
    number: "789012",
    role: "Doctor",
    project_id: "P002",
    status: "Absent",
  },
  {
    name: "Alex Brown",
    number: "345678",
    role: "Manager",
    project_id: "P003",
    status: "Present",
  },
  {
    name: "Lisa White",
    number: "901234",
    role: "Developer",
    project_id: "P004",
    status: "Late",
  },
  {
    name: "Mark Green",
    number: "567890",
    role: "Designer",
    project_id: "P005",
    status: "Absent",
  },
];



const Dashboard = () => {
  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" ,fontFamily: 'Futura' }} >
        Welcome Back Taher
      </Typography>
      <ComponentWrapper>
        <Stats />
      </ComponentWrapper>
{/*    sales statistics  */ }
      <ComponentWrapper>
          <Grid item xs={12} md={6} lg={8}>
            <BarChart />
          </Grid>
          
        
      </ComponentWrapper>
      

      <ComponentWrapper>
        <Typography variant="h5" sx={{ my: 3 , fontFamily : "Futura" }}>
          Employees Attendence
        </Typography>
        <Table
        data={employees}
        fields={employeesColumns}
        numberOfRows={5}
        enableTopToolBar={false}
        enableBottomToolBar={false}
        enablePagination={false}
        enableRowSelection={false}
        enableColumnFilters={false}
        enableEditing={false}
        enableColumnDragging={false}
/>

      </ComponentWrapper>
    </Box>
  );
};

export default Dashboard;
