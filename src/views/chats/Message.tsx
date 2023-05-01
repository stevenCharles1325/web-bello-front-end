import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export interface IMessage {
  id: number,
  content: string,
  createdAt: string,
  sender: any,
  fromUser: boolean,
}

export default function Message(props: IMessage) {
  const config = {
    backgroundColor: props.fromUser ? 'info.main' : 'gray',
    alignItems: props.fromUser ? 'flex-end' : 'flex-start',
  }

  return (
    <Grid 
      container 
      sm={12} 
      md={12} 
      direction="column" 
      justifyContent="center" 
      alignItems={config.alignItems}
    >
      <Typography variant='subtitle2'>
        {props.fromUser ? 'You' : (props.sender?.name || props.sender)}
      </Typography>
      <Grid 
        item
        sx={{
          backgroundColor: config.backgroundColor, 
          padding: 3, 
          borderRadius: 1, 
          color: 'white',
          maxWidth: '80% !important',
        }}
      >
        <div> { props?.content } </div>
      </Grid>
      <div>
        <Typography variant='caption'>
          {new Date(props.createdAt).toLocaleString()}
        </Typography>
      </div>
    </Grid>
  )
}