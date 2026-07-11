/* =========================================================
   いいねボタン。index.html と history.html で共有しています。

   使い方: 置きたい場所に次の1行を書き、このファイルを読み込むだけ。
     <div data-like="index" data-like-label="この記事はいかがでしたか？"></div>

   保存先はその人のブラウザ（localStorage）です。サーバーを持たないため
   訪問者全体の合計件数は表示できません。押された回数は Google Analytics に
   'like' イベントとして送っているので、集計は GA 側で確認できます。
   ========================================================= */
(function () {
  'use strict';

  var STORE_PREFIX = 'usagisan:like:';

  /* ---------- スタイル（ページ側の CSS 変数をそのまま使う） ---------- */
  var css = [
    '.like-box{display:flex;flex-direction:column;align-items:center;gap:14px;',
    '  padding:56px 0;border-top:1px solid var(--line);text-align:center;}',
    '.like-box .like-lead{margin:0;font-size:.95rem;color:var(--muted);}',
    '.like-btn{',
    '  display:inline-flex;align-items:center;gap:10px;cursor:pointer;',
    '  font-family:inherit;font-size:.95rem;font-weight:600;color:var(--text);',
    '  background:var(--bg);border:1px solid var(--line);border-radius:999px;',
    '  padding:12px 26px;transition:border-color .2s,transform .15s,background .2s;',
    '}',
    '.like-btn:hover{border-color:var(--text);transform:translateY(-1px);}',
    '.like-btn:active{transform:translateY(0);}',
    '.like-btn:focus-visible{outline:2px solid var(--accent);outline-offset:3px;}',
    '.like-btn .heart{width:19px;height:19px;flex:none;display:block;}',
    '.like-btn .heart path{',
    '  fill:none;stroke:var(--muted);stroke-width:1.8;',
    '  transition:fill .25s ease,stroke .25s ease;',
    '}',
    '.like-btn[aria-pressed="true"]{border-color:var(--accent);background:var(--surface);}',
    '.like-btn[aria-pressed="true"] .heart path{fill:var(--accent);stroke:var(--accent);}',
    '.like-btn[aria-pressed="true"] .like-text{color:var(--accent);}',
    '.like-btn.pop .heart{animation:like-pop .42s ease;}',
    '@keyframes like-pop{',
    '  0%{transform:scale(1);} 30%{transform:scale(1.35);}',
    '  55%{transform:scale(.92);} 100%{transform:scale(1);}',
    '}',
    '.like-note{margin:0;font-size:.76rem;color:var(--muted);}',
    '@media (prefers-reduced-motion: reduce){',
    '  .like-btn,.like-btn.pop .heart{transition:none;animation:none;}',
    '}'
  ].join('');

  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  /* ---------- localStorage（プライベートモード等で落ちても止めない） ---------- */
  function read(key) {
    try { return window.localStorage.getItem(STORE_PREFIX + key) === '1'; }
    catch (e) { return false; }
  }
  function write(key, liked) {
    try {
      if (liked) window.localStorage.setItem(STORE_PREFIX + key, '1');
      else window.localStorage.removeItem(STORE_PREFIX + key);
    } catch (e) { /* 保存できなくてもボタン自体は動かす */ }
  }

  var HEART = '<svg class="heart" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M12 20.5S3.8 15.4 3.8 9.6a4.6 4.6 0 0 1 8.2-2.9 4.6 4.6 0 0 1 8.2 2.9c0 5.8-8.2 10.9-8.2 10.9z"/>' +
    '</svg>';

  function label(liked) { return liked ? 'いいね済み' : 'いいね'; }

  Array.prototype.forEach.call(document.querySelectorAll('[data-like]'), function (slot) {
    var key = slot.getAttribute('data-like');
    var lead = slot.getAttribute('data-like-label') || 'この記事はいかがでしたか？';
    var liked = read(key);

    var box = document.createElement('div');
    box.className = 'like-box';

    var leadEl = document.createElement('p');
    leadEl.className = 'like-lead';
    leadEl.textContent = lead;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'like-btn';
    btn.setAttribute('aria-pressed', liked ? 'true' : 'false');
    btn.innerHTML = HEART + '<span class="like-text">' + label(liked) + '</span>';

    var note = document.createElement('p');
    note.className = 'like-note';
    note.textContent = 'いいねはこのブラウザにのみ保存されます。';

    btn.addEventListener('click', function () {
      liked = !liked;
      write(key, liked);

      btn.setAttribute('aria-pressed', liked ? 'true' : 'false');
      btn.querySelector('.like-text').textContent = label(liked);

      if (liked) {
        btn.classList.remove('pop');
        void btn.offsetWidth;          // アニメーションを再生し直すための reflow
        btn.classList.add('pop');
      }

      if (typeof window.gtag === 'function') {
        window.gtag('event', liked ? 'like' : 'unlike', {
          event_category: 'engagement',
          event_label: key
        });
      }
    });

    box.appendChild(leadEl);
    box.appendChild(btn);
    box.appendChild(note);
    slot.appendChild(box);
  });
})();
