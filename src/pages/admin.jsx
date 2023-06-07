import { Box, Button, CircularProgress, Container, Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { MdCall } from "react-icons/md"
import styles from "@/styles/admin.module.css"


export default function Admin() {
    const [meetings, setMeetings] = useState([])
    const [startTime, setStartTime] = useState('')
    const [loading, setLoading] = useState(false)
    const [timeSlots, setTimeSLots] = useState({
        "t1": true,
        "t2": true,
        "t3": true,
        "t4": true,
        "t5": true,
        "t6": true,
        "t7": true,
        "t8": true,
        "t9": true,
        "t10": true,
        "t11": true,
        "t12": true,
        "t13": true,
        "t14": true,
        "t15": true,
        "t16": true
    })
    useEffect(() => {
        setLoading(true)
        axios.get('/api/zoom_session').then((response) => {
            setMeetings(response.data.meetings)
            setStartTime(response.data.start_time)
            setLoading(false)
        }).catch((err) => {
            console.log(err); setLoading(false)
        })

        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/timeslots`).then((response) => {
            setTimeSLots(response.data[0].time_slots)
        }).catch(err => console.log(err))
    }, [])




    const slotClickFunc = (e) => {
        const no = e.target.value
        no == 1 && (timeSlots.t1 = !timeSlots.t1)
        no == 2 && (timeSlots.t2 = !timeSlots.t2)
        no == 3 && (timeSlots.t3 = !timeSlots.t3)
        no == 4 && (timeSlots.t4 = !timeSlots.t4)
        no == 5 && (timeSlots.t5 = !timeSlots.t5)
        no == 6 && (timeSlots.t6 = !timeSlots.t6)
        no == 7 && (timeSlots.t7 = !timeSlots.t7)
        no == 8 && (timeSlots.t8 = !timeSlots.t8)
        no == 9 && (timeSlots.t9 = !timeSlots.t9)
        no == 10 && (timeSlots.t10 = !timeSlots.t10)
        no == 11 && (timeSlots.t11 = !timeSlots.t11)
        no == 12 && (timeSlots.t12 = !timeSlots.t12)
        no == 13 && (timeSlots.t13 = !timeSlots.t13)
        no == 14 && (timeSlots.t14 = !timeSlots.t14)
        no == 15 && (timeSlots.t15 = !timeSlots.t15)
        no == 16 && (timeSlots.t16 = !timeSlots.t16)
        console.log(timeSlots.t2);

        axios.put(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/timeslots`, {
            "data": {
                "t1": timeSlots.t1,
                "t2": timeSlots.t2,
                "t3": timeSlots.t3,
                "t4": timeSlots.t4,
                "t5": timeSlots.t5,
                "t6": timeSlots.t6,
                "t7": timeSlots.t7,
                "t8": timeSlots.t8,
                "t9": timeSlots.t9,
                "t10": timeSlots.t10,
                "t11": timeSlots.t11,
                "t12": timeSlots.t12,
                "t13": timeSlots.t13,
                "t14": timeSlots.t14,
                "t15": timeSlots.t15,
                "t16": timeSlots.t16
            }
        }).then(res => { setTimeSLots(res.data.time_slots) }).catch(err => console.log(err))
    }
    return (
        <Container minH={'100vh'} bg={"gray.100"} maxW={'100vw'} pt='15vh'>
            <TableContainer minH={'50vh'} border={'1px solid lightGrey'} borderRadius='10px'>
                <Table variant='simple' size='sm'>
                    <TableCaption>Zoom Meetings To Attend</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Email</Th>
                            <Th>Join_URL</Th>
                            <Th>Start_Time</Th>
                            <Th>Topic</Th>
                        </Tr>
                    </Thead>
                    {loading ?
                        <CircularProgress top={"20vh"} left={"47vw"} isIndeterminate color='orange.600' />
                        :
                        <> {meetings.map((meeting, i) => {
                            return (
                                <Tbody key={i}>
                                    <Tr>
                                        <Td>{meeting.agenda}</Td>
                                        <Td><a href={meeting.join_url}>{meeting.join_url}</a></Td>
                                        <Td>{meeting.start_time}</Td>
                                        <Td>{meeting.topic}</Td>
                                    </Tr>
                                </Tbody>
                            )
                        })} </>
                    }
                </Table>
            </TableContainer>
            <Flex align={"center"} gap={"2vw"} flexWrap={"wrap"} flexDir={'column'}>
                <Text fontWeight={"bold"} fontSize={"4xl"}>Disable Slots</Text>
                <Flex gap={"5vw"}>
                    <Flex align={"center"} gap={"1vw"}>
                        Disabled: <Text color={"blue.400"} fontWeight={"bold"} fontSize={"40px"}>o</Text>
                    </Flex>
                    <Flex align={"center"} gap={"1vw"}>
                        Enabled : <Text color={"yellow.500"} fontWeight={"bold"} fontSize={"40px"} >o</Text>
                    </Flex>
                </Flex>
                <Flex justify={"space-between"} gap={"3vw"} flexWrap={"wrap"}>
                    <Button width={"200px"} colorScheme={timeSlots.t1 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='1'>09 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  09 : 30  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t2 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='2'>09 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  10 : 00  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t3 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='3'>10 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  10 : 30  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t4 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='4'>10 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  11 : 00  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t5 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='5'>11 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  11 : 30  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t6 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='6'>11 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  12 : 00  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t7 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='7'>12 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  12 : 30  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t8 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='8'>12 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  01 : 00  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t9 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='9'>01 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  01 : 30  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t10 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='10'>01 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  02 : 00  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t11 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='11'>02 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  02 : 30  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t12 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='12'>02 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  03 : 00  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t13 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='13'>03 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  03 : 30  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t14 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='14'>03 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  04 : 00  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t15 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='15'>04 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  04 : 30  </Button>
                    <Button width={"200px"} colorScheme={timeSlots.t16 ? 'blue' : 'yellow'} variant='outline' onClick={(e) => { slotClickFunc(e) }} value='16'>04 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  05 : 00  </Button>
                </Flex>
            </Flex>
        </Container >
    )
}



{/* <Flex gap={10} key={meeting.uuid}>
                    <h2>
                        link : 
                    </h2>
                   
                    <a href={meeting.join_url} target="_blank">{meeting.join_url}</a>
                    <p>{meeting.agenda}</p>
                    <p>{meeting.start_time}</p>
                    <p>{meeting.topic}</p>
                    </Flex> */}