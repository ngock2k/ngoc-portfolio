import './App.css';

export const Header = () => {
  return (
    <div style={{ 
      display: 'flex',
      backgroundColor: '#222831',
      color: 'white',
      justifyContent: 'space-between',
      paddingLeft: 96,
      paddingRight: 96,
      alignItems: 'center'
    }}>
      <p style={{ 
        fontFamily: "Oswald",
        fontSize: 24,
        fontWeight: 700
        }}>
        SaulDesign
      </p>
      <div style={{ 
        display: 'flex',
      }}>
        {["Home","About Me","Contact"].map(item => {
            return (
              <p style={{
                fontFamily: 'Poppins', 
                fontWeight: 400,
                fontSize: 18,
                marginLeft: 48,
                marginRight: 48}}>
                {item}
              </p>
            )
          })}
      </div>
    </div>
  )
}
