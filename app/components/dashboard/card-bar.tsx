import { Box, Text } from "@chakra-ui/react";
import { BarChart } from "~/components/bar-chart";
import { ClientOnly } from "remix-utils";

function ChartPlaceHolder() {
  return (
    <Box backgroundColor="green.200">
      <Text> Waiting chart... </Text>
    </Box>
  );
}

interface DashboardBarCardProps {
  title: string;
  value: string;
}

export function DashboardBarCard(props: DashboardBarCardProps) {
  return (
    <Box
      w="full"
      backgroundColor="white"
      h={{ sm: "350px", base: "300px" }}
      padding={{ base: "6", md: "4" }}
      rounded="md"
      textAlign="center"
    >
      <Text lineHeight="1.5">{props.title}</Text>
      <Text fontSize="1.5em" lineHeight="1" fontWeight="600">
        {props.value}
      </Text>
      <ClientOnly fallback={<ChartPlaceHolder />}>
        {() => <BarChart />}
      </ClientOnly>
    </Box>
  );
}
