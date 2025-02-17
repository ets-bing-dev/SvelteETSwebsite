<script>
    import Separator from "$lib/components/Separator.svelte";
    const formUrl = "https://forms.gle/HxASYdmcsKcadv9CA";
</script>

<!-- Header Section -->
<div class="flex flex-col h-screen w-screen text-orange text-center font-bold items-center justify-center">
    <p class="md:text-3xl text-xl">
        join us at...
    </p>
    <p class="font-space-grotesk md:text-7xl text-4xl font-extrabold">
        Designer's Edge!
    </p> 
    <p class="md:mt-40 mt-20 md:text-2xl text-lg text-green">
        Designer's competition from April 4th~6th!
    </p>
    <p class="md:text-xl text-base md:px-64 px-10">
        The competition is a 24 - 30 hour event where you will be tasked to design a product centered around a theme and create a presentation to compete with for awards and prizes in different categories!
We plan to host workshops and events where you can learn about different software and get hands on experience with emerging technology, such as Blender workshops, and connect with alumni in the industry throughout the event!
    </p>
</div>

<Separator />

<!-- Embedded Form -->
<div style="width: 100%; max-width: 800px; margin: auto;">
    <iframe 
      src={formUrl}
      width="100%"
      height="600"
      style="border: none;"
      allowfullscreen
      title="Google Form"
    >
      Loading…
    </iframe>
</div>
  