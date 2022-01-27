import React, { Fragment } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
    IconButton,
    Divider,
    Drawer,
    Icon,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props: any) {
    const { open, groups, handleDrawerClose } = props;

    const renderItem = (item, index: number) => (
        <ListItem key={index} button={true}>
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
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <Icon>chevron_left</Icon>
                </IconButton>
            </DrawerHeader>
            <Divider />
            {groups.map(renderGroup)}
        </Drawer>
    );
}
