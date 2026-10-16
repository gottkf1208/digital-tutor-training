import * as THREE from 'three';
import {GLTFLoader} from './vendor/GLTFLoader.js';
import {RoomEnvironment} from './vendor/RoomEnvironment.js';
import {makeOpenLedger} from './device-labels.js';
import {makeCart,makeWorkbench} from './model-factory.js';

const V=(a)=>new THREE.Vector3(...a);
export async function createDayWorld(canvas,onStatus){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setClearColor('#e3eadf');
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.84;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
 const scene=new THREE.Scene();const env=new THREE.PMREMGenerator(renderer);scene.environment=env.fromScene(new RoomEnvironment(),.05).texture;env.dispose();
 scene.environmentIntensity=.45;
 scene.add(new THREE.HemisphereLight('#fff9eb','#a9b89d',.85));const sunlight=new THREE.DirectionalLight('#fff1d4',1.6);sunlight.position.set(-3,7,5);sunlight.castShadow=true;sunlight.shadow.mapSize.set(2048,2048);Object.assign(sunlight.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.1,far:20});sunlight.shadow.bias=-.0003;sunlight.shadow.normalBias=.015;scene.add(sunlight);
 const camera=new THREE.PerspectiveCamera(38,1,.01,60);const roomGroup=new THREE.Group(),focusGroup=new THREE.Group();scene.add(roomGroup,focusGroup);focusGroup.visible=false;
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(80,80),new THREE.MeshStandardMaterial({color:'#e3eadf',roughness:1}));floor.rotation.x=-Math.PI/2;floor.position.y=-.16;floor.receiveShadow=true;scene.add(floor);
 const loader=new GLTFLoader();
 const loaded=await Promise.all([loader.loadAsync('./classroom-received.glb'),loader.loadAsync('./ipad.glb'),loader.loadAsync('./models/galaxy.glb'),loader.loadAsync('./models/chromebook.glb'),loader.loadAsync('./models/windows.glb')]);
 const room=loaded[0].scene.getObjectByName('Classroom_GAME');if(!room)throw Error('교실 모델을 읽지 못했습니다.');room.scale.setScalar(.68866573);room.position.set(.0241033,-.016528,0);roomGroup.add(room);
 const originals={};
 let ipad=loaded[1].scene.getObjectByName('Tablet_Mint_GAME').clone(true);ipad.rotation.x=Math.PI/2;let b=new THREE.Box3().setFromObject(ipad),c=b.getCenter(new THREE.Vector3());ipad.position.add(V([-c.x,-b.min.y,-c.z]));originals.ipad=new THREE.Group();originals.ipad.add(ipad);
 originals.galaxy=loaded[2].scene;originals.chromebook=loaded[3].scene;originals.windows=loaded[4].scene;
 const bench=makeWorkbench();bench.scale.set(2.8,1,1);bench.position.set(0,0,1.8);roomGroup.add(bench);
 Object.entries(originals).forEach(([id,model],i)=>{const m=model.clone(true);m.position.set(-1.02+i*.68,.745,1.8);roomGroup.add(m);});
 const cart=makeCart();cart.position.set(-1.8,0,1.5);cart.rotation.y=.4;roomGroup.add(cart);
 const ledgerRoom=makeOpenLedger();ledgerRoom.scale.setScalar(.6);ledgerRoom.position.set(-.35,.746,1.72);roomGroup.add(ledgerRoom);
 // Preserve the user's classroom and iPad; close-up objects are copies of those assets.
 const plinth=new THREE.Mesh(new THREE.CylinderGeometry(1.65,1.7,.09,96),new THREE.MeshStandardMaterial({color:'#f5f3df',roughness:.92}));plinth.position.y=-.03;plinth.receiveShadow=true;plinth.castShadow=true;focusGroup.add(plinth);
 const hero=new THREE.Group();focusGroup.add(hero);const ledger=makeOpenLedger();ledger.scale.setScalar(2.1);ledger.position.set(.63,.025,.2);ledger.rotation.y=-.2;focusGroup.add(ledger);
 for(const side of ['left','right']){const page=ledger.getObjectByName('Ledger_page_'+side),c=document.createElement('canvas');c.width=768;c.height=1024;const p=c.getContext('2d');p.fillStyle='#fff9e9';p.fillRect(0,0,768,1024);p.fillStyle='#355d46';p.fillRect(35,45,698,100);p.fillStyle='#fff';p.font='bold 44px sans-serif';p.fillText(side==='left'?'기기 배정 관리대장':'확인 요청 · 업무 기록',55,111);const rows=side==='left'?['관리번호    GH-0137','기기 종류   Galaxy Tab','실물 S/N    DEMO-0137-A','MDM S/N   DEMO-0137-B','배정 전, 두 값을 대조해요.']:['확인 결과   일련번호 불일치','배정 상태   보류','다음 조치   대장 · 실물 대조','연결 대상   담당 교사','확인 전 라벨을 바꾸지 않아요.'];rows.forEach((line,i)=>{const y=270+i*133;p.fillStyle=i===4?'#55774b':'#294535';p.font=i===4?'bold 27px sans-serif':'32px sans-serif';p.fillText(line,40,y);p.strokeStyle='#cbd6bd';p.lineWidth=2;p.beginPath();p.moveTo(38,y+30);p.lineTo(730,y+30);p.stroke();});p.fillStyle='#81916f';p.font='24px sans-serif';p.fillText('교육용 가상 기록 · 실제 학생 정보 없음',40,958);const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;page.material=new THREE.MeshStandardMaterial({map:texture,roughness:.95});}
 const display={};for(const[id,original]of Object.entries(originals)){const m=original.clone(true);let box=new THREE.Box3().setFromObject(m),size=box.getSize(new THREE.Vector3());const width=id==='chromebook'?1.55:1.2;const outer=new THREE.Group();m.scale.multiplyScalar(width/size.x);box=new THREE.Box3().setFromObject(m);const mid=box.getCenter(new THREE.Vector3());m.position.add(V([-mid.x,-box.min.y,-mid.z]));outer.add(m);display[id]=outer;}
 // The case identifier is deliberately distinct from the workshop's generic demo labels.
 const stickerCanvas=document.createElement('canvas');stickerCanvas.width=1024;stickerCanvas.height=512;const q=stickerCanvas.getContext('2d');q.fillStyle='#fffdf3';q.fillRect(0,0,1024,512);q.fillStyle='#355d46';q.fillRect(0,0,1024,85);q.fillStyle='#fff';q.font='bold 34px sans-serif';q.fillText('경기희망중 · 교육용 가상 기기',35,58);q.fillStyle='#2b4534';q.font='bold 118px sans-serif';q.fillText('GH-0137',35,236);q.font='36px sans-serif';q.fillText('S/N  DEMO-0137-A',37,309);for(let i=0;i<99;i++){q.fillRect(40+i*9,350,(i%3)+2,90)}
 const st=new THREE.CanvasTexture(stickerCanvas);st.colorSpace=THREE.SRGBColorSpace;const galaxyBounds=new THREE.Box3().setFromObject(display.galaxy);const sticker=new THREE.Mesh(new THREE.PlaneGeometry(.69,.345),new THREE.MeshStandardMaterial({map:st,roughness:.85}));sticker.position.set(0,.32,galaxyBounds.min.z-.004);sticker.rotation.y=Math.PI;display.galaxy.add(sticker);
 scene.traverse(n=>{if(n.isMesh){n.castShadow=true;n.receiveShadow=true;}});floor.castShadow=false;
 let active=null,sceneIndex=-1,reverse=false,paused=false,dirty=true;
 const camFrom=new THREE.Vector3(),camTo=new THREE.Vector3(),lookFrom=new THREE.Vector3(),lookTo=new THREE.Vector3(),lookNow=new THREE.Vector3();let moveStart=0,rotationFrom=0,rotationTo=0;
 camera.position.set(5.1,4.2,6.4);lookNow.set(0,.65,0);camTo.copy(camera.position);lookTo.copy(lookNow);
 function lens(){camera.fov=Math.min(65,38*Math.max(1,(roomGroup.visible?1.4:1.2)/camera.aspect));camera.updateProjectionMatrix();}
 function resize(){const r=canvas.parentElement.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;lens();dirty=true;}
 new ResizeObserver(resize).observe(canvas.parentElement);resize();
 function view(index){sceneIndex=index;reverse=false;roomGroup.visible=index<0||index===3;focusGroup.visible=!roomGroup.visible;lens();hero.clear();active=null;
  let p,t;
  if(roomGroup.visible){p=[5.1,4.2,6.4];t=[0,.65,0];}
  else{const id=['galaxy','ipad','chromebook'][index];active=display[id];hero.add(active);active.position.set(index===0?-.57:0,.025,index===0?-.05:0);rotationTo=index===0?Math.PI-.24:index===1?-.17:-.25;active.rotation.y=rotationTo;ledger.visible=index===0;p=index===0?[1.1,2.3,3.7]:[1.55,1.7,3.6];t=[0,-.12,0];}
  camFrom.copy(camera.position);lookFrom.copy(lookNow);camTo.fromArray(p);lookTo.fromArray(t);moveStart=performance.now();rotationFrom=rotationTo;
 }
 function turn(){if(!active)return;reverse=!reverse;rotationFrom=active.rotation.y;rotationTo+=reverse?Math.PI:-Math.PI;moveStart=performance.now();camFrom.copy(camera.position);lookFrom.copy(lookNow);}
 function detail(){if(!active)return;camFrom.copy(camera.position);lookFrom.copy(lookNow);rotationFrom=active.rotation.y;moveStart=performance.now();if(sceneIndex===0){camTo.set(.25,2.8,3.2);lookTo.set(.15,-.08,0);}else{camTo.set(-.6,1.2,3.25);lookTo.set(0,-.05,0);}}
 function render(now){requestAnimationFrame(render);if(!dirty&&now-moveStart>1450)return;const r=reduced.matches?1:Math.min(1,(now-moveStart)/1300),e=1-Math.pow(1-r,3);camera.position.lerpVectors(camFrom,camTo,e);lookNow.lerpVectors(lookFrom,lookTo,e);camera.lookAt(lookNow);if(active)active.rotation.y=THREE.MathUtils.lerp(rotationFrom,rotationTo,e);renderer.render(scene,camera);dirty=false;}
 camFrom.copy(camera.position);lookFrom.copy(lookNow);view(-1);requestAnimationFrame(render);onStatus('ready');
 return{view,turn,detail,setPaused(v){paused=v;},dispose(){renderer.dispose();}};
}
