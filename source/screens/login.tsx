import { styled } from "@mui/material/styles";
import { Formik } from "formik";
import * as yup from "yup";

import { Button, TextField } from "@mui/material";

const Root = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));
const Title = styled("h2")(() => ({}));

const FormContainer = styled("div")(() => ({
    width: "400px",
    display: "flex",
    flexDirection: "column",
}));

const InputField = styled(TextField)(() => ({
    margin: "8px",
}));

const PrimaryAction = styled(Button)(() => ({
    margin: "8px",
}));

interface FormValues {
    email: string;
    password: string;
}

const initialValues: FormValues = {
    email: "",
    password: "",
};

const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
});

const Login = () => {
    const handleSubmit = (values: FormValues) => {};
    return (
        <>
            <Root>
                <Title>Login</Title>
                <FormContainer>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formik) => (
                            <>
                                <InputField
                                    id="Email"
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    onChange={formik.handleChange}
                                    size="small"
                                />
                                <InputField
                                    id="Password"
                                    label="Password"
                                    variant="outlined"
                                    name="password"
                                    onChange={formik.handleChange}
                                    size="small"
                                />
                                <PrimaryAction
                                    onClick={() => formik.submitForm()}
                                    variant="contained"
                                    size="small"
                                >
                                    Login
                                </PrimaryAction>
                            </>
                        )}
                    </Formik>
                    <PrimaryAction variant="outlined">
                        Continue with Google
                    </PrimaryAction>
                </FormContainer>
            </Root>
        </>
    );
};

Login.layout = "primary";

export default Login;
