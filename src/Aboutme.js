export const Aboutme = () => {
    return (
       
        <div style={{
            display: 'flex',
            color: 'white',
            fontFamily: 'Poppins',
            fontWeight: 700,
            backgroundColor:'#222831',
            
         
        }}>
            
            <div style={{
                display:'flex',
                flexDirection:'column',
                paddingLeft: 96,
                paddingTop:135,
                // backgroundColor:'white',
                // justifyContent:'center'
            }}>
            <img src="images/Vector 141.png"
            style={{width: 62, height: 46,
             marginBottom:74,
            //  paddingTop:135
             }} />
            <div style={{
                display:'flex',
                // marginTop:74,
                // backgroundColor:'red',
                justifyContent:'space-between'
                
            }}>
            <p style={{
                fontSize: 64,
                marginRight:27,
                marginTop:0,
                marginBottom:0
            }}>
                About
                <span style={{ color: '#00ADB5' }}>
                    {" me"}
                </span>
            </p>
            <div style={{
                display:'flex',
                // alignItems:'flex-end',
                
            }}>
            <img src="images/Lightbulb.png"
            style={{width: 58, height: 88}} /> 
            </div>
            </div>
            <div style={{
                display: 'flex',
                width: 389,
                height: 189,
                fontSize: 18,
                fontWeight: 400,
                paddingRight:27,
                lineHeight: '27px'
            }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....
                    <span style={{ fontWeight: 700,  }}>
                        Read more
                    </span>
                </p>
            </div>
            <img src="images/Vector 186.png"
            style={{
                width: 112,
                height: 170,
                paddingTop:65,
                paddingLeft:161,

                }} />
            </div>
            <div style={{
                backgroundColor:'#EEEEEE1A',
                width:0.5,
                height:1024
             }}>

       </div>
            
            <div style={{
                display:'flex',
                paddingTop:230,
                paddingLeft:179,
                // backgroundColor:'red'
            
            }}>
            <img src="images/doodle items.png"
       style={{width: 666, height: 498}} />
       <div style={{
        position: 'absolute',
        // backgroundColor:'red'
     }}>
     <img src="images/Group 62.png"
       style={{
        width: 412,
        height: 354,
        paddingLeft:108,
        paddingTop:224
         }} /> 

            </div>
       </div>
       <div style={{
        position:'absolute'
       }}>
        <img src="images/line 1.png"
        style={{
           height:0.5,
           width:1440,
           paddingTop:892,
           
        }} />
       </div>
       
        </div>
       
       
    )

}
