import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ImageUrl } from './imageURL';

export default function CardActionWordCloud() {
  return (
    <Card sx={{ maxWidth: 240, borderRadius: 4, boxShadow: 20 }}>
      <CardActionArea href="./wordCloud" sx={{ backgroundColor: '#fffcf6' }}>
        <CardMedia component="img" height="90" image={ImageUrl} alt="Image" />
        <CardContent>
          <Typography sx={{ p: 2 }} gutterBottom variant="h5" component="div">
            Word Cloud
          </Typography>
          <Typography sx={{ p: 2 }} variant="body2" color="text.secondary">
            Create your own word cloud. Type word or paste text and watch words
            appear real-time.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
