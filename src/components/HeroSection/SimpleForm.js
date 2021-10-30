import React from 'react';
import ChatBot from 'react-simple-chatbot';
import styled, { ThemeProvider } from 'styled-components';

const CenterAlign = styled.div`
  margin: 0 auto;
`;
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF629F',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#fff5f9',
  botFontColor: '#4a4a4a',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

       const steps=[
        {
          id: 'hi',
          message: 'Hi I am your sex-edify assistant! What is your name?',
          trigger: 'intro',
        },
        {
          id: 'intro',
          user: true,
          trigger: 'name',
        },
        {
          id: 'name',
          message: 'Hi {previousValue}, which category do you belong to?',
          trigger: 'cat',
        },
        {
          id: 'cont2',
          message: 'Do you want to ask more questions?',
          trigger: 'yn',
        },
        {
          id: 'cont3',
          message: 'Do you want to ask more questions?',
          trigger: 'yn3',
        },
        {
          id: 'cont4',
          message: 'Do you want to ask more questions?',
          trigger: 'yn4',
        },
        {
          id: 'cont1',
          message: 'Do you want to change your category?',
          trigger: 'yn1',
        },
        {
          id: 'yn3',
          options: [
            { value: 1, label: 'Yes', trigger: 'cat1' },
            { value: 2, label: 'No', trigger: 'cont1'},

          ],
        },
        {
          id: 'yn4',
          options: [
            { value: 1, label: 'Yes', trigger: 'cat3' },
            { value: 2, label: 'No', trigger: 'cont1'},

          ],
        },
        {
          id: 'yn',
          options: [
            { value: 1, label: 'Yes', trigger: 'cat2' },
            { value: 2, label: 'No', trigger: 'cont1'},

          ],
        },
        {
          id: 'yn1',
          options: [
            { value: 1, label: 'Yes', trigger: 'cat' },
            { value: 2, label: 'No', trigger: 'over'},

          ],
        },
        {
          id: 'over',
          message: 'Thank you for interacting with me :)',
          end: true,
        },


        {
          id: 'cat',
          options: [
            { value: 1, label: 'Child/Pre-teen', trigger: 'cat1' },
            { value: 2, label: 'Teen', trigger: 'cat2'},
            { value: 3, label: 'Adult', trigger: 'cat3'},
            { value: 3, label: 'Exit', end: true},
          ],
        },
        {
          id: 'cat1',
          message: 'What children/pre-teen questions do you have?',
          trigger: 'preteencat',
        },
        {
          id: 'preteencat',
          options: [
            { value: 1, label: 'Body ownership', trigger: 'preteencat1' },
            { value: 2, label: 'Personal Hygiene', trigger: 'preteencat2' },
          ],
        },
        {
        id: 'preteencat1',
        message: 'What is bad touch?',
        trigger: 'ans1',
      },
      {
        id: 'ans1',
        message: 'If a stranger/relative/friend touches any of your private parts in a way that makes you feel uncomfortable or painful it is called a bad touch. How to react to bad touch? Scream/shout NO, immediately call for help. Inform your parents about the happenings, do not feel ashamed or awkward',
        trigger: 'cont3',
      },
      {
        id: 'preteencat2',
        message: 'How to maintain good personal hygiene? Brush your teeth twice a day. Take a shower everyday. Always wash your hands before eating. Carry a sanitizer & mask whenever you step out and most importantly eat healthy food.',
        trigger: 'cont3',
      },


        {
          id: 'cat2',
          message: 'What teen problems / questions do you have?',
          trigger: 'teencat',
        },
        {
          id: 'teencat',
          options: [
            { value: 1, label: 'Periods', trigger: 'teencat1' },
            { value: 2, label: 'Sexual Intercourse', trigger: 'teencat2' },
          ],
        },
        {
          id: 'teencat1',
          message: 'What about periods do you want to explore?',
          trigger: 'period',
        },
        {
          id: 'period',
          options: [
            { value: 1, label: 'What is Period Hygiene', trigger: 'period1' },
            { value: 2, label: 'How to Reduce Period Pain', trigger: 'period2' },
          ],
        },
        {
          id: 'period1',
          message: 'Check out this link: https://www.indiatoday.in/lifestyle/wellness/story/5-tips-menstrual-hygiene-day-care-sanitation-lifest-979651-2017-05-28',
          trigger: 'cont2',
        },
        {
          id: 'period2',
          message: '1. Drink more water 2. Exercise 3. Apply heat on your abdomen 4. Reduce stress 5. Eat fresh fruits and veggies.',
          trigger: 'cont2',
        },
        {
          id: 'teencat2',
          message: 'What about sexual intercourse do you want to understand?',
          trigger: 'si'
        },
        {
          id: 'si',
          options: [
            { value: 1, label: 'Reproductive system anatomy', trigger: 'si1' },
            { value: 2, label: 'Intercourse process', trigger: 'si2' },
          ],
        },
        {
          id: 'si1',
          message: 'Check out this link: https://www.niehs.nih.gov/health/assets/images/reproductive_health2.jpg',
          trigger: 'cont2',
        },
        {
          id: 'si2',
          message: 'Watch this video: https://youtu.be/2k_fY9N75I8',
          trigger: 'cont2',
        },

        
        {
          id: 'cat3',
          message: 'What adult problems / questions do you have?',
          trigger: 'adcat',
        },
        {
          id: 'adcat',
          options: [
            { value: 1, label: 'Pregnancy', trigger: 'adcat1' },
            { value: 2, label: 'Contraceptives', trigger: 'adcat2' },
          ],
        },
        {
          id: 'adcat1',
          message: 'What common question about pregnancy do you have?',
          trigger: 'qns',
        },
        {
          id: 'qns',
          options: [
            { value: 1, label: 'Can I get pregnant without having sex?', trigger: 'no' },
            { value: 2, label: 'What is the best time to have sex for getting pregnant?', trigger: 'ov' },
          ],
        },
        {
          id: 'no',
          message: 'Pregnancy without penetration is possible, but it is very difficult for it to happen because the amount of sperm that comes into contact with the vaginal canal is very small, which makes it difficult to fertilize the egg.',

          trigger: 'cont4',
        },
        {
          id: 'ov',
          message: 'Ovulation period - around 14 days before your next period',
          trigger: 'cont4',
        },
        {
          id: 'adcat2',
          message: 'The different contraceptives methods can be found on this site: https://www.nhs.uk/conditions/contraception/what-is-contraception/',
          trigger: 'qns',
        },

         ];

         
const ThemedExample = () => (
  <CenterAlign>
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} floating={true}/>
  </ThemeProvider>
  </CenterAlign>

);

export default ThemedExample;

