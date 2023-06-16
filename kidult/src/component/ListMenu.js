import React from "react";
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="body"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="hair"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="eye"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="top"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="onepiece"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="bottom"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="shoes"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="head"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="feel"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="face"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="a-zone"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="b-zone"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="c-zone"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="package"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="design"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="pattern"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="box-effect"
                  onClick={(e) => {
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
              <li key={i}>
                <img
                  src={it.src}
                  alt="seal"
                  onClick={(e) => {
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
