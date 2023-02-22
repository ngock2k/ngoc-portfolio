
export const CREATIVEUI = () => {
    return (
     <div style={{ 
    //  height: "100vh",
     backgroundColor: '#222831',
     display: 'flex',
     flexDirection:'column',
    //  textAlign: 'left',
     paddingLeft: 180,
     paddingTop: 202, 
     
     }}>
      
     <div style={{
        position: 'absolute',
      //   paddingTop: 93,
      paddingLeft: 800
     }}>
     <img src="images/body1bround.png"
       style={{width: 514, height: 514}} /> 
       </div>  

       <div style={{
        position: 'absolute',
        paddingTop: 285,
      paddingLeft: 634
     }}>
     <img src="images/Group 2346.png"
       style={{width: 400, height: 472.65}} /> 
       </div>  

     <p style={{ 
      // backgroundColor: 'red',
        fontSize: 96, fontWeight: 900,
        fontFamily: 'Poppins', marginBottom: 45,
        color: 'white'}}>
        CREATIVE UI 
        <span style={{ 
            color: '#00ADB5',
            display: 'block'}}>
        DESIGNER
        </span>
     </p>
     <div style={{ 
        display: 'flex',
        color: 'white',
      //   backgroundColor:'red', 
        fontWeight: 700, fontSize: 18,
         alignItems:'center', 
        fontFamily: 'Poppins'
        
     }} >
     <div style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#00ADB5',
        width: 136, height:47,
        marginRight: 24,
        borderRadius: 24,
         }}>
     <p>
        Hire me
     </p>
     </div>
     <div style={{
        alignItems:'center',
        display: 'flex',
        backgroundColor: '#393E46BF',
        borderRadius: 24,
        width:223,height: 47,
        justifyContent: 'center',
        alignItems: 'center' }}>
       <p> 
       Download CV
       </p> 
       <img src="images/download.png"
       style={{marginLeft: 10, width: 24, height: 24}} />
     </div>
     </div>
     <div style={{
        // position: 'absolute',
        paddingTop: 243,
      paddingLeft: 284
     }}>
     <img src="images/mũiten.png"
       style={{width: 96, height: 96}} /> 
       </div> 
     </div>  
      
    )
}
