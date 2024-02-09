"use client"
import React, { useEffect, useState } from 'react';
import { auth, signOut } from '../app/auth';
import { SignOut } from '@/lib/SignOut';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [user, setUser] = useState<string | null>(null);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const session = await auth();
        setUser(session?.user);
        console.log(user);
      } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <header>
      <h1>Bem-vindo</h1>
      <p>{user}</p>


    </header>
  );
};

export default Header;
