import STYLE from 'styled-components'

const extendClick = () => {
  return `
    position: relative;
    &:before{
      content: '';
      position: absolute;
      top: -10px; bottom: -10px; left: -10px; right: -10px;
    };
  `
}

const noWrap = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
}

export default {
  '$fontStyle': 'Barlow',
  '$darkColor': '#000000',
  '$lightColor': '#FFFFFF',
  '$themeDarkColor': '#27ae60',
  '$themeLightColor': '#2980b9',
  extendClick,
  noWrap
}