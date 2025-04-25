import { ReactNode } from 'react';
import { Header } from './components/header/header';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header/>   
            {children}
        </div>
    );
}
