import Grid from '@mui/material/Grid'

import React from 'react';
import CardAnnouncement, { IAnnouncement } from 'src/views/cards/CardAnnouncement';

export default function Announcement () {
  const [announcement, setAnnouncement] = React.useState<IAnnouncement[]>([
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
        {announcement.map((details) => 
          <Grid key={details.id} item xs={12} sm={6} md={12}>
            <CardAnnouncement {...details}/>
          </Grid>
        )}
    </Grid>
  )
}