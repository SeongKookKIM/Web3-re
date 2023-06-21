/*eslint-disable */
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import React, { useRef } from "react";

function Kidult() {
  const captureRef = useRef(null);

  const handleCapture = async () => {
    if (!captureRef.current) return;

    try {
      const div = captureRef.current;
      const canva = await html2canvas(div, { scale: 2 });
      canva.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "result.jpg");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <div className="default">
      <div className="default-inner" ref={captureRef}>
        <img
          src="/assets/image/default-arms/asian-body-in.png"
          className="default-body"
        ></img>
        <img
          src="/assets/image/default-arms/asian-arms-in.png"
          className="default-arms"
        ></img>
        <img src="" className="default-feel"></img>
        <img src="" className="default-eye"></img>
        <img src="" className="default-face"></img>
        <img src="" className="default-hair"></img>
        <img src="" className="default-top"></img>
        <img src="" className="default-onepiece"></img>
        <img src="" className="default-acc"></img>
        <img src="" className="default-head"></img>
        <img src="" className="default-bottom"></img>
        <img src="" className="default-shoes"></img>
        <img src="" className="default-boxeffect"></img>
        <img src="" className="default-azone"></img>
        <img src="" className="default-bzone"></img>
        <img src="" className="default-partner"></img>
        <img
          src="/assets/image/packcolor/pack-color-white-in.png"
          className="default-package"
        ></img>
        <img src="" className="default-seal"></img>
        <img
          src="/assets/image/clearboard/clear-board-in.png"
          className="default-clearboard"
        ></img>
        <img
          src="/assets/image/packbasic/pack-basics.png"
          className="default-basics"
        ></img>
        <img
          src="/assets/image/packslot/number.png"
          className="default-slot"
        ></img>
        <img src="" className="default-design"></img>
        <img src="" className="default-pattern"></img>
      </div>
      <div
        className="default-reset"
        onClick={() => {
          window.location.reload();
        }}
      >
        <img src="assets/image/emoticon/reset.png" className="reset"></img>
        <p>RESET</p>
      </div>
      <button onClick={handleCapture}>capture</button>
    </div>
  );
}

export default Kidult;
