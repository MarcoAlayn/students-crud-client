import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../redux/actions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconBtn from "../components/button/IconBtn";
import Loader from "../components/Loader/Loader";
import AlertFeedback from "../components/alertFeedback/AlertFeedback";
import Text from "../components/text/Text";
import { Box } from "@mui/material";

const Students = () => {
  const dispatch = useDispatch();
  const { studentList, fetchInProcess, isFetchSuccess, fetchMessage } =
    useSelector((state) => state);
  // const studentList = [
  //   {
  //     studentId: 2,
  //     firstName: "Mentado",
  //     middleName: "Manrique",
  //     lastName: "Pérez",
  //     email: "luis.perez@example.com",
  //     phone: "8112345678",
  //     studentCreatedOn: "2024-09-01T14:52:53.39",
  //   },
  //   {
  //     studentId: 3,
  //     firstName: "María",
  //     middleName: "Guadalupe",
  //     lastName: "López",
  //     email: "maria.lopez@example.com",
  //     phone: "8123456780",
  //     studentCreatedOn: "2024-09-01T14:52:53.3933333",
  //   },
  //   {
  //     studentId: 4,
  //     firstName: "José",
  //     middleName: "Manuel",
  //     lastName: "Hernández",
  //     email: "jose.hernandez@example.com",
  //     phone: "8187654321",
  //     studentCreatedOn: "2024-09-01T14:52:53.3966667",
  //   },
  //   {
  //     studentId: 5,
  //     firstName: "Juan",
  //     middleName: "Carlos",
  //     lastName: "García",
  //     email: "juan.garcia@example.com",
  //     phone: "8115678901",
  //     studentCreatedOn: "2024-09-01T14:52:53.4",
  //   },
  //   {
  //     studentId: 6,
  //     firstName: "Raúl",
  //     middleName: "Alejandro",
  //     lastName: "Rodríguez",
  //     email: "raul.rodriguez@example.com",
  //     phone: "8181234567",
  //     studentCreatedOn: "2024-09-01T14:52:53.4033333",
  //   },
  //   {
  //     studentId: 7,
  //     firstName: "Elena",
  //     middleName: "Sofía",
  //     lastName: "Ramírez",
  //     email: "elena.ramirez@example.com",
  //     phone: "8187654320",
  //     studentCreatedOn: "2024-09-01T14:52:53.4066667",
  //   },
  //   {
  //     studentId: 8,
  //     firstName: "Patricia",
  //     middleName: "Lorena",
  //     lastName: "Gómez",
  //     email: "patricia.gomez@example.com",
  //     phone: "8129876543",
  //     studentCreatedOn: "2024-09-01T14:52:53.41",
  //   },
  //   {
  //     studentId: 9,
  //     firstName: "Carlos",
  //     middleName: "Eduardo",
  //     lastName: "Ruiz",
  //     email: "carlos.ruiz@example.com",
  //     phone: "6623456789",
  //     studentCreatedOn: "2024-09-01T14:52:53.41",
  //   },
  //   {
  //     studentId: 10,
  //     firstName: "Ana",
  //     middleName: "Carolina",
  //     lastName: "Vázquez",
  //     email: "ana.vazquez@example.com",
  //     phone: "6441234567",
  //     studentCreatedOn: "2024-09-01T14:52:53.4166667",
  //   },
  //   {
  //     studentId: 11,
  //     firstName: "Roberto",
  //     middleName: "Antonio",
  //     lastName: "Santos",
  //     email: "roberto.santos@example.com",
  //     phone: "6312345678",
  //     studentCreatedOn: "2024-09-01T14:52:53.4166667",
  //   },
  //   {
  //     studentId: 12,
  //     firstName: "Laura",
  //     middleName: "Beatriz",
  //     lastName: "Ortega",
  //     email: "laura.ortega@example.com",
  //     phone: "6223456789",
  //     studentCreatedOn: "2024-09-01T14:52:53.42",
  //   },
  //   {
  //     studentId: 13,
  //     firstName: "Fernando",
  //     middleName: "Andrés",
  //     lastName: "Méndez",
  //     email: "fernando.mendez@example.com",
  //     phone: "6423456780",
  //     studentCreatedOn: "2024-09-01T14:52:53.4233333",
  //   },
  //   {
  //     studentId: 14,
  //     firstName: "Paola",
  //     middleName: "María",
  //     lastName: "Cruz",
  //     email: "paola.cruz@example.com",
  //     phone: "6445678901",
  //     studentCreatedOn: "2024-09-01T14:52:53.4266667",
  //   },
  //   {
  //     studentId: 15,
  //     firstName: "Raúl",
  //     middleName: "Jesús",
  //     lastName: "Luna",
  //     email: "raul.luna@example.com",
  //     phone: "6625678901",
  //     studentCreatedOn: "2024-09-01T14:52:53.43",
  //   },
  //   {
  //     studentId: 16,
  //     firstName: "Marco",
  //     middleName: "Alayn",
  //     lastName: "Robles",
  //     email: "marc_rob92@hotmail.com",
  //     phone: "1234567890",
  //     studentCreatedOn: "2024-09-01T20:41:05.69",
  //   },
  //   {
  //     studentId: 17,
  //     firstName: "John",
  //     middleName: "Doe",
  //     lastName: "Smith",
  //     email: "johndoe@example.com",
  //     phone: "1234567890",
  //     studentCreatedOn: "2024-09-01T21:23:36.12",
  //   },
  //   {
  //     studentId: 18,
  //     firstName: "Jane",
  //     middleName: "Mary",
  //     lastName: "Doe",
  //     email: "janedoe@example.com",
  //     phone: "9876543210",
  //     studentCreatedOn: "2024-09-01T21:38:16.3",
  //   },
  //   {
  //     studentId: 19,
  //     firstName: "Jane",
  //     middleName: "Maria",
  //     lastName: "Doe",
  //     email: "jane@example.com",
  //     phone: "9876543210",
  //     studentCreatedOn: "2024-09-01T21:39:37.6966667",
  //   },
  //   {
  //     studentId: 20,
  //     firstName: "Michael",
  //     middleName: "David",
  //     lastName: "Johnson",
  //     email: "michaeljohnson@example.com",
  //     phone: "5555555555",
  //     studentCreatedOn: "2024-09-01T21:42:48.6366667",
  //   },
  //   {
  //     studentId: 21,
  //     firstName: "Emily",
  //     middleName: "Anne",
  //     lastName: "Brown",
  //     email: "emilybrown@example.com",
  //     phone: "3333333333",
  //     studentCreatedOn: "2024-09-01T21:47:29.8966667",
  //   },
  // ];
  console.log("studentList:", studentList);

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);
  console.log(fetchMessage !== null);
  return (
    <Layout>
      {/* loader */}
      <Loader />
      {/* alert */}
      <AlertFeedback />
      {/* Tabla */}
      {!fetchInProcess && isFetchSuccess && studentList.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell align='left'>Teléfono</TableCell>
                <TableCell align='left'>Correo Electrónico</TableCell>
                <TableCell align='left'>Fecha de Alta</TableCell>
                <TableCell align='left'>Opciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentList.map((row) => (
                <TableRow
                  key={row.studentId}
                >
                  <TableCell align='left'>{row.studentId}</TableCell>
                  <TableCell align='left'>
                    {row.firstName} {row.middleName} {row.lastName}
                  </TableCell>
                  <TableCell align='left'>{row.email}</TableCell>
                  <TableCell align='left'>{row.phone}</TableCell>
                  <TableCell align='left'>
                    {row.studentCreatedOn.slice(0, 10)}
                  </TableCell>
                  <TableCell align='left'>
                    <IconBtn />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        studentList.length === 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text textTemplate={"moduleTitle"}>
              No hay estudiantes para mostrar.
            </Text>
          </Box>
        )
      )}
    </Layout>
  );
};

export default Students;
