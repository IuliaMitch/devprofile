import React from 'react';
import { Container, Content, Logo, Title } from './style';
import { Input } from '../../components/forms/input';
import { ScrollView } from 'react-native';
import { Button } from '../../components/forms/button';
import logo from '../../assets/logo.png';

export const SignIn: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Faça seu Login</Title>
          <Logo source={logo} />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button title="Entrar" />
        </Content>
      </Container>
    </ScrollView>
  );
};
