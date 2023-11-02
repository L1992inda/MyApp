
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';

export default function WordCloudComponent ()  {
  const [input, setInputText] = useState('');
  const [words, setWords] = useState([{
        text:'',
        size: '', 
        left: '', 
        top: '', 
        color:'',
        id: 0
  }]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const generateWordCloud = () => {
    const cardWidth = 1000;
    const cardHeight = 400;
    
    
     const newWord={
        text: input,
        size: Math.floor(Math.random() * 30) + 15, 
        left: Math.floor((Math.random() * cardWidth)),
        top: Math.floor((Math.random() * cardHeight)),
        id: words.length +1,
        color: wordColor()
     } 

     setWords([...words,newWord]);
     setInputText('');
   
  }

  const wordColor = () =>{
    const colors = ['#0892d0','#483d8b ','#446ccf','#1e90ff','#9457eb','#682860'];
    const color = Math.floor(Math.random() * colors.length);
    return colors[color];
  }

  return (
    <Box 
    style={{
        border: '1px solid #ccc',
        width: 1100 ,
        height: 500,
        margin: '20px',
        padding: '20px',
      }}
    >
      
      <Card
        style={{
          width: 1000,
          height: 400,
          position: 'relative'
        }}
      >
        {words.map( word => (
          <span
            key={word.id}
            style={{
              position: 'absolute',
              fontSize: `${word.size}px`,
              left: `${word.left}px`,
              top: `${word.top}px`,
              color: `${word.color}`
              
            }}
          >
            {word.text}
          </span>
        ))}
       
      </Card> 
      <textarea value={input} onChange={handleInputChange} />
      <button onClick={generateWordCloud}>Add word to cloud</button>
    </Box>
  );
};

