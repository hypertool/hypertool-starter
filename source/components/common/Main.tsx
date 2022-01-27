import type { FunctionComponent, ReactElement } from "react";

import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 240;

const Root = styled("main")(({ theme }) => ({
    marginTop: theme.spacing(8),
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
}));

export interface Props {
    children: ReactElement;
    open: boolean;
}

const Main: FunctionComponent<Props> = (props: Props): ReactElement => {
    const theme = useTheme();
    const { open } = props;
    return (
        <Root
            style={{
                ...(open && {
                    transition: theme.transitions.create("margin", {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: `${drawerWidth}px`,
                }),
            }}
        >
            {props.children}
        </Root>
    );
};

export default Main;
