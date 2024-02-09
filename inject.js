window.cae = (p, t, a) => {
  frag = document.createDocumentFragment();
  e = document.createElementNS("http://www.w3.org/2000/svg", t);
  for (let k in a) e.setAttribute(k, a[k]);
  frag.append(e);
  p.append(frag);
  return e;
};

window.u = (i) => {
  return document.getElementById(i);
};

window.m = (s, e, d, mi, ma, h) => {
  ra = h ? 15 : 255;
  return DNA[0]
    .match(d ? /../g : /./g)
    .slice(s, e)
    .map((h) => (parseInt(h, 16) / ra) * (ma - mi) + mi);
};

window._TestRect = () => {
  let r = cae(u("vBox"), "rect", {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "red",
  });
  r.onclick = () => {
    console.log("clicked");
  };
};
