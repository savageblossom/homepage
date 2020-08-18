import { makeStyles, Theme } from "@material-ui/core/styles";
import { colours } from '../../../helpers/colours';
import { fonts } from '../../../helpers/fonts';

export const useStyles = makeStyles((theme: Theme) => {
    const pathToBackground = '/img/laptop.png';
    return {
        openingBigTextContainer: {
            height: 850,
            background: `url(${pathToBackground}) no-repeat bottom`,
            display: "flex",
            alignItems: "center",
        },
        textContainer: {
            color: colours.darkgrey,
            display: "inline-block",
            textAlign: "center",
            marginBottom: 200,
            "& h1": {
                fontSize: 89,
                letterSpacing: 2,
                fontFamily: fonts.CalibriBold,
                marginBottom: 40,
                "& span > img": {
                    marginRight: 7
                },
            },
            "& h2": {
                fontSize: 38,
                fontFamily: fonts.GothamProMedium,
            }
        },
}})