// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import BullhornVariantOutline from 'mdi-material-ui/BullhornVariantOutline'

export interface IAnnouncement {
  id: number,
  title: string,
  description: string,
  creator: string,
  createdAt: string
}

const CardAnnouncement = ({ title, description, creator, createdAt }: IAnnouncement) => {
  return (
    <Card sx={{ border: 0, boxShadow: 10, color: 'common.white', backgroundColor: 'primary.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          <BullhornVariantOutline sx={{ marginRight: 2.5 }} />
          Announcement!
        </Typography>
        <Typography variant='subtitle1' sx={{ marginBottom: 3, color: 'common.white' }}>
          { title }
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
          { description }
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt='Eugene Clarke' src='/images/avatars/1.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
            <Typography variant='body2' sx={{ color: 'common.white' }}>
              { creator ?? 'Admin' }
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
          <Typography variant='caption' sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            Date Posted: { createdAt }
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardAnnouncement
