import '@testing-library/jest-dom';
import Login from '../Pages/Login';
import { render, screen } from '@testing-library/react';

describe('Login screen tests', () => {
  render(<Login />);

  test('login screen', () => {
    // renderiza o elemento
    const loginArea = screen.getByTestId('login-area');

    // verifica a asserção (se teve o compportamento esperado)
    expect(loginArea).toBeInTheDocument();
    expect(loginArea.tagName).toBe('FORM');
  });

  test('email input', () => {
    // renderiza o elemento
    const labelEmail = screen.getByTestId('label-email');
    const inputEmail = screen.getByTestId('input-email');

    // interage com o elemento
    expect(labelEmail).toBeInTheDocument();
    expect(labelEmail).toHaveTextContent('Email:');
    expect(labelEmail).toHaveAttribute('for', 'input-email');

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveAttribute('placeholder', 'Digite seu email');
    expect(inputEmail).toHaveAttribute('id', 'input-email');
  });

  test('password input', () => {
    // renderiza o elemento
    const labelPassword = screen.getByTestId('label-password');
    const inputPassword = screen.getByTestId('input-password');

    //verica a asserção (se teve o comportamento esperado)
    expect(labelPassword).toBeInTheDocument();
    expect(labelPassword).toHaveTextContent('Senha: ');
    expect(labelPassword).toHaveAttribute('for', 'input-password');

    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveAttribute('placeholder', 'Digite sua senha');
    expect(inputPassword).toHaveAttribute('id', 'input-password');
  });

  test('button login', () => {
    // renderiza o elemento
    const loginButton = screen.getByTestId('login-btn');

    // verifica a asserção (se tevev o comportamento esperado)
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent('Entrar');
    expect(loginButton).toHaveAttribute('type', 'submit');
  });
});
