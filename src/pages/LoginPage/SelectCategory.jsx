import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import pickLottie from '@/assets/pick-lottie.json';

import Spacing from '@shared/ui/Spacing';
import Button from '@shared/ui/Button';
import FloatingButton from '@shared/ui/FloatingButton';

import { DUMMY_SHOPCATEGORY } from '@mocks/shopcategory';

import CategoryCard from '@components/category/CategoryCard';

function SelectCategory() {
  const navigate = useNavigate();

  const [getSelect, setGetSelect] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const storeCategoryHandler = () => {
    if (selectedCategory) {
      // 선택된 카테고리를 localStorage에 저장
      localStorage.setItem('category', selectedCategory);

      // 저장 후 메인 페이지로 이동
      navigate('/main');
    } else {
      alert('카테고리를 선택해주세요!');
    }
  };

  if (!getSelect) {
    return (
      <div className='h-screen text-center bg-text10'>
        <Lottie animationData={pickLottie} />
        <section className='flex flex-col items-center space-y-10'>
          <h1 className='text-4xl whitespace-pre-line text-text200'>
            고객님에게 맞는{'\n'}
            카테고리를 골라주세요!
          </h1>

          <h2 className='text-text100'>
            고객님에게 맞는 상점을 추천해드립니다 :)
          </h2>
        </section>
        <Spacing size={30} />
        <div className='flex flex-wrap gap-6 px-10'>
          <Button
            color='secondary'
            className='flex-1'
            onClick={() => navigate('/main')}
          >
            다음에 할게요
          </Button>
          <Button
            color='primary'
            className='flex-1'
            onClick={() => setGetSelect(true)}
          >
            선택하기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-2 gap-4 p-4 mt-10'>
      {DUMMY_SHOPCATEGORY.map((category) => (
        <div
          key={category.id}
          onClick={() => setSelectedCategory(category.name)}
        >
          <CategoryCard
            storeName={category.name}
            imageSrc={category.image}
            borderColor={category.bordercolor}
            bgColor={category.bgcolor}
            selected={selectedCategory === category.name}
          />
          <FloatingButton
            label='선택하기'
            disabled={selectedCategory === ''}
            onClick={storeCategoryHandler}
          />
        </div>
      ))}
    </div>
  );
}

export default SelectCategory;
