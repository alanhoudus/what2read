import { NavLink } from 'react-router-dom';

import { profileNav, regularNav } from '../data/nav';

export function mapProfileNav() {
  const myProfile = profileNav.map((element) => (
    <NavLink
      to={element.to}
      key={element.key}
    >
      <li
        className="header-profilemenu--nav"
      >
        {element.name}
      </li>
    </NavLink>
  ));

  return myProfile;
}

export function mapRegularNav() {
  const nav = regularNav.map((element) => (
    <NavLink
      to={element.to}
      key={element.key}
    >
      <li
        className="header-burgermenu--nav"
        // {element.key === 'contact' ? 'className="header-burgermenu--nav-contact' :
        //  'className="header-burgermenu--nav'}
      >
        {element.name}
      </li>
    </NavLink>
  ));
  return nav;
}
