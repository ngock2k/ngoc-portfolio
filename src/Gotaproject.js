export const Gotaproject = () => {
    return (
        <div style={{
            display: 'flex',
            height: '100VH',
            backgroundColor: '#222831',
            flexDirection: 'row',
            // paddingLeft: 96,
            // paddingTop: 258,
        }}>
            <div style={{ position:'absolute',
                paddingTop:118,
                paddingLeft:820}}>
           <img src="images/keyboard.png" 
                style={{height:64,width:140 }} />
            </div>
           <div style={{
                 position:"absolute",
                 paddingTop:812,
                 paddingLeft:1200
           }}>
           <img src="images/mail.png"
                style={{width:58, height:50}} />
           </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: 96,
                paddingTop: 258
                //   backgroundColor:'yellow'  
            }}>
                <p style={{
                    color: 'white',
                    font: 'Poppins',
                    fontSize: 64,
                    fontWeight: 700,
                    marginTop: 0,
                    // backgroundColor:'red'
                }}>
                    Got a project in
                    <span style={{
                        color: '#00ADB5',
                        display: 'block'
                    }}>
                        mind?
                    </span>
                </p>
                <div>
                    <img src="images/Vector 186 (1).png"
                        style={{ height: 170, width: 113 }} />
                    <img src="images/Group 2372.png"
                        style={{ height: 348, width: 256, marginLeft: 50 }} />
                </div>
            </div>
            <div style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 700,
                display: 'flex',
                flexDirection: 'column',
                font: 'Poppins',
                paddingLeft: 232,
                paddingLeft: 96,
                paddingTop: 258
            }}>
                <div style={{
                    display: 'flex',

                }}>
                    <div>
                        <p>
                            Your name
                        </p>

                        <input
                            placeholder="Name"
                            style={{
                                color: '#EEEEEE80',
                                backgroundColor: '#393E4680',
                                borderRadius: 16,
                                width: 264,
                                height: 59,
                                fontSize: 18,
                                fontWeight: 700,
                                border: 0,
                                paddingLeft: 24
                            }} />

                    </div>
                    <div style={{
                        marginLeft: 24
                    }}>
                        <p>
                            Your email
                        </p>

                        <input
                            placeholder="Email"
                            style={{
                                color: '#EEEEEE80',
                                backgroundColor: '#393E4680',
                                borderRadius: 16,
                                width: 264,
                                height: 59,
                                fontSize: 18,
                                fontWeight: 700,
                                border: 0,
                                paddingLeft: 24
                            }} />

                    </div>
                </div>
                <div>
                    <p>
                        Your message
                    </p>
                    <div style={{
                        width: 576,
                        height: 280,
                        backgroundColor: '#393E4680',
                        borderRadius: 16,
                        padding: 16,
                        display: 'flex',
                        // flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start'
                    }} >
                        <input
                            placeholder={"Message  "}
                            type="text"
                            multiple
                            style={{
                                flex: 1,
                                color: '#EEEEEE80',
                                // height: 
                                backgroundColor: 'transparent',
                                fontSize: 18,
                                fontWeight: 700,
                                border: 'none',
                                outline: 'none',
                                verticalAlign: 'text-top',
                                
                            }} />
                    </div>


                </div>
                <div style={{
                    borderRadius: 24,
                    backgroundColor: '#00ADB5',
                    display: 'flex',
                    alignItems: 'center',
                    width: 232,
                    height: 47,
                    marginTop: 24
                }}>
                    <p style={{
                        marginLeft: 32,
                        marginRight: 10
                    }}>
                        Send Message
                    </p>
                    <img src="images/send.png"
                        style={{
                            width: 24,
                            height: 24,
                            marginTop: 10,
                        }} />
                </div>
            </div>
        </div>

    )
}