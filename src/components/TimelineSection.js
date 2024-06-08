import React from 'react';
import {
  Box,
  chakra,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const timelineData = [
  {
    title: 'Giai đoạn 1',
    description: 'Học 10 bài Lục Khí Cơ Bản. Học thứ 3, thứ 5 hàng tuần.',
  },
  {
    title: 'Tiếp theo',
    description: 'Học liên tục trọn đời vào thứ 6 hàng tuần trong chương trình Lục Khí Thực Hành.',
  },
  {
    title: 'Tiếp theo',
    description: 'Xem hơn 110 video bài giảng Lục Khí chữa các bệnh thường gặp.',
  },
];

function TimelineItem({ title, description, bgColor, lineColor }) {
  return (
    <Flex direction="column" alignItems="center" position="relative" mb={20}>
      <Box
        zIndex={1}
        bg={bgColor}
        border="2px solid"
        borderColor={lineColor}
        borderRadius="full"
        w={12}
        h={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w={6} h={6} bg={lineColor} borderRadius="full" />
      </Box>
      <Box mt={-2} textAlign="center">
        <Text fontWeight="bold" fontSize="lg">{title}</Text>
        <Text color="gray.500">{description}</Text>
      </Box>
    </Flex>
  );
}

export default function TimelineSection() {
  const lineColor = useColorModeValue('teal.500', 'teal.300');
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box py={12}>
      <chakra.h1
        textAlign="center"
        fontSize="4xl"
        fontWeight="bold"
        py={10}
      >
        Timeline
      </chakra.h1>
      <Flex direction="column" alignItems="center" position="relative">
        {timelineData.map((item, index) => (
          <React.Fragment key={index}>
            <TimelineItem title={item.title} description={item.description} lineColor={lineColor} bgColor={bgColor} />
            {index < timelineData.length - 1 && (
              <Box
                w="2px"
                bg={lineColor}
                h={20}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={0}
              />
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
}
