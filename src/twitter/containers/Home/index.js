import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import RecommendedTrend from "../../components/RecommendedTrend";
import RecommendedUsers from "../../components/RecommendedUsers";
import Timeline from "../../components/Timeline";

export default function() {
  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ProfileCard />
          <RecommendedTrend />
        </Grid>
        <Grid item xs={6}>
          <Timeline />
        </Grid>
        <Grid item xs={3}>
          <RecommendedUsers />
        </Grid>
      </Grid>
    </>
  );
}
