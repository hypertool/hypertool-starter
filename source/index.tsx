import type { FunctionComponent, ReactElement } from "react";

import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import { ApplicationRouter } from "@hypertool/core";
import { CssBaseline } from "@mui/material";

import { PrimaryLayout } from "./components/common";

const Application: FunctionComponent = (): ReactElement => {
    const resolver = useCallback(
        (path: string) => import("." + path.substr(6)),
        [],
    );
    return (
        <CssBaseline>
            <ApplicationRouter
                resolver={resolver}
                screens={{
                    error404: "/error/404",
                }}
                layouts={{
                    primary: (children) => (
                        <PrimaryLayout>{children}</PrimaryLayout>
                    ),
                }}
            />
        </CssBaseline>
    );
};

ReactDOM.render(<Application />, document.getElementById("root"));
