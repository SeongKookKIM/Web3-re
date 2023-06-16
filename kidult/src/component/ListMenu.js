import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShow } from "../Sotre";
import {
  handleAzoneImg,
  handleBodyImg,
  handleBottomImg,
  handleBoxEffectImg,
  handleBzoneImg,
  handleDesignImg,
  handleEyesImg,
  handleFaceImg,
  handleFeelingImg,
  handleHairImg,
  handleHeadImg,
  handleOnepieceImg,
  handlePackageImg,
  handlePartnerImg,
  handlePatternImg,
  handleSealImg,
  handleShoesImg,
  handleTopImg,
} from "../event/HandlerEvent";

function ListMenu({ tab }) {
  let [imgTab, setImgTab] = useState(0);
  let [imgTab1, setImgTab1] = useState(0);
  let [imgTab2, setImgTab2] = useState(0);
  let [imgTab3, setImgTab3] = useState(0);
  let [imgTab4, setImgTab4] = useState(0);
  let [imgTab5, setImgTab5] = useState(0);
  let [imgTab6, setImgTab6] = useState(0);
  let [imgTab7, setImgTab7] = useState(0);
  let [imgTab8, setImgTab8] = useState(0);
  let [imgTab9, setImgTab9] = useState(0);
  let [imgTab10, setImgTab10] = useState(0);
  let [imgTab11, setImgTab11] = useState(0);
  let [imgTab12, setImgTab12] = useState(0);
  let [imgTab13, setImgTab13] = useState(0);
  let [imgTab14, setImgTab14] = useState(0);
  let [imgTab15, setImgTab15] = useState(0);
  let [imgTab16, setImgTab16] = useState(0);
  let [imgTab17, setImgTab17] = useState(0);

  let store = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();
  return (
    <ul>
      {
        [
          store.bodyimg.map((it, i) => {
            return (
              <li key={i} className={imgTab === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="body"
                  onClick={(e) => {
                    setImgTab(i);
                    handleBodyImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.hairimg.map((it, i) => {
            return (
              <li key={i} className={imgTab1 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="hair"
                  onClick={(e) => {
                    setImgTab1(i);
                    handleHairImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.eyesimg.map((it, i) => {
            return (
              <li key={i} className={imgTab2 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="eye"
                  onClick={(e) => {
                    setImgTab2(i);
                    handleEyesImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.topimg.map((it, i) => {
            return (
              <li key={i} className={imgTab3 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="top"
                  onClick={(e) => {
                    setImgTab3(i);
                    handleTopImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.onepieceimg.map((it, i) => {
            return (
              <li key={i} className={imgTab4 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="onepiece"
                  onClick={(e) => {
                    setImgTab4(i);
                    handleOnepieceImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.bottomimg.map((it, i) => {
            return (
              <li key={i} className={imgTab5 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="bottom"
                  onClick={(e) => {
                    setImgTab5(i);
                    handleBottomImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.shoesimg.map((it, i) => {
            return (
              <li key={i} className={imgTab6 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="shoes"
                  onClick={(e) => {
                    setImgTab6(i);
                    handleShoesImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.headimg.map((it, i) => {
            return (
              <li key={i} className={imgTab7 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="head"
                  onClick={(e) => {
                    setImgTab7(i);
                    handleHeadImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.feelingimg.map((it, i) => {
            return (
              <li key={i} className={imgTab8 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="feel"
                  onClick={(e) => {
                    setImgTab8(i);
                    handleFeelingImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.faceimg.map((it, i) => {
            return (
              <li key={i} className={imgTab9 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="face"
                  onClick={(e) => {
                    setImgTab9(i);
                    handleFaceImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.azoneimg.map((it, i) => {
            return (
              <li key={i} className={imgTab10 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="a-zone"
                  onClick={(e) => {
                    setImgTab10(i);
                    handleAzoneImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.bzoneimg.map((it, i) => {
            return (
              <li key={i} className={imgTab11 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="b-zone"
                  onClick={(e) => {
                    setImgTab11(i);
                    handleBzoneImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.partnerimg.map((it, i) => {
            return (
              <li key={i} className={imgTab12 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="c-zone"
                  onClick={(e) => {
                    setImgTab12(i);
                    handlePartnerImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.packageimg.map((it, i) => {
            return (
              <li key={i} className={imgTab13 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="package"
                  onClick={(e) => {
                    setImgTab13(i);
                    handlePackageImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.packDesignimg.map((it, i) => {
            return (
              <li key={i} className={imgTab14 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="design"
                  onClick={(e) => {
                    setImgTab14(i);
                    handleDesignImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.patternimg.map((it, i) => {
            return (
              <li key={i} className={imgTab15 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="pattern"
                  onClick={(e) => {
                    setImgTab15(i);
                    handlePatternImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.boxeffectimg.map((it, i) => {
            return (
              <li key={i} className={imgTab16 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="box-effect"
                  onClick={(e) => {
                    setImgTab16(i);
                    handleBoxEffectImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
          store.sealimg.map((it, i) => {
            return (
              <li key={i} className={imgTab17 === i ? "checked" : ""}>
                <img
                  src={it.src}
                  alt="seal"
                  onClick={(e) => {
                    setImgTab17(i);
                    handleSealImg(e);
                    dispatch(
                      changeShow({
                        src: it.src,
                        name: it.name,
                      })
                    );
                  }}
                ></img>
              </li>
            );
          }),
        ][tab]
      }
    </ul>
  );
}

export default ListMenu;
