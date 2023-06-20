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
    // LOW
    case "/assets/image/bottom-Low/choker-pants-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/choker-pants-blue-in.png";
      break;
    case "/assets/image/bottom-Low/choker-pants-yellow-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/choker-pants-yellow-in.png";
      break;
    case "/assets/image/bottom-Low/long-pants-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/long-pants-black-in.png";
      break;
    case "/assets/image/bottom-Low/long-pants-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/long-pants-blue-in.png";
      break;
    case "/assets/image/bottom-Low/long-pants-orange-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/long-pants-orange-in.png";
      break;
    case "/assets/image/bottom-Low/plaid-pants-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/plaid-pants-black-in.png";
      break;
    case "/assets/image/bottom-Low/plaid-pants-red-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/plaid-pants-red-in.png";
      break;
    case "/assets/image/bottom-Low/plaid-pants-yellow-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/plaid-pants-yellow-in.png";
      break;
    case "/assets/image/bottom-Low/ring-pants-green-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/ring-pants-green-in.png";
      break;
    case "/assets/image/bottom-Low/ring-pants-mint-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/ring-pants-mint-in.png";
      break;
    case "/assets/image/bottom-Low/ring-pants-orange-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/ring-pants-orange-in.png";
      break;
    case "/assets/image/bottom-Low/ripped-panties-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/ripped-panties-black-in.png";
      break;
    case "/assets/image/bottom-Low/ripped-panties-pink-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/ripped-panties-pink-in.png";
      break;
    case "/assets/image/bottom-Low/ripped-panties-red-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/ripped-panties-red-in.png";
      break;
    case "/assets/image/bottom-Low/short-pants-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/short-pants-black-in.png";
      break;
    case "/assets/image/bottom-Low/short-pants-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/short-pants-blue-in.png";
      break;
    case "/assets/image/bottom-Low/short-pants-white-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/short-pants-white-in.png";
      break;

    // Hight
    case "/assets/image/bottom-High/boots-cut-pants-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/boots-cut-pants-black-in.png";
      break;
    case "/assets/image/bottom-High/boots-cut-pants-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/boots-cut-pants-blue-in.png";
      break;
    case "/assets/image/bottom-High/boots-cut-pants-white-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/boots-cut-pants-white-in.png";
      break;
    case "/assets/image/bottom-High/cracked-pants-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/cracked-pants-blue-in.png";
      break;
    case "/assets/image/bottom-High/cracked-pants-green-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/cracked-pants-green-in.png";
      break;
    case "/assets/image/bottom-High/cracked-pants-red-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/cracked-pants-red-in.png";
      break;
    case "/assets/image/bottom-High/flower-skirt-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/flower-skirt-blue-in.png";
      break;
    case "/assets/image/bottom-High/flower-skirt-red-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/flower-skirt-red-in.png";
      break;
    case "/assets/image/bottom-High/flower-skirt-yellow-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/flower-skirt-yellow-in.png";
      break;
    case "/assets/image/bottom-High/lace-skirt-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/lace-skirt-black-in.png";
      break;
    case "/assets/image/bottom-High/lace-skirt-reopard-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/lace-skirt-reopard-in.png";
      break;
    case "/assets/image/bottom-High/lace-skirt-white-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/lace-skirt-white-in.png";
      break;
    case "/assets/image/bottom-High/long-skirt-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/long-skirt-blue-in.png";
      break;
    case "/assets/image/bottom-High/long-skirt-red-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/long-skirt-red-in.png";
      break;
    case "/assets/image/bottom-High/long-skirt-yellow-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/long-skirt-yellow-in.png";
      break;
    case "/assets/image/bottom-High/mini-skirt-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/mini-skirt-black-in.png";
      break;
    case "/assets/image/bottom-High/mini-skirt-mint-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/mini-skirt-mint-in.png";
      break;
    case "/assets/image/bottom-High/mini-skirt-orange-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/mini-skirt-orange-in.png";
      break;
    case "/assets/image/bottom-High/wrap-skirt-blue-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/wrap-skirt-blue-in.png";
      break;
    case "/assets/image/bottom-High/wrap-skirt-green-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/wrap-skirt-green-in.png";
      break;
    case "/assets/image/bottom-High/wrap-skirt-red-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-High/wrap-skirt-red-in.png";
      break;
  }

  if (
    relativeSrc == "/assets/image/bottom-High/boots-cut-pants-black-out.png" ||
    relativeSrc == "/assets/image/bottom-High/boots-cut-pants-blue-out.png" ||
    relativeSrc == "/assets/image/bottom-High/boots-cut-pants-white-out.png" ||
    relativeSrc == "/assets/image/bottom-High/cracked-pants-blue-out.png" ||
    relativeSrc == "/assets/image/bottom-High/cracked-pants-green-out.png" ||
    relativeSrc == "/assets/image/bottom-High/cracked-pants-red-out.png" ||
    relativeSrc == "/assets/image/bottom-High/flower-skirt-blue-out.png" ||
    relativeSrc == "/assets/image/bottom-High/flower-skirt-red-out.png" ||
    relativeSrc == "/assets/image/bottom-High/flower-skirt-yellow-out.png" ||
    relativeSrc == "/assets/image/bottom-High/lace-skirt-black-out.png" ||
    relativeSrc == "/assets/image/bottom-High/lace-skirt-reopard-out.png" ||
    relativeSrc == "/assets/image/bottom-High/lace-skirt-white-out.png" ||
    relativeSrc == "/assets/image/bottom-High/long-skirt-blue-out.png" ||
    relativeSrc == "/assets/image/bottom-High/long-skirt-red-out.png" ||
    relativeSrc == "/assets/image/bottom-High/long-skirt-yellow-out.png" ||
    relativeSrc == "/assets/image/bottom-High/mini-skirt-black-out.png" ||
    relativeSrc == "/assets/image/bottom-High/mini-skirt-mint-out.png" ||
    relativeSrc == "/assets/image/bottom-High/mini-skirt-orange-out.png" ||
    relativeSrc == "/assets/image/bottom-High/wrap-skirt-blue-out.png" ||
    relativeSrc == "/assets/image/bottom-High/wrap-skirt-green-out.png" ||
    relativeSrc == "/assets/image/bottom-High/wrap-skirt-red-out.png"
  ) {
    document.querySelector(".default-shoes").style.zIndex = 10;
  } else {
    document.querySelector(".default-shoes").style.zIndex = 12;
  }
}

function handleShoesImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-shoes").src = "";
      break;
    case "/assets/image/shoes/balance-shoes-gray-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/balance-shoes-gray-in.png";
      break;
    case "/assets/image/shoes/balance-shoes-green-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/balance-shoes-green-in.png";
      break;
    case "/assets/image/shoes/balance-shoes-pink-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/balance-shoes-pink-in.png";
      break;
    case "/assets/image/shoes/basketball-shoes-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/basketball-shoes-blue-in.png";
      break;
    case "/assets/image/shoes/basketball-shoes-green-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/basketball-shoes-green-in.png";
      break;
    case "/assets/image/shoes/basketball-shoes-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/basketball-shoes-red-in.png";
      break;
    case "/assets/image/shoes/boots-black-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/boots-black-in.png";
      break;
    case "/assets/image/shoes/boots-brown-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/boots-brown-in.png";
      break;
    case "/assets/image/shoes/boots-green-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/boots-green-in.png";
      break;
    case "/assets/image/shoes/canvas-shoes-black-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/canvas-shoes-black-in.png";
      break;
    case "/assets/image/shoes/canvas-shoes-mint-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/canvas-shoes-mint-in.png";
      break;
    case "/assets/image/shoes/canvas-shoes-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/canvas-shoes-red-in.png";
      break;
    case "/assets/image/shoes/chelsea-boots-black-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/chelsea-boots-black-in.png";
      break;
    case "/assets/image/shoes/chelsea-boots-orange-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/chelsea-boots-orange-in.png";
      break;
    case "/assets/image/shoes/chelsea-boots-white-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/chelsea-boots-white-in.png";
      break;
    case "/assets/image/shoes/chunky-heel-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/chunky-heel-blue-in.png";
      break;
    case "/assets/image/shoes/chunky-heel-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/chunky-heel-red-in.png";
      break;
    case "/assets/image/shoes/chunky-heel-yellow-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/chunky-heel-yellow-in.png";
      break;
    case "/assets/image/shoes/crocs-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/crocs-blue-in.png";
      break;
    case "/assets/image/shoes/crocs-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/crocs-red-in.png";
      break;
    case "/assets/image/shoes/crocs-yellow-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/crocs-yellow-in.png";
      break;
    case "/assets/image/shoes/fairy-tale-shoes-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/fairy-tale-shoes-blue-in.png";
      break;
    case "/assets/image/shoes/fairy-tale-shoes-brown-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/fairy-tale-shoes-brown-in.png";
      break;
    case "/assets/image/shoes/fairy-tale-shoes-pink-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/fairy-tale-shoes-pink-in.png";
      break;
    case "/assets/image/shoes/foam-shoes-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/foam-shoes-blue-in.png";
      break;
    case "/assets/image/shoes/foam-shoes-pink-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/foam-shoes-pink-in.png";
      break;
    case "/assets/image/shoes/foam-shoes-white-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/foam-shoes-white-in.png";
      break;
    case "/assets/image/shoes/Heelys-coloruful-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/Heelys-coloruful-in.png";
      break;
    case "/assets/image/shoes/Heelys-pink-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/Heelys-pink-in.png";
      break;
    case "/assets/image/shoes/Heelys-yellow-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/Heelys-yellow-in.png";
      break;
    case "/assets/image/shoes/magical-shoes-black-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/magical-shoes-black-in.png";
      break;
    case "/assets/image/shoes/magical-shoes-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/magical-shoes-blue-in.png";
      break;
    case "/assets/image/shoes/magical-shoes-white-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/magical-shoes-white-in.png";
      break;
    case "/assets/image/shoes/rain-boots-pop-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/rain-boots-pop-in.png";
      break;
    case "/assets/image/shoes/rain-boots-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/rain-boots-red-in.png";
      break;
    case "/assets/image/shoes/rain-boots-yellow-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/rain-boots-yellow-in.png";
      break;
    case "/assets/image/shoes/sneakers-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/sneakers-blue-in.png";
      break;
    case "/assets/image/shoes/sneakers-orange-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/sneakers-orange-in.png";
      break;
    case "/assets/image/shoes/sneakers-purple-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/sneakers-purple-in.png";
      break;
    case "/assets/image/shoes/super-shoes-black-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/super-shoes-black-in.png";
      break;
    case "/assets/image/shoes/super-shoes-blue-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/super-shoes-blue-in.png";
      break;
    case "/assets/image/shoes/super-shoes-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/super-shoes-red-in.png";
      break;
    case "/assets/image/shoes/worker-boots-brown-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/worker-boots-brown-in.png";
      break;
    case "/assets/image/shoes/worker-boots-red-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/worker-boots-red-in.png";
      break;
    case "/assets/image/shoes/worker-boots-white-out.png":
      document.querySelector(".default-shoes").src =
        "/assets/image/shoes/worker-boots-white-in.png";
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

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-face").src = "";
      break;
    case "/assets/image/feeling/blush-L-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/feeling/blush-L-in.png";
      break;
    case "/assets/image/feeling/blush-S-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/feeling/blush-S-in.png";
      break;
    case "/assets/image/feeling/nausea-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/feeling/nausea-in.png";
      break;
    case "/assets/image/feeling/rage-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/feeling/rage-in.png";
      break;
    case "/assets/image/feeling/shady-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/feeling/shady-in.png";
      break;
    case "/assets/image/feeling/shyness-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/feeling/shyness-in.png";
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

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-azone").src = "";
      break;
    case "/assets/image/azone/acoustic-guitar-brown-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/acoustic-guitar-brown-in.png";
      break;
    case "/assets/image/azone/acoustic-guitar-gold-reopard-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/acoustic-guitar-gold-reopard-in.png";
      break;
    case "/assets/image/azone/acoustic-guitar-mint-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/acoustic-guitar-mint-in.png";
      break;
    case "/assets/image/azone/battle-axe-dark-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/battle-axe-dark-in.png";
      break;
    case "/assets/image/azone/battle-axe-gray-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/battle-axe-gray-in.png";
      break;
    case "/assets/image/azone/battle-axe-white-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/battle-axe-white-in.png";
      break;
    case "/assets/image/azone/brush-black-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/brush-black-in.png";
      break;
    case "/assets/image/azone/brush-pink-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/brush-pink-in.png";
      break;
    case "/assets/image/azone/brush-yellow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/brush-yellow-in.png";
      break;
    case "/assets/image/azone/christmas-candy-mint-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/christmas-candy-mint-in.png";
      break;
    case "/assets/image/azone/christmas-candy-purple-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/christmas-candy-purple-in.png";
      break;
    case "/assets/image/azone/christmas-candy-red-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/christmas-candy-red-in.png";
      break;
    case "/assets/image/azone/crescent-red-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/crescent-red-in.png";
      break;
    case "/assets/image/azone/crescent-white-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/crescent-white-in.png";
      break;
    case "/assets/image/azone/crescent-yellow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/crescent-yellow-in.png";
      break;
    case "/assets/image/azone/fire-axe-gold-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/fire-axe-gold-in.png";
      break;
    case "/assets/image/azone/fire-axe-red-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/fire-axe-red-in.png";
      break;
    case "/assets/image/azone/fire-axe-silver-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/fire-axe-silver-in.png";
      break;
    case "/assets/image/azone/great-sword-gold-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/great-sword-gold-in.png";
      break;
    case "/assets/image/azone/great-sword-iron-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/great-sword-iron-in.png";
      break;
    case "/assets/image/azone/great-sword-pink-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/great-sword-pink-in.png";
      break;
    case "/assets/image/azone/hanger-with-towels-black-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/hanger-with-towels-black-in.png";
      break;
    case "/assets/image/azone/hanger-with-towels-green-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/hanger-with-towels-green-in.png";
      break;
    case "/assets/image/azone/hanger-with-towels-white-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/hanger-with-towels-white-in.png";
      break;
    case "/assets/image/azone/key-red-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/key-red-in.png";
      break;
    case "/assets/image/azone/key-silver-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/key-silver-in.png";
      break;
    case "/assets/image/azone/key-yellow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/key-yellow-in.png";
      break;
    case "/assets/image/azone/ladle-black-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/ladle-black-in.png";
      break;
    case "/assets/image/azone/ladle-gray-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/ladle-gray-in.png";
      break;
    case "/assets/image/azone/ladle-pink-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/ladle-pink-in.png";
      break;
    case "/assets/image/azone/magic-broom-black-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/magic-broom-black-in.png";
      break;
    case "/assets/image/azone/magic-broom-blue-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/magic-broom-blue-in.png";
      break;
    case "/assets/image/azone/magic-broom-white-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/magic-broom-white-in.png";
      break;
    case "/assets/image/azone/pencil-black-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/pencil-black-in.png";
      break;
    case "/assets/image/azone/pencil-green-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/pencil-green-in.png";
      break;
    case "/assets/image/azone/pencil-rainbow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/pencil-rainbow-in.png";
      break;
    case "/assets/image/azone/popsicle-blue-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/popsicle-blue-in.png";
      break;
    case "/assets/image/azone/popsicle-green-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/popsicle-green-in.png";
      break;
    case "/assets/image/azone/popsicle-yellow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/popsicle-yellow-in.png";
      break;
    case "/assets/image/azone/rifle-black-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/rifle-black-in.png";
      break;
    case "/assets/image/azone/rifle-brown-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/rifle-brown-in.png";
      break;
    case "/assets/image/azone/rifle-yellow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/rifle-yellow-in.png";
      break;
    case "/assets/image/azone/skateboard-pink-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/skateboard-pink-in.png";
      break;
    case "/assets/image/azone/skateboard-purple-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/skateboard-purple-in.png";
      break;
    case "/assets/image/azone/skateboard-yellow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/skateboard-yellow-in.png";
      break;
    case "/assets/image/azone/surfboard-blue-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/surfboard-blue-in.png";
      break;
    case "/assets/image/azone/surfboard-green-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/surfboard-green-in.png";
      break;
    case "/assets/image/azone/surfboard-pink-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/surfboard-pink-in.png";
      break;
    case "/assets/image/azone/syringe-black-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/syringe-black-in.png";
      break;
    case "/assets/image/azone/syringe-blue-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/syringe-blue-in.png";
      break;
    case "/assets/image/azone/syringe-white-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/syringe-white-in.png";
      break;
    case "/assets/image/azone/tennis-racket-blue-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/tennis-racket-blue-in.png";
      break;
    case "/assets/image/azone/tennis-racket-orange-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/tennis-racket-orange-in.png";
      break;
    case "/assets/image/azone/tennis-racket-red-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/tennis-racket-red-in.png";
      break;
    case "/assets/image/azone/toy-hammer-black-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/toy-hammer-black-in.png";
      break;
    case "/assets/image/azone/toy-hammer-mint-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/toy-hammer-mint-in.png";
      break;
    case "/assets/image/azone/toy-hammer-yellow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/toy-hammer-yellow-in.png";
      break;
    case "/assets/image/azone/umbrella-black-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/umbrella-black-in.png";
      break;
    case "/assets/image/azone/umbrella-green-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/umbrella-green-in.png";
      break;
    case "/assets/image/azone/umbrella-yellow-out.png":
      document.querySelector(".default-azone").src =
        "/assets/image/azone/umbrella-yellow-in.png";
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
    case "/assets/image/bzone/carrier-beige-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/carrier-beige-in.png";
      break;
    case "/assets/image/bzone/carrier-brown-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/carrier-brown-in.png";
      break;
    case "/assets/image/bzone/carrier-yellow-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/carrier-yellow-in.png";
      break;
    case "/assets/image/bzone/dumbbell-black-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/dumbbell-black-in.png";
      break;
    case "/assets/image/bzone/dumbbell-gold-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/dumbbell-gold-in.png";
      break;
    case "/assets/image/bzone/dumbbell-red-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/dumbbell-red-in.png";
      break;
    case "/assets/image/bzone/excalibur-gold-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/excalibur-gold-in.png";
      break;
    case "/assets/image/bzone/excalibur-green-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/excalibur-green-in.png";
      break;
    case "/assets/image/bzone/excalibur-pink-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/excalibur-pink-in.png";
      break;
    case "/assets/image/bzone/knight's-shield-green-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/knight's-shield-green-in.png";
      break;
    case "/assets/image/bzone/knight's-shield-white-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/knight's-shield-white-in.png";
      break;
    case "/assets/image/bzone/knight's-shield-yellow-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/knight's-shield-yellow-in.png";
      break;
    case "/assets/image/bzone/leather-backpack-brown-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/leather-backpack-brown-in.png";
      break;
    case "/assets/image/bzone/leather-backpack-pink-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/leather-backpack-pink-in.png";
      break;
    case "/assets/image/bzone/leather-backpack-yellow-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/leather-backpack-yellow-in.png";
      break;
    case "/assets/image/bzone/letter-beige-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/letter-beige-in.png";
      break;
    case "/assets/image/bzone/letter-black-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/letter-black-in.png";
      break;
    case "/assets/image/bzone/letter-white-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/letter-white-in.png";
      break;
    case "/assets/image/bzone/mimic-black-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/mimic-black-in.png";
      break;
    case "/assets/image/bzone/mimic-brown-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/mimic-brown-in.png";
      break;
    case "/assets/image/bzone/mimic-white-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/mimic-white-in.png";
      break;
    case "/assets/image/bzone/pistol-gold-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/pistol-gold-in.png";
      break;
    case "/assets/image/bzone/pistol-green-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/pistol-green-in.png";
      break;
    case "/assets/image/bzone/pistol-silver-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/pistol-silver-in.png";
      break;
    case "/assets/image/bzone/safe-gray-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/safe-gray-in.png";
      break;
    case "/assets/image/bzone/safe-white-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/safe-white-in.png";
      break;
    case "/assets/image/bzone/safe-yellow-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/safe-yellow-in.png";
      break;
    case "/assets/image/bzone/spread-bag-black-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/spread-bag-black-in.png";
      break;
    case "/assets/image/bzone/spread-bag-gray-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/spread-bag-gray-in.png";
      break;
    case "/assets/image/bzone/spread-bag-reopard-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/spread-bag-reopard-in.png";
      break;
    case "/assets/image/bzone/stereo-black-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/stereo-black-in.png";
      break;
    case "/assets/image/bzone/stereo-blue-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/stereo-blue-in.png";
      break;
    case "/assets/image/bzone/stereo-pink-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/stereo-pink-in.png";
      break;
    case "/assets/image/bzone/tombstone-blue-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/tombstone-blue-in.png";
      break;
    case "/assets/image/bzone/tombstone-gray-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/tombstone-gray-in.png";
      break;
    case "/assets/image/bzone/tombstone-orange-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/tombstone-orange-in.png";
      break;
    case "/assets/image/bzone/treasure-chest-gold-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/treasure-chest-gold-in.png";
      break;
    case "/assets/image/bzone/treasure-chest-white-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/treasure-chest-white-in.png";
      break;
    case "/assets/image/bzone/treasure-chest-wood-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/treasure-chest-wood-in.png";
      break;
    case "/assets/image/bzone/trophy-gold-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/trophy-gold-in.png";
      break;
    case "/assets/image/bzone/trophy-green-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/trophy-green-in.png";
      break;
    case "/assets/image/bzone/trophy-pink-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/trophy-pink-in.png";
      break;
    case "/assets/image/bzone/Witch's-Cauldron-black-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/Witch's-Cauldron-black-in.png";
      break;
    case "/assets/image/bzone/Witch's-Cauldron-blue-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/Witch's-Cauldron-blue-in.png";
      break;
    case "/assets/image/bzone/Witch's-Cauldron-white-out.png":
      document.querySelector(".default-bzone").src =
        "/assets/image/bzone/Witch's-Cauldron-white-in.png";
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
