
import { Container, VStack, Heading, Box, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useProductStore } from "@/store/product";
import {  useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";



function Edit() {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {
        
        setName(location.state.name);
        setPrice(location.state.price);
        setImage(location.state.image);
    }, [])

    const {updateProduct, isLoading  }= useProductStore();


    //handle update product
    const handleUpdateProduct= async(e) => {
        e.preventDefault();
        try {
            await updateProduct(location.state._id, name, price, image);
            navigate("/");
            toast.success("Product Updated Successfully");
            
        } catch (error) {
            toast.error(error);
            
        }
    }


    return (

        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Update Product
                </Heading>

                <Box w={"full"} maxW={"md"} p={6} rounded={"lg"} shadow={"md"} bg={"bg.info"} >

                    <VStack spacing={4}>



                        <Input
                            placeholder="Product Name"
                            name="name"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            placeholder="Product Price"
                            name="price"
                            defaultValue={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <Input
                            placeholder="Product Image"
                            name="image"
                            defaultValue={image}
                            onChange={(e) => setImage(e.target.value)}
                        />


                        <Button colorPalette={"teal"} w={"full"} onClick={handleUpdateProduct} disabled={isLoading}>
                            
                            {isLoading ? "Updating...." : "Update Product"}
                        </Button>













                    </VStack>

                </Box>

            </VStack>
        </Container>







    )
}

export default Edit