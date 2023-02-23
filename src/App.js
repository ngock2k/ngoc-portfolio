import logo from './logo.svg';
import './App.css';
import { Header } from './Header'
import { CREATIVEUI } from './CREATIVEUI'
import { Aboutme } from './Aboutme'
import { MyRecentWork } from './MyRecentWork'
import { Gotaproject } from './Gotaproject'
import { Footer } from './Footer'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      // width:'100vw',
      // height: '100vh',
      // overflow: 'hidden'
    }} >
      <Header />
      <div style={{
        position: 'absolute',
        paddingLeft: 512
      }}>
        <img src="images/Line 1.png"
          style={{ width: 1, height: 1024 }} />
      </div>
      <div style={{
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
      }}>
        <img src="images/Line 2.png"
          style={{ width: '100%', height: 1 }} />
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
      <Gotaproject />
      <Footer />
    </div>
  );
}

export default App;
