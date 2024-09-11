import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import * as employeeService from '../services/EmployeeService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

export const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        employeeService.getAllEmployees()
            .then(res => {
                setEmployees(res.data);
            });
    }, []);

    const goToUpdate = (id) => {
        navigate(`/update/${id}`);
    };

    const deleteEmployee = (id) => {
        employeeService.deleteEmployee(id)
            .then(() => {
                setEmployees(employees.filter(employee => employee.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the employee!', error);
            });
    };

    return (
        <div>
            <Table sx={{ minWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow hover key={employee.id}>
                            <TableCell>{employee.id}</TableCell>
                            <TableCell>{employee.firstName}</TableCell>
                            <TableCell>{employee.lastName}</TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell align="right">
                                <IconButton component="a" onClick={() => goToUpdate(employee.id)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton component="a" onClick={() => deleteEmployee(employee.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
