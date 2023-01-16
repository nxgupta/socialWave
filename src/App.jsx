import {Navbar,Feed,Rightbar,Sidebar} from './components/index'
import {Box,Container,Stack} from '@mui/material'
function App() {
  return (
    <Box className="App">
      {/* <Navbar/> */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
    </Box>
  )
}
export default App
