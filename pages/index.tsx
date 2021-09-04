import React from 'react';
import { Button, Grid, Theme, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useActions, useAppState } from "../src/Overmind/OvermindHelper";
import DashboardFilterDrawer from '../src/Components/Drawers/DashboardFilterDrawer';

const getThemeObj = (theme: Theme) => {
    return {
        button: { marginTop: 8 },
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const index: React.FC = ({ }) => {
    const { showFilterDrawer } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid style={{ height: 500 }} container justifyContent='center' alignContent='center' alignItems='center' direction='column'>
        <Button onClick={() => {
            showFilterDrawer(true)
        }}>Show drawer</Button>

        <DashboardFilterDrawer />
    </Grid>
}

export default index;
