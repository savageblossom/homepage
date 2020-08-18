import { makeStyles, Theme } from "@material-ui/core/styles";
import { colours } from '../../../helpers/colours';
import { fonts } from '../../../helpers/fonts';

export const useStyles = makeStyles((theme: Theme) => {
    const pathToBackground = "/img/icon_browser.png"
    return ({
        skillCard: {
            maxWidth: 665,
            minHeight: 715,
            margin: "0 auto",
            position: "relative",
            padding: `${200}px ${80}px ${50}px ${80}px`,
            background: `url(${pathToBackground}) no-repeat 50% 55px ${colours.cloudwhite}`,
            bottom: 200,
            border: "1px solid #ffe2cc",
            borderRadius: 25,
            boxShadow: "0px 0px 10px rgba(255, 156, 84, 0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "29px",
            textAlign: "center",
            color: colours.darkgrey,
            "& > h1": {
                fontFamily: fonts.GothamProMedium,
                fontSize: 30,
                fontWeight: 400,
                margin: 0,
                marginBottom: 10,
            },
            "& > p": {
                fontSize: 18,
                fontFamily: fonts.GothamProLight,
                width: "70%",
            },
        },

        contentContainer: {
// 
        },

        contentSection: {
            marginTop: 60,
            "& h2": {
                fontFamily: fonts.GothamProMedium,
                color: colours.orange,
                margin: 0,
                fontSize: 18,
                fontWeight: 400,
            },
            "& p": {
                fontFamily: fonts.GothamProRegular,
                margin: 0,
                fontSize: 18,
                fontWeight: 400,
            }
        }
    })
})