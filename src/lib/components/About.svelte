<script>
    export let name, position, major, year;
</script>
<div class="h-full w-full items-center text-center font-plex-mono md:font-bold font-normal">
    <div class="h-full w-full flex flex-col items-center">
        <div class="text-white md:text-3xl text-xs font-bold">
            {name}
        </div>
        <div class="text-green md:text-xl text-xs">
            {position}
        </div>
        <div class="text-orange md:text-lg text-xs">
            {major}
        </div>
        <div class="text-lightPurple md:text-base text-xs">
            {year}
        </div>
    </div>
</div>
<style>
    img.thumbnail {
        width: 50%;
        height: auto;
        object-fit: cover;
        border-radius: 5%;
    }
</style>