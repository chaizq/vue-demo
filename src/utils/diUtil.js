/**
 * 获取cookie中的值
 * @param {*} name
 */
export const getCookie = name => {
  // let arr;
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr && arr.length >= 3) {
    return unescape(arr[2]);
  }
  // const pathname = window.location.pathname;
  const { location } = window;
  const { pathname } = location;
  if (pathname !== '/home') {
    window.top.location.href = '/home';
  }
  return '';
};