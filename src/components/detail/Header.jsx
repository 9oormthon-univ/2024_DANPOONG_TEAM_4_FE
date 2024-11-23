import HeartButton from '@shared/ui/HeartButton';

function Header({ id, name, category, favorites, toggleHandler }) {
  // const { id, name, category } = store;

  return (
    <section className='flex items-center justify-between'>
      <p className='text-lg text-text200'>{name}</p>
      <span className='flex items-center gap-x-6'>
        <p className='text-text100'>{category}</p>
        <HeartButton
          // store={store}
          isFavorite={favorites.some((fav) => fav.id === id)}
          onFavorite={toggleHandler}
        />
      </span>
    </section>
  );
}

export default Header;
