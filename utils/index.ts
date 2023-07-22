export const generateUniqueId = (guidMap: any = {}) => {
  let uuid = guid(5);
  while (guidMap.hasOwnProperty(uuid)) {
    uuid = guid(5);
  }
  guidMap[uuid] = true;
  return uuid;
};

export const guid = function (len: number = 5) {
  let result = "";
  let characters = "abcdefghijkmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
