import { configureStore, createSlice } from "@reduxjs/toolkit";

let bodyimg = createSlice({
  name: "bodyimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/body/asian1-out.png", name: "asian1" },
    { src: "assets/image/body/asian2-out.png", name: "asian2" },
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
      src: "assets/image/feeling/feeling-blush-L.png",
      name: "feeling-blush-L",
    },
    {
      src: "assets/image/feeling/feeling-blush-S.png",
      name: "feeling-blush-S",
    },
    { src: "assets/image/feeling/feeling-nausea.png", name: "feeling-nausea" },
    { src: "assets/image/feeling/feeling-rage.png", name: "feeling-rage" },
    { src: "assets/image/feeling/feeling-shady.png", name: "feeling-shady" },
    {
      src: "assets/image/feeling/feeling-shyness.png",
      name: "feeling-shyness",
    },
  ],
});

let faceimg = createSlice({
  name: "faceimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/face/glasses-white-out.png", name: "glasses-white" },
    { src: "assets/image/face/beak.png", name: "beak" },
    { src: "assets/image/face/dust mask.png", name: "dust mask" },
    { src: "assets/image/face/earring.png", name: "earring" },
    { src: "assets/image/face/gas mask.png", name: "gas mask" },
    { src: "assets/image/face/mini glasses.png", name: "mini glasses" },
    {
      src: "assets/image/face/plaid birthday glasses.png",
      name: "plaid birthday glasses",
    },
    { src: "assets/image/face/welding cap.png", name: "welding cap" },
  ],
});

let hairimg = createSlice({
  name: "hairimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/hair/bowl-cut-black-out.png", name: "bowl-cut-black" },
    { src: "assets/image/hair/bun-brown-out.png", name: "bun-brown" },
    { src: "assets/image/hair/long-brown-out.png", name: "long-brown" },
    {
      src: "assets/image/hair/dread-lock-brown-out.png",
      name: "dread-lock-brown",
    },
    {
      src: "assets/image/hair/pouty-hair-black-out.png",
      name: "pouty-hair-black",
    },
    {
      src: "assets/image/hair/pouty-short-hair-black-out.png",
      name: "pouty-short-hair-black",
    },
    {
      src: "assets/image/hair/soft-haircut-black-out.png",
      name: "soft-haircut-black",
    },
    {
      src: "assets/image/hair/long-hair2-brown-out.png",
      name: "long-hair2-brown",
    },
    {
      src: "assets/image/hair/short-cut-brown-out.png",
      name: "short-cut-brown",
    },
  ],
});

let headimg = createSlice({
  name: "headimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/head/cap-yellow-out.png", name: "cap-yellow" },
    { src: "assets/image/head/gold-crown-out.png", name: "gold-crown" },
    {
      src: "assets/image/head/head-phones-sky-blue-out.png",
      name: "head-phones-sky-blue",
    },
    { src: "assets/image/head/magical-hat-out.png", name: "magical-hat" },
    {
      src: "assets/image/head/bucket-hat-black-out.png",
      name: "bucket-hat-black",
    },
    { src: "assets/image/head/band.png", name: "band" },
    { src: "assets/image/head/beret.png", name: "beret" },
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
    { src: "assets/image/top/cardigan-gray-out.png", name: "cardigan-gray" },
    {
      src: "assets/image/top/coach-jacket-indigo-out.png",
      name: "coach-jacket-indigo",
    },
    {
      src: "assets/image/top/gingham-shirts-green-out.png",
      name: "gingham-shirts-green",
    },
    {
      src: "assets/image/top/hoodie-zip-up-white-out.png",
      name: "hoodie-zip-up-white",
    },
    {
      src: "assets/image/top/lace-crop-top-black-out.png",
      name: "lace-crop-top-black",
    },
    {
      src: "assets/image/top/long-sleeved-T-shirt-blue-out.png",
      name: "long-sleeved-T-shirt-blue",
    },
    {
      src: "assets/image/top/long-sleeved-T-shirt-red-out.png",
      name: "long-sleeved-T-shirt-red",
    },
    {
      src: "assets/image/top/polo-shirts-blue-out.png",
      name: "polo-shirts-blue",
    },
    {
      src: "assets/image/top/short-sleeved-T-shirt-blue-out.png",
      name: "short-sleeved-T-shirt-blue",
    },
    {
      src: "assets/image/top/short-sleeved-T-shirt-red-out.png",
      name: "short-sleeved-T-shirt-red",
    },
    {
      src: "assets/image/top/sleeveless-shirt-blue-out.png",
      name: "sleeveless-shirt-blue",
    },
    {
      src: "assets/image/top/sleeveless-shirt-red-out.png",
      name: "sleeveless-shirt-red",
    },
    { src: "assets/image/top/crop-top-white-out.png", name: "crop-top-white" },
    {
      src: "assets/image/top/turtle-neck-black-out.png",
      name: "turtle-neck-black",
    },
    {
      src: "assets/image/top/leopard-wide-shirt-yellow-out.png",
      name: "leopard-wide-shirt-yellow",
    },
    {
      src: "assets/image/top/off-shoulder-red-out.png",
      name: "off-shoulder-red",
    },
    {
      src: "assets/image/top/shirt-knit-pink-out.png",
      name: "shirt-knit-pink",
    },
    {
      src: "assets/image/top/short-sleeve-heart-knit-red-out.png",
      name: "short-sleeve-heart-knit-red",
    },
    {
      src: "assets/image/top/short-sleeve-shirt-black-out.png",
      name: "short-sleeve-shirt-black",
    },
    { src: "assets/image/top/blazer-black-out.png", name: "blazer-black" },
    {
      src: "assets/image/top/blazer-short-black-out.png",
      name: "blazer-short-black",
    },
    {
      src: "assets/image/top/hoodie-pocket-black-out.png",
      name: "hoodie-pocket-black",
    },
    {
      src: "assets/image/top/sleeveless-shirt2-white-out.png",
      name: "sleeveless-shirt2-white",
    },
    { src: "assets/image/top/varsity-black-out.png", name: "varsity-black" },
    { src: "assets/image/top/trench-coat-1.png", name: "trench-coat-1" },
    { src: "assets/image/top/trench-coat-2.png", name: "trench-coat-2" },
  ],
});

