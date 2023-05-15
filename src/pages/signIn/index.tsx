import React from 'react';
import { Container, Content, Title } from './style';
import { Input } from '../../components/forms/input';
import { ScrollView } from 'react-native';

export const SignIn: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Faça seu Login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
        </Content>
      </Container>
    </ScrollView>
  );
};
