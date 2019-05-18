import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default function() {
  return (
    <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="https://next.material-ui.com/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <div style={{ display: "flex" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://next.material-ui.com/static/images/avatar/1.jpg"
          />
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        </div>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        1
      </Button>
      <Button size="small" color="primary">
        2
      </Button>
      <Button size="small" color="primary">
        3
      </Button>
    </CardActions>
  </Card>
  );
}
