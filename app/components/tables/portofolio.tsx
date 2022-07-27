import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";

interface PortofolioTableData {
  nft_collectibles: string;
  nft_id: string;
  status: string;
  purchase_price: string;
  gas_fee_buy: string;
  gas_fee_sell: string;
  purchase_date: string;
  sell_price: string;
  royalty: string;
  marketplace_fee: string;
  profit_loss: string;
  profit_loss_percent: string;
}

const data: PortofolioTableData[] = Array(15).fill({
  nft_collectibles: "Baby Apes",
  nft_id: "9013120812",
  status: "Purchased",
  purchase_price: "1 SOL",
  gas_fee_buy: "0.01 SOL",
  gas_fee_sell: "0.01 SOL",
  purchase_date: "21 May 2022",
  sell_price: "1.2 SOL",
  royalty: "5%",
  marketplace_fee: "2%",
  profit_loss: "0.86",
  profit_loss_percent: "86%",
});

export function TablePortofolio() {
  return (
    <TableContainer>
      <Table size="sm" variant="striped" colorScheme="purple">
        <Thead backgroundColor="purple.200">
          <Tr>
            <Th>NFT Collectibles</Th>
            <Th>NFT ID</Th>
            <Th>Status</Th>
            <Th>Purchase Price</Th>
            <Th>Gas Fee (buy)</Th>
            <Th>Purchase Date</Th>
            <Th>Sell Price</Th>
            <Th>Gas Fee (sell)</Th>
            <Th>Royalty</Th>
            <Th>Marketplace Fee</Th>
            <Th>Profit & Loss</Th>
            <Th>Profit & Loss (%)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((d, index) => (
            <Tr key={index}>
              <Td>{d.nft_collectibles}</Td>
              <Td>{d.nft_id}</Td>
              <Td>{d.status}</Td>
              <Td>{d.purchase_price}</Td>
              <Td>{d.gas_fee_buy}</Td>
              <Td>{d.purchase_date}</Td>
              <Td>{d.sell_price}</Td>
              <Td>{d.gas_fee_sell}</Td>
              <Td>{d.royalty}</Td>
              <Td>{d.marketplace_fee}</Td>
              <Td>{d.profit_loss}</Td>
              <Td>{d.profit_loss_percent}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
