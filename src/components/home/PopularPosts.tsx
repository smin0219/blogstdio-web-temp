"use client";

import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const popularPosts = [
  {
    title: "급의 높이만큼 떨어지는 세계",
    author: "적적",
    image: "/images/sample1.jpg",
  },
  {
    title: "창조라는 말에 겁먹지 않기",
    author: "윤서린",
    image: "/images/sample2.jpg",
  },
  {
    title: "테러블 스멜 - 영국생활 23",
    author: "아줌마",
    image: "/images/sample3.jpg",
  },
  {
    title: "달콤한 나의 도쿄",
    author: "목초메",
    image: "/images/sample4.jpg",
  },
  {
    title: "자두와의 일상",
    author: "James 아저씨",
    image: "/images/sample5.jpg",
  },
  {
    title: "앨범 속 친구 K,K",
    author: "시샘남",
    image: "/images/sample6.jpg",
  },
];

export default function PopularPosts() {
  return (
    <Box px={{ base: 4, md: 12 }} pt={48} bg="white" maxW="1200px" mx="auto">
      {/* 3 x 3 그리드 */}
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} gap={4}>
        {popularPosts.map((post) => (
          <Box
            key={post.title}
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="sm"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "md",
              transition: "all 0.25s ease",
            }}
            cursor="pointer"
          >
            <Image
              src={post.image}
              alt={post.title}
              borderTopRadius="xl"
              h="200px"
              w="full"
              objectFit="cover"
            />
            <VStack align="start" gap={3} p={5}>
              <Text fontWeight="bold" fontSize="lg" lineClamp={2}>
                {post.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                by {post.author}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
      {/* 전체보기 버튼 */}
      <Box display={"flex"} mt={8} justifyContent={"center"}>
        <Button
          variant="outline"
          size="lg"
          borderRadius="full"
          px={8}
          py={6}
          mt={10}
          fontWeight="600"
          _hover={{
            bg: "black",
            color: "white",
            borderColor: "black",
            transform: "scale(1.05)",
            transition: "all 0.2s ease",
          }}
        >
          인기 블로그 전체보기
        </Button>
      </Box>
    </Box>
  );
}
