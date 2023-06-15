import { configureStore, createSlice } from "@reduxjs/toolkit";

let bodyimg = createSlice({
  name: "bodyimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/body/asian1-out.png",
    "assets/image/body/asian2-out.png",
    "assets/image/body/black1-out.png",
    "assets/image/body/black2-out.png",
    "assets/image/body/white-out.png",

    "assets/image/body/blue-out.png",
    "assets/image/body/dummy-black-out.png",
    "assets/image/body/dummy-white-out.png",
    "assets/image/body/gold-out.png",
    "assets/image/body/real-gold-out.png",
    "assets/image/body/red-out.png",
  ],
});

let eyesimg = createSlice({
  name: "eyesimg",
  initialState: [
    "assets/image/none.png",

    "assets/image/eyes/eyesH-yellow-out.png",
    "assets/image/eyes/eyesH-white-out.png",
    "assets/image/eyes/eyesH-red-out.png",
    "assets/image/eyes/eyesH-purple-out.png",
    "assets/image/eyes/eyesH-green-out.png",
    "assets/image/eyes/eyesH-brown-out.png",
    "assets/image/eyes/eyesH-blue-out.png",

    "assets/image/eyes/eyesG-yellow-out.png",
    "assets/image/eyes/eyesG-white-out.png",
    "assets/image/eyes/eyesG-red-out.png",
    "assets/image/eyes/eyesG-purple-out.png",
    "assets/image/eyes/eyesG-green-out.png",
    "assets/image/eyes/eyesG-brown-out.png",
    "assets/image/eyes/eyesG-blue-out.png",

    "assets/image/eyes/eyesF-yellow-out.png",
    "assets/image/eyes/eyesF-white-out.png",
    "assets/image/eyes/eyesF-red-out.png",
    "assets/image/eyes/eyesF-purple-out.png",
    "assets/image/eyes/eyesF-green-out.png",
    "assets/image/eyes/eyesF-brown-out.png",
    "assets/image/eyes/eyesF-blue-out.png",

    "assets/image/eyes/eyesE-none-out.png",

    "assets/image/eyes/eyesD-yellow-out.png",
    "assets/image/eyes/eyesD-white-out.png",
    "assets/image/eyes/eyesD-red-out.png",
    "assets/image/eyes/eyesD-purple-out.png",
    "assets/image/eyes/eyesD-green-out.png",
    "assets/image/eyes/eyesD-brown-out.png",
    "assets/image/eyes/eyesD-blue-out.png",

    "assets/image/eyes/eyesC-yellow-out.png",
    "assets/image/eyes/eyesC-white-out.png",
    "assets/image/eyes/eyesC-red-out.png",
    "assets/image/eyes/eyesC-purple-out.png",
    "assets/image/eyes/eyesC-green-out.png",
    "assets/image/eyes/eyesC-brown-out.png",
    "assets/image/eyes/eyesC-blue-out.png",

    "assets/image/eyes/eyesB-yellow-out.png",
    "assets/image/eyes/eyesB-white-out.png",
    "assets/image/eyes/eyesB-red-out.png",
    "assets/image/eyes/eyesB-purple-out.png",
    "assets/image/eyes/eyesB-green-out.png",
    "assets/image/eyes/eyesB-brown-out.png",
    "assets/image/eyes/eyesB-blue-out.png",

    "assets/image/eyes/eyesA-yellow-out.png",
    "assets/image/eyes/eyesA-white-out.png",
    "assets/image/eyes/eyesA-red-out.png",
    "assets/image/eyes/eyesA-purple-out.png",
    "assets/image/eyes/eyesA-green-out.png",
    "assets/image/eyes/eyesA-brown-out.png",
    "assets/image/eyes/eyesA-blue-out.png",
  ],
});

let feelingimg = createSlice({
  name: "feelingimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/feeling/feeling-blush-L.png",
    "assets/image/feeling/feeling-blush-S.png",
    "assets/image/feeling/feeling-nausea.png",
    "assets/image/feeling/feeling-rage.png",
    "assets/image/feeling/feeling-shady.png",
    "assets/image/feeling/feeling-shyness.png",
  ],
});

