export function setCookie(name, value, options = {}) {
  const { path = "/", maxAge, expires, secure, sameSite = "strict" } = options;

  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (path) cookie += `; path=${path}`;
  if (maxAge) cookie += `; max-age=${maxAge}`;
  if (expires) cookie += `; expires=${expires.toUTCString()}`;
  if (secure) cookie += "; secure";
  if (sameSite) cookie += `; samesite=${sameSite}`;

  document.cookie = cookie;
}

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export function deleteCookie(name) {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
