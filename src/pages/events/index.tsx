import Grid from '@mui/material/Grid'

import React from 'react';
import CardEvent, { IEvent } from 'src/views/cards/CardEvent';

export default function Announcement () {
  const [events, setEvents] = React.useState<IEvent[]>([
    {
      id: 1,
      title: 'Sample title',
      description: 'Sample description',
      creator: "Adams",
      createdAt: new Date().toLocaleString()
    },
    {
      id: 1,
      title: 'Sample title',
      description: 'Sample description',
      creator: "Adams",
      createdAt: new Date().toLocaleString()
    },
    {
      id: 1,
      title: 'Sample title',
      description: 'Sample description',
      creator: "Adams",
      createdAt: new Date().toLocaleString()
    },
    {
      id: 1,
      title: 'Sample title',
      description: 'Sample description',
      creator: "Adams",
      createdAt: new Date().toLocaleString()
    },
  ]);

  return (
    <Grid container spacing={6}>
        {events.map((details) => 
          <Grid key={details.id} item xs={12} sm={6} md={12}>
            <CardEvent {...details}/>
          </Grid>
        )}
    </Grid>
  )
}