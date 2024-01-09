import Overview from '@/components/Overview/Overview';
import Transactions from '@/components/Transactions/Transactions';

export default function Home() {
	return (
		<div className='min-h-max h-full w-full p-8 flex flex-col gap-8'>
			<Overview />
			<Transactions />
		</div>
	);
}
