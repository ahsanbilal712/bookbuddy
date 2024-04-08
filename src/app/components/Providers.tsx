'@ts-nocheck'
'use client'

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
    const [client] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
};

export default Provider;