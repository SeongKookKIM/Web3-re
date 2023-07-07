import { configureStore, createSlice } from "@reduxjs/toolkit";

let bodyimg = createSlice({
  name: "bodyimg",
  initialState: [
    { src: "assets/image/body/asian-out.png", name: "asian" },
    { src: "assets/image/body/black1-out.png", name: "black1" },
    { src: "assets/image/body/black2-out.png", name: "black2" },
    { src: "assets/image/body/white-out.png", name: "white" },
    { src: "assets/image/body/blue-out.png", name: "blue" },
    { src: "assets/image/body/dummy-black-out.png", name: "dummy-black" },
    { src: "assets/image/body/dummy-white-out.png", name: "dummy-white" },
    { src: "assets/image/body/gold-out.png", name: "gold" },
    { src: "assets/image/body/real-gold-out.png", name: "real-gold" },
    { src: "assets/image/body/red-out.png", name: "red" },
  ],
});

let eyesimg = createSlice({
  name: "eyesimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/eyes/eyesH-yellow-out.png", name: "eyesH-yellow" },
    { src: "assets/image/eyes/eyesH-white-out.png", name: "eyesH-white" },
    { src: "assets/image/eyes/eyesH-red-out.png", name: "eyesH-red" },
    { src: "assets/image/eyes/eyesH-purple-out.png", name: "eyesH-purple" },
    { src: "assets/image/eyes/eyesH-green-out.png", name: "eyesH-green" },
    { src: "assets/image/eyes/eyesH-brown-out.png", name: "eyesH-brown" },
    { src: "assets/image/eyes/eyesH-blue-out.png", name: "eyesH-blue" },

    { src: "assets/image/eyes/eyesG-yellow-out.png", name: "eyesG-yellow" },
    { src: "assets/image/eyes/eyesG-white-out.png", name: "eyesG-white" },
    { src: "assets/image/eyes/eyesG-red-out.png", name: "eyesG-red" },
    { src: "assets/image/eyes/eyesG-purple-out.png", name: "eyesG-purple" },
    { src: "assets/image/eyes/eyesG-green-out.png", name: "eyesG-green" },
    { src: "assets/image/eyes/eyesG-brown-out.png", name: "eyesG-brown" },
    { src: "assets/image/eyes/eyesG-blue-out.png", name: "eyesG-blue" },

    { src: "assets/image/eyes/eyesF-yellow-out.png", name: "eyesF-yellow" },
    { src: "assets/image/eyes/eyesF-white-out.png", name: "eyesF-white" },
    { src: "assets/image/eyes/eyesF-red-out.png", name: "eyesF-red" },
    { src: "assets/image/eyes/eyesF-purple-out.png", name: "eyesF-purple" },
    { src: "assets/image/eyes/eyesF-green-out.png", name: "eyesF-green" },
    { src: "assets/image/eyes/eyesF-brown-out.png", name: "eyesF-brown" },
    { src: "assets/image/eyes/eyesF-blue-out.png", name: "eyesF-blue" },

    { src: "assets/image/eyes/eyesE-none-out.png", name: "eyesE-none-out" },

    { src: "assets/image/eyes/eyesD-yellow-out.png", name: "eyesD-yellow" },
    { src: "assets/image/eyes/eyesD-white-out.png", name: "eyesD-white" },
    { src: "assets/image/eyes/eyesD-red-out.png", name: "eyesD-red" },
    { src: "assets/image/eyes/eyesD-purple-out.png", name: "eyesD-purple" },
    { src: "assets/image/eyes/eyesD-green-out.png", name: "eyesD-green" },
    { src: "assets/image/eyes/eyesD-brown-out.png", name: "eyesD-brown" },
    { src: "assets/image/eyes/eyesD-blue-out.png", name: "eyesD-blue" },

    { src: "assets/image/eyes/eyesC-yellow-out.png", name: "eyesC-yellow" },
    { src: "assets/image/eyes/eyesC-white-out.png", name: "eyesC-white" },
    { src: "assets/image/eyes/eyesC-red-out.png", name: "eyesC-red" },
    { src: "assets/image/eyes/eyesC-purple-out.png", name: "eyesC-purple" },
    { src: "assets/image/eyes/eyesC-green-out.png", name: "eyesC-green" },
    { src: "assets/image/eyes/eyesC-brown-out.png", name: "eyesC-brown" },
    { src: "assets/image/eyes/eyesC-blue-out.png", name: "eyesC-blue" },

    { src: "assets/image/eyes/eyesB-yellow-out.png", name: "eyesB-yellow" },
    { src: "assets/image/eyes/eyesB-white-out.png", name: "eyesB-white" },
    { src: "assets/image/eyes/eyesB-red-out.png", name: "eyesB-red" },
    { src: "assets/image/eyes/eyesB-purple-out.png", name: "eyesB-purple" },
    { src: "assets/image/eyes/eyesB-green-out.png", name: "eyesB-green" },
    { src: "assets/image/eyes/eyesB-brown-out.png", name: "eyesB-brown" },
    { src: "assets/image/eyes/eyesB-blue-out.png", name: "eyesB-blue" },

    { src: "assets/image/eyes/eyesA-yellow-out.png", name: "eyesA-yellow" },
    { src: "assets/image/eyes/eyesA-white-out.png", name: "eyesA-white" },
    { src: "assets/image/eyes/eyesA-red-out.png", name: "eyesA-red" },
    { src: "assets/image/eyes/eyesA-purple-out.png", name: "eyesA-purple" },
    { src: "assets/image/eyes/eyesA-green-out.png", name: "eyesA-green" },
    { src: "assets/image/eyes/eyesA-brown-out.png", name: "eyesA-brown" },
    { src: "assets/image/eyes/eyesA-blue-out.png", name: "eyesA-blue" },
  ],
});

let feelingimg = createSlice({
  name: "feelingimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/feeling/blush-L-out.png",
      name: "blush-L",
    },
    {
      src: "assets/image/feeling/blush-S-out.png",
      name: "blush-S",
    },
    {
      src: "assets/image/feeling/nausea-out.png",
      name: "nausea",
    },
    {
      src: "assets/image/feeling/rage-out.png",
      name: "rage",
    },
    {
      src: "assets/image/feeling/shady-out.png",
      name: "shady",
    },
    {
      src: "assets/image/feeling/shyness-out.png",
      name: "shyness",
    },
  ],
});

let faceimg = createSlice({
  name: "faceimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/face/aio-glasses-blue-out.png",
      name: "aio-glasses-blue",
    },
    {
      src: "assets/image/face/aio-glasses-green-out.png",
      name: "aio-glasses-green",
    },
    {
      src: "assets/image/face/aio-glasses-pink-out.png",
      name: "aio-glasses-pink",
    },
    {
      src: "assets/image/face/animal-face-black-out.png",
      name: "animal-face-black",
    },
    {
      src: "assets/image/face/animal-face-purple-out.png",
      name: "animal-face-purple",
    },
    {
      src: "assets/image/face/animal-face-red-out.png",
      name: "animal-face-red",
    },
    {
      src: "assets/image/face/beak-black-out.png",
      name: "beak-black",
    },
    {
      src: "assets/image/face/beak-blue-out.png",
      name: "beak-blue",
    },
    {
      src: "assets/image/face/beak-yellow-out.png",
      name: "beak-yellow",
    },
    {
      src: "assets/image/face/birthday-glasses-black-out.png",
      name: "birthday-glasses-black",
    },
    {
      src: "assets/image/face/birthday-glasses-plaid-out.png",
      name: "birthday-glasses-plaid",
    },
    {
      src: "assets/image/face/birthday-glasses-rainbow-out.png",
      name: "birthday-glasses-rainbow",
    },
    {
      src: "assets/image/face/bubble-gum-blue-out.png",
      name: "bubble-gum-blue",
    },
    {
      src: "assets/image/face/bubble-gum-pink-out.png",
      name: "bubble-gum-pink",
    },
    {
      src: "assets/image/face/bubble-gum-yellow-out.png",
      name: "bubble-gum-yellow",
    },
    {
      src: "assets/image/face/dust-mask-black-out.png",
      name: "dust-mask-black",
    },
    {
      src: "assets/image/face/dust-mask-blue-out.png",
      name: "dust-mask-blue",
    },
    {
      src: "assets/image/face/dust-mask-white-out.png",
      name: "dust-mask-white",
    },
    {
      src: "assets/image/face/gas-mask-black-out.png",
      name: "gas-mask-black",
    },
    {
      src: "assets/image/face/gas-mask-blue-out.png",
      name: "gas-mask-blue",
    },
    {
      src: "assets/image/face/gas-mask-gold-out.png",
      name: "gas-mask-gold",
    },
    {
      src: "assets/image/face/gauze-black-out.png",
      name: "gauze-black",
    },
    {
      src: "assets/image/face/gauze-brown-out.png",
      name: "gauze-brown",
    },
    {
      src: "assets/image/face/gauze-white-out.png",
      name: "gauze-white",
    },
    {
      src: "assets/image/face/iron-sunglasses-black-out.png",
      name: "iron-sunglasses-black",
    },
    {
      src: "assets/image/face/iron-sunglasses-gold-out.png",
      name: "iron-sunglasses-gold",
    },
    {
      src: "assets/image/face/iron-sunglasses-red-out.png",
      name: "iron-sunglasses-red",
    },
    {
      src: "assets/image/face/lucky-glasses-black-out.png",
      name: "lucky-glasses-black",
    },
    {
      src: "assets/image/face/lucky-glasses-brown-out.png",
      name: "lucky-glasses-brown",
    },
    {
      src: "assets/image/face/lucky-glasses-white-out.png",
      name: "lucky-glasses-white",
    },
    {
      src: "assets/image/face/mini-glasses-black-out.png",
      name: "mini-glasses-black",
    },
    {
      src: "assets/image/face/mini-glasses-blue-out.png",
      name: "mini-glasses-blue",
    },
    {
      src: "assets/image/face/mini-glasses-yellow-out.png",
      name: "mini-glasses-yellow",
    },
    {
      src: "assets/image/face/mustache-black-out.png",
      name: "mustache-black",
    },
    {
      src: "assets/image/face/mustache-brown-out.png",
      name: "mustache-brown",
    },
    {
      src: "assets/image/face/mustache-white-out.png",
      name: "mustache-white",
    },
    {
      src: "assets/image/face/piercing-gold-out.png",
      name: "piercing-gold",
    },
    {
      src: "assets/image/face/piercing-rose-gold-out.png",
      name: "piercing-rose-gold",
    },
    {
      src: "assets/image/face/piercing-silver-out.png",
      name: "piercing-silver",
    },
    {
      src: "assets/image/face/scouter-blue-out.png",
      name: "scouter-blue",
    },
    {
      src: "assets/image/face/scouter-green-out.png",
      name: "scouter-green",
    },
    {
      src: "assets/image/face/scouter-red-out.png",
      name: "scouter-red",
    },
    {
      src: "assets/image/face/stick-tongue-out-green-out.png",
      name: "stick-tongue-out-green",
    },
    {
      src: "assets/image/face/stick-tongue-out-purple-out.png",
      name: "stick-tongue-out-purple",
    },
    {
      src: "assets/image/face/stick-tongue-out-red-out.png",
      name: "stick-tongue-out-red",
    },
  ],
});

