import { Flex } from "@chakra-ui/react";
import { DashboardBarCard } from "~/components/dashboard/card-bar";
import { DashboardLineCard } from "~/components/dashboard/card-line";

export default function HomeDashboard() {
  return (
    <Flex gap="2" direction={{ base: "column" }}>
      <Flex>
        <DashboardLineCard title="Activity Summary" />
      </Flex>
      <Flex gap="2" direction={{ base: "column", md: "row" }}>
        <DashboardBarCard title="Earning" value="20.04 SOL" />
        <DashboardBarCard title="Spending" value="13.11 SOL" />
        <DashboardBarCard title="ROI" value="67%" />
      </Flex>
    </Flex>
  );
}
