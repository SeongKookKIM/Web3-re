/*eslint-disable */

function handleBodyImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    // case "/assets/image/none.png":
    //   document.querySelector(".default-body").src = "";
    //   document.querySelector(".default-arms").src = "";
    //   break;
    case "/assets/image/body/asian1-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/asian1-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/asian1-arms-in.png";
      break;
    case "/assets/image/body/asian2-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/asian2-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/asian2-arms-in.png";
      break;
    case "/assets/image/body/black1-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/black1-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/black1-arms-in.png";
      break;
    case "/assets/image/body/black2-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/black2-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/black2-arms-in.png";
      break;
    case "/assets/image/body/white-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/white-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/white-arms-in.png";
      break;

    case "/assets/image/body/blue-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/blue-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/blue-arms-in.png";
      break;
    case "/assets/image/body/dummy-black-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/dummy-black-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/dummy-black-arms-in.png";
      break;
    case "/assets/image/body/dummy-white-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/dummy-white-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/dummy-white-arms-in.png";
      break;
    case "/assets/image/body/gold-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/gold-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/gold-arms-in.png";
      break;
    case "/assets/image/body/real-gold-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/real-gold-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/real-gold-arms-in.png";
      break;
    case "/assets/image/body/red-out.png":
      document.querySelector(".default-body").src =
        "/assets/image/default-arms/red-body-in.png";
      document.querySelector(".default-arms").src =
        "/assets/image/default-arms/red-arms-in.png";
      break;
    default:
      break;
  }
}

function handleHairImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-hair").src = "";
      break;
    case "/assets/image/hair/bowl-cut-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/bowl-cut-black-in.png";
      break;
    case "/assets/image/hair/bun-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/bun-brown-in.png";
      break;
    case "/assets/image/hair/long-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/long-brown-in.png";
      break;
    case "/assets/image/hair/dread-lock-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/dread-lock-brown-in.png";
      break;
    case "/assets/image/hair/pouty-hair-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/pouty-hair-black-in.png";
      break;
    case "/assets/image/hair/pouty-short-hair-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/pouty-short-hair-black-in.png";
      break;
    case "/assets/image/hair/soft-haircut-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/soft-haircut-black-in.png";
      break;
    case "/assets/image/hair/long-hair2-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/long-hair2-brown-in.png";
      break;
    case "/assets/image/hair/short-cut-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/short-cut-brown-in.png";
      break;
    default:
      break;
  }
}
function handleEyesImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-eye").src = "";
      break;

    case "/assets/image/eyes/eyesH-yellow-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesH-yellow-in.png";
      break;
    case "/assets/image/eyes/eyesH-white-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesH-white-in.png";
      break;
    case "/assets/image/eyes/eyesH-red-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesH-red-in.png";
      break;
    case "/assets/image/eyes/eyesH-purple-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesH-purple-in.png";
      break;
    case "/assets/image/eyes/eyesH-green-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesH-green-in.png";
      break;
    case "/assets/image/eyes/eyesH-brown-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesH-brown-in.png";
      break;
    case "/assets/image/eyes/eyesH-blue-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesH-blue-in.png";
      break;
    case "/assets/image/eyes/eyesG-yellow-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesG-yellow-in.png";
      break;
    case "/assets/image/eyes/eyesG-white-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesG-white-in.png";
      break;
    case "/assets/image/eyes/eyesG-red-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesG-red-in.png";
      break;
    case "/assets/image/eyes/eyesG-purple-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesG-purple-in.png";
      break;
    case "/assets/image/eyes/eyesG-green-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesG-green-in.png";
      break;
    case "/assets/image/eyes/eyesG-brown-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesG-brown-in.png";
      break;
    case "/assets/image/eyes/eyesG-blue-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesG-blue-in.png";
      break;
    case "/assets/image/eyes/eyesF-yellow-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesF-yellow-in.png";
      break;
    case "/assets/image/eyes/eyesF-white-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesF-white-in.png";
      break;
    case "/assets/image/eyes/eyesF-red-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesF-red-in.png";
      break;
    case "/assets/image/eyes/eyesF-purple-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesF-purple-in.png";
      break;
    case "/assets/image/eyes/eyesF-green-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesF-green-in.png";
      break;
    case "/assets/image/eyes/eyesF-brown-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesF-brown-in.png";
      break;
    case "/assets/image/eyes/eyesF-blue-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesF-blue-in.png";
      break;
    case "/assets/image/eyes/eyesE-none-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesE-none-in.png";
      break;
    case "/assets/image/eyes/eyesD-yellow-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesD-yellow-in.png";
      break;
    case "/assets/image/eyes/eyesD-white-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesD-white-in.png";
      break;
    case "/assets/image/eyes/eyesD-red-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesD-red-in.png";
      break;
    case "/assets/image/eyes/eyesD-purple-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesD-purple-in.png";
      break;
    case "/assets/image/eyes/eyesD-green-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesD-green-in.png";
      break;
    case "/assets/image/eyes/eyesD-brown-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesD-brown-in.png";
      break;
    case "/assets/image/eyes/eyesD-blue-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesD-blue-in.png";
      break;
    case "/assets/image/eyes/eyesD-blue-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesC-yellow-in.png";
      break;
    case "/assets/image/eyes/eyesC-yellow-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesC-yellow-in.png";
      break;
    case "/assets/image/eyes/eyesC-white-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesC-white-in.png";
      break;
    case "/assets/image/eyes/eyesC-red-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesC-red-in.png";
      break;
    case "/assets/image/eyes/eyesC-purple-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesC-purple-in.png";
      break;
    case "/assets/image/eyes/eyesC-green-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesC-green-in.png";
      break;
    case "/assets/image/eyes/eyesC-brown-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesC-brown-in.png";
      break;
    case "/assets/image/eyes/eyesC-blue-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesC-blue-in.png";
      break;
    case "/assets/image/eyes/eyesB-yellow-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesB-yellow-in.png";
      break;
    case "/assets/image/eyes/eyesB-white-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesB-white-in.png";
      break;
    case "/assets/image/eyes/eyesB-red-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesB-red-in.png";
      break;
    case "/assets/image/eyes/eyesB-purple-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesB-purple-in.png";
      break;
    case "/assets/image/eyes/eyesB-green-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesB-green-in.png";
      break;
    case "/assets/image/eyes/eyesB-brown-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesB-brown-in.png";
      break;
    case "/assets/image/eyes/eyesB-blue-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesB-blue-in.png";
      break;
    case "/assets/image/eyes/eyesA-yellow-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesA-yellow-in.png";
      break;
    case "/assets/image/eyes/eyesA-white-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesA-white-in.png";
      break;
    case "/assets/image/eyes/eyesA-red-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesA-red-in.png";
      break;
    case "/assets/image/eyes/eyesA-purple-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesA-purple-in.png";
      break;
    case "/assets/image/eyes/eyesA-green-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesA-green-in.png";
      break;
    case "/assets/image/eyes/eyesA-brown-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesA-brown-in.png";
      break;
    case "/assets/image/eyes/eyesA-blue-out.png":
      document.querySelector(".default-eye").src =
        "/assets/image/eyes/eyesA-blue-in.png";
      break;
    default:
      break;
  }
}

function handleTopImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");
  document.querySelector(".default-top").src = relativeSrc;
  let onepiece = document.querySelector(".default-onepiece");
  onepiece.src = "";

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-top").src = "";
      break;
    case "/assets/image/top/cardigan-gray-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/cardigan-gray-in.png";
      break;
    case "/assets/image/top/coach-jacket-indigo-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/coach-jacket-indigo-in.png";
      break;
    case "/assets/image/top/gingham-shirts-green-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/gingham-shirts-green-in.png";
      break;
    case "/assets/image/top/hoodie-zip-up-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/hoodie-zip-up-white-in.png";
      break;
    case "/assets/image/top/lace-crop-top-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/lace-crop-top-black-in.png";
      break;
    case "/assets/image/top/long-sleeved-T-shirt-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/long-sleeved-T-shirt-blue-in.png";
      break;
    case "/assets/image/top/long-sleeved-T-shirt-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/long-sleeved-T-shirt-red-in.png";
      break;
    case "/assets/image/top/polo-shirts-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/polo-shirts-blue-in.png";
      break;
    case "/assets/image/top/short-sleeved-T-shirt-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/short-sleeved-T-shirt-blue-in.png";
      break;
    case "/assets/image/top/short-sleeved-T-shirt-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/short-sleeved-T-shirt-red-in.png";
      break;
    case "/assets/image/top/sleeveless-shirt-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/sleeveless-shirt-blue-in.png";
      break;
    case "/assets/image/top/sleeveless-shirt-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/sleeveless-shirt-red-in.png";
      break;
    case "/assets/image/top/crop-top-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/crop-top-white-in.png";
      break;
    case "/assets/image/top/turtle-neck-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/turtle-neck-black-in.png";
      break;
    case "/assets/image/top/leopard-wide-shirt-yellow-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/leopard-wide-shirt-yellow-in.png";
      break;
    case "/assets/image/top/off-shoulder-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/off-shoulder-red-in.png";
      break;
    case "/assets/image/top/shirt-knit-pink-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/shirt-knit-pink-in.png";
      break;
    case "/assets/image/top/short-sleeve-heart-knit-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/short-sleeve-heart-knit-red-in.png";
      break;
    case "/assets/image/top/short-sleeve-shirt-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/short-sleeve-shirt-black-in.png";
      break;
    case "/assets/image/top/blazer-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/blazer-black-in.png";
      break;
    case "/assets/image/top/blazer-short-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/blazer-short-black-in.png";
      break;
    case "/assets/image/top/hoodie-pocket-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/hoodie-pocket-black-in.png";
      break;
    case "/assets/image/top/sleeveless-shirt2-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/sleeveless-shirt2-white-in.png";
      break;
    case "/assets/image/top/varsity-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/varsity-black-in.png";
      break;

    default:
      break;
  }
}

function handleOnepieceImg(e) {
  let cancle = false;
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");
  let bottom = document.querySelector(".default-bottom");
  let top = document.querySelector(".default-top");
  bottom.src = "";
  top.src = "";

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-onepiece").src = "";
      break;
    case "/assets/image/top-onepiece/magical-dress-indigo-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/magical-dress-indigo-in.png";
      break;
    case "/assets/image/top-onepiece/suspenders-dress-blue-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/suspenders-dress-blue-in.png";
      break;
    case "/assets/image/top-onepiece/tight-dress-white-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/tight-dress-white-in.png";
      break;
    case "/assets/image/top-onepiece/zigzag-dress-red-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/zigzag-dress-red-in.png";
      break;
    default:
      break;
  }
}

function handleBottomImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");
  let onepiece = document.querySelector(".default-onepiece");
  onepiece.src = "";

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-bottom").src = "";
      break;
    case "/assets/image/bottom-Low/balloon-pants-brown-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/balloon-pants-brown-in.png";
      break;
    case "/assets/image/bottom-Low/long-pants-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/long-pants-black-in.png";
      break;
    case "/assets/image/bottom-Low/long-pants-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/long-pants-blue-in.png";
      break;
    case "/assets/image/bottom-Low/short-pants-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/short-pants-black-in.png";
      break;
    case "/assets/image/bottom-Low/short-pants-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/short-pants-blue-in.png";
      break;

    case "/assets/image/bottom-Low/check-pants-green-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/check-pants-green-in.png";
      break;
    case "/assets/image/bottom-Low/choke-pants-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/choke-pants-black-in.png";
      break;
    case "/assets/image/bottom-Low/ring-pants-mint-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/ring-pants-mint-in.png";
      break;
    case "/assets/image/bottom-Low/ripped-panties-red-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/ripped-panties-red-in.png";
      break;
    // Hight
    case "/assets/image/bottom-High/long-skirt-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/long-skirt-in.png";
      break;
    case "/assets/image/bottom-High/mini-skirt-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/mini-skirt-black-in.png";
      break;
    case "/assets/image/bottom-High/lace-skirt-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/lace-skirt-black-in.png";
      break;
    case "/assets/image/bottom-High/boots-cut-pants-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/boots-cut-pants-blue-in.png";
      break;
    case "/assets/image/bottom-High/boots-cut-pants-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/boots-cut-pants-black-in.png";
      break;
    case "/assets/image/bottom-High/boots-cut-pants-black-checkered-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/boots-cut-pants-black-checkered-in.png";
      break;
    case "/assets/image/bottom-High/cracked-pants-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/cracked-pants-blue-in.png";
      break;
    case "/assets/image/bottom-High/flower-skirt-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/flower-skirt-blue-in.png";
      break;
    default:
      break;
  }

  if (
    relativeSrc == "/assets/image/bottom-High/long-skirt-out.png" ||
    relativeSrc == "/assets/image/bottom-High/mini-skirt-black-out.png" ||
    relativeSrc == "/assets/image/bottom-High/lace-skirt-black-out.png" ||
    relativeSrc == "/assets/image/bottom-High/boots-cut-pants-blue-out.png" ||
    relativeSrc == "/assets/image/bottom-High/boots-cut-pants-black-out.png" ||
    relativeSrc ==
      "/assets/image/bottom-High/boots-cut-pants-black-checkered-out.png" ||
    relativeSrc == "/assets/image/bottom-High/cracked-pants-blue-out.png" ||
    relativeSrc == "/assets/image/bottom-High/flower-skirt-blue-out.png"
  ) {
    document.querySelector(".default-shoes").style.zIndex = 10;
  } else {
    document.querySelector(".default-shoes").style.zIndex = 12;
  }
}

function handleShoesImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");
  document.querySelector(".default-shoes").src = relativeSrc;

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-shoes").src = "";
      break;
    case "/assets/image/shoes/boots-brown-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/boots-brown-in.png";
      break;
    case "/assets/image/shoes/fairy-tale-shoes-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/fairy-tale-shoes-blue-in.png";
      break;
    case "/assets/image/shoes/magical-shoes-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/magical-shoes-in.png";
      break;
    case "/assets/image/shoes/sneakers-orange-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/sneakers-orange-in.png";
      break;
    case "/assets/image/shoes/foam-shoes2-white-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/foam-shoes2-white-in.png";
      break;
    case "/assets/image/shoes/foam-shoes1-white-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/foam-shoes1-white-in.png";
      break;
    case "/assets/image/shoes/chunky-heel-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/chunky-heel-red-in.png";
      break;
    case "/assets/image/shoes/basketball-shoes-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/basketball-shoes-blue-in.png";
      break;
    case "/assets/image/shoes/crocs-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/crocs-blue-in.png";
      break;
    case "/assets/image/shoes/Heelys-pink-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/Heelys-pink-in.png";
      break;
    case "/assets/image/shoes/smooth-shoes-green-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/smooth-shoes-green-in.png";
      break;

    case "/assets/image/shoes/balance-shoes-gray-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/balance-shoes-gray-in.png";
      break;
    case "/assets/image/shoes/canvas-shoes-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/canvas-shoes-red-in.png";
      break;
    case "/assets/image/shoes/chelsea-boots-black-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/chelsea-boots-black-in.png";
      break;
    case "/assets/image/shoes/rain-boots-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/rain-boots-red-in.png";
      break;
    case "/assets/image/shoes/super-shoes-black-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/super-shoes-black-in.png";
      break;
    case "/assets/image/shoes/worker-boots-brown-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/worker-boots-brown-in.png";
      break;

    default:
      break;
  }
}
function handleHeadImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");
  document.querySelector(".default-head").src = relativeSrc;

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-head").src = "";
      break;
    case "/assets/image/head/cap-yellow-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/cap-yellow-in.png";
      break;
    case "/assets/image/head/gold-crown-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/gold-crown-in.png";
      break;
    case "/assets/image/head/head-phones-sky-blue-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/head-phones-sky-blue-in.png";
      break;
    case "/assets/image/head/magical-hat-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/magical-hat-in.png";
      break;
    case "/assets/image/head/bucket-hat-black-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/bucket-hat-black-in.png";
      break;
    default:
      break;
  }
}
function handleFeelingImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");
  document.querySelector(".default-feel").src = relativeSrc;

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-face").src = "";
      break;

    default:
      break;
  }
}
function handleFaceImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");
  document.querySelector(".default-face").src = relativeSrc;

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-face").src = "";
      break;
    case "/assets/image/face/glasses-white-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/glasses-white-in.png";
      break;
    default:
      break;
  }
}
function handleAzoneImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");
  document.querySelector(".default-azone").src = relativeSrc;

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-azone").src = "";
      break;
    case "/assets/image/azone/acoustic-guitar-brown-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/acoustic-guitar-brown-in.png";
      break;
    case "/assets/image/azone/great-sword-yellow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/great-sword-yellow-in.png";
      break;
    case "/assets/image/azone/magic-broom-indigo-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/magic-broom-indigo-in.png";
      break;
    default:
      break;
  }
}
function handleBzoneImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-bzone").src = "";
      break;
    case "/assets/image/bzone/knight's-shield-yellow-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/knight's-shield-yellow-in.png";
      break;
    case "/assets/image/bzone/stereo-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/stereo-in.png";
      break;
    case "/assets/image/bzone/trophy-gold-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/trophy-gold-in.png";
      break;
    case "/assets/image/bzone/Witch's-Cauldron-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/Witch's-Cauldron-in.png";
      break;
    default:
      break;
  }
}

function handlePartnerImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");
  document.querySelector(".default-partner").src = relativeSrc;

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-partner").src = "";
      break;
    case "/assets/image/czone/crow-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/crow-in.png";
      break;
    case "/assets/image/czone/lion-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/lion-in.png";
      break;
    case "/assets/image/czone/wooden-totem-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/wooden-totem-in.png";
      break;

    default:
      break;
  }
}

function handlePackageImg(e) {
  let defautlBackground = document.querySelector(".default");
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/package/pack-color-white-out.png":
      document.querySelector(".default-package").src =
        "/assets/image/packcolor/pack-color-white-in.png";
      break;
    case "/assets/image/package/pack-color-blue-out.png":
      document.querySelector(".default-package").src =
        "/assets/image/packcolor/pack-color-blue-in.png";
      break;
    case "/assets/image/package/pack-color-green-out.png":
      document.querySelector(".default-package").src =
        "/assets/image/packcolor/pack-color-green-in.png";
      break;
    case "/assets/image/package/pack-color-purple-out.png":
      document.querySelector(".default-package").src =
        "/assets/image/packcolor/pack-color-purple-in.png";
      break;
    case "/assets/image/package/pack-color-red-out.png":
      document.querySelector(".default-package").src =
        "/assets/image/packcolor/pack-color-red-in.png";
      break;
    case "/assets/image/package/pack-color-yellow-out.png":
      document.querySelector(".default-package").src =
        "/assets/image/packcolor/pack-color-yellow-in.png";
      break;

    default:
      break;
  }
}
function handleDesignImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-design").src = "";
      break;
    case "/assets/image/packdesign/pack-design-black-out.png":
      document.querySelector(".default-design").src =
        "/assets/image/packdesign/pack-design-black-in.png";
      break;
    case "/assets/image/packdesign/pack-design-blue-out.png":
      document.querySelector(".default-design").src =
        "/assets/image/packdesign/pack-design-blue-in.png";
      break;
    case "/assets/image/packdesign/pack-design-green-out.png":
      document.querySelector(".default-design").src =
        "/assets/image/packdesign/pack-design-green-in.png";
      break;
    case "/assets/image/packdesign/pack-design-mint-out.png":
      document.querySelector(".default-design").src =
        "/assets/image/packdesign/pack-design-mint-in.png";
      break;
    case "/assets/image/packdesign/pack-design-orange-out.png":
      document.querySelector(".default-design").src =
        "/assets/image/packdesign/pack-design-orange-in.png";
      break;
    case "/assets/image/packdesign/pack-design-pink-out.png":
      document.querySelector(".default-design").src =
        "/assets/image/packdesign/pack-design-pink-in.png";
      break;

    default:
      break;
  }
}
function handlePatternImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-pattern").src = "";
      break;
    case "/assets/image/packpattern/pack-pattern-bear-pattern-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-bear-pattern-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-blizard-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-blizard-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-brick-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-brick-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-chic-small-flower-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-chic-small-flower-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-confusion-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-confusion-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-dots-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-dots-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-gradation-flower-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-gradation-flower-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-hawaiian-fabric-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-hawaiian-fabric-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-japanese-crest-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-japanese-crest-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-leopard-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-leopard-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-middle-ages-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-middle-ages-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-plaid-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-plaid-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-points-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-points-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-pop-style-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-pop-style-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-simple-checkered-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-simple-checkered-in.png";
      break;
    case "/assets/image/packpattern/pack-pattern-wood-out.png":
      document.querySelector(".default-pattern").src =
        "/assets/image/packpattern/pack-pattern-wood-in.png";
      break;

    default:
      break;
  }
}

function handleBoxEffectImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-boxeffect").src = "";
      break;
    case "/assets/image/boxeffect/coin-bronze-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/coin-bronze-in.png";
      break;
    case "/assets/image/boxeffect/coin-gold-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/coin-gold-in.png";
      break;
    case "/assets/image/boxeffect/coin-silver-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/coin-silver-in.png";
      break;
    case "/assets/image/boxeffect/grass-standee-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/grass-standee-in.png";
      break;
    case "/assets/image/boxeffect/light-yellow-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/light-yellow-in.png";
      break;

    default:
      break;
  }
}
function handleSealImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-seal").src = "";
      break;
    case "/assets/image/seal/seal-silver1-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/seal-silver1-in.png";
      break;
    case "/assets/image/seal/seal-silver2-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/seal-silver2-in.png";
      break;
    case "/assets/image/seal/seal-silver3-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/seal-silver3-in.png";
      break;

    case "/assets/image/seal/dia-a.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/dia-a.png";
      break;
    case "/assets/image/seal/dia-b.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/dia-b.png";
      break;
    case "/assets/image/seal/haert-a.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/haert-a.png";
      break;
    case "/assets/image/seal/haert-b.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/haert-b.png";
      break;
    case "/assets/image/seal/seal-DIA.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/seal-DIA.png";
      break;
    case "/assets/image/seal/star-a.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/star-a.png";
      break;
    case "/assets/image/seal/star-b.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/star-b.png";
      break;
    case "/assets/image/seal/zigzag-a.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/zigzag-a.png";
      break;
    case "/assets/image/seal/zigzag-b.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/zigzag-b.png";
      break;
    // 06-13추가
    case "/assets/image/seal/heart-architecture-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/heart-architecture-in.png";
      break;
    case "/assets/image/seal/heart-artist-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/heart-artist-in.png";
      break;
    case "/assets/image/seal/heart-beauty-fashion-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/heart-beauty-fashion-in.png";
      break;
    case "/assets/image/seal/heart-education-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/heart-education-in.png";
      break;
    case "/assets/image/seal/heart-music-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/heart-music-in.png";
      break;
    case "/assets/image/seal/heart-science-technology-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/heart-science-technology-in.png";
      break;
    case "/assets/image/seal/heart-security-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/heart-security-in.png";
      break;
    case "/assets/image/seal/starburst-architecture-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/starburst-architecture-in.png";
      break;
    case "/assets/image/seal/starburst-artist-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/starburst-artist-in.png";
      break;
    case "/assets/image/seal/starburst-beauty-fashion-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/starburst-beauty-fashion-in.png";
      break;
    case "/assets/image/seal/starburst-education-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/starburst-education-in.png";
      break;
    case "/assets/image/seal/starburst-music-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/starburst-music-in.png";
      break;
    case "/assets/image/seal/starburst-science-technology-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/starburst-science-technology-in.png";
      break;
    case "/assets/image/seal/starburst-security-out.png":
      document.querySelector(".default-seal").src =
        "/assets/image/seal/starburst-security-in.png";
      break;

    default:
      break;
  }
}

export {
  handleBodyImg,
  handleHairImg,
  handleEyesImg,
  handleTopImg,
  handleOnepieceImg,
  handleBottomImg,
  handleShoesImg,
  handleHeadImg,
  handleFeelingImg,
  handleFaceImg,
  handleAzoneImg,
  handleBzoneImg,
  handlePartnerImg,
  handlePackageImg,
  handleDesignImg,
  handlePatternImg,
  handleBoxEffectImg,
  handleSealImg,
};
