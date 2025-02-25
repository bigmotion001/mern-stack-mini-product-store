import { useProductStore } from "@/store/product";
import { Container, VStack, Heading, Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import toast from "react-hot-toast";
// or the appropriate library


export const Create = () => {
  //product state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");


  const {createProduct,isLoading  }= useProductStore();

  //handle add product
  const handleAddProduct = async(e) => {
    e.preventDefault();
  
    try {
      await createProduct(name, price, image)
      toast.success("Product Added Successfully");
      //reset the state
      setName("");
      setPrice("");
      setImage("");
    } catch (error) {
      toast.error(error);
    }
 
  }
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box w={"full"} maxW={"md"} p={6} rounded={"lg"} shadow={"md"} bg={"bg.info"} >

          <VStack spacing={4}>

          

          <Input
              placeholder="Product Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}    
            />
            <Input
            placeholder="Product Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value )}
            />
            <Input
            placeholder="Product Image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            
            
            <Button colorPalette={"teal"} w={"full"} onClick={handleAddProduct}>
              {isLoading? "Loading...": "Add Product"}
            </Button>

          

          









          </VStack>

        </Box>

      </VStack>
    </Container>
  )
}