let hairimg = createSlice({
  name: "hairimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },

    {
      src: "assets/image/hair/blind-cut-black-out.png",
      name: "blind-cut-black",
    },
    {
      src: "assets/image/hair/blind-cut-mint-out.png",
      name: "blind-cut-mint",
    },
    {
      src: "assets/image/hair/blind-cut-red-out.png",
      name: "blind-cut-red",
    },
    {
      src: "assets/image/hair/bun-brown-out.png",
      name: "bun-brown",
    },
    {
      src: "assets/image/hair/bun-pink-out.png",
      name: "bun-pink",
    },
    {
      src: "assets/image/hair/bun-white-out.png",
      name: "bun-white",
    },
    {
      src: "assets/image/hair/buzz-cut-brown-out.png",
      name: "buzz-cut-brown",
    },
    {
      src: "assets/image/hair/buzz-cut-sky-blue-out.png",
      name: "buzz-cut-sky-blue",
    },
    {
      src: "assets/image/hair/buzz-cut-yellow-out.png",
      name: "buzz-cut-yellow",
    },
    {
      src: "assets/image/hair/calm-cut-black-out.png",
      name: "calm-cut-black",
    },
    {
      src: "assets/image/hair/calm-cut-green-out.png",
      name: "calm-cut-green",
    },
    {
      src: "assets/image/hair/calm-cut-red-out.png",
      name: "calm-cut-red",
    },
    {
      src: "assets/image/hair/calm-hair-brown-out.png",
      name: "calm-hair-brown",
    },
    {
      src: "assets/image/hair/calm-hair-green-out.png",
      name: "calm-hair-green",
    },
    {
      src: "assets/image/hair/calm-hair-red-out.png",
      name: "calm-hair-red",
    },
    {
      src: "assets/image/hair/curly-cut-brown-out.png",
      name: "curly-cut-brown",
    },
    {
      src: "assets/image/hair/curly-cut-white-out.png",
      name: "curly-cut-white",
    },
    {
      src: "assets/image/hair/curly-cut-yellow-out.png",
      name: "curly-cut-yellow",
    },
    {
      src: "assets/image/hair/dread-lock-blue-out.png",
      name: "dread-lock-blue",
    },
    {
      src: "assets/image/hair/dread-lock-brown-out.png",
      name: "dread-lock-brown",
    },
    {
      src: "assets/image/hair/dread-lock-red-out.png",
      name: "dread-lock-red",
    },
    {
      src: "assets/image/hair/flexible-cut-black-out.png",
      name: "flexible-cut-black",
    },
    {
      src: "assets/image/hair/flexible-cut-gray-out.png",
      name: "flexible-cut-gray",
    },
    {
      src: "assets/image/hair/flexible-cut-green-out.png",
      name: "flexible-cut-green",
    },
    {
      src: "assets/image/hair/front-point-hair-brown-out.png",
      name: "front-point-hair-brown",
    },
    {
      src: "assets/image/hair/front-point-hair-lavender-out.png",
      name: "front-point-hair-lavender",
    },
    {
      src: "assets/image/hair/front-point-hair-yellow-out.png",
      name: "front-point-hair-yellow",
    },
    {
      src: "assets/image/hair/long-hair1-blue-out.png",
      name: "long-hair1-blue",
    },
    {
      src: "assets/image/hair/long-hair1-brown-out.png",
      name: "long-hair1-brown",
    },
    {
      src: "assets/image/hair/long-hair1-yellow-out.png",
      name: "long-hair1-yellow",
    },
    {
      src: "assets/image/hair/long-hair2-brown-out.png",
      name: "llong-hair2-brown",
    },
    {
      src: "assets/image/hair/long-hair2-green-out.png",
      name: "llong-hair2-green",
    },
    {
      src: "assets/image/hair/long-hair2-yellow-out.png",
      name: "llong-hair2-yellow",
    },
    {
      src: "assets/image/hair/mischievous-cut-black-out.png",
      name: "mischievous-cut-black",
    },
    {
      src: "assets/image/hair/mischievous-cut-orange-out.png",
      name: "mischievous-cut-orange",
    },
    {
      src: "assets/image/hair/mischievous-cut-ping-out.png",
      name: "mischievous-cut-ping",
    },
    {
      src: "assets/image/hair/pomade-brown-out.png",
      name: "pomade-brown",
    },
    {
      src: "assets/image/hair/pomade-green-out.png",
      name: "pomade-green",
    },
    {
      src: "assets/image/hair/pomade-white-out.png",
      name: "pomade-white",
    },
    {
      src: "assets/image/hair/pouty-hair-black-out.png",
      name: "pouty-hair-black",
    },
    {
      src: "assets/image/hair/pouty-hair-green-out.png",
      name: "pouty-hair-green",
    },
    {
      src: "assets/image/hair/pouty-hair-lavender-out.png",
      name: "pouty-hair-lavender",
    },
    {
      src: "assets/image/hair/tied-short-hair-brown-out.png",
      name: "tied-short-hair-brown",
    },
    {
      src: "assets/image/hair/tied-short-hair-gray-out.png",
      name: "tied-short-hair-gray",
    },
    {
      src: "assets/image/hair/tied-short-hair-purple-out.png",
      name: "tied-short-hair-purple",
    },
  ],
});

