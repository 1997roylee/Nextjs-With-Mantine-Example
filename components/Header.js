import { Box, Flex, Stack } from "@mantine/core";

export const Header = () => (
  <Flex justify="space-between" p={6} align="center">
    <Box>
      <h1>Header</h1>
    </Box>
   <Flex>
   <a href="/">Home</a>
      <a href="/about">About</a>
   </Flex>
  </Flex>
);
