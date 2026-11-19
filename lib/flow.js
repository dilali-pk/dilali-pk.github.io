// Flow theme engine for dilali-pk.github.io. Author: Dilshad Ali.
// Builds each page as static HTML from content/site.ts (rendered at build time),
// and boot() starts the diagrams and animations in the browser.
import { site as D, contact as C } from "../content/site";

/* ================= helpers ================= */
var reduce = false;
var loops = [];
function every(fn, ms) { if (reduce) return; loops.push(setInterval(fn, ms)); }
function later(fn, ms) { loops.push(setTimeout(fn, ms)); }
function clearLoops() { loops.forEach(function (t) { clearInterval(t); clearTimeout(t); }); loops = []; }
function E(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function F(s) { return E(s); }
function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
function svcById(id) { return D.services.filter(function (s) { return s.id === id; })[0]; }
function caseBySlug(sl) { return D.cases.filter(function (c) { return c.slug === sl; })[0]; }

var ICONS = {
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
  code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  window: '<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M3 9h18M6.5 6.8h.01M9.5 6.8h.01"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5"/>',
  clip: '<path d="M9 3.5h6v3H9zM7.5 5H5v16h14V5h-2.5M9 13l2 2 4-4"/>',
  flag: '<path d="M5 21V4h11l-2 4 2 4H5"/>',
  branch: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="7" r="2"/><path d="M6 7v10M18 9c0 4-5 5-11 6.5"/>',
  doc: '<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6"/>',
  ledger: '<path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2zM5 18a2 2 0 0 1 2-2h12M9 8h6M9 11h4"/>',
  scan: '<path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4M8 12h8M12 8v8"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  cart: '<path d="M3 4h2l2.2 10h10.3L20 7H6.2"/><circle cx="9" cy="19" r="1.3"/><circle cx="17" cy="19" r="1.3"/>',
  swap: '<path d="M4 8h14l-3-3M20 16H6l3 3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  chart: '<path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/>',
  key: '<circle cx="15" cy="9" r="4.5"/><path d="M11.8 12.2L4 20M7 17l2 2M5 19l1.5 1.5"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  box: '<path d="M12 2.5l8.5 4.7v9.6L12 21.5l-8.5-4.7V7.2z"/><path d="M3.5 7.2L12 12l8.5-4.8M12 12v9.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'
};
function ic(name) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || "") + "</svg>"; }
function arrow() { return '<span class="arr" aria-hidden="true">&rarr;</span>'; }
function head(kick, title, lead, right) {
  return '<div class="head-row rv"><div><p class="kick">' + E(kick) + '</p><h2 class="h2">' + E(title) + "</h2>" + (lead ? '<p class="lead">' + F(lead) + "</p>" : "") + "</div>" + (right || "") + "</div>";
}
function chain(steps, big) {
  return '<div class="chain' + (big ? " big" : "") + '">' + steps.map(function (s, i) {
    return '<span class="cn' + (i === steps.length - 1 ? " last" : "") + '">' + E(s) + "</span>" + (i < steps.length - 1 ? '<span class="cl" aria-hidden="true"><i style="animation-delay:' + (i * 0.3).toFixed(1) + 's"></i></span>' : "");
  }).join("") + "</div>";
}
function postCard(p) {
  return '<div class="card insight rv"><span class="tag">' + E(p.tag) + '</span><span class="h3">' + E(p.t) + '</span><p class="muted" style="font-size:15px">' + E(p.s) + "</p></div>";
}
function band() {
  return '<section class="band"><div class="wrap"><div><h2>From a one-line fix to a full implementation.</h2><p>' + E("I handle it end to end: NetSuite, every system connected to it, and the people who use it every day.") + '</p></div><div class="ctas"><a class="btn" href="/contact/">Book a call ' + arrow() + '</a><a class="btn ghost" href="/work/">See my work</a></div></div></section>';
}
/* ================= hero diagram ================= */
var CAPS = {
  store: "<b>Storefronts.</b> Shopify, SuiteCommerce or WooCommerce orders arrive by webhook. Each one is checked against its own ID first, so a retry never creates a second sales order.",
  market: "<b>Marketplaces.</b> Amazon, eBay and Walmart orders and customers sync through a queue and land in the right subsidiary, matched on the buyer.",
  ns: "<b>NetSuite.</b> One OneWorld account at the center. Configuration first: roles, workflows and saved searches before any script.",
  wh: "<b>Warehouse and shipping.</b> ShipStation, UPS, FedEx and third-party warehouses send fulfillments, tracking and serial numbers back to the order.",
  bank: "<b>Payments and tax.</b> Stripe, PayPal and Avalara data posts to the right subsidiary, ready to reconcile against the ledger.",
  dash: "<b>Reporting.</b> Saved searches, workbooks and Power BI read one reconciled number instead of three spreadsheets."
};
function diagramSVG() {
  function node(k, x, y, label, icon) {
    return '<g class="node" data-k="' + k + '" tabindex="0" role="button" aria-label="' + label + '"><rect class="box" x="' + x + '" y="' + y + '" width="140" height="64" rx="16"/>' +
      '<g transform="translate(' + (x + 15) + " " + (y + 21) + ') scale(.92)"><g class="ic">' + ICONS[icon] + "</g></g>" +
      '<text class="nt" x="' + (x + 46) + '" y="' + (y + 37) + '">' + label + "</text></g>";
  }
  function pk(path, label, color, dur, begin, rev, w) {
    return '<g class="pk"><rect x="' + (-w / 2) + '" y="-10" width="' + w + '" height="20" rx="10" fill="' + color + '"/><text x="0" y="3.7" text-anchor="middle">' + label + '</text><animateMotion dur="' + dur + 's" begin="' + begin + 's" repeatCount="indefinite"' + (rev ? ' keyPoints="1;0" keyTimes="0;1" calcMode="linear"' : "") + '><mpath href="#' + path + '"/></animateMotion></g>';
  }
  return '<svg id="dsvg" viewBox="0 0 640 470" role="group" aria-label="NetSuite in the middle, connected to storefronts, marketplaces, warehouse, payments and reporting">' +
    '<path id="w-store" class="wire" d="M170 92 C 215 92, 200 220, 235 220"/>' +
    '<path id="w-market" class="wire" d="M170 372 C 215 372, 200 250, 235 250"/>' +
    '<path id="w-wh" class="wire" d="M405 220 C 440 220, 425 92, 470 92"/>' +
    '<path id="w-bank" class="wire" d="M405 250 C 440 250, 425 372, 470 372"/>' +
    '<path id="w-dash" class="wire" d="M320 280 L 320 390"/>' +
    pk("w-store", "Order", "#2f8cff", 3.2, 0, false, 52) + pk("w-market", "Order", "#2f8cff", 3.6, -1.4, false, 52) +
    pk("w-wh", "Shipment", "#0f9d76", 3.4, -0.7, false, 66) + pk("w-bank", "Payment", "#e8781c", 3.8, -2.1, true, 62) + pk("w-dash", "KPIs", "#5b6fd6", 2.6, -0.4, false, 48) +
    node("store", 30, 60, "Storefront", "cart") + node("market", 30, 340, "Marketplaces", "window") +
    node("wh", 470, 60, "Warehouse", "layers") + node("bank", 470, 340, "Payments", "ledger") + node("dash", 250, 390, "Reporting", "chart") +
    '<g class="node core" data-k="ns" tabindex="0" role="button" aria-label="NetSuite">' +
      '<rect x="229" y="184" width="182" height="102" rx="24" fill="none" stroke="#2f8cff" stroke-width="1.5" stroke-opacity=".4"><animate attributeName="stroke-opacity" values=".45;0;.45" dur="2.8s" repeatCount="indefinite"/></rect>' +
      '<rect class="cbox" x="235" y="190" width="170" height="90" rx="20"/><text class="ct" x="320" y="232" text-anchor="middle">NetSuite</text><text class="cs" x="320" y="254" text-anchor="middle">OneWorld account</text></g>' +
    "</svg>";
}
function initDiagram() {
  var svg = document.getElementById("dsvg"); if (!svg) return;
  var cap = document.getElementById("dcap");
  var nodes = $$(".node", svg), hold = false, order = ["store", "ns", "wh", "bank", "dash", "market"], idx = 0;
  function set(k) { nodes.forEach(function (n) { n.classList.toggle("on", n.getAttribute("data-k") === k); }); cap.innerHTML = CAPS[k]; }
  nodes.forEach(function (n) {
    var k = n.getAttribute("data-k");
    n.addEventListener("mouseenter", function () { hold = true; set(k); });
    n.addEventListener("mouseleave", function () { hold = false; });
    n.addEventListener("focus", function () { hold = true; set(k); });
    n.addEventListener("blur", function () { hold = false; });
    n.addEventListener("click", function () { hold = true; set(k); });
  });
  set("store");
  every(function () { if (hold) return; idx = (idx + 1) % order.length; set(order[idx]); }, 3400);
  if (reduce && svg.pauseAnimations) svg.pauseAnimations();
}

