import React from 'react';
import { Container, Content, Title } from './style';
import { Input } from '../../components/forms/input';
import { ScrollView } from 'react-native';
import { Button } from '../../components/forms/button';

export const SignUp: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Cadastre-se em DevProfile</Title>
          <Input placeholder="Nickname" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button title="Criar" />
        </Content>
      </Container>
    </ScrollView>
  );
};
