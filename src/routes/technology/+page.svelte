<script>
    import Overview from '$lib/components/Overview.svelte';
    import TechnologyEquipment from '$lib/components/TechnologyEquipment.svelte';
    import Editing from '$lib/components/Editing.svelte';
    import Separator from '$lib/components/Separator.svelte';

    import quest3 from '$lib/images/quest3.png';
    import polyCam from '$lib/images/polycam.png';
    import einstar from '$lib/images/einstar.png';
    import soldering from '$lib/images/soldering.png';
    import ipad from '$lib/images/ipadpro.png';
</script>

<div class="flex flex-col md:h-screen h-full w-screen text-orange">
    <Overview 
    video = "videos/newTechVid.webm"
    header = "TECHNOLOGY OVERVIEW"
    subheaderone = "Come visit us at the Technology Hub!"
    paragraphone = "Walk-ins are encouraged! Email us at etsbing@binghamton.edu if you want to learn about a specific skill, software, or technology. All Binghamton University students, staff, and faculty are welcome!"
    subheadertwo = "Services Available"
    paragraphtwo = "&#8226; Soldering Equipment 
&#8226; Meta Quest 3s
&#8226; Poly-cam Scanner
&#8226; Einstar 3D scanner
&#8226; Soldering Equipment
&#8226; Apple pencils + Ipads
&#8226; Adobe Suite: Photoshop & Illustrator"
    />
</div>

<Separator/>

<div class="flex flex-col h-full w-screen">
  <TechnologyEquipment
      header = "Meta Quest 3"
      image = {quest3}
      subheader = "Experience Virtual Reality!"
      description = "Come to the ETS to try out our Quest 3's immersive virtual environment! Honed with better graphics, a wider and higher-resolution display, clearer lenses, smaller controllers with better-vibrating haptics, and mixed reality! " 
  />

  <Separator/>

  <TechnologyEquipment
      header = "Poly-cam Scanner"
      image = {polyCam}
      subheader = "Recreate Reality with photogrammetry!"
      description = "Need a fast and easy 3D model of a real life object? Come scan with Poly-cam on our Ipads! Scan your head and turn into an octopus, get a scaled model of your body, or model your stuffed animal. The possibilities are endless!" 
  />

  <Separator/>

  <TechnologyEquipment
      header = "Einstar 3D Scanner"
      image = {einstar}
      subheader = "Capture precision models of real objects!"
      description = "Need an accurate 3D model of a complex object? Come scan with our new Einstar 3D scanner! We will take you through a detailed scanning process, resulting in a high quality and dimensionally accurate 3D model."
  />

  <Separator/>

  <TechnologyEquipment
      header = "Soldering Equipment"
      image = {soldering}
      subheader = "Connect electronic parts together!"
      description = "Work on creating or repairing electronic parts with our public soldering irons! Hobby grade standard irons are great at repairing wires, mounting or dismounting boards, and other small electrical projects such as Arduinos!"
  />

  <Separator/>

  <TechnologyEquipment
      header = "Apple iPad Pros & Apple Pencils"
      image = {ipad}
      subheader = "Unleash your creativity!"
      description = "Discover Apples drawing experience on our Ipad Pros with 2nd Generation Apple Pencils. Sketch designs, blueprints, and works of art!"
  />
</div>

<Separator/>

<div class="flex md:flex-row flex-col h-full w-screen">
  <div class="md:w-1/2 w-full">
    <Editing
    header = "Photo Editing"
    paragraphone = "Want to create and edit images?"
    logoone = "Ps"
    subheaderone = "Adobe Photoshop"
    subparagraphone = "Master the Art of Photo Enhancement"
    logotwo = "Ai"
    subheadertwo = "Adobe Illustrator"
    subparagraphtwo = "Vector Artistry and Design Creation"
    logothree = "Id"
    subheaderthree = "Adobe Indesign"
    subparagraphthree = "Layout Creation and Page Design"
    />
  </div>
  <div class="md:w-1/2 w-full">
    <Editing
    header = "Video Editing"
    paragraphone = "Want to get into video editing and VFX?"
    logoone = "Pr"
    subheaderone = "Adobe Premier Pro"
    subparagraphone = "Edit with Industry Leading Software"
    logotwo = "Dr"
    subheadertwo = "Davinci Resolve"
    subparagraphtwo = "A Powerful and Free editing Application"
    logothree = "B"
    subheaderthree = "Blender"
    subparagraphthree = "All in one 3D Computer Graphics Tool"
    />
  </div>
</div>
