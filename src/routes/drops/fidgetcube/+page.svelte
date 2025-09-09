<script lang="ts">
    import Separator from '$lib/components/Separator.svelte';
</script>

<div class="font-plex-mono font-bold flex flex-col items-center justify-center w-screen h-screen text-center text-orange">
    <p class="md:mt-10 md:text-4xl text-2xl">
        Congratulations...
    </p>
    <p class="font-space-grotesk md:text-7xl text-6xl text-lightPurple">
        You found a figet cube!
    </p>
    <video class="vignette md:mt-20 mt-10 rounded-lg md:w-1/4" loop autoplay playsinline disablepictureinpicture muted preload="auto">
            <source src="/videos/fidgetcube.webm" type="video/webm" />
            <source src="/videos/fidgetcube.mp4" type="video/mp4; codecs=hvc1" />
    </video>
    <p class=" md:text-md mt-10 md:text-sm text-xs text-white">
        Want more? For free!? Come visit us...
    </p>
    <p class="md:text-4xl text-xl text-green">
        Binghamton University
    </p>
    <p class="mt-2 md:text-xl text-base">
        4400 Vestal Pkwy E, Binghamton, NY 13902
    </p>
    <a href="https://www.google.com/maps/dir/42.0880827,-75.968653/Computer+Center,+4410+Vestal+Pkwy+E,+Vestal,+NY+13850/@42.0880317,-75.969056,19z/data=!3m1!4b1!4m19!1m8!3m7!1s0x89daeec7ec578a2d:0x47ce8f9b101b368d!2sComputer+Center,+4410+Vestal+Pkwy+E,+Vestal,+NY+13850!3b1!8m2!3d42.08799!4d-75.9685948!16s%2Fg%2F11rp1wx33s!4m9!1m1!4e1!1m5!1m1!1s0x89daeec7ec578a2d:0x47ce8f9b101b368d!2m2!1d-75.9685948!2d42.08799!3e0?entry=ttu&g_ep=EgoyMDI0MDkwMi4wIKXMDSoASAFQAw%3D%3D" 
       class="mt-5 font-plex-mono md:text-2xl text-lg bg-nav-purple rounded-full w-auto h-auto py-2 px-6">
        Get Directions &gt;
    </a>
</div>


<style>
  .vignette {
    -webkit-mask-image: linear-gradient(to top, transparent, black 100%, black 100%, transparent),
                        linear-gradient(to left, transparent, black 100%, black 100%, transparent);
    -webkit-mask-composite: intersect;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;

    mask-image: linear-gradient(to top, transparent, black 25%, black 75%, transparent),
                linear-gradient(to left, transparent, black 10%, black 90%, transparent);
    mask-composite: intersect;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  }
  </style>