/* ================= team visual ================= */
function teamSVG() {
  var cx = 260, cy = 195, r = 140, pts = [];
  for (var i = 0; i < 6; i++) { var a = (-90 + i * 60) * Math.PI / 180; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
  var pairs = "", dots = "", n = 0;
  for (var a1 = 0; a1 < 6; a1++) for (var b1 = a1 + 1; b1 < 6; b1++) {
    pairs += '<path id="tp' + n + '" class="pair" d="M' + pts[a1][0].toFixed(1) + " " + pts[a1][1].toFixed(1) + " L " + pts[b1][0].toFixed(1) + " " + pts[b1][1].toFixed(1) + '"/>';
    if (n % 3 === 0) dots += '<circle class="hd" r="4" fill="#e8781c"><animateMotion dur="' + (2.2 + (n % 4) * 0.4) + 's" begin="' + (-n * 0.3).toFixed(1) + 's" repeatCount="indefinite"><mpath href="#tp' + n + '"/></animateMotion></circle>';
    n++;
  }
  var spokes = pts.map(function (p) { return '<path class="spoke" d="M' + p[0].toFixed(1) + " " + p[1].toFixed(1) + " L " + cx + " " + cy + '"/>'; }).join("");
  var nodes = pts.map(function (p, i) {
    var ly = i === 0 ? p[1] - 36 : p[1] + 44;
    return '<circle class="rc" cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="26"/><g transform="translate(' + (p[0] - 11).toFixed(1) + " " + (p[1] - 11).toFixed(1) + ') scale(.92)"><g class="ri">' + ICONS[D.roles6[i].icon] + '</g></g><text class="rl" x="' + p[0].toFixed(1) + '" y="' + ly.toFixed(1) + '" text-anchor="middle">' + E(D.roles6[i].short) + "</text>";
  }).join("");
  var me = '<g class="me"><circle cx="' + cx + '" cy="' + cy + '" r="48" fill="#2f8cff" opacity=".18"/><clipPath id="meclip"><circle cx="' + cx + '" cy="' + cy + '" r="42"/></clipPath><image href="/dilshad-ali.png" x="' + (cx - 42) + '" y="' + (cy - 42) + '" width="84" height="84" clip-path="url(#meclip)" preserveAspectRatio="xMidYMid slice"/></g>';
  return '<svg viewBox="0 0 520 400" role="img" aria-label="Six roles, either six people with fifteen handoffs or one person with none">' + pairs + spokes + dots + me + nodes + "</svg>";
}
function initTeam() {
  var box = document.getElementById("tviz"); if (!box) return;
  var btns = $$(".ttabs button", box), cnt = document.getElementById("tcount"), auto = true, one = false;
  function set(isOne) {
    one = isOne; box.classList.toggle("one", isOne);
    btns.forEach(function (b, i) { b.setAttribute("aria-pressed", (i === 1) === isOne ? "true" : "false"); });
    cnt.innerHTML = isOne ? "<b>1 person</b><span>0 handoffs, one point of contact</span>" : "<b>6 people</b><span>15 handoffs between them</span>";
  }
  btns.forEach(function (b, i) { b.addEventListener("click", function () { auto = false; set(i === 1); }); });
  set(false);
  every(function () { if (auto) set(!one); }, 4200);
}

/* ================= scenarios ================= */
function initScenarios() {
  var list = document.getElementById("slist"); if (!list) return;
  var btns = $$(".sbtn", list), panel = document.getElementById("spanel");
  function set(i) {
    var s = D.scenarios[i];
    btns.forEach(function (b, j) { b.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    panel.innerHTML = '<p class="q">&ldquo;' + E(s.q) + '&rdquo;</p><p class="a">' + E(s.a) + "</p><ul>" + s.get.map(function (g) { return "<li>" + ic("check") + E(g) + "</li>"; }).join("") + '</ul><a class="btn" href="/contact/">Talk about this ' + arrow() + "</a>";
    panel.classList.remove("fade"); void panel.offsetWidth; panel.classList.add("fade");
  }
  btns.forEach(function (b, i) { b.addEventListener("click", function () { set(i); }); b.addEventListener("mouseenter", function () { set(i); }); });
  set(0);
}

/* ================= steps ================= */
function stepsHTML() {
  return '<ol class="steps" id="steps"><li class="strack" aria-hidden="true"><span class="sfill" id="sfill"></span></li>' +
    D.steps.map(function (s, i) { return '<li class="step"><button type="button" aria-pressed="false"><span class="dot">' + (i + 1) + "</span>" + E(s.t) + "</button></li>"; }).join("") +
    '</ol><div class="sdetail" id="sdetail" aria-live="polite"></div>';
}
function initSteps() {
  var ol = document.getElementById("steps"); if (!ol) return;
  var items = $$(".step", ol), fill = document.getElementById("sfill"), det = document.getElementById("sdetail"), i0 = 0, auto = true;
  function set(i) {
    i0 = i;
    items.forEach(function (li, j) { li.classList.toggle("on", j === i); li.classList.toggle("done", j < i); li.querySelector("button").setAttribute("aria-pressed", j === i ? "true" : "false"); });
    fill.style.width = (i / (items.length - 1) * 100) + "%";
    det.innerHTML = '<div><div class="n">Step ' + (i + 1) + ' of 5</div><div class="t">' + E(D.steps[i].t) + "</div></div><p>" + E(D.steps[i].p) + "</p>";
    det.classList.remove("fade"); void det.offsetWidth; det.classList.add("fade");
  }
  items.forEach(function (li, j) { li.querySelector("button").addEventListener("click", function () { auto = false; set(j); }); });
  set(0);
  every(function () { if (auto) set((i0 + 1) % items.length); }, 3800);
}
function promisesHTML() {
  return '<div class="prom">' + D.promises.map(function (p) { return '<div class="rv">' + ic("check") + "<span>" + E(p) + "</span></div>"; }).join("") + "</div>";
}

/* ================= agencies: white label ================= */
function wlSVG() {
  function pk(id, label, color, w, begin, cls) {
    return '<g class="pk' + (cls ? " " + cls : "") + '"><rect x="' + (-w / 2) + '" y="-10" width="' + w + '" height="20" rx="10" fill="' + color + '"/><text x="0" y="3.7" text-anchor="middle">' + label + '</text><animateMotion dur="3.2s" begin="' + begin + 's" repeatCount="indefinite"><mpath href="#' + id + '"/></animateMotion></g>';
  }
  return '<svg viewBox="0 0 640 252" role="img" aria-label="Your client works only with your agency. Behind your agency I do the build, and it goes back to the client under your brand.">' +
    '<path id="wl-a" class="wire" d="M146 105 C 180 40, 211 40, 245 105"/>' +
    '<path id="wl-b" class="wire" d="M245 145 C 211 210, 180 210, 146 145"/>' +
    '<g class="hid"><path id="wl-c" class="wire" d="M395 105 C 429 40, 460 40, 494 105"/><path id="wl-d" class="wire" d="M494 145 C 460 210, 429 210, 395 145"/></g>' +
    '<path class="cur" d="M444 18 V 222"/><text class="ws" x="444" y="244" text-anchor="middle">out of client view</text>' +
    pk("wl-a", "Request", "#2f8cff", 62, 0) + pk("wl-b", "Your brand", "#0f9d76", 78, -1.6) +
    pk("wl-c", "Spec", "#2f8cff", 46, -0.8, "hid") + pk("wl-d", "Build + docs", "#0f9d76", 86, -2.4, "hid") +
    '<rect class="wb" x="16" y="85" width="130" height="80" rx="18"/><g transform="translate(30 114) scale(.92)"><g class="wi">' + ICONS.user + '</g></g><text class="wt" x="58" y="130">Your client</text>' +
    '<rect class="agb" x="245" y="80" width="150" height="90" rx="22"/><text class="agt" x="320" y="122" text-anchor="middle">Your agency</text><text class="ags" x="320" y="144" text-anchor="middle">your name, your logo</text>' +
    '<g class="hid"><rect class="wb meb" x="494" y="85" width="130" height="80" rx="18"/><clipPath id="wlclip"><circle cx="524" cy="125" r="18"/></clipPath><image href="/dilshad-ali.png" x="506" y="107" width="36" height="36" clip-path="url(#wlclip)" preserveAspectRatio="xMidYMid slice"/><text class="wt" x="552" y="122">Dilshad</text><text class="ws" x="552" y="139">the build</text></g>' +
    "</svg>";
}
function wlViz() {
  return '<div class="wlviz rv"><div class="ttabs" role="group" aria-label="Compare"><button type="button" aria-pressed="true">Client view</button><button type="button" aria-pressed="false">Behind the scenes</button></div><div class="dscroll">' + wlSVG() + '</div><div class="tcount" aria-live="polite"></div></div>';
}
function wlBlock() {
  return '<div class="wl">' + wlViz() + '<div><div class="roles">' + D.agency.terms.map(function (t) { return '<div class="role rv"><span class="h3">' + ic(t.i) + E(t.t) + "</span></div>"; }).join("") + '</div><div class="ctas"><a class="btn" href="/contact/">Talk partner terms ' + arrow() + "</a></div></div></div>";
}
function initWL() {
  $$(".wlviz").forEach(function (box) {
    var btns = $$(".ttabs button", box), cnt = box.querySelector(".tcount"), auto = true, back = false;
    function set(b) {
      back = b; box.classList.toggle("back", b);
      btns.forEach(function (x, i) { x.setAttribute("aria-pressed", (i === 1) === b ? "true" : "false"); });
      cnt.innerHTML = b ? "<b>+1 senior</b><span>NetSuite hands behind your team</span>" : "<b>1 brand</b><span>Your client only ever sees yours</span>";
    }
    btns.forEach(function (x, i) { x.addEventListener("click", function () { auto = false; set(i === 1); }); });
    set(false);
    every(function () { if (auto) set(!back); }, 4200);
    var svg = box.querySelector("svg"); if (reduce && svg && svg.pauseAnimations) svg.pauseAnimations();
  });
}

/* ================= pages ================= */
var pages = {};

pages.home = function () {
  var rollList = D.roles.concat([D.roles[0]]).map(function (r) { return "<b>" + E(r) + "</b>"; }).join("");
  return '<section class="wrap hero">' +
      '<div>' +
        '<p class="who"><img src="/dilshad-ali.png" alt="" width="36" height="36">Dilshad Ali, ' + E(D.title) + "</p>" +
        '<h1 class="h1">I make NetSuite and <em>everything around it</em> work as one.</h1>' +
        '<p class="roller" aria-label="Roles: ' + E(D.roles.join(", ")) + '"><span aria-hidden="true">One person as your</span><span class="roll" aria-hidden="true"><span>' + rollList + "</span></span></p>" +
        '<p class="lead">' + E(D.endToEnd) + "</p>" +
        '<div class="ctas"><a class="btn" href="/contact/">Book a call ' + arrow() + '</a><a class="btn ghost" href="#order">See how an order travels</a></div>' +
        '<ul class="facts"><li>OneWorld, multi-subsidiary</li><li>Remote, overlaps US hours</li></ul>' +
      "</div>" +
      '<figure class="diagram" style="margin:0"><div class="dscroll">' + diagramSVG() + '</div><p class="cap" id="dcap" aria-live="polite"></p><p class="hint">Hover or tap any box</p></figure>' +
    "</section>" +
    '<div class="marquee" aria-label="Key skills"><div class="track">' + D.skillsStrip.concat(D.skillsStrip).map(function (s) { return '<span class="chip">' + E(s) + "</span>"; }).join("") + "</div></div>" +

    orderHTML() +

    '<section class="wrap sec">' + head("Selected work", "Real problems I have solved.", "Pick one to watch it play out.", '<a class="btn ghost sm" href="/work/">All work ' + arrow() + "</a>") + showHTML() + "</section>" +
    scxHTML() +

    '<section class="wrap sec">' + head("One person, a full team", "Six roles. One point of contact.", D.positioning) +
      '<div class="team"><div class="tviz rv" id="tviz"><div class="ttabs" role="group" aria-label="Compare"><button type="button" aria-pressed="true">A typical team</button><button type="button" aria-pressed="false">Working with me</button></div>' + teamSVG() + '<div class="tcount" id="tcount" aria-live="polite"></div></div>' +
      '<div class="roles">' + D.roles6.map(function (r) { return '<div class="role rv"><span class="h3">' + ic(r.icon) + E(r.title) + "</span><p>" + E(r.text) + "</p></div>"; }).join("") + "</div></div>" +
    "</section>" +

    '<section class="wrap sec">' + head("Whatever your situation", "Tell me where you are. I will tell you what happens next.") +
      '<div class="scen"><div class="slist" id="slist">' + D.scenarios.map(function (s) { return '<button type="button" class="sbtn" aria-pressed="false">&ldquo;' + E(s.q) + "&rdquo;</button>"; }).join("") + '</div><div class="spanel" id="spanel" aria-live="polite"></div></div>' +
    "</section>" +

    '<section class="wrap sec">' + head("Agencies and NetSuite partners", "Your brand. My build.", "White label NetSuite delivery when your team is full.", '<a class="btn ghost sm" href="/agencies/">Partner details ' + arrow() + "</a>") + wlBlock() + "</section>" +

    '<section class="wrap sec">' + head("Services", "What I do most often", "", '<a class="btn ghost sm" href="/services/">All 14 services ' + arrow() + "</a>") +
      '<div class="srows">' + D.homeServices.map(function (id) { var s = svcById(id); return '<a class="srow rv" href="/services/#svc-' + s.id + '"><span class="ico">' + ic(s.icon) + '</span><span><span class="t">' + E(s.title) + '</span><span class="s">' + E(s.short) + '</span></span><span class="arr" aria-hidden="true">&rarr;</span></a>'; }).join("") + "</div>" +
    "</section>" +

    '<section class="wrap sec">' + head("Working with me", "A clear path from the first call to a working solution.", "No surprises in your live account.", '<a class="btn ghost sm" href="/working-with-me/">How it works ' + arrow() + "</a>") + stepsHTML() + promisesHTML() + "</section>" +

    '<section class="wrap sec">' + head("Insights", "Lessons from real accounts", "", '<a class="btn ghost sm" href="/insights/">All posts ' + arrow() + "</a>") +
      '<div class="grid g3" style="margin-top:32px">' + D.posts.slice(0, 3).map(postCard).join("") + "</div>" +
    "</section>" + band();
};

pages.agencies = function () {
  return '<section class="wrap sec tight"><p class="kick">Agencies and NetSuite partners</p><h1 class="h1" style="max-width:14ch;margin-top:12px">Your brand. My build.</h1><p class="lead">White label NetSuite delivery when your team is full.</p>' + wlBlock() + "</section>" +
    '<section class="wrap sec">' + head("How it works", "From NDA to handover in four steps.") + '<div class="cflow rv" style="margin-top:28px">' + chain(D.agency.steps, true) + "</div></section>" +
    '<section class="wrap sec">' + head("What I take on", "Senior NetSuite work, under your banner.") + '<div class="grid g3" style="margin-top:28px">' + D.agency.take.map(function (t) { return '<div class="card rv" style="flex-direction:row;align-items:center;gap:14px"><span class="ico" style="flex:none">' + ic(t.i) + '</span><span class="h3" style="font-size:17px">' + E(t.t) + "</span></div>"; }).join("") + "</div></section>" +
    '<section class="wrap sec">' + head("Ways to engage", "Pick what fits your pipeline.") + '<ul class="chips wlways" style="margin-top:24px">' + D.agency.ways.map(function (w) { return '<li class="chip">' + E(w) + "</li>"; }).join("") + '</ul><div class="ctas"><a class="btn" href="/contact/">Talk partner terms ' + arrow() + "</a></div></section>" + band();
};

pages.services = function () {
  return '<section class="wrap sec tight"><p class="kick">Services</p><h1 class="h1" style="max-width:16ch;margin-top:12px">Fourteen ways I help a NetSuite business.</h1><p class="lead">' + E(D.endToEnd) + "</p></section>" +
    D.groups.map(function (g) {
      var list = D.services.filter(function (x) { return x.g === g.key; });
      return '<section class="wrap sec tight"><h2 class="h2" style="max-width:none">' + E(g.name) + '</h2><div class="grid ' + (list.length === 3 ? "g3" : "g2") + '" style="margin-top:24px">' + list.map(svcTile).join("") + "</div></section>";
    }).join("") +
    '<section class="wrap sec tight"><div class="svc-cta"><p>Not sure which one you need? Tell me the problem and I will point you to the right fix.</p><a class="btn sm" href="/contact/">Book a call ' + arrow() + '</a></div><p style="margin:18px 0 0"><a href="/capabilities/">See the full capability map</a></p></section>' + band();
};

pages.capabilities = function () {
  return '<section class="wrap sec tight"><p class="kick">Capabilities</p><h1 class="h1" style="max-width:18ch;margin-top:12px">Everything one NetSuite team would cover.</h1><p class="lead">Every engagement gets all six roles at once, so each decision weighs business fit, administration, code, security and long-term support together, not just whether something can be coded.</p>' +
      '<div class="grid g3" style="margin-top:40px">' + D.roles6.map(function (r) { return '<div class="card rv"><span class="ico">' + ic(r.icon) + '</span><span class="h3">' + E(r.title) + '</span><p class="muted">' + E(r.text) + "</p></div>"; }).join("") + "</div></section>" +

    '<section class="wrap sec">' + head("Architecture I design", "Eight layers, designed together.", "Pick a layer to see what goes into it.") +
      '<div class="stack"><div class="layers" id="layers">' + D.arch.map(function (a, i) { return '<button type="button" class="layer" style="--i:' + i + '" aria-pressed="false"><span>Layer ' + (i + 1) + "</span>" + E(a.t) + "</button>"; }).join("") + '</div><div class="ldetail" id="ldetail" aria-live="polite"></div></div></section>' +

    '<section class="wrap sec">' + head("NetSuite areas I cover", "Every part of the account.") +
      '<div class="grid g3" style="margin-top:32px">' + D.areas.map(function (a) { return '<div class="card rv"><span class="h3">' + E(a.t) + '</span><ul class="chips">' + a.i.map(function (x) { return '<li class="chip">' + E(x) + "</li>"; }).join("") + "</ul></div>"; }).join("") + "</div></section>" +

    '<section class="wrap sec">' + head("Finance and accounting modules I build", "Numbers finance can trust, because they tie back to the ledger.") +
      '<div class="grid g4" style="margin-top:32px">' + D.finmods.map(function (m) { return '<div class="card rv"><span class="ico">' + ic("ledger") + '</span><span class="h3" style="font-size:17px">' + E(m.t) + '</span><p class="muted" style="font-size:14.5px">' + E(m.p) + "</p></div>"; }).join("") + "</div></section>" +

    '<section class="wrap sec">' + head("Systems I connect to NetSuite", "Not only NetSuite. Every system your business runs on.", "When a third-party product is the better fit, I recommend it, set it up and connect it, so you get one working solution instead of separate pieces.") +
      '<div class="orbit-wrap"><div class="orbit" id="orbit"><div class="ring1"></div><div class="ring2"></div><div class="pulse" aria-hidden="true"></div><div class="spin">' +
      D.systems.map(function (s, i) { var a = (-90 + i * 40) * Math.PI / 180; var x = 50 + 39 * Math.cos(a), y = 50 + 39 * Math.sin(a); return '<div class="onode" style="left:' + x.toFixed(2) + "%;top:" + y.toFixed(2) + '%"><span><button type="button" aria-pressed="false" data-i="' + i + '" aria-label="' + E(s.t) + '">' + E(s.k) + "</button></span></div>"; }).join("") +
      '</div><div class="center">NetSuite</div></div><div class="opanel" id="opanel" aria-live="polite"></div></div></section>' +

    '<section class="wrap sec">' + head("Beyond NetSuite", "The tools around the account.") + '<ul class="chips" style="margin-top:24px">' + D.beyond.map(function (b) { return '<li class="chip" style="font-size:14.5px;padding:8px 14px">' + E(b) + "</li>"; }).join("") + "</ul></section>" +

    '<section class="wrap sec">' + head("Engagement types", "From a first implementation to a second opinion.") +
      '<div class="grid g4" style="margin-top:32px">' + D.etypes.map(function (t) { return '<a class="card rv" href="/contact/"><span class="h3" style="font-size:17px">' + E(t.t) + '</span><p class="muted" style="font-size:14.5px">' + E(t.p) + '</p><span class="more">Ask about this ' + arrow() + "</span></a>"; }).join("") + "</div></section>" + band();
};
function initLayers() {
  var wrap = document.getElementById("layers"); if (!wrap) return;
  var btns = $$(".layer", wrap), det = document.getElementById("ldetail"), i0 = 0, auto = true;
  function set(i) {
    i0 = i;
    btns.forEach(function (b, j) { b.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    det.innerHTML = '<span class="k">Layer ' + (i + 1) + " of 8</span><span class=\"t\">" + E(D.arch[i].t) + "</span><p>" + E(D.arch[i].p) + "</p>";
    det.classList.remove("fade"); void det.offsetWidth; det.classList.add("fade");
  }
  btns.forEach(function (b, j) { b.addEventListener("click", function () { auto = false; set(j); }); });
  set(0);
  every(function () { if (auto) set((i0 + 1) % btns.length); }, 3600);
}
function initOrbit() {
  var o = document.getElementById("orbit"); if (!o) return;
  var btns = $$(".onode button", o), panel = document.getElementById("opanel");
  function set(i) {
    btns.forEach(function (b, j) { b.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    var s = D.systems[i];
    panel.innerHTML = '<p class="kick">Connected to NetSuite</p><p class="t" style="margin-top:8px">' + E(s.t) + '</p><ul class="chips">' + s.i.map(function (x) { return '<li class="chip" style="font-size:14px;padding:7px 13px">' + E(x) + "</li>"; }).join("") + '</ul><p class="muted" style="margin:18px 0 0;font-size:15px">Click any system on the ring.</p>';
    panel.classList.remove("fade"); void panel.offsetWidth; panel.classList.add("fade");
  }
  btns.forEach(function (b, j) { b.addEventListener("click", function () { set(j); }); });
  set(0);
}

pages.work = function () {
  return '<section class="wrap sec tight"><p class="kick">Work</p><h1 class="h1" style="max-width:15ch;margin-top:12px">Four cases, played out step by step.</h1><p class="lead">Clients are described by industry only. Each case has a live walkthrough of how the data moved, before and after.</p>' +
      '<div class="wlist">' + D.cases.map(function (c) {
        return '<a class="wrow rv" href="/work/' + c.slug + '/"><div class="pv big">' + preview(c.x) + '</div><div class="wbody"><span class="tag">' + E(c.cat) + '</span><span class="wt">' + E(c.title) + '</span><p>' + E(c.hook) + '</p><span class="more">See how it works ' + arrow() + "</span></div></a>";
      }).join("") + "</div>" +
    "</section>" +
    '<section class="wrap sec">' + head("Other things I have fixed", "Short ones, from symptom to cause.") +
      '<div class="grid g2" style="margin-top:28px">' + D.mysteries.map(function (m, i) { return '<article class="svt rv"><div class="scene">' + scene(["fix-approval", "fix-restlet", "fix-bank", "fix-pdf"][i]) + '</div><div class="svt-body"><h3 class="h3">' + E(m.t) + '</h3><p class="muted">' + E(m.p) + '</p><p><b>Cause.</b> ' + E(m.c) + "</p></div></article>"; }).join("") + "</div></section>" + band();
};
function initFilters() {
  var f = document.getElementById("filters"); if (!f) return;
  var btns = $$(".fbtn", f), cards = $$("#cases .case"), none = document.getElementById("noresult");
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      var v = b.getAttribute("data-f"), shown = 0;
      btns.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      cards.forEach(function (c) { var ok = v === "All" || c.getAttribute("data-cat") === v; c.hidden = !ok; if (ok) shown++; });
      none.hidden = shown > 0;
    });
  });
}

pages["case"] = function (slug) {
  var c = caseBySlug(slug); if (!c) return pages.work();
  var i = D.cases.indexOf(c), nx = D.cases[(i + 1) % D.cases.length];
  return '<section class="wrap"><p class="crumb"><a href="/work/">Work</a><span aria-hidden="true">/</span><span>' + E(c.cat) + "</span></p>" +
      '<h1 class="h1" style="max-width:20ch;margin-top:14px">' + E(c.title) + "</h1>" +
      '<p class="lead">' + E(c.hook) + "</p>" + explainer(c.x) +
      '<div class="cgrid"><div><h2>Context</h2><p>' + F(c.context) + "</p><h2>Problem</h2><p>" + F(c.problem) + "</p><h2>What I did</h2><p>" + F(c.did) + "</p><h2>Outcome</h2><p>" + F(c.outcome) + "</p></div>" +
      '<aside class="aside"><div><h3>Area</h3><span class="tag">' + E(c.cat) + '</span></div><div><h3>Tech</h3><ul class="chips">' + c.tech.map(function (t) { return '<li class="chip mono">' + E(t) + "</li>"; }).join("") + '</ul></div><a class="btn" href="/contact/">Discuss a similar project ' + arrow() + "</a></aside></div>" +
      '<div class="head-row" style="margin-top:56px;padding-top:28px;border-top:1px solid var(--line)"><a class="btn ghost" href="/work/">All work</a><a class="btn ghost" href="/work/' + nx.slug + '/">Next: ' + E(nx.title) + " " + arrow() + "</a></div>" +
    "</section>" + band();
};

pages.insights = function () {
  return '<section class="wrap sec tight"><p class="kick">Insights</p><h1 class="h1" style="max-width:16ch;margin-top:12px">Lessons from real NetSuite accounts.</h1><p class="lead">Short, practical notes on the things that quietly break.</p>' +
    '<div class="grid g3" style="margin-top:40px">' + D.posts.map(postCard).join("") + "</div></section>" + band();
};

pages.about = function () {
  return '<section class="wrap sec tight"><p class="kick">About</p><h1 class="h1" style="max-width:16ch;margin-top:12px">Hi, I am Dilshad.</h1>' +
    '<div class="about"><div class="photo rv"><img src="/dilshad-ali.png" alt="Dilshad Ali at his desk" width="460" height="460"></div><div>' +
      '<div class="prose">' + D.bio.map(function (b) { return "<p>" + E(b) + "</p>"; }).join("") + "</div>" +
      '<div class="ctas"><a class="btn" href="/contact/">Book a call ' + arrow() + '</a></div>' +
    "</div></div></section>" + band();
};

pages.working = function () {
  return '<section class="wrap sec tight"><p class="kick">Working with me</p><h1 class="h1" style="max-width:17ch;margin-top:12px">A clear path from the first call to a working solution.</h1><p class="lead">No surprises in your live account.</p>' + stepsHTML() + "</section>" +
    '<section class="wrap sec">' + head("What you receive", "With every delivery.") + '<div class="grid g3" style="margin-top:28px">' + D.receive.map(function (r) { return '<div class="card rv" style="flex-direction:row;align-items:flex-start;gap:12px"><span class="ico" style="width:34px;height:34px;flex:none">' + ic("check") + '</span><p style="font-weight:500">' + E(r) + "</p></div>"; }).join("") + "</div></section>" +
    '<section class="wrap sec">' + head("Promises", "What stays true on every project.") + promisesHTML() + "</section>" +
    '<section class="wrap sec">' + head("Engagement", "Four ways to work together.") + '<div class="grid g4" style="margin-top:28px">' + D.engage.map(function (e) { return '<div class="card rv"><span class="h3" style="font-size:17px">' + E(e.t) + '</span><p class="muted">' + E(e.p) + "</p></div>"; }).join("") + "</div></section>" +
    '<section class="wrap sec">' + head("FAQ", "Questions people ask.") + '<div class="faq" style="margin-top:20px;max-width:860px">' + D.faq.map(function (f, i) { return "<details" + (i === 0 ? " open" : "") + "><summary>" + E(f.q) + "</summary><p>" + E(f.a) + "</p></details>"; }).join("") + "</div></section>" + band();
};

pages.skills = function () {
  return '<section class="wrap sec tight"><p class="kick">Skills</p><h1 class="h1" style="max-width:14ch;margin-top:12px">The full toolkit.</h1><p class="lead">Grouped by area.</p>' +
    '<div class="grid g2" style="margin-top:40px">' + D.skills.map(function (g) { return '<div class="card rv"><span class="h3">' + E(g.t) + '</span><ul class="chips">' + g.i.map(function (x) { return '<li class="chip">' + E(x) + "</li>"; }).join("") + "</ul></div>"; }).join("") + "</div></section>" + band();
};

pages.contact = function () {
  var opts = D.services.map(function (s) { return "<option>" + E(s.title) + "</option>"; }).join("");
  return '<section class="wrap sec tight"><p class="kick">Contact</p><h1 class="h1" style="max-width:16ch;margin-top:12px">Tell me what you need.</h1><p class="lead">' + E(D.endToEnd) + "</p>" +
    '<div class="cgrid2"><form class="form" id="cform" novalidate>' +
      '<label for="f-name">Name<input id="f-name" name="name" autocomplete="name" required></label>' +
      '<label for="f-email">Email<input id="f-email" name="email" type="email" autocomplete="email" required></label>' +
      '<label for="f-company">Company<input id="f-company" name="company" autocomplete="organization"></label>' +
      '<label for="f-service">Service needed<select id="f-service" name="service"><option>Not sure yet</option><option>White label or partner work</option>' + opts + "</select></label>" +
      '<label for="f-msg" class="full">Message<textarea id="f-msg" name="message" placeholder="What is happening today, and what should happen instead?"></textarea></label>' +
      '<div class="full" style="display:flex;flex-wrap:wrap;gap:12px;align-items:center"><button class="btn" type="submit">Send message ' + arrow() + '</button><span class="muted" style="font-size:14px">Opens your email app with the details filled in.</span></div>' +
      '<p class="note full" id="fnote" hidden aria-live="polite"></p>' +
    "</form>" +
    '<div style="display:flex;flex-direction:column;gap:14px">' +
      '<div class="card"><span class="h3" style="font-size:17px">Email</span><p><a href="mailto:' + C.email + '">' + C.email + '</a></p></div>' +
      '<div class="card"><span class="h3" style="font-size:17px">Where I work from</span><p class="muted">Remote, with regular overlap with US business hours.</p></div>' +
      '<div class="card"><span class="h3" style="font-size:17px">Profiles</span><p style="display:flex;flex-wrap:wrap;gap:8px 18px"><a href="' + D.links.linkedin + '">LinkedIn</a><a href="' + D.links.github + '">GitHub</a><a href="' + D.links.upwork + '">Upwork</a><a href="' + C.fiverr + '">Fiverr</a></p></div>' +
    "</div></div></section>";
};
function initForm() {
  var f = document.getElementById("cform"); if (!f) return;
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var note = document.getElementById("fnote"), name = document.getElementById("f-name"), em = document.getElementById("f-email");
    note.hidden = false;
    if (!name.value.trim() || !em.value.trim() || em.value.indexOf("@") < 1) { note.textContent = "Please add your name and a valid email so I can reply."; (name.value.trim() ? em : name).focus(); return; }
    var co = document.getElementById("f-company").value.trim(), sv = document.getElementById("f-service").value, msg = document.getElementById("f-msg").value.trim();
    var body = "Name: " + name.value.trim() + "\nEmail: " + em.value.trim() + (co ? "\nCompany: " + co : "") + "\nService: " + sv + "\n\n" + msg;
    note.textContent = "Opening your email app. If nothing opens, write to " + C.email + ".";
    window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("NetSuite enquiry: " + sv) + "&body=" + encodeURIComponent(body);
  });
}

/* ================= case stories and explainers ================= */
var ITEM = '<svg class="item" viewBox="0 0 120 120" aria-hidden="true"><path d="M40 18h40v44H40zM34 62h52v10H34zM42 72v30M78 72v30M60 72v26M38 102h44"/></svg>';
var CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function money(v, whole) { var a = Math.abs(v), s = (whole ? Math.round(a).toString() : a.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ","); return (v < 0 ? "-" : "") + "$" + s; }
function onceVisible(el, fn) {
  if (!("IntersectionObserver" in window)) { fn(); return; }
  var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { io.disconnect(); fn(); } }); }, { threshold: 0.35 });
  io.observe(el);
}
function preview(x) {
  if (x === "commission") return '<div class="pv-com"><div class="pvrow"><span>Engine A</span><span class="pvbar pvA"><i class="p"></i><i class="r"></i><i class="h"></i></span></div><div class="pvrow"><span>Engine B</span><span class="pvbar pvB"><i class="p"></i><i class="r"></i><i class="h"></i></span></div><div class="pvtag"><span class="bad">Two payouts</span><span class="good">One number</span></div></div>';
  if (x === "dupes") return '<div class="pv-dup"><span class="ln"></span><span class="d d1">A1001</span><span class="d d2">A1001</span><span class="tile">1 sales order</span></div>';
  if (x === "receiving") return '<div class="pv-rec"><div class="ph2">' + ITEM + '<span class="scan"></span></div><div class="fl"><i style="--w:80%"></i><i style="--w:55%"></i><i style="--w:68%"></i><i style="--w:40%"></i></div></div>';
  return '<div class="pv-mid"><span class="clk">22:00 to 04:00</span>' + [30, 22, 88, 80, 18, 14, 24].map(function (h, i) { return "<i" + (i === 2 || i === 3 ? ' class="s"' : "") + ' style="--h:' + h + '%"></i>'; }).join("") + "</div>";
}

var OJ_ICONS = ["cart", "clip", "box", "doc", "ledger"];
function orderHTML() {
  return '<section class="wrap sec" id="order">' + head("How an order travels", "Follow one order from checkout to the books.", "Watch it move, or tap any stop. Each stop is a record, a script or an API call.") +
    '<div class="oj" id="oj"><div class="oj-stage"><span class="oj-ptr" aria-hidden="true"></span><div class="oj-card" id="oj-card" aria-live="polite"><div class="oj-top"><span class="oj-type" id="oj-type"></span><span class="oj-st" id="oj-st"></span></div><div class="oj-id" id="oj-id"></div><dl class="oj-f" id="oj-f"></dl></div></div>' +
    '<div class="oj-track"><div class="oj-line"><span class="oj-fill" id="oj-fill"></span></div><ol class="oj-stops">' +
    D.order.map(function (o, i) { return '<li><button type="button" aria-pressed="false" data-i="' + i + '"><span class="oj-ic">' + ic(OJ_ICONS[i]) + '</span><span class="oj-lb">' + E(o.n) + "</span></button></li>"; }).join("") +
    '</ol></div><div class="oj-cap"><p class="oj-what" id="oj-what"></p><p class="oj-build"><span>What I build</span><b id="oj-build"></b></p><button type="button" class="btn ghost sm" id="oj-play" aria-pressed="true">Pause</button></div></div></section>';
}
function initOrder() {
  var root = document.getElementById("oj"); if (!root) return;
  var btns = $$(".oj-stops button", root), card = document.getElementById("oj-card"), fill = document.getElementById("oj-fill"), play = document.getElementById("oj-play"), cur = 0, playing = !reduce;
  function fillCard(o) {
    document.getElementById("oj-type").textContent = o.t.replace("Example record: ", "Example ");
    document.getElementById("oj-id").textContent = o.id;
    document.getElementById("oj-st").textContent = o.st;
    document.getElementById("oj-f").innerHTML = o.f.map(function (p) { return "<dt>" + E(p[0]) + "</dt><dd>" + E(p[1]) + "</dd>"; }).join("");
  }
  function set(i, first) {
    cur = i; var o = D.order[i], pr = i / (D.order.length - 1);
    btns.forEach(function (b, j) { b.setAttribute("aria-pressed", j === i ? "true" : "false"); b.parentNode.classList.toggle("done", j < i); });
    fill.style.width = (pr * 100) + "%";
    root.style.setProperty("--p", pr);
    document.getElementById("oj-what").textContent = o.what;
    document.getElementById("oj-build").textContent = o.build;
    if (first || reduce) { fillCard(o); return; }
    card.classList.add("flip"); later(function () { fillCard(o); card.classList.remove("flip"); }, 260);
  }
  btns.forEach(function (b, j) { b.addEventListener("click", function () { set(j); }); });
  play.addEventListener("click", function () { playing = !playing; play.textContent = playing ? "Pause" : "Play"; play.setAttribute("aria-pressed", playing ? "true" : "false"); });
  if (reduce) play.hidden = true;
  set(0, true);
  every(function () { if (playing) set((cur + 1) % D.order.length); }, 3600);
}

