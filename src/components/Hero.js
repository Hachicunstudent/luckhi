// src/components/Hero.js
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import HandImage from '../assets/images/hand.jpg'; // Đường dẫn đến hình ảnh trong thư mục src
  
  export default function Hero() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'teal.400', // Đổi màu để phù hợp với theme
                  zIndex: -1,
                }}>
                KHÓA HỌC
              </Text>
              <br />{' '}
              <Text color={'teal.400'} as={'span'}>
                LỤC KHÍ TỰ CHỮA BỆNH ONLINE
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Lục Khí là môn tự chữa bệnh đơn giản- an toàn- hiệu quả bằng cách dán huyệt.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.500',
                }}>
                Đăng Kí Ngay
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Hero Image'}
            objectFit={'cover'}
            src={HandImage} // Sử dụng import để thêm hình ảnh
          />
        </Flex>
      </Stack>
    );
  }
  