import React from 'react';
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  VStack,
  HStack,
  Heading,
} from '@chakra-ui/react';
import {  FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function PricingAndSupportSection() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Học Phí
        </Heading>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Stack
              textAlign={'center'}
              p={6}
              color={useColorModeValue('gray.800', 'white')}
              align={'center'}>
              <Text fontSize={'3xl'} fontWeight={800}>
                HỌC <Text as="span" color="teal.500">TRỌN ĐỜI</Text>
              </Text>
              <Text
                fontSize={'4xl'}
                fontWeight={700}
                bg={useColorModeValue('teal.50', 'teal.900')}
                p={2}
                px={3}
                color={'teal.500'}
                rounded={'full'}
                mt={4}>
                1 triệu đồng
              </Text>
            </Stack>
            <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Học 10 buổi về kiến thức Lục Khí cơ bản online
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text as="span" color="teal.500" fontWeight="bold">Sau đó: Học liên tục, trọn đời vào thứ 6 hàng tuần qua Zoom</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Cách thành lập bộ huyệt
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Các huyệt đạo căn bản
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Cách ứng dụng bộ huyệt vào chữa bệnh thường gặp
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Hơn 110+ bài giảng Lục Khí Thực Hành chữa các bệnh thường gặp
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Và còn nhiều hơn nữa trong tương lai
                </ListItem>

              </List>
              <Button
                mt={10}
                w={'full'}
                bg={'green.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}>
                Đăng Kí Ngay
              </Button>
            </Box>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Stack
              textAlign={'center'}
              p={6}
              color={useColorModeValue('gray.800', 'white')}
              align={'center'}>
              <Text fontSize={'3xl'} fontWeight={800}>
                HỖ TRỢ <Text as="span" color="teal.500">TRỌN ĐỜI</Text>
              </Text>
            </Stack>
            <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Giải đáp mọi thắc mắc qua Zalo trong suốt quá trình học và sau khi học trọn đời
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Sửa ảnh dán huyệt sau khi học viên dán huyệt mọi lúc
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Tư vấn bộ huyệt cho học viên, và người thân
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Trợ giúp tư vấn hỗ trợ học viên chữa bệnh và lựa chọn bộ huyệt
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Ưu tiên tham gia các chương trình Lục Khí khác của nhà Lục Khí
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Hỗ trợ học viên trọn đời
                </ListItem>
              </List>
              <Button
                mt={10}
                w={'full'}
                bg={'green.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}>
                Đăng Kí Ngay
              </Button>
            </Box>
          </Box>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
