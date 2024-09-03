import React from "react";
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
import { openModalEdit as handleModalEdit } from "../../redux/actions";

export default function ModalForm() {
  const dispatch = useDispatch();
  const { openModalEdit } = useSelector((state) => state);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "Ana",
      segundoNombre: "Carolina",
      apellido: "Vázquez",
      genero: "F",
      direccion: "Calle Obregón 345",
      ciudad: "Cajeme",
      codigoPostal: "85000",
      estado: "Sonora",
      correoElectronico: "ana.vazquez@example.com",
      tipoCorreo: "Personal",
      telefono: "6441234567",
      tipoTelefono: "Personal",
      codigoPais: "52",
      codigoArea: "644",
    },
  });

  const handleClose = () => {
    dispatch(handleModalEdit(false));
  };

  const onSubmit = (data) => {
    console.log(data);
    // Aquí manejas la lógica para guardar los cambios
    // dispatch(saveStudentInfo(data));
    handleClose();
  };

  return (
    <Dialog open={openModalEdit} onClose={handleClose} fullWidth maxWidth='md'>
      <DialogTitle>Editar Información del Estudiante</DialogTitle>
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
                name='firstName' // Nombre del campo que se utilizará para manejar este input
                control={control} // Control provisto por React Hook Form para manejar este campo
                defaultValue='' // Valor por defecto para este campo
                rules={{
                  // Reglas de validación aplicadas al campo
                  required: "Campo obligatorio", // El campo es obligatorio
                  minLength: {
                    value: 2, // Mínimo de caracteres permitidos
                    message: "Mínimo 2 caracteres", // Mensaje de error si no se cumple la regla
                  },
                  maxLength: {
                    value: 10, // Máximo de caracteres permitidos
                    message: "Máximo 10 caracteres", // Mensaje de error si no se cumple la regla
                  },
                  pattern: {
                    // Expresión regular para validar que solo se ingresen letras
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/,
                    message: "Solo letras", // Mensaje de error si no se cumple la regla
                  },
                }}
                render={(
                  { field } // Función para renderizar el componente de entrada
                ) => (
                  <TextField
                    {...field} // Propiedades del campo manejadas por React Hook Form
                    label='Nombre' // Etiqueta del campo en el formulario
                    variant='outlined' // Estilo del TextField (de Material UI)
                    required
                    error={!!errors.firstName} // Muestra error si existe
                    helperText={
                      errors.firstName ? errors.firstName.message : ""
                    } // Mensaje de error si existe, o vacío
                    // Margen del campo
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    value: 2, // Mínimo de caracteres permitidos
                    message: "Mínimo 2 caracteres", // Mensaje de error si no se cumple la regla
                  },
                  maxLength: {
                    value: 10, // Máximo de caracteres permitidos
                    message: "Máximo 10 caracteres", // Mensaje de error si no se cumple la regla
                  },
                  pattern: {
                    // Expresión regular para validar que solo se ingresen letras
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/,
                    message: "Solo letras", // Mensaje de error si no se cumple la regla
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Segundo Nombre'
                    variant='outlined'
                    required
                    error={!!errors.middleName}
                    helperText={
                      errors.middleName ? errors.middleName.message : ""
                    }
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    value: 2, // Mínimo de caracteres permitidos
                    message: "Mínimo 2 caracteres", // Mensaje de error si no se cumple la regla
                  },
                  maxLength: {
                    value: 10, // Máximo de caracteres permitidos
                    message: "Máximo 10 caracteres", // Mensaje de error si no se cumple la regla
                  },
                  pattern: {
                    // Expresión regular para validar que solo se ingresen letras
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/,
                    message: "Solo letras", // Mensaje de error si no se cumple la regla
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='apellido'
                    variant='outlined'
                    required
                    error={!!errors.lastName}
                    helperText={errors.lastName ? errors.lastName.message : ""}
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    variant='outlined'
                    required
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    value: 5, // Mínimo de caracteres permitidos
                    message: "Mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 50, // Máximo de caracteres permitidos
                    message: "Máximo 50 caracteres",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Dirección'
                    variant='outlined'
                    required
                    error={!!errors.addressLine}
                    helperText={
                      errors.addressLine ? errors.addressLine.message : ""
                    }
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    value: 2, // Mínimo de caracteres permitidos
                    message: "Mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 30, // Máximo de caracteres permitidos
                    message: "Máximo 30 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, // Letras y espacios
                    message: "Solo letras y espacios",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Ciudad'
                    variant='outlined'
                    required
                    error={!!errors.city}
                    helperText={errors.city ? errors.city.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    value: 5, // Mínimo de caracteres permitidos
                    message: "Mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 10, // Máximo de caracteres permitidos
                    message: "Máximo 10 caracteres",
                  },
                  pattern: {
                    value: /^[0-9]+$/, // Solo números
                    message: "Solo números",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Código Postal'
                    variant='outlined'
                    required
                    error={!!errors.zipPostcode}
                    helperText={
                      errors.zipPostcode ? errors.zipPostcode.message : ""
                    }
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    value: 2, // Mínimo de caracteres permitidos
                    message: "Mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 30, // Máximo de caracteres permitidos
                    message: "Máximo 30 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, // Letras y espacios
                    message: "Solo letras y espacios",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Estado'
                    variant='outlined'
                    required
                    error={!!errors.state}
                    helperText={errors.state ? errors.state.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Validación de email
                    message: "Debe ser un email válido",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Email'
                    variant='outlined'
                    required
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    variant='outlined'
                    fullWidth
                    required
                    error={!!errors.emailType}
                    helperText={
                      errors.emailType ? errors.emailType.message : ""
                    }
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    value: 10, // Mínimo de caracteres permitidos
                    message: "Mínimo 10 dígitos",
                  },
                  maxLength: {
                    value: 15, // Máximo de caracteres permitidos
                    message: "Máximo 15 dígitos",
                  },
                  pattern: {
                    value: /^[0-9]+$/, // Solo números
                    message: "Solo números",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Teléfono'
                    variant='outlined'
                    required
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    variant='outlined'
                    fullWidth
                    required
                    size='small'
                    sx={{ minWidth: "20%" }}
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
                    value: 1, // Mínimo de caracteres permitidos
                    message: "Mínimo 1 dígito",
                  },
                  maxLength: {
                    value: 3, // Máximo de caracteres permitidos
                    message: "Máximo 3 dígitos",
                  },
                  pattern: {
                    value: /^[0-9]+$/, // Solo números
                    message: "Solo números",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Código de País'
                    variant='outlined'
                    required
                    error={!!errors.countryCode}
                    helperText={
                      errors.countryCode ? errors.countryCode.message : ""
                    }
                    fullWidth
                    size='small' // Cambia el tamaño del input a pequeño
                    sx={{ minWidth: "20%" }}
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
                    value: 1, // Mínimo de caracteres permitidos
                    message: "Mínimo 1 dígito",
                  },
                  maxLength: {
                    value: 5, // Máximo de caracteres permitidos
                    message: "Máximo 5 dígitos",
                  },
                  pattern: {
                    value: /^[0-9]+$/, // Solo números
                    message: "Solo números",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Código de Área'
                    variant='outlined'
                    required
                    error={!!errors.areaCode}
                    helperText={errors.areaCode ? errors.areaCode.message : ""}
                    fullWidth
                    size='small'
                    sx={{ minWidth: "20%" }}
                  />
                )}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            Cancelar
          </Button>
          <Button type='submit' color='primary'>
            Guardar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
