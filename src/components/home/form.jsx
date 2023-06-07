import styles from '@/styles/Form.module.css'
import { Box, Select, Button, Input, Textarea, useColorModeValue, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ShowAlert from '../alert'


export default function Form() {
    const [day, setDay] = useState()
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [issue, setIssue] = useState('')
    const [alert, showAlert] = useState(false)
    const [conflictTime, setConflictTime] = useState(false)
    const [reservedTimes, setReservedTimes] = useState([])
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
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/timeslots/`).then((response) => {
            setTimeSLots(response.data[0].time_slots)
        }).catch((err)=> console.log(err))

        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/meetings`).then(
            (res) => {
                const times = res.data.data.map(d => {
                    return d.attributes.start_time
                })
                setReservedTimes(times)
            }
        ).catch(err => console.log(err))

    }, [])

    useEffect(() => {
        const crossTime = reservedTimes.filter(t => t == `${date}T${time}`)
        if (crossTime.length > 0) {
            setConflictTime(true)
        }
        else {
            setConflictTime(false)
        }
    }, [date, time])

    const checkHoliday = () => {
        if (time == "" || day == 0 || day == 6) {
            showAlert(true)
        }
    }

    const dateChange = (e) => {
        const crossTime = reservedTimes.filter(t => t == `${e.target.value}T${time}`)
        if (crossTime.length > 0) {
            setConflictTime(true)
        }
        else {
            setConflictTime(false)
        }
        setDate(e.target.value)
        const dayNumber = new Date(e.target.value).getDay()
        //  for holiday disable booking
        setDay(dayNumber)
    }
    const changeTime = (e) => {
        setTime(e.target.value)
        const crossTime = reservedTimes.filter(t => t == `${date}T${e.target.value}`)
        if (crossTime.length > 0) {
            setConflictTime(true)
        }
        else {
            setConflictTime(false)
        }
    }
    return (
        <Box className={styles.form}>
            {
                (alert || day == 6 || day == 0) &&
                <>
                    <ShowAlert
                        status={'warning'}
                        title={'holiday'}
                        desc={'  Booking not availible'}
                    />
                </>
            }
            <span>
                <Text fontSize={35} fontWeight={"bold"}>
                    Fill the Form
                </Text>
                <h2>
                    Make an Appointment
                    Many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some.
                </h2>
            </span>
            <form action="/api/checkout_sessions" method="POST" className={styles.formItems}>
                <Input required="true" onChange={(e) => { setName(e.target.value) }} type='text' name='name' placeholder='Your Name' />
                <Input required="true" type='email' onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder='Your Email' />
                <Input required="true" onChange={(e) => { setPhone(e.target.value) }} type='text' name='phone' placeholder='Phone No' />
                <Input required="true" onChange={(e) => { dateChange(e) }} type='date' name='date' placeholder='pick a date' />
                <Select required="true" onChange={(e) => { changeTime(e) }} name='time' disabled={(day == 0 || day == 6) || date == '' ? true : false} placeholder='Select option'>
                    <option disabled={timeSlots.t1 ? false : true} value='09:00:00.833Z'>09 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  09 : 30  </option>
                    <option disabled={timeSlots.t2 ? false : true} value='09:30:00.833Z'>09 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  10 : 00  </option>
                    <option disabled={timeSlots.t3 ? false : true} value='10:00:00.833Z'>10 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  10 : 30  </option>
                    <option disabled={timeSlots.t4 ? false : true} value='10:30:00.833Z'>10 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  11 : 00  </option>
                    <option disabled={timeSlots.t5 ? false : true} value='11:00:00.833Z'>11 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  11 : 30  </option>
                    <option disabled={timeSlots.t6 ? false : true} value='11:30:00.833Z'>11 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  12 : 00  </option>
                    <option disabled={timeSlots.t7 ? false : true} value='12:00:00.833Z'>12 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  12 : 30  </option>
                    <option disabled={timeSlots.t8 ? false : true} value='12:30:00.833Z'>12 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  01 : 00  </option>
                    <option disabled={timeSlots.t9 ? false : true} value='01:00:00.833Z'>01 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  01 : 30  </option>
                    <option disabled={timeSlots.t10 ? false : true} value='01:30:00.833Z'>01 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  02 : 00  </option>
                    <option disabled={timeSlots.t11 ? false : true} value='02:00:00.833Z'>02 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  02 : 30  </option>
                    <option disabled={timeSlots.t12 ? false : true} value='02:30:00.833Z'>02 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  03 : 00  </option>
                    <option disabled={timeSlots.t13 ? false : true} value='03:00:00.833Z'>03 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  03 : 30  </option>
                    <option disabled={timeSlots.t14 ? false : true} value='03:30:00.833Z'>03 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  04 : 00  </option>
                    <option disabled={timeSlots.t15 ? false : true} value='04:00:00.833Z'>04 : 00  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  04 : 30  </option>
                    <option disabled={timeSlots.t16 ? false : true} value='04:30:00.833Z'>04 : 30  &nbsp; &nbsp; &nbsp; {">"}  &nbsp; &nbsp; &nbsp;  05 : 00  </option>
                </Select>

                <Textarea required="true" onChange={(e) => { setIssue(e) }} type='text' name='topic' placeholder='Discussion Topic' />
                <Button onClick={() => { checkHoliday() }} type={(time == "" || day == 0 || conflictTime || day == 6) ? "button" : "submit"} role="link" colorScheme='orange'>
                    {conflictTime ? "Slot Already boeked" : "Proceed"}
                </Button>
            </form>
        </Box>
    )
}