let faceimg = createSlice({
  name: "faceimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/face/glasses-white-out.png",
    "assets/image/face/beak.png",
    "assets/image/face/dust mask.png",
    "assets/image/face/earring.png",
    "assets/image/face/gas mask.png",
    "assets/image/face/mini glasses.png",
    "assets/image/face/plaid birthday glasses.png",
    "assets/image/face/welding cap.png",
  ],
});

let hairimg = createSlice({
  name: "hairimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/hair/bowl-cut-black-out.png",
    "assets/image/hair/bun-brown-out.png",
    "assets/image/hair/long-brown-out.png",
    "assets/image/hair/dread-lock-brown-out.png",
    "assets/image/hair/pouty-hair-black-out.png",
    "assets/image/hair/pouty-short-hair-black-out.png",
    "assets/image/hair/soft-haircut-black-out.png",
    "assets/image/hair/long-hair2-brown-out.png",
    "assets/image/hair/short-cut-brown-out.png",
  ],
});

let headimg = createSlice({
  name: "headimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/head/cap-yellow-out.png",
    "assets/image/head/gold-crown-out.png",
    "assets/image/head/head-phones-sky-blue-out.png",
    "assets/image/head/magical-hat-out.png",
    "assets/image/head/bucket-hat-black-out.png",
    "assets/image/head/band.png",
    "assets/image/head/beret.png",
  ],
});

let accimg = createSlice({
  name: "accimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/Acc/chain-necklace-gray-out.png",
    "assets/image/Acc/pointed-necklace-green-out.png",
  ],
});

let topimg = createSlice({
  name: "topimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/top/cardigan-gray-out.png",
    "assets/image/top/coach-jacket-indigo-out.png",
    "assets/image/top/gingham-shirts-green-out.png",
    "assets/image/top/hoodie-zip-up-white-out.png",
    "assets/image/top/lace-crop-top-black-out.png",
    "assets/image/top/long-sleeved-T-shirt-blue-out.png",
    "assets/image/top/long-sleeved-T-shirt-red-out.png",
    "assets/image/top/polo-shirts-blue-out.png",
    "assets/image/top/short-sleeved-T-shirt-blue-out.png",
    "assets/image/top/short-sleeved-T-shirt-red-out.png",
    "assets/image/top/sleeveless-shirt-blue-out.png",
    "assets/image/top/sleeveless-shirt-red-out.png",
    "assets/image/top/crop-top-white-out.png",
    "assets/image/top/turtle-neck-black-out.png",
    "assets/image/top/leopard-wide-shirt-yellow-out.png",
    "assets/image/top/off-shoulder-red-out.png",
    "assets/image/top/shirt-knit-pink-out.png",
    "assets/image/top/short-sleeve-heart-knit-red-out.png",
    "assets/image/top/short-sleeve-shirt-black-out.png",
    "assets/image/top/blazer-black-out.png",
    "assets/image/top/blazer-short-black-out.png",
    "assets/image/top/hoodie-pocket-black-out.png",
    "assets/image/top/sleeveless-shirt2-white-out.png",
    "assets/image/top/varsity-black-out.png",
    "assets/image/top/trench-coat-1.png",
    "assets/image/top/trench-coat-2.png",
  ],
});

let onepieceimg = createSlice({
  name: "onepieceimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/top-onepiece/magical-dress-indigo-out.png",
    "assets/image/top-onepiece/suspenders-dress-blue-out.png",
    "assets/image/top-onepiece/tight-dress-white-out.png",
    "assets/image/top-onepiece/zigzag-dress-red-out.png",
  ],
});

