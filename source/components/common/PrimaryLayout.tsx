import type { FunctionComponent, ReactElement } from "react";

import { Toolbar, Button, Typography, IconButton, Icon } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import Drawer from "./Drawer";
import Main from "./Main";
import AppBar from "./AppBar";
import configuration from "../../configuration.json";

const Root = styled("div")(({ theme }) => ({}));

const Logo = styled(Button)(({ theme }) => ({
    height: 64,
}));

const LogoImage = styled("img")(({ theme }) => ({
    height: 24,
    width: "auto",
    marginRight: theme.spacing(1),
}));

const LogoText = styled(Typography)(({ theme }) => ({
    textTransform: "none",
    color: "white",
    fontWeight: 600,
}));

interface Props {
    children: ReactElement;
}

const groups = [];

const PrimaryLayout: FunctionComponent<Props> = (
    props: Props,
): ReactElement => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Root>
            <AppBar open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                    <Logo>
                        <LogoImage src="https://res.cloudinary.com/hypertool/image/upload/v1642502111/hypertool-starter/hypertool-logo_xvqljy.png" />
                        <LogoText>Hypertool</LogoText>
                    </Logo>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                handleDrawerClose={handleDrawerClose}
                groups={configuration.layouts.primary.drawer}
            />
            <Main open={open}>{props.children}</Main>
        </Root>
    );
};

export default PrimaryLayout;
