export const MyRecentWork = () => {
    return (
        <div style={{ 
            display:'flex',
            flexDirection:'column',
            backgroundImage: `URL('images/Projects Page (2).png')`,
            paddingLeft: 104,
            fontWeight:700,
            font:'Poppins',
            }}>
               
           <p style={ {color:'white',
        fontSize: 64,
        paddingTop: 100,
        // backgroundColor:'white',
        marginBottom:16,
        marginLeft:16
        } }>
            My recent 
            <span style={{ color: '#00ADB5'}}>
               {"    works"} 
            </span>
           </p>
           <div style={{
            display:'flex',
            fontSize: 18,
            color: 'white',
            marginBottom:48,
            marginLeft:0
            // backgroundColor:'red'
            }}>
                
           {["All","UI","UX","Web Design"].map(item => {
            return (
                <div style={{
                    display:'flex',
                    borderRadius: 24,
                    backgroundColor: '#393E4680',
                    marginLeft: 16,
                    marginRight: 16,
                    paddingTop:12,
                    paddingBottom:12,
                    paddingRight:32,
                    paddingLeft:32,
                    alignItems:'center',
                    justifyContent:'center'
                    
                }}>
            <p> 
              {item}  
            </p>
            </div>
            )
             })}
            
           </div>
           <div style={{
            display:'flex',
            // backgroundColor:'yellow',
            marginBottom:271
           }}>
           {["images/Frame10.png","images/Frame11.png","images/Frame10(1).png"].map(item => {
            return(
                <img src={item}
          style={{ width: 368,
            marginLeft:24,
            marginRight:24,
             height: 280}} /> 
            )
           })}
           </div>
           

        
        </div>
    
    )

}
