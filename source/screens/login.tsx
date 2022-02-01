import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "@mui/material/styles";
import { Formik } from "formik";
import * as yup from "yup";
import { PublicClient } from "@hypertool/common";
import { useGoogleLogin } from "react-google-login";

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
    const navigate = useNavigate();
    const [clientId, setClientId] = useState("");
    // const appName = window.hypertool.appName;
    //Temporary
    const appName = "manage-users";
    const publicClient = new PublicClient(appName);

    useEffect(() => {
        const getAuthInfoData = async () => {
            const authInfo = await publicClient.getAuthInfo();
            setClientId(authInfo[0].payload.clientId);
        };
        getAuthInfoData();
    }, []);

    const handleBasicAuthSubmit = (values: FormValues) => {};

    const onSuccess = useCallback(async (response: any) => {
        const result = await publicClient.loginWithGoogle(response.code, "web");
        localStorage.setItem("session", JSON.stringify(result.jwtToken));
    }, []);

    const onFailure = (event: any) => {};

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        cookiePolicy: "single_host_origin",
        responseType: "code",
    });

    const handleGoogleSubmit = useCallback(() => {
        signIn();
    }, [signIn]);

    return (
        <>
            <Root>
                <Title>Login</Title>
                <FormContainer>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleBasicAuthSubmit}
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
                    <PrimaryAction
                        variant="outlined"
                        onClick={handleGoogleSubmit}
                    >
                        Continue with Google
                    </PrimaryAction>
                </FormContainer>
            </Root>
        </>
    );
};

Login.layout = "primary";

export default Login;
