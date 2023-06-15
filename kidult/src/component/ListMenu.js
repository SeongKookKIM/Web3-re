import React from "react";
import { useSelector } from "react-redux";

function ListMenu({ tab }) {
  let store = useSelector((state) => {
    return state;
  });
  return (
    <ul>
      {
        [
          store.bodyimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="body"></img>
              </li>
            );
          }),
          store.hairimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="hair"></img>
              </li>
            );
          }),
          store.eyesimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="eye"></img>
              </li>
            );
          }),
          store.topimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="top"></img>
              </li>
            );
          }),
          store.onepieceimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="onepiece"></img>
              </li>
            );
          }),
          store.bottomimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="bottom"></img>
              </li>
            );
          }),
          store.shoesimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="shoes"></img>
              </li>
            );
          }),
          store.headimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="head"></img>
              </li>
            );
          }),
          store.feelingimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="feel"></img>
              </li>
            );
          }),
          store.faceimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="face"></img>
              </li>
            );
          }),
          store.azoneimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="a-zone"></img>
              </li>
            );
          }),
          store.bzoneimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="b-zone"></img>
              </li>
            );
          }),
          store.czoneimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="c-zone"></img>
              </li>
            );
          }),
          store.packageimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="package"></img>
              </li>
            );
          }),
          store.packDesignimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="design"></img>
              </li>
            );
          }),
          store.patternimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="pattern"></img>
              </li>
            );
          }),
          store.boxeffectimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="box-effect"></img>
              </li>
            );
          }),
          store.sealimg.map((it, i) => {
            return (
              <li key={i}>
                <img src={it} alt="seal"></img>
              </li>
            );
          }),
        ][tab]
      }
    </ul>
  );
}

export default ListMenu;
