import { Box, Container, Flex, FormControl, Input, Heading, Text, VStack, FormLabel, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "@/styles/contact.module.css";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
const contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {},
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Submit the form
      console.log("Form submitted:", form);
    }
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!form.name) {
      errors.name = "Name is required";
    }
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      errors.email = "Email is invalid";
    }

    if (!form.subject) {
      errors.email = "Email is required";
    }
    if (!form.message) {
      errors.message = "Message is required";
    }
    setForm({ ...form, errors: errors });
    return Object.keys(errors).length === 0;
  };

  return (
    <React.Fragment>
      <Container bg={"#e9eef2"} minW="100vw">
        <Box className={styles.container}>
          <VStack align="left" className={styles.leftPart} spacing={4}>
            <Box className={styles.smallHead}>
              <Text as="h5" fontWeight="550">
                Contact{" "}
              </Text>
              <span style={{ fontWeight: "550" }} className={styles.line} />
            </Box>
            <Box pb="2rem">
              <Heading as="h1" sx={{ fontSize: "3rem" }}>
                Let's discuss your Issue
              </Heading>
            </Box>
            <VStack align="left" spacing={4}>
              <Flex align="center" gap="1rem">
                <BsTelephoneOutbound size="24px" color="#C05621" />
                <Text fontSize="lg" color="#718096">
                  +44 1632 967704
                </Text>
              </Flex>
              <Flex align="center" gap="1rem">
                <MdOutlineEmail size="24px" color="#C05621" />
                <Text fontSize="lg" color="#718096">
                  your@gmail.com
                </Text>
              </Flex>
              <Flex align="center" gap="1rem">
                <HiOutlineLocationMarker size="24px" color="#C05621" />
                <Text fontSize="lg" color="#718096">
                  245 King Street, Touterie Victoria 8520 Australia
                </Text>
              </Flex>
            </VStack>
          </VStack>
          <VStack align="left" className={styles.rightPart}>
            <Box>
              <Text fontSize="25px" color="#718096">
                I'm always open to discussing product
              </Text>
              <Text fontWeight="550" fontSize="25px">
                design work or partnerships.
              </Text>
            </Box>
            <Box>
              <form onSubmit={handleSubmit}>
                <Box className={styles.formStyle} minW="380px">
                  <FormControl pt="1rem" isRequired>
                    <Input
                      variant="flushed"
                      border="none"
                      borderRadius="none"
                      borderBottom="1px solid #718096"
                      placeholder="Name *"
                      type="text"
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                    />
                    {form.errors.name && <p>{form.errors.name}</p>}
                  </FormControl>
                  <Flex gap="1rem">
                    <FormControl isRequired>
                      <Input
                        variant="flushed"
                        border="none"
                        borderRadius="none"
                        borderBottom="1px solid #718096"
                        placeholder="Email *"
                        type="text"
                        value={form.email}
                        onChange={(event) => setForm({ ...form, email: event.target.value })}
                      />
                      {form.errors.email && <p style={{ color: "red" }}>{form.errors.email}</p>}
                    </FormControl>

                    <FormControl isRequired>
                      <Input
                        variant="flushed"
                        border="none"
                        borderRadius="none"
                        borderBottom="1px solid #718096"
                        placeholder="Subject *"
                        type="text"
                        value={form.subject}
                        onChange={(event) => setForm({ ...form, subject: event.target.value })}
                      />
                      {form.errors.subject && <p>{form.errors.subject}</p>}
                    </FormControl>
                  </Flex>
                  <FormControl isRequired>
                    <Input
                      variant="flushed"
                      border="none"
                      borderRadius="none"
                      borderBottom=".5px solid #718096"
                      type="text"
                      placeholder="Message *"
                      focusBorderColor="#000"
                      value={form.message}
                      onChange={(event) => setForm({ ...form, message: event.target.value })}
                    />
                    {form.errors.message && <p>{form.errors.message}</p>}
                  </FormControl>
                  <Box>
                    <Button type="submit" _hover="none" bg="#C05621" color="#fff" variant="solid" fontWeight="medium">
                      Submit
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </VStack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default contact;
