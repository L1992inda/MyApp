import Box from '@mui/material/Box';
import { ImageUrl } from '../menuPage/imageURL';
import WordCloudComponents from './wordCloudComponents';
import { Card } from '@mui/material';



export default function  WordCloudApp (){






    return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: `url(${ImageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        > <WordCloudComponents/></Box>)
}