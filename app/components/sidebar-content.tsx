import { Link } from "@remix-run/react";
import { Box, Flex, Text, CloseButton, Icon } from "@chakra-ui/react";
import type { BoxProps, FlexProps } from "@chakra-ui/react";
import {
  FiHome,
  FiSettings,
  FiPieChart,
  FiClipboard,
  FiBook,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import type { ReactText } from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome, to: "/dashboard" },
  { name: "My Portofolio", icon: FiPieChart, to: "/dashboard/portofolio" },
  { name: "NFT diary", icon: FiBook, to: "/dashboard" },
  { name: "Reports", icon: FiClipboard, to: "/dashboard" },
  { name: "Settings", icon: FiSettings, to: "/dashboard" },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Nft Dash!
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          to={link.to}
          onClose={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  to: string;
  onClose: () => void;
}

const NavItem = ({ icon, children, to, onClose, ...rest }: NavItemProps) => {
  return (
    <Link to={to} onClick={onClose}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
