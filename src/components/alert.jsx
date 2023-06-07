import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

  const ShowAlert =(props)=>{
    const {status,title,desc}=props
    return(
        <Alert status={status}>
            <AlertIcon />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{desc}</AlertDescription>
        </Alert>
    )
  }
  export default ShowAlert