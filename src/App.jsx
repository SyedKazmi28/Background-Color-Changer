import { useState } from 'react'
import Button from './components/Button/Button'


function App() {
  const [color,setColor] = useState("olive") 

  const colorChange = (color)=>{
    setColor(color)
    
  }
  return (
    <>
     <div
     style={{ 
      backgroundColor : color,
   
    
  
     }}
     >
      <div style={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems : 'center',
          minHeight : '100vh',
          gap : '20px',
         
         
        }
      }>
        <Button
          text = "red"
          backgroundColor = "red"
          action = {colorChange}
        />
        <Button
          text = "green"
          backgroundColor = "green"
          action = {colorChange}
        />
        <Button
          text = "blue"
          backgroundColor = "blue"
          action = {colorChange}
        />
        <Button
          text = "grey"
          backgroundColor = "grey"
          action = {colorChange}
        />
        <Button
          text = 'purple'
          backgroundColor = "purple"
          action = {colorChange}
        />
      </div>
     </div>
    </>
  )
}

export default App
