import Grid from '@mui/material/Grid'
import React from 'react';
import CardSchedule, { ISchedule } from 'src/views/cards/CardSchedule';

export default function CollectionSchedule () {
  const [schedules, setSchedules] = React.useState<ISchedule[]>([
    {
      id: 1,
      date: new Date().toString(),
      creator: "Adams",
      createdAt: new Date().toLocaleString()
    },
    {
      id: 1,
      date: new Date().toString(),
      creator: "Adams",
      createdAt: new Date().toLocaleString()
    },
    {
      id: 1,
      date: new Date().toString(),
      creator: "Adams",
      createdAt: new Date().toLocaleString()
    },
    {
      id: 1,
      date: new Date().toString(),
      creator: "Adams",
      createdAt: new Date().toLocaleString()
    },
  ])

  return (
    <Grid container spacing={6}>
      {schedules.map((details) => 
        <Grid key={details.id} item xs={12} sm={6} md={12}>
          <CardSchedule {...details}/>
        </Grid>
      )}
    </Grid>
  )
}