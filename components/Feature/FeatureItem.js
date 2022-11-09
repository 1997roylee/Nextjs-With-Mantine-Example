import { Flex, Image } from "@mantine/core";

export const FeatureItem = ({ title, description, icon }) => (
  <Flex>
    <Image src={icon} width={50} height={50} />
    <Flex direction="column" ml={3}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Flex>
  </Flex>
);
