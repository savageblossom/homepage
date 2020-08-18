import { makeStyles, Theme } from "@material-ui/core/styles";
import { colours } from './../../../helpers/colours';
import { fonts } from './../../../helpers/fonts';

export const useStyles = makeStyles((theme: Theme) => ({
    headerPanel: {
        width: "100%",
        paddingTop: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerButtons: {
        "& .MuiButtonBase-root": {
            fontFamily: fonts.GothamProRegular,
            textTransform: "initial",
            fontSize: 22,
            transition: "all ease-out .25s",
            "&.MuiButton-outlined": {
                fontFamily: fonts.GothamProMedium,
                color: colours.orange,
                background: colours.cloudwhite,
                border: `3px solid ${colours.orange}`,
                borderRadius: 50,
                padding: "4px 20px",
                "&:hover": {
                    color: colours.cloudwhite,
                    background: colours.orange,
                    
                }
            },
            "&.MuiButton-text": {
                color: colours.darkgrey,
                "&:hover": {
                    color: colours.orange,
                }
            },
        },
        "& > button:first-child": {
            marginRight: 25,
        }
    }
}))