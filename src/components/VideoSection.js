import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    useColorModeValue,
    AspectRatio,
  } from '@chakra-ui/react';
  
  export default function VideoSection() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'teal.400',
                  zIndex: -1,
                }}>
                Video học thử một buổi học
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Hướng dẫn chữa các bệnh hô hấp bằng bộ Phế
            </Text>

          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
  