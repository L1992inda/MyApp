
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {ImageUrl} from './imageURL';

export default function CardActionPoll() {
    return (
        <Card sx={{ maxWidth: 240, borderRadius:4,boxShadow:20 }}>
      <CardActionArea 
            href="./setupPollPage"
            sx={{ backgroundColor:"#fffcf6"}}

          >
        <CardMedia
          component="img"
          height="90"
          image={ImageUrl}
          alt="Image"
        />
        <CardContent>
          <Typography  sx={{p:2}}  gutterBottom variant="h5" component="div">
Poll          </Typography>
          <Typography sx={{p:2}} variant="body2" color="text.secondary">
          Make a Poll. Type your question then add answers. Select a single answer or multiple answers.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
      
          
       
       

        
    );
  }
  