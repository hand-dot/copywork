import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Button from '../Button';

export default function() {
  return (
    <AppBar position="static" style={{ marginBottom: 10 }}>
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Button edge="start" color="inherit" aria-label="Menu">
              <HomeIcon />
              <span>ホーム</span>
            </Button>
            <Button edge="start" color="inherit" aria-label="Menu">
              <FlashOnIcon />
              <span>モーメント</span>
            </Button>
            <Button edge="start" color="inherit" aria-label="Menu">
              <NotificationsIcon />
              <span>通知</span>
            </Button>
            <Button edge="start" color="inherit" aria-label="Menu">
              <MailIcon />
              <span>メッセージ</span>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h6"
              style={{ flexGrow: 1, textAlign: 'center' }}
              role="img"
            >
              <span role="img" aria-label="logo">
                🐤
              </span>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <input placeholder="キーワード検索" />
              <Avatar
                alt="Remy Sharp"
                src="https://next.material-ui.com/static/images/avatar/1.jpg"
              />
              <Button>ツイート</Button>
            </div>{' '}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
