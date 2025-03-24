<script>
     import Separator from "$lib/components/Separator.svelte";
     import About from "$lib/components/About.svelte";
     import temp from '$lib/images/temp.png';
</script>

<!-- Header Section -->
<div class="flex flex-col h-screen w-screen text-orange text-center font-bold items-center justify-center">
   <p class="md:text-3xl text-xl">
        The ETS is student run...
   </p>
   <p class="font-space-grotesk md:text-7xl text-4xl font-extrabold">
        Meet Our Team!
   </p> 
   <p class="md:mt-40 mt-20 md:text-2xl text-lg text-green">
        Think it. Print it. Create it.
   </p>
   <p class="md:text-xl text-base md:px-64 px-10">
    Here at the ETS, we have a diversified set of students working to provide you with the best services. Disciplines range from Mechanical Engineering to Computer Engineering & Science, to Art. Our goal is to embrace everyone's creativity and interests. So don't be shy, come on in and start creating your very own projects!
   </p>
</div>

<Separator />

<!-- Employees Section -->
<div class="h-full w-screen grid md:grid-cols-3 grid-cols-2 md:px-20 px-5">
     <About
     image="/images/etsvan.png"
     name="Van James Huynh"
     position="Director"
     major="Industrial Systems Engineering"
     year="Senior"
     />
     <About
     image="/images/etspaulito.png"
     name="Paul Ampadu"
     position="ML/Computer Graphics Specialist"
     major="Computer Science"
     year="Senior"
     />
     <About
     image="/images/etswinnie.png"
     name="Winnie Yong"
     position="Cricut Specialist"
     major="Computer Science"
     year="Senior"
     />
     <About
     image="/images/etsrachel.png"
     name="Rachel Koppelman"
     position="Materials Specialist"
     major="Mechanical Engineering"
     year="Senior"
     />
     <About
     image="/images/etssam.png"
     name="Sam Abramson"
     position="Robotics Specialist"
     major="Mechanical Engineering"
     year="Senior"
     />
     <About
     image="/images/etsjake.png"
     name="Jake Digiugno"
     position="3D Engine Specialist"
     major="Computer Science"
     year="Junior"
     />
     <About
     image="/images/etstim.png"
     name="Timothy Tran"
     position="3D Design Specialist"
     major="Mechanical Engineering"
     year="Sophomore"
     />
     <About
     image="/images/etserick.png"
     name="Erick Palka"
     position="Automotive Specialist"
     major="Mechanical Engineering"
     year="Sophomore"
     />
     <About
     image="/images/etsnathan.png"
     name="Nathan Teig"
     position="Manufacturing Specialist"
     major="Mechanical Engineering"
     year="Junior"
     />
     <About
     image="/images/etsstella.png"
     name="Stella Hung"
     position="2D Design Specialist"
     major="Graphic Design"
     year="Junior"
     />
     <About
     image="/images/etsjo.png"
     name="Joanna Fishman"
     position="Media Specialist"
     major="Cinema"
     year="Senior"
     />
     <About
     image="/images/etsdavid.png"
     name="David Poncé"
     position="A.I. Specialist"
     major="Computer Science"
     year="Junior"
     />
</div>

<Separator />

<div class="h-full w-screen grid md:grid-cols-3 grid-cols-2 md:px-20 px-5">
     <About
     image="/images/default.png"
     name="Bianna Chen"
     position="Technical Intern"
     major="Computer Science"
     year="Freshman"
     />
     <About
     image="/images/etsrebecca.png"
     name="Rebecca Jang"
     position="Technical Intern"
     major="Mechanical Engineering"
     year="Sophmore"
     />
     <About
     image="/images/etsdaniel.png"
     name="Daniel Zheng"
     position="Technical Intern"
     major="Computer Science"
     year="Freshman"
     />
</div>

<Separator />

<!-- Faculty Advisor Section -->
<div class="font-plex-mono font-bold h-full w-screen md:px-20 px-5">
     <p class="md:text-4xl text-xl text-white italic mt-10">
          Faculty Advisor:
     </p>
     <div class="flex flex-row items-center space-x-5 mt-5">
    <!-- Faculty Advisor Photo -->
    <img 
        src="/images/etsgary.jpg" 
        alt="Faculty Advisor" 
        class="w-32 h-32 object-cover shadow-lg"
    />
    <!-- Faculty Advisor Info -->
    <div>
        <p class="md:text-2xl text-lg text-white">Gary Dewey</p>
        <p class="text-white md:text-sm text-xs">
            Guiding the ETS with expertise in technology and innovation.
        </p>
    </div>
</div>

</div>

<Separator />

<!-- Alumni Section -->
<div class="font-plex-mono font-bold h-full w-screen md:px-20 px-5">
     <p class="md:text-4xl text-xl text-white italic">
          Alumni:
     </p>
     <div class="md:flex md:flex-row md:space-y-0 grid grid-cols-2 space-y-5 justify-between md:text-base text-xs text-orange whitespace-pre-line md:px-20 mt-5">
     <p>
          Brian Min
          Mike Rosenberg
          Benjamin Neubardt
          Jacob Richman
     </p>
     <p>
          Cammie Summers
          David Demetros
          James Kaminski
     </p>
     <p>
          Lance Cheng
          Jasmin Zelaya
          Ali Merali
          Nathaniel Sehati
     </p>
     <p>
          Damian Rode
          Ameen Kunnathu
          Catherine Tai
          Joe Donaghy
     </p>
     </div>
</div>