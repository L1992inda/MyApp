import CardActionPoll from './cardActionPoll';
import CardActionQuestions from './cardActionQuestions';
import CardActionWordCloud from './cardActionWordCloud';
import Box from '@mui/material/Box';

export default function MenuPage() {
  return (

    <Box
      component="div"
      sx={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        background: '#e6e6ff',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap:"40px"
      }}
    >
      <CardActionPoll />
      <CardActionQuestions />
      <CardActionWordCloud />
    </Box>
  );
}
