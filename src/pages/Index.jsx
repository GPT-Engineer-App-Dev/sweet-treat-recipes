import { useState } from 'react';
import { Box, Flex, Input, Image, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const categories = [
  { name: 'Chocolate', image: '/images/chocolate-cupcakes.jpg' },
  { name: 'Vanilla', image: '/images/vanilla-cupcakes.jpg' },
  { name: 'Red Velvet', image: '/images/red-velvet-cupcakes.jpg' },
  { name: 'Fruit', image: '/images/fruit-cupcakes.jpg' }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCategories = categories.filter(category => category.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl">Cupcake Recipes</Heading>
        <Flex as="label" bg="gray.100" p="2" borderRadius="md">
          <Input placeholder="Search recipes..." variant="unstyled" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Button colorScheme="pink" px="4">
            <FaSearch />
          </Button>
        </Flex>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
        {filteredCategories.map(category => (
          <Box key={category.name} boxShadow="md" borderRadius="lg" overflow="hidden">
            <Image src={category.image} alt={`${category.name} cupcakes`} />
            <Text p={5} fontSize="xl" fontWeight="bold">{category.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;