document.addEventListener('DOMContentLoaded',function(){
  // teaser play button
  var v=document.getElementById('teaser'),b=document.getElementById('teaser-play');
  if(v&&b){b.addEventListener('click',function(){v.play();});v.addEventListener('play',function(){b.style.display='none';});v.addEventListener('pause',function(){b.style.display='flex';});}

  // generic tabs: .tabs[data-group] buttons with data-target -> .pane[data-group][data-id]
  document.querySelectorAll('.tabs[data-group]').forEach(function(t){
    var g=t.dataset.group;
    t.querySelectorAll('.tab-btn').forEach(function(btn){btn.addEventListener('click',function(){
      t.querySelectorAll('.tab-btn').forEach(function(x){x.classList.remove('active');});btn.classList.add('active');
      document.querySelectorAll('.pane[data-group="'+g+'"]').forEach(function(p){var on=p.dataset.id===btn.dataset.target;p.classList.toggle('active',on);if(on)loadVideos(p);});
    });});
  });

  // method step pills
  document.querySelectorAll('.pills[data-group]').forEach(function(t){
    var g=t.dataset.group;
    t.querySelectorAll('.pill').forEach(function(btn){btn.addEventListener('click',function(){
      t.querySelectorAll('.pill').forEach(function(x){x.classList.remove('active');});btn.classList.add('active');
      document.querySelectorAll('.step-panel[data-group="'+g+'"]').forEach(function(p){var on=p.dataset.id===btn.dataset.target;p.classList.toggle('active',on);if(on)loadVideos(p);});
    });});
  });

  // head/wrist toggles: .toggle[data-group] buttons data-view; videos with data-head / data-wrist
  document.querySelectorAll('.toggle[data-group]').forEach(function(t){
    var g=t.dataset.group;
    t.querySelectorAll('button').forEach(function(btn){btn.addEventListener('click',function(){
      t.querySelectorAll('button').forEach(function(x){x.classList.remove('active');});btn.classList.add('active');
      document.querySelectorAll('video[data-view-group="'+g+'"]').forEach(function(vd){
        var src=vd.dataset[btn.dataset.view];if(!src)return;if(vd.dataset.src){vd.dataset.src=src;return;}if(vd.getAttribute('src')!==src){vd.setAttribute('src',src);vd.load();vd.play().catch(function(){});}
      });
    });});
  });

  // lazy load videos (data-src) when visible
  function loadVideos(root){root.querySelectorAll('video[data-src]').forEach(function(vd){vd.setAttribute('src',vd.dataset.src);vd.removeAttribute('data-src');vd.play().catch(function(){});});}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var vd=e.target;if(vd.dataset.src){vd.setAttribute('src',vd.dataset.src);vd.removeAttribute('data-src');vd.play().catch(function(){});}io.unobserve(vd);}});},{rootMargin:'300px'});
  document.querySelectorAll('video[data-src]').forEach(function(vd){io.observe(vd);});

  // copy bibtex
  var c=document.getElementById('copy-bib');if(c){c.addEventListener('click',function(){navigator.clipboard.writeText(document.getElementById('bibtex').innerText).then(function(){c.textContent='Copied';setTimeout(function(){c.textContent='Copy';},1500);});});}

  if(window.AOS){AOS.init({duration:600,once:true,offset:60});}
});