let headimg = createSlice({
  name: "headimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/head/bandana-red-out.png", name: "bandana-red" },
    { src: "assets/image/head/bandana-white-out.png", name: "bandana-white" },
    { src: "assets/image/head/bandana-yellow-out.png", name: "bandana-yellow" },
    { src: "assets/image/head/beret-black-out.png", name: "beret-black" },
    { src: "assets/image/head/beret-brown-out.png", name: "beret-brown" },
    { src: "assets/image/head/beret-plaid-out.png", name: "beret-plaid" },
    {
      src: "assets/image/head/bucket-hat-black-out.png",
      name: "bucket-hat-black",
    },
    {
      src: "assets/image/head/bucket-hat-pink-out.png",
      name: "bucket-hat-pink",
    },
    {
      src: "assets/image/head/bucket-hat-white-out.png",
      name: "bucket-hat-white",
    },
    {
      src: "assets/image/head/cap-green-out.png",
      name: "cap-green",
    },
    {
      src: "assets/image/head/cap-pink-out.png",
      name: "cap-pink",
    },
    {
      src: "assets/image/head/cap-yellow-out.png",
      name: "cap-yellow",
    },
    {
      src: "assets/image/head/chef-hat-black-out.png",
      name: "chef-hat-black",
    },
    {
      src: "assets/image/head/chef-hat-gold-out.png",
      name: "chef-hat-gold",
    },
    {
      src: "assets/image/head/chef-hat-white-out.png",
      name: "chef-hat-white",
    },
    {
      src: "assets/image/head/crown-gold-out.png",
      name: "crown-gold",
    },
    {
      src: "assets/image/head/crown-pink-out.png",
      name: "crown-pink",
    },
    {
      src: "assets/image/head/crown-silver-out.png",
      name: "crown-silver",
    },
    {
      src: "assets/image/head/hair-band-green-out.png",
      name: "hair-band-green",
    },
    {
      src: "assets/image/head/hair-band-mint-out.png",
      name: "hair-band-mint",
    },
    {
      src: "assets/image/head/hair-band-purple-out.png",
      name: "hair-band-purple",
    },
    {
      src: "assets/image/head/head-phones-black-out.png",
      name: "head-phones-black",
    },
    {
      src: "assets/image/head/head-phones-gold-out.png",
      name: "head-phones-gold",
    },
    {
      src: "assets/image/head/head-phones-white-out.png",
      name: "head-phones-white",
    },
    {
      src: "assets/image/head/knight-cap-red-out.png",
      name: "knight-cap-red",
    },
    {
      src: "assets/image/head/knight-cap-silver-out.png",
      name: "knight-cap-silver",
    },
    {
      src: "assets/image/head/knight-cap-yellow-out.png",
      name: "knight-cap-yellow",
    },
    {
      src: "assets/image/head/magical-hat-black-out.png",
      name: "magical-hat-black",
    },
    {
      src: "assets/image/head/magical-hat-blue-out.png",
      name: "magical-hat-blue",
    },
    {
      src: "assets/image/head/magical-hat-white-out.png",
      name: "magical-hat-white",
    },
    {
      src: "assets/image/head/propeller-cap-A-out.png",
      name: "propeller-cap-A",
    },
    {
      src: "assets/image/head/propeller-cap-B-out.png",
      name: "propeller-cap-B",
    },
    {
      src: "assets/image/head/propeller-cap-C-out.png",
      name: "propeller-cap-C",
    },
    {
      src: "assets/image/head/rabbit-headband-purple-circle-out.png",
      name: "rabbit-headband-purple-circle",
    },
    {
      src: "assets/image/head/rabbit-headband-purple-pink-out.png",
      name: "rabbit-headband-purple-pink",
    },
    {
      src: "assets/image/head/rabbit-headband-purple-red-out.png",
      name: "rabbit-headband-purple-red",
    },
    {
      src: "assets/image/head/safety-helmet-blue-out.png",
      name: "safety-helmet-blue",
    },
    {
      src: "assets/image/head/safety-helmet-red-out.png",
      name: "safety-helmet-red",
    },
    {
      src: "assets/image/head/safety-helmet-yellow-out.png",
      name: "safety-helmet-yellow",
    },
    {
      src: "assets/image/head/santa-hat-green-out.png",
      name: "santa-hat-green",
    },
    {
      src: "assets/image/head/santa-hat-lavender-out.png",
      name: "santa-hat-lavender",
    },
    {
      src: "assets/image/head/santa-hat-red-out.png",
      name: "santa-hat-red",
    },
    {
      src: "assets/image/head/straw-hat-mint-out.png",
      name: "straw-hat-mint",
    },
    {
      src: "assets/image/head/straw-hat-purple-out.png",
      name: "straw-hat-purple",
    },
    {
      src: "assets/image/head/straw-hat-red-out.png",
      name: "straw-hat-red",
    },
  ],
});

let accimg = createSlice({
  name: "accimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/Acc/chain-necklace-gray-out.png",
      name: "chain-necklace-gray",
    },
    {
      src: "assets/image/Acc/pointed-necklace-green-out.png",
      name: "pointed-necklace-green",
    },
  ],
});

let topimg = createSlice({
  name: "topimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/top/blazer-black-out.png", name: "blazer-black" },
    { src: "assets/image/top/blazer-blue-out.png", name: "blazer-blue" },
    { src: "assets/image/top/blazer-red-out.png", name: "blazer-red" },
    {
      src: "assets/image/top/broken-heart-gold-out.png",
      name: "broken-heart-gold",
    },
    {
      src: "assets/image/top/broken-heart-purple-out.png",
      name: "broken-heart-purple",
    },
    {
      src: "assets/image/top/broken-heart-red-out.png",
      name: "broken-heart-red",
    },
    {
      src: "assets/image/top/cardigan-gray-out.png",
      name: "cardigan-gray",
    },
    {
      src: "assets/image/top/cardigan-green-out.png",
      name: "cardigan-green",
    },
    {
      src: "assets/image/top/cardigan-yellow-out.png",
      name: "cardigan-yellow",
    },
    {
      src: "assets/image/top/chain-necklace-gold-out.png",
      name: "chain-necklace-gold",
    },
    {
      src: "assets/image/top/chain-necklace-mint-out.png",
      name: "chain-necklace-mint",
    },
    {
      src: "assets/image/top/chain-necklace-silver-out.png",
      name: "chain-necklace-silver",
    },
    {
      src: "assets/image/top/coach-jacket-brown-out.png",
      name: "coach-jacket-brown",
    },
    {
      src: "assets/image/top/coach-jacket-indigo-out.png",
      name: "coach-jacket-indigo",
    },
    {
      src: "assets/image/top/coach-jacket-white-out.png",
      name: "coach-jacket-white",
    },
    {
      src: "assets/image/top/crop-top-cyber-out.png",
      name: "crop-top-cyber",
    },
    {
      src: "assets/image/top/crop-top-green-out.png",
      name: "crop-top-green",
    },
    {
      src: "assets/image/top/crop-top-white-out.png",
      name: "crop-top-white",
    },
    {
      src: "assets/image/top/decent-lace-top-beige-out.png",
      name: "decent-lace-top-beige",
    },
    {
      src: "assets/image/top/decent-lace-top-black-out.png",
      name: "decent-lace-top-black",
    },
    {
      src: "assets/image/top/decent-lace-top-mint-out.png",
      name: "decent-lace-top-mint",
    },
    {
      src: "assets/image/top/gingham-shirts-gold-out.png",
      name: "gingham-shirts-gold",
    },
    {
      src: "assets/image/top/gingham-shirts-indigo-out.png",
      name: "gingham-shirts-indigo",
    },
    {
      src: "assets/image/top/gingham-shirts-red-out.png",
      name: "gingham-shirts-red",
    },
    {
      src: "assets/image/top/heart-knit-blue-out.png",
      name: "heart-knit-blue",
    },
    {
      src: "assets/image/top/heart-knit-red-out.png",
      name: "heart-knit-red",
    },
    {
      src: "assets/image/top/heart-knit-yellow-out.png",
      name: "heart-knit-yellow",
    },
    {
      src: "assets/image/top/hoodie-pocket-beige-out.png",
      name: "hoodie-pocket-beige",
    },
    {
      src: "assets/image/top/hoodie-pocket-gray-out.png",
      name: "hoodie-pocket-gray",
    },
    {
      src: "assets/image/top/hoodie-pocket-red-out.png",
      name: "hoodie-pocket-red",
    },
    {
      src: "assets/image/top/hoodie-zip-up-green-out.png",
      name: "hoodie-zip-up-green",
    },
    {
      src: "assets/image/top/hoodie-zip-up-white-out.png",
      name: "hoodie-zip-up-white",
    },
    {
      src: "assets/image/top/hoodie-zip-up-yellow-out.png",
      name: "hoodie-zip-up-yellow",
    },
    {
      src: "assets/image/top/lace-crop-top-black-out.png",
      name: "lace-crop-top-black",
    },
    {
      src: "assets/image/top/lace-crop-top-orange-out.png",
      name: "lace-crop-top-orange",
    },
    {
      src: "assets/image/top/lace-crop-top-white-out.png",
      name: "lace-crop-top-white",
    },
    {
      src: "assets/image/top/off-shoulder-purple-out.png",
      name: "off-shoulder-purple",
    },
    {
      src: "assets/image/top/off-shoulder-red-out.png",
      name: "off-shoulder-red",
    },
    {
      src: "assets/image/top/off-shoulder-yellow-out.png",
      name: "off-shoulder-yellow",
    },
    {
      src: "assets/image/top/pattern-wide-shirt-flower-out.png",
      name: "pattern-wide-shirt-flower",
    },
    {
      src: "assets/image/top/pattern-wide-shirt-marine-out.png",
      name: "pattern-wide-shirt-marine",
    },
    {
      src: "assets/image/top/pattern-wide-shirt-reopard-out.png",
      name: "pattern-wide-shirt-reopard",
    },
    {
      src: "assets/image/top/pointed-necklace-green-out.png",
      name: "pointed-necklace-green",
    },
    {
      src: "assets/image/top/pointed-necklace-red-out.png",
      name: "pointed-necklace-red",
    },
    {
      src: "assets/image/top/pointed-necklace-white-out.png",
      name: "pointed-necklace-white",
    },
    {
      src: "assets/image/top/polo-shirts-blue-out.png",
      name: "polo-shirts-blue",
    },
    {
      src: "assets/image/top/polo-shirts-green-out.png",
      name: "polo-shirts-green",
    },
    {
      src: "assets/image/top/polo-shirts-purple-out.png",
      name: "polo-shirts-purple",
    },
    {
      src: "assets/image/top/shirt-knit-blue-out.png",
      name: "shirt-knit-blue",
    },
    {
      src: "assets/image/top/shirt-knit-purple-out.png",
      name: "shirt-knit-purple",
    },
    {
      src: "assets/image/top/shirt-knit-red-out.png",
      name: "shirt-knit-red",
    },
    {
      src: "assets/image/top/short-sleeve-shirt-black-out.png",
      name: "short-sleeve-shirt-black",
    },
    {
      src: "assets/image/top/short-sleeve-shirt-blue-out.png",
      name: "short-sleeve-shirt-blue",
    },
    {
      src: "assets/image/top/short-sleeve-shirt-white-out.png",
      name: "short-sleeve-shirt-white",
    },
    {
      src: "assets/image/top/turtle-neck-black-out.png",
      name: "turtle-neck-black",
    },
    {
      src: "assets/image/top/turtle-neck-blue-out.png",
      name: "turtle-neck-blue",
    },
    {
      src: "assets/image/top/turtle-neck-white-out.png",
      name: "turtle-neck-white",
    },
    {
      src: "assets/image/top/varsity-black-out.png",
      name: "varsity-black",
    },
    {
      src: "assets/image/top/varsity-blue-out.png",
      name: "varsity-blue",
    },
    {
      src: "assets/image/top/varsity-purple-out.png",
      name: "varsity-purple",
    },
  ],
});

