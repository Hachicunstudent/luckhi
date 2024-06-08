import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    SimpleGrid,
    Image,
  } from "@chakra-ui/react";
  import ImageSlider from "./ImageSlider"; // Import ImageSlider component
  
  const Benefit = ({ title, description, imageSrc, isCarousel, slides, highlight }) => {
    return (
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={highlight ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)' : '2xl'}
        rounded={"md"}
        p={8}
        overflow={"hidden"}
        border={highlight ? '4px solid teal' : '2px solid gray'}
        borderColor={highlight ? 'teal.500' : 'gray.200'}
        transform={highlight ? 'scale(1.05)' : 'none'}
        transition="all 0.3s ease-in-out"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          h={isCarousel ? "auto" : "400px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          flexShrink={0}
        >
          {isCarousel ? (
            <ImageSlider slides={slides} />
          ) : (
            <Image src={imageSrc} alt={title} objectFit={"cover"} w={"100%"} h={"100%"} />
          )}
        </Box>
        <Stack textAlign="center" flexGrow={1}>
          <Heading 
            color={useColorModeValue("gray.700", "white")} 
            fontSize={highlight ? "4xl" : "2xl"} 
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Text color={"gray.500"}>
            {description}
          </Text>
        </Stack>
      </Box>
    );
  };
    export default function BenefitsSection() {
    const carouselSlides = [
      { image: "/chu Hung.jpg" },
      { image: "/co phuong.jpg" },
      { image: "/1.jpg" },
      { image: "/3.jpg" },
      { image: "/5.jpg" },
      { image: "/6.jpg" },
      { image: "/7.png" },
      { image: "/8.png" },
      { image: "/10.png" },


    ];
  
    return (
        <Box p={8}>
          <Stack spacing={4} as={Box} textAlign={"center"}>
            <Heading fontSize={"3xl"}>ƯU ĐIỂM CỦA LỤC KHÍ</Heading>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8} alignItems="stretch">
            <Benefit
              title={"Đơn Giản"}
              description={"Hình ảnh trên là bạn Jimmy nhà chị Diệp- học viên Lục Khí K1 đang thực hành dán bộ Vị. Trẻ nhỏ còn thực hành được Lục Khí"}
              imageSrc={"/jimy.jpg"}
            />
            <Benefit
              title={"Hiệu Quả"}
              description={"Những kết quả của học viên trong quá trình học Lục Khí"}
              isCarousel={true}
              slides={carouselSlides}
              highlight={true}
            />
            <Benefit
              title={"An Toàn"}
              description={"Chỉ dùng salonpas dán vào huyệt. Không châm, chích vào da. Do vậy dùng được cho phụ nữ có thai, trẻ em, người già. Dán sai huyệt không sợ tai biến. Dán sai giảm tác dụng, hoàn toàn không có tác dụng phụ."}
              imageSrc={"/cothai.png"}
            />
      </SimpleGrid>
      <Center mt={4}>
        <Text 
          fontSize="lg" 
          color="white" 
          bg="teal.500" 
          py={2} 
          px={4} 
          borderRadius="md" 
          as="a" 
          href="#" 
          _hover={{ bg: 'teal.600', textDecoration: 'none' }}
          _focus={{ boxShadow: 'outline' }}
        >
          Xem thêm kết quả chữa bệnh bằng Lục Khí
        </Text>
      </Center>
    </Box>
      );
    }