<script>
  export let images = [];
  let currentIndex = 0;

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };
</script>

<div class="flex flex-col items-center justify-center max-w-4xl mx-auto px-4">
  <!-- Responsive image container -->
  <div class="relative w-full aspect-[4/3] sm:aspect-[16/9] flex items-center justify-center overflow-hidden rounded-2xl bg-[#1a171a]">
    {#each images as image, index}
      <img
        src={image.path}
        alt={image.title}
        class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-md border-[4px] sm:border-[6px] lg:border-[8px] border-darker-gray"
        style=" transition: opacity 1s ease-in-out; opacity: {index === currentIndex ? 1 : 0};"
      />
    {/each}

    <!-- Navigation Buttons -->
    <div class="absolute w-full flex justify-between px-4 z-10">
      <button
        on:click={prevImage}
        class="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-3 text-4xl rounded-full"
        style = "filter: drop-shadow(0px 5px 1px rgba(0,0,0,1));"
      >
        {"<"}
      </button>
      <button
        on:click={nextImage}
        class="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-3 text-4xl rounded-full"
        style = "filter: drop-shadow(0 5px 1px rgba(0,0,0,1));"
      >
        {">"}
      </button>
    </div>
  </div>

  <!-- Title transition using inline style -->
  <div class="relative w-full mt-6 h-[3.5rem] md:h-[4.5rem]">
    {#each images as image, index}
      <h3
        class="absolute inset-0 flex italic items-center justify-center text-white font-plex-mono text-2xl md:text-4xl "
        style="transition: opacity 1s ease-in-out; opacity: {index === currentIndex ? 1 : 0};"
      >
        {image.title}
      </h3>
    {/each}
  </div>

  <!-- Dot indicators -->
  <div class="mt-4 flex space-x-2">
    {#each images as _, index}
      <div
        role="button"
        tabindex="0"
        aria-label="Go to image {index + 1}"
        class="h-2 w-2 rounded-full cursor-pointer outline-none focus:ring-2 focus:ring-white"
        class:bg-gray-400={currentIndex !== index}
        class:bg-gray-800={currentIndex === index}
        on:click={() => (currentIndex = index)}
        on:keydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            currentIndex = index;
          }
        }}
      ></div>
    {/each}
  </div>
</div>
