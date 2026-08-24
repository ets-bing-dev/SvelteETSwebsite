<script>
    import Overview from '$lib/components/Overview.svelte';
    import Separator from '$lib/components/Separator.svelte';
    import IndividualEquipment from "$lib/components/IndividualEquipment.svelte";
    import sticker from '$lib/images/sticker.png';
    import cardstock from '$lib/images/cardstock.png';
    import ironon from '$lib/images/iron-on.png';
    import vinyl from '$lib/images/vinyl.png';
    import acrylic from '$lib/images/acrylic.png';
    import other from '$lib/images/other-materials.png';
</script>

<div class="flex flex-col md:h-screen h-full w-screen text-orange">
    <Overview
    video = 'videos/cricutVid.webm' 
    header = "2D CRAFTS OVERVIEW"
    subheaderone = "How to Request"
    paragraphone={`<a href="https://forms.gle/aerNqR662hZXZ7rPA" 
    target="_blank" 
    rel="noopener noreferrer">
    <u>Submit here!</u></a>
    `}
    subheadertwo = "How to Pay"
    paragraphtwo = "You don't! Every week, you can print out one sticker sheet for free. If you would like to do bulk prints, be sure to bring in your own material and we will teach you how to cut the stickers yourself"
    />
</div>

<Separator/>

<div class="grid md:grid-cols-3 grid-cols-2 md:p-20 p-5 gap-2">
    <IndividualEquipment
    image = {sticker}
    header = "Stickers"
    craftdescription = 
   "&#8226; PNG, JPEG, SVG Files
    &#8226; Width & Height (inches)
    &#8226; Outline/Offset (inches)
    &#8226; Matte OR Glossy
    &#8226; Die-cut OR Kiss-cut
    &#8226; Optional: Lamination
    "
    />
    <IndividualEquipment
    image = {cardstock}
    header = "Card-Stock"
    craftdescription = 
   "&#8226; PNG, JPEG, PDF Files
    &#8226; Double Sided?
    &#8226; Color of Card-stock
    &#8226; Markers OR Printed
    &#8226; Optional: Emboss, Score, Perforation
    "
    />
    <IndividualEquipment
    image = {ironon}
    header = "Iron-On"
    craftdescription = 
   "&#8226; PNG, JPEG, SVG Files
    &#8226; Width & Height (inches)
    &#8226; Outline/Offset (inches)
    &#8226; Color of Iron-On Sheet
    &#8226; Optional: Custom Decal, Special Instructions
    "
    />
    <IndividualEquipment
    image = {vinyl}
    header = "Vinyl"
    craftdescription = 
   "&#8226; PNG, JPEG, SVG Files
    &#8226; Width & Height (inches)
    &#8226; Black OR White Color
    &#8226; Optional: Special Instructions
    "
    />
    <IndividualEquipment
    image = {acrylic}
    header = "Acrylic"
    craftdescription = 
   "&#8226; PNG, JPEG, SVG Files
    &#8226; Width & Height (inches)
    "
    />
    <IndividualEquipment
    image = {other}
    header = "Other Materials"
    craftdescription = 
   "&#8226; Fabrics
    &#8226; Plastics
    &#8226; Cardboard
    &#8226; More listed Here
    "
    />
</div>