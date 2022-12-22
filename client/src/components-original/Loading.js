function Loading() {
  return (
    <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
      <div class='mb-10 md:mb-16'>
        <h1 class='mb-4 text-center text-4xl font-thin text-primary md:mb-6 lg:text-4xl'>
          loading...
        </h1>
        <div class='flex-auto flex-col'>
          <h1 class='mb-4 text-center text-4xl font-thin uppercase text-primary md:mb-6 lg:text-4xl'>
            <progress class='progress progress-secondary w-56'></progress>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Loading;
