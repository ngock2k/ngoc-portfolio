export const MyRecentWork = () => {
    return (
        <div style={{ 
            height: "100vh",
            backgroundImage: `URL('images/Projects Page (2).png')`
            }}>
               
           <p style={ {color:'white',
        font:'Poppins',
        fontSize: 64, 
        fontWeight:700,
        paddingTop: 268,
        paddingLeft: 120} }>
            My recent 
            <span style={{ color: '#00ADB5'}}>
               {"    works"} 
            </span>
           </p>
           <div style={{
            display:'flex',
            paddingLeft:117,
            font:'Poppins',
            fontWeight:700,
            fontSize: 18,
            color: 'white',
            }}>
           {["All","UI","UX"].map(item => {
            return (
                <div style={{
                    display:'flex',
                    borderRadius: 24,
                    backgroundColor: '#393E4680',
                    marginLeft: 16,
                    marginRight: 16,
                    width:90, height:47,
                    alignItems:'center',
                    justifyContent:'center'
                    
                }}>
            <p> 
              {item}  
            </p>
            </div>
            )
             })}
             <div style={{
                color: "white",
                display:'flex',
                borderRadius: 24,
                backgroundColor: '#393E4680',
                width: 174,height:47,
                alignItems:'center',
                justifyContent:'center',
                marginLeft:16
                    
              }}>
                <p>
                    Web Design
                </p>
             </div>
           </div>
           <div style={{
            paddingLeft:117,
            paddingTop:48
            }}>
           <img src="images/Frame10.png"
          style={{ width: 368, height: 280}} /> 
          <img src="images/Frame11.png"
          style={{ width: 368, height: 280,
          marginLeft:48,marginRight:48}} />
          <img src="images/Frame10(1).png"
          style={{ width: 368, height: 280}} />
           </div>

        
        </div>
    
    )

}
