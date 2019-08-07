import {
  slotsConfig
} from './store/configs'

export function randomInteger(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function previousSlot(slot) {
  const index = slotsConfig.findIndex(s => slot == s);
  let previousIndex;
  if(index == 0) {
    previousIndex = slotsConfig.length - 1
  } else {
    previousIndex = index - 1
  }
  return slotsConfig[previousIndex]
}

export function nextSlot(slot) {  
  const index = slotsConfig.findIndex(s => slot == s);
  let nextIndex;
  if (index == slotsConfig.length - 1) {
    nextIndex = 0
  } else {
    nextIndex = index + 1
  }
  return slotsConfig[nextIndex]
}
