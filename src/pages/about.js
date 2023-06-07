import React from "react";
import styles from "@/styles/about.module.css";
import { Box, Container, Text, Heading, Image, Flex, Grid } from "@chakra-ui/react";
import { TbBrandTwitter, TbBrandFacebook, TbBrandDribbble } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";

const about = () => {
  return (
    <Container bg={"#e9eef2"} minW="100vw">
      <Box className={styles.container}>
        <Box className={styles.upperPart}>
          <Box className={styles.smallHead}>
            <Text as="h5" fontWeight="550">About Me </Text>
            <span className={styles.line} />
          </Box>
          <Box>
            <Heading as="h1" sx={{ fontSize: "3rem" }}>
              About Me
            </Heading>
          </Box>
          <Box>
            <Text className={styles.headText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa.
            </Text>
          </Box>
        </Box>
        <Grid className={styles.bottomPart}>
          <Box className={styles.leftPart}>
            <Box className={styles.imgBox}>
              <Image
                className={styles.leftImg}
                src="https://images.pexels.com/photos/6065989/pexels-photo-6065989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="aboutMe Pic"
              />
            </Box>
          </Box>
          <Box className={styles.rightPart}>
            <Box className={styles.rightHead}>
              <Heading sx={{ fontSize: "2rem", fontWeight: "550" }}>John Smith</Heading>
              <div style={{ fontWeight: "550", fontSize: "18px" }}>
                A Lead <span style={{ color: "#C05621" }}>Photographer</span> based in{" "}
                <span style={{ color: "#C05621" }}>America</span>{" "}
              </div>
              <Text sx={{ color: "#718096", lineHeight: "2" }}>
                I design and develop services for customers specializing creating stylish, modern websites, web services
                and online stores. My passion is to design digital user experiences through meaningful interactions.
                Check out my Portfolio
              </Text>
              <Box className={styles.socialBox}>
                <TbBrandFacebook className={styles.socialIcon} />

                <TbBrandTwitter className={styles.socialIcon} />

                <TbBrandDribbble className={styles.socialIcon} />

                <FiLinkedin className={styles.socialIcon} />
              </Box>
            </Box>
            <hr />
            <Box className={styles.leftBottom}>
              <Heading sx={{ fontWeight: "600" }}>
                PERSONAL INFO
              </Heading>
              <Flex justify="space-between" className={styles.mainListBox}>
                <Box className={styles.bottomList}>
                  <Flex gap=".7rem">
                    <Text sx={{ color: "#718096" }}>Name :</Text>
                    <Text sx={{ color: "#0f172a", fontWeight: "600" }}>
                      John Smith
                    </Text>
                  </Flex>
                  <Flex gap=".7rem">
                    <Text sx={{ color: "#718096" }}>Age :</Text>
                    <Text sx={{ color: "#0f172a", fontWeight: "600" }}>
                      21 Years
                    </Text>
                  </Flex>
                  <Flex gap=".7rem">
                    <Text sx={{ color: "#718096" }}>Nationality :</Text>
                    <Text sx={{ color: "#0f172a", fontWeight: "600" }}>USA</Text>
                  </Flex>
                  <Flex gap=".7rem">
                    <Text sx={{ color: "#718096" }}>Freelance :</Text>
                    <Text sx={{ color: "#0f172a", fontWeight: "600" }}>Available</Text>
                  </Flex>
                </Box>
                <Box className={styles.bottomText}>
                  <Flex gap=".7rem">
                    <Text sx={{ color: "#718096" }}>Address :</Text>
                    <Text sx={{ color: "#0f172a", fontWeight: "600" }}>H-400 - Path2UK</Text>
                  </Flex>
                  <Flex gap=".7rem">
                    <Text sx={{ color: "#718096" }}>Phone :</Text>
                    <Text sx={{ color: "#0f172a", fontWeight: "600" }}>+12345667</Text>
                  </Flex>
                  <Flex gap=".7rem">
                    <Text sx={{ color: "#718096" }}>Email :</Text>
                    <Text sx={{ color: "#0f172a", fontWeight: "600" }}>Youremail@gmail.com</Text>
                  </Flex>
                  <Flex gap=".7rem">
                    <Text sx={{ color: "#718096" }}>Languages :</Text>
                    <Text sx={{ color: "#0f172a", fontWeight: "600" }}>French, English</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default about;
