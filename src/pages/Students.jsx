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
import Options from "../components/button/Options";
import Loader from "../components/Loader/Loader";
import AlertFeedback from "../components/alertFeedback/AlertFeedback";
import Text from "../components/text/Text";
import { Box } from "@mui/material";
import ModalForm from "../components/modalForm/ModalForm";

const Students = () => {
  const dispatch = useDispatch();
  const { fetchInProcess, studentList, showModalDetail } = useSelector(
    (state) => state
  );

  useEffect(() => {
    try {
      dispatch(getAllStudents());
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  return (
    <Layout>
      {/* loader */}
      <Loader />
      {/* alert */}
      <AlertFeedback />
      {/* modalForm */}
      {!fetchInProcess && showModalDetail && <ModalForm />}
      {/* Tabla */}
      {!fetchInProcess && studentList?.length > 0 ? (
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
              {studentList?.map((row) => (
                <TableRow key={row?.studentId}>
                  <TableCell align='left'>{row?.studentId}</TableCell>
                  <TableCell align='left'>
                    {row?.firstName} {row?.middleName} {row?.lastName}
                  </TableCell>
                  <TableCell align='left'>{row?.email}</TableCell>
                  <TableCell align='left'>{row?.phone}</TableCell>
                  <TableCell align='left'>
                    {row?.studentCreatedOn.slice(0, 10)}
                  </TableCell>
                  <TableCell align='left'>
                    <Options id={row?.studentId} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
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
      )}
    </Layout>
  );
};

export default Students;
