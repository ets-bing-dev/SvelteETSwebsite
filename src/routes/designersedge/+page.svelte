<script>
  import Separator from "$lib/components/Separator.svelte";
  import ImageGallery from "$lib/components/ImageGallery.svelte";
  const formUrl = "https://forms.gle/HxASYdmcsKcadv9CA";
  const pcUrl = "https://forms.gle/epoRDHjzYsA8v5Z66";

  // info section details
  let details = [
    { title: "30 HOURS", subtitle: "of designing" },
    { title: "APRIL 2025", subtitle: "5th ~ 6th" },
    { title: "LOCATION", subtitle: "Innovation Lab" },
    { title: "THEME", subtitle: "Connections" },
  ];

  let specialThanks = [
    { name: "JAMES PITARRESI" },
    { name: "SHANA M. WHITE" },
    { name: "ERIN CODY" },
    { name: "CHRISTOPHER ROBBINS" },
    { name: "NICOLE ALFARANO" },
    { name: "YADID ORLOW" },
  ];

  let ETSTeam = [
    { name: "GARY DEWEY" },
    { name: "VAN JAMES HUYNH" },
    { name: "PAUL AMPADU" },
    { name: "WINNE YONG" },
    { name: "RACHEL KOPPELMAN" },
    { name: "SAM ABRAMSON" },
    { name: "JAKE DIGIUGNO" },
    { name: "TIMOTHY TRAN" },
    { name: "ERICK PALKA" },
    { name: "NATHAN TEIG" },
    { name: "STELLA HUNG" },
    { name: "DAVID PONCÉ" },
  ];

  const images = [
    { path: "/images/DE2025Winners/GroupWinners.png", title: "Winners" },
    { path: "/images/DE2025Winners/3DWinners.png", title: "Best 3D Winners" },
    { path: "/images/DE2025Winners/2DWinners.png", title: "Best 2D Winners" },
    {
      path: "/images/DE2025Winners/MMWinners.png",
      title: "Best Mixed Media Winners",
    },
    {
      path: "/images/DE2025Winners/CarWinners.png",
      title: "Best Car / Vehicle Winners",
    },
    {
      path: "/images/DE2025Winners/UIUXWinners.png",
      title: "Best UI / UX Winners",
    },
    {
      path: "/images/DE2025Winners/BestAI.jpg",
      title: "Best AI Winner",
    },
    // add your image paths here
  ];

  // info on competition
  let competitionDetails = [
    {
      title: "Workshops",
      description: "Blender, CAD, Slicer and more!",
      logo: "💡",
    },
    {
      title: "Networking",
      description: "Connect with other students + alumni speakers",
      logo: "🤝",
    },
    {
      title: "Prizes",
      description: "Complete challenges to earn souvenirs",
      logo: "🎯",
    },
    {
      title: "Resume",
      description: "Add hard & soft skills to your resume!",
      logo: "📝",
    },
  ];

  // faq info
  let faqInfo = [
    {
      question: "What software am I allowed to use?",
      answer:
        "You are allowed to utilize any software or applications you have access to or that we provide to create your project. However, the usage of any AI generative software or any software alike will restrict your project to only be judged for the AI category.",
    },
    {
      question: "What do I need to bring?",
      answer:
        "All you need to bring is your laptop! The software that we use will be free or provided to you for the competition. Note that some of the software may not run well on older computers so we encourage you to check your computer specifications with the recommended specifications of some software we may be using such as blender.",
    },
    {
      question: "Who can participate?",
      answer:
        "Any Binghamton student of any major and year can participate as long as they’re interested! No prior experience is necessary and we will have a novice and experienced bracket for people to compete in.",
    },
    {
      question: "Will there be food?",
      answer:
        "Yes, there will be food and drinks provided at the venue! We will have catering from establishments in the area.",
    },
    {
      question: "Are there registration fees?",
      answer:
        "This competition is free to attend! Just register using the form above and check in at the venue.",
    },
  ];
</script>

<!-- Header Section -->
<div
  class="flex flex-col h-screen w-screen text-orange text-center font-bold items-center justify-center"
