import { SimpleGrid, Stack, Box } from "@chakra-ui/react";
import {
  BsCash,
  BsCashStack,
  BsHandThumbsUp,
  BsHandThumbsDown,
} from "react-icons/bs";
import { DashboardPortoCard } from "~/components/dashboard/porto-card";
import { TablePortofolio } from "~/components/tables/portofolio";

export default function DashboardPortofolio() {
  return (
    <Stack direction="column" spacing={5}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2}>
        <DashboardPortoCard
          title="Today's P/L"
          value="0.99 SOL"
          icon={BsCash}
        />
        <DashboardPortoCard
          title="Total P/L"
          value="0.99 SOL"
          icon={BsCashStack}
        />
        <DashboardPortoCard
          title="Today's P/L"
          value="40.40%"
          icon={BsHandThumbsUp}
        />
        <DashboardPortoCard
          title="Today's P/L"
          value="59.60%"
          icon={BsHandThumbsDown}
        />
      </SimpleGrid>
      <Box backgroundColor="white" rounded="md">
        <TablePortofolio />
      </Box>
    </Stack>
  );
}
