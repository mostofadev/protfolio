'use client';

import { Toaster } from 'react-hot-toast'
import ClientProvider from './ClientProvider';
import { ToastContainer } from 'react-toastify';


export default function ClientOnlyWrapper({ children }) {
  return (
    <ClientProvider>
      <Toaster position="top-right" />
      <ToastContainer position="top-right" autoClose={3000} />
      {children}
    </ClientProvider>
  );
}
