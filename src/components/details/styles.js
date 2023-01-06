import {makeStyles} from '@material-ui/core';

export default makeStyles(() => ({
    income:{
        borderBottom: '10px solid rgba(0,255,0,0.5)',
        hoverOffset:4
    },
    expense:{
        borderBottom: '10px solid rgba(255,0,0,0.5)',
        hoverOffset:4
    }
}))