/* ---------- selected work showcase ---------- */
function showHTML() {
  var c0 = D.cases[0];
  return '<div class="show" id="show"><div class="show-list" role="group" aria-label="Case studies">' + D.cases.map(function (c, i) { return '<button type="button" aria-pressed="' + (i === 0) + '"><span class="tag">' + E(c.cat) + '</span><span class="st">' + E(c.title) + '</span><span class="sh">' + E(c.hook) + "</span></button>"; }).join("") +
    '</div><div class="show-stage"><div class="pv big" id="show-pv">' + preview(c0.x) + '</div><div class="show-foot"><p id="show-hook">' + E(c0.hook) + '</p><a class="btn" id="show-link" href="/work/' + c0.slug + '/">Watch the full walkthrough ' + arrow() + "</a></div></div></div>";
}
function initShow() {
  var root = document.getElementById("show"); if (!root) return;
  var btns = $$(".show-list button", root), pv = document.getElementById("show-pv"), cur = 0, auto = true;
  function set(i) {
    cur = i; var c = D.cases[i];
    btns.forEach(function (b, j) { b.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    pv.innerHTML = preview(c.x); pv.classList.remove("fade"); void pv.offsetWidth; pv.classList.add("fade");
    document.getElementById("show-hook").textContent = c.hook;
    document.getElementById("show-link").setAttribute("href", "/work/" + c.slug + "/");
  }
  btns.forEach(function (b, j) { b.addEventListener("click", function () { auto = false; set(j); }); });
  every(function () { if (auto) set((cur + 1) % D.cases.length); }, 6500);
}

/* ---------- SuiteCommerce store mockup ---------- */
var SCX = [
  { t: "Product details", src: "Item record", p: "Name, description, images and options come from the item record. Change it once in NetSuite and the page updates." },
  { t: "Price", src: "Price levels", p: "The online price comes from the item's price levels. Signed-in business customers see their own price level." },
  { t: "Stock", src: "Inventory by location", p: "Live availability from inventory across locations, with backorder rules you control." },
  { t: "Categories and filters", src: "Commerce categories and item search", p: "Menus and filters are built from item fields, so they stay in step with the catalog." },
  { t: "Add to cart and checkout", src: "Sales order", p: "Checkout creates the sales order in NetSuite with tax, shipping and payment, exactly once." },
  { t: "Page address and speed", src: "Site setup and SEO fields", p: "Clean addresses, page titles and fast, cached pages help shoppers find the store in search." }
];
function scxHTML() {
  function hs(i) { return '<button type="button" class="hs" data-i="' + i + '" aria-label="' + E(SCX[i].t) + '">' + (i + 1) + "</button>"; }
  return '<section class="wrap sec" id="commerce">' + head("SuiteCommerce", "A store that runs on your NetSuite data.", "This is what a shopper sees without signing in. Tap a number to see which part of NetSuite feeds it.") +
    '<div class="scx" id="scx"><div class="brw"><div class="brw-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="url" data-hl="5"><span class="u">shop.example.com/office/ergonomic-task-chair</span>' + hs(5) + "</span></div>" +
    '<div class="st-head"><span class="st-logo">Example store</span><span class="st-search">Search products</span><span class="st-cart" id="scx-cart">' + ic("cart") + '<b id="scx-count">0</b></span></div>' +
    '<div class="st-nav" data-hl="3"><span>Office</span><span>Chairs</span><span>Storage</span><span>Lighting</span><span>Sale</span>' + hs(3) + "</div>" +
    '<div class="st-body"><div class="st-media"><div class="st-img">' + ITEM + '</div><div class="st-thumbs"><i></i><i></i><i></i></div></div>' +
    '<div class="st-info"><p class="st-crumb">Office / Chairs</p><p class="st-title" data-hl="0">Ergonomic Task Chair' + hs(0) + '</p><p class="st-sku">SKU CH-1042</p>' +
    '<p class="st-price" data-hl="1">$249.00' + hs(1) + '</p><p class="st-stock" data-hl="2"><span class="dt"></span>In stock, ships in 1 day' + hs(2) + "</p>" +
    '<div class="st-buy" data-hl="4"><span class="st-qty">Qty 1</span><span class="st-add" id="scx-add">Add to cart</span>' + hs(4) + "</div>" +
    '<p class="st-note">Free returns within 30 days</p></div></div></div>' +
    '<div class="scx-side"><div class="callout" id="scx-call" aria-live="polite"></div><div class="scx-list">' + SCX.map(function (x, i) { return '<button type="button" data-i="' + i + '" aria-pressed="false"><b>' + (i + 1) + "</b>" + E(x.t) + "</button>"; }).join("") + "</div></div></div>" +
    '<p class="xnote">Mockup of a public product page with an example product. Signed-in business customers also get their own prices and My Account.</p></section>';
}
function initSCX() {
  var root = document.getElementById("scx"); if (!root) return;
  var call = document.getElementById("scx-call"), list = $$(".scx-list button", root), hss = $$(".hs", root), hls = $$("[data-hl]", root), cur = 0, auto = true, count = 0;
  function set(i) {
    cur = i; var x = SCX[i];
    list.forEach(function (b, j) { b.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    hss.forEach(function (h) { h.classList.toggle("on", +h.getAttribute("data-i") === i); });
    hls.forEach(function (h) { h.classList.toggle("hl", +h.getAttribute("data-hl") === i); });
    call.innerHTML = '<span class="cn">' + (i + 1) + '</span><p class="ct">' + E(x.t) + '</p><p class="cs"><span>In NetSuite</span>' + E(x.src) + '</p><p class="cp">' + E(x.p) + "</p>";
    call.classList.remove("fade"); void call.offsetWidth; call.classList.add("fade");
    if (i === 4 && !reduce) {
      var add = document.getElementById("scx-add"); add.classList.remove("press"); void add.offsetWidth; add.classList.add("press");
      later(function () { count++; document.getElementById("scx-count").textContent = count; var c = document.getElementById("scx-cart"); c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump"); }, 450);
    }
  }
  hss.concat(list).forEach(function (b) { b.addEventListener("click", function () { auto = false; set(+b.getAttribute("data-i")); }); });
  set(0);
  every(function () { if (auto) set((cur + 1) % SCX.length); }, 3400);
}

/* ---------- small animated scenes for services and fixes ---------- */
function tgl(y, begin) {
  return '<rect x="232" y="' + y + '" width="50" height="26" rx="13" fill="#c9d3df"><animate attributeName="fill" values="#c9d3df;#2f8cff;#2f8cff;#c9d3df" keyTimes="0;.12;.85;1" dur="4.5s" begin="' + begin + 's" repeatCount="indefinite"/></rect><circle cx="245" cy="' + (y + 13) + '" r="9" fill="#ffffff"><animate attributeName="cx" values="245;269;269;245" keyTimes="0;.12;.85;1" dur="4.5s" begin="' + begin + 's" repeatCount="indefinite"/></circle>';
}
function grow(x, y, w, h, fill, begin, dur, cls) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (h / 2) + '"' + (cls ? ' class="' + cls + '"' : ' fill="' + fill + '"') + '><animate attributeName="width" values="0;' + w + ";" + w + ';0" keyTimes="0;.2;.85;1" dur="' + dur + 's" begin="' + begin + 's" repeatCount="indefinite"/></rect>';
}
function fadeG(inner, kt, dur) { return "<g>" + inner + '<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="' + kt + '" dur="' + dur + 's" repeatCount="indefinite"/></g>'; }
var ITEMP = '<path class="itm" d="M40 18h40v44H40zM34 62h52v10H34zM42 72v30M78 72v30M60 72v26M38 102h44"/>';
var OKG = '<circle r="11" fill="#0f9d76"/><path d="M-5 0l3.5 3.5L5 -4" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
var SCN = {
  administration: function () { return '<g class="t"><text x="34" y="51">Roles and permissions</text><text x="34" y="95">Features</text><text x="34" y="139">Deployment audience</text></g>' + tgl(34, 0) + tgl(78, 0.5) + tgl(122, 1); },
  devops: function () { return '<path class="lnS" d="M60 90 H260"/>' + [["Git", 20], ["Sandbox", 120], ["Production", 220]].map(function (n) { return '<rect class="card2" x="' + n[1] + '" y="66" width="80" height="48" rx="12"/><text class="t" x="' + (n[1] + 40) + '" y="94" text-anchor="middle">' + n[0] + "</text>"; }).join("") + '<circle r="6" fill="#2f8cff"><animateMotion dur="3s" repeatCount="indefinite" path="M60 90 H260"/></circle>' + '<g transform="translate(286 62)">' + fadeG(OKG, "0;.62;.7;.95;1", 3) + '</g><text class="tm" x="160" y="146" text-anchor="middle">deployment status checked before and after</text>'; },
  pdf: function () { return '<rect class="card2" x="104" y="16" width="112" height="148" rx="8"/><rect x="118" y="30" width="28" height="14" rx="3" fill="#2f8cff"/>' + [70, 84, 56, 80, 64, 76].map(function (w, i) { return grow(118, 56 + i * 15, w, 6, "", (i * 0.25).toFixed(2), 4.5, "mut"); }).join("") + '<g transform="translate(214 140) rotate(-12)">' + fadeG('<rect x="-30" y="-15" width="60" height="30" rx="6" fill="none" stroke="#e5484d" stroke-width="2.5"/><text x="0" y="5" text-anchor="middle" class="stamp">PDF</text>', "0;.5;.56;.92;1", 4.5) + "</g>"; },
  suitescript: function () { var W = [110, 160, 90, 180, 130, 60], X = [50, 66, 66, 82, 66, 50], C = ["#4c9bff", "#8fa5bd", "#f0a35e", "#8fa5bd", "#4c9bff", "#8fa5bd"]; return '<rect x="30" y="18" width="260" height="144" rx="14" fill="#0b1f3a" class="edge"/>' + W.map(function (w, i) { return grow(X[i], 40 + i * 20, w, 8, C[i], (i * 0.35).toFixed(2), 5); }).join("") + '<rect x="114" y="138" width="3" height="13" fill="#ffffff"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></rect>'; },
  apps: function () { return '<rect class="card2" x="20" y="16" width="280" height="148" rx="12"/><rect class="mut" x="20" y="16" width="280" height="22" rx="11"/>' + [["To do", 68], ["Doing", 160], ["Done", 252]].map(function (c) { return '<text class="tm" x="' + c[1] + '" y="58" text-anchor="middle">' + c[0] + "</text>"; }).join("") + '<rect x="30" y="68" width="76" height="22" rx="6" fill="#cfe0f5"/><rect x="122" y="68" width="76" height="22" rx="6" fill="#cfe0f5"/><rect x="214" y="68" width="76" height="22" rx="6" fill="#bfe8d9"/><rect x="214" y="96" width="76" height="22" rx="6" fill="#bfe8d9"/>' + '<rect x="30" y="100" width="76" height="22" rx="6" fill="#2f8cff"><animate attributeName="x" values="30;122;122;214;214;30" keyTimes="0;.2;.4;.6;.9;1" dur="6s" repeatCount="indefinite"/><animate attributeName="y" values="100;100;100;124;124;100" keyTimes="0;.2;.4;.6;.9;1" dur="6s" repeatCount="indefinite"/></rect>'; },
  finance: function () {
    var rows = [["Cash", "1,000.00", ""], ["Revenue", "", "920.00"], ["Sales tax", "", "80.00"]];
    return '<rect class="card2" x="40" y="18" width="240" height="144" rx="12"/><text class="tm" x="58" y="42">Account</text><text class="tm" x="208" y="42" text-anchor="end">Dr</text><text class="tm" x="264" y="42" text-anchor="end">Cr</text>' +
      rows.map(function (r, i) { var y = 70 + i * 24; return '<g><text class="t" x="58" y="' + y + '">' + r[0] + '</text><text class="t" x="208" y="' + y + '" text-anchor="end">' + r[1] + '</text><text class="t" x="264" y="' + y + '" text-anchor="end">' + r[2] + '</text><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.9;1" dur="5s" begin="' + (0.3 + i * 0.5) + 's" repeatCount="indefinite"/></g>'; }).join("") +
      '<path class="lnS" d="M58 130 H266"/><g transform="translate(70 148)">' + fadeG(OKG, "0;.45;.52;.9;1", 5) + '</g><g>' + '<text class="t" x="88" y="152">Balanced: 1,000.00 = 1,000.00</text><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.45;.52;.9;1" dur="5s" repeatCount="indefinite"/></g>';
  },
  ai: function () { return '<rect class="card2" x="30" y="24" width="110" height="132" rx="10"/><g transform="translate(43 38) scale(.7)">' + ITEMP + '</g><rect x="30" y="30" width="110" height="3" fill="#2f8cff"><animate attributeName="y" values="30;150;30" dur="2.2s" repeatCount="indefinite"/></rect>' + [["Category", 110], ["Color", 60], ["Condition", 84]].map(function (f, i) { var y = 46 + i * 40; return '<text class="tm" x="164" y="' + y + '">' + f[0] + "</text>" + grow(164, y + 8, f[1], 10, "#2f8cff", (0.3 + i * 0.6).toFixed(1), 4.8); }).join(""); },
  integrations: function () { return '<path id="si-a" class="ln" d="M100 78 C 140 34, 180 34, 216 72"/><path id="si-b" class="ln" d="M216 104 C 180 146, 140 146, 100 102"/><rect class="card2" x="16" y="62" width="84" height="56" rx="12"/><text class="t" x="58" y="95" text-anchor="middle">Store</text><rect x="216" y="56" width="88" height="68" rx="14" fill="#0b1f3a"/><text class="tw" x="260" y="95" text-anchor="middle">NetSuite</text><circle r="6" fill="#2f8cff"><animateMotion dur="2.2s" repeatCount="indefinite"><mpath href="#si-a"/></animateMotion></circle><circle r="6" fill="#0f9d76"><animateMotion dur="2.2s" begin="-1.1s" repeatCount="indefinite"><mpath href="#si-b"/></animateMotion></circle><text class="tm" x="158" y="30" text-anchor="middle">order, keyed on its ID</text><text class="tm" x="158" y="166" text-anchor="middle">status and tracking</text>'; },
  commerce: function () { return '<rect class="card2" x="20" y="16" width="280" height="148" rx="12"/><rect class="mut" x="20" y="16" width="280" height="20" rx="10"/><rect class="soft2" x="40" y="50" width="96" height="78" rx="8"/><rect class="mut" x="40" y="136" width="60" height="8" rx="4"/><path class="inkS" d="M212 94 H221 L227 120 H258 L265 101 H225"/><circle class="ink" cx="232" cy="130" r="3.5"/><circle class="ink" cx="254" cy="130" r="3.5"/><g><rect x="78" y="78" width="22" height="22" rx="5" fill="#2f8cff"/><animateTransform attributeName="transform" type="translate" values="0 0;150 20;150 20" keyTimes="0;.5;1" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.62;1" dur="2.8s" repeatCount="indefinite"/></g><circle cx="268" cy="90" r="9" fill="#e5484d"/><text x="268" y="94" text-anchor="middle" class="tw" style="font-size:11px">1</text>'; },
  migration: function () { var S = [[30, 30], [250, 34], [36, 124], [252, 128], [140, 22], [146, 140]]; return S.map(function (q) { return '<rect x="' + q[0] + '" y="' + q[1] + '" width="30" height="20" rx="4" fill="#8fb6e6"><animate attributeName="x" values="' + q[0] + ';145;145;' + q[0] + '" keyTimes="0;.42;.9;1" dur="5s" repeatCount="indefinite"/><animate attributeName="y" values="' + q[1] + ';80;80;' + q[1] + '" keyTimes="0;.42;.9;1" dur="5s" repeatCount="indefinite"/></rect>'; }).join("") + fadeG('<rect x="118" y="66" width="84" height="48" rx="10" fill="#2f8cff"/><text class="tw" x="160" y="95" text-anchor="middle">1 item</text>', "0;.42;.5;.9;1", 5) + '<text class="tm" x="160" y="172" text-anchor="middle">condition items merged, stock and serials moved</text>'; },
  troubleshooting: function () { var r = ""; for (var i = 0; i < 6; i++) r += '<rect class="mut" x="30" y="' + (24 + i * 22) + '" width="210" height="14" rx="6"/>'; return r + '<rect x="30" y="68" width="210" height="14" rx="6" fill="#e5484d" opacity="0"><animate attributeName="opacity" values="0;0;.55;.55;0;0" keyTimes="0;.34;.38;.62;.66;1" dur="6s" repeatCount="indefinite"/></rect><rect x="30" y="68" width="210" height="14" rx="6" fill="#0f9d76" opacity="0"><animate attributeName="opacity" values="0;0;.55;.55;0" keyTimes="0;.64;.68;.95;1" dur="6s" repeatCount="indefinite"/></rect><g><circle class="inkS" cx="270" cy="31" r="14"/><path class="inkS" d="M280 41 L292 53"/><animateTransform attributeName="transform" type="translate" values="0 0;0 44;0 44;0 110;0 0" keyTimes="0;.34;.66;.9;1" dur="6s" repeatCount="indefinite"/></g>'; },
  reporting: function () { var H = [50, 76, 60, 100, 88, 120]; return '<path class="lnS" d="M36 158 H290"/>' + H.map(function (h, i) { var x = 50 + i * 40; return '<rect x="' + x + '" y="' + (158 - h) + '" width="24" height="' + h + '" rx="5" fill="' + (i === 3 ? "#2f8cff" : "#9cc2e6") + '"><animate attributeName="height" values="4;' + h + ";" + h + ';4" keyTimes="0;.3;.85;1" dur="5s" begin="' + (i * 0.12).toFixed(2) + 's" repeatCount="indefinite"/><animate attributeName="y" values="154;' + (158 - h) + ";" + (158 - h) + ';154" keyTimes="0;.3;.85;1" dur="5s" begin="' + (i * 0.12).toFixed(2) + 's" repeatCount="indefinite"/></rect>'; }).join("") + '<text class="tm" x="174" y="24" text-anchor="middle">ties back to the ledger</text>'; },
  design: function () { var L = ["Fit-gap agreed", "Acceptance criteria", "UAT scenario 3", "Sign-off"]; return '<rect class="card2" x="66" y="16" width="188" height="148" rx="12"/>' + L.map(function (l, i) { var y = 46 + i * 32, k = i === 2; return '<circle class="card2" cx="92" cy="' + y + '" r="9"/>' + (k ? '<g transform="translate(92 ' + y + ')"><circle r="9" fill="#e5484d" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.4;.45;.62;.66;1" dur="6s" repeatCount="indefinite"/></circle></g>' : "") + '<g transform="translate(92 ' + y + ') scale(.82)">' + fadeG(OKG, k ? "0;.66;.7;.95;1" : "0;" + (0.1 + i * 0.12).toFixed(2) + ";" + (0.16 + i * 0.12).toFixed(2) + ";.95;1", 6) + '</g><text class="t" x="110" y="' + (y + 4) + '">' + l + "</text>"; }).join(""); },
  ai2: null,
  takeover: function () { var S = [[30, 30], [214, 42], [52, 128], [222, 130], [128, 86]]; return S.map(function (q, i) { var ty = 34 + i * 24; return '<rect x="' + q[0] + '" y="' + q[1] + '" width="74" height="16" rx="5" fill="#8fb6e6"><animate attributeName="x" values="' + q[0] + ';110;110;' + q[0] + '" keyTimes="0;.4;.9;1" dur="5s" repeatCount="indefinite"/><animate attributeName="y" values="' + q[1] + ";" + ty + ";" + ty + ";" + q[1] + '" keyTimes="0;.4;.9;1" dur="5s" repeatCount="indefinite"/></rect>'; }).join("") + fadeG('<rect x="200" y="74" width="92" height="26" rx="13" fill="#0f9d76"/><text class="tw" x="246" y="91" text-anchor="middle" style="font-size:11.5px">Documented</text>', "0;.42;.5;.9;1", 5); },
  "fix-approval": function () { return '<path class="ln" d="M78 84 H242"/>' + [[60, "PO created"], [160, "Auto-approve"], [260, "Approved"]].map(function (n) { return '<circle class="card2" cx="' + n[0] + '" cy="84" r="18"/><text class="tm" x="' + n[0] + '" y="124" text-anchor="middle">' + n[1] + "</text>"; }).join("") + '<circle cx="60" cy="84" r="7" fill="#2f8cff"><animate attributeName="cx" values="60;160;160;160;260;260" keyTimes="0;.25;.5;.6;.85;1" dur="6s" repeatCount="indefinite"/><animate attributeName="fill" values="#2f8cff;#e5484d;#e5484d;#0f9d76;#0f9d76;#2f8cff" keyTimes="0;.25;.5;.6;.85;1" dur="6s" repeatCount="indefinite"/></circle>' + fadeG('<text x="160" y="50" text-anchor="middle" class="tr">stopped</text>', "0;.25;.28;.5;.53", 6) + fadeG('<text x="160" y="50" text-anchor="middle" class="tg">sender fixed</text>', "0;.58;.62;.85;.88", 6); },
  "fix-restlet": function () { return '<rect class="card2" x="20" y="34" width="132" height="30" rx="15"/><text class="tm" x="86" y="53" text-anchor="middle">GET /restlet</text><path class="ln" d="M156 49 H190"/><rect class="card2" x="194" y="34" width="104" height="30" rx="15"/>' + fadeG('<text x="246" y="54" text-anchor="middle" class="tr">404</text>', "0;0;1;1;0", 6).replace('values="0;0;1;1;0"', 'values="1;1;0;0;1"').replace('keyTimes="0;0;1;1;0"', 'keyTimes="0;.5;.55;.95;1"') + fadeG('<text x="246" y="54" text-anchor="middle" class="tg">200 OK</text>', "0;.5;.55;.95;1", 6) + '<text class="t" x="20" y="132">Role in deployment audience</text>' + tgl(115, 0.4).replace(/4\.5s/g, "6s").replace(/0;\.12;\.85;1/g, "0;.42;.95;1"); },
  "fix-bank": function () { return [1, 2, 3, 4].map(function (n, i) { var y = 34 + i * 34, miss = i === 1 || i === 3; return '<text class="t" x="40" y="' + (y + 5) + '">Subsidiary ' + n + '</text><path class="ln" d="M140 ' + y + ' H204"/><rect x="208" y="' + (y - 11) + '" width="74" height="22" rx="6" fill="none" stroke="#c9d3df" stroke-width="1.5" stroke-dasharray="4 3"/>' + (miss ? fadeG('<rect x="208" y="' + (y - 11) + '" width="74" height="22" rx="6" fill="#0f9d76"/><text class="tw" x="245" y="' + (y + 4) + '" text-anchor="middle" style="font-size:11px">bank mapped</text>', "0;.45;.52;.92;1", 5) : '<rect x="208" y="' + (y - 11) + '" width="74" height="22" rx="6" fill="#0f9d76"/><text class="tw" x="245" y="' + (y + 4) + '" text-anchor="middle" style="font-size:11px">bank mapped</text>'); }).join(""); },
  "fix-pdf": function () { return '<rect class="card2" x="60" y="48" width="120" height="84" rx="8"/><path class="inkS" d="M60 56 L120 98 L180 56"/><path class="ln" d="M186 90 H204"/><rect class="card2" x="208" y="70" width="80" height="40" rx="10"/>' + fadeG('<text x="248" y="96" text-anchor="middle" class="to">HTML</text>', "0;0;1;1;0", 5).replace('values="0;0;1;1;0"', 'values="1;1;0;0;1"').replace('keyTimes="0;0;1;1;0"', 'keyTimes="0;.45;.5;.95;1"') + fadeG('<text x="248" y="96" text-anchor="middle" class="tr">PDF</text>', "0;.45;.5;.95;1", 5) + '<text class="tm" x="160" y="160" text-anchor="middle">a per-user preference, not the template</text>'; }
};
var SCN_LABEL = { administration: "Settings switching on one by one", devops: "A change moving from Git to sandbox to production", pdf: "An invoice drawing itself and getting a PDF stamp", suitescript: "Code being written line by line", apps: "A work queue card moving across columns", finance: "A journal entry that balances", ai: "A photo being read and fields filling in", integrations: "Orders flowing into NetSuite and status flowing back", commerce: "An item moving into a cart", migration: "Many items merging into one", troubleshooting: "Scanning records until the broken one is found and fixed", reporting: "Report bars growing", design: "A checklist where a failed test is fixed and passes", takeover: "Scattered pieces lining up and being documented", "fix-approval": "An approval that stops, then runs again", "fix-restlet": "A 404 that turns into 200 once the role is added", "fix-bank": "Missing bank mappings filling in", "fix-pdf": "An email attachment changing from HTML to PDF" };
function scene(k) { var f = SCN[k]; return '<svg viewBox="0 0 320 180" role="img" aria-label="' + E(SCN_LABEL[k] || "") + '">' + (f ? f() : "") + "</svg>"; }
function svcTile(x) {
  return '<article class="svt rv" id="svc-' + x.id + '"><div class="scene">' + scene(x.id) + '</div><div class="svt-body"><h3 class="h3">' + E(x.title) + '</h3><p class="muted">' + E(x.short) + '</p><details><summary>What is included</summary><ul>' + x.detail.map(function (d) { return "<li>" + E(d) + "</li>"; }).join("") + "</ul></details></div></article>";
}

var REC = [
  { k: "Goods in", t: "Goods arrive against the purchase order.", p: "The receiver scans the delivery and the workspace shows what the purchase order expects.", h: function () { return '<div class="sc-h"><span>Receiving</span><span>PO-4471</span></div><div class="sc-big">12 units expected</div><div class="barcode"><span class="beam"></span></div><p class="muted" style="margin:12px 0 0;font-size:14px">Scanned: unit 1 of 12</p>'; } },
  { k: "Inspection", t: "Each unit is checked on screen.", p: "A short checklist per unit. It passes or fails before anything else happens.", h: function () { return '<div class="sc-h"><span>Inspection</span><span>Unit 1</span></div><ul class="chk">' + ["Matches the PO line", "Packaging checked", "Condition graded", "Serial number captured"].map(function (x, i) { return '<li><i style="--d:' + (0.2 + i * 0.45).toFixed(2) + 's">' + CHECK + "</i>" + E(x) + "</li>"; }).join("") + '</ul><div class="verdict good pass">Passed</div>'; } },
  { k: "Photos", t: "Photos go straight onto the record.", p: "Photos are taken in the workspace and saved to the File Cabinet, attached to the item.", h: function () { return '<div class="sc-h"><span>Photos</span><span>Unit 1</span></div><div class="photo2">' + ITEM + '<span class="flash"></span><span class="saved">Saved to the File Cabinet</span></div>'; } },
  { k: "AI reads it", t: "A vision model fills in the details.", p: "The model reads the photo and pre-fills the item attributes, and a price lookup runs alongside. The receiver checks and confirms.", h: function () { return '<div class="sc-h"><span>AI reads the photo</span><span>Unit 1</span></div><div class="ai"><div class="photo2">' + ITEM + '<span class="scanl"></span></div><div class="fields">' + [["Category", "Office chair", 12], ["Color", "Black", 5], ["Condition", "Grade B", 7], ["Model", "From label", 10]].map(function (f, i) { return '<div class="fld"><span>' + f[0] + '</span><b style="--w:' + f[2] + "ch;--d:" + (0.3 + i * 0.55).toFixed(2) + 's">' + E(f[1]) + "</b></div>"; }).join("") + "</div></div>"; } },
  { k: "Item receipt", t: "The receipt creates itself.", p: "Finishing the step creates the item receipt on the purchase order. A write queue keeps two people from saving over each other.", h: function () { return '<div class="sc-h"><span>Done</span><span>PO-4471</span></div><div class="rtile good big">Item receipt IR-1093<small>Created from PO-4471, photos attached</small></div><div class="queue"><span class="qchip">Save from user A</span><span class="qchip" style="animation-delay:.35s">Save from user B</span><span>Queued and saved one after the other.</span></div>'; } }
];

function explainer(x) {
  if (x === "commission") return '<div class="xpl" id="xcom"><div class="xpl-top"><div class="seg" id="com-mode" role="group" aria-label="Compare"><button type="button" data-m="before" aria-pressed="true">Before: two engines</button><button type="button" data-m="after" aria-pressed="false">After: one library</button></div><div class="seg" id="com-price" role="group" aria-label="Sale price">' + [120, 210, 640, 1100].map(function (v) { return '<button type="button" data-p="' + v + '" aria-pressed="' + (v === 210 ? "true" : "false") + '">' + money(v, true) + "</button>"; }).join("") + '</div></div><div class="com-grid"><div class="com-col"><h4>1. Fee waterfall</h4><div id="com-wf"></div></div><div class="com-col"><h4>2. Tier by price band</h4><div id="com-tiers"></div><div class="basis" id="com-basis" hidden></div></div><div class="com-col"><h4>3. Partner payout</h4><div class="res" id="com-res" aria-live="polite"></div></div></div><p class="xnote">Example rates and prices for illustration. Not client figures.</p></div>';
  if (x === "dupes") return '<div class="xpl" id="xdup"><div class="xpl-top"><div class="seg" id="dup-mode" role="group" aria-label="Compare"><button type="button" data-m="before" aria-pressed="true">Before the fix</button><button type="button" data-m="after" aria-pressed="false">After the fix</button></div><button type="button" class="btn ghost sm" id="dup-replay">Replay</button></div><div class="dscroll"><div class="dup" id="dup-stage"><div class="dcol"><h4>Marketplace</h4><div class="dcard"><b>Order A1001</b><span>buyer_88, 1 unit</span></div><p class="dstat" id="dup-stat" aria-live="polite"></p></div><div class="dcol"><h4>Sync queue</h4><div class="lane"><span>Worker 1</span><div class="lslot" id="dup-l1"></div></div><div class="lane"><span>Worker 2</span><div class="lslot" id="dup-l2"></div></div></div><div class="dcol"><h4>NetSuite</h4><div class="rarea"><span class="rl">Sales orders</span><div class="tiles" id="dup-so"></div></div><div class="rarea"><span class="rl">Customers</span><div class="tiles" id="dup-cu"></div></div></div><span class="pkt" id="dup-p1">A1001</span><span class="pkt p2" id="dup-p2">A1001</span></div></div><div class="dres" id="dup-res" aria-live="polite"></div><p class="xnote">Illustration with example IDs.</p></div>';
  if (x === "receiving") return '<div class="xpl" id="xrec"><ol class="rsteps" id="rec-steps">' + REC.map(function (r, i) { return '<li><button type="button" aria-pressed="false"><b>' + (i + 1) + "</b>" + E(r.k) + "</button></li>"; }).join("") + '</ol><div class="rstage"><div class="rdevice"><div class="rscreen" id="rec-screen"></div></div><div class="rside" aria-live="polite"><p class="kick" id="rec-k"></p><p class="rt" id="rec-t"></p><p class="muted" id="rec-p" style="margin:0;font-size:17px"></p></div></div><p class="xnote">Example item for illustration.</p></div>';
  return '<div class="xpl" id="xmid"><div class="xpl-top"><div class="seg" id="mid-mode" role="group" aria-label="Replay"><button type="button" data-m="before" aria-pressed="true">Play the night</button><button type="button" data-m="after" aria-pressed="false">Replay with the fix</button></div><span class="mid-clock" id="mid-clock">04:59</span></div><div class="mid-grid"><div><div class="mid-bins" id="mid-bins" aria-hidden="true"></div><div class="mid-axis" aria-hidden="true"><span>22:00</span><span>23:00</span><span>00:00</span><span>01:00</span><span>02:00</span><span>03:00</span><span>04:00</span></div><div class="mid-legend"><span><i style="background:var(--faint)"></i>Normal orders (illustration)</span><span><i style="background:#e5484d"></i>Duplicates</span></div></div><div class="mid-side"><div class="rbox"><span class="k">Duplicate orders</span><span class="v" id="mid-count">77</span></div><div class="verdict bad" id="mid-cause" aria-live="polite"></div></div></div><p class="xnote">The 77 is the real count. Normal order volume is an illustration.</p></div>';
}

function initCommission() {
  var root = document.getElementById("xcom"); if (!root) return;
  var TI = [{ n: "Tier 1", b: "Under $200", min: 0, s: [60, 10, 30] }, { n: "Tier 2", b: "$200 to $999", min: 200, s: [65, 10, 25] }, { n: "Tier 3", b: "$1,000 and up", min: 1000, s: [70, 10, 20] }];
  var mode = "before", price = 210, basis = "gross";
  var wf = document.getElementById("com-wf"), tiers = document.getElementById("com-tiers"), bas = document.getElementById("com-basis"), res = document.getElementById("com-res");
  function tier(v) { var t = TI[0]; TI.forEach(function (x) { if (v >= x.min) t = x; }); return t; }
  function count(el) {
    var to = parseFloat(el.getAttribute("data-to"));
    if (reduce) { el.textContent = money(to); return; }
    var t0 = null;
    function step(ts) { if (t0 === null) t0 = ts; var k = Math.min(1, (ts - t0) / 650); el.textContent = money(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  function draw() {
    $$("#com-mode button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-m") === mode ? "true" : "false"); });
    $$("#com-price button").forEach(function (b) { b.setAttribute("aria-pressed", +b.getAttribute("data-p") === price ? "true" : "false"); });
    var mk = price * 0.12, cd = price * 0.03, hd = 5, net = price - mk - cd - hd;
    var rows = [["Sale price", price, "pos"], ["Marketplace fee, 12%", -mk, "neg"], ["Card fee, 3%", -cd, "neg"], ["Handling", -hd, "neg"], ["Net to split", net, "net"]];
    wf.innerHTML = rows.map(function (r, i) { return '<div class="wfr ' + r[2] + '"><span>' + E(r[0]) + '</span><span class="v">' + money(r[1]) + '</span><span class="bar"><i data-w="' + (Math.abs(r[1]) / price * 100).toFixed(1) + '" style="transition-delay:' + (i * 0.12).toFixed(2) + 's"></i></span></div>'; }).join("");
    requestAnimationFrame(function () { requestAnimationFrame(function () { $$(".bar i", wf).forEach(function (i) { i.style.width = i.getAttribute("data-w") + "%"; }); }); });
    var tA = tier(price), tB = tier(net), tL = tier(basis === "gross" ? price : net);
    tiers.innerHTML = TI.map(function (t) {
      var marks = [], cls = "";
      if (mode === "before") {
        if (t === tA) { marks.push('<span class="mk mka">Engine A: sale price</span>'); cls += " hitA"; }
        if (t === tB) { marks.push('<span class="mk mkb">Engine B: net</span>'); cls += " hitB"; }
      } else if (t === tL) { marks.push('<span class="mk mkl">One library</span>'); cls += " hitL"; }
      return '<div class="trow' + cls + '"><span class="tn">' + t.n + '</span><span class="tb">' + E(t.b) + '</span><span class="ts">Partner ' + t.s[0] + "%, referral " + t.s[1] + "%, house " + t.s[2] + "%</span>" + (marks.length ? '<span class="mks">' + marks.join("") + "</span>" : "") + "</div>";
    }).join("");
    if (mode === "after") {
      bas.hidden = false;
      bas.innerHTML = '<span>Tier basis, set once by finance:</span><span class="seg sm"><button type="button" data-b="gross" aria-pressed="' + (basis === "gross") + '">Sale price</button><button type="button" data-b="net" aria-pressed="' + (basis === "net") + '">Net</button></span>';
      $$("button", bas).forEach(function (b) { b.addEventListener("click", function () { basis = b.getAttribute("data-b"); draw(); }); });
      var pl = net * tL.s[0] / 100;
      res.innerHTML = ["Journal entry", "Finance report", "Partner portal"].map(function (k) { return '<div class="rbox"><span class="k">' + k + '</span><span class="v" data-to="' + pl.toFixed(2) + '">$0.00</span></div>'; }).join("") +
        '<div class="split" role="img" aria-label="Split for the selected tier"><i style="width:' + tL.s[0] + '%;background:var(--blue2)"></i><i style="width:' + tL.s[1] + '%;background:var(--orange)"></i><i style="width:' + tL.s[2] + '%;background:var(--teal)"></i></div>' +
        '<div class="verdict good">One rule set. Every output shows the same number.</div>';
    } else {
      bas.hidden = true; bas.innerHTML = "";
      var pa = net * tA.s[0] / 100, pb = net * tB.s[0] / 100, diff = Math.abs(pa - pb);
      res.innerHTML = '<div class="rbox"><span class="k">Engine A, tier on sale price</span><span class="v" data-to="' + pa.toFixed(2) + '">$0.00</span></div><div class="rbox"><span class="k">Engine B, tier on net</span><span class="v" data-to="' + pb.toFixed(2) + '">$0.00</span></div>' +
        (diff > 0.004 ? '<div class="verdict bad">Same sale, two payouts. Off by ' + money(diff) + ".</div>" : '<div class="verdict good">Same tier this time. Try the $210 or $1,100 sale.</div>');
    }
    $$(".v[data-to]", res).forEach(count);
  }
  $$("#com-mode button").forEach(function (b) { b.addEventListener("click", function () { mode = b.getAttribute("data-m"); draw(); }); });
  $$("#com-price button").forEach(function (b) { b.addEventListener("click", function () { price = +b.getAttribute("data-p"); draw(); }); });
  draw();
}

function initDupes() {
  var root = document.getElementById("xdup"); if (!root) return;
  var mode = "before", run = 0;
  var p1 = document.getElementById("dup-p1"), p2 = document.getElementById("dup-p2"), l1 = document.getElementById("dup-l1"), l2 = document.getElementById("dup-l2");
  var so = document.getElementById("dup-so"), cu = document.getElementById("dup-cu"), st = document.getElementById("dup-stat"), res = document.getElementById("dup-res");
  function pos(el, x, y, op) { el.style.left = x + "%"; el.style.top = y + "%"; if (op !== undefined) el.style.opacity = op; }
  function tile(cls, a, b) { return '<div class="rtile ' + cls + '">' + E(a) + "<small>" + E(b) + "</small></div>"; }
  function finish() {
    p1.style.opacity = 0; p2.style.opacity = 0;
    l1.innerHTML = '<span class="qchip">A1001</span>'; l2.innerHTML = '<span class="qchip">A1001, again</span>';
    if (mode === "before") {
      so.innerHTML = tile("bad", "SO-2201", "from order A1001") + tile("bad", "SO-2202", "from order A1001");
      cu.innerHTML = tile("bad", "buyer_88", "created as new") + tile("bad", "buyer_88", "created as new, again");
      st.textContent = "Each copy was treated as a new order.";
      res.innerHTML = '<div class="verdict bad">One order became 2 sales orders and 2 customers.</div>';
    } else {
      so.innerHTML = tile("good", "SO-2201", "from order A1001") + '<p class="tnote">Second copy: external ID A1001 already exists, so it returned SO-2201.</p>';
      cu.innerHTML = tile("good", "buyer_88", "matched on marketplace user id, in its own subsidiary");
      st.textContent = "The second copy changed nothing.";
      res.innerHTML = '<div class="verdict good">However many times it arrives, one order stays one sales order and one customer.</div>';
    }
  }
  function play() {
    run++; var my = run;
    $$("#dup-mode button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-m") === mode ? "true" : "false"); });
    l1.innerHTML = ""; l2.innerHTML = ""; so.innerHTML = ""; cu.innerHTML = ""; res.innerHTML = "";
    if (reduce) { finish(); return; }
    [p1, p2].forEach(function (p) { p.style.transition = "none"; });
    pos(p1, 15, 46, 1); pos(p2, 15, 60, 0); void p1.offsetWidth;
    [p1, p2].forEach(function (p) { p.style.transition = ""; });
    st.textContent = "Order A1001 is sent.";
    function at(ms, fn) { later(function () { if (my === run) fn(); }, ms); }
    at(200, function () { pos(p1, 50, 38); });
    at(950, function () { l1.innerHTML = '<span class="qchip">A1001</span>'; st.textContent = "No reply in time, so the marketplace sends it again."; pos(p2, 15, 60, 1); });
    at(1250, function () { pos(p2, 50, 70); });
    at(2000, function () { l2.innerHTML = '<span class="qchip">A1001, again</span>'; st.textContent = "Two workers pick up both copies at the same moment."; });
    at(2400, function () { pos(p1, 84, 34); pos(p2, 84, 40); });
    at(3150, finish);
  }
  $$("#dup-mode button").forEach(function (b) { b.addEventListener("click", function () { mode = b.getAttribute("data-m"); play(); }); });
  document.getElementById("dup-replay").addEventListener("click", play);
  finish();
  onceVisible(root, play);
}

function initReceiving() {
  var root = document.getElementById("xrec"); if (!root) return;
  var btns = $$("#rec-steps button"), scr = document.getElementById("rec-screen"), cur = 0, auto = true;
  function set(i) {
    cur = i;
    btns.forEach(function (b, j) { b.setAttribute("aria-pressed", j === i ? "true" : "false"); b.classList.toggle("done", j < i); });
    scr.innerHTML = REC[i].h();
    document.getElementById("rec-k").textContent = "Step " + (i + 1) + " of 5";
    document.getElementById("rec-t").textContent = REC[i].t;
    document.getElementById("rec-p").textContent = REC[i].p;
  }
  btns.forEach(function (b, j) { b.addEventListener("click", function () { auto = false; set(j); }); });
  set(0);
  every(function () { if (auto) set((cur + 1) % REC.length); }, 4000);
}

function initMidnight() {
  var root = document.getElementById("xmid"); if (!root) return;
  var hours = ["22", "23", "00", "01", "02", "03", "04"], normal = [4, 3, 2, 2, 1, 1, 2], dups = [0, 0, 40, 37, 0, 0, 0];
  var wrap = document.getElementById("mid-bins"), clock = document.getElementById("mid-clock"), cnt = document.getElementById("mid-count"), cause = document.getElementById("mid-cause"), run = 0, mode = "before";
  var bins = hours.map(function (h, i) { var b = document.createElement("div"); b.className = "mid-bin" + (i === 2 || i === 3 ? " night" : ""); wrap.appendChild(b); return b; });
  function sq(t, pop) { var q = document.createElement("i"); q.className = (t === "d" ? "d" : "") + (pop ? " pop" : ""); return q; }
  function verdict(done) {
    cause.className = "verdict " + (mode === "after" ? "good" : "bad");
    cause.style.opacity = done ? 1 : 0.45;
    cause.textContent = mode === "after" ? "After the fix: the same night, replayed, with no duplicate orders." : "Root cause: server date versus local transaction date between midnight and 2 AM.";
    cnt.style.color = mode === "after" ? "var(--green)" : "#e5484d";
  }
  function night(animate) {
    run++; var my = run;
    $$("#mid-mode button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-m") === mode ? "true" : "false"); });
    bins.forEach(function (b) { b.innerHTML = ""; });
    var ev = [];
    hours.forEach(function (h, i) { var l = []; for (var a = 0; a < normal[i]; a++) l.push("n"); if (mode === "before") for (var d = 0; d < dups[i]; d++) l.push("d"); l.forEach(function (t, k) { ev.push({ b: i, t: t, f: (k + 1) / l.length }); }); });
    var c = 0;
    if (!animate || reduce) { ev.forEach(function (e) { bins[e.b].appendChild(sq(e.t, false)); if (e.t === "d") c++; }); cnt.textContent = c; clock.textContent = "04:59"; verdict(true); return; }
    cnt.textContent = "0"; clock.textContent = "22:00"; verdict(false);
    var step = 4200 / ev.length;
    ev.forEach(function (e, idx) {
      later(function () {
        if (my !== run) return;
        bins[e.b].appendChild(sq(e.t, true));
        if (e.t === "d") { c++; cnt.textContent = c; }
        var m = Math.min(59, Math.floor(e.f * 59)); clock.textContent = hours[e.b] + ":" + (m < 10 ? "0" : "") + m;
        if (idx === ev.length - 1) verdict(true);
      }, idx * step);
    });
  }
  $$("#mid-mode button").forEach(function (b) { b.addEventListener("click", function () { mode = b.getAttribute("data-m"); night(true); }); });
  night(false);
  onceVisible(root, function () { night(true); });
}

function initReveal() {
  if (reduce || !("IntersectionObserver" in window)) return function () {};
  var vh = window.innerHeight || 800;
  var els = $$(".rv").filter(function (el) { return el.getBoundingClientRect().top > vh; });
  els.forEach(function (el) { el.classList.add("pre"); });
  var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.remove("pre"); io.unobserve(x.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
  els.forEach(function (el) { io.observe(el); });
  return function () { io.disconnect(); };
}
function glow(e) {
  var c = e.target.closest && e.target.closest(".card"); if (!c) return;
  var r = c.getBoundingClientRect(); c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px");
}

/** Starts every widget found on the current page. Returns a cleanup function. */
export function boot() {
  reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  initDiagram(); initWL(); initOrder(); initShow(); initSCX(); initTeam(); initScenarios(); initSteps(); initLayers(); initOrbit(); initFilters(); initForm(); initCommission(); initDupes(); initReceiving(); initMidnight();
  var stopReveal = initReveal();
  document.addEventListener("pointermove", glow);
  return function () { clearLoops(); stopReveal(); document.removeEventListener("pointermove", glow); };
}

export { pages, caseBySlug };
