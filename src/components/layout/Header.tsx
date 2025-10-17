import {
  Box,
  HStack,
  IconButton,
  Text,
  Drawer,
  useDisclosure, Button,
} from "@chakra-ui/react";
import { LuMenu, LuSearch, LuX } from "react-icons/lu";

export default function Header() {
  const {
    open: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();
  const {
    open: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();

  return (
    <>
      {/* 헤더 */}
      <Box display="flex" justifyContent="space-between" p="3vh 2.5vw">
        <HStack w="full" justifyContent="space-between">
          <HStack gap={2}>
            <IconButton
              bg="bs.white"
              color="bs.black"
              _hover={{ bg: "bs.gray.100" }}
              aria-label="menu"
              onClick={onMenuOpen}
            >
              <LuMenu />
            </IconButton>
            <Text textStyle="body/bold_16/multi" color={"bs.black"}>blogstdio.</Text>
          </HStack>
          <HStack gap={"30px"}>
            <IconButton
              bg="bs.white"
              color="bs.black"
              _hover={{ bg: "bs.gray.100" }}
              aria-label="search"
              onClick={onSearchOpen}
            >
              <LuSearch />
            </IconButton>
            <Button h={"38px"} bg={"bs.black"}>
              블로그 작성
            </Button>
          </HStack>
        </HStack>
      </Box>

      {/* 왼쪽 메뉴 Drawer */}
      <Drawer.Root placement="start" open={isMenuOpen} onOpenChange={onMenuClose}>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottomWidth="1px"
            >
              <Text fontWeight="bold">메뉴</Text>
              <IconButton
                aria-label="close menu"
                variant="ghost"
                onClick={onMenuClose}
              ><LuX size={20} /></IconButton>
            </Drawer.Header>
            <Drawer.Body>
              <Text>📚 내 글 보기</Text>
              <Text mt={3}>🧑‍💻 구독 작가</Text>
              <Text mt={3}>⚙️ 설정</Text>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>

      {/* 위쪽 검색 Drawer */}
      <Drawer.Root placement="top" open={isSearchOpen} onOpenChange={onSearchClose}>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottomWidth="1px"
            >
              <Text fontWeight="bold">검색</Text>
              <IconButton
                aria-label="close search"
                variant="ghost"

                onClick={onSearchClose}
              >
                <LuX size={20} />
              </IconButton>
            </Drawer.Header>
            <Drawer.Body>
              <Box mt={2}>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                  }}
                />
              </Box>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
}
