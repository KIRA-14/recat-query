import React, { StrictMode } from 'react';
import  ReactDOM  from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Profile from './components/Post';
import '../scss/all.scss';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

const App =()=>(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
           <Profile />
           <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>
)

const rootElement:Element = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(<App/>);