const push = (path: string) => {
  window.history.pushState({}, "", path);
  window.location.reload();
};

export default push;
