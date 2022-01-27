import type { FunctionComponent, ReactElement } from "react";

import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
    IconButton,
    Divider,
    Drawer as MuiDrawer,
    Icon,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";

const drawerWidth = 240;

const DecoratedDrawer = styled(MuiDrawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
    },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // Necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export interface Props {
    open: boolean;
    groups: any[];
    handleClose: () => void;
}

const Drawer: FunctionComponent<Props> = (props: Props): ReactElement => {
    const { open, groups, handleClose } = props;
    const navigate = useNavigate();

    const handleNavigation = (item) => () => {
        const { url } = item;
        /* Open the URL in a different tab if the URL is absolute. */
        if (url.startsWith("http://") || url.startsWith("https://")) {
            window.open(item.url);
        } else {
            navigate(item.url);
        }
    };

    const renderItem = (item, index: number) => (
        <ListItem key={index} button={true} onClick={handleNavigation(item)}>
            {item.icon && (
                <ListItemIcon>
                    <Icon>{item.icon}</Icon>
                </ListItemIcon>
            )}
            <ListItemText primary={item.title} />
        </ListItem>
    );

    const renderGroup = (group, index: number) => (
        <Fragment key={index}>
            <List>
                <ListItem>
                    <ListItemText secondary={group.title} />
                </ListItem>
                {group.items.map(renderItem)}
            </List>
            {index + 1 < groups.length && <Divider />}
        </Fragment>
    );

    return (
        <DecoratedDrawer variant="persistent" anchor="left" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleClose}>
                    <Icon>chevron_left</Icon>
                </IconButton>
            </DrawerHeader>
            <Divider />
            {groups.map(renderGroup)}
        </DecoratedDrawer>
    );
};

export default Drawer;
