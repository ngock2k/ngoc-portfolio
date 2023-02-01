export const Aboutme = () => {
    return (
        <div style={{
            // display: 'flex',
            height: '100vh',
            backgroundColor: '#222831',
            textAlign: 'left',
            color: 'white',
            fontFamily: 'Poppins',
            fontWeight: 700,
            paddingBottom: 60
        }}>
            
       <div style={{
        position: 'absolute',
      paddingLeft: 512
     }}>
     <img src="images/Line 1.png"
       style={{width: 1, height: '120vh'}} /> 
       </div>
            <div style={{
        position: 'absolute',
        paddingTop: 230,
      paddingLeft: 664
     }}>
     <img src="images/doodle items.png"
       style={{width: 666, height: 498}} /> 

            </div>
            <div style={{
        position: 'absolute',
        paddingTop: 135,
      paddingLeft: 96
     }}>
     <img src="images/Vector 141.png"
       style={{width: 62, height: 46}} /> 

            </div>
            <div style={{
        position: 'absolute',
        paddingTop: 248,
      paddingLeft: 468
     }}>
     <img src="images/Lightbulb.png"
       style={{width: 58, height: 88}} /> 

            </div>
            <div style={{
        position: 'absolute',
        paddingTop: 768,
      paddingLeft: 414
     }}>
     <img src="images/Vector 186.png"
       style={{width: 112, height: 170}} /> 

            </div>
            <div style={{
        position: 'absolute',
        paddingTop: 454,
      paddingLeft: 772
     }}>
     <img src="images/Group 62.png"
       style={{width: 412, height: 354}} /> 

            </div>
            <p style={{
                fontSize: 64,
                paddingLeft: 96,
                paddingTop: 256,
                marginBottom: 0

            }}>
                About
                <span style={{ color: '#00ADB5' }}>
                    {" me"}
                </span>
            </p>
            <div style={{
                display: 'flex',
                width: 389,
                height: 189,
                paddingLeft: 96,
                fontSize: 18,
                fontWeight: 400
            }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....
                    <span style={{ fontWeight: 700 }}>
                        Read more
                    </span>
                </p>
            </div>
        </div>
    )

}
