<script>
    import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";
</script>

<div class="max-w-screen-sm p-4 mx-auto">
    <p class="font-bold text-3xl">RIICC Merch</p>
    <p class="font-medium text-xl mt-8 mb-2">Front Design</p>
    <img src="/mockups/front.jpg" class="max-w-80" alt="Front design" />
    <p class="font-medium text-xl mt-8 mb-2 block">Back Designs</p>
    <Splide
        options={{
            padding: "8rem",
            gap: "1rem",
            heightRatio: 4 / 3,
        }}
        aria-label="Back Designs"
    >
        <SplideSlide class="bg-red-500">
            <img class="h-full" src="/mockups/back1.jpg" alt="Design 1" />
            <p class="absolute top-2 left-4 font-bold text-xl">Design 1</p>
        </SplideSlide>
        <SplideSlide class="bg-red-500">
            <img class="h-full" src="/mockups/back2.jpg" alt="Design 2" />
            <p class="absolute top-2 left-4 font-bold text-xl">Design 2</p>
        </SplideSlide>
        <SplideSlide class="bg-red-500">
            <img class="h-full" src="/mockups/back3.jpg" alt="Design 3" />
            <p class="absolute top-2 left-4 font-bold text-xl">Design 3</p>
        </SplideSlide>
        <SplideSlide class="bg-red-500">
            <img class="h-full" src="/mockups/back4.jpg" alt="Design 4" />
            <p class="absolute top-2 left-4 font-bold text-xl">Design 4</p>
        </SplideSlide>
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
