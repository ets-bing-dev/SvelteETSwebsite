<!-- for importing 3D models -->

<script>
    // @ts-ignore
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
import "../app.css";
  </script> 



<!-- src/routes/__layout.svelte -->
<head>
  <link href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
</head>
    <!-- svelte-ignore a11y-media-has-caption -->
  <div class="flex justify-center opacity-50 md:scale-90 fixed h-screen w-screen object-cover -z-10">
  <video loop autoplay playsinline disablepictureinpicture muted preload="auto">
      <source src="videos/prusa.mp4" type="video/mp4">
  </video>
  </div>
  <div class="fixed h-screen w-screen bg-background opacity-70 -z-10"></div>

  <Navbar />
  <slot />

<Footer />