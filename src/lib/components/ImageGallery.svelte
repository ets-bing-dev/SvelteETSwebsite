<script>
  import { fade } from "svelte/transition";

  export let images = [];
  let currentIndex = 0;

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };
</script>

<div
  class="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 h-[760px]"
>
  <!-- Image Container -->
  <div
    class="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center"
  >
    {#each images as image, index}
      {#if index === currentIndex}
        <img
          src={image.path}
          alt={image.title}
          class="absolute inset-0 w-full h-full object-contain rounded-xl shadow-md z-0"
          style="border: 10px solid black"
          transition:fade={{ duration: 1000 }}
        />
      {/if}
    {/each}

    <!-- Navigation Buttons -->
    <div class="absolute w-full flex justify-between px-4 z-10">
      <button
        on:click={prevImage}
        class="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-3 text-4xl rounded-full"
      >
        {"<"}
      </button>
      <button
        on:click={nextImage}
        class="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-3 text-4xl rounded-full"
      >
        {">"}
      </button>
    </div>
  </div>

  <!-- Title (Fade between titles without layout shift) -->
  <div class="relative w-full mt-6 h-[3.5rem] md:h-[4.5rem]">
    {#each images as image, index}
      <h3
        class="absolute inset-0 flex items-center justify-center text-white font-plex-mono text-2xl md:text-4xl font-bold transition-opacity duration-1000 ease-in-out"
        class:opacity-100={index === currentIndex}
        class:opacity-0={index !== currentIndex}
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
