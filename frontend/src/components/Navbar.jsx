import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react';

import { Link } from "react-router-dom";


export const Navbar = () => {
  
  return (
    <Container maxW={"1140px"} p={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }}>
        <Text fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					>

          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack space={2} alignItems={"center"}>

          <Link to={"/"}>
            <Button colorPalette="teal" variant="solid">
              Home
            </Button>
          </Link >

          <Link to={"/create"}>
            <Button colorPalette="teal" variant="solid">
              Create
            </Button>
          </Link >

        </HStack>
      </Flex >


    </Container>
  )
}
