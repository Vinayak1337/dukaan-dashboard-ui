import clsx from 'clsx';
import { NextPage } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import { Inter } from 'next/font/google';
import { IoSearch } from 'react-icons/io5';
import { IoSwapVertical } from 'react-icons/io5';
import { LuDownload } from 'react-icons/lu';

const galano = Bricolage_Grotesque({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const Transactions = () => (
	<div className={clsx('flex gap-6 flex-col w-full h-full', galano.className)}>
		<div className='flex flex-col gap-6'>
			<h5 className='text-zinc-900 text-xl font-medium'>
				Transactions | This Month
			</h5>

			<div className={clsx('flex gap-3', inter.className)}>
				<button className='rounded-3xl py-1.5 px-4 text-zinc-500 bg-neutral-200 text-sm font-medium leading-tight'>
					Payouts (22)
				</button>
				<button className='rounded-3xl py-1.5 px-4 text-white bg-sky-700 text-sm font-medium leading-tight'>
					Refunds (6)
				</button>
			</div>
		</div>

		<div className='rounded-lg p-3 pb-2 shadow flex flex-col gap-3 w-full h-full'>
			<div className='flex justify-between items-center w-full'>
				<div className='w-64 h-10'>
					<label className='mb-2 text-sm font-medium text-gray-900 sr-only'>
						Search
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
							<IoSearch className='w-4 h-4 text-black opacity-50' />
						</div>
						<input
							type='search'
							id='order-id'
							className='outline-none border border-zinc-300 px-4 py-2.5 w-full block ps-10 text-sm text-neutral-400 rounded bg-white leading-tight'
							placeholder='Order ID or transaction ID'
							required
						/>
					</div>
				</div>

				<div className={clsx('flex gap-3 items-center', inter.className)}>
					<div className='rounded px-3 py-1.5 cursor-pointer border flex items-center gap-3 text-neutral-600 text-base'>
						<p>Sort</p>
						<IoSwapVertical className='w-4 h-4' />
					</div>

					<div className='rounded px-3 py-1.5 cursor-pointer border text-neutral-600'>
						<LuDownload className='w-5 h-5' />
					</div>
				</div>
			</div>

			<div className='flex flex-col w-full h-full'>
				<div className='rounded bg-zinc-100 px-3 py-2.5 flex items-center justify-between w-full'>
					<p className='w-37 h-5 text-sm font-medium text-neutral-600'>
						Order ID
					</p>
					<p className='w-37 h-5 text-sm font-medium text-neutral-600'>
						Status
					</p>
					<p className='w-37 h-5 text-sm font-medium text-neutral-600'>
						Transaction ID
					</p>
					<p className='w-37 h-5 text-sm font-medium text-neutral-600'>
						Refund date
					</p>
					<p className='w-37 h-5 text-sm font-medium text-neutral-600 text-right'>
						Order amount
					</p>
				</div>
				<div className='w-full h-full overflow-hidden'>
					<div className='w-full h-full overflow-y-scroll hide-scrollbar'>
						{transactions.map(transaction => (
							<Transaction key={transaction.orderId} {...transaction} />
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Transactions;

const Transaction: NextPage<TransactionProps> = ({
	orderAmount,
	orderId,
	refundDate,
	status,
	transactionId
}) => (
	<div className='rounded px-3 py-3.5 flex items-center justify-between w-full border-b border-neutral-200'>
		<p className='w-37 h-5 text-sm font-medium text-sky-700 leading-tight'>
			#{orderId}
		</p>
		<div className='w-37 h-5 text-sm font-medium text-zinc-900'>
			<Status status={status} />
		</div>
		<p className='w-37 h-5 text-sm font-medium text-neutral-600 leading-tight'>
			{transactionId}
		</p>
		<p className='w-37 h-5 text-sm font-medium text-neutral-600 leading-tight'>
			{refundDate}
		</p>
		<p className='w-37 h-5 text-sm font-medium text-zinc-900 leading-tight text-right'>
			₹{orderAmount}
		</p>
	</div>
);

const Status: NextPage<{ status: 'success' | 'pending' | 'failed' }> = ({
	status
}) => (
	<div className='w-full flex gap-1 items-center'>
		<div
			className={clsx('w-2.5 h-2.5 rounded-full', {
				'bg-green-600': status === 'success',
				'bg-neutral-400': status === 'pending',
				'bg-red-500': status === 'failed'
			})}
		/>
		<p>{statusText[status]}</p>
	</div>
);

const statusText = {
	success: 'Successful',
	pending: 'Processing',
	failed: 'Failed'
};

interface TransactionProps {
	orderId: string;
	status: 'success' | 'pending' | 'failed';
	transactionId: string;
	refundDate: string;
	orderAmount: string;
}

const transactions: TransactionProps[] = [
	{
		orderId: '281209',
		status: 'success',
		transactionId: '131634495747',
		refundDate: 'Today, 08:45 PM',
		orderAmount: '1,125.00'
	},
	{
		orderId: '281208',
		status: 'pending',
		transactionId: '131634495746',
		refundDate: 'Yesterday, 3:00 PM',
		orderAmount: '1,125.00'
	},
	{
		orderId: '281207',
		status: 'failed',
		transactionId: '131634495745',
		refundDate: 'Yesterday, 2:30 PM',
		orderAmount: '1,125.00'
	},
	{
		orderId: '281206',
		status: 'success',
		transactionId: '131634495744',
		refundDate: '12 Jul 2023, 03:00 PM',
		orderAmount: '1,125.00'
	},
	{
		orderId: '281205',
		status: 'success',
		transactionId: '131634495743',
		refundDate: '12 Jul 2023, 03:00 PM',
		orderAmount: '1,125.00'
	},
	{
		orderId: '281204',
		status: 'success',
		transactionId: '131634495742',
		refundDate: '12 Jul 2023, 03:00 PM',
		orderAmount: '1,125.00'
	},
	{
		orderId: '281203',
		status: 'success',
		transactionId: '131634495741',
		refundDate: '12 Jul 2023, 03:00 PM',
		orderAmount: '1,125.00'
	},
	{
		orderId: '281202',
		status: 'success',
		transactionId: '131634495740',
		refundDate: '12 Jul 2023, 03:00 PM',
		orderAmount: '1,125.00'
	}
];
