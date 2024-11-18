function Section({ title, desc }) {
  return (
    <section className='flex flex-col items-center space-y-4'>
      <h1 className='text-5xl text-text10'>{title}</h1>
      <h2 className='text-text10'>{desc}</h2>
    </section>
  );
}

export default Section;
