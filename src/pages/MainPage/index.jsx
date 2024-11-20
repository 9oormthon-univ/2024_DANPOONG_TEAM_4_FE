import Banners from '@components/main/Banners';
import Alerts from '@components/main/Alerts';
import Contracts from '@components/main/Contracts';
import Stores from '@components/main/Stores';

import TitleRow from '@shared/ui/TitleRow';
import Spacing from '@shared/ui/Spacing';

function MainPage() {
  return (
    <div>
      <Banners />
      <section>
        <TitleRow title='알림 확인' sub='전체보기' />
        <Spacing size={6} />
        <Alerts />
      </section>

      <section>
        <TitleRow title='정기 계약 현황' sub='전체보기' />
        <Spacing size={6} />
        <Contracts />
      </section>

      <section>
        <TitleRow title='정기 계약 현황' sub='전체보기' />
        <Spacing size={6} />
        <Stores />
      </section>
    </div>
  );
}

export default MainPage;