let onepieceimg = createSlice({
  name: "onepieceimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/top-onepiece/magical-dress-indigo-out.png",
      name: "magical-dress-indigo",
    },
    {
      src: "assets/image/top-onepiece/suspenders-dress-blue-out.png",
      name: "suspenders-dress-blue",
    },
    {
      src: "assets/image/top-onepiece/tight-dress-white-out.png",
      name: "tight-dress-white",
    },
    {
      src: "assets/image/top-onepiece/zigzag-dress-red-out.png",
      name: "zigzag-dress-red",
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
      name: "none",
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
      src: "assets/image/bottom-Low/short-pants-black-out.png",
      name: "short-pants-black",
    },
    {
      src: "assets/image/bottom-Low/short-pants-blue-out.png",
      name: "short-pants-blue",
    },
    {
      src: "assets/image/bottom-Low/check-pants-green-out.png",
      name: "check-pants-green",
    },
    {
      src: "assets/image/bottom-Low/choke-pants-black-out.png",
      name: "choke-pants-black",
    },
    {
      src: "assets/image/bottom-Low/ring-pants-mint-out.png",
      name: "ring-pants-mint",
    },
    {
      src: "assets/image/bottom-Low/ripped-panties-red-out.png",
      name: "ripped-panties-red",
    },

    // Hight
    {
      src: "assets/image/bottom-High/long-skirt-out.png",
      name: "long-skirt-out",
    },
    {
      src: "assets/image/bottom-High/mini-skirt-black-out.png",
      name: "mini-skirt-black-",
    },
    {
      src: "assets/image/bottom-High/lace-skirt-black-out.png",
      name: "lace-skirt-black",
    },
    {
      src: "assets/image/bottom-High/boots-cut-pants-blue-out.png",
      name: "boots-cut-pants-blue",
    },
    {
      src: "assets/image/bottom-High/boots-cut-pants-black-out.png",
      name: "boots-cut-pants-black",
    },
    {
      src: "assets/image/bottom-High/boots-cut-pants-black-checkered-out.png",
      name: "boots-cut-pants-black-checkered",
    },
    {
      src: "assets/image/bottom-High/cracked-pants-blue-out.png",
      name: "cracked-pants-blue-out",
    },
    {
      src: "assets/image/bottom-High/flower-skirt-blue-out.png",
      name: "flower-skirt-blue",
    },
  ],
});
let shoesimg = createSlice({
  name: "shoesimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/shoes/boots-brown-out.png", name: "boots-brown" },
    {
      src: "assets/image/shoes/fairy-tale-shoes-blue-out.png",
      name: "fairy-tale-shoes-blue",
    },
    { src: "assets/image/shoes/magical-shoes-out.png", name: "magical-shoes" },
    {
      src: "assets/image/shoes/sneakers-orange-out.png",
      name: "sneakers-orange",
    },
    {
      src: "assets/image/shoes/foam-shoes2-white-out.png",
      name: "foam-shoes2-white",
    },
    {
      src: "assets/image/shoes/foam-shoes1-white-out.png",
      name: "foam-shoes1-white",
    },
    {
      src: "assets/image/shoes/chunky-heel-red-out.png",
      name: "chunky-heel-red",
    },
    {
      src: "assets/image/shoes/basketball-shoes-blue-out.png",
      name: "basketball-shoes-blue",
    },
    { src: "assets/image/shoes/crocs-blue-out.png", name: "crocs-blue" },
    { src: "assets/image/shoes/Heelys-pink-out.png", name: "Heelys-pink" },
    {
      src: "assets/image/shoes/smooth-shoes-green-out.png",
      name: "smooth-shoes-green",
    },
    {
      src: "assets/image/shoes/balance-shoes-gray-out.png",
      name: "balance-shoes-gray",
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
      src: "assets/image/shoes/rain-boots-red-out.png",
      name: "rain-boots-red",
    },
    {
      src: "assets/image/shoes/super-shoes-black-out.png",
      name: "super-shoes-black",
    },
    {
      src: "assets/image/shoes/worker-boots-brown-out.png",
      name: "worker-boots-brown",
    },
    {
      src: "assets/image/shoes/authentic-sneakers.png",
      name: "authentic-sneakers",
    },
    { src: "assets/image/shoes/sandal.png", name: "sandal" },
    // { src: "assets/image/shoes/shoes-stocking.png", name: "shoes-stocking" },
    { src: "assets/image/shoes/slip-sneakers.png", name: "slip-sneakers" },
    { src: "assets/image/shoes/Thong-Sandal.png", name: "Thong-Sandal" },
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
      src: "assets/image/azone/great-sword-yellow-out.png",
      name: "great-sword-yellow",
    },
    {
      src: "assets/image/azone/magic-broom-indigo-out.png",
      name: "magic-broom-indigo",
    },
    { src: "assets/image/azone/mjolnir.png", name: "mjolnir" },
    { src: "assets/image/azone/pistol.png", name: "pistol" },
  ],
});

