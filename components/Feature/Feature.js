import { SimpleGrid } from "@mantine/core";
import { FeatureItem } from "./FeatureItem";

const FeatureList = [
  {
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eget nisl. Sed euismod, nisl nec ultricies lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eget nisl.",
    icon: "https://via.placeholder.com/150",
  },
  {
    title: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eget nisl. Sed euismod, nisl nec ultricies lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eget nisl.",
    icon: "https://via.placeholder.com/150",
  },
];

export const Feature = () => {
  return (
    <SimpleGrid cols={2}>
      {FeatureList.map((item, index) => (
        <FeatureItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </SimpleGrid>
  );
};
