import React from 'react';

import { NavigLink } from '../Navigator/Navigator.styled';

export default function AuthNav() {
  return (
    <nav>
      <NavigLink to="/register">Регистрация</NavigLink>
      <NavigLink to="/login">Логин</NavigLink>
    </nav>
  );
}
