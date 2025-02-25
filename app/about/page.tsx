function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        CozyNest is designed to make finding the perfect furniture effortless.
        Whether you're furnishing a new home or upgrading your space, we offer
        stylish, high-quality pieces that blend comfort with functionality. Our
        mission is to help you create a warm and inviting home with carefully
        curated designs that suit every taste.
      </p>
    </section>
  );
}
export default AboutPage;
