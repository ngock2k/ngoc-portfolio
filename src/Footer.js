export const Footer = () => {
    return (
        <div style={{
            display:'flex',
            backgroundColor:'#222831',
            height:420,
            flexDirection:'column',
            justifyContent:'center'
        }}>
            <div style={{
                position:'absolute',
                paddingLeft:512
            }}>
                <img src="images/Line 2.png"
                style={{
                width:0.5,
                height:400,
                }} />
            </div>
           <div style={{
            display:'flex',
            justifyContent:'center',
            // backgroundColor:'red',
            paddingTop:100
           }}>
            {[
                {
                    image: 'images/home.png',
                    text:'Home',
                },
                {
                    image: 'images/user.png',
                    text:'About me',
                },
                {
                    image: 'images/phone.png',
                    text:'Contact'
                }
            ].map(item => {
                return(
                   <div style={{
                    display:'flex',
                    color:"white",
                    font: 'Poppins',
                    fontWeight:400,
                    fontSize:18,
                    alignItems:'center',
                    marginLeft:24,
                    marginRight:24,
                    
                   }}>
                    <img src={item.image} 
                    style={{
                        width:24,
                        height:24,
                        marginRight:10
                    }} />
                    <p>
                        {item.text}
                    </p>
                    </div>
                )
            })}
             </div>
             <div  style={{
            display:'flex',
            justifyContent:'center',
            marginTop:38,
            // backgroundColor:'yellow',
            
            }}>
            {[
                "images/facebook.png",
                "images/insta.png",
                "images/twitter.png",
                "images/youtube.png"
                ].map(item =>{
                    return(
                        <img src={item} 
                        style={{
                            width:48,
                            height:48,
                            marginLeft:12,
                            marginRight:12
                        }} />
                    )
                })}
                </div>
                <p style={{
                    color:'#EEEEEEBF',
                    font:'Poppins',
                    fontWeight:400,
                    fontSize:18,
                    marginTop:92,
                    marginBottom:48,
                    marginLeft:1055,
                    // backgroundColor:'red',
                }}>
                    Terms of Service - Privacy Policy
                </p>
                

        </div>
    )
}