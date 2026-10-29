(function(){
var P="trip-2026:";
function get(k){try{return JSON.parse(localStorage.getItem(P+k)||"null")}catch(e){return null}}
function set(k,v){try{localStorage.setItem(P+k,JSON.stringify(v))}catch(e){}}
var day=document.body.getAttribute("data-day");
if(day){
  var boxes=[].slice.call(document.querySelectorAll("input[data-id]"));
  var done=get("done-"+day)||[];
  var chip=document.getElementById("chip");
  var upd=function(){var n=0;boxes.forEach(function(b){if(b.checked)n++;b.closest(".r").classList.toggle("done",b.checked)});if(chip)chip.textContent=n+" of "+boxes.length+" done"};
  boxes.forEach(function(b){b.checked=done.indexOf(b.getAttribute("data-id"))>-1;b.addEventListener("change",function(){set("done-"+day,boxes.filter(function(x){return x.checked}).map(function(x){return x.getAttribute("data-id")}));upd()})});
  var ta=document.querySelector("textarea[data-note]");
  if(ta){ta.value=get("note-"+day)||"";ta.addEventListener("input",function(){set("note-"+day,ta.value)})}
  upd();
}
[].forEach.call(document.querySelectorAll("[data-prog]"),function(el){var d=get("done-"+el.getAttribute("data-prog"))||[];el.textContent=d.length+" of "+el.getAttribute("data-total")+" done"});
})();
