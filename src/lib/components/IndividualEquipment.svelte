<script>
    export let image, header;
    export let price = "";
    export let description = "";
    export let craftdescription = "";
    export let link = "#";
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: flex-start; 
        aspect-ratio: 1 / 1; 
        height: 100%; 
        margin: 10px; 
        text-align: center; 
    }

    .image-container {
        width: 100%;
        max-width: 300px;
        aspect-ratio: 1 / 1;   
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .equipment-image {
        width: 100%;
        height: 100%;
        object-fit: contain;     
        border-radius: 8px;
    }

    .equipment-info {
        text-align: center;
    }

    .equipment-link {
        text-decoration: none;
        color: inherit;
    }

    .equipment-link:hover {
        text-decoration: underline;
    }
</style>

<div class="container">
    <div class="image-container">
        <img class="equipment-image" alt="thumbnail" src={image} />
    </div>
    <div class="equipment-info text-white md:text-3xl text-lg font-bold italic">
        <a href={link} target="_blank" rel="noopener noreferrer" class="equipment-link">
            {header}
        </a>
        <p class="text-green text-right md:ml-5 ml-2 self-start md:text-base text-sm">
            {price}
        </p>
    </div>
    <p class="text-green font-bold md:text-base text-xs">{description}</p>
    <p class="text-orange font-bold md:text-base text-xs whitespace-pre-line pl-4">
        {craftdescription}
    </p>
</div>