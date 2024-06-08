import React from 'react';
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiBookOpen } from 'react-icons/fi';
import { AiOutlineFileText } from 'react-icons/ai';

function StatsCard({ title, stat, icon }) {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function StatisticsSection() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Khóa học Lục Khí đã có
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Học viên'}
          stat={'> 2000'}
          icon={<BsPerson size={'3em'} />}
        />
        <StatsCard
          title={'Khóa học'}
          stat={'> 30'}
          icon={<FiBookOpen size={'3em'} />}
        />
        <StatsCard
          title={'Bài giảng'}
          stat={'> 200'}
          icon={<AiOutlineFileText size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}
