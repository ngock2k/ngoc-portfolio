export const MyRecentWork = () => {
    return (
        <div style={{ 
            // height: "100vh",
            backgroundImage: `URL('images/Projects Page (2).png')`
            ,paddingLeft: 120
            }}>
               
           <p style={ {color:'white',
        font:'Poppins',
        fontSize: 64, 
        fontWeight:700,
        paddingTop: 100,
        } }>
            My recent 
            <span style={{ color: '#00ADB5'}}>
               {"    works"} 
            </span>
           </p>
           <div style={{
            display:'flex',
            font:'Poppins',
            fontWeight:700,
            fontSize: 18,
            color: 'white',
            paddingBottom:48
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
    
    )

}
