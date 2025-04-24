<script>
    let expanded = false;
    let modalImage = null;
    let container;
    let maxHeight = '200px';
  
    const images = [
      { src: 'images/DE2025Gallery/GreetersPic.png', caption: 'Greeters' },
      { src: 'images/DE2025Gallery/MerchTablePic.png', caption: 'Merchandise Table' },
      { src: 'images/DE2025Gallery/DEOpeningCeremoney1.png', caption: 'Opening Ceremony' },
      { src: 'images/DE2025Gallery/LunchPic.png', caption: 'Saturday Lunch' },
      { src: 'images/DE2025Gallery/MoreFood.png', caption: 'Lunch Enjoyers' },
      { src: 'images/DE2025Gallery/Food2.png', caption: 'Lunch Enjoyers' },
      { src: 'images/DE2025Gallery/BlenderWorkshop1.png', caption: 'Blender Workshop' },
      { src: 'images/DE2025Gallery/BlenderWorkshop2.png', caption: 'Blender Workshop' },
      { src: 'images/DE2025Gallery/BlenderWorkshop3.png', caption: 'Blender Workshop' },
      { src: 'images/DE2025Gallery/BlenderWorkshop4.png', caption: 'Blender Workshop' },
      { src: 'images/DE2025Gallery/CADWorkshop1.png', caption: 'CAD Workshop' },
      { src: 'images/DE2025Gallery/CADWorkshop2.png', caption: 'CAD Workshop' },
      { src: 'images/DE2025Gallery/SDAWorkshop1.png', caption: 'SDA Workshop' },
      { src: 'images/DE2025Gallery/Judging1.png', caption: 'Judging Leak' },
      { src: 'images/DE2025Gallery/Participants1.png', caption: 'Participants!' },
      { src: 'images/DE2025Gallery/Participants2.png', caption: 'Participants!' },
      { src: 'images/DE2025Gallery/Participants3.png', caption: 'Participants!' },
      { src: 'images/DE2025Gallery/Participants4.png', caption: 'Participants!' },
      { src: 'images/DE2025Gallery/Participants5.png', caption: 'Participants!' },
      { src: 'images/DE2025Gallery/Participants6.png', caption: 'Participants!' },
      { src: 'images/DE2025Gallery/Participants7.png', caption: 'Participants!' },
      { src: 'images/DE2025Gallery/Participants8.png', caption: 'Old Participant!' },
      { src: 'images/DE2025Gallery/Participants9.png', caption: 'Participants!' },
      { src: 'images/DE2025Gallery/Participants10.png', caption: 'Participants!' },
      { src: 'images/DE2025Gallery/FoodPOV1.png', caption: 'Nom Nom Nom' },
      { src: 'images/DE2025Gallery/DEClosingCeremoney1.png', caption: 'Closing Ceremony' },
      { src: 'images/DE2025Gallery/DEClosingCeremoney2.png', caption: 'Closing Ceremony' }
    ];
  
    function toggleExpand() {
      expanded = !expanded;
      maxHeight = expanded ? `${container.scrollHeight}px` : '200px';
    }
  
    function closeModal() {
      modalImage = null;
    }
  </script>
  
  <!-- Image Grid -->
  <div class="relative max-w-7xl mx-auto">
    <div
      bind:this={container}
      style="max-height: {maxHeight};"
      class="grid gap-4 overflow-hidden transition-[max-height] duration-500 ease-in-out grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {#each images as image}
        <div
          class="group relative cursor-pointer"
          on:click={() => (modalImage = image)}
        >
          <img
            src={image.src}
            alt={image.caption}
            loading="eager"
            class="w-full h-64 object-cover rounded-xl shadow transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"
          >
            {image.caption}
          </div>
        </div>
      {/each}
    </div>
  
    {#if !expanded}
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-darker-gray to-transparent opacity-30 pointer-events-none rounded-b-xl"></div>
    {/if}
  
    <div class="flex justify-center mt-4">
      <button
        on:click={toggleExpand}
        class="px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  </div>
  
  <!-- Modal -->
  {#if modalImage}
  <div
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    on:click={closeModal}
  >
    <!-- Modal container centered -->
    <div
      class="relative px-4 w-full flex justify-center"
      on:click|stopPropagation
    >
      <!-- Image wrapper that shrinks to image size -->
      <div class="relative inline-block overflow-hidden rounded-xl max-h-[90vh]">
        <img
          src={modalImage.src}
          alt={modalImage.caption}
          loading="lazy"
          class="object-contain max-h-[90vh] w-auto max-w-full block"
        />

        <!-- Caption OVERLAYED exactly over the image, only as wide as image -->
        <div
          class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm text-center py-2"
        >
          {modalImage.caption}
        </div>

        <!-- Close Button -->
        <button
          class="absolute top-2 right-2 text-white text-6xl font-bold hover:text-red-500 z-10"
          on:click={closeModal}
        >
          ×
        </button>
      </div>
    </div>
  </div>
{/if}