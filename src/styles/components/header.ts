import { createStyles, makeStyles } from "@material-ui/core";


export const headerStyles = makeStyles(() =>
    createStyles({
        gridContainer: {
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 10,
            border: 'solid 1px',
        },
        gridItem: {
            textAlign: 'right',
            paddingTop: 20,
        },
    }),
);