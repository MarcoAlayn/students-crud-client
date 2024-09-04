import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../redux/actions";
import Loader from "../components/Loader/Loader";
import AlertFeedback from "../components/alertFeedback/AlertFeedback";
import Text from "../components/text/Text";
import { Box } from "@mui/material";
import ModalForm from "../components/modalForm/ModalForm";
import StudentTable from "../components/table/StudentTable";

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
      {!fetchInProcess && <AlertFeedback />}
      {/* modalForm */}
      {!fetchInProcess && showModalDetail && <ModalForm />}
      {/* Tabla */}
      {!fetchInProcess && studentList?.length > 0 ? (
        <StudentTable studentList={studentList} />
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
