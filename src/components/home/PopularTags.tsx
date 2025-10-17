"use client";

import {
  Box,
  SimpleGrid,
  TagLabel,
  TagRoot,
  Text,
  VStack,
} from "@chakra-ui/react";

const popularTags = [
  "음식",
  "여행",
  "자동차",
  "패션",
  "건축",
  "음악",
  "영화",
  "테크",
  "인테리어",
  "사진",
  "디자인",
  "라이프스타일",
  "커피",
  "책",
  "헬스",
  "육아",
  "반려동물",
  "비즈니스",
  "교육",
  "문화",
];

export default function PopularTags() {
  return (
    <Box px={{ base: 4, md: 12 }} pt={48} bg="white">
      <VStack gap={8}>
        <SimpleGrid columns={{ base: 2, sm: 3, md: 7 }} gap={4} maxW="1200px">
          {popularTags.map((tag) => (
            <TagRoot
              key={tag}
              size="lg"
              colorPalette="gray"
              borderRadius="20px"
              cursor="pointer"
              justifyContent="center"
              py={6}
              px={9}
              _hover={{
                bg: "bs.green.600",
                color: "white",
                transform: "scale(1.05)",
                transition: "all 0.2s ease",
              }}
            >
              <TagLabel textStyle={"body/medium_14/multi"}>{tag}</TagLabel>
            </TagRoot>
          ))}
        </SimpleGrid>
        <Box mt={10}>
          <Text fontSize="sm" color="gray.500" textAlign="center">
            태그를 클릭해 관련 블로그를 탐색해보세요
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
