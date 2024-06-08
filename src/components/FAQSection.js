import React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const FAQs = [
  {
    question: "NGƯỜI GIÀ CÓ HỌC ĐƯỢC KHÔNG?",
    answer:
      "Môn Lục Khí là môn thực hành đơn giản, cho nên không phải nhớ quá nhiều kiến thức. Trong suốt 7 năm chia sẻ kiến thức Lục Khí, thì hơn 50% số học viên là người già.",
  },
  {
    question: "CÓ DÙNG ĐƯỢC CHO TRẺ EM KHÔNG?",
    answer:
      "Lục Khí là môn cực kì an toàn, do vậy dùng cho trẻ nhỏ rất tốt. Đặc biệt là các bệnh liên quan đến phổi và đường hô hấp mang lại hiệu quả rất cao.",
  },
  {
    question: "SAI HUYỆT CÓ SAO KHÔNG?",
    answer:
      "Do chỉ là dán salonpas ngoài da cho nên sai huyệt không gây ra tai biến, không gây ra biến chứng gì cả. Đúng huyệt thì có tác dụng, sai huyệt thì không sao.",
  },
  {
    question: "KHÔNG BIẾT GÌ VỀ Y CÓ HỌC ĐƯỢC KHÔNG?",
    answer:
      "Môn dán huyệt Lục Khí tạo ra để dành cho những người không học y, không chuyên về y có thể học và thực hành. Vậy nên nó phù hợp với bất kì ai muốn chăm sóc sức khỏe.",
  },
  {
    question: "ĐÃ THAM GIA CHƯƠNG TRÌNH LỤC KHÍ THỰC HÀNH CÓ CẦN PHẢI HỌC LỤC KHÍ CƠ BẢN KHÔNG?",
    answer:
      "Để có thể hiểu sâu sắc và vận dụng hiệu quả kiến thức của chương trình Lục Khí Thực Hành bạn nên tham gia Lục Khí Cơ Bản để nắm vững các kiến thức cơ bản về bộ huyệt giúp cho việc chữa bệnh thêm hiệu quả.",
  },
];

export default function FAQSection() {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const containerBgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box py={12} bg={bgColor}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Box} textAlign={'center'}>
          <Heading fontSize={'3xl'}>THẮC MẮC THƯỜNG GẶP</Heading>
        </Stack>
        <Stack
          spacing={4}
          mt={8}
          as={Container}
          maxW={'3xl'}
          bg={containerBgColor}
          p={6}
          rounded={'md'}
          boxShadow={'lg'}>
          {FAQs.map((faq, index) => (
            <Box key={index} textAlign={'left'}>
              <Text fontWeight={600} fontSize={'lg'} color={'teal.500'}>
                {faq.question}
              </Text>
              <Text color={textColor} mt={2}>
                {faq.answer}
              </Text>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
