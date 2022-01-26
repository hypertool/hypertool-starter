import type { FunctionComponent, ReactElement } from "react";

import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Root = styled("div")(({ theme }) => ({}));

const Main = styled("main")(({ theme }) => ({
    marginTop: theme.spacing(8),
}));

interface Props {
    children: ReactElement;
}

const PrimaryLayout: FunctionComponent<Props> = (
    props: Props,
): ReactElement => {
    return (
        <Root>
            <AppBar>
                <Toolbar>
                    <Button>
                        <Typography style={{ color: "white" }}>
                            Hypertool App
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            <Main>{props.children}</Main>
        </Root>
    );
};

export default PrimaryLayout;
