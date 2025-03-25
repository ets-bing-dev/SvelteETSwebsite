<script>
	import craft from '$lib/images/cricut.png';
  import craftSquare from '$lib/images/cricutSquare.png';
  import printer from '$lib/images/printer.jpg';
  import vr from '$lib/images/vr.jpg';
  import vrSquare from '$lib/images/vrSquare.png';
  import HomepageCard from '$lib/components/HomepageCard.svelte';
  import HomepageCardMobile from '$lib/components/HomepageCardMobile.svelte';
  import Separator from '$lib/components/Separator.svelte';
  import '@fortawesome/fontawesome-free/css/all.min.css';

  function scrollToNextSection() {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<div class="font-plex-mono font-bold flex flex-col items-center justify-center w-screen h-screen text-center text-orange px-4 md:px-20">
  <p class="mt-10 md:text-4xl text-xl">
    Welcome to the...
  </p>
  <p class="font-space-grotesk md:text-7xl text-3xl">
    Emerging Technology Studio!
  </p>
  <p class="md:mt-40 mt-20 md:text-3xl text-xl text-green">
    Binghamton University's
  </p>
  <p class="mt-2 md:text-3xl text-xl">
    Premier Makerspace.
  </p>
  <!-- <div class="mt-5 font-plex-mono md:text-xl text-lg bg-nav-purple rounded-full w-auto h-auto py-2 px-6">
    Get Started &gt;
  </div> -->

  <button
    on:click={scrollToNextSection}
    class="mt-10 animate-bounce flex items-center justify-center focus:outline-none">
    <i class="fas fa-chevron-down text-orange text-4xl"></i>
  </button>
</div>


<Separator/>

<div id="next-section" class="font-plex-mono flex flex-col h-screen w-screen text-orange">
  <p class="text-white font-bold md:text-4xl text-2xl mb-4 px-4 md:px-20">
    OUR SERVICES
  </p>
  <div class="md:block hidden h-5/6 w-screen">
    <div class="opacity-80 flex md:flex-row flex-col justify-center h-full w-screen items-center space-x-20 text-black font-bold"> 
      <HomepageCard
        image={printer}
        header="3D Printing"
        motto="Think it. Print it."
        one="PLA Printing"
        two="Resin Printing"
        three="Multi-color Printing"
        link="/3Dservices"
        buttonText="Print Now!"
      /> 
      <HomepageCard 
        image={craft}
        header="2D Crafts"
        motto="Craft, Cut, Create!"
        one="Cricut"
        two="Stickers & Iron-on"
        three="CardStock, Vinyl, etc."
        link="/2Dservices"
        buttonText="Craft Now!"
      /> 
      <HomepageCard 
        image={vr}
        header="Technology"
        motto="Immersive Experiences."
        one="Virtual Reality (VR/AR)"
        two="360&#176; Media and Scanning"
        three="Adobe Software"
        link="/technology"
        buttonText="Experience Now!"
      /> 
    </div>
  </div>

  <div class="md:hidden h-full w-screen">
    <div class="opacity-80 flex md:flex-row flex-col justify-center h-full w-screen items-center space-y-10 text-black font-bold">
      <HomepageCardMobile
        image={printer}
        header="3D Printing"
        motto="Think it. Print it."
        one="PLA Printing"
        two="Resin Printing"
        three="Multi-color Printing"
        link="/3Dservices"
        buttonText="Print Now!"
      /> 
      <HomepageCardMobile
        image={craftSquare}
        header="2D Crafts"
        motto="Craft, Cut, Create!"
        one="Cricut"
        two="Stickers & Iron-on"
        three="CardStock, Vinyl, etc."
        link="/2Dservices"
        buttonText="Craft Now!"
      /> 
      <HomepageCardMobile
        image={vrSquare}
        header="Technology"
        motto="Immersive Experiences."
        one="Virtual Reality (VR/AR)"
        two="360&#176; Media and Scanning"
        three="Adobe Software"
        link="/technology"
        buttonText="Experience Now!"
      /> 
    </div>
  </div>

</div>