let onepieceimg = createSlice({
  name: "onepieceimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/top-onepiece/zigzag-dress-purple-out.png",
      name: "zigzag-dress-purple",
    },
    {
      src: "assets/image/top-onepiece/zigzag-dress-orange-out.png",
      name: "zigzag-dress-orange",
    },
    {
      src: "assets/image/top-onepiece/zigzag-dress-green-out.png",
      name: "zigzag-dress-green",
    },
    {
      src: "assets/image/top-onepiece/tight-dress-white-out.png",
      name: "tight-dress-white",
    },
    {
      src: "assets/image/top-onepiece/tight-dress-gold-out.png",
      name: "tight-dress-gold",
    },
    {
      src: "assets/image/top-onepiece/tight-dress-blue-out.png",
      name: "tight-dress-blue",
    },
    {
      src: "assets/image/top-onepiece/suspenders-dress-green-out.png",
      name: "suspenders-dress-green",
    },
    {
      src: "assets/image/top-onepiece/suspenders-dress-blue-out.png",
      name: "suspenders-dress-blue",
    },
    {
      src: "assets/image/top-onepiece/suspenders-dress-black-out.png",
      name: "suspenders-dress-black",
    },
    {
      src: "assets/image/top-onepiece/roman-clothes-red-out.png",
      name: "roman-clothes-red",
    },
    {
      src: "assets/image/top-onepiece/roman-clothes-purple-out.png",
      name: "roman-clothes-purple",
    },
    {
      src: "assets/image/top-onepiece/roman-clothes-green-out.png",
      name: "roman-clothes-green",
    },
    {
      src: "assets/image/top-onepiece/religious-robe-white-out.png",
      name: "religious-robe-white",
    },
    {
      src: "assets/image/top-onepiece/religious-robe-brown-out.png",
      name: "religious-robe-brown",
    },
    {
      src: "assets/image/top-onepiece/religious-robe-black-out.png",
      name: "religious-robe-black",
    },
    {
      src: "assets/image/top-onepiece/plate-armor-iron-out.png",
      name: "plate-armor-iron",
    },
    {
      src: "assets/image/top-onepiece/plate-armor-gold-out.png",
      name: "plate-armor-gold",
    },
    {
      src: "assets/image/top-onepiece/plate-armor-black-out.png",
      name: "plate-armor-black",
    },
    {
      src: "assets/image/top-onepiece/pilot-suit-red-out.png",
      name: "pilot-suit-red",
    },
    {
      src: "assets/image/top-onepiece/pilot-suit-orange-out.png",
      name: "pilot-suit-orange",
    },
    {
      src: "assets/image/top-onepiece/pilot-suit-green-out.png",
      name: "pilot-suit-green",
    },
    {
      src: "assets/image/top-onepiece/overalls-white-out.png",
      name: "overalls-white",
    },
    {
      src: "assets/image/top-onepiece/overalls-red-out.png",
      name: "overalls-red",
    },
    {
      src: "assets/image/top-onepiece/overalls-brown-out.png",
      name: "overalls-brown",
    },
    {
      src: "assets/image/top-onepiece/martial-arts-uniform-white-out.png",
      name: "martial-arts-uniform-white",
    },
    {
      src: "assets/image/top-onepiece/martial-arts-uniform-gray-out.png",
      name: "martial-arts-uniform-gray",
    },
    {
      src: "assets/image/top-onepiece/martial-arts-uniform-black-out.png",
      name: "martial-arts-uniform-black",
    },
    {
      src: "assets/image/top-onepiece/magical-dress-white-out.png",
      name: "magical-dress-white",
    },
    {
      src: "assets/image/top-onepiece/magical-dress-blue-out.png",
      name: "magical-dress-blue",
    },
    {
      src: "assets/image/top-onepiece/magical-dress-black-out.png",
      name: "magical-dress-black",
    },
    {
      src: "assets/image/top-onepiece/long-sleeved-coat-red-out.png",
      name: "long-sleeved-coat-red",
    },
    {
      src: "assets/image/top-onepiece/long-sleeved-coat-purple-out.png",
      name: "long-sleeved-coat-purple",
    },
    {
      src: "assets/image/top-onepiece/long-sleeved-coat-green-out.png",
      name: "long-sleeved-coat-green",
    },
    {
      src: "assets/image/top-onepiece/loincloth-green-out.png",
      name: "loincloth-green",
    },
    {
      src: "assets/image/top-onepiece/loincloth-brown-out.png",
      name: "loincloth-brown",
    },
    {
      src: "assets/image/top-onepiece/loincloth-blue-out.png",
      name: "loincloth-blue",
    },
    {
      src: "assets/image/top-onepiece/lace-dress-yellow-out.png",
      name: "lace-dress-yellow",
    },
    {
      src: "assets/image/top-onepiece/lace-dress-pink-out.png",
      name: "lace-dress-pink",
    },
    {
      src: "assets/image/top-onepiece/lace-dress-black-blood-out.png",
      name: "lace-dress-black-blood",
    },
    {
      src: "assets/image/top-onepiece/bodysuit-yellow-out.png",
      name: "bodysuit-yellow",
    },
    {
      src: "assets/image/top-onepiece/bodysuit-red-out.png",
      name: "bodysuit-red",
    },
    {
      src: "assets/image/top-onepiece/bodysuit-blue-out.png",
      name: "bodysuit-blue",
    },
    {
      src: "assets/image/top-onepiece/bathrobe-white-out.png",
      name: "bathrobe-white",
    },
    {
      src: "assets/image/top-onepiece/bathrobe-blue-out.png",
      name: "bathrobe-blue",
    },
    {
      src: "assets/image/top-onepiece/bathrobe-black-out.png",
      name: "bathrobe-black",
    },
  ],
});

let bottomimg = createSlice({
  name: "bottomimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    // Low
    {
      src: "assets/image/bottom-Low/balloon-pants-brown-out.png",
      name: "balloon-pants-brown",
    },
    {
      src: "assets/image/bottom-Low/balloon-pants-green-out.png",
      name: "balloon-pants-green",
    },
    {
      src: "assets/image/bottom-Low/balloon-pants-pink-out.png",
      name: "balloon-pants-pink",
    },
    {
      src: "assets/image/bottom-Low/check-pants-green-out.png",
      name: "check-pants-green",
    },
    {
      src: "assets/image/bottom-Low/check-pants-purple-out.png",
      name: "check-pants-purple",
    },
    {
      src: "assets/image/bottom-Low/check-pants-yellow-out.png",
      name: "check-pants-yellow",
    },
    {
      src: "assets/image/bottom-Low/choker-pants-black-out.png",
      name: "choker-pants-black",
    },
    {
      src: "assets/image/bottom-Low/choker-pants-blue-out.png",
      name: "choker-pants-blue",
    },
    {
      src: "assets/image/bottom-Low/choker-pants-yellow-out.png",
      name: "choker-pants-yellow",
    },
    {
      src: "assets/image/bottom-Low/long-pants-black-out.png",
      name: "long-pants-black",
    },
    {
      src: "assets/image/bottom-Low/long-pants-blue-out.png",
      name: "long-pants-blue",
    },
    {
      src: "assets/image/bottom-Low/long-pants-orange-out.png",
      name: "long-pants-orange",
    },
    {
      src: "assets/image/bottom-Low/plaid-pants-black-out.png",
      name: "plaid-pants-black",
    },
    {
      src: "assets/image/bottom-Low/plaid-pants-red-out.png",
      name: "plaid-pants-red",
    },
    {
      src: "assets/image/bottom-Low/plaid-pants-yellow-out.png",
      name: "plaid-pants-yellow",
    },
    {
      src: "assets/image/bottom-Low/ring-pants-green-out.png",
      name: "ring-pants-green",
    },
    {
      src: "assets/image/bottom-Low/ring-pants-mint-out.png",
      name: "ring-pants-mint",
    },
    {
      src: "assets/image/bottom-Low/ring-pants-orange-out.png",
      name: "ring-pants-orange",
    },
    {
      src: "assets/image/bottom-Low/ripped-panties-black-out.png",
      name: "ripped-panties-black",
    },
    {
      src: "assets/image/bottom-Low/ripped-panties-pink-out.png",
      name: "ripped-panties-pink",
    },
    {
      src: "assets/image/bottom-Low/ripped-panties-red-out.png",
      name: "ripped-panties-red",
    },
    {
      src: "assets/image/bottom-Low/short-pants-black-out.png",
      name: "short-pants-black",
    },
    {
      src: "assets/image/bottom-Low/short-pants-blue-out.png",
      name: "short-pants-blue",
    },
    {
      src: "assets/image/bottom-Low/short-pants-white-out.png",
      name: "short-pants-white",
    },

    // Hight
    {
      src: "assets/image/bottom-High/boots-cut-pants-black-out.png",
      name: "boots-cut-pants-black",
    },
    {
      src: "assets/image/bottom-High/boots-cut-pants-blue-out.png",
      name: "boots-cut-pants-blue",
    },
    {
      src: "assets/image/bottom-High/boots-cut-pants-white-out.png",
      name: "boots-cut-pants-white",
    },
    {
      src: "assets/image/bottom-High/cracked-pants-blue-out.png",
      name: "cracked-pants-blue",
    },
    {
      src: "assets/image/bottom-High/cracked-pants-green-out.png",
      name: "cracked-pants-green",
    },
    {
      src: "assets/image/bottom-High/cracked-pants-red-out.png",
      name: "cracked-pants-red",
    },
    {
      src: "assets/image/bottom-High/flower-skirt-blue-out.png",
      name: "flower-skirt-blue",
    },
    {
      src: "assets/image/bottom-High/flower-skirt-red-out.png",
      name: "flower-skirt-red",
    },
    {
      src: "assets/image/bottom-High/flower-skirt-yellow-out.png",
      name: "flower-skirt-yellow",
    },
    {
      src: "assets/image/bottom-High/lace-skirt-black-out.png",
      name: "lace-skirt-black",
    },
    {
      src: "assets/image/bottom-High/lace-skirt-reopard-out.png",
      name: "lace-skirt-reopard",
    },
    {
      src: "assets/image/bottom-High/lace-skirt-white-out.png",
      name: "lace-skirt-white",
    },
    {
      src: "assets/image/bottom-High/long-skirt-blue-out.png",
      name: "long-skirt-blue",
    },
    {
      src: "assets/image/bottom-High/long-skirt-red-out.png",
      name: "long-skirt-red",
    },
    {
      src: "assets/image/bottom-High/long-skirt-yellow-out.png",
      name: "long-skirt-yellow",
    },
    {
      src: "assets/image/bottom-High/mini-skirt-black-out.png",
      name: "mini-skirt-black",
    },
    {
      src: "assets/image/bottom-High/mini-skirt-mint-out.png",
      name: "mini-skirt-mint",
    },
    {
      src: "assets/image/bottom-High/mini-skirt-orange-out.png",
      name: "mini-skirt-orange",
    },
    {
      src: "assets/image/bottom-High/wrap-skirt-blue-out.png",
      name: "wrap-skirt-blue",
    },
    {
      src: "assets/image/bottom-High/wrap-skirt-green-out.png",
      name: "wrap-skirt-green",
    },
    {
      src: "assets/image/bottom-High/wrap-skirt-red-out.png",
      name: "wrap-skirt-red",
    },
  ],
});
let shoesimg = createSlice({
  name: "shoesimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/shoes/balance-shoes-gray-out.png",
      name: "balance-shoes-gray",
    },
    {
      src: "assets/image/shoes/balance-shoes-green-out.png",
      name: "balance-shoes-green",
    },
    {
      src: "assets/image/shoes/balance-shoes-pink-out.png",
      name: "balance-shoes-pink",
    },
    {
      src: "assets/image/shoes/basketball-shoes-blue-out.png",
      name: "basketball-shoes-blue",
    },
    {
      src: "assets/image/shoes/basketball-shoes-green-out.png",
      name: "basketball-shoes-green",
    },
    {
      src: "assets/image/shoes/basketball-shoes-red-out.png",
      name: "basketball-shoes-red",
    },
    {
      src: "assets/image/shoes/boots-black-out.png",
      name: "boots-black",
    },
    {
      src: "assets/image/shoes/boots-brown-out.png",
      name: "boots-brown",
    },
    {
      src: "assets/image/shoes/boots-green-out.png",
      name: "boots-green",
    },
    {
      src: "assets/image/shoes/canvas-shoes-black-out.png",
      name: "canvas-shoes-black",
    },
    {
      src: "assets/image/shoes/canvas-shoes-mint-out.png",
      name: "canvas-shoes-mint",
    },
    {
      src: "assets/image/shoes/canvas-shoes-red-out.png",
      name: "canvas-shoes-red",
    },
    {
      src: "assets/image/shoes/chelsea-boots-black-out.png",
      name: "chelsea-boots-black",
    },
    {
      src: "assets/image/shoes/chelsea-boots-orange-out.png",
      name: "chelsea-boots-orange",
    },
    {
      src: "assets/image/shoes/chelsea-boots-white-out.png",
      name: "chelsea-boots-white",
    },
    {
      src: "assets/image/shoes/chunky-heel-blue-out.png",
      name: "chunky-heel-blue",
    },
    {
      src: "assets/image/shoes/chunky-heel-red-out.png",
      name: "chunky-heel-red",
    },
    {
      src: "assets/image/shoes/chunky-heel-yellow-out.png",
      name: "chunky-heel-yellow",
    },
    {
      src: "assets/image/shoes/crocs-blue-out.png",
      name: "crocs-blue",
    },
    {
      src: "assets/image/shoes/crocs-red-out.png",
      name: "crocs-red",
    },
    {
      src: "assets/image/shoes/crocs-yellow-out.png",
      name: "crocs-yellow",
    },
    {
      src: "assets/image/shoes/fairy-tale-shoes-blue-out.png",
      name: "fairy-tale-shoes-blue",
    },
    {
      src: "assets/image/shoes/fairy-tale-shoes-brown-out.png",
      name: "fairy-tale-shoes-brown",
    },
    {
      src: "assets/image/shoes/fairy-tale-shoes-pink-out.png",
      name: "fairy-tale-shoes-pink",
    },
    {
      src: "assets/image/shoes/foam-shoes-blue-out.png",
      name: "foam-shoes-blue",
    },
    {
      src: "assets/image/shoes/foam-shoes-pink-out.png",
      name: "foam-shoes-pink",
    },
    {
      src: "assets/image/shoes/foam-shoes-white-out.png",
      name: "foam-shoes-white",
    },
    {
      src: "assets/image/shoes/Heelys-coloruful-out.png",
      name: "Heelys-coloruful",
    },
    {
      src: "assets/image/shoes/Heelys-pink-out.png",
      name: "Heelys-pink",
    },
    {
      src: "assets/image/shoes/Heelys-yellow-out.png",
      name: "Heelys-yellow",
    },
    {
      src: "assets/image/shoes/magical-shoes-black-out.png",
      name: "magical-shoes-black",
    },
    {
      src: "assets/image/shoes/magical-shoes-blue-out.png",
      name: "magical-shoes-blue",
    },
    {
      src: "assets/image/shoes/magical-shoes-white-out.png",
      name: "magical-shoes-white",
    },
    {
      src: "assets/image/shoes/rain-boots-pop-out.png",
      name: "rain-boots-pop",
    },
    {
      src: "assets/image/shoes/rain-boots-red-out.png",
      name: "rain-boots-red",
    },
    {
      src: "assets/image/shoes/rain-boots-yellow-out.png",
      name: "rain-boots-yellow",
    },
    {
      src: "assets/image/shoes/sneakers-blue-out.png",
      name: "sneakers-blue",
    },
    {
      src: "assets/image/shoes/sneakers-orange-out.png",
      name: "sneakers-orange",
    },
    {
      src: "assets/image/shoes/sneakers-purple-out.png",
      name: "sneakers-purple",
    },
    {
      src: "assets/image/shoes/super-shoes-black-out.png",
      name: "super-shoes-black",
    },
    {
      src: "assets/image/shoes/super-shoes-blue-out.png",
      name: "super-shoes-blue",
    },
    {
      src: "assets/image/shoes/super-shoes-red-out.png",
      name: "super-shoes-red",
    },
    {
      src: "assets/image/shoes/worker-boots-brown-out.png",
      name: "worker-boots-brown",
    },
    {
      src: "assets/image/shoes/worker-boots-red-out.png",
      name: "worker-boots-red",
    },
    {
      src: "assets/image/shoes/worker-boots-white-out.png",
      name: "worker-boots-white",
    },
  ],
});

let azoneimg = createSlice({
  name: "azoneimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/azone/acoustic-guitar-brown-out.png",
      name: "acoustic-guitar-brown",
    },
    {
      src: "assets/image/azone/acoustic-guitar-gold-reopard-out.png",
      name: "acoustic-guitar-broreopardwn",
    },
    {
      src: "assets/image/azone/acoustic-guitar-mint-out.png",
      name: "acoustic-guitar-mint",
    },
    {
      src: "assets/image/azone/battle-axe-dark-out.png",
      name: "battle-axe-dark",
    },
    {
      src: "assets/image/azone/battle-axe-gray-out.png",
      name: "battle-axe-gray",
    },
    {
      src: "assets/image/azone/battle-axe-white-out.png",
      name: "battle-axe-white",
    },
    {
      src: "assets/image/azone/brush-black-out.png",
      name: "brush-black",
    },
    {
      src: "assets/image/azone/brush-pink-out.png",
      name: "brush-pink",
    },
    {
      src: "assets/image/azone/brush-yellow-out.png",
      name: "brush-yellow",
    },
    {
      src: "assets/image/azone/christmas-candy-mint-out.png",
      name: "christmas-candy-mint",
    },
    {
      src: "assets/image/azone/christmas-candy-purple-out.png",
      name: "christmas-candy-purple",
    },
    {
      src: "assets/image/azone/christmas-candy-red-out.png",
      name: "christmas-candy-red",
    },
    {
      src: "assets/image/azone/crescent-red-out.png",
      name: "crescent-red",
    },
    {
      src: "assets/image/azone/crescent-white-out.png",
      name: "crescent-white",
    },
    {
      src: "assets/image/azone/crescent-yellow-out.png",
      name: "crescent-yellow",
    },
    {
      src: "assets/image/azone/fire-axe-gold-out.png",
      name: "fire-axe-gold",
    },
    {
      src: "assets/image/azone/fire-axe-red-out.png",
      name: "fire-axe-red",
    },
    {
      src: "assets/image/azone/fire-axe-silver-out.png",
      name: "fire-axe-silver",
    },
    {
      src: "assets/image/azone/great-sword-gold-out.png",
      name: "great-sword-gold",
    },
    {
      src: "assets/image/azone/great-sword-iron-out.png",
      name: "great-sword-iron",
    },
    {
      src: "assets/image/azone/great-sword-pink-out.png",
      name: "great-sword-pink",
    },
    {
      src: "assets/image/azone/hanger-with-towels-black-out.png",
      name: "hanger-with-towels-black",
    },
    {
      src: "assets/image/azone/hanger-with-towels-green-out.png",
      name: "hanger-with-towels-green",
    },
    {
      src: "assets/image/azone/hanger-with-towels-white-out.png",
      name: "hanger-with-towels-white",
    },
    {
      src: "assets/image/azone/key-red-out.png",
      name: "key-red",
    },
    {
      src: "assets/image/azone/key-silver-out.png",
      name: "key-silver",
    },
    {
      src: "assets/image/azone/key-yellow-out.png",
      name: "key-yellow",
    },
    {
      src: "assets/image/azone/ladle-black-out.png",
      name: "ladle-black",
    },
    {
      src: "assets/image/azone/ladle-gray-out.png",
      name: "ladle-gray",
    },
    {
      src: "assets/image/azone/ladle-pink-out.png",
      name: "ladle-pink",
    },
    {
      src: "assets/image/azone/magic-broom-black-out.png",
      name: "magic-broom-black",
    },
    {
      src: "assets/image/azone/magic-broom-blue-out.png",
      name: "magic-broom-blue",
    },
    {
      src: "assets/image/azone/magic-broom-white-out.png",
      name: "magic-broom-white",
    },
    {
      src: "assets/image/azone/pencil-black-out.png",
      name: "pencil-black",
    },
    {
      src: "assets/image/azone/pencil-green-out.png",
      name: "pencil-green",
    },
    {
      src: "assets/image/azone/pencil-rainbow-out.png",
      name: "pencil-rainbow",
    },
    {
      src: "assets/image/azone/popsicle-blue-out.png",
      name: "popsicle-blue",
    },
    {
      src: "assets/image/azone/popsicle-green-out.png",
      name: "popsicle-green",
    },
    {
      src: "assets/image/azone/popsicle-yellow-out.png",
      name: "popsicle-yellow",
    },
    {
      src: "assets/image/azone/rifle-black-out.png",
      name: "rifle-black",
    },
    {
      src: "assets/image/azone/rifle-brown-out.png",
      name: "rifle-brown",
    },
    {
      src: "assets/image/azone/rifle-yellow-out.png",
      name: "rifle-yellow",
    },
    {
      src: "assets/image/azone/skateboard-pink-out.png",
      name: "skateboard-pink",
    },
    {
      src: "assets/image/azone/skateboard-purple-out.png",
      name: "skateboard-purple",
    },
    {
      src: "assets/image/azone/skateboard-yellow-out.png",
      name: "skateboard-yellow",
    },
    {
      src: "assets/image/azone/surfboard-blue-out.png",
      name: "surfboard-blue",
    },
    {
      src: "assets/image/azone/surfboard-green-out.png",
      name: "surfboard-green",
    },
    {
      src: "assets/image/azone/surfboard-pink-out.png",
      name: "surfboard-pink",
    },
    {
      src: "assets/image/azone/syringe-black-out.png",
      name: "syringe-black",
    },
    {
      src: "assets/image/azone/syringe-blue-out.png",
      name: "syringe-blue",
    },
    {
      src: "assets/image/azone/syringe-white-out.png",
      name: "syringe-white",
    },
    {
      src: "assets/image/azone/tennis-racket-blue-out.png",
      name: "tennis-racket-blue",
    },
    {
      src: "assets/image/azone/tennis-racket-orange-out.png",
      name: "tennis-racket-orange",
    },
    {
      src: "assets/image/azone/tennis-racket-red-out.png",
      name: "tennis-racket-red",
    },
    {
      src: "assets/image/azone/toy-hammer-black-out.png",
      name: "toy-hammer-black",
    },
    {
      src: "assets/image/azone/toy-hammer-mint-out.png",
      name: "toy-hammer-mint",
    },
    {
      src: "assets/image/azone/toy-hammer-yellow-out.png",
      name: "toy-hammer-yellow",
    },
    {
      src: "assets/image/azone/umbrella-black-out.png",
      name: "umbrella-black",
    },
    {
      src: "assets/image/azone/umbrella-green-out.png",
      name: "umbrella-green",
    },
    {
      src: "assets/image/azone/umbrella-yellow-out.png",
      name: "umbrella-yellow",
    },
  ],
});

let bzoneimg = createSlice({
  name: "bzoneimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/bzone/carrier-beige-out.png",
      name: "carrier-beige",
    },
    { src: "assets/image/bzone/carrier-brown-out.png", name: "carrier-brown" },
    {
      src: "assets/image/bzone/carrier-yellow-out.png",
      name: "carrier-yellow",
    },
    {
      src: "assets/image/bzone/dumbbell-black-out.png",
      name: "dumbbell-black",
    },
    {
      src: "assets/image/bzone/dumbbell-gold-out.png",
      name: "dumbbell-gold",
    },
    {
      src: "assets/image/bzone/dumbbell-red-out.png",
      name: "dumbbell-red",
    },
    {
      src: "assets/image/bzone/excalibur-gold-out.png",
      name: "excalibur-gold",
    },
    {
      src: "assets/image/bzone/excalibur-green-out.png",
      name: "excalibur-green",
    },
    {
      src: "assets/image/bzone/excalibur-pink-out.png",
      name: "excalibur-pink",
    },
    {
      src: "assets/image/bzone/knight's-shield-green-out.png",
      name: "knight's-shield-green",
    },
    {
      src: "assets/image/bzone/knight's-shield-white-out.png",
      name: "knight's-shield-white",
    },
    {
      src: "assets/image/bzone/knight's-shield-yellow-out.png",
      name: "knight's-shield-yellow",
    },
    {
      src: "assets/image/bzone/leather-backpack-brown-out.png",
      name: "leather-backpack-brown",
    },
    {
      src: "assets/image/bzone/leather-backpack-pink-out.png",
      name: "leather-backpack-pink",
    },
    {
      src: "assets/image/bzone/leather-backpack-yellow-out.png",
      name: "leather-backpack-yellow",
    },
    {
      src: "assets/image/bzone/letter-beige-out.png",
      name: "letter-beige",
    },
    {
      src: "assets/image/bzone/letter-black-out.png",
      name: "letter-black",
    },
    {
      src: "assets/image/bzone/letter-white-out.png",
      name: "letter-white",
    },
    {
      src: "assets/image/bzone/mimic-black-out.png",
      name: "mimic-black",
    },
    {
      src: "assets/image/bzone/mimic-brown-out.png",
      name: "mimic-brown",
    },
    {
      src: "assets/image/bzone/mimic-white-out.png",
      name: "mimic-white",
    },
    {
      src: "assets/image/bzone/pistol-gold-out.png",
      name: "pistol-gold",
    },
    {
      src: "assets/image/bzone/pistol-green-out.png",
      name: "pistol-green",
    },
    {
      src: "assets/image/bzone/pistol-silver-out.png",
      name: "pistol-silver",
    },
    {
      src: "assets/image/bzone/safe-gray-out.png",
      name: "safe-gray",
    },
    {
      src: "assets/image/bzone/safe-white-out.png",
      name: "safe-white",
    },
    {
      src: "assets/image/bzone/safe-yellow-out.png",
      name: "safe-yellow",
    },
    {
      src: "assets/image/bzone/spread-bag-black-out.png",
      name: "spread-bag-black",
    },
    {
      src: "assets/image/bzone/spread-bag-gray-out.png",
      name: "spread-bag-gray",
    },
    {
      src: "assets/image/bzone/spread-bag-reopard-out.png",
      name: "spread-bag-reopard",
    },
    {
      src: "assets/image/bzone/stereo-black-out.png",
      name: "stereo-black",
    },
    {
      src: "assets/image/bzone/stereo-blue-out.png",
      name: "stereo-blue",
    },
    {
      src: "assets/image/bzone/stereo-pink-out.png",
      name: "stereo-pink",
    },
    {
      src: "assets/image/bzone/tombstone-blue-out.png",
      name: "tombstone-blue",
    },
    {
      src: "assets/image/bzone/tombstone-gray-out.png",
      name: "tombstone-gray",
    },
    {
      src: "assets/image/bzone/tombstone-orange-out.png",
      name: "tombstone-orange",
    },
    {
      src: "assets/image/bzone/treasure-chest-gold-out.png",
      name: "treasure-chest-gold",
    },
    {
      src: "assets/image/bzone/treasure-chest-white-out.png",
      name: "treasure-chest-white",
    },
    {
      src: "assets/image/bzone/treasure-chest-wood-out.png",
      name: "treasure-chest-wood",
    },
    {
      src: "assets/image/bzone/trophy-gold-out.png",
      name: "trophy-gold",
    },
    {
      src: "assets/image/bzone/trophy-green-out.png",
      name: "trophy-green",
    },
    {
      src: "assets/image/bzone/trophy-pink-out.png",
      name: "trophy-pink",
    },
    {
      src: "assets/image/bzone/Witch's-Cauldron-black-out.png",
      name: "Witch's-Cauldron-black",
    },
    {
      src: "assets/image/bzone/Witch's-Cauldron-blue-out.png",
      name: "Witch's-Cauldron-blue",
    },
    {
      src: "assets/image/bzone/Witch's-Cauldron-white-out.png",
      name: "Witch's-Cauldron-white",
    },
  ],
});

