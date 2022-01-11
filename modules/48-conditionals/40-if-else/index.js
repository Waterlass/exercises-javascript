// BEGIN
const buildUrl = (path, domain) => {

  if (path.startsWith('/')) {
    return (`https://${domain}${path}`);
  }
// работает и при отсутствии path
  else {
    return (`https://${domain}/${path}`);
  }
};
// END

export default buildUrl;
