import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import styles from '@/styles/zoomLink.module.css'
import { useToast } from '@chakra-ui/react'
import { Router, useRouter } from "next/router"



export default function () {
  const [joinLink, setJoinLink] = useState("")
  const [linkFlag,setLinkFlag]=useState(false)
  const router = useRouter();
  const email = router.query["email"];
  const name = router.query["name"];
  const topic = router.query["topic"];
  const phone = router.query["phone"];
  const start_time = router.query["start_time"];
  const session_id= router.query["session_id"];
 const [loading,setLoading]=useState(false)
 const toast = useToast()


  useEffect(() => {
    // axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/meetings`).then(
    //   (res)=>{
    //       console.log(res);
    //   }
    // )
    const zoomLink = localStorage.getItem("zoomJoinLink")
    setJoinLink(zoomLink)
    setLinkFlag(true)
  }, [])

  const createMeeting = async (e) => {
    setLoading(true)
    e.preventDefault()  
   try {
    const stripePayment= await axios.post('/api/retrive_session',{session_id})
    // console.log(stripePayment);
    const meetings =await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/meetings`)
    // checking if user is generating zoom link on same payment
    //node
    const paymentID=  meetings.data.filter(meeting =>meeting.payment_id === stripePayment.data.id)
    
    //strapi
    // const paymentID=  meetings.data.data.filter(meeting =>meeting.attributes.payment_id === stripePayment.data.id)

    if(paymentID.length ==0){
          axios.post('/api/zoom_session', {
            name: name,
            email: email,
            topic: topic,
            phone: phone,
            start_time: start_time
          }).then((response) => {
            toast({
              title: 'Link Generated.',
              position: 'top-right',
              description: "generated Link successfully.",
              status: 'success',
              duration: 3000,
              isClosable: true,
          })
            // localStorage.setItem("zoomJoinLink", response.data.join_url)
            setJoinLink(response.data.join_url)
              axios.post(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/meetings`, {
                data: {
                  name: name,
                  email: email,
                  topic: topic,
                  phone: phone,
                  start_time: start_time,
                  join_link: response.data.join_url,
                  start_link: response.data.start_url,
                  payment_id:stripePayment.data.id
                }
              }).then(response => {
                setLinkFlag(true)
                // console.log(response.data);
              }).catch((err) => console.log(err))
          }).catch((err)=>{console.log(err);})

          setLoading(false)
      
    }
    if(paymentID.length !== 0){
      toast({
          title: 'Link Generated.',
          position: 'top-right',
          description: "Link has been Already Generated.",
          status: 'warning',
          duration: 3000,
          isClosable: true,
      })
      setLoading(false)
    }
   } catch (error) {
    toast({
      title: 'Link Generated.',
      position: 'top-right',
      description: "Link has been Already Generated.",
      status: 'warning',
      duration: 3000,
      isClosable: true,
  })
      setLoading(false)
   }

  }
  return (
    <Container className={styles.zoommain} height={'100vh'} maxWidth={'100vw'} >
      {/* <form action="/api/checkout_sessions" method="GET">
        <button type="submit" >click</button>
      </form> */}
      <Box className={styles.zoomlinkbox}>
        <Button
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={6}
          width={"160px"}
          colorScheme={'orange'}
          bg={'orange.600'}
          _hover={{ bg: 'orange.700' }}
          onClick={(e) => { createMeeting(e) }}>
          create zoom Link
        </Button>

        {!loading ? <>{linkFlag && 
          <Flex flexDir={'column'} alignItems={'center'} gap='20px' > <p>Your Zoom Link : </p>
          {joinLink?<a className={styles.aTag} href={joinLink}>{joinLink}</a> : <p>Link not Found</p>}
          <Text>
          please save this link with yours and visit this link on time 
        </Text>
        </Flex>}
        </> : <h2>loading</h2>}
        
      </Box>
      <style jsx>
        {`
              
                button {
                  height: 36px;
                  background: #556cd6;
                  border-radius: 4px;
                  color: white;
                  border: 0;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
                }
                button:hover {
                  opacity: 0.8;
                }
              `}
      </style>

    </Container>
  )
}