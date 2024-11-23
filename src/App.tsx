import { useState } from "react"

function App() {
  const [boxes, setBoxes] = useState(() => Array({length: 100}).map((shit, index) => (index)))

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {

  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {

  }
  return (
    <>

      {boxes.map((event) => (
        <div key={event} draggable={true} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop}>{event}</div>
      ))}
    </>
  )
}

export default App