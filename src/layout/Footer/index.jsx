import { useMemo } from 'react';

import { MdManageSearch } from 'react-icons/md';
import { RxPerson } from 'react-icons/rx';
import { BiHome } from 'react-icons/bi';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { FaRegHeart } from 'react-icons/fa6';

import Tab from './Tab';

function Footer() {
  const ICONS = useMemo(
    () => [
      {
        id: 'i1',
        icon: MdManageSearch,
        url: '/search',
        name: '검색',
      },
      {
        id: 'i2',
        icon: RxPerson,
        name: '마이',
      },
      {
        id: 'i3',
        icon: BiHome,
        url: '/main',
        name: '홈',
      },
      {
        id: 'i4',
        icon: HiOutlineBuildingStorefront,
        url: '/contract',
        name: '내 계약',
      },
      {
        id: 'i5',
        icon: FaRegHeart,
        name: '찜',
      },
    ],
    [],
  );
  return (
    <section className='grid h-full grid-cols-5 place-items-center rounded-t-common shadow-bottomTab '>
      {ICONS.map((icon) => (
        <Tab key={icon.id} icon={icon.icon} url={icon.url} name={icon.name} />
      ))}
    </section>
  );
}

export default Footer;
