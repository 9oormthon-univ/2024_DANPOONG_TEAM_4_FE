function TitleRow({ title, sub }) {
  return (
    <div className='flex items-center justify-between px-2'>
      <p className='text-xl text-text300'>{title}</p>
      <p className='text-primary'>{sub}</p>
    </div>
  );
}

export default TitleRow;
