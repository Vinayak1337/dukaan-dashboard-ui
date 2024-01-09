import clsx from 'clsx';
import { Bricolage_Grotesque } from 'next/font/google';
import { IoIosArrowDown } from 'react-icons/io';
import { Inter } from 'next/font/google';
import { GoQuestion } from 'react-icons/go';
import { LuIndianRupee } from 'react-icons/lu';
import { IoIosArrowForward } from 'react-icons/io';

const galano = Bricolage_Grotesque({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const Overview = () => (
	<div className='flex flex-col w-full gap-6'>
		<div className={clsx('flex justify-between', galano.className)}>
			<p className='text-zinc-900 font-medium text-xl'>Overview</p>

			<div className='flex items-center gap-4 py-1.5 px-3.5 border border-zinc-300 rounded'>
				<p className='text-neutral-600 text-base leading-normal'>This Month</p>

				<IoIosArrowDown className='w-4 h-4 text-neutral-600' />
			</div>
		</div>

		<div className='flex gap-5 w-full'>
			<NextPayout />
			<AmountPending />
			<AmountProcessed />
		</div>
	</div>
);

export default Overview;

const NextPayout = () => (
	<div className='shadow flex flex-col w-90 rounded-lg bg-sky-700'>
		<div className='p-5 flex flex-col gap-4 w-full text-white'>
			<div
				className={clsx(
					'flex justify-between text-base font-normal leading-normal',
					inter.className
				)}>
				<div className='flex items-center gap-2'>
					<p>Next Payout</p>
					<GoQuestion className='w-4 h-4' />
				</div>
				{/* <p>by Today, 04:00 PM</p> */}
			</div>
			<div className='flex justify-between items-center'>
				<p className='text-3xl font-medium flex items-center'>
					<LuIndianRupee className='w-6 h-6' />
					<span>2,312.23</span>
				</p>

				<div className='flex items-center'>
					<p className='underline text-base font-medium leading-normal'>
						23 orders
					</p>
					<IoIosArrowForward className='w-6 h-6' />
				</div>
			</div>
		</div>

		<div className='w-full px-6 py-2 bg-sky-800 rounded-lg flex justify-between'>
			<p className='text-zinc-100 text-sm leading-tight'>Next payout date:</p>
			<p className='text-zinc-100 font-medium leading-tight'>Today, 04:00PM</p>
		</div>
	</div>
);

const AmountPending = () => (
	<div className='flex flex-col shadow gap-4 rounded-lg p-5 h-fit w-90'>
		<div
			className={clsx(
				'flex items-center gap-2 text-neutral-600 w-full',
				inter.className
			)}>
			<p className='text-base'>Amount Pending</p>
			<GoQuestion className='w-4 h-4' />
		</div>

		<div className='flex justify-between items-center w-full'>
			<p className='flex items-center text-zinc-900 text-3xl font-medium'>
				<LuIndianRupee className='w-6 h-6' />
				<span>92,312.20</span>
			</p>

			<p className='flex items-center text-sky-700'>
				<span className='underline text-base font-medium'>13 orders</span>
				<IoIosArrowForward className='w-6 h-6' />
			</p>
		</div>
	</div>
);

const AmountProcessed = () => (
	<div className='flex flex-col shadow gap-4 rounded-lg p-5 h-fit w-90'>
		<div
			className={clsx(
				'flex items-center gap-2 text-neutral-600 w-full',
				inter.className
			)}>
			<p className='text-base'>Amount Processed</p>
			<GoQuestion className='w-4 h-4' />
		</div>

		<p className='flex items-center text-zinc-900 text-3xl font-medium'>
			<LuIndianRupee className='w-6 h-6' />
			<span>23,92,312.19</span>
		</p>
	</div>
);
