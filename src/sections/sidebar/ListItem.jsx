import { getSiblings } from "../../utils";

// menuLevel: 1, 2, 3
export const ListItem = ({ name, url, icon, children, menuLevel }) => {
  // const handleMenuItem = (e) => {
  //   e.preventDefault();
  //   // console.log(e);
  //   let el = e.currentTarget;
  //   let menuLevel = parseInt(e.currentTarget.dataset.level);
  //   console.log(menuLevel);
  //   if (menuLevel === 1) {
  //     el.classList.add("selected");
  //     let siblings = getSiblings(el);
  //     console.log(siblings);

  //     siblings.forEach((el) => {
  //       el.classList.remove("selected");
  //     });
  //   }
  //   // router work
  // };

  return (
    <li data-level={menuLevel}>
      {icon && <img src={icon} className="MenuItemIcons" alt={name} />}
      <div className="name">
        <a href={url}>{name}</a>
      </div>
      {children}
    </li>
  );
};
