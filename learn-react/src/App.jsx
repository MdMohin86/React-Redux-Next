import Map from "./components/Map";
import Container from "./components/Container";
import 'bootstrap/dist/css/bootstrap.min.css'

// import Button from "./components/Button"

function App() {

  let name = "Mohin";
  const age = 23 ;
  return (
    <>
      {/* <h1>Learn React with {name} who is {age}</h1>
      <Button></Button> */}
      <Container>
        <Map></Map>
        <p></p>
      </Container>
    </>
  )
}

export default App
