import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShow } from "../Sotre";

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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
          store.czoneimg.map((it, i) => {
            return (
              <li key={i}>
                <img
                  src={it.src}
                  alt="c-zone"
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
                  onClick={() => {
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
