import { makeStyles, Theme } from "@material-ui/core/styles";
import { colours } from '../../../helpers/colours';
import { fonts } from '../../../helpers/fonts';

export const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            paddingBottom: 50,
            textAlign: "center",
            "& h1": {
                fontSize: 35,
                fontFamily: fonts.GothamProBold,
                marginBottom: 26,
            },
            "& p": {
                fontSize: 18,
                fontFamily: fonts.GothamProRegular,
            }
        },
        blockDescription: {
            marginBottom: 40
        }
    }
})