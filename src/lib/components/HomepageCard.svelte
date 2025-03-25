<script>
	import craft from '$lib/images/cricut.png';
  import printer from '$lib/images/printer.jpg';
  import vr from '$lib/images/vr.jpg';

  export let header, motto, one, two, three, link, buttonText;
  export let image = '';
</script>

<div class="bg-accent-dark rounded-3xl text-center items-center justify-between w-1/4 h-3/4 pb-5 flex flex-col">
  <div class="flex flex-col items-center h-fit w-full">
    <img class="border-1 border-black rounded-t-3xl justify-center " alt="thumbnail" src={image}/>
  </div>
    <div>
      <p class="text-4xl text-white">{header}</p>
      <p class="text-2xl italic font-bold text-gray">{motto}</p>
    </div>
    <div>
      <div class="text-white flex flex-col text-xl">
        <p>{one}</p>
        <p>{two}</p>
        <p>{three}</p>
      </div>
    </div>
    <div class="flex font-plex-mono text-orange text-xl font-bold bg-accent-purple w-fit rounded-full p-2 px-6 items-center justify-center">
      <a href={link} class="hover:underline">
        {buttonText}
      </a>
    </div>
</div>

