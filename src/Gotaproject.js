export const Gotaproject = () => {
    return (
        <div style={{
            display: 'flex',
            backgroundColor: '#222831',
            flexDirection: 'row',
            paddingLeft: 96,
            // paddingTop: 258,
        }}>
            <div style={{
                position:'absolute',
                paddingLeft:416
        }}>
                <img src="images/Line 2.png"
                style={{width:0.5,height:1024}} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 258,
                //   backgroundColor:'yellow'  
            }}>
                <p style={{
                    color: 'white',
                    font: 'Poppins',
                    fontSize: 64,
                    fontWeight: 700,
                    marginTop: 0,
                    marginBottom:0,
                    lineHeight:'80px',
                }}>
                    Got a project in
                    <span style={{
                        color: '#00ADB5',
                        display: 'block'
                    }}>
                        mind?
                    </span>
                </p>
                <div style={{
                    display:'flex',
                    }}>
                    <img
                        src="images/Vector 186 (1).png"
                        style={{ 
                            height: 170,
                             width: 113,
                            marginTop:32,
                        marginLeft:22 }}
                    />
                    <img
                        src="images/Group 2372.png"
                        style={{
                            height: 348,
                            width: 256,
                            marginLeft: 16.44,
                        }}
                    />
                </div>
            </div>
            <div style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 700,
                display: 'flex',
                flexDirection: 'column',
                font: 'Poppins',
                // backgroundColor:'red',
                paddingLeft: 174,
                paddingTop: 60
            }}>
                 <img src="images/keyboard.png"
                    style={{ 
                        height: 63.5,
                        width: 139.2,
                        paddingLeft:76,
                          }} />
                <div style={{
                    display: 'flex',
                    marginTop:83,

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
                                fontSize: 18,
                                fontWeight: 700,
                                width: 264,
                                height: 59,
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
                            placeholder={"Message message messagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessage "}
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
                                // verticalAlign: 'text-tsop',

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
                <img src="images/mail.png"
                    style={{
                        width: 58,
                        height: 50,
                        paddingTop:17,
                        paddingLeft:456,
                        marginBottom:170
                         }} />
            </div>
        </div>
    )
}