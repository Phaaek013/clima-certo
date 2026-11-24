/* Clima Certo: page behaviour.
   Lenis smooths the wheel into one glide; the engine (scrollcraft.js) drives
   pins, cues and the rail from that glide; this file drives what is this
   site's alone: the drawn split unit, whose whole state is a function of
   scroll, and the copper line down the page. */
(function () {
  'use strict';

  // Número do WhatsApp que recebe os pedidos: DDI + DDD + número, só dígitos.
  // Exemplo: '5511999999999'. Vazio = o cupom avisa que falta configurar.
  var WHATSAPP = '';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ---- smooth scroll -------------------------------------------------------
  // One glide for wheel and trackpad. Touch keeps the phone's native momentum.
  var lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.85, smoothWheel: true, anchors: { offset: 0 } });
  }

  ScrollCraft.mount(document.body);

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function sstep(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
  function expo(x) { x = clamp(x, 0, 1); return x === 1 ? 1 : 1 - Math.pow(2, -10 * x); }
  function mix(a, b, t) { return a + (b - a) * t; }

  var rig = $('.rig'), pos = $('.rig__pos'), tilt = $('.rig__tilt');
  var hero = $('#inicio'), sym = $('#sintomas'), tear = $('#servicos'), closeSec = $('#agendar');
  var partsNav = $('.parts'), symCol = $('.symptoms__col');
  var gotos = $$('[data-goto]');
  var pipe = $('.pipe'), mainEl = $('main');

  var ORDER = ['chassis', 'pipes', 'coil', 'drum', 'pcb', 'filters', 'cover'];
  var BASEZ = { chassis: 0, pipes: -4, coil: 12, drum: 9, pcb: 16, filters: 22, cover: 32 };
  var P = {}, TAG = {}, HL = {}, ART = {}, GHOST = {};
  ORDER.forEach(function (k) {
    P[k] = $('.part[data-part="' + k + '"]'); TAG[k] = $('.tag', P[k]); HL[k] = $('.hl', P[k]);
    // Each part also exists as a phantom-line drawing (styled in site.css);
    // a part that is not the one opening crossfades to it.
    ART[k] = $('svg', P[k]);
    GHOST[k] = ART[k].cloneNode(true);
    GHOST[k].classList.add('ghost');
    $$('.hl', GHOST[k]).forEach(function (n) { n.remove(); });
    ART[k].after(GHOST[k]);
  });
  var airLayer = $('.part--air');
  var airPaths = $$('.air path');
  var heat = $('.heat'), drips = $$('.drips path');
  var noise = $('.noise'), temp = $('.temp'), led = $('.led'), flap = $('.flap');
  var miniAir = $$('.mini__air path'), miniTemp = $('.mini__temp'), miniFlap = $('.mini__flap');

  airPaths.concat(miniAir).forEach(function (p) {
    p.setAttribute('pathLength', '100');
    p.style.strokeDasharray = '10 7';
  });

  // Teardown timeline, in the pinned act's progress (0..1). Must match the
  // data-sc-cue windows on the panels in index.html.
  var S0 = 0.09, SW = 0.13, REASM = 0.85, REASM_W = 0.06;   // seated by 0.91, before the outro cue peaks
  var SERVICE = [['cover', 'filters'], ['coil'], ['drum'], ['pcb'], ['pipes'], ['chassis']];

  // Explode vectors per part: [x, y, z, rotateX]. Phones trade sideways travel
  // for vertical so the open unit still fits a narrow screen.
  function vectors(m) {
    return m ? {
      cover:   [0, -120, 260, -16],
      filters: [0, -210, 150, 0],
      coil:    [0, -120, 70, 0],
      drum:    [0, 210, 110, 0],
      pcb:     [-170, 190, 150, 0],
      pipes:   [40, 200, 40, 0],
      chassis: [0, -40, -240, 0]
    } : {
      cover:   [0, -80, 320, -14],
      filters: [0, -250, 190, 0],
      coil:    [0, -110, 90, 0],
      drum:    [0, 220, 130, 0],
      pcb:     [90, 210, 150, 0],
      pipes:   [-110, 230, 40, 0],
      chassis: [-40, -230, -300, 0]
    };
  }

  var vw = innerWidth, vh = innerHeight, mobile = vw < 860, V = vectors(mobile);
  addEventListener('resize', function () { vw = innerWidth; vh = innerHeight; mobile = vw < 860; V = vectors(mobile); }, { passive: true });

  function presets() {
    if (mobile) {
      return {
        hero: { cx: vw * 0.5, cy: vh * 0.24, s: Math.min(vw * 0.88, 600) / 800 },
        sym:  { cx: vw * 0.5, cy: vh * 0.22, s: Math.min(vw * 0.8, 560) / 800 },
        tear: { cx: vw * 0.5, cy: vh * 0.33, s: Math.min(vw * 0.74, vh * 0.36) / 800 }
      };
    }
    return {
      hero: { cx: vw * 0.68, cy: vh * 0.36, s: Math.min(vw * 0.5, 780, vh * 0.92) / 800 },
      sym:  { cx: vw * 0.72, cy: vh * 0.48, s: Math.min(vw * 0.42, 640) / 800 },
      tear: { cx: vw * (vw > 1100 ? 0.615 : 0.67), cy: vh * 0.5, s: Math.min(vw * (vw > 1100 ? 0.4 : 0.36), vh * 0.68, 700) / 800 }
    };
  }

  function rect(el) { return el.getBoundingClientRect(); }

  // ---- target state from the scroll position ------------------------------
  function target() {
    var pr = presets();
    var rs = rect(sym), rt = rect(tear), rh = rect(hero), rc = rect(closeSec);

    var heroP = clamp(-rh.top / Math.max(rh.height - vh, 1), 0, 1);
    var w1 = sstep((vh - rs.top) / (vh * 0.9));                  // hero -> symptoms
    var w2 = sstep((vh * 0.95 - rt.top) / (vh * 0.95));          // -> teardown
    var w3 = sstep((vh - rt.bottom) / (vh * 0.85));              // teardown leaving
    var p = clamp(-rt.top / Math.max(rt.height - vh, 1), 0, 1);  // teardown progress
    var trouble = w1 * (1 - w2);
    var copyTop = rect(symCol).top;

    var a = pr.hero, b = pr.sym, c = pr.tear;
    var st = {
      cx: mix(mix(a.cx, b.cx, w1), c.cx, w2),
      cy: mix(mix(a.cy, b.cy, w1), c.cy, w2) - w3 * vh * 0.95,
      s:  mix(mix(a.s, b.s, w1), c.s, w2),
      op: 1,
      trouble: trouble,
      close: sstep((vh - rc.top) / (vh * 0.85))
    };
    // Phones stack copy under the unit; only where the copy scrolls over it
    // does the unit step back.
    if (mobile) st.op = 1 - 0.75 * clamp((st.cy + 120 * st.s - copyTop) / 90, 0, 1) * (1 - w2);

    // A slight three-quarter look, as the ad illustrator drew it; the full
    // turn only while the unit is open.
    var rot = sstep(p / 0.07) * (1 - sstep((p - REASM) / REASM_W));
    var heroRx = -5 - heroP * 3, heroRy = -10 - heroP * 6;
    st.rx = mix(mix(heroRx, -4, w1), mix(-4, mobile ? 18 : 14, rot), w2);
    st.ry = mix(mix(heroRy, mobile ? -6 : -16, w1), mix(-8, mobile ? -22 : -28, rot), w2);

    // Parts: each travels on an exponential ease and seats, then holds.
    var reasm = sstep((p - REASM) / REASM_W);
    st.ex = {}; st.act = {}; st.tag = {}; st.maxEx = 0; st.anyAct = 0; st.step = -1; st.next = -1;
    var best = 0;
    for (var i = 0; i < SERVICE.length; i++) {
      var s0 = S0 + i * SW;
      var on = expo((p - s0) / 0.055);
      var act = sstep((p - s0 + 0.01) / 0.03) * (1 - sstep((p - (s0 + SW)) / 0.035));
      var pre = sstep((p - (s0 - 0.035)) / 0.025);    // marked just before it moves
      var ex = on * (0.42 + 0.58 * act) * (1 - reasm) * w2;
      for (var j = 0; j < SERVICE[i].length; j++) {
        var k = SERVICE[i][j];
        st.ex[k] = ex; st.act[k] = act * w2;
        // The label leaves before the next part is announced, so two labels
        // never share the screen.
        var tagOut = 1 - sstep((p - (s0 + SW - 0.05)) / 0.015);
        st.tag[k] = Math.max(act, pre * (1 - on) * 0.6) * tagOut * w2 * (1 - reasm);
      }
      st.maxEx = Math.max(st.maxEx, ex);
      st.anyAct = Math.max(st.anyAct, act * w2);
      if (act > best && act > 0.35) { best = act; st.step = i; }
      if (st.next < 0 && p < s0 && p > s0 - 0.06) st.next = i;
    }
    // The cover cracks open a little as the teardown begins.
    st.ex.cover = Math.max(st.ex.cover, sstep(p / 0.08) * 0.22 * (1 - reasm) * w2);

    st.air = (1 - trouble * 0.85) * (1 - st.maxEx) * (1 - w3);
    st.parts = w2 > 0.5 && w3 < 0.2 && p > 0.03 && p < REASM + 0.02 ? 1 : 0;
    return st;
  }

  var KEYS = ['cx', 'cy', 's', 'op', 'trouble', 'rx', 'ry', 'air', 'maxEx', 'anyAct', 'close'];
  var MAPS = ['ex', 'act', 'tag'];
  var cur = null;
  function follow(t, k) {
    if (!cur) { cur = JSON.parse(JSON.stringify(t)); return; }
    KEYS.forEach(function (key) { cur[key] += (t[key] - cur[key]) * k; });
    MAPS.forEach(function (m) {
      ORDER.forEach(function (key) { cur[m][key] = (cur[m][key] || 0) + ((t[m][key] || 0) - (cur[m][key] || 0)) * k; });
    });
    cur.step = t.step; cur.next = t.next; cur.parts = t.parts;
  }

  // ---- pointer: the unit leans a little toward the reader -----------------
  var mx = 0, my = 0, tmx = 0, tmy = 0;
  if (fine && !reduce) {
    addEventListener('pointermove', function (e) {
      tmx = (e.clientX / vw) * 2 - 1; tmy = (e.clientY / vh) * 2 - 1;
    }, { passive: true });
  }

  // ---- the copper line ------------------------------------------------------
  function pipeProgress() {
    var top = mainEl.getBoundingClientRect().top + scrollY;
    var h = mainEl.offsetHeight;
    return clamp((scrollY + vh * 0.55 - top) / h, 0, 1);
  }

  var lastY = scrollY, vel = 0, airOff = 0, miniOff = 0, lastT = 0, lastStep = -2, lastNext = -2;

  function frame(now) {
    if (lenis) lenis.raf(now);
    var rawDt = lastT ? (now - lastT) / 1000 : 0.016;
    var dt = Math.min(rawDt, 0.05);
    lastT = now;
    var y = scrollY;
    vel += ((y - lastY) / Math.max(dt, 0.001) - vel) * 0.06;
    lastY = y;

    var t = target();
    // Lenis already glides the scroll; this only softens state changes that
    // land between two frames (resizes, jumps). Frame-rate independent.
    follow(t, reduce ? 1 : 1 - Math.pow(0.78, Math.min(rawDt, 0.5) * 60));
    var c = cur;
    mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;

    pos.style.transform = 'translate3d(' + c.cx.toFixed(2) + 'px,' + c.cy.toFixed(2) + 'px,0) scale(' + c.s.toFixed(4) + ')';
    tilt.style.transform = 'rotateX(' + (c.rx - my * 3).toFixed(2) + 'deg) rotateY(' + (c.ry + mx * 5).toFixed(2) + 'deg)';
    tilt.style.setProperty('--s', c.s.toFixed(4));
    rig.style.opacity = c.op.toFixed(3);
    rig.style.visibility = c.cy < -vh * 0.6 ? 'hidden' : 'visible';

    ORDER.forEach(function (k) {
      var v = V[k], e = c.ex[k] || 0, a = c.act[k] || 0;
      P[k].style.transform = 'translate3d(' + (v[0] * e).toFixed(1) + 'px,' + (v[1] * e).toFixed(1) + 'px,' + (BASEZ[k] + v[2] * e).toFixed(1) + 'px) rotateX(' + (v[3] * e).toFixed(2) + 'deg)';
      var g = clamp(c.anyAct * (1 - a) * 1.25, 0, 1);
      // Art leaves first, then the phantom arrives: never a half-alpha part.
      ART[k].style.opacity = (1 - sstep((g - 0.3) / 0.2)).toFixed(3);
      GHOST[k].style.opacity = sstep((g - 0.5) / 0.2).toFixed(3);
      HL[k].style.opacity = clamp(a * 1.2 - 0.1, 0, 1).toFixed(3);
      TAG[k].style.opacity = clamp(c.tag[k] * 1.3 - 0.15, 0, 1).toFixed(3);
    });

    // Air, heat, drips, noise, display.
    var speed = 14 + Math.min(Math.abs(vel) * 0.02, 40);
    if (!reduce) airOff += dt * speed * (0.3 + c.air * 0.7);
    airLayer.style.opacity = clamp(Math.max(c.air, c.trouble), 0, 1).toFixed(3);
    airLayer.style.transform = 'translateZ(40px)';
    for (var i = 0; i < airPaths.length; i++) {
      airPaths[i].style.strokeDashoffset = (-airOff - i * 3.7).toFixed(2);
      airPaths[i].style.strokeOpacity = (clamp(c.air, 0, 1) * (0.25 + 0.75 * (1 - c.trouble))).toFixed(3);
    }
    var tt = now / 1000;
    heat.style.opacity = c.trouble.toFixed(3);
    heat.setAttribute('transform', 'translate(0 ' + (reduce ? 0 : -((tt * 18) % 30)).toFixed(1) + ')');
    for (var d = 0; d < drips.length; d++) {
      var ph = reduce ? 0.3 + d * 0.25 : (tt * 0.5 + d / drips.length) % 1;
      drips[d].setAttribute('transform', 'translate(' + (722 + d * 10) + ' ' + (264 + ph * ph * 190).toFixed(1) + ')');
      drips[d].style.opacity = (c.trouble * (1 - ph * 0.8)).toFixed(3);
    }
    noise.style.opacity = (c.trouble * 0.9).toFixed(3);
    var deg = Math.round(22 + 7 * c.trouble);
    if (temp.textContent !== deg + '°') temp.textContent = deg + '°';
    var warm = c.trouble > 0.5;
    temp.setAttribute('fill', warm ? '#e8b23a' : '#8fd6cc');
    led.setAttribute('fill', warm ? '#e8b23a' : '#8fd6cc');
    flap.setAttribute('transform', 'translate(0 ' + (clamp(c.air, 0, 1) * 5).toFixed(2) + ')');

    // Parts index: current part, and the one about to move.
    partsNav.style.setProperty('--parts-o', c.parts);
    partsNav.style.visibility = c.parts ? 'visible' : 'hidden';
    if (c.step !== lastStep || c.next !== lastNext) {
      lastStep = c.step; lastNext = c.next;
      gotos.forEach(function (g, gi) {
        if (gi === c.step) g.setAttribute('aria-current', 'step'); else g.removeAttribute('aria-current');
        if (gi === c.next) g.setAttribute('data-next', ''); else g.removeAttribute('data-next');
      });
    }

    // Copper line.
    pipe.style.setProperty('--pipe', pipeProgress().toFixed(4));

    // The small unit at the close switches on as the coupon arrives.
    var cp = c.close;
    if (!reduce) miniOff += dt * (8 + cp * 22);
    for (var m = 0; m < miniAir.length; m++) {
      miniAir[m].style.strokeDashoffset = (-miniOff - m * 4).toFixed(2);
      miniAir[m].style.opacity = sstep((cp - 0.2) / 0.5).toFixed(3);
    }
    var md = Math.round(28 - 6 * sstep((cp - 0.15) / 0.75));
    if (miniTemp.textContent !== md + '°') miniTemp.textContent = md + '°';
    miniFlap.setAttribute('transform', 'translate(0 ' + (sstep(cp) * 3).toFixed(2) + ')');

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // Parts index jumps to that service's moment in the teardown.
  gotos.forEach(function (g) {
    g.addEventListener('click', function () {
      var i = +g.getAttribute('data-goto');
      var top = tear.getBoundingClientRect().top + scrollY;
      var travel = tear.offsetHeight - innerHeight;
      var to = top + (S0 + i * SW + 0.065) * travel;
      if (lenis) lenis.scrollTo(to, { duration: 1.6, easing: function (x) { return 1 - Math.pow(1 - x, 4); } });
      else scrollTo({ top: to, behavior: 'auto' });
    });
  });

  // ---- coupons -> WhatsApp -------------------------------------------------
  $$('.js-lead').forEach(function (form) {
    var status = $('.coupon__status', form);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = form.elements.nome, tel = form.elements.telefone, ok = true;
      [nome, tel].forEach(function (f) {
        var bad = !f.value.trim() || (f === tel && f.value.replace(/\D/g, '').length < 10);
        f.setAttribute('aria-invalid', bad ? 'true' : 'false');
        if (bad && ok) { f.focus(); ok = false; }
      });
      if (!ok) { status.textContent = 'Preencha nome e WhatsApp com DDD.'; return; }

      var get = function (n) { var f = form.elements[n]; return f && f.value ? f.value.trim() : ''; };
      var msg = 'Olá, Clima Certo! Quero agendar uma visita.\n' +
        'Nome: ' + get('nome') + '\n' +
        'WhatsApp: ' + get('telefone') + '\n' +
        'Serviço: ' + get('servico') + '\n' +
        (get('bairro') ? 'Bairro/cidade: ' + get('bairro') + '\n' : '') +
        (get('mensagem') ? 'O que está acontecendo: ' + get('mensagem') : '');

      if (!WHATSAPP) {
        status.textContent = 'Pedido pronto. Falta configurar o número de WhatsApp da empresa para enviar.';
        return;
      }
      // A real link the visitor taps: popups are blocked in many embeds and in-app browsers.
      status.textContent = 'Pedido pronto. ';
      var go = document.createElement('a');
      go.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);
      go.target = '_blank'; go.rel = 'noopener';
      go.textContent = 'Enviar pelo WhatsApp';
      status.appendChild(go);
      go.focus();
    });
  });
})();
