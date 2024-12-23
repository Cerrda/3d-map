/**
 * 获取图片地址
 * @param {String} name 图片名称，需要带后缀
 * @returns {URL.href} 图片地址
 */
export const getImgUrl = (name) => new URL(`../assets/images/${name}`, import.meta.url).href
