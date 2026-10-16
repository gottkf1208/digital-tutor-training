export function remaining(t,now=Date.now()){return Math.max(0,t.running?t.deadline-now:t.left);}
export function fresh(minutes){return {left:minutes*60000,running:false,deadline:null};}
export function start(t,now=Date.now()){const left=remaining(t,now);return {left,running:left>0,deadline:left>0?now+left:null};}
export function pause(t,now=Date.now()){return {left:remaining(t,now),running:false,deadline:null};}
export function extend(t,ms,now=Date.now()){const left=Math.max(0,remaining(t,now)+ms);return {left,running:t.running&&left>0,deadline:t.running&&left>0?now+left:null};}
export function restore(t,minutes,now=Date.now()){if(!t||!Number.isFinite(t.left)||t.left<0||typeof t.running!=='boolean'||(t.running&&!Number.isFinite(t.deadline)))return fresh(minutes);return remaining(t,now)===0?fresh(0):t;}
export function format(ms){const s=Math.ceil(ms/1000);return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;}
