import React, { useState } from 'react';
import { firebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';
import {
  Container,
  LogoLink,
  Form,
  Title,
  Error,
  Button,
  SignUpText,
  SignUpLink,
} from './styles';
import Input from './Input';
import { Footer } from '../';

const footerData = [
  '자주 묻는 질문',
  '고객 센터',
  '이용 약관',
  '개인정보',
  '쿠키 설정',
  '회사 정보',
];

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // 로그인 완료 후 페이지 이동
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <Container backgroundImage="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80">
      <LogoLink to="/">Netflix</LogoLink>
      <Form onSubmit={handleSignIn}>
        <Title>로그인</Title>
        {error && <Error>이메일 또는 비밀번호를 잘못 입력하셨습니다.</Error>}
        <Input
          type="email"
          value={email}
          setValue={setEmail}
          label="이메일 주소"
        />
        <Input
          type="password"
          value={password}
          setValue={setPassword}
          label="비밀번호"
        />
        <Button>로그인</Button>
        <SignUpText>
          Netflix 회원이 아닌가요?{' '}
          <SignUpLink to={ROUTES.HOME}>지금 가입하세요</SignUpLink>.
        </SignUpText>
      </Form>
      <Footer data={footerData} />
    </Container>
  );
}
