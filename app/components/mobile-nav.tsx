import type { FlexProps } from '@chakra-ui/react'
import { 
  Flex, 
  IconButton, 
  MenuButton, 
  Menu, 
  Button,
  HStack, 
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>

      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton as={Button} color="white" backgroundColor="purple.500">
              Connect Wallet
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
