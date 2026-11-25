var icdCache = null;

function loadICD10(done) {
 if (icdCache) { done(icdCache); return; }
 var xhr = new XMLHttpRequest;
xhr.open("GET", "icd10cm_codes_2027.txt", true);
 xhr.onload = function (ev) {
 var lines = xhr.responseText.split("\n");
 var out = new Array;
 for (var i = 0; i < lines.length; i++) {
 var m = /^\s*(\S+)\s+(.+?)\s*$/.exec(lines[i]);
 if (m) {
 var cd = m[1];
 if (cd.length > 3) { cd = cd.slice(0, 3) + "." + cd.slice(3); }
 out.push([cd, m[2]]);
 }
 }
 icdCache = out;
 done(out);
 };
 xhr.send(null);
}