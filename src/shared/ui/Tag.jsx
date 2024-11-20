function Tag({ label, onClick }) {
  return (
    <p
      className='bg-text25 text-text100 rounded-common w-20 cursor-pointer px-3 py-1 text-center text-xs'
      onClick={onClick}
    >
      {label}
    </p>
  );
}

export default Tag;
