"use client";

import { Input } from "@chakra-ui/input";
import {
  Box,
  Button,
  Container,
  Field,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 여기에 실제 로그인 로직을 구현하세요
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 임시 딜레이

      // home 페이지로 이동
      router.push("/home");
    } catch {
      alert("로그인 실패! 이메일 또는 비밀번호를 확인해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={8}
    >
      <Container maxW="lg" w="full">
        <VStack gap={10} w="full">
          <Box w="full" maxW="560px" mx="auto" shadow="2xl" bg="white" borderRadius="2xl" p={10}>
            <Box pb={4}>
              <Heading size="md" textAlign="center" color="gray.700">
                로그인
              </Heading>
            </Box>
            <Box pt={0}>
              <form onSubmit={handleSubmit}>
                <Stack gap={4}>
                  <Field.Root required>
                    <Field.Label htmlFor="email" color="gray.700" fontWeight="medium">
                      이메일
                    </Field.Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="이메일을 입력하세요"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      size="lg"
                      borderRadius="lg"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px #3182ce",
                      }}
                    />
                  </Field.Root>

                  <Field.Root required>
                    <Field.Label htmlFor="password" color="gray.700" fontWeight="medium">
                      비밀번호
                    </Field.Label>
                    <Box position="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="lg"
                        borderRadius="lg"
                        borderColor="gray.300"
                        _hover={{ borderColor: "blue.400" }}
                        _focus={{
                          borderColor: "blue.500",
                          boxShadow: "0 0 0 1px #3182ce",
                        }}
                        pr="12"
                      />
                      <Button
                        position="absolute"
                        right="2"
                        top="50%"
                        transform="translateY(-50%)"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        color="gray.500"
                        _hover={{ color: "blue.500" }}
                        p="1"
                        minW="auto"
                        h="auto"
                      >
                        {showPassword ? (
                          <LuEyeOff size={20} />
                        ) : (
                          <LuEye size={20} />
                        )}
                      </Button>
                    </Box>
                  </Field.Root>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    w="full"
                    borderRadius="lg"
                    fontWeight="semibold"
                    bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    _hover={{
                      bg: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                    _active={{
                      transform: "translateY(0px)",
                    }}
                    transition="all 0.2s"
                    loading={isLoading}
                    loadingText="로그인 중..."
                  >
                    로그인
                  </Button>
                </Stack>
              </form>

              <Box mt={6} textAlign="center">
                <Text color="gray.600" fontSize="sm">
                  계정이 없으신가요?{" "}
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    size="sm"
                    fontWeight="semibold"
                    _hover={{ textDecoration: "underline" }}
                    onClick={() => router.push("/signup")}
                  >
                    회원가입
                  </Button>
                </Text>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
