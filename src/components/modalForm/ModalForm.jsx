import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller } from "react-hook-form";
import {
  showModalDetail as toggleModalDetail,
  resetStudentInfo,
  updateStudent,
} from "../../redux/actions";

export default function ModalForm() {
  const dispatch = useDispatch();
  const { showModalDetail, studentSelected, modalMode } = useSelector(
    (state) => state
  );

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  const handleClose = () => {
    if(!isDirty && !isFetchSuccess) return
    dispatch(toggleModalDetail(false));
    dispatch(resetStudentInfo());
  };

  const onSubmit = (data) => {
    dispatch(updateStudent(studentSelected?.studentId, data));
    handleClose();
  };

  let textFieldStyle = modalMode === "read" ? "standard" : "outlined";

  useEffect(() => {
    if (studentSelected) {
      reset({
        firstName: studentSelected?.firstName,
        middleName: studentSelected?.middleName,
        lastName: studentSelected?.lastName,
        gender: studentSelected?.gender,
        addressLine: studentSelected?.addressLine,
        city: studentSelected?.city,
        zipPostcode: studentSelected?.zipPostcode,
        state: studentSelected?.state,
        email: studentSelected?.email,
        emailType: studentSelected?.emailType,
        phone: studentSelected?.phone,
        phoneType: studentSelected?.phoneType,
        countryCode: studentSelected?.countryCode,
        areaCode: studentSelected?.areaCode,
      });
    }
  }, [studentSelected, reset]);

  return (
    <Dialog
      open={showModalDetail}
      onClose={handleClose}
      fullWidth
      maxWidth='md'
    >
      <DialogTitle>
        {modalMode === "create"
          ? "Crear Nuevo Estudiante"
          : modalMode === "edit"
          ? "Editar Información del Estudiante"
          : "Ver Información del Estudiante"}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 3,
                width: "100%",
              }}
            >
              {/* FirstName */}
              <Controller
                name='firstName'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 10,
                    message: "Máximo 10 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/,
                    message: "Solo letras",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Nombre'
                    variant={textFieldStyle}
                    required
                    error={!!errors.firstName}
                    helperText={
                      errors.firstName ? errors.firstName.message : ""
                    }
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />

              {/* middleName */}
              <Controller
                name='middleName'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 10,
                    message: "Máximo 10 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/,
                    message: "Solo letras",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Segundo Nombre'
                    variant={textFieldStyle}
                    required
                    error={!!errors.middleName}
                    helperText={
                      errors.middleName ? errors.middleName.message : ""
                    }
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />

              {/* lastName */}
              <Controller
                name='lastName'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 10,
                    message: "Máximo 10 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/,
                    message: "Solo letras",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='apellido'
                    variant={textFieldStyle}
                    required
                    error={!!errors.lastName}
                    helperText={errors.lastName ? errors.lastName.message : ""}
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />

              {/* gender */}
              <Controller
                name='gender'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label='Género'
                    variant={textFieldStyle}
                    required
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  >
                    {[
                      { label: "Masculino", value: "M" },
                      { label: "Femenino", value: "F" },
                    ].map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 3,
                width: "100%",
              }}
            >
              {/* addressLine */}
              <Controller
                name='addressLine'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 5,
                    message: "Mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Máximo 50 caracteres",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Dirección'
                    variant={textFieldStyle}
                    required
                    error={!!errors.addressLine}
                    helperText={
                      errors.addressLine ? errors.addressLine.message : ""
                    }
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />

              {/* city */}
              <Controller
                name='city'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Máximo 30 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                    message: "Solo letras y espacios",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Ciudad'
                    variant={textFieldStyle}
                    required
                    error={!!errors.city}
                    helperText={errors.city ? errors.city.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />

              {/* zipPostcode */}
              <Controller
                name='zipPostcode'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 5,
                    message: "Mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 10,
                    message: "Máximo 10 caracteres",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo números",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Código Postal'
                    variant={textFieldStyle}
                    type='number'
                    required
                    error={!!errors.zipPostcode}
                    helperText={
                      errors.zipPostcode ? errors.zipPostcode.message : ""
                    }
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />

              {/* state */}
              <Controller
                name='state'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Máximo 30 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                    message: "Solo letras y espacios",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Estado'
                    variant={textFieldStyle}
                    required
                    error={!!errors.state}
                    helperText={errors.state ? errors.state.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 3,
                width: "100%",
              }}
            >
              {/* email */}
              <Controller
                name='email'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Debe ser un email válido",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Email'
                    variant={textFieldStyle}
                    type='email'
                    required
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />

              {/* emailType */}
              <Controller
                name='emailType'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label='Tipo de Correo'
                    variant={textFieldStyle}
                    fullWidth
                    required
                    error={!!errors.emailType}
                    helperText={
                      errors.emailType ? errors.emailType.message : ""
                    }
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  >
                    {[
                      { label: "Personal", value: "Personal" },
                      { label: "Escolar", value: "Escolar" },
                      { label: "Trabajo", value: "Trabajo" },
                    ].map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />

              {/* phone */}
              <Controller
                name='phone'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 10,
                    message: "Mínimo 10 dígitos",
                  },
                  maxLength: {
                    value: 15,
                    message: "Máximo 15 dígitos",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo números",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Teléfono'
                    variant={textFieldStyle}
                    type='tel'
                    required
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />

              {/* phoneType */}
              <Controller
                name='phoneType'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label='Tipo de Teléfono'
                    variant={textFieldStyle}
                    fullWidth
                    required
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  >
                    {[
                      { label: "Personal", value: "Personal" },
                      { label: "Escolar", value: "Escolar" },
                      { label: "Trabajo", value: "Trabajo" },
                    ].map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 3,
                width: "100%",
              }}
            >
              {/* countryCode */}
              <Controller
                name='countryCode'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 1,
                    message: "Mínimo 1 dígito",
                  },
                  maxLength: {
                    value: 3,
                    message: "Máximo 3 dígitos",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo números",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Código de País'
                    variant={textFieldStyle}
                    type='number'
                    required
                    error={!!errors.countryCode}
                    helperText={
                      errors.countryCode ? errors.countryCode.message : ""
                    }
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />

              {/* areaCode */}
              <Controller
                name='areaCode'
                control={control}
                defaultValue=''
                rules={{
                  required: "Campo obligatorio",
                  minLength: {
                    value: 1,
                    message: "Mínimo 1 dígito",
                  },
                  maxLength: {
                    value: 5,
                    message: "Máximo 5 dígitos",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo números",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Código de Área'
                    variant={textFieldStyle}
                    type='number'
                    required
                    error={!!errors.areaCode}
                    helperText={errors.areaCode ? errors.areaCode.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                    slotProps={{
                      input: {
                        readOnly: modalMode === "read",
                      },
                    }}
                  />
                )}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            {modalMode === "read" ? "Cerrar" : "Cancelar"}
          </Button>
          {modalMode !== "read" && (
            <Button type='submit' color='primary' disabled={!isDirty}>
              Actualizar
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
}
