<script>
    import { fade } from 'svelte/transition';
  
    export let images = [];
    let currentIndex = 0;
  
    const prevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    };
  
    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
    };
  </script>
  
  <div class="flex flex-col h-[760px] items-center justify-center max-w-4xl mx-auto px-4">
    <!-- Image container -->
    <div class="relative w-full h-full rounded-xl flex items-center justify-center overflow-hidden">
  
      <!-- Image fade transition -->
      {#each images as image, index}
        {#if index === currentIndex}
          <img
            src={image.path}
            alt="Gallery Image"
            style = "border: 10px solid black"
            class="absolute inset-0 w-full h-full object-contain rounded-xl shadow-md z-0 glowing-image border-black"
            transition:fade={{ duration: 1000 }}
          />
        {/if}
      {/each}
  
      <!-- Buttons -->
      <div class="absolute w-full flex justify-between px-4 z-10">
        <button
          on:click={prevImage}
          class="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white 
                 p-3 text-4xl rounded-full"
        >
          {"<"}
        </button>
  
        <button
          on:click={nextImage}
          class="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white 
                 p-3 text-4xl rounded-full"
        >
          {">"}
        </button>
      </div>
    </div>
  
    <!-- Title -->
    <h3
      class="font-plex-mono text-white text-2xl md:text-4xl font-bold md:pt-10 pt-2 text-center"
    >
      {images[currentIndex].title}
    </h3>
  
    <!-- Dot indicators -->
    <div class="mt-4 flex space-x-2">
      {#each images as _, index}
        <div
          class="h-2 w-2 rounded-full cursor-pointer"
          class:bg-gray-400={currentIndex !== index}
          class:bg-gray-800={currentIndex === index}
          on:click={() => (currentIndex = index)}
        ></div>
      {/each}
    </div>
  </div>
  