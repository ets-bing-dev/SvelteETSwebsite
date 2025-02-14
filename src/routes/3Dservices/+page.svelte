<script>
    import Overview from '$lib/components/Overview.svelte';
    import temp from '$lib/images/new2print.png';
    import PrinterEquipment from '$lib/components/PrinterEquipment.svelte';
    import Separator from '$lib/components/Separator.svelte';
    import AvailableColors from '$lib/components/AvailableColors.svelte';
</script>

<div class="flex flex-col md:h-screen h-full w-screen text-orange px-6 md:px-20">
    <Overview 
        video="/videos/benchyweb.webm"
        header="3D PRINTS OVERVIEW"
        subheaderone="How to Request"
        paragraphone={`1. Have your file in either STL, 3MF, or STEP.
2. Go to <a href="https://my.binghamton.edu/page/ets/home" target="_blank" rel="noopener noreferrer"><u>my binghamton</u></a>
3. Click the blue Submission Form button
4. Fill it out and wait for our email!`}
        subheadertwo="How to Pay"
        paragraphtwo="You don't! This semester, prints are based on a credit system. If you run out of credits, reach out to us with justification to get more!"
    />
</div>

<Separator/>

<div class="h-full w-screen">
    <PrinterEquipment/>
</div>

<Separator/>

<div class="h-full w-screen">
    <AvailableColors/>
</div>

<Separator/>

<div class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32">
    <p class="flex md:text-5xl text-2xl w-full items-end custom-height-md md:pt-0 pt-10">
        New to 3D Printing?
    </p>
    <div class="flex md:flex-row flex-col mt-10">
        <div class="md:hidden flex w-full h-full justify-center mb-10">
            <img class="h-full w-1/2 object-cover" alt="thumbnail" src={temp}/>
        </div>
        <div class="md:w-2/3 w-full h-full">
            <p class="md:text-3xl text-lg">
                Come visit us at the Technology Hub!
            </p>
            <p class="pl-10 text-orange md:text-xl text-base">
                Walk-ins are encouraged! ALL Binghamton University students, staff, and faculty may use our resources!
            </p>
            <p class="mt-5 italic md:text-3xl text-lg">
                Resources
            </p>
            <div class="flex flex-col pl-10 text-orange md:text-xl text-base">
                <a href="https://www.raise3d.com/academy/a-beginners-guide-to-3d-printing/" class="hover:text-link hover:scale-105 transition-all duration-150">1. Guide to 3D Printing - <span class="italic">article</span></a>
                <a href="https://www.youtube.com/watch?v=Vx0Z6LplaMU" class="hover:text-link hover:scale-105 transition-all duration-150">2. What is 3D Printing and How Does it Work? | Mashable Explains - <span class="italic">video</span></a>
                <a href="https://www.thingiverse.com/" class="hover:text-link hover:scale-105 transition-all duration-150">3. Thingiverse - <span class="italic">free 3D models</span></a>
                <a href="https://thangs.com/marketplace/memberships?utm_source=google&utm_medium=cpc&utm_campaign=brandedsearch&gad_source=1&gclid=Cj0KCQjw-5y1BhC-ARIsAAM_oKk_y5xTKj1XS7Q4jkNPeufSiD4RXCrUDuEq7VGglP_jBjbkc6kvxBEaAgMkEALw_wcB" class="hover:text-link hover:scale-105 transition-all duration-150">4. Thangs - <span class="italic">free 3D models</span></a>
            </div>
        </div>
        <div class="md:flex hidden w-1/2 h-full justify-center">
            <img class="h-full w-1/2 object-cover" alt="thumbnail" src={temp}/>
        </div>
    </div>
</div>

