<script>
    import IndividualEquipment from "./IndividualEquipment.svelte";
    import pXL from '$lib/images/prusaXL.png';
    import mk4 from '$lib/images/mk4.png';
    import voron from '$lib/images/voron.png';
    import x1 from '$lib/images/x1.png';
    import p1 from '$lib/images/p1.png';
    import elegoo from '$lib/images/elegoo.png';
    import elegoo4 from '$lib/images/elegoo4.png';
    import form3 from '$lib/images/form3.png';
    import form4 from '$lib/images/form4.png';
    import temp from '$lib/images/temp.png';
</script>


<div class="flex flex-col">
    <p class="font-plex-mono flex text-white items-end md:text-5xl text-2xl font-bold md:px-20 px-5 w-full md:pt-0 pt-10 custom-height-md">
        Our 3D printers
    </p>
    <div>
        <div class="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-3 px-5 pb-10">
            <IndividualEquipment
            image = {pXL}
            header = "Prusa XL"
            link="https://www.prusa3d.com/product/original-prusa-xl-semi-assembled-single-toolhead-3d-printer/"
            description = "(360mm x 360mm x 360mm)"
            />

            <IndividualEquipment
            image = {mk4}
            header = "Prusa MK4"
            link="https://www.prusa3d.com/product/original-prusa-mk4s-3d-printer-5/"
            description = "(250mm x 210mm x 220mm)"
            />

            <IndividualEquipment
            image = {voron}
            header = "Voron 2.4"
            link="https://vorondesign.com/voron2.4"
            description = "(360mm x 350mm x 350mm)"
            />

            <IndividualEquipment
            image = {x1}
            header = "Bambu X1-Carbon"
            link="https://store.bambulab.com/products/x1-carbon"
            description = "(256mm x 256mm x 256mm)"
            />

            <IndividualEquipment
            image = {p1}
            header = "Bambu P1S"
            link="https://store.bambulab.com/products/p1s"
            description = "(256mm x 256mm x 256mm)"
            />

            <!-- <IndividualEquipment
            image = {elegoo}
            header = "ELEGOO Saturn Ultra 3"
            link="https://us.elegoo.com/products/elegoo-saturn-3-ultra-resin-3d-printer-12k"
            description = "(218.88mm x 218.88mm x 260mm)"
            /> -->

            <IndividualEquipment
            image = {elegoo4}
            header = "ELEGOO Saturn Ultra 4"
            link="https://us.elegoo.com/products/saturn-4-ultra-12k-10inch-monochrome-lcd-resin-3d-printer"
            description = "(218.88mm x 122.88mm x 220mm)"
            />

            <IndividualEquipment
            image = {form3}
            header = "Formlabs Form 3"
            link="https://formlabs.com/3d-printers/form-3/"
            description = "(145mm x 145mm x 185mm)"
            />

            <!-- <IndividualEquipment
            image = {form4}
            header = "Formlabs Form 4"
            link="https://formlabs.com/3d-printers/form-4/"
            description = "(200mm x 125mm x 210 mm)"
            /> -->

    </div>
    </div>
</div>