import { createStyles, makeStyles } from "@material-ui/core";

export const postListStyles = makeStyles(() =>
    createStyles({
        gridCont: {
            marginBottom: 30,
            marginTop: 60,
        },
        divider: {
            marginTop:20,
        },
        postAddButtonStyle: {
            textAlign: 'right',
            paddingRight: 5,
        },
    }),
);

