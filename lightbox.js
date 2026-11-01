// Photo pop-up: tap a photo on the Food plan page to make it big; tap anywhere (or press Esc) to close.
(function () {
  var box = document.createElement('div');
  box.className = 'lb';
  box.innerHTML = '<img alt=""><div class="lb-cap"></div><div class="lb-x">Tap anywhere to close</div>';
  document.body.appendChild(box);
  var big = box.querySelector('img'), cap = box.querySelector('.lb-cap');
  function openPhoto(link) {
    var thumb = link.querySelector('img');
    big.src = link.getAttribute('href');
    big.alt = thumb ? thumb.alt : '';
    cap.textContent = big.alt;
    box.classList.add('on');
    document.body.classList.add('lb-open');
  }
  function closePhoto() {
    box.classList.remove('on');
    document.body.classList.remove('lb-open');
    big.removeAttribute('src');
  }
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('.pc-strip a') : null;
    if (box.classList.contains('on')) { closePhoto(); e.preventDefault(); return; }
    if (link) { e.preventDefault(); openPhoto(link); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePhoto(); });
})();
