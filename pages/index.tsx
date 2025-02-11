import { Container, Heading, Text } from '@chakra-ui/react';
import dashBoard from './dashboard';

export default function Home() {
  return (
    <Container maxWidth="container.xl">
      <dashBoard />
      <Heading>The boilerplate works!</Heading>
      <Text></Text>
    </Container>
  );
}