let bzoneimg = createSlice({
  name: "bzoneimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    {
      src: "assets/image/bzone/knight's-shield-yellow-out.png",
      name: "knight's-shield-yellow-out",
    },
    { src: "assets/image/bzone/stereo-out.png", name: "stereo" },
    { src: "assets/image/bzone/trophy-gold-out.png", name: "trophy-gold" },
    {
      src: "assets/image/bzone/Witch's-Cauldron-out.png",
      name: "Witch's-Cauldron",
    },
  ],
});

let partnerimg = createSlice({
  name: "partnerimg",
  initialState: [
    { src: "assets/image/none.png", name: "none" },
    { src: "assets/image/czone/crow-out.png", name: "crow" },
    { src: "assets/image/czone/lion-out.png", name: "lion" },
    { src: "assets/image/czone/wooden-totem-out.png", name: "wooden-totem" },
    { src: "assets/image/czone/bee.png", name: "bee" },
    { src: "assets/image/czone/butterfly.png", name: "butterfly" },
    { src: "assets/image/czone/dog.png", name: "dog" },
    { src: "assets/image/czone/elephant.png", name: "elephant" },
    { src: "assets/image/czone/snake.png", name: "snake" },
  ],
});

let packageimg = createSlice({
  name: "packageimg",
  initialState: [
    // "assets/image/none.png",
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
    { src: "assets/image/seal/seal-silver1-out.png", name: "seal-silver1-out" },
    { src: "assets/image/seal/seal-silver2-out.png", name: "seal-silver2-out" },
    { src: "assets/image/seal/seal-silver3-out.png", name: "seal-silver3-out" },
    { src: "assets/image/seal/dia-a.png", name: "dia-a" },
    { src: "assets/image/seal/dia-b.png", name: "dia-b" },
    { src: "assets/image/seal/haert-a.png", name: "haert-a" },
    { src: "assets/image/seal/haert-b.png", name: "haert-b" },
    { src: "assets/image/seal/seal-DIA.png", name: "seal-DIA" },
    { src: "assets/image/seal/star-a.png", name: "star-a" },
    { src: "assets/image/seal/star-b.png", name: "star-b" },
    { src: "assets/image/seal/zigzag-a.png", name: "zigzag-a" },
    { src: "assets/image/seal/zigzag-b.png", name: "zigzag-b" },
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
      name: "heart-educatisecurityon",
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
    { src: "assets/image/boxeffect/coin-bronze-out.png", name: "coin-bronze" },
    { src: "assets/image/boxeffect/coin-silver-out.png", name: "coin-silver" },
    { src: "assets/image/boxeffect/coin-gold-out.png", name: "coin-gold" },
    {
      src: "assets/image/boxeffect/grass-standee-out.png",
      name: "grass-standee",
    },
    {
      src: "assets/image/boxeffect/light-yellow-out.png",
      name: "light-yellow",
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
    "assets/image/emoticon/identity1.png",
    "assets/image/emoticon/identity2.png",
    "assets/image/emoticon/partner.png",
    "assets/image/emoticon/pack-color.png",
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
  },
});
