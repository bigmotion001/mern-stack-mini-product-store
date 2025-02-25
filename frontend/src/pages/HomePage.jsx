import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useProductStore } from "@/store/product";
import ProductCard from "../components/ProductCard";




export const HomePage = () => {
  const {getProducts, products, gettingProducts} = useProductStore();

  //useEffect to fetch products
  useEffect(() => {
    getProducts();
  },[getProducts]); 

  if(gettingProducts) {
    return <Text alignItems={"center"}>Loading...</Text>
  }
  return (
    <Container maxW="container.lg" py={12}>
             <VStack spacing={8}>
             <Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
          color={"blue.500"}

				>
					Current Products 🚀
				</Text>


<SimpleGrid columns={{base: 1,md: 2,lg: 3,}}spacing={10}w={"full"}>


{products && products.map((product) => (
  <ProductCard key={product._id} product={product} />
))}



</SimpleGrid>


{products === null && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
			




             </VStack>
    </Container>
  )
}
