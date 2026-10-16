export const sourceUrl='https://drive.google.com/drive/folders/1Egm--2MVPK7iXvqDDVLZUzy-BuIWn7Jw';
export const padletUrl='https://padlet.com/gottkf12087/1-s024ju3gdi9zhdnk81i8';
export const students=[
 {id:'S01',class:'1-1',number:'10101',note:'편성 확인',extra:true},
 {id:'S02',class:'1-2',number:'10215',note:'편성표의 첫 번째 행'},
 {id:'S03',class:'1-2',number:'10215',note:'편성표의 두 번째 행'},
 {id:'S04',class:'1-6',number:'',note:'전입생'},
 {id:'S05',class:'1-4',number:'10401',note:'담임 연락 자료 확인',extra:true},
 {id:'S06',class:'1-7',number:'10701',note:'편성 확인',extra:true}
];
export const devices=[
 {id:'GH-0001',serial:'SIM-0001',mdm:'SIM-0001',state:'외관 이상 없음',origin:'통합유지관리'},
 {id:'GH-0002',serial:'SIM-0002',mdm:'SIM-0002',state:'외관 이상 없음',origin:'통합유지관리'},
 {id:'GH-0003',serial:'SIM-0003',mdm:'SIM-0003',state:'외관 이상 없음',origin:'통합유지관리'},
 {id:'GH-0137',serial:'SIM-0137',mdm:'SIM-9137',state:'외관 이상 없음',origin:'통합유지관리'},
 {id:'GH-0201',serial:'SIM-0201',mdm:'SIM-0201',state:'화면 파손',origin:'통합유지관리'},
 {id:'LOCAL-01~12',serial:'미확인',mdm:'조회 결과 없음',state:'검수 기록 미제공',origin:'학교 자체구매 / 관리 라벨 없음'}
];
export const cases=[
 ...students.map(s=>({id:s.id,label:`학생 ${s.id}`,sub:`${s.class} · 학번 ${s.number||'미기재'}`,kind:'student'})),
 {id:'D137',label:'기기 GH-0137',sub:'납품 검수 및 단말현황 대조',kind:'device'},
 {id:'D201',label:'기기 GH-0201',sub:'납품 검수 기록 확인',kind:'device'},
 {id:'LOCAL',label:'자체구매 기기 12대',sub:'라벨 및 등록 경로 확인',kind:'device'}
];
export const decisions=['배정','보류','등록 후 배정'];
export const reasons=['자료 일치','학번 중복','학번 미확정','전출 예정','일련번호 불일치','화면 파손','학교 관리 미등록'];
export const owners=['모둠 교차 확인','교무·나이스 담당','담임·기기 담당 교사','기기 담당 교사','거점센터·유지관리 지원','담당 교사(등록 승인)'];
export const expected={S01:['배정','자료 일치','모둠 교차 확인'],S02:['보류','학번 중복','교무·나이스 담당'],S03:['보류','학번 중복','교무·나이스 담당'],S04:['보류','학번 미확정','교무·나이스 담당'],S05:['보류','전출 예정','담임·기기 담당 교사'],S06:['배정','자료 일치','모둠 교차 확인'],D137:['보류','일련번호 불일치','기기 담당 교사'],D201:['보류','화면 파손','거점센터·유지관리 지원'],LOCAL:['등록 후 배정','학교 관리 미등록','담당 교사(등록 승인)']};
export function blank(){return {version:1,group:'',records:{},groups:Array.from({length:7},()=>({mdm:'',ou:''})),registration:{approver:'',portal:'',after:''},deploy:{when:'',target:'',verify:'',owner:'',checks:[]},timer:{left:900,end:0}};}
export function recordComplete(r,c){return !!(r?.decision&&r.reason&&r.owner&&r.evidence?.trim()&&((r.decision!=='배정'||c.kind!=='student')||r.device));}
export function completeness(s){const missing=[]; if(!s.group.trim())missing.push('모둠 번호'); for(const c of cases)if(!recordComplete(s.records[c.id],c))missing.push(c.label+' 처리 기록'); s.groups.forEach((g,i)=>{if(!g.mdm.trim()||!g.ou.trim())missing.push(`1-${i+1}반 그룹·OU 이름`);});if(!s.registration.approver||!s.registration.portal||!s.registration.after.trim())missing.push('자체구매 등록 계획');if(!s.deploy.when||!s.deploy.target||!s.deploy.verify||!s.deploy.owner.trim()||s.deploy.checks.length<3)missing.push('배포 및 표본 확인 계획');return missing;}
export function compare(s){const issues=[];for(const c of cases){const r=s.records[c.id];if(!recordComplete(r,c)){issues.push(c.label+': 처리 기록을 완성하십시오.');continue;} const e=expected[c.id]; if(r.decision!==e[0]||r.reason!==e[1]||r.owner!==e[2])issues.push(`${c.label}: 교안 기입 예는 '${e[0]} / ${e[1]} / ${e[2]}'입니다. 근거 자료를 다시 확인하십시오.`);if(r.decision==='배정'&&c.kind==='student'){const d=devices.find(d=>d.id===r.device);if(!d||d.serial!==d.mdm||d.state!=='외관 이상 없음')issues.push(`${c.label}: 선택한 ${r.device}는 식별·상태·등록 확인이 끝나지 않았습니다.`);}}
const assigned=cases.filter(c=>s.records[c.id]?.decision==='배정'&&s.records[c.id]?.device);let seen=new Set();for(const c of assigned){const id=s.records[c.id].device;if(seen.has(id))issues.push(`${id}: 한 기기가 여러 학생에게 중복 배정되었습니다.`);seen.add(id);}
s.groups.forEach((g,i)=>{const name=`2026-1-${i+1}`;if(g.mdm.trim()!==name||g.ou.trim()!==name)issues.push(`1-${i+1}반: 이번 교안의 그룹·OU 이름 규칙은 ${name}입니다.`);});
if(s.registration.approver!=='학교 담당 교사 승인'||s.registration.portal!=='경기도 MDM')issues.push('자체구매 12대: 학교 담당 교사의 승인·권한에 따라 경기도 MDM 등록 경로를 확인합니다.');
if(!s.registration.after.trim())issues.push('등록 후 확인할 항목을 적으십시오. 단말현황과 반 그룹 편입 확인이 필요합니다.');
if(s.deploy.when!=='3월 3일 방과 후'||s.deploy.target!=='1학년 해당 반 그룹'||s.deploy.verify!=='3월 4일 수업 전')issues.push('배포 계획: 교안은 3월 3일 방과 후 해당 반 그룹에 배포하고 3월 4일 수업 전 표본을 확인합니다.');
if(!s.deploy.owner.trim()||!['아이콘','실행','로그인'].every(x=>s.deploy.checks.includes(x)))issues.push('표본 확인 담당과 아이콘·실행·로그인 확인을 모두 기록하십시오.'); return issues;}
export function summary(s){const missing=completeness(s); const lines=[`4차시 기기 배정 실습 / ${s.group||'미기재'}조`, `작성 상태: ${missing.length?'미완성 ('+missing.length+'개 항목 남음)':'필수 입력 완료 · 근거는 모둠 간 검토 필요'}`,'','[배정·보류 기록]'];for(const c of cases){const r=s.records[c.id]||{};lines.push(`${c.label} | ${r.decision||'미입력'} | ${r.device||'-'} | ${r.reason||'-'} | ${r.owner||'-'}\n근거: ${r.evidence||'미입력'}`);}lines.push('','[그룹·OU]');s.groups.forEach((g,i)=>lines.push(`1-${i+1}반 | MDM ${g.mdm||'미입력'} | Google OU ${g.ou||'미입력'}`));lines.push('','[자체구매 12대 등록]',`${s.registration.approver||'미입력'} / ${s.registration.portal||'미입력'} / 등록 후 ${s.registration.after||'미입력'}`,'','[배포 계획]',`${s.deploy.when||'미입력'} / ${s.deploy.target||'미입력'}`,`표본: ${s.deploy.verify||'미입력'} / 담당 ${s.deploy.owner||'미입력'} / ${s.deploy.checks.join('·')||'확인 항목 미입력'}`,'','교안 가상 사례 기반의 연수 보조 실습. SIM·S·LOCAL 코드는 연습용입니다. 실제 관리시스템에는 반영되지 않습니다.');return lines.join('\n');}
export function csv(s){const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,"'$&").replaceAll('"','""')+'"';return '\ufeff'+[['대상','학급·식별 정보','처리','배정 기기','사유','확인 담당','근거'],...cases.map(c=>{const r=s.records[c.id]||{};return [c.label,c.sub,r.decision,r.device,r.reason,r.owner,r.evidence]})].map(row=>row.map(cell).join(',')).join('\r\n');}