let bottomimg = createSlice({
  name: "bottomimg",
  initialState: [
    "assets/image/none.png",
    // Low
    "assets/image/bottom-Low/balloon-pants-brown-out.png",
    "assets/image/bottom-Low/long-pants-black-out.png",
    "assets/image/bottom-Low/long-pants-blue-out.png",
    "assets/image/bottom-Low/short-pants-black-out.png",
    "assets/image/bottom-Low/short-pants-blue-out.png",
    "assets/image/bottom-Low/check-pants-green-out.png",
    "assets/image/bottom-Low/choke-pants-black-out.png",
    "assets/image/bottom-Low/ring-pants-mint-out.png",
    "assets/image/bottom-Low/ripped-panties-red-out.png",

    // Hight
    "assets/image/bottom-High/long-skirt-out.png",
    "assets/image/bottom-High/mini-skirt-black-out.png",
    "assets/image/bottom-High/lace-skirt-black-out.png",
    "assets/image/bottom-High/boots-cut-pants-blue-out.png",
    "assets/image/bottom-High/boots-cut-pants-black-out.png",
    "assets/image/bottom-High/boots-cut-pants-black-checkered-out.png",
    "assets/image/bottom-High/cracked-pants-blue-out.png",
    "assets/image/bottom-High/flower-skirt-blue-out.png",
  ],
});
let shoesimg = createSlice({
  name: "shoesimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/shoes/boots-brown-out.png",
    "assets/image/shoes/fairy-tale-shoes-blue-out.png",
    "assets/image/shoes/magical-shoes-out.png",
    "assets/image/shoes/sneakers-orange-out.png",
    "assets/image/shoes/foam-shoes2-white-out.png",
    "assets/image/shoes/foam-shoes1-white-out.png",
    "assets/image/shoes/chunky-heel-red-out.png",
    "assets/image/shoes/basketball-shoes-blue-out.png",
    "assets/image/shoes/crocs-blue-out.png",
    "assets/image/shoes/Heelys-pink-out.png",
    "assets/image/shoes/smooth-shoes-green-out.png",
    "assets/image/shoes/balance-shoes-gray-out.png",
    "assets/image/shoes/canvas-shoes-red-out.png",
    "assets/image/shoes/chelsea-boots-black-out.png",
    "assets/image/shoes/rain-boots-red-out.png",
    "assets/image/shoes/super-shoes-black-out.png",
    "assets/image/shoes/worker-boots-brown-out.png",
    "assets/image/shoes/authentic-sneakers.png",
    "assets/image/shoes/sandal.png",
    "assets/image/shoes/shoes-stocking.png",
    "assets/image/shoes/slip-sneakers.png",
    "assets/image/shoes/Thong-Sandal.png",
  ],
});

let azoneimg = createSlice({
  name: "azoneimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/azone/acoustic-guitar-brown-out.png",
    "assets/image/azone/great-sword-yellow-out.png",
    "assets/image/azone/magic-broom-indigo-out.png",
    "assets/image/azone/mjolnir.png",
    "assets/image/azone/pistol.png",
  ],
});

let bzoneimg = createSlice({
  name: "bzoneimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/bzone/knight's-shield-yellow-out.png",
    "assets/image/bzone/stereo-out.png",
    "assets/image/bzone/trophy-gold-out.png",
    "assets/image/bzone/Witch's-Cauldron-out.png",
  ],
});

let czoneimg = createSlice({
  name: "czoneimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/czone/crow-out.png",
    "assets/image/czone/lion-out.png",
    "assets/image/czone/wooden-totem-out.png",
    "assets/image/czone/bee.png",
    "assets/image/czone/butterfly.png",
    "assets/image/czone/dog.png",
    "assets/image/czone/elephant.png",
    "assets/image/czone/snake.png",
  ],
});

