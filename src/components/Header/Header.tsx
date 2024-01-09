import clsx from 'clsx';
import { Bricolage_Grotesque } from 'next/font/google';
import { GoQuestion } from 'react-icons/go';
import { IoSearch } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';
import Image from 'next/image';

const galano = Bricolage_Grotesque({ subsets: ['latin'] });

const Header = () => (
	<div
		className={clsx(
			'w-full h-fit px-8 py-3 flex gap-4 items-stretch border-b',
			galano.className
		)}>
		{/* Left */}
		<div className='h-7 flex-grow flex gap-4 items-center'>
			<p className='text-zinc-900 text-xl font-medium'>Payouts</p>

			<div className='flex gap-1.5 text-neutral-600'>
				<GoQuestion className='w-3.5 h-3.5' />
				<p className='text-xs font-normal leading-none'>How it works</p>
			</div>
		</div>

		{/* Middle */}
		<div className='h-7 flex-grow'>
			<label className='mb-2 text-sm font-medium text-gray-900 sr-only'>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
					<IoSearch className='w-4 h-4 text-black opacity-50' />
				</div>
				<input
					type='search'
					id='search'
					className='outline-zinc-none w-full block px-4 py-2 ps-10 text-sm text-zinc-500 rounded-lg bg-zinc-100'
					placeholder='Search features, tutorials, etc.'
					required
				/>
			</div>
		</div>

		{/* Right */}
		<div className='h-7 flex-grow flex justify-end items-center gap-3 text-zinc-700'>
			<div className='bg-neutral-200 rounded-full w-10 h-10 flex justify-center items-center'>
				<Image src='/icons/speaker.svg' width={20} height={20} alt='Avatar' />
			</div>
			<div className='bg-neutral-200 rounded-full w-10 h-10 flex justify-center items-center'>
				<IoMdArrowDropdown className='w-5 h-5' />
			</div>
		</div>
	</div>
);

export default Header;
