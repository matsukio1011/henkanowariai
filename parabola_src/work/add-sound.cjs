const fs=require('fs');let s=fs.readFileSync('dist/app.js','utf8');
s=s.replace('const gcd=',`let nextTimer=null,audioContext=null;
function cancelAutoNext(){if(nextTimer!==null){clearTimeout(nextTimer);nextTimer=null;} $('next').innerHTML='次の問題 <span>→</span>';}
async function playResultSound(good){try{const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;audioContext??=new Audio();if(audioContext.state==='suspended')await audioContext.resume();const now=audioContext.currentTime;const notes=good?[[660,0,.13],[880,.14,.22]]:[[220,0,.18],[165,.19,.25]];for(const [frequency,offset,duration] of notes){const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type=good?'sine':'triangle';osc.frequency.value=frequency;gain.gain.setValueAtTime(0,now+offset);gain.gain.linearRampToValueAtTime(.16,now+offset+.015);gain.gain.exponentialRampToValueAtTime(.001,now+offset+duration);osc.connect(gain);gain.connect(audioContext.destination);osc.start(now+offset);osc.stop(now+offset+duration+.02);osc.onended=()=>{osc.disconnect();gain.disconnect();};}}catch{/* Audio failure must never interrupt the quiz. */}}
const gcd=`);
s=s.replace('function begin(params){let','function begin(params){cancelAutoNext();let');
s=s.replace('if(good)hits++;','if(good)hits++;void playResultSound(good);');
s=s.replace("'正解！ 両方できたな！'","'正解！ 1.5秒後に次の問題だ！'");
const target="$('score').textContent='正解 '+hits+' 問 · 回答 '+attempts+' 問';}\nfunction draw";
if(!s.includes(target))throw Error('Answer end not found');
s=s.replace(target,"$('score').textContent='正解 '+hits+' 問 · 回答 '+attempts+' 問';if(good){$('next').innerHTML='次の問題へ進む… <span>→</span>';nextTimer=setTimeout(()=>{nextTimer=null;begin();},1500);}}\nfunction draw");
s=s.replace("$('edit').onclick=()=>{","$('edit').onclick=()=>{cancelAutoNext();");
fs.writeFileSync('dist/app.js',s);
const html=fs.readFileSync('dist/index.html','utf8').replace('<link rel="stylesheet" href="style.css">','<style>'+fs.readFileSync('dist/style.css','utf8')+'</style>').replace('<script src="app.js"></script>','<script>'+s+'</script>');fs.writeFileSync('outputs/放物線の面積道場.html',html);
