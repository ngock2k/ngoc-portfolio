import logo from './logo.svg';
// import './App.css';

const Header = () => {
  return (
    <div style={{
      display: 'flex',
      // width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 40,
      paddingRight: 40,
      fontWeight: 'bold'
    }}>
      <p style={{
        fontWeight: 'bold',
        color: 'red',
        fontSize: 30,
        // backgroundColor: 'blue',
        margin: 0,
      }}>
        Le Ngoc
      </p>
      <div style={{
        // width: 300,
        // height: 50,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        // position: 'absolute'
      }} >
        {['Home', 'Works', 'Experience'].map(item => {
          return (
            <p style={{
              marginLeft: 10,
              marginRight: 10,
            }} >
              {item}
            </p>
          )
        })}
      </div>
      <div style={{
        display: 'flex',
        borderStyle: 'inset',
        width: 100,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p>
          Let's chat
        </p>
      </div>

    </div>
  )
}
const Body = () => {
  return (
    <div style={{
      flexDirection: 'row',
      display: 'flex',
      //  flex: s1,
      backgroundColor: '#ded1c1',
    }}
    >
      <div style={{
        backgroundColor: 'white',
        flex: 1,
      }}
      >
        <div style={{
          position: 'absolute'
        }}>
          <img src="assets/images/bongro.png"
            style={{
              width: 150, height: 150,
              paddingTop: 280,
              paddingLeft: 500
            }}
          />
        </div>
        <div style={{
          display: 'flex',
          height: 4,
          // flex: 1,
          justifyContent: 'space-between',
          paddingRight: 480, fontWeight: 'bold',
          paddingTop: 100

        }}>
          <div style={{
            display: 'flex',
            paddingLeft: 100,
            height: 50,
            alignItems: 'center', paddingTop: 30
          }}>
            <p style={{ fontSize: 50 }}>
              Hi! I Am
              <span style={{ display: 'block' }}>
                Le Ngoc
              </span>
            </p>
          </div>

          <div style={{
            display: 'flex',
            backgroundColor: '#5562ff',
            height: 50, width: 120,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25
          }}>
            <p style={{
              fontSize: 25,
              color: 'white'
            }}>
              UI/UX
            </p>
          </div>

        </div>

        <p style={{
          paddingTop: 130,
          paddingLeft: 100,
          textAlign: 'left',
          wordSpacing: 2
        }}>
          Designer sjfh msdb about
          <span style={{ fontWeight: 'bold' }}>
            7 years
          </span>
          <span style={{ display: 'block' }}>
            kjdbf bb bbb bb
          </span>
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: 100,
          paddingRight: 500, paddingTop: 40

        }}>
          <div style={{
            display: 'flex',
            backgroundColor: '#fe481c',
            height: 50, width: 140,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }} >
            <p style={{ fontWeight: 'bold' }}>
              Hire me
            </p>
          </div>
          <p style={{ fontWeight: 'bold' }}>
            Projects
          </p>
          <p style={{ fontWeight: 'bold' }}>
            ↗
          </p>
        </div>
        <div style={{
          display: 'flex',
          // justifyContent: 'space-between',
          paddingLeft: 100,
          textAlign: 'left',
          fontWeight: 'bold',
          fontSize: 25
        }}>
          <div style={{
            flexDirection: 'column'
          }}>
            <p style={{
              paddingTop: 30
            }}>
              +84
              <span style={{
                display: 'block',
                fontSize: 15, fontWeight: 'normal'
              }}>
                Clients on work worldwide
              </span>
            </p>

            <p>
              572
              <span style={{
                display: 'block',
                fontSize: 15,
                fontWeight: 'normal'
              }}>
                Project Done
              </span>
            </p>
          </div>
          <p style={{
            paddingTop: 106,
            paddingLeft: 40
          }}>
            Contact
            <span style={{
              display: 'block',
              fontSize: 15, fontWeight: 'normal'
            }}>
              ngocngoc190200@gmail.com
            </span>
          </p>

        </div>
        <div style={{
          display: 'flex',
          backgroundColor: 'black',
          // justifyContent: 'space-between',
          paddingLeft: 100,
          paddingTop: 20, height: 160
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            paddingBottom: 50
            // justifyContent: 'space-between'
          }}>
            <p style={{ color: 'white' }}>
              Project
              <span style={{ display: 'block' }}>
                Statistics 2022
              </span>
            </p>
            <div style={{
              display: 'flex',
              flex: 1,
              backgroundColor: 'yellow',
              height: 30, width: 100,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              fontWeight: 'bold', fontSize: 12
            }} >
              <p>
                Know More
              </p>
            </div>
          </div>
          <div style={{
            flex: 1, fontSize: 15,
            paddingLeft: 200,
            // backgroundColor: 'red'
          }}>
            {[
              {
                name: 'Website Design',
                project: 75,
              },
              {
                name: 'Mobile App Design',
                project: 61,
              },
              { 
                name: 'Brand Identity',
                project: 37
              }
            ].map(item => {
              return (
                <div>
                  <div style={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingRight: 100,
                    height: 40
                  }}>
                    <p>
                      {item.name}
                    </p>
                    <p>
                      {item.project}
                    </p>

                  </div>
                  <div style={{
                    height: 1,
                    backgroundColor: 'gray',
                    width: '85%',
                  }} />
                </div>
              )
            })}

          </div>
        </div>
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column', paddingBottom: 30

      }}>
        <div style={{
          position: 'absolute'
        }}>
          <img src="assets/images/kimcuong.png"
            style={{
              width: 80, height: 80,
              paddingTop: 230,
              paddingLeft: 520
            }}
          />
        </div>
        <p style={{
          fontSize: 25, paddingTop: 80,
          textAlign: 'left', paddingLeft: 200
        }}>
          Create Your site in
          <span style={{ fontWeight: 'bold' }}>
            {" Figma "}
          </span>
          <span style={{ fontWeight: 'bold', display: 'block' }}>
            Sketch
            <span style={{ fontWeight: 'normal' }} >
              {" or "}
            </span>
            <span style={{ fontWeight: 'bold' }}>
              XD
            </span>
          </span>

        </p>

        <div style={{
          display: 'flex',
          flex: 1,
          alignItems: 'flex-end',
          // backgroundColor: 'red',
          paddingLeft: 80
        }} >
          <img src="./assets/images/ngoc2.png "
            style={{
              width: 600,
              height: 500,
              objectFit: 'cover'
            }} />
        </div>

        <div style={{
          display: 'flex',
          // backgroundColor: 'red',
          // justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            backgroundColor: 'white',
            width: '60%',
            justifyContent: 'space-between',
            padding: 6
          }} >
            <input
              placeholder="Subscribe my Newsietter"
              style={{
                fontSize: 18,
                marginLeft: 20,
                border: 'none',
                outline: 'none'
              }}
            />



            <div style={{
              display: 'flex',
              backgroundColor: 'black',
              color: 'white',
              width: 50,
              // alignItems: 'center',
              justifyContent: 'center'
            }}>
              <p>
                ➔
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      height: '100vh'
    }} >
      <Header />
      <div style={{
        paddingBottom: 1,
        height: 1,
        // width: '100%',
        backgroundColor: 'gray',
      }} />
      <Body />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
