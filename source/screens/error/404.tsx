import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
}));

const Image = styled("img")(({ theme }) => ({
    width: 400,
    height: "auto",
    display: "block",
}));

const Title = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textAlign: "center",
}));

const Description = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textAlign: "center",
}));

const Action = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

const ArrowForward = styled(Icon)(({ theme }) => ({
    marginLeft: theme.spacing(1),
}));

function Error404(props) {
    const navigate = useNavigate();

    const handleAction = useCallback(() => {
        navigate("/");
    }, []);

    return (
        <Root>
            <Image
                src="https://res.cloudinary.com/hypertool/image/upload/v1643113313/hypertool-starter/404_yupphb.png"
                alt="Error 404"
            />
            <Title variant="h4" color="textSecondary">
                Looks like you are lost
            </Title>

            <Description variant="subtitle1" color="textSecondary">
                The page you are looking for may have been removed or moved to
                another location.
            </Description>

            <Action onClick={handleAction}>
                Go back to home
                <ArrowForward fontSize="small">arrow_forward</ArrowForward>
            </Action>
        </Root>
    );
}

export default Error404;
