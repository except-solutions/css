module.exports = (i18n, eventText) => {
  return Object
    .keys(i18n.repository)
    .map(Key => i18n.repository[Key][eventText]());
};
