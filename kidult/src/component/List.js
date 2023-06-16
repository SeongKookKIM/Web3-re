/*eslint-disable */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ListMenu from "./ListMenu";

function List() {
  let [tab, setTab] = useState(0);
  let [sealNum, setSealNum] = useState(0);

  let store = useSelector((state) => {
    return state;
  });

  return (
    <div className="list">
      <div className="list-wrapper">
        <div className="item">
          <ul>
            {store.itemimg.map((it, i) => {
              return (
                <li key={i} className={tab === i ? "check" : ""}>
                  <img
                    src={it}
                    alt="item-list"
                    onClick={() => {
                      setTab(i);
                    }}
                  ></img>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="item-box">
          {
            [
              <h3>skin-color</h3>,
              <h3>hair</h3>,
              <h3>eyes</h3>,
              <h3>top</h3>,
              <h3>one-piece</h3>,
              <h3>bottom</h3>,
              <h3>shoes</h3>,
              <h3>head</h3>,
              <h3>feeling</h3>,
              <h3>face</h3>,
              <h3>identity1</h3>,
              <h3>identity2</h3>,
              <h3>partner</h3>,
              <h3>pack-color</h3>,
              <h3>pack-design</h3>,
              <h3>pack-pattern</h3>,
              <h3>box-effect</h3>,
              <h3>sticker</h3>,
            ][tab]
          }
          {tab == 17 && (
            <div className="seal-list">
              <ul>
                <li className="sticker-a">
                  <img
                    src="assets/image/emoticon/sticker_A.png"
                    onClick={() => {
                      setSealNum(1);
                    }}
                  />
                </li>
                <li className="sticker-b">
                  <img
                    src="assets/image/emoticon/sticker_B.png"
                    onClick={() => {
                      setSealNum(2);
                    }}
                  />
                </li>
                <li className="sticker-c">
                  <img
                    src="assets/image/emoticon/sticker_C.png"
                    onClick={() => {
                      setSealNum(3);
                    }}
                  />
                </li>
                <li className="sticker-d">
                  <img
                    src="assets/image/emoticon/sticker_D.png"
                    onClick={() => {
                      setSealNum(4);
                    }}
                  />
                </li>
                <li className="sticker-e">
                  <img
                    src="assets/image/emoticon/sticker_E.png"
                    onClick={() => {
                      setSealNum(5);
                    }}
                  />
                </li>
                <li className="sticker-f">
                  <img
                    src="assets/image/emoticon/sticker_F.png"
                    onClick={() => {
                      setSealNum(6);
                    }}
                  />
                </li>
              </ul>
            </div>
          )}
          <div className="item-box-list">
            <ListMenu tab={tab} sealNum={sealNum} />
          </div>
        </div>

        <div className="item-bottom">
          <img src={store.showimg.src}></img>
          <h2>{store.showimg.name}</h2>
          <div className="reset-box">
            <img
              src="assets/image/emoticon/reset.png"
              className="reset"
              onClick={() => {
                window.location.reload();
              }}
            ></img>
            <img src="assets/image/emoticon/link.png" className="link"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
