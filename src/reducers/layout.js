import { 
  CHANGE_THEME,
  CHANGE_SIDEBAR_COLOR,
  CHANGE_NAVBAR_COLOR,
  NAVBAR_TYPE_TOGGLE,
  SIDEBAR_TYPE_TOGGLE
} from '../actions/layout';

import config from '../config'

export const DashboardThemes = {
  LIGHT: "light",
  DARK: "dark"
};

export const SidebarTypes = {
  SOLID: "solid",
  TRANSPARENT: "transparent",
}

export const NavbarTypes = {
  STATIC: "static",
  FLOATING: "floating",
}

export const LayoutComponents = {
  NAVBAR: "navbar",
  SIDEBAR: "sidebar"
}

Object.freeze(DashboardThemes);
Object.freeze(SidebarTypes);
Object.freeze(NavbarTypes);
Object.freeze(LayoutComponents);

const defaultState = {
  dashboardTheme: DashboardThemes.DARK,
  sidebarColor: DashboardThemes.DARK,
  navbarColor:  config.app.colors.light,
  navbarType: NavbarTypes.STATIC,
  sidebarType: SidebarTypes.SOLID
};

export default function layoutReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        dashboardTheme: action.payload
      };
    case CHANGE_SIDEBAR_COLOR:
      return {
        ...state,
        sidebarColor: action.payload
      };
    case CHANGE_NAVBAR_COLOR:
      return {
        ...state,
        navbarColor: action.payload
      };
    case NAVBAR_TYPE_TOGGLE: 
      return {
        ...state,
        navbarType: action.payload,
      }
    case SIDEBAR_TYPE_TOGGLE:
      return {
        ...state,
        sidebarType: action.payload
      }
    default:
      return state;
  }
}
