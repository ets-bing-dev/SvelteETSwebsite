<script>


  export let header, motto, one, two, three, link, buttonText;
  export let image = '';
</script>

<div class="bg-accent-dark rounded-3xl text-center justify-between w-10/12 h-1/4 flex flex-row">
    <div class="h-full w-7/12 flex flex-col justify-start">
        <img    class="rounded-l-3xl border-1 justify-center border-black flex h-full w-full object-cover" 
                alt="thumbnail" 
                src={image}
        />
    </div>
    <div class="h-full w-1/2 flex flex-col justify-center space-y-2 items-center">
        <div class="flex flex-col w-full py-2">
            <p class="text-xl text-white">{header}</p>
            <p class="text-xs italic font-bold text-gray">{motto}</p>
        </div>
        <div class="py-2 text-white flex flex-col text-xs">
            <p>{one}</p>
            <p>{two}</p>
            <p>{three}</p>
        </div>
        <div class="font-plex-mono text-orange text-xs font-bold bg-accent-purple w-fit rounded-full p-2">
            <a href={link} class="hover:underline">
              {buttonText}
            </a>
          </div>
    </div>
</div>
