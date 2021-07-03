import React, { useEffect, useState } from "react";
import ArrowRight from "../../images/icons/RightArrow";
import { SidebarStyled } from "./SidebarStyled";

export default function Sidebar(props: any) {
  // const sidebarLinks = useRef();

  // useEffect(() => {
  //   let sidebarlinksref = sidebarLinks.current;

  //   sidebarlinksref.addEventsListener("click", function (e) {
  //     console.log(e);
  //   });

  //   return () => {
  //     sidebarlinksref.removeEventListener();
  //   };
  // }, [sidebarLinks]);

  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <SidebarStyled>
      <ul className="level-1">
        {/*normal menu item*/}
        <li data-cid="10" className="not-in-selection-tree unselected topLevel">
          <img
            className="MenuItemIcons"
            src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D13891&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"
            alt="popular"
          />
          <div className="name">
            <a href="/popular">Popular</a>
          </div>
        </li>

        {/*normal menu item*/}
        <li data-cid="11" className="not-in-selection-tree unselected topLevel">
          <img
            className="MenuItemIcons"
            src="https://chaldn.com/_mpimage/hygiene?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D59830&q=low&v=1&m=40&webp=1&alpha=1"
            alt="popular"
          />
          <div className="name">
            <a href="/popular">Hygiene</a>
          </div>
        </li>

        {/*item has dropdown*/}
        <li data-cid="12" className="not-in-selection-tree unselected topLevel">
          <img
            className="MenuItemIcons"
            src="https://chaldn.com/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D13895&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"
            alt=""
          />
          <div className="name">
            <a href="/babycare">Baby Care</a>
            <span>
              <span>&nbsp; </span>
              <ArrowRight />
            </span>
          </div>
          <ul className="level-2">
            <li
              data-cid="20"
              data-pcid="12"
              className="not-in-selection-tree unselected"
            >
              <div className="name">
                <a href="/newborn-essentials">Newborn Essentials</a>
              </div>
            </li>
            <li
              data-cid="21"
              data-pcid="12"
              className="not-in-selection-tree unselected"
            >
              <div className="name">
                <a href="/diapering">Diapers &amp; Wipes</a>
                <span>
                  <span>&nbsp; </span>
                  <ArrowRight />
                </span>
              </div>
              <ul className="level-3">
                <li
                  data-cid="30"
                  data-pcid="21"
                  className="not-in-selection-tree unselected"
                >
                  <div className="name">
                    <a href="/wipes">Wipes</a>
                  </div>
                </li>
                <li
                  data-cid="31"
                  data-pcid="21"
                  className="not-in-selection-tree unselected"
                >
                  <div className="name">
                    <a href="/diapers">Diapers</a>
                  </div>
                </li>
              </ul>
            </li>
            <li
              data-cid="22"
              data-pcid="12"
              className="not-in-selection-tree unselected"
            >
              <div className="name">
                <a href="/feeders">Feeders</a>
              </div>
            </li>
            <li
              data-cid="23"
              data-pcid="12"
              className="not-in-selection-tree unselected"
            >
              <div className="name">
                <a href="/fooding">Fooding</a>
                <span>
                  <span>&nbsp; </span>
                  <i className="arrow-right"></i>
                </span>
              </div>
            </li>
            <li
              data-cid="24"
              data-pcid="12"
              className="not-in-selection-tree unselected"
            >
              <div className="name">
                <a href="/bath-skincare">Bath &amp; Skincare</a>
              </div>
            </li>
            <li
              data-cid="25"
              data-pcid="12"
              className="not-in-selection-tree unselected"
            >
              <div className="name">
                <a href="/baby-accessories">Baby Accessories</a>
                <span>
                  <span>&nbsp; </span>
                  <ArrowRight />
                </span>
              </div>
              <ul className="level-3">
                <li
                  data-cid="32"
                  data-pcid="25"
                  className="not-in-selection-tree unselected"
                >
                  <div className="name">
                    <a href="/wipes">Wipes</a>
                  </div>
                </li>
                <li
                  data-cid="33"
                  data-pcid="25"
                  className="not-in-selection-tree unselected"
                >
                  <div className="name">
                    <a href="/diapers">Diapers</a>
                  </div>
                </li>
              </ul>
            </li>
            <li
              data-cid="26"
              data-pcid="12"
              className="not-in-selection-tree unselected"
            >
              <div className="name">
                <a href="/baby-oral-care">Baby Oral Care</a>
              </div>
            </li>
          </ul>
        </li>
        {/* end item has dropdown*/}
      </ul>
    </SidebarStyled>
  );
}
