<script>
    import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";

    const backMockups = [
        "/mockups/back1.jpg",
        "/mockups/back2.jpg",
        "/mockups/back3.jpg",
        "/mockups/back4.jpg",
        "/mockups/back5.jpg",
        "/mockups/back6.jpg",
    ];
</script>

<div class="max-w-screen-sm p-4 mx-auto">
    <p class="font-bold text-3xl">RIICC Merch</p>
    <p class="font-semibold text-xl mt-8 mb-2">Front Design</p>
    <img src="/mockups/front.jpg" class="rounded-md max-w-80" alt="Front design" />
    <p class="font-semibold text-xl mt-8 mb-2 block">Back Designs</p>
    <Splide
        options={{
            padding: "20%",
            gap: "1rem",
            heightRatio: 4 / 3,
        }}
        aria-label="Back Designs"
    >
        {#each backMockups as filename, index}
            <SplideSlide>
                <img class="h-full rounded-md" src={filename} alt="Design 1" />
                <p class="absolute bg-emerald-500/50 backdrop-blur-sm rounded top-2 left-2 px-2 font-medium text-lg">Design {index + 1}</p>
            </SplideSlide>
        {/each}
    </Splide>
    <hr class="w-48 h-1 mx-auto bg-gray-300 border-0 rounded-sm my-10" />
    <div>
        <iframe
            data-tally-src="https://tally.so/embed/mZ1YGz?alignLeft=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="100"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="RIICC Jacket Design Voting"
        ></iframe>
        <!-- prettier-ignore -->
        <script>
var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
        </script>
    </div>
</div>
