import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import clsx from 'clsx';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dukaan',
	description: 'Dukaan Dashboard UI'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={clsx(inter.className, 'flex w-full min-h-dvh')}>
				<Sidebar />

				<div className='flex flex-col w-full bg-white'>
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
