import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListMenu from "./ListMenu";

function List() {
  let store = useSelector((state) => {
    return state;
  });

  let [tab, setTab] = useState(0);

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
          <div className="item-box-list">
            <ListMenu tab={tab} />
          </div>
        </div>

        <div className="item-bottom">
          <img src="assets/image/eyes/eyesA-blue-out.png"></img>
          <h2>eyesA-blue-out</h2>
          <img src="assets/image/emoticon/reset.png" className="link"></img>
        </div>
      </div>
    </div>
  );
}

export default List;
