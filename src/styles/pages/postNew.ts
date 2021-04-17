import { createStyles, makeStyles } from "@material-ui/core";

export const postNewStyles = makeStyles(() =>
    createStyles({
        textAreaStyle: {
            height: 1000,
            padding: 30,
        },
        buttonnStyle: {
            marginRight: 20,
        },
        gridItemInButtonStyle: {
            textAlign: "right",
        },
        pageNameStyle: {
            marginBottom: 60,
            marginTop: 50,
        },
        subjectStyle: {
            marginBottom: 30,
        },
        inputStyle: {
            marginBottom: 50,
        },
        inputFieldStyle: {
            width: 700,
        },
    }),
);
