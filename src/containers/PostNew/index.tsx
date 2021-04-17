import { Button, Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useState } from 'react';
import { postCreateType } from '../../types/post';
import { addNewItem } from '../../utils/axiosUtils';

const useStyles = makeStyles(() =>
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

const NewPost: FunctionComponent = () => {
    const classes = useStyles();
    const router = useRouter();
    const [newPost, setNewPost] = useState<postCreateType | undefined>({title: '', content: ''});

    const handleTitleChange = (event: any) => {
        const title = event.target.value;
        setNewPost({...newPost, title: title});
    };

    const handleContentChange = (event: any) => {
        const content = event.target.value;
        setNewPost({...newPost, content: content});
    };

    const handleSaveClick  = async () => {
        const response = await addNewItem('/posts', {...newPost});

        if (response.status === 201) {
            router.push('/posts');
        } else {
            alert('Error');
        }
    };

    const handleCancelClick = () => {
        router.push("/posts");
    };

    console.log(newPost);

    return (
        <Grid container={true}>
            <Grid item={true} md={12} className={classes.pageNameStyle}>
                <Typography variant="h2">New Post</Typography>
            </Grid>
            <Grid item={true} md={12} className={classes.subjectStyle}>
                <Typography variant="h3">Title</Typography>
            </Grid>
            <Grid item={true} md={12} className={classes.inputStyle}>
                <TextField color="primary" variant="outlined" size="medium" label="title" className={classes.inputFieldStyle} onChange={handleTitleChange} />
            </Grid>
            <Grid item={true} md={12} className={classes.subjectStyle}>
                <Typography variant="h3">Content</Typography>
            </Grid>
            <Grid item={true} md={12} className={classes.inputStyle}>
                <TextareaAutosize className={classes.textAreaStyle} onChange={handleContentChange} />
            </Grid>
            <Grid item={true} md={12} className={classes.gridItemInButtonStyle}>
                <Button color="default" variant="contained" className={classes.buttonnStyle} onClick={handleCancelClick}>Cancel</Button>
                <Button color="primary" variant="contained" onClick={handleSaveClick}>Save</Button>
            </Grid>
        </Grid>
    );
};

export default NewPost;
