import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text, Flex, useColorModeValue, Box } from '@chakra-ui/react'
export default function Cards() {
    return (
        <Flex gap={"25vh"} flexDir={"column"} align={"center"} >
            <Flex flexDir={"column"} align={"center"} maxW={"50vw"} textAlign={"center"}>
                <Text fontSize={"40px"} fontWeight={"bold"} >
                    Offerings To My Clients
                </Text>
                <Text>
                    If you are looking at blank cassettes on the web, you may be very confused
                    at the difference in price. You may see some for as low as $.17 each
                </Text>
            </Flex>
            <Flex gap={10} flexWrap='wrap' alignItems='center' justifyContent='center'>
                <Card background='transparent' boxShadow='2xl' height={400} width={400}>
                    <CardHeader>
                        <Heading pb="4px" display={"inline-block"} borderBottom={"2px solid red"} size='sm'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            View a summary of all your customers over the last month.
                            laywer Brian Billick says, “Think about this. If they fire
                            Tom or shake their hand and they turn around and do the pardon,
                            then they did what they had to do.”Protesters hold a banner outside
                            the hearing.“Think about this. If they fire
                            Tom or shake their hand and they turn around.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Button border="1px solid red">View here</Button>
                    </CardFooter>
                </Card>
                <Card background='transparent' boxShadow='2xl' height={400} width={400}>
                    <CardHeader>
                        <Heading pb="4px" display={"inline-block"} borderBottom={"2px solid red"} size='sm'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            View a summary of all your customers over the last month.
                            View a summary of all your customers over the last month.
                            laywer Brian Billick says, “Think about this. If they fire
                            Tom or shake their hand and they turn around and do the pardon,
                            then they did what they had to do.”Protesters hold a banner outside
                            the hearing.“Think about this. If they fire
                            Tom or shake their hand and they turn around.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Button border="1px solid red">View here</Button>
                    </CardFooter>
                </Card>
                <Card background='transparent' boxShadow='2xl' height={400} width={400}>
                    <CardHeader>
                        <Heading pb="4px" display={"inline-block"} borderBottom={"2px solid red"} size='sm'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            View a summary of all your customers over the last month.
                            View a summary of all your customers over the last month.
                            laywer Brian Billick says, “Think about this. If they fire
                            Tom or shake their hand and they turn around and do the pardon,
                            then they did what they had to do.”Protesters hold a banner outside
                            the hearing.“Think about this. If they fire
                            Tom or shake their hand and they turn around.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Button border="1px solid red">View here</Button>
                    </CardFooter>
                </Card>
            </Flex>
        </Flex>
    )
}