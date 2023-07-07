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
    case "/assets/image/hair/angry-cut-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/angry-cut-black-in.png";
      break;
    case "/assets/image/hair/angry-cut-green-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/angry-cut-green-in.png";
      break;
    case "/assets/image/hair/angry-cut-red-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/angry-cut-red-in.png";
      break;
    case "/assets/image/hair/blind-cut-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/blind-cut-black-in.png";
      break;
    case "/assets/image/hair/blind-cut-mint-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/blind-cut-mint-in.png";
      break;
    case "/assets/image/hair/blind-cut-red-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/blind-cut-red-in.png";
      break;
    case "/assets/image/hair/bun-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/bun-brown-in.png";
      break;
    case "/assets/image/hair/bun-pink-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/bun-pink-in.png";
      break;
    case "/assets/image/hair/bun-white-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/bun-white-in.png";
      break;
    case "/assets/image/hair/buzz-cut-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/buzz-cut-brown-in.png";
      break;
    case "/assets/image/hair/buzz-cut-sky-blue-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/buzz-cut-sky-blue-in.png";
      break;
    case "/assets/image/hair/buzz-cut-yellow-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/buzz-cut-yellow-in.png";
      break;
    case "/assets/image/hair/calm-cut-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/calm-cut-black-in.png";
      break;
    case "/assets/image/hair/calm-cut-green-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/calm-cut-green-in.png";
      break;
    case "/assets/image/hair/calm-cut-red-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/calm-cut-red-in.png";
      break;
    case "/assets/image/hair/calm-hair-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/calm-hair-brown-in.png";
      break;
    case "/assets/image/hair/calm-hair-green-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/calm-hair-green-in.png";
      break;
    case "/assets/image/hair/calm-hair-red-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/calm-hair-red-in.png";
      break;
    case "/assets/image/hair/curly-cut-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/curly-cut-brown-in.png";
      break;
    case "/assets/image/hair/curly-cut-white-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/curly-cut-white-in.png";
      break;
    case "/assets/image/hair/curly-cut-yellow-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/curly-cut-yellow-in.png";
      break;
    case "/assets/image/hair/dread-lock-blue-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/dread-lock-blue-in.png";
      break;
    case "/assets/image/hair/dread-lock-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/dread-lock-brown-in.png";
      break;
    case "/assets/image/hair/dread-lock-red-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/dread-lock-red-in.png";
      break;
    case "/assets/image/hair/flexible-cut-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/flexible-cut-black-in.png";
      break;
    case "/assets/image/hair/flexible-cut-gray-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/flexible-cut-gray-in.png";
      break;
    case "/assets/image/hair/flexible-cut-green-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/flexible-cut-green-in.png";
      break;
    case "/assets/image/hair/front-point-hair-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/front-point-hair-brown-in.png";
      break;
    case "/assets/image/hair/front-point-hair-lavender-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/front-point-hair-lavender-in.png";
      break;
    case "/assets/image/hair/front-point-hair-yellow-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/front-point-hair-yellow-in.png";
      break;
    case "/assets/image/hair/long-hair1-blue-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/long-hair1-blue-in.png";
      break;
    case "/assets/image/hair/long-hair1-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/long-hair1-brown-in.png";
      break;
    case "/assets/image/hair/long-hair1-yellow-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/long-hair1-yellow-in.png";
      break;
    case "/assets/image/hair/long-hair2-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/long-hair2-brown-in.png";
      break;
    case "/assets/image/hair/long-hair2-green-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/long-hair2-green-in.png";
      break;
    case "/assets/image/hair/long-hair2-yellow-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/long-hair2-yellow-in.png";
      break;
    case "/assets/image/hair/mischievous-cut-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/mischievous-cut-black-in.png";
      break;
    case "/assets/image/hair/mischievous-cut-orange-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/mischievous-cut-orange-in.png";
      break;
    case "/assets/image/hair/mischievous-cut-ping-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/mischievous-cut-ping-in.png";
      break;
    case "/assets/image/hair/pomade-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/pomade-brown-in.png";
      break;
    case "/assets/image/hair/pomade-green-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/pomade-green-in.png";
      break;
    case "/assets/image/hair/pomade-white-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/pomade-white-in.png";
      break;
    case "/assets/image/hair/pouty-hair-black-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/pouty-hair-black-in.png";
      break;
    case "/assets/image/hair/pouty-hair-green-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/pouty-hair-green-in.png";
      break;
    case "/assets/image/hair/pouty-hair-lavender-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/pouty-hair-lavender-in.png";
      break;
    case "/assets/image/hair/tied-short-hair-brown-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/tied-short-hair-brown-in.png";
      break;
    case "/assets/image/hair/tied-short-hair-gray-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/tied-short-hair-gray-in.png";
      break;
    case "/assets/image/hair/tied-short-hair-purple-out.png":
      document.querySelector(".default-hair").src =
        "/assets/image/hair/tied-short-hair-purple-in.png";
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
  let onepiece = document.querySelector(".default-onepiece");
  onepiece.src = "";

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-top").src = "";
      break;
    case "/assets/image/top/blazer-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/blazer-black-in.png";
      break;
    case "/assets/image/top/blazer-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/blazer-blue-in.png";
      break;
    case "/assets/image/top/blazer-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/blazer-red-in.png";
      break;
    case "/assets/image/top/broken-heart-gold-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/broken-heart-gold-in.png";
      break;
    case "/assets/image/top/broken-heart-purple-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/broken-heart-purple-in.png";
      break;
    case "/assets/image/top/broken-heart-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/broken-heart-red-in.png";
      break;
    case "/assets/image/top/cardigan-gray-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/cardigan-gray-in.png";
      break;
    case "/assets/image/top/cardigan-green-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/cardigan-green-in.png";
      break;
    case "/assets/image/top/cardigan-yellow-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/cardigan-yellow-in.png";
      break;
    case "/assets/image/top/chain-necklace-gold-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/chain-necklace-gold-in.png";
      break;
    case "/assets/image/top/chain-necklace-mint-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/chain-necklace-mint-in.png";
      break;
    case "/assets/image/top/chain-necklace-silver-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/chain-necklace-silver-in.png";
      break;
    case "/assets/image/top/coach-jacket-brown-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/coach-jacket-brown-in.png";
      break;
    case "/assets/image/top/coach-jacket-indigo-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/coach-jacket-indigo-in.png";
      break;
    case "/assets/image/top/coach-jacket-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/coach-jacket-white-in.png";
      break;
    case "/assets/image/top/crop-top-cyber-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/crop-top-cyber-in.png";
      break;
    case "/assets/image/top/crop-top-green-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/crop-top-green-in.png";
      break;
    case "/assets/image/top/crop-top-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/crop-top-white-in.png";
      break;
    case "/assets/image/top/decent-lace-top-beige-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/decent-lace-top-beige-in.png";
      break;
    case "/assets/image/top/decent-lace-top-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/decent-lace-top-black-in.png";
      break;
    case "/assets/image/top/decent-lace-top-mint-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/decent-lace-top-mint-in.png";
      break;
    case "/assets/image/top/gingham-shirts-gold-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/gingham-shirts-gold-in.png";
      break;
    case "/assets/image/top/gingham-shirts-indigo-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/gingham-shirts-indigo-in.png";
      break;
    case "/assets/image/top/gingham-shirts-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/gingham-shirts-red-in.png";
      break;
    case "/assets/image/top/heart-knit-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/heart-knit-blue-in.png";
      break;
    case "/assets/image/top/heart-knit-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/heart-knit-red-in.png";
      break;
    case "/assets/image/top/heart-knit-yellow-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/heart-knit-yellow-in.png";
      break;
    case "/assets/image/top/hoodie-pocket-beige-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/hoodie-pocket-beige-in.png";
      break;
    case "/assets/image/top/hoodie-pocket-gray-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/hoodie-pocket-gray-in.png";
      break;
    case "/assets/image/top/hoodie-pocket-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/hoodie-pocket-red-in.png";
      break;
    case "/assets/image/top/hoodie-zip-up-green-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/hoodie-zip-up-green-in.png";
      break;
    case "/assets/image/top/hoodie-zip-up-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/hoodie-zip-up-white-in.png";
      break;
    case "/assets/image/top/hoodie-zip-up-yellow-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/hoodie-zip-up-yellow-in.png";
      break;
    case "/assets/image/top/lace-crop-top-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/lace-crop-top-black-in.png";
      break;
    case "/assets/image/top/lace-crop-top-orange-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/lace-crop-top-orange-in.png";
      break;
    case "/assets/image/top/lace-crop-top-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/lace-crop-top-white-in.png";
      break;
    case "/assets/image/top/off-shoulder-purple-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/off-shoulder-purple-in.png";
      break;
    case "/assets/image/top/off-shoulder-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/off-shoulder-red-in.png";
      break;
    case "/assets/image/top/off-shoulder-yellow-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/off-shoulder-yellow-in.png";
      break;
    case "/assets/image/top/pattern-wide-shirt-flower-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/pattern-wide-shirt-flower-in.png";
      break;
    case "/assets/image/top/pattern-wide-shirt-marine-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/pattern-wide-shirt-marine-in.png";
      break;
    case "/assets/image/top/pattern-wide-shirt-reopard-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/pattern-wide-shirt-reopard-in.png";
      break;
    case "/assets/image/top/pointed-necklace-green-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/pointed-necklace-green-in.png";
      break;
    case "/assets/image/top/pointed-necklace-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/pointed-necklace-red-in.png";
      break;
    case "/assets/image/top/pointed-necklace-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/pointed-necklace-white-in.png";
      break;
    case "/assets/image/top/polo-shirts-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/polo-shirts-blue-in.png";
      break;
    case "/assets/image/top/polo-shirts-green-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/polo-shirts-green-in.png";
      break;
    case "/assets/image/top/polo-shirts-purple-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/polo-shirts-purple-in.png";
      break;
    case "/assets/image/top/shirt-knit-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/shirt-knit-blue-in.png";
      break;
    case "/assets/image/top/shirt-knit-purple-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/shirt-knit-purple-in.png";
      break;
    case "/assets/image/top/shirt-knit-red-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/shirt-knit-red-in.png";
      break;
    case "/assets/image/top/short-sleeve-shirt-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/short-sleeve-shirt-black-in.png";
      break;
    case "/assets/image/top/short-sleeve-shirt-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/short-sleeve-shirt-blue-in.png";
      break;
    case "/assets/image/top/short-sleeve-shirt-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/short-sleeve-shirt-white-in.png";
      break;
    case "/assets/image/top/turtle-neck-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/turtle-neck-black-in.png";
      break;
    case "/assets/image/top/turtle-neck-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/turtle-neck-blue-in.png";
      break;
    case "/assets/image/top/turtle-neck-white-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/turtle-neck-white-in.png";
      break;
    case "/assets/image/top/varsity-black-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/varsity-black-in.png";
      break;
    case "/assets/image/top/varsity-blue-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/varsity-blue-in.png";
      break;
    case "/assets/image/top/varsity-purple-out.png":
      document.querySelector(".default-top").src =
        "/assets/image/top/varsity-purple-in.png";
      break;

    default:
      break;
  }
}

function handleOnepieceImg(e) {
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
    case "/assets/image/top-onepiece/zigzag-dress-purple-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/zigzag-dress-purple-in.png";
      break;
    case "/assets/image/top-onepiece/zigzag-dress-orange-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/zigzag-dress-orange-in.png";
      break;
    case "/assets/image/top-onepiece/zigzag-dress-green-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/zigzag-dress-green-in.png";
      break;
    case "/assets/image/top-onepiece/tight-dress-white-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/tight-dress-white-in.png";
      break;
    case "/assets/image/top-onepiece/tight-dress-gold-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/tight-dress-gold-in.png";
      break;
    case "/assets/image/top-onepiece/tight-dress-blue-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/tight-dress-blue-in.png";
      break;
    case "/assets/image/top-onepiece/suspenders-dress-green-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/suspenders-dress-green-in.png";
      break;
    case "/assets/image/top-onepiece/suspenders-dress-blue-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/suspenders-dress-blue-in.png";
      break;
    case "/assets/image/top-onepiece/suspenders-dress-black-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/suspenders-dress-black-in.png";
      break;
    case "/assets/image/top-onepiece/roman-clothes-red-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/roman-clothes-red-in.png";
      break;
    case "/assets/image/top-onepiece/roman-clothes-purple-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/roman-clothes-purple-in.png";
      break;
    case "/assets/image/top-onepiece/roman-clothes-green-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/roman-clothes-green-in.png";
      break;
    case "/assets/image/top-onepiece/religious-robe-white-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/religious-robe-white-in.png";
      break;
    case "/assets/image/top-onepiece/religious-robe-brown-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/religious-robe-brown-in.png";
      break;
    case "/assets/image/top-onepiece/religious-robe-black-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/religious-robe-black-in.png";
      break;
    case "/assets/image/top-onepiece/plate-armor-iron-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/plate-armor-iron-in.png";
      break;
    case "/assets/image/top-onepiece/plate-armor-gold-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/plate-armor-gold-in.png";
      break;
    case "/assets/image/top-onepiece/plate-armor-black-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/plate-armor-black-in.png";
      break;
    case "/assets/image/top-onepiece/pilot-suit-red-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/pilot-suit-red-in.png";
      break;
    case "/assets/image/top-onepiece/pilot-suit-orange-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/pilot-suit-orange-in.png";
      break;
    case "/assets/image/top-onepiece/pilot-suit-green-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/pilot-suit-green-in.png";
      break;
    case "/assets/image/top-onepiece/overalls-white-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/overalls-white-in.png";
      break;
    case "/assets/image/top-onepiece/overalls-red-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/overalls-red-in.png";
      break;
    case "/assets/image/top-onepiece/overalls-brown-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/overalls-brown-in.png";
      break;
    case "/assets/image/top-onepiece/martial-arts-uniform-white-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/martial-arts-uniform-white-in.png";
      break;
    case "/assets/image/top-onepiece/martial-arts-uniform-gray-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/martial-arts-uniform-gray-in.png";
      break;
    case "/assets/image/top-onepiece/martial-arts-uniform-black-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/martial-arts-uniform-black-in.png";
      break;
    case "/assets/image/top-onepiece/magical-dress-white-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/magical-dress-white-in.png";
      break;
    case "/assets/image/top-onepiece/magical-dress-blue-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/magical-dress-blue-in.png";
      break;
    case "/assets/image/top-onepiece/magical-dress-black-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/magical-dress-black-in.png";
      break;
    case "/assets/image/top-onepiece/long-sleeved-coat-red-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/long-sleeved-coat-red-in.png";
      break;
    case "/assets/image/top-onepiece/long-sleeved-coat-purple-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/long-sleeved-coat-purple-in.png";
      break;
    case "/assets/image/top-onepiece/long-sleeved-coat-green-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/long-sleeved-coat-green-in.png";
      break;
    case "/assets/image/top-onepiece/loincloth-green-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/loincloth-green-in.png";
      break;
    case "/assets/image/top-onepiece/loincloth-brown-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/loincloth-brown-in.png";
      break;
    case "/assets/image/top-onepiece/loincloth-blue-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/loincloth-blue-in.png";
      break;
    case "/assets/image/top-onepiece/lace-dress-yellow-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/lace-dress-yellow-in.png";
      break;
    case "/assets/image/top-onepiece/lace-dress-pink-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/lace-dress-pink-in.png";
      break;
    case "/assets/image/top-onepiece/lace-dress-black-blood-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/lace-dress-black-blood-in.png";
      break;
    case "/assets/image/top-onepiece/bodysuit-yellow-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/bodysuit-yellow-in.png";
      break;
    case "/assets/image/top-onepiece/bodysuit-red-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/bodysuit-red-in.png";
      break;
    case "/assets/image/top-onepiece/bodysuit-blue-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/bodysuit-blue-in.png";
      break;
    case "/assets/image/top-onepiece/bathrobe-white-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/bathrobe-white-in.png";
      break;
    case "/assets/image/top-onepiece/bathrobe-blue-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/bathrobe-blue-in.png";
      break;
    case "/assets/image/top-onepiece/bathrobe-black-out.png":
      document.querySelector(".default-onepiece").src =
        "/assets/image/top-onepiece/bathrobe-black-in.png";
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
    case "/assets/image/bottom-Low/balloon-pants-brown-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/balloon-pants-brown-in.png";
      break;
    case "/assets/image/bottom-Low/balloon-pants-green-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/balloon-pants-green-in.png";
      break;
    case "/assets/image/bottom-Low/balloon-pants-pink-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/balloon-pants-pink-in.png";
      break;
    case "/assets/image/bottom-Low/check-pants-green-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/check-pants-green-in.png";
      break;
    case "/assets/image/bottom-Low/check-pants-purple-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/check-pants-purple-in.png";
      break;
    case "/assets/image/bottom-Low/check-pants-yellow-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/check-pants-yellow-in.png";
      break;
    case "/assets/image/bottom-Low/choker-pants-black-out.png":
      document.querySelector(".default-bottom").src =
        "/assets/image/bottom-Low/choker-pants-black-in.png";
      break;
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

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-head").src = "";
      break;
    case "/assets/image/head/bandana-red-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/bandana-red-in.png";
      break;
    case "/assets/image/head/bandana-white-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/bandana-white-in.png";
      break;
    case "/assets/image/head/bandana-yellow-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/bandana-yellow-in.png";
      break;
    case "/assets/image/head/beret-black-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/beret-black-in.png";
      break;
    case "/assets/image/head/beret-brown-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/beret-brown-in.png";
      break;
    case "/assets/image/head/beret-plaid-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/beret-plaid-in.png";
      break;
    case "/assets/image/head/bucket-hat-black-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/bucket-hat-black-in.png";
      break;
    case "/assets/image/head/bucket-hat-pink-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/bucket-hat-pink-in.png";
      break;
    case "/assets/image/head/bucket-hat-white-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/bucket-hat-white-in.png";
      break;
    case "/assets/image/head/cap-green-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/cap-green-in.png";
      break;
    case "/assets/image/head/cap-pink-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/cap-pink-in.png";
      break;
    case "/assets/image/head/cap-yellow-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/cap-yellow-in.png";
      break;
    case "/assets/image/head/chef-hat-black-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/chef-hat-black-in.png";
      break;
    case "/assets/image/head/chef-hat-gold-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/chef-hat-gold-in.png";
      break;
    case "/assets/image/head/chef-hat-white-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/chef-hat-white-in.png";
      break;
    case "/assets/image/head/crown-gold-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/crown-gold-in.png";
      break;
    case "/assets/image/head/crown-pink-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/crown-pink-in.png";
      break;
    case "/assets/image/head/crown-silver-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/crown-silver-in.png";
      break;
    case "/assets/image/head/hair-band-green-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/hair-band-green-in.png";
      break;
    case "/assets/image/head/hair-band-mint-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/hair-band-mint-in.png";
      break;
    case "/assets/image/head/hair-band-purple-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/hair-band-purple-in.png";
      break;
    case "/assets/image/head/head-phones-black-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/head-phones-black-in.png";
      break;
    case "/assets/image/head/head-phones-gold-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/head-phones-gold-in.png";
      break;
    case "/assets/image/head/head-phones-white-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/head-phones-white-in.png";
      break;
    case "/assets/image/head/knight-cap-red-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/knight-cap-red-in.png";
      break;
    case "/assets/image/head/knight-cap-silver-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/knight-cap-silver-in.png";
      break;
    case "/assets/image/head/knight-cap-yellow-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/knight-cap-yellow-in.png";
      break;
    case "/assets/image/head/magical-hat-black-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/magical-hat-black-in.png";
      break;
    case "/assets/image/head/magical-hat-blue-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/magical-hat-blue-in.png";
      break;
    case "/assets/image/head/magical-hat-white-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/magical-hat-white-in.png";
      break;
    case "/assets/image/head/propeller-cap-A-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/propeller-cap-A-in.png";
      break;
    case "/assets/image/head/propeller-cap-B-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/propeller-cap-B-in.png";
      break;
    case "/assets/image/head/propeller-cap-C-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/propeller-cap-C-in.png";
      break;
    case "/assets/image/head/rabbit-headband-purple-circle-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/rabbit-headband-purple-circle-in.png";
      break;
    case "/assets/image/head/rabbit-headband-purple-pink-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/rabbit-headband-purple-pink-in.png";
      break;
    case "/assets/image/head/rabbit-headband-purple-red-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/rabbit-headband-purple-red-in.png";
      break;
    case "/assets/image/head/safety-helmet-blue-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/safety-helmet-blue-in.png";
      break;
    case "/assets/image/head/safety-helmet-red-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/safety-helmet-red-in.png";
      break;
    case "/assets/image/head/safety-helmet-yellow-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/safety-helmet-yellow-in.png";
      break;
    case "/assets/image/head/santa-hat-green-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/santa-hat-green-in.png";
      break;
    case "/assets/image/head/santa-hat-lavender-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/santa-hat-lavender-in.png";
      break;
    case "/assets/image/head/santa-hat-red-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/santa-hat-red-in.png";
      break;
    case "/assets/image/head/straw-hat-mint-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/straw-hat-mint-in.png";
      break;
    case "/assets/image/head/straw-hat-purple-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/straw-hat-purple-in.png";
      break;
    case "/assets/image/head/straw-hat-red-out.png":
      document.querySelector(".default-head").src =
        "/assets/image/head/straw-hat-red-in.png";
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
      document.querySelector(".default-feel").src = "";
      break;
    case "/assets/image/feeling/blush-L-out.png":
      document.querySelector(".default-feel").src =
        "/assets/image/feeling/blush-L-in.png";
      break;
    case "/assets/image/feeling/blush-S-out.png":
      document.querySelector(".default-feel").src =
        "/assets/image/feeling/blush-S-in.png";
      break;
    case "/assets/image/feeling/nausea-out.png":
      document.querySelector(".default-feel").src =
        "/assets/image/feeling/nausea-in.png";
      break;
    case "/assets/image/feeling/rage-out.png":
      document.querySelector(".default-feel").src =
        "/assets/image/feeling/rage-in.png";
      break;
    case "/assets/image/feeling/shady-out.png":
      document.querySelector(".default-feel").src =
        "/assets/image/feeling/shady-in.png";
      break;
    case "/assets/image/feeling/shyness-out.png":
      document.querySelector(".default-feel").src =
        "/assets/image/feeling/shyness-in.png";
      break;

    default:
      break;
  }
}
function handleFaceImg(e) {
  let src = e.target.src;
  const relativeSrc = src.replace(/^.*\/\/[^\/]+/, "");

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-face").src = "";
      break;
    case "/assets/image/face/aio-glasses-blue-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/aio-glasses-blue-in.png";
      break;
    case "/assets/image/face/aio-glasses-green-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/aio-glasses-green-in.png";
      break;
    case "/assets/image/face/aio-glasses-pink-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/aio-glasses-pink-in.png";
      break;
    case "/assets/image/face/animal-face-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/animal-face-black-in.png";
      break;
    case "/assets/image/face/animal-face-purple-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/animal-face-purple-in.png";
      break;
    case "/assets/image/face/animal-face-red-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/animal-face-red-in.png";
      break;
    case "/assets/image/face/beak-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/beak-black-in.png";
      break;
    case "/assets/image/face/beak-blue-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/beak-blue-in.png";
      break;
    case "/assets/image/face/beak-yellow-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/beak-yellow-in.png";
      break;
    case "/assets/image/face/birthday-glasses-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/birthday-glasses-black-in.png";
      break;
    case "/assets/image/face/birthday-glasses-plaid-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/birthday-glasses-plaid-in.png";
      break;
    case "/assets/image/face/birthday-glasses-rainbow-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/birthday-glasses-rainbow-in.png";
      break;
    case "/assets/image/face/bubble-gum-blue-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/bubble-gum-blue-in.png";
      break;
    case "/assets/image/face/bubble-gum-pink-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/bubble-gum-pink-in.png";
      break;
    case "/assets/image/face/bubble-gum-yellow-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/bubble-gum-yellow-in.png";
      break;
    case "/assets/image/face/dust-mask-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/dust-mask-black-in.png";
      break;
    case "/assets/image/face/dust-mask-blue-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/dust-mask-blue-in.png";
      break;
    case "/assets/image/face/dust-mask-white-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/dust-mask-white-in.png";
      break;
    case "/assets/image/face/gas-mask-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/gas-mask-black-in.png";
      break;
    case "/assets/image/face/gas-mask-blue-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/gas-mask-blue-in.png";
      break;
    case "/assets/image/face/gas-mask-gold-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/gas-mask-gold-in.png";
      break;
    case "/assets/image/face/gauze-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/gauze-black-in.png";
      break;
    case "/assets/image/face/gauze-brown-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/gauze-brown-in.png";
      break;
    case "/assets/image/face/gauze-white-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/gauze-white-in.png";
      break;
    case "/assets/image/face/iron-sunglasses-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/iron-sunglasses-black-in.png";
      break;
    case "/assets/image/face/iron-sunglasses-gold-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/iron-sunglasses-gold-in.png";
      break;
    case "/assets/image/face/iron-sunglasses-red-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/iron-sunglasses-red-in.png";
      break;
    case "/assets/image/face/lucky-glasses-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/lucky-glasses-black-in.png";
      break;
    case "/assets/image/face/lucky-glasses-brown-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/lucky-glasses-brown-in.png";
      break;
    case "/assets/image/face/lucky-glasses-white-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/lucky-glasses-white-in.png";
      break;
    case "/assets/image/face/mini-glasses-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/mini-glasses-black-in.png";
      break;
    case "/assets/image/face/mini-glasses-blue-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/mini-glasses-blue-in.png";
      break;
    case "/assets/image/face/mini-glasses-yellow-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/mini-glasses-yellow-in.png";
      break;
    case "/assets/image/face/mustache-black-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/mustache-black-in.png";
      break;
    case "/assets/image/face/mustache-brown-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/mustache-brown-in.png";
      break;
    case "/assets/image/face/mustache-white-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/mustache-white-in.png";
      break;
    case "/assets/image/face/piercing-gold-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/piercing-gold-in.png";
      break;
    case "/assets/image/face/piercing-rose-gold-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/piercing-rose-gold-in.png";
      break;
    case "/assets/image/face/piercing-silver-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/piercing-silver-in.png";
      break;
    case "/assets/image/face/scouter-blue-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/scouter-blue-in.png";
      break;
    case "/assets/image/face/scouter-green-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/scouter-green-in.png";
      break;
    case "/assets/image/face/scouter-red-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/scouter-red-in.png";
      break;
    case "/assets/image/face/stick-tongue-out-green-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/stick-tongue-out-green-in.png";
      break;
    case "/assets/image/face/stick-tongue-out-purple-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/stick-tongue-out-purple-in.png";
      break;
    case "/assets/image/face/stick-tongue-out-red-out.png":
      document.querySelector(".default-face").src =
        "/assets/image/face/stick-tongue-out-red-in.png";
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

  switch (relativeSrc) {
    case "/assets/image/none.png":
      document.querySelector(".default-partner").src = "";
      break;
    case "/assets/image/czone/bee-blue-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/bee-blue-in.png";
      break;
    case "/assets/image/czone/bee-orange-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/bee-orange-in.png";
      break;
    case "/assets/image/czone/bee-yellow-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/bee-yellow-in.png";
      break;
    case "/assets/image/czone/crow-black-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/crow-black-in.png";
      break;
    case "/assets/image/czone/crow-mint-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/crow-mint-in.png";
      break;
    case "/assets/image/czone/crow-yellow-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/crow-yellow-in.png";
      break;
    case "/assets/image/czone/dinosaur-gold-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/dinosaur-gold-in.png";
      break;
    case "/assets/image/czone/dinosaur-green-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/dinosaur-green-in.png";
      break;
    case "/assets/image/czone/dinosaur-purple-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/dinosaur-purple-in.png";
      break;
    case "/assets/image/czone/dog-black-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/dog-black-in.png";
      break;
    case "/assets/image/czone/dog-red-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/dog-red-in.png";
      break;
    case "/assets/image/czone/dog-white-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/dog-white-in.png";
      break;
    case "/assets/image/czone/fox-gold-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/fox-gold-in.png";
      break;
    case "/assets/image/czone/fox-orange-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/fox-orange-in.png";
      break;
    case "/assets/image/czone/fox-white-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/fox-white-in.png";
      break;
    case "/assets/image/czone/ladybug-gold-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/ladybug-gold-in.png";
      break;
    case "/assets/image/czone/ladybug-purple-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/ladybug-purple-in.png";
      break;
    case "/assets/image/czone/ladybug-red-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/ladybug-red-in.png";
      break;
    case "/assets/image/czone/lion-black-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/lion-black-in.png";
      break;
    case "/assets/image/czone/lion-blue-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/lion-blue-in.png";
      break;
    case "/assets/image/czone/lion-brown-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/lion-brown-in.png";
      break;
    case "/assets/image/czone/lizard-blue-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/lizard-blue-in.png";
      break;
    case "/assets/image/czone/lizard-pink-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/lizard-pink-in.png";
      break;
    case "/assets/image/czone/lizard-yellow-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/lizard-yellow-in.png";
      break;
    case "/assets/image/czone/mandrake-beige-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/mandrake-beige-in.png";
      break;
    case "/assets/image/czone/mandrake-blue-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/mandrake-blue-in.png";
      break;
    case "/assets/image/czone/mandrake-red-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/mandrake-red-in.png";
      break;
    case "/assets/image/czone/monkey-brown-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/monkey-brown-in.png";
      break;
    case "/assets/image/czone/monkey-gold-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/monkey-gold-in.png";
      break;
    case "/assets/image/czone/monkey-white-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/monkey-white-in.png";
      break;
    case "/assets/image/czone/octopus-blue-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/octopus-blue-in.png";
      break;
    case "/assets/image/czone/octopus-purple-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/octopus-purple-in.png";
      break;
    case "/assets/image/czone/octopus-red-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/octopus-red-in.png";
      break;
    case "/assets/image/czone/polarbear-black-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/polarbear-black-in.png";
      break;
    case "/assets/image/czone/polarbear-brown-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/polarbear-brown-in.png";
      break;
    case "/assets/image/czone/polarbear-white-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/polarbear-white-in.png";
      break;
    case "/assets/image/czone/totem-brown-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/totem-brown-in.png";
      break;
    case "/assets/image/czone/totem-gold-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/totem-gold-in.png";
      break;
    case "/assets/image/czone/totem-white-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/totem-white-in.png";
      break;
    case "/assets/image/czone/ufo-black-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/ufo-black-in.png";
      break;
    case "/assets/image/czone/ufo-gray-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/ufo-gray-in.png";
      break;
    case "/assets/image/czone/ufo-pink-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/ufo-pink-in.png";
      break;
    case "/assets/image/czone/vintage-robot-black-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/vintage-robot-black-in.png";
      break;
    case "/assets/image/czone/vintage-robot-blue-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/vintage-robot-blue-in.png";
      break;
    case "/assets/image/czone/vintage-robot-red-out.png":
      document.querySelector(".default-partner").src =
        "/assets/image/czone/vintage-robot-red-in.png";
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

    // LOW
    case "/assets/image/boxeffect/coin-gold-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/coin-gold-in.png";
      break;
    case "/assets/image/boxeffect/grass-standee-blue-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/grass-standee-blue-in.png";
      break;
    case "/assets/image/boxeffect/grass-standee-brown-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/grass-standee-brown-in.png";
      break;
    case "/assets/image/boxeffect/grass-standee-green-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/grass-standee-green-in.png";
      break;
    case "/assets/image/boxeffect/light-green-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/light-green-in.png";
      break;
    case "/assets/image/boxeffect/light-pink-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/light-pink-in.png";
      break;
    case "/assets/image/boxeffect/light-yellow-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/light-yellow-in.png";
      break;

    // HIGHT
    case "/assets/image/boxeffect/galaxy-green-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/galaxy-green-in.png";
      break;
    case "/assets/image/boxeffect/galaxy-purple-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/galaxy-purple-in.png";
      break;
    case "/assets/image/boxeffect/galaxy-red-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/galaxy-red-in.png";
      break;
    case "/assets/image/boxeffect/gas-black-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/gas-black-in.png";
      break;
    case "/assets/image/boxeffect/gas-green-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/gas-green-in.png";
      break;
    case "/assets/image/boxeffect/gas-white-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/gas-white-in.png";
      break;
    case "/assets/image/boxeffect/water-blue-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/water-blue-in.png";
      break;
    case "/assets/image/boxeffect/water-green-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/water-green-in.png";
      break;
    case "/assets/image/boxeffect/water-yellow-out.png":
      document.querySelector(".default-boxeffect").src =
        "/assets/image/boxeffect/water-yellow-in.png";
      break;

    default:
      break;
  }

  if (
    relativeSrc === "/assets/image/boxeffect/galaxy-green-out.png" ||
    relativeSrc === "/assets/image/boxeffect/galaxy-purple-out.png" ||
    relativeSrc === "/assets/image/boxeffect/galaxy-red-out.png" ||
    relativeSrc === "/assets/image/boxeffect/gas-black-out.png" ||
    relativeSrc === "/assets/image/boxeffect/gas-green-out.png" ||
    relativeSrc === "/assets/image/boxeffect/gas-white-out.png" ||
    relativeSrc === "/assets/image/boxeffect/water-blue-out.png" ||
    relativeSrc === "/assets/image/boxeffect/water-green-out.png" ||
    relativeSrc === "/assets/image/boxeffect/water-yellow-out.png"
  ) {
    document.querySelector(".default-boxeffect").style.zIndex = "19";
  } else {
    document.querySelector(".default-boxeffect").style.zIndex = "1";
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
