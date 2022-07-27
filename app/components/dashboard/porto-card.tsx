import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface DashboardPortoCardProps {
  icon: IconType;
  title: string;
  value: string;
}

export function DashboardPortoCard(props: DashboardPortoCardProps) {
  return (
    <Box
      backgroundColor="white"
      paddingX="6"
      paddingY="4"
      w="full"
      rounded="md"
    >
      <Stack direction="row">
        <Box marginRight="15px">
          <Icon as={props.icon} h={10} w={10} color="purple.500" />
        </Box>
        <Stack direction="column">
          <Text lineHeight="0.5" fontSize="1.8em" fontWeight="600">
            {props.value}
          </Text>
          <Text>{props.title}</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
