import * as THREE from 'three';

export const assetNumbers={ipad:'IP-A001',galaxy:'TB-B002',chromebook:'CB-C003',windows:'NB-D004'};
const names={ipad:'iPad',galaxy:'Galaxy Tab',chromebook:'Chromebook',windows:'Windows'};

function printTexture(draw,width=1024,height=512){
 const c=document.createElement('canvas');c.width=width;c.height=height;
 draw(c.getContext('2d'),width,height);
 const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=8;
 return texture;
}
function stickerMaterial(id,secondary=false){
 return new THREE.MeshStandardMaterial({roughness:.9,map:printTexture((q,w,h)=>{
  q.fillStyle='#fffdf4';q.fillRect(0,0,w,h);q.strokeStyle='#285c59';q.lineWidth=14;q.strokeRect(10,10,w-20,h-20);
  q.fillStyle='#285c59';q.fillRect(17,17,w-34,99);q.fillStyle='#ffffff';q.font='bold 43px "Malgun Gothic",sans-serif';q.fillText(secondary?'기기 본체 · 교육용 예시':'경기희망중 · 교육용 예시',42,82);
  q.fillStyle='#183d3b';q.font='bold 118px Arial,sans-serif';q.fillText(assetNumbers[id],40,264);
  q.fillStyle='#526363';q.font='36px "Malgun Gothic",sans-serif';q.fillText(names[id]+'   /   자산번호',43,325);
  let x=45;for(let i=0;i<91;i++){const bw=[3,5,2,8,4][i%5];if((i*7)%11>3){q.fillStyle='#183d3b';q.fillRect(x,365,bw,83);}x+=9;}
  q.font='26px "Malgun Gothic",sans-serif';q.fillStyle='#526363';q.fillText('실제 학생 정보 없음',650,488);
 })});
}
function plane(parent,id,w,h,position,rotation,secondary=false){
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),stickerMaterial(id,secondary));
 mesh.name=secondary?'Asset_sticker_bottom_'+assetNumbers[id]:'Asset_sticker_back_'+assetNumbers[id];
 mesh.position.set(...position);mesh.rotation.set(...rotation);mesh.userData={deviceId:id,assetNumber:assetNumbers[id],labelSurface:secondary?'bottom':'back'};parent.add(mesh);return mesh;
}

// All placement is calculated before world positioning. Laptop labels inherit
// the existing lid hinge rather than floating on a world-aligned bounding box.
export function addAssetStickers(models){
 const placements={};
 for(const[id,g]of Object.entries(models)){
  g.updateMatrixWorld(true);
  if(id==='ipad'||id==='galaxy'){
   const b=new THREE.Box3().setFromObject(g),s=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3());
   const width=s.x*.45,height=width*.5;
   plane(g,id,width,height,[c.x,b.min.y+s.y*.33,b.min.z-.00045],[0,Math.PI,0]);
   placements[id]={surface:'rear',width,height,z:b.min.z-.00045};
  }else{
   const lid=g.getObjectByName('lid_outer_shell');lid.geometry.computeBoundingBox();const b=lid.geometry.boundingBox,s=b.getSize(new THREE.Vector3());
   const width=s.x*.42,height=width*.5;
   plane(lid,id,width,height,[0,-s.y*.12,b.min.z-.00045],[0,Math.PI,0]);
   const base=g.getObjectByName('rounded_base');base.geometry.computeBoundingBox();const bb=base.geometry.boundingBox;
   plane(base,id,width*.94,height*.94,[0,bb.min.y-.00045,.025],[Math.PI/2,0,Math.PI],true);
   placements[id]={surface:'rear lid and bottom',width,height,hinge:'screen_lid_hinge'};
  }
 }
 return placements;
}

export function makeOpenLedger(){
 const group=new THREE.Group();group.name='Open_device_asset_ledger';
 const mat=(c)=>new THREE.MeshStandardMaterial({color:c,roughness:.88});
 const box=(w,h,d,x,y,z,m)=>{const a=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);a.position.set(x,y,z);a.castShadow=a.receiveShadow=true;group.add(a);return a;};
 const cover=mat('#3d746d'),paper=mat('#fff9e9');
 box(.51,.012,.35,0,.006,0,cover);box(.242,.014,.329,-.127,.018,0,paper);box(.242,.014,.329,.127,.018,0,paper);
 const ruled=(right)=>printTexture((q,w,h)=>{
  q.fillStyle='#fff9e9';q.fillRect(0,0,w,h);q.fillStyle='#2e625b';q.fillRect(34,45,w-68,100);q.fillStyle='#ffffff';q.font='bold 45px "Malgun Gothic",sans-serif';q.fillText(right?'기기 배정 · 상태 기록':'학교 기기 관리대장',57,111);
  q.fillStyle='#687b73';q.font='29px "Malgun Gothic",sans-serif';q.fillText('교육용 가상 대장 · 실제 학생 정보 없음',39,199);
  const rows=right?['기기 위치    :  지원실 작업대','배정 상태    :  확인 전','보류 사유    :  함께 확인','대여·수리    :  연결 번호 확인','부속품        :  충전기 / 케이스']:['IP-A001       iPad','TB-B002       Galaxy Tab','CB-C003       Chromebook','NB-D004       Windows','대장 ↔ 스티커 ↔ 관리 화면'];
  rows.forEach((line,i)=>{const y=280+i*110;q.strokeStyle='#c8d3bc';q.lineWidth=3;q.beginPath();q.moveTo(35,y+30);q.lineTo(w-35,y+30);q.stroke();q.fillStyle=i===4?'#3e8174':'#2f4c46';q.font=(i===4?'bold 28':'31')+'px "Malgun Gothic",sans-serif';q.fillText(line,40,y);});
  q.fillStyle='#8a9b88';q.font='26px Arial';q.fillText(right?'02':'01',w-70,h-40);
 },768,1024);
 for(const side of[-1,1]){const page=new THREE.Mesh(new THREE.PlaneGeometry(.24,.327),new THREE.MeshStandardMaterial({map:ruled(side===1),roughness:.95}));page.rotation.x=-Math.PI/2;page.position.set(side*.127,.0252,0);page.name='Ledger_page_'+(side===1?'right':'left');group.add(page);}
 const spine=new THREE.Mesh(new THREE.CylinderGeometry(.009,.009,.34,12),cover);spine.rotation.x=Math.PI/2;spine.position.set(0,.018,0);group.add(spine);
 const pen=new THREE.Mesh(new THREE.CylinderGeometry(.004,.004,.24,10),mat('#d9a75f'));pen.rotation.x=Math.PI/2;pen.rotation.z=.12;pen.position.set(.23,.034,.012);group.add(pen);
 group.traverse(n=>{if(n.isMesh)n.userData.isLedger=true;});
 return group;
}
