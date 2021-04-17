import { createStyles, makeStyles } from "@material-ui/core";

export const postDetailStyles = makeStyles(() =>
    createStyles({
        btnGridStyle: {
            textAlign: 'right',
            marginTop: 100,
            marginBottom: 100,
        },
        btnStyle: {
            marginRight: 10,
        },
        contentGridStyle: {
            marginTop: 120,
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
        },
        titleGridStyle: {
            marginTop: 50,
        },
    }),
);
