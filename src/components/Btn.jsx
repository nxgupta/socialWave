import styled from '@emotion/styled';
import { Button } from '@mui/material';

export default function Btn() {
  const ButtonComponent=styled(Button)(({theme})=>({
    backgroundColor:theme.palette.secondary.main,
    variant:"contained",
    color:'white',
    "&:hover":{
      backgroundColor:theme.palette.secondary.light,
    }
  }))

  return (
    <div className="Btn">
      <ButtonComponent>Contained</ButtonComponent>
      <Button color='secondary' variant='contained'>click me</Button>
      <Button variant='contained'>click me</Button>
    </div>
  )
}