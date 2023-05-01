// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import BullhornVariantOutline from 'mdi-material-ui/BullhornVariantOutline'
import BookClockOutline from 'mdi-material-ui/BookClockOutline'
import FormatListCheckbox from 'mdi-material-ui/FormatListCheckbox'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import React from 'react'

interface DataType {
  count: number
  title: string
  color: ThemeColor
  icon: ReactElement
}

const renderStats = (data: DataType[]) => {
  return data.map((item: DataType, index: number) => (
    <Grid item xs={12} sm={4} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.count}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const StatisticsCard = (props: any) => {
  const [statsData, setStatsData] = React.useState<DataType[]>([])

  React.useEffect(() => {
    const data: DataType[] = [
      {
        count: 0,
        title: 'Announcements',
        color: 'primary',
        icon: <BullhornVariantOutline sx={{ fontSize: '1.75rem' }} />
      },
      {
        count: 0,
        title: 'Scheduled Collections',
        color: 'success',
        icon: <BookClockOutline sx={{ fontSize: '1.75rem' }} />
      },
      {
        count: 0,
        title: 'Events',
        color: 'warning',
        icon: <FormatListCheckbox sx={{ fontSize: '1.75rem' }} />
      }
    ]

    setStatsData(data)
  }, [])

  return (
    <Card>
      <CardHeader
        title='Statistics Card'
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 400, color: 'text.primary' }}>
              Total created events are displayed here  
            </Box>{' '}
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats(statsData)}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
