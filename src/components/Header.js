// src/components/Header.js
import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Text fontSize="xl" fontWeight="bold">Lục Khí</Text>
        <Button colorScheme="teal" variant="outline">Đăng Kí Ngay</Button>
      </Flex>
    </Box>
  );
};

export default Header;