let partnerimg = createSlice({
  name: "partnerimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/czone/bee-blue-out.png", name: "bee-blue" },
    { src: "assets/image/czone/bee-orange-out.png", name: "bee-orange" },
    { src: "assets/image/czone/bee-yellow-out.png", name: "bee-yellow" },
    { src: "assets/image/czone/crow-black-out.png", name: "crow-black" },
    { src: "assets/image/czone/crow-mint-out.png", name: "crow-mint" },
    { src: "assets/image/czone/crow-yellow-out.png", name: "crow-yellow" },
    { src: "assets/image/czone/dinosaur-gold-out.png", name: "dinosaur-gold" },
    {
      src: "assets/image/czone/dinosaur-green-out.png",
      name: "dinosaur-green",
    },
    {
      src: "assets/image/czone/dinosaur-purple-out.png",
      name: "dinosaur-purple",
    },
    {
      src: "assets/image/czone/dog-black-out.png",
      name: "dog-black",
    },
    {
      src: "assets/image/czone/dog-red-out.png",
      name: "dog-red",
    },
    {
      src: "assets/image/czone/dog-white-out.png",
      name: "dog-white",
    },
    {
      src: "assets/image/czone/fox-gold-out.png",
      name: "fox-gold",
    },
    {
      src: "assets/image/czone/fox-orange-out.png",
      name: "fox-orange",
    },
    {
      src: "assets/image/czone/fox-white-out.png",
      name: "fox-white",
    },
    {
      src: "assets/image/czone/ladybug-gold-out.png",
      name: "ladybug-gold",
    },
    {
      src: "assets/image/czone/ladybug-purple-out.png",
      name: "ladybug-purple",
    },
    {
      src: "assets/image/czone/ladybug-red-out.png",
      name: "ladybug-red",
    },
    {
      src: "assets/image/czone/lion-black-out.png",
      name: "lion-black",
    },
    {
      src: "assets/image/czone/lion-blue-out.png",
      name: "lion-blue",
    },
    {
      src: "assets/image/czone/lion-brown-out.png",
      name: "lion-brown",
    },
    {
      src: "assets/image/czone/lizard-blue-out.png",
      name: "lizard-blue",
    },
    {
      src: "assets/image/czone/lizard-pink-out.png",
      name: "lizard-pink",
    },
    {
      src: "assets/image/czone/lizard-yellow-out.png",
      name: "lizard-yellow",
    },
    {
      src: "assets/image/czone/mandrake-beige-out.png",
      name: "mandrake-beige",
    },
    {
      src: "assets/image/czone/mandrake-blue-out.png",
      name: "mandrake-blue",
    },
    {
      src: "assets/image/czone/mandrake-red-out.png",
      name: "mandrake-red",
    },
    {
      src: "assets/image/czone/monkey-brown-out.png",
      name: "monkey-brown",
    },
    {
      src: "assets/image/czone/monkey-gold-out.png",
      name: "monkey-gold",
    },
    {
      src: "assets/image/czone/monkey-white-out.png",
      name: "monkey-white",
    },
    {
      src: "assets/image/czone/octopus-blue-out.png",
      name: "octopus-blue",
    },
    {
      src: "assets/image/czone/octopus-purple-out.png",
      name: "octopus-purple",
    },
    {
      src: "assets/image/czone/octopus-red-out.png",
      name: "octopus-red",
    },
    {
      src: "assets/image/czone/polarbear-black-out.png",
      name: "polarbear-black",
    },
    {
      src: "assets/image/czone/polarbear-brown-out.png",
      name: "polarbear-brown",
    },
    {
      src: "assets/image/czone/polarbear-white-out.png",
      name: "polarbear-white",
    },
    {
      src: "assets/image/czone/totem-brown-out.png",
      name: "totem-brown",
    },
    {
      src: "assets/image/czone/totem-gold-out.png",
      name: "totem-gold",
    },
    {
      src: "assets/image/czone/totem-white-out.png",
      name: "totem-white",
    },
    {
      src: "assets/image/czone/ufo-black-out.png",
      name: "ufo-black",
    },
    {
      src: "assets/image/czone/ufo-gray-out.png",
      name: "ufo-gray",
    },
    {
      src: "assets/image/czone/ufo-pink-out.png",
      name: "ufo-pink",
    },
    {
      src: "assets/image/czone/vintage-robot-black-out.png",
      name: "vintage-robot-black",
    },
    {
      src: "assets/image/czone/vintage-robot-blue-out.png",
      name: "vintage-robot-blue",
    },
    {
      src: "assets/image/czone/vintage-robot-red-out.png",
      name: "vintage-robot-red",
    },
  ],
});

let packageimg = createSlice({
  name: "packageimg",
  initialState: [
    {
      src: "assets/image/package/pack-color-white-out.png",
      name: "pack-color-white",
    },
    {
      src: "assets/image/package/pack-color-blue-out.png",
      name: "pack-color-blue",
    },
    {
      src: "assets/image/package/pack-color-green-out.png",
      name: "pack-color-green",
    },
    {
      src: "assets/image/package/pack-color-purple-out.png",
      name: "pack-color-purple",
    },
    {
      src: "assets/image/package/pack-color-red-out.png",
      name: "pack-color-red",
    },
    {
      src: "assets/image/package/pack-color-yellow-out.png",
      name: "pack-color-yellow",
    },
  ],
});
let sealimg = createSlice({
  name: "sealimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/seal/heart-architecture-out.png",
      name: "heart-architecture",
    },
    { src: "assets/image/seal/heart-artist-out.png", name: "heart-artist" },
    {
      src: "assets/image/seal/heart-beauty-fashion-out.png",
      name: "heart-beauty-fashion",
    },
    {
      src: "assets/image/seal/heart-education-out.png",
      name: "heart-education",
    },
    { src: "assets/image/seal/heart-music-out.png", name: "heart-music" },
    {
      src: "assets/image/seal/heart-science-technology-out.png",
      name: "heart-science-technology",
    },
    {
      src: "assets/image/seal/heart-security-out.png",
      name: "heart-education-securityon",
    },
    {
      src: "assets/image/seal/starburst-architecture-out.png",
      name: "starburst-architecture",
    },
    {
      src: "assets/image/seal/starburst-artist-out.png",
      name: "starburst-artist",
    },
    {
      src: "assets/image/seal/starburst-beauty-fashion-out.png",
      name: "starburst-beauty-fashion",
    },
    {
      src: "assets/image/seal/starburst-education-out.png",
      name: "starburst-education",
    },
    {
      src: "assets/image/seal/starburst-music-out.png",
      name: "starburst-music",
    },
    {
      src: "assets/image/seal/starburst-science-technology-out.png",
      name: "starburst-science-technology",
    },
    {
      src: "assets/image/seal/starburst-security-out.png",
      name: "starburst-security",
    },
  ],
});

