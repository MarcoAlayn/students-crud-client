import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentById,
  showModalDetail,
  setModalMode,
  deleteStudent,
  getAllStudents,
} from "../../redux/actions";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.text.primary,
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: theme.palette.action.selected,
      },
    },
  },
}));

export default function Options({ id }) {
  const { isFetchSuccess } = useSelector((state) => state);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModalRead = () => {
    dispatch(getStudentById(id));
    if (isFetchSuccess) {
      dispatch(showModalDetail(true));
      dispatch(setModalMode("read"));
    }
    setAnchorEl(null);
  };

  const handleOpenModalEdit = () => {
    dispatch(getStudentById(id));
    if (isFetchSuccess) {
      dispatch(showModalDetail(true));
      dispatch(setModalMode("edit"));
    }
    setAnchorEl(null);
  };

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
    setAnchorEl(null);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteStudent(id));
      dispatch(getAllStudents());
    } catch (error) {
      console.error("Error al eliminar el estudiante:", error);
    }
    setShowConfirmationModal(false);
  };
  

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {/* only read */}
        <MenuItem onClick={handleOpenModalRead} disableRipple>
          <VisibilityIcon />
          Ver
        </MenuItem>
        {/* edit */}
        <MenuItem onClick={handleOpenModalEdit} disableRipple>
          <EditIcon />
          Editar
        </MenuItem>
        {/* delete */}
        <MenuItem onClick={handleOpenConfirmationModal} disableRipple>
          <DeleteForeverIcon />
          Eliminar
        </MenuItem>
      </StyledMenu>
      {/* Confirmation Modal */}
      <Dialog
        open={showConfirmationModal}
        onClose={handleCloseConfirmationModal}
      >
        <DialogTitle>¿Estás seguro?</DialogTitle>
        <DialogContent>
          ¿Realmente deseas eliminar este elemento? Esta acción no se puede
          deshacer.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmationModal}>Cancelar</Button>
          <Button onClick={handleDelete} color='primary'>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
