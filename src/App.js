import logo from './logo.svg';
import './App.css';
import { Header } from './Header'
import { CREATIVEUI } from './CREATIVEUI'
import { Aboutme } from './Aboutme'
import { MyRecentWork } from './MyRecentWork'
function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }} >
      <Header />
      <div style={{
        position: 'absolute',
      paddingLeft: 512
     }}>
     <img src="images/Line 1.png"
       style={{width: 1, height: '130vh'}} /> 

            </div>
      <div style={{
      position: 'absolute',
      // paddingtop: 300
     }}>
     <img src="images/Line 2.png"
       style={{width: '150%', height: 1}} /> 
       </div>
      <div style={{
        position: 'absolute',
        paddingTop: 385,
        paddingLeft: 72
      }}>
        <img src="images/Vector 187.png"
          style={{ width: 90, height: 221.7 }} />
      </div>
      <CREATIVEUI />
      <Aboutme />
      <MyRecentWork />
    </div>
  );
}

export default App;
