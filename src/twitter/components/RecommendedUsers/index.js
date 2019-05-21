import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

export default function() {
  return (
    <Paper>
      <Typography gutterBottom>
        おすすめユーザー
      </Typography>
      <div style={{ display: "flex", padding: 10 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://next.material-ui.com/static/images/avatar/1.jpg"
        />
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
      </div>
      <div style={{ display: "flex", padding: 10 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://next.material-ui.com/static/images/avatar/1.jpg"
        />
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
      </div>
      <div style={{ display: "flex", padding: 10 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://next.material-ui.com/static/images/avatar/1.jpg"
        />
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
      </div>
      <div style={{ display: "flex", padding: 10 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://next.material-ui.com/static/images/avatar/1.jpg"
        />
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
      </div>
      <div style={{ display: "flex", padding: 10 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://next.material-ui.com/static/images/avatar/1.jpg"
        />
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
      </div>
    </Paper>
  );
}
