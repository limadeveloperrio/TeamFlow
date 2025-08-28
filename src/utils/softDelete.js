export const notDeleted = (extraWhere = {}) => ({
  ...extraWhere,
  isDeleted: false
});