let stickerImg = createSlice({
  name: "stickerImg",
  initialState: [
    [
      { src: "assets/image/none.png", name: "none" },
      {
        src: "assets/image/seal/starburst-architecture-out.png",
        name: "starburst-architecture",
      },
      {
        src: "assets/image/seal/starburst-artist-out.png",
        name: "starburst-artist",
      },
      {
        src: "assets/image/seal/starburst-beauty-fashion-out.png",
        name: "starburst-beauty-fashion",
      },
      {
        src: "assets/image/seal/starburst-education-out.png",
        name: "starburst-education",
      },
      {
        src: "assets/image/seal/starburst-music-out.png",
        name: "starburst-music",
      },
      {
        src: "assets/image/seal/starburst-science-technology-out.png",
        name: "starburst-science-technology",
      },
      {
        src: "assets/image/seal/starburst-security-out.png",
        name: "starburst-security",
      },
    ],
    [{ src: "assets/image/none.png", name: "none" }],
    [{ src: "assets/image/none.png", name: "none" }],
    [{ src: "assets/image/none.png", name: "none" }],
    [
      { src: "assets/image/none.png", name: "none" },
      {
        src: "assets/image/seal/heart-architecture-out.png",
        name: "heart-architecture",
      },
      { src: "assets/image/seal/heart-artist-out.png", name: "heart-artist" },
      {
        src: "assets/image/seal/heart-beauty-fashion-out.png",
        name: "heart-beauty-fashion",
      },
      {
        src: "assets/image/seal/heart-education-out.png",
        name: "heart-education",
      },
      { src: "assets/image/seal/heart-music-out.png", name: "heart-music" },
      {
        src: "assets/image/seal/heart-science-technology-out.png",
        name: "heart-science-technology",
      },
      {
        src: "assets/image/seal/heart-security-out.png",
        name: "heart-education-securityon",
      },
    ],
    [{ src: "assets/image/none.png", name: "none" }],
  ],
});

let packslotimg = createSlice({
  name: "packslotimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/packslot/pack-slot-1-out.png", name: "pack-slot-1" },
  ],
});

let packDesignimg = createSlice({
  name: "packDesignimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/packdesign/pack-design-black-out.png",
      name: "pack-design-black",
    },
    {
      src: "assets/image/packdesign/pack-design-blue-out.png",
      name: "pack-design-blue",
    },
    {
      src: "assets/image/packdesign/pack-design-green-out.png",
      name: "pack-design-green",
    },
    {
      src: "assets/image/packdesign/pack-design-mint-out.png",
      name: "pack-design-mint",
    },
    {
      src: "assets/image/packdesign/pack-design-orange-out.png",
      name: "pack-design-orange",
    },
    {
      src: "assets/image/packdesign/pack-design-pink-out.png",
      name: "pack-design-pink",
    },
  ],
});

let patternimg = createSlice({
  name: "patternimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/packpattern/pack-pattern-bear-pattern-out.png",
      name: "pack-pattern-bear-pattern-",
    },
    {
      src: "assets/image/packpattern/pack-pattern-blizard-out.png",
      name: "pack-pattern-blizard",
    },
    {
      src: "assets/image/packpattern/pack-pattern-brick-out.png",
      name: "pack-pattern-brick",
    },
    {
      src: "assets/image/packpattern/pack-pattern-chic-small-flower-out.png",
      name: "pack-pattern-chic-small-flower",
    },
    {
      src: "assets/image/packpattern/pack-pattern-confusion-out.png",
      name: "pack-pattern-confusion",
    },
    {
      src: "assets/image/packpattern/pack-pattern-dots-out.png",
      name: "pack-pattern-dots",
    },
    {
      src: "assets/image/packpattern/pack-pattern-gradation-flower-out.png",
      name: "pack-pattern-gradation-flower",
    },
    {
      src: "assets/image/packpattern/pack-pattern-hawaiian-fabric-out.png",
      name: "pack-pattern-hawaiian-fabric",
    },
    {
      src: "assets/image/packpattern/pack-pattern-japanese-crest-out.png",
      name: "pack-pattern-japanese-crest",
    },
    {
      src: "assets/image/packpattern/pack-pattern-leopard-out.png",
      name: "pack-pattern-leopard",
    },
    {
      src: "assets/image/packpattern/pack-pattern-middle-ages-out.png",
      name: "pack-pattern-middle-ages",
    },
    {
      src: "assets/image/packpattern/pack-pattern-plaid-out.png",
      name: "pack-pattern-plaid",
    },
    {
      src: "assets/image/packpattern/pack-pattern-points-out.png",
      name: "pack-pattern-points",
    },
    {
      src: "assets/image/packpattern/pack-pattern-pop-style-out.png",
      name: "pack-pattern-pop-style",
    },
    {
      src: "assets/image/packpattern/pack-pattern-simple-checkered-out.png",
      name: "pack-pattern-simple-checkered",
    },
    {
      src: "assets/image/packpattern/pack-pattern-wood-out.png",
      name: "pack-pattern-wood",
    },
  ],
});

let boxeffectimg = createSlice({
  name: "boxeffectimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    //Low
    { src: "assets/image/boxeffect/coin-gold-out.png", name: "coin-gold" },
    {
      src: "assets/image/boxeffect/grass-standee-blue-out.png",
      name: "grass-standee-blue",
    },
    {
      src: "assets/image/boxeffect/grass-standee-brown-out.png",
      name: "grass-standee-brown",
    },
    {
      src: "assets/image/boxeffect/grass-standee-green-out.png",
      name: "grass-standee-green",
    },
    {
      src: "assets/image/boxeffect/light-green-out.png",
      name: "light-green",
    },
    {
      src: "assets/image/boxeffect/light-pink-out.png",
      name: "light-pink",
    },
    {
      src: "assets/image/boxeffect/light-yellow-out.png",
      name: "light-yellow",
    },

    //Hight
    {
      src: "assets/image/boxeffect/galaxy-green-out.png",
      name: "galaxy-green",
    },
    {
      src: "assets/image/boxeffect/galaxy-purple-out.png",
      name: "galaxy-purple",
    },
    {
      src: "assets/image/boxeffect/galaxy-red-out.png",
      name: "galaxy-red",
    },
    {
      src: "assets/image/boxeffect/gas-black-out.png",
      name: "gas-black",
    },
    {
      src: "assets/image/boxeffect/gas-green-out.png",
      name: "gas-green",
    },
    {
      src: "assets/image/boxeffect/gas-white-out.png",
      name: "gas-white",
    },
    {
      src: "assets/image/boxeffect/water-blue-out.png",
      name: "water-blue",
    },
    {
      src: "assets/image/boxeffect/water-green-out.png",
      name: "water-green",
    },
    {
      src: "assets/image/boxeffect/water-yellow-out.png",
      name: "water-yellow",
    },
  ],
});

let itemimg = createSlice({
  name: "itemimg",
  initialState: [
    "assets/image/emoticon/skin-color.png",
    "assets/image/emoticon/hair.png",
    "assets/image/emoticon/eyes.png",
    "assets/image/emoticon/top.png",
    "assets/image/emoticon/one-piece.png",
    "assets/image/emoticon/bottom.png",
    "assets/image/emoticon/shoes.png",
    "assets/image/emoticon/head.png",
    "assets/image/emoticon/feeling.png",
    "assets/image/emoticon/face.png",
    "assets/image/emoticon/pack-color.png",
    "assets/image/emoticon/identity1.png",
    "assets/image/emoticon/identity2.png",
    "assets/image/emoticon/partner.png",
    "assets/image/emoticon/pack-design.png",
    "assets/image/emoticon/pack-pattern.png",
    "assets/image/emoticon/box-effect.png",
    "assets/image/emoticon/sticker.png",
  ],
});

let showimg = createSlice({
  name: "showimg",
  initialState: { src: "assets/image/none.png", name: "none" },
  reducers: {
    changeShow(state, action) {
      state.src = action.payload.src;
      state.name = action.payload.name;
    },
  },
});

export let { changeShow } = showimg.actions;

export default configureStore({
  reducer: {
    bodyimg: bodyimg.reducer,
    eyesimg: eyesimg.reducer,
    faceimg: faceimg.reducer,
    hairimg: hairimg.reducer,
    headimg: headimg.reducer,
    topimg: topimg.reducer,
    onepieceimg: onepieceimg.reducer,
    bottomimg: bottomimg.reducer,
    shoesimg: shoesimg.reducer,
    accimg: accimg.reducer,
    azoneimg: azoneimg.reducer,
    bzoneimg: bzoneimg.reducer,
    partnerimg: partnerimg.reducer,
    packageimg: packageimg.reducer,
    sealimg: sealimg.reducer,
    packslotimg: packslotimg.reducer,
    packDesignimg: packDesignimg.reducer,
    patternimg: patternimg.reducer,
    feelingimg: feelingimg.reducer,
    boxeffectimg: boxeffectimg.reducer,
    itemimg: itemimg.reducer,
    showimg: showimg.reducer,
    stickerImg: stickerImg.reducer,
  },
});
