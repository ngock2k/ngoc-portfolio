export const Footer = () => {
    return (
        <div style={{
            display:'flex',
            backgroundColor:'#222831',
            height:350,
            width:'100%',
            paddingTop:100,
            flexDirection:'column',
            justifyContent:'center'
        }}>
           <div style={{
            display:'flex',
            justifyContent:'center'
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
            marginTop:38}}>
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
                <div style={{
                    display:'flex',
                    // backgroundColor:'red',
                    paddingTop:44,
                    justifyContent:'end',
                    flex:1
                }}>
                <p style={{
                    color:'white',
                    font:'Poppins',
                    fontWeight:400,
                    fontSize:18,
                    marginTop:48,
                    marginRight:96
                }}>
                    Terms of Service - Privacy Policy
                </p>
                </div>

        </div>
    )
}