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
     name="Rebecca Jang"
     position="External Director"
     major="Mechanical Engineering"
     year="Senior"
     />

     <About
     name="Samuel Ashkenas-Demarco"
     position="Internal Director"
     major="Mechanical Engineering"
     year="Junior"
     />

     <About
     name="Erick Palka"
     position="Technician"
     major="Mechanical Engineering"
     year="Senior"
     />

     <About
     name="Timothy Tran"
     position="Technician"
     major="Mechanical Engineering"
     year="Senior"
     />
     
     <About
     name="Benjamin Edgar-McNearney"
     position="Technician"
     major="Electrical Engineering"
     year="Junior"
     />

     <About
     name="Bianna Chen"
     position="Technician"
     major="Computer Science"
     year="Junior"
     />
     
     <About
     name="Josh Song"
     position="Technician"
     major="Mechanical Engineering"
     year="Junior"
     />

     <About
     name="Ishmael Lallmahamad"
     position="Technician"
     major="Computer Science"
     year="Sophomore"
     />

     <About
     name="Raymond Chen"
     position="Marketing"
     major="Systems Science and Industrial Engineering"
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
     <div class="md:flex md:flex-row md:space-y-0 grid grid-cols-2 justify-between md:text-base text-xs text-orange whitespace-pre-line md:px-20 mt-5">
     <p>
          Jake Digiugno
          Nathan Teig
          David Ponce
          Leah Chow
     </p>
     <p>
          Van James Huynh
          Winnie Yong
          Rachel Koppelman
          Paul Ampadu
          Sam Abramson
          Stella Hung
          Joanna Fishman
     </p>
     <p>
          Brian Min
          Mike Rosenberg
          Benjamin Neubardt
          Jacob Richman
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