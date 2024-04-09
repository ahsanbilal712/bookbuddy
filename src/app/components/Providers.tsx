'@ts-nocheck'
'use client'

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessagesProvider } from '@/context/messages';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
    const [client] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={client}>
           <MessagesProvider>{children}</MessagesProvider> 
        </QueryClientProvider>
    );
};

export default Provider;