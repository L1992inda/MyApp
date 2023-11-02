import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { ImageUrl } from '../menuPage/imageURL';
import Divider from '@mui/material/Divider';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function SetquestionsAndAnswers() {
  const [inputFields, setInputFields] = useState([
    { question: '', answers: [''] },
  ]);
  const [currentTab, setCurrentTab] = useState(0);

  const addQuestionField = () => {
    if (inputFields.length < 10) {
      setInputFields([...inputFields, { question: '', answers: [''] }]);
      setCurrentTab(inputFields.length);
    }
  };

  const addAnswerField = (questionIndex) => {
    if (inputFields[questionIndex].answers.length < 6) {
      const updatedinputFields = [...inputFields];
      updatedinputFields[questionIndex].answers.push('');
      setInputFields(updatedinputFields);
    }
  };

  const updateQuestion = (questionIndex, value) => {
    const updatedinputFields = [...inputFields];
    updatedinputFields[questionIndex].question = value;
    setInputFields(updatedinputFields);
  };

  const updateAnswer = (questionIndex, answerIndex, value) => {
    const updatedinputFields = [...inputFields];
    updatedinputFields[questionIndex].answers[answerIndex] = value;
    setInputFields(updatedinputFields);
  };

  const showAnswerButton = (questionIndex) => {
    return inputFields[questionIndex].answers.length < 6;
  };
  const removeAnswerField = (questionIndex) => {
    const updatedInputFields = [...inputFields];
    if (updatedInputFields[questionIndex].answers.length > 1) {
      updatedInputFields[questionIndex].answers.pop();
      setInputFields(updatedInputFields);
    }
  };
  const removeQuestionField = () => {
    const updatedInputFields = [...inputFields];
    if (updatedInputFields.length > 1) {
      updatedInputFields.pop();
      setInputFields(updatedInputFields);
    }
  };

  const showquestionButton = () => {
    return inputFields.length < 6;
  };

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
    >
      <Box>
        <Card
          sx={{
            width: 700,
            height: 600,
            pt: 1,
            pr: 6,
            pl: 6,
            pb: 6,
            overflow: 'auto',
            maxHeight: '70vh',
          }}
        >
          <Tabs
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            value={currentTab}
            onChange={(e, newValue) => setCurrentTab(newValue)}
          >
            {inputFields.map((field, questionIndex) => (
              <Tab
                label={`Question ${questionIndex + 1}`}
                key={questionIndex}
              />
            ))}
          </Tabs>
          <Divider sx={{ my: 2 }} />
          {inputFields.map((field, questionIndex) => (
            <div
              key={questionIndex}
              style={{
                display: currentTab === questionIndex ? 'block' : 'none',
              }}
            >
              <Input
                sx={{ mt: 2, mb: 3 }}
                multiline
                minRows={1}
                maxRows={10}
                fullWidth
                value={field.question}
                placeholder="Add question"
                onChange={(e) => updateQuestion(questionIndex, e.target.value)}
              />{' '}
              <AddCircleOutlineOutlinedIcon
                color="info"
                onClick={addQuestionField}
                sx={{ mr: 2, display: showquestionButton() ? 'hide' : 'none' }}
              />
              <RemoveCircleOutlineTwoToneIcon
                color="info"
                onClick={removeQuestionField}
              />
              <Box
                sx={{
                  maxHeight: '40vh',
                  overflow: 'auto',
                }}
              >
                {field.answers.map((answer, answerIndex) => (
                  <Box sx={{ ml: 3, mt: 4 }} key={answerIndex}>
                    <Typography sx={{ fontSize: 14 }}>{`Answer ${
                      answerIndex + 1
                    }`}</Typography>
                    <Input
                      sx={{ fontSize: 16, mt: 1, width: 300 }}
                      multiline
                      minRows={1}
                      maxRows={10}
                      fullWidth={false}
                      value={answer}
                      placeholder="Add answer"
                      onChange={(e) =>
                        updateAnswer(questionIndex, answerIndex, e.target.value)
                      }
                    />
                  </Box>
                ))}
                <AddCircleOutlineOutlinedIcon
                  color="info"
                  sx={{
                    ml: 3,
                    mr: 2,
                    mt: 3,
                    display: showAnswerButton(questionIndex) ? 'hide' : 'none',
                  }}
                  variant="outlined"
                  onClick={() => addAnswerField(questionIndex)}
                />
                <RemoveCircleOutlineTwoToneIcon
                  color="info"
                  variant="outlined"
                  onClick={() => removeAnswerField(questionIndex)}
                />{' '}
              </Box>
            </div>
          ))}
        </Card>
        <Button sx={{ mt: 3 }} size="large" variant="outlined">
          Sumbit
        </Button>
      </Box>
    </Box>
  );
}
