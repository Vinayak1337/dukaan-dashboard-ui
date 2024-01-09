import clsx from 'clsx';
import Image from 'next/image';
import { Bricolage_Grotesque } from 'next/font/google';
import { IoIosArrowDown } from 'react-icons/io';
import { NextPage } from 'next';
import { IconType } from 'react-icons';
import { GoHome } from 'react-icons/go';
import { MdGridView, MdOutlinePalette } from 'react-icons/md';
import { LuClipboardList } from 'react-icons/lu';
import { FiTruck, FiZap } from 'react-icons/fi';
import { PiChartBar } from 'react-icons/pi';
import { TbDiscount2 } from 'react-icons/tb';
import { CiWallet } from 'react-icons/ci';

const galano = Bricolage_Grotesque({ subsets: ['latin'] });

const Sidebar = () => (
	<div className='w-fit min-h-dvh py-4 px-2.5 flex flex-col bg-slate-800 text-white gap-4'>
		<div className='flex flex-col gap-6 flex-grow'>
			<UserInfo />

			<div className='w-full flex-grow flex flex-col gap-1'>
				<Item title='Home' Icon={GoHome} />
				<Item title='Orders' Icon={MdGridView} />
				<Item title='Products' Icon={LuClipboardList} />
				<Item title='Delivery' Icon={FiTruck} />
				<Item title='Marketing' image='/icons/marketing.svg' />
				<Item title='Analytics' Icon={PiChartBar} />
				<Item title='Payouts' image='/icons/payouts.svg' isSelected />
				<Item title='Discounts' Icon={TbDiscount2} />
				<Item title='Audience' image='/icons/audience.svg' />
				<Item title='Appearance' Icon={MdOutlinePalette} />
				<Item title='Plugins' Icon={FiZap} />
			</div>
		</div>

		<Credits />
	</div>
);

export default Sidebar;

const UserInfo = () => (
	<div className='flex gap-3 items-center'>
		<Image src='/icons/nishyan.svg' width={40} height={40} alt='Nishyan' />

		<div className='flex flex-col w-27 gap-1'>
			<p className='text-base font-medium leading-snug'>Nishyan</p>
			<p
				className={clsx(
					'text-xs underline leading-none font-normal opacity-80',
					galano.className
				)}>
				Visit store
			</p>
		</div>

		<IoIosArrowDown className='w-5 h-5' />
	</div>
);

const Item: NextPage<ItemProps> = ({ title, image, Icon, isSelected }) => (
	<div
		className={clsx(
			'px-4 py-2 rounded flex gap-3 cursor-pointer',
			'hover:bg-white hover:bg-opacity-10',
			{
				'bg-white bg-opacity-10': isSelected
			}
		)}>
		{Icon && <Icon className='w-5 h-5' />}
		{image && <Image src={image} width={20} height={20} alt={title} />}{' '}
		<p className='text-sm font-medium leading-tight'>{title}</p>
	</div>
);

interface ItemBaseProps {
	title: string;
	isSelected?: boolean;
}

interface ItemWithIcon extends ItemBaseProps {
	Icon: IconType;
	image?: never;
}

interface ItemWithImage extends ItemBaseProps {
	image: string;
	Icon?: never;
}

type ItemProps = ItemWithIcon | ItemWithImage;

const Credits = () => (
	<div className='px-3 py-1.5 bg-slate-700 rounded flex gap-2.5 w-full'>
		<div className='flex items-center gap-3'>
			<div className='p-1.5 bg-white bg-opacity-10 rounded'>
				<CiWallet className='w-6 h-6' />
			</div>

			<div className='flex flex-col gap-0.5 h-fit'>
				<p className='text-xs font-normal leading-none opacity-80'>
					Available Credits
				</p>
				<p className='text-base font-medium leading-normal'>222.10</p>
			</div>
		</div>
	</div>
);
