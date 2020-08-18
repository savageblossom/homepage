import { makeStyles, Theme } from "@material-ui/core/styles";
import { colours } from '../../../helpers/colours';
import { fonts } from '../../../helpers/fonts';

export const useStyles = makeStyles((theme: Theme) => ({
    greetingBigTextContainer: {
        height: 550,
        paddingTop: 120,
        background: colours.orange,
        color: colours.white,
        "& h1": {
            fontSize: 35,
            fontFamily: fonts.GothamProMedium,
            marginBottom: 25
        },
        "& p": {
            fontSize: 18,
            fontFamily: fonts.GothamProLight,
            lineHeight: 1.6,
        },
        "& .MuiContainer-root": {
            display: "flex",
            justifyContent: "center",
        } 
    },
    greetingContainer: {
        maxWidth: 940,
        textAlign: "center",
    }
}))