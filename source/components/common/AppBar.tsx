import type { FunctionComponent, ReactElement } from "react";

import { styled, useTheme } from "@mui/material/styles";
import { AppBar as MuiAppBar } from "@mui/material";

const drawerWidth = 240;

export interface Props {
    open: boolean;
    children: ReactElement;
}

const Root = styled(MuiAppBar)(({ theme }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

const AppBar: FunctionComponent<Props> = (props: Props): ReactElement => {
    const { open, children } = props;
    const theme = useTheme();
    return (
        <Root
            style={{
                ...(open && {
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: `${drawerWidth}px`,
                    transition: theme.transitions.create(["margin", "width"], {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                }),
            }}
        >
            {children}
        </Root>
    );
};

export default AppBar;
