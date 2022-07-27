import { Box, Text } from "@chakra-ui/react";
import { LineChart } from "~/components/line-chart";
import { ClientOnly } from "remix-utils";

function ChartPlaceHolder() {
  return (
    <Box backgroundColor="green.200">
      <Text> Waiting chart... </Text>
    </Box>
  );
}

interface DashboardLineCardProps {
  title: string;
}

export function DashboardLineCard(props: DashboardLineCardProps) {
  return (
    <Box
      w="full"
      backgroundColor="white"
      h={{ sm: "350px", base: "300px" }}
      padding={{ base: "6", md: "4" }}
      rounded="md"
      textAlign="center"
    >
      <Text fontSize="1.5em" lineHeight="1.5" fontWeight="600">
        {props.title}
      </Text>
      <ClientOnly fallback={<ChartPlaceHolder />}>
        {() => <LineChart />}
      </ClientOnly>
    </Box>
  );
}
