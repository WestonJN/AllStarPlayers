import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PlayerCard({firstName,lastName,team,position }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {firstName + " " + lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {team + " " + position}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}