import { createMuiTheme } from "@material-ui/core";
import { Overrides } from "@material-ui/core/styles/overrides";
import { BreakpointOverrides } from "@material-ui/core/styles/createBreakpoints";
import { colours } from "./helpers/colours";

const overrides: Overrides = {
    MuiContainer: {
        maxWidthLg: {
            maxWidth: 1400,
            padding: `0 ${26}px`,
        }
    },
    MuiLink: {
        root: {
            color: colours.orange,
            "&:hover": {
                color: colours.darkgrey,
            }
        },
        underlineHover: {
            "&:hover": {
                textDecoration: "none",
            }
        }
    }
}

const breakpoints: BreakpointOverrides = {
    values: {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
    }
}

export const theme = createMuiTheme({
    breakpoints,
    overrides,
})

