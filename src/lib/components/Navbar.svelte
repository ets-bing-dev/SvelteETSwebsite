<script lang="ts">
    import { fly } from 'svelte/transition';
    import { createDropdownMenu, melt } from '@melt-ui/svelte';
    import Dropdown from "./Dropdown.svelte";
    import logo from '$lib/images/ETSLogo.png';

    //hamburger menu state
    let isMenuOpen = false;

    //dropdown for "Services"
    const {
        elements: { menu, item, trigger },
        states: { open },
    } = createDropdownMenu({
        forceVisible: true, 
        loop: true,  
    });

    function toggleHamburger() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav class="bg-black backdrop-blur-xl bg-opacity-10 hover:bg-opacity-100 transition-all duration-500 md:fixed w-screen shadow-md z-20 px-6 md:px-8">
    <div class="font-plex-mono flex md:px-6 px-2 h-[4.5rem] items-center justify-between">
        <!-- Logo Section -->
        <div class="flex flex-row justify-start items-center">
            <a href="/" class="flex items-center">
                <img src={logo} alt="ETS Logo" class="md:h-12 h-8">
            </a>
        </div>

        <!-- Hamburger Menu Button -->
        <button
            class="md:hidden text-orange text-2xl focus:outline-none"
            on:click={toggleHamburger}>
            <i class={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex flex-row justify-end w-3/4">
            <div class="flex flex-row items-center text-orange md:text-lg text-s space-x-5 md:space-x-10">
                <Dropdown />
                <a href="/designersedge" class="hover:underline">Designer's Edge</a>
                <a href="/workshop" class="hover:underline">Workshops</a>
                <a href="/about" class="hover:underline">About</a>
                <a href="/location" class="hover:underline">Location</a>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
        <div
            class="absolute top-[4.5rem] left-0 w-full bg-accent-dark text-white z-50 p-4 shadow-lg"
            transition:fly={{ y: -20, duration: 300 }}
        >
            <div class="flex flex-col space-y-3">
                <!-- Services Dropdown -->
                <div>
                    <button
                        use:melt={$trigger}
                        class="w-full text-left text-orange font-bold flex justify-between items-center hover:bg-accent-purple px-2 py-2 rounded"
                    >
                        Services
                        <i class={`fas ${$open ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {#if $open}
                        <div    use:melt={$menu} 
                                class="z-50 font-plex-mono pl-4 flex flex-col space-y-2 text-sm text-gray bg-accent-purple rounded-lg shadow-md mt-2  w-auto h-auto p-4 outline outline-1"
                                transition:fly={{ y: -10, duration: 200 }}>
                            <a  href="/3Dservices" 
                                use:melt={$item} 
                                class="hover:bg-accent-purple hover:text-gray px-2 py-1 rounded">
                                3D Printing
                            </a>
                            <hr class="text-accent-dark my-2">
                            <a  href="/2Dservices" 
                                use:melt={$item} 
                                class="hover:bg-accent-purple hover:text-gray px-2 py-1 rounded">
                                2D Cutting
                            </a>
                            <hr class="text-accent-dark my-2">
                            <a  href="/technology" 
                                use:melt={$item} 
                                class="hover:bg-accent-purple hover:text-gray px-2 py-1 rounded">
                                Other Technology
                            </a>
                        </div>
                    {/if}
                </div>

                <a href="/designersedge" class="text-orange font-bold px-2 py-2 hover:bg-gray-700 rounded">
                    Designer's Edge
                </a>

                <a href="/workshop" class="text-orange font-bold px-2 py-2 hover:bg-gray-700 rounded">
                    Workshops
                </a>
        
                <a href="/about" class="text-orange font-bold px-2 py-2 hover:bg-gray-700 rounded">
                    About
                </a>

                <a href="/location" class="text-orange font-bold px-2 py-2 hover:bg-gray-700 rounded">
                    Location
                </a>
            </div>
        </div>
    {/if}
</nav>