import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Message from './Message'
import React from 'react'

export default function ChatBox() {
  return(
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Typography variant='subtitle2'>
        Topic: {}
      </Typography>
      <div style={{ flexGrow: 1, overflow: 'auto', height: '50px', padding: '0 10px 0 10px' }}>
        <Grid container direction='row'>
          <Message 
            id={1} 
            content="sample" 
            createdAt={new Date().toString()} 
            sender='John Doe' 
            fromUser={false}
          />
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
          <Message id={1} content="sample" createdAt={new Date().toString()} sender='' fromUser={true}/>
        </Grid>
      </div>
      <div style={{ width: '100%', height: 'fit-content', margin: '10px 0 0 0' }}>
        <Grid container direction="row" alignItems="center" justifyContent="space-between">
          <Grid item md={10}>
            <TextField variant="standard" size="small" fullWidth label="Write something here..."/>
          </Grid>
          <Grid item sm={1} md={1}>
            <Button variant="outlined">Post</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}