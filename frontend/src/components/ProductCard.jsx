import {
    Box,
    Button,
    Heading,
    HStack,
   
    Image,


    Text
} from "@chakra-ui/react"
import toast from "react-hot-toast";
import { useProductStore } from "@/store/product";
import {  useNavigate } from "react-router-dom";











function ProductCard({ product }) {
    const navigate = useNavigate();
    const { deleteProduct,  } = useProductStore();

    //handle delete product
    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
            toast.success("Product deleted Successfully");
        } catch (error) {
            toast.error(error);
        }
    }
    //handle edit product
    




    return (
        <Box shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={"bg.info"}>

            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight='bold' fontSize='xl' color={"blue.500"} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={2}>

                    <Button bg={"blue.500"} color={"white"}

                        onClick={() => navigate("/edit", { state: product })}

                    >
                        Edit
                    </Button>


                    <Button bg={"red.500"} color={"white"} onClick={() => handleDeleteProduct(product._id)}>
                        Delete
                    </Button>



                </HStack>
            </Box>
        </Box>
    )
}

export default ProductCard