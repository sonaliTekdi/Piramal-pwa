import React from "react";
import {
  Box,
  Button,
  VStack,
  Flex,
  List,
  ListItem,
  Wrap,
  WrapItem,
  Avatar,
  Text,
} from "@chakra-ui/react";
import Header from "./component/common/layout/Navbar";
import { CheckIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";
import Footer from "./component/Footer";
import Layout from "./component/common/layout/Layout";

const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/list");
  };

  return (
    <Box className="main-bg">
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box
          width="550px"
          height="100vh"
          borderRadius="lg"
          shadow="lg"
          borderWidth="1px"
          background="#fff"
        >
          <Layout
            _heading={{
              beneficiary: true,
              heading: "Vidya Khandekar",
              subHeading: "Logged in with E-Wallet",
              label: "VK",
            }}
          >
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              {/* <Flex align="center">
                <Wrap>
                  <WrapItem>
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                  </WrapItem>
                </Wrap>
                <Box pl={4}>
                  <Text fontSize="lg" fontWeight="600">
                    Anaya Gupta
                  </Text>
                  <Text color="gray.600"> Logged with DG locker</Text>
                </Box>
              </Flex> */}
              <VStack spacing={4} align="stretch">
                <List spacing={3} mt={8}>
                  <ListItem className="border-bottom" pb={4}>
                    <Flex align="center">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="green.500"
                        borderRadius="full"
                        boxSize="25px"
                        color="white"
                        marginRight="10px"
                      >
                        <CheckIcon boxSize="15px" />
                      </Box>
                      <Box>Caste Certificate</Box>
                    </Flex>
                  </ListItem>
                  <ListItem className="border-bottom" pb={4}>
                    <Flex align="center">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="green.500"
                        borderRadius="full"
                        boxSize="25px"
                        color="white"
                        marginRight="10px"
                      >
                        <CheckIcon boxSize="15px" />
                      </Box>
                      <Box>Income Certificate</Box>
                    </Flex>
                  </ListItem>

                  <ListItem className="border-bottom" pb={4}>
                    <Flex align="center">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="green.500"
                        borderRadius="full"
                        boxSize="25px"
                        color="white"
                        marginRight="10px"
                      >
                        <CheckIcon boxSize="15px" />
                      </Box>
                      <Box> Domicile Certificate</Box>
                    </Flex>
                  </ListItem>
                  <ListItem className="border-bottom" pb={4}>
                    <Flex align="center">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="green.500"
                        borderRadius="full"
                        boxSize="25px"
                        color="white"
                        marginRight="10px"
                      >
                        <CheckIcon boxSize="15px" />
                      </Box>
                      <Box> Income Certificate</Box>
                    </Flex>
                  </ListItem>
                  <ListItem className="border-bottom" pb={4}>
                    <Flex align="center">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="green.500"
                        borderRadius="full"
                        boxSize="25px"
                        color="white"
                        marginRight="10px"
                      >
                        <CheckIcon boxSize="15px" />
                      </Box>
                      <Box> Domicile Certificate</Box>
                    </Flex>
                  </ListItem>
                  <ListItem className="border-bottom" pb={4}>
                    <Flex align="center">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="green.500"
                        borderRadius="full"
                        boxSize="25px"
                        color="white"
                        marginRight="10px"
                      >
                        <CheckIcon boxSize="15px" />
                      </Box>
                      <Box> Birth Certificate</Box>
                    </Flex>
                  </ListItem>
                  <ListItem className="border-bottom" pb={4}>
                    <Flex align="center">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="green.500"
                        borderRadius="full"
                        boxSize="25px"
                        color="white"
                        marginRight="10px"
                      >
                        <CheckIcon boxSize="15px" />
                      </Box>
                      <Box> Disability Certificate</Box>
                    </Flex>
                  </ListItem>
                </List>
                <Button
                  className="custom-btn"
                  type="submit"
                  mt={4}
                  onClick={handleRedirect}
                >
                  Explore Benefits
                </Button>
              </VStack>
            </Box>
            <Footer />
          </Layout>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserProfile;
