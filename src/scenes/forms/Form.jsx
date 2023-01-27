import { Box, Typography, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

//validation schema using YUP
const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required!"),
  lastName: yup.string().required("Last name is required!"),
  email: yup.string().email("Invalid email!").required("Email is required!"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Contact is required!"),
  address1: yup.string().required("Address 1 is required!"),
  address2: yup.string().required("Address 2 is required!"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const handleFormSubmit = values => {
    console.log(values, "form value");
  };

  return (
    <Box margin="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                  "& .css-1m1f1hj-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "white",
                    fontSize: "medium",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                variant="filled"
                type="text"
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                  "& .css-1m1f1hj-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "white",
                    fontSize: "medium",
                  },
                }}
              />
              <TextField
                fullWidth
                name="email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="email"
                error={!!touched.email && !!errors.email}
                variant="filled"
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 4",
                  "& .css-1m1f1hj-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "white",
                    fontSize: "medium",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Contacts"
                type="text"
                variant="filled"
                onBlur={handleBlur}
                onChange={handleChange}
                name="contact"
                value={values.contact}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                  gridColumn: "span 4",
                  "& .css-1m1f1hj-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "white",
                    fontSize: "medium",
                  },
                }}
              />
              <TextField
                fullWidth
                name="address1"
                label="Address 1"
                variant="filled"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address1}
                type="text"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                  gridColumn: "span 4",
                  "& .css-1m1f1hj-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "white",
                    fontSize: "medium",
                  },
                }}
              />
              <TextField
                fullWidth
                name="address2"
                variant="filled"
                value={values.address2}
                label="Address 2"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{
                  gridColumn: "span 4",
                  "& .css-1m1f1hj-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "white",
                    fontSize: "medium",
                  },
                }}
              />
            </Box>
            <Box marginTop="1rem" display="flex" justifyContent="flex-end">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