let packageimg = createSlice({
  name: "packageimg",
  initialState: [
    // "assets/image/none.png",
    "assets/image/package/pack-color-white-out.png",
    "assets/image/package/pack-color-blue-out.png",
    "assets/image/package/pack-color-green-out.png",
    "assets/image/package/pack-color-purple-out.png",
    "assets/image/package/pack-color-red-out.png",
    "assets/image/package/pack-color-yellow-out.png",
  ],
});
let sealimg = createSlice({
  name: "sealimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/seal/seal-silver1-out.png",
    "assets/image/seal/seal-silver2-out.png",
    "assets/image/seal/seal-silver3-out.png",
    "assets/image/seal/dia-a.png",
    "assets/image/seal/dia-b.png",
    "assets/image/seal/haert-a.png",
    "assets/image/seal/haert-b.png",
    "assets/image/seal/seal-DIA.png",
    "assets/image/seal/star-a.png",
    "assets/image/seal/star-b.png",
    "assets/image/seal/zigzag-a.png",
    "assets/image/seal/zigzag-b.png",

    // 06-13추가
    "assets/image/seal/heart-architecture-out.png",
    "assets/image/seal/heart-artist-out.png",
    "assets/image/seal/heart-beauty-fashion-out.png",
    "assets/image/seal/heart-education-out.png",
    "assets/image/seal/heart-music-out.png",
    "assets/image/seal/heart-science-technology-out.png",
    "assets/image/seal/heart-security-out.png",
    "assets/image/seal/starburst-architecture-out.png",
    "assets/image/seal/starburst-artist-out.png",
    "assets/image/seal/starburst-beauty-fashion-out.png",
    "assets/image/seal/starburst-education-out.png",
    "assets/image/seal/starburst-music-out.png",
    "assets/image/seal/starburst-science-technology-out.png",
    "assets/image/seal/starburst-security-out.png",
  ],
});

let packslotimg = createSlice({
  name: "packslotimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/packslot/pack-slot-1-out.png",
  ],
});

let packDesignimg = createSlice({
  name: "packDesignimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/packdesign/pack-design-black-out.png",
    "assets/image/packdesign/pack-design-blue-out.png",
    "assets/image/packdesign/pack-design-green-out.png",
    "assets/image/packdesign/pack-design-mint-out.png",
    "assets/image/packdesign/pack-design-orange-out.png",
    "assets/image/packdesign/pack-design-pink-out.png",
  ],
});

let patternimg = createSlice({
  name: "patternimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/packpattern/pack-pattern-bear-pattern-out.png",
    "assets/image/packpattern/pack-pattern-blizard-out.png",
    "assets/image/packpattern/pack-pattern-brick-out.png",
    "assets/image/packpattern/pack-pattern-chic-small-flower-out.png",
    "assets/image/packpattern/pack-pattern-confusion-out.png",
    "assets/image/packpattern/pack-pattern-dots-out.png",
    "assets/image/packpattern/pack-pattern-gradation-flower-out.png",
    "assets/image/packpattern/pack-pattern-hawaiian-fabric-out.png",
    "assets/image/packpattern/pack-pattern-japanese-crest-out.png",
    "assets/image/packpattern/pack-pattern-leopard-out.png",
    "assets/image/packpattern/pack-pattern-middle-ages-out.png",
    "assets/image/packpattern/pack-pattern-plaid-out.png",
    "assets/image/packpattern/pack-pattern-points-out.png",
    "assets/image/packpattern/pack-pattern-pop-style-out.png",
    "assets/image/packpattern/pack-pattern-simple-checkered-out.png",
    "assets/image/packpattern/pack-pattern-wood-out.png",
  ],
});

let boxeffectimg = createSlice({
  name: "boxeffectimg",
  initialState: [
    "assets/image/none.png",
    "assets/image/boxeffect/coin-bronze-out.png",
    "assets/image/boxeffect/coin-silver-out.png",
    "assets/image/boxeffect/coin-gold-out.png",
    "assets/image/boxeffect/grass-standee-out.png",
    "assets/image/boxeffect/light-yellow-out.png",
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
    czoneimg: czoneimg.reducer,
    packageimg: packageimg.reducer,
    sealimg: sealimg.reducer,
    packslotimg: packslotimg.reducer,
    packDesignimg: packDesignimg.reducer,
    patternimg: patternimg.reducer,
    feelingimg: feelingimg.reducer,
    boxeffectimg: boxeffectimg.reducer,
    itemimg: itemimg.reducer,
  },
});
