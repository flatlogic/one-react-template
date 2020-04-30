export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_SIDEBAR_COLOR = 'CHANGE_SIDEBAR_COLOR';
export const CHANGE_NAVBAR_COLOR = 'CHANGE_NAVBAR_COLOR';
export const NAVBAR_TYPE_TOGGLE = 'NAVBAR_TYPE_TOGGLE';
export const SIDEBAR_TYPE_TOGGLE = 'SIDEBAR_TYPE_TOGGLE';

export function changeTheme(payload) {
  return {
    type: CHANGE_THEME,
    payload,
  };
}

export function changeSidebarColor(payload) {
  return {
    type: CHANGE_SIDEBAR_COLOR,
    payload,
  };
}

export function changeNavbarColor(payload) {
  return {
    type: CHANGE_NAVBAR_COLOR,
    payload,
  };
}

export function navbarTypeToggle(value) {
  return {
    type: NAVBAR_TYPE_TOGGLE,
    payload: value
  }
}

export function sidebarTypeToggle(value) {
  return {
    type: SIDEBAR_TYPE_TOGGLE,
    payload: value
  }
}

