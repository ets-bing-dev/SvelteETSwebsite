<script>
    const colors = 
    [
    ['#000000','Black'],
    ['#616378','Grey'],
    ['#9e9c95','Silver'],
    ['#FFFFFF','White'],
    ['#F3C79F','Tan'],
    ['#573A28','Brown'],
    ['#E82201','Red'],
    ['#FF9B0F','Orange'],
    ['#E1B304','Gold'],
    ['#F9E504','Yellow'],
    ['#6CCB33','Lime Green'],
    ['#8C9856','Olive Green'],
    ['#62CAE3','Light Blue'],
    ['#00006B','Blue'],
    ['#6103A0','Purple'],
    ['#FF6DA1','Pink'],
    ];
</script>


<div class="font-plex-mono text-white flex flex-col md:px-20">
    <div class="flex flex-col items-start md:text-5xl text-2xl font-bold px-5 w-full pt-10 custom-height-md">
        <p>Available Colors</p>
        <p class="text-xl">(PLA!)</p>
    </div>
    <div class="flex flex-row flex-wrap items-center justify-center pt-5">
        {#each colors as [color,name]}
        <div class="hover:scale-110 transition ease-in-out">
            <div class="md:w-32 w-16 md:h-32 h-16 md:mx-8 mx-4 mt-4 mb-2 rounded-lg border-white border-2 transition ease-linear hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)]" style="background-color: {color};"></div>
            <div class="text-center font-bold md:text-md text-xs">{name}</div>
        </div>
        {/each}
    </div>
</div>