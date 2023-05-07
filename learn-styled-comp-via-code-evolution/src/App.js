import './App.css';
import Lecture_03 from './components/lecture-03/Lecture_03';
import Lecture_05 from './components/lecture-05/Lecture_05';
import MyCustomButton from './components/lecture-07/MyCustomButton';
import AnimationUsingKeyFrame from './components/lecture-08/AnimationUsingKeyFrame';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import ButtonCompUsingTheme from './components/lecture-09/ButtonCompUsingTheme';
import {GlobalStyles} from './styles/globalStyles';


function App() {
  return (
    <ThemeProvider theme={theme}> 
    <GlobalStyles />
    
    <div className="App">
      <header className="App-header">
        <h1>Learn Styled Components From Code Evolution</h1>
      </header>

      <main>
        <div className='lecture'>
         
          <hr />
          <h3>Lecture 03</h3>
          <Lecture_03 />
          <br/>
          <Lecture_03 variant = 'primary' />
          <hr />
        </div>


        <div className='lecture'>
         <hr />
         <h3>Lecture 05</h3>
         <Lecture_05 />
         <br/>
         <Lecture_05 as="a"> Check this anchor </Lecture_05>
         <hr />
       </div>
       
       <div className='lecture'>
            <hr />
              <h3>Lecture 07</h3>
              <MyCustomButton linkText=' Lec-7' role="link" />
              <hr />
       </div>

       <div className='lecture'>
            <hr />
              <h3>Lecture 08</h3>
              <AnimationUsingKeyFrame />
              <hr />
       </div>


       <div className='lecture'>
            <hr />
              <h3>Lecture 09</h3>
              <ButtonCompUsingTheme />
              <hr />
       </div>

      

      </main>

      <footer> 
        <h2>This is Footer Section</h2>
        <h3>Please Refer Link : 
          <a href='https://www.youtube.com/watch?v=FSCSdAlLsYM&list=PLC3y8-rFHvwgu-G08-7ovbN9EyhF_cltM&index=1&pp=iAQB'>
            Lecture Link
          </a>
        </h3>
      </footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