>
  <p class="md:text-3xl text-xl">join us at...</p>
  <p class="font-space-grotesk md:text-7xl text-4xl font-extrabold">
    Designer's Edge!
  </p>
  <p class="md:mt-40 mt-20 md:text-2xl text-lg text-green">
    where Emerging Tech meets Design @ our Designer’s Competition!
  </p>

  <!-- Info Section -->
  <div
    class="flex md:flex-row flex-col gap-10 mt-4 items-center justify-center"
  >
    {#each details as detail}
      <div class="flex flex-col items-center text-center">
        <div class="w-40 h-5 bg-accent-purple rounded-full mb-2"></div>
        <p class="text-green text-2xl font-bold">{detail.title}</p>
        <p class="text-orage text-xl">{detail.subtitle}</p>
      </div>
    {/each}
  </div>
</div>

<!-- <Separator />
  
  <div class="flex flex-row">
    <div
      class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32"
    >
      <h2
        class="flex md:text-5xl text-3xl w-full items-end custom-height-md md:pt-0 pt-10"
      >
        Progress Check
      </h2>
      <p
        class="flex md:text-xl text-3xl w-full items-end custom-height-md md:pt-0 pt-10"
      >
        to be completed before Saturday 7pm!
      </p>
      <p>
        <a
          href="https://forms.gle/y34ddmxinomtze7g7"
          class="hover:text-link hover:scale-105 transition-all underline duration-150"
        >
          Click here for the Progress Check form</a
        >
      </p>
    </div>
    <div
      class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32"
    >
      <h2
        class="flex md:text-5xl text-3xl w-full items-end custom-height-md md:pt-0 pt-10"
      >
        Final Submission Form
      </h2>
      <p
        class="flex md:text-xl text-3xl w-full items-end custom-height-md md:pt-0 pt-10"
      >
        to be completed before Sunday 4pm!
      </p>
      <p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdtDJXa-UmSSz2qHoJMrl8caecxVLbi6k9Tos5h8Y9k-9YqnA/viewform?usp=header"
          class="hover:text-link hover:scale-105 transition-all underline duration-150"
        >
          Click here for the Submission Form</a
        >
      </p>
    </div>
  </div> -->

<Separator />

<div
  class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32"
>
  <h2
    class="flex md:text-5xl text-2xl w-full items-end md:pt-0 pt-10"
  >
    About the Competition
  </h2>

  <!-- Card Section -->
  <div class="flex flex-wrap justify-center gap-6 pt-20 -pb-10">
    {#each competitionDetails as detail}
      <div
        class="bg-gray-200 rounded-2xl p-4 w-64 text-center shadow-lg relative"
      >
        <p class="text-off-white text-5xl">{detail.logo}</p>

        <!-- Title with Background Rectangle -->
        <div class="relative w-full flex justify-center">
          <h3 class="text-white font-bold text-xl mt-3 relative z-10 px-2">
            {detail.title}
          </h3>
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-5/6 h-6 bg-accent-purple rounded-md z-0"
          ></div>
        </div>

        <p class="text-orange font-normal text-lg mt-2">{detail.description}</p>
      </div>
    {/each}
  </div>

  <!-- Card Section -->
  <div class="flex grid md:grid-cols-3 grid-cols-1 justify-center mt-10 pl-9 gap-6">
    <img
      src="/designersedge/info1.png"
      alt="info"
      class="w-full max-w-sm rounded-md shadow-md"
    />
    <img
      src="/designersedge/info2.png"
      alt="info"
      class="w-full max-w-sm rounded-md shadow-md"
    />
    <img
      src="/designersedge/info3.png"
      alt="info"
      class="w-full max-w-sm rounded-md shadow-md"
    />
  </div>
  <Separator />
  <h3
    class="flex md:text-5xl text-2xl w-full items-end "
  >
    Award Recipients
  </h3>

  <div class="p-6">
    <ImageGallery {images} />
  </div>
</div>

<Separator />

<div
  class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5"
>
  <h2 class="flex md:text-5xl text-3xl w-full items-end md:pt-0 pt-10">
    Sponsors
  </h2>

  <!-- collab imgs -->
  <div class="flex grid md:grid-cols-3 grid-cols-1 justify-items-center mt-10 p-15 gap-7 opacity-80 glowing-image">
    <img
      src="/designersedge/sponsor1.png"
      alt="sponsor"
      class="h-full max-w-xs rounded-xl shadow-md"
    />
    <img
      src="/designersedge/sponsor2.png"
      alt="sponsor"
      class="h-full max-w-xs rounded-xl shadow-md"
    />
    <img
      src="/designersedge/sponsor3.png"
      alt="sponsor"
      class="h-full max-w-xs rounded-xl shadow-md"
    />
  </div>
  <Separator />
  <h2 class="flex md:text-5xl text-3xl w-full items-end md:pt-0 pt-10">
    Collaborators
  </h2>

  <!-- collab imgs -->
  <div class="flex grid md:grid-cols-3 grid-cols-1 justify-items-center mt-10 p-15 gap-7 opacity-80 glowing-image">
    <img
      src="/designersedge/collab1.png"
      alt="collab"
      class="h-full max-w-xs rounded-xl shadow-md"
    />
    <img
      src="/designersedge/collab2.png"
      alt="collab"
      class="h-full max-w-xs rounded-xl shadow-md"
    />
    <img
      src="/designersedge/collab3.png"
      alt="collab"
      class="h-full max-w-xs rounded-xl shadow-md"
    />
  </div>
  <div class="flex grid md:grid-cols-2 grid-cols-1 justify-items-center mt-10 p-15 gap-7 opacity-80 glowing-image">
    <img
      src="/designersedge/collab4.png"
      alt="collab"
      class="h-full max-w-xs rounded-xl shadow-md"
    />
    <img
      src="/designersedge/collab5.png"
      alt="collab"
      class="h-full max-w-xs rounded-xl shadow-md"
    />
  </div>
  <Separator />
  <h2 class="flex md:text-5xl text-3xl w-full items-end md:pt-0 pt-10">
    Special Thanks
  </h2>

  <div class="flex justify-center mt-10 p-15 gap-7 opacity-80 glowing-image">
    <img
      src="/designersedge/thanks1.png"
      alt="collab"
      class="h-full max-w-xs rounded-xl shadow-md"
    />
  </div>
  <div
    class="white-space: pre-line grid md:grid-cols-1 grid-cols-1 md:px-20 px-5 md:pt-10 pt-5"
  >
    <h3 class="flex md:text-3xl text-2xl justify-self-center">
      THE HACKBU TEAM
    </h3>
  </div>
  <Separator />
  <h3 class="flex md:text-3xl text-2xl">
    Organizers
  </h3>
  <div class="flex justify-center mt-10 p-15 gap-7 opacity-80 glowing-image">
    <img
      src="images/DE2025Winners/Organizers.jpg"
      alt="collab"
      class="h-full max-w-md rounded-xl shadow-md"
    />
  </div>
  <div
    class="white-space: pre-line grid md:grid-cols-1 grid-cols-1 md:px-20 px-5 md:pt-10 pt-5"
  >
    <h3 class="flex md:text-3xl text-2xl justify-self-center">
      Daniel and Joanna
    </h3>
  </div>
  <Separator />
  <h3 class="flex md:text-3xl text-2xl w-full items-end md:pt-0 pt-10">
    Faculty/Contributors
  </h3>
  <div
    class="white-space: pre-line grid md:grid-cols-2 grid-cols-2 md:px-20 px-5 md:pt-10 pt-5"
  >
    {#each specialThanks as sT}
      <p class="justify-self-center text-xl">{sT.name}</p>
    {/each}
  </div>
  <Separator />
  <h3 class="flex md:text-3xl text-2xl w-full items-end md:pt-0 pt-10">
    The ETS Team
  </h3>
  <div
    class="white-space: pre-line grid md:grid-cols-2 grid-cols-2 md:px-20 px-5 md:pt-10 pt-5"
  >
    {#each ETSTeam as ets}
      <p class="justify-self-center text-xl">{ets.name}</p>
    {/each}
  </div>
</div>

<Separator />

<div
  class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32"
>
  <h2
    class="flex md:text-5xl text-3xl w-full items-end custom-height-md md:pt-0 pt-10"
  >
    Workshop Posters
  </h2>

  <!-- collab imgs -->
  <div class="flex grid md:grid-cols-4 grid-cols-1 justify-items-center mt-10 p-15 gap-6 dropShadow-glow">
    <img
      src="/designersedge/poster1.jpg"
      alt="poster"
      class="w-full max-w-xs h-auto aspect-[4/5]  rounded-xl shadow-md"
    />
    <img
      src="/designersedge/poster2.png"
      alt="poster"
      class="w-full max-w-xs h-auto aspect-[4/5] rounded-xl shadow-md"
    />
    <img
      src="/designersedge/poster3.png"
      alt="poster"
      class="w-full max-w-xs h-auto aspect-[4/5] rounded-xl shadow-md"
    />
    <img
      src="/designersedge/poster4.PNG"
      alt="poster"
      class="w-full max-w-xs h-auto aspect-[4/5] rounded-xl shadow-md"
    />
  </div>
</div>

<div
  class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32"
>
<h3
      class="flex md:text-5xl text-2xl w-full items-end custom-height-md md:pt-0 pt-10"
    >
      Designer's Edge 2025 Recap
    </h3>
  <div
    style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
border-radius: 8px; will-change: transform;"
  >
    <iframe
      loading="lazy"
      style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
      src="https://www.canva.com/design/DAGk6sy-Lug/Zjlboh8yPk5hRFDQ7l4fAw/view?embed"
      allowfullscreen="allowfullscreen"
      allow="fullscreen"
    >
    </iframe>
  </div>
</div>

<!-- <div
  class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32"
>
  <h3
    class="flex md:text-5xl text-2xl w-full items-end custom-height-md md:pt-0 pt-10"
  >
    Opening Ceremony Slides
  </h3>

  <div class="ml-10 md:mt-16 justify-left flex w-screen h-screen">
        <iframe
          title="opening ceremony"
          src="https://docs.google.com/presentation/d/e/2PACX-1vThxsxuF-InnZ60ef3LGzN8Qe0rYRURhWB0SDZAU6WF1_ZwycjYe6YOnxygaPPb9Q/embed?start=false&loop=true&delayms=3000"
          frameborder="0"
          width="85%"
          height="75%"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        >
        </iframe>
      </div> -->

  <!--  <div
    style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
     padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
     border-radius: 8px; will-change: transform;"
  >
    <iframe
      title="opening ceremony"
      loading="lazy"
      style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
      src="https://www.canva.com/design/DAGjmnqpS7Q/4O2Nc53I9s46sermFeRHlg/view?embed"
      allowfullscreen="allowfullscreen"
      allow="fullscreen"
    >
    </iframe>
  </div> -->
  <!-- <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGjmnqpS7Q&#x2F;4O2Nc53I9s46sermFeRHlg&#x2F;view?utm_content=DAGjmnqpS7Q&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener">Opening Ceremony Slides</a
      >
      by Emerging Technology Studio -->

  <!--  <h3
    class="flex md:text-5xl text-2xl w-full items-end custom-height-md md:pt-0 pt-10"
  >
    Closing Ceremony Slides
  </h3> -->

  <!-- <div class="ml-10 md:mt-16 justify-left flex w-screen h-screen">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vSI95x9tOjsHeaQrNtOgPKYvVdkuSa27vHzqractu66PZ6C2Zq1UXQwrSS8KgBsKQ/pubembed?start=false&loop=true&delayms=3000"
          frameborder="0"
          width="85%"
          height="75%"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        >
        </iframe>
      </div> -->
  <!--  <div
    style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
     padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
     border-radius: 8px; will-change: transform;"
  >
    <iframe
      title="closing ceremony"
      loading="lazy"
      style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
      src="https://www.canva.com/design/DAGjsg3ZoLE/pr3pEnmg3L3y1aVS3lLBkw/view?embed"
      allowfullscreen="allowfullscreen"
      allow="fullscreen"
    >
    </iframe>
  </div> -->
  <!-- <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGjsg3ZoLE&#x2F;pr3pEnmg3L3y1aVS3lLBkw&#x2F;view?utm_content=DAGjsg3ZoLE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener">Closing Ceremony Slides</a
      > by Emerging Technology Studio
</div>-->

<!-- Registration Form -->

<!-- <Separator />
    
    <div
      class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32"
    >
      <h2
        class="flex md:text-5xl text-3xl w-full items-end custom-height-md md:pt-0 pt-10"
      >
        Join the Challenge
      </h2>
    
      <div class="mt-10 md:mt-16 w-full flex justify-center">
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
      </div>
    </div> -->

<Separator />

<div
  class="flex flex-col w-screen h-full font-plex-mono text-white font-normal md:px-20 px-5 pb-32"
>
  <h2
    class="font-extrabold flex md:text-5xl text-3xl w-full items-end custom-height-md md:pt-0 pt-10"
  >
    FAQ
  </h2>
  <!-- FAQ Section -->
  <div class="flex grid md:grid-cols-1 grid-cols-1 justify-items-centerfont-normal flex md:flex-col flex-row mt-4">
    {#each faqInfo as info}
      <div class="flex flex-col md:gap-6 gap-4 md:pt-10 pt-5 md:px-20 px-10">
        <p class="text-green text-2xl font-bold">{info.question}</p>
        <p class="text-orange font-normal text-lg text-left">{info.answer}</p>
      </div>
    {/each}
  </div>
</div>
