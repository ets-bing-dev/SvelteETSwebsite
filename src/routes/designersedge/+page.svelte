<script>
    import Separator from "$lib/components/Separator.svelte";
    const formUrl = "https://forms.gle/HxASYdmcsKcadv9CA";

    // info section details
    let details = [
        { title: "30 HOURS", subtitle: "of designing" },
        { title: "APRIL 2025", subtitle: "5th ~ 6th" },
        { title: "LOCATION", subtitle: "Innovation Lab" },
        { title: "THEME", subtitle: "To be Revealed 🤫" }
    ];

    // info on competition
    let competitionDetails = [
        { 
            title: "Workshops", 
            description: "Blender, CAD, Slicer and more!", 
            logo: "💡"
        },
        { 
            title: "Networking", 
            description: "Connect with other students + alumni speakers", 
            logo: "🤝"
        },
        { 
            title: "Prizes", 
            description: "Complete challenges to earn souvenirs", 
            logo: "🎯"
        },
        { 
            title: "Resume", 
            description: "Add hard & soft skills to your resume!", 
            logo: "📝"
        }
    ];
    
    // faq info
    let faqInfo = [

        {
            question: "What software am I allowed to use?",
            answer: "You are allowed to utilize any software or applications you have access to or that we provide to create your project. However, the usage of any AI generative software or any software alike will restrict your project to only be judged for the AI category."
        },
        {
            question: "What do I need to bring?",
            answer: "All you need to bring is your laptop! The software that we use will be free or provided to you for the competition. Note that some of the software may not run well on older computers so we encourage you to check your computer specifications with the recommended specifications of some software we may be using such as blender."
        },
        {
            question: "Who can participate?",
            answer: "Any Binghamton student of any major and year can participate as long as they’re interested! No prior experience is necessary and we will have a novice and experienced bracket for people to compete in."
        },
        {
            question: "Will there be food?",
            answer: "Yes, there will be food and drinks provided at the venue! We will have catering from establishments in the area."
        },
        {
            question: "Are there registration fees?",
            answer: "This competition is free to attend! Just register using the form above and check in at the venue."
        },

    ];

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
        where Emerging Tech meets Design @ our Designer’s Competition!
    </p>
    
    <!-- Info Section -->
    <div class="flex md:flex-row flex-col gap-10 mt-4 items-center justify-center">
        {#each details as detail}
            <div class="flex flex-col items-center text-center">
                <div class="w-40 h-5 bg-accent-purple rounded-full mb-2"></div>
                <p class="text-green text-2xl font-bold">{detail.title}</p>
                <p class="text-orage text-xl">{detail.subtitle}</p>
            </div>
        {/each}
    </div>
</div>

<Separator />


<div class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32">
    <h2 class="flex md:text-5xl text-2xl w-full items-end custom-height-md md:pt-0 pt-10">About the Competition</h2>
    
    <!-- Card Section -->
    <div class="flex flex-wrap justify-center gap-6 pt-20 -pb-10">
        {#each competitionDetails as detail}
            <div class="bg-gray-200 rounded-2xl p-4 w-64 text-center shadow-lg relative">
                
                <p class="text-off-white text-5xl">{detail.logo}</p>
                
                <!-- Title with Background Rectangle -->
                <div class="relative w-full flex justify-center">
                    <h3 class="text-white font-bold text-xl mt-3 relative z-10 px-2">
                        {detail.title}
                    </h3>
                    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-5/6 h-6 bg-accent-purple rounded-md z-0"></div>
                </div>

                <p class="text-orange text-lg mt-2">{detail.description}</p>
            </div>
        {/each}
    </div>
</div>


<Separator />

<div class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32">
    <h2 class="flex md:text-5xl text-3xl w-full items-end custom-height-md md:pt-0 pt-10">Join the Challenge</h2>

    <!-- Embedded Form -->
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
</div>

<Separator />

<div class = "flex flex-col w-full h-full items-center font-bold font-plex-mono text-white">
    <h1 class = "font-extrabold flex md:text-5xl text-3xl underline">
        FAQ
    </h1>
    <!-- FAQ Section -->
    <div class="flex md:flex-col flex-row mt-4 items-center grid place-items-center">
        {#each faqInfo as info}
            <div class="flex flex-col items-center text-center justify-center md:gap-6 gap-4 md:pt-10 pt-5 md:px-20 px-10">
                <p class="text-green text-2xl font-bold underline">{info.question}</p>
                <p class="text-orange text-xl">{info.answer}</p>
            </div>
        {/each}
    </div>
</div>