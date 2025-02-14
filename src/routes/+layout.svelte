<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";
</script>

<svelte:head>
  <!-- General Metadata -->
  <title>ETS | Emerging Technology Studio</title>
  <meta name="description" content="Binghamton University's Premiere Makerspace, specializing in 3D Printing (FDM/SLA), 3D Scanning, 3D Modeling, 2D Cutting (Sticker & Vinyl), Augmented & Virtual Reality, and more!" />

  <!-- Open Graph Metadata (Logo and Title Update) -->
  <meta property="og:title" content="ETS | Emerging Technology Studio" />
  <meta property="og:description" content="Start your journey with ETS: 3D printing, crafting, and more at Binghamton University's premier makerspace." />
  <meta property="og:image" content="/static/ets-logo.png" />
  <meta property="og:url" content="https://www.etsbing.tech" />
  <meta property="og:type" content="website" />

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<!-- Add FontAwesome Icons -->
<head>
  <link href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
</head>

<!-- Background Video -->
<div class="flex justify-center opacity-50 md:scale-90 fixed h-screen w-screen object-cover -z-10">
  <video loop autoplay playsinline disablepictureinpicture muted preload="auto">
    <source src="videos/prusa.mp4" type="video/mp4">
  </video>
</div>
<div class="fixed h-screen w-screen bg-background opacity-70 -z-10"></div>

<!-- Navbar and Footer -->
<Navbar />
<slot />
<Footer />