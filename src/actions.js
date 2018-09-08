export const TYPES = {
  CHANGE_TEXT: 'CHANGE_TEXT'
}

export const changeText = (text) => {
  return {
    type: TYPES.CHANGE_TEXT,
    text
  }
}