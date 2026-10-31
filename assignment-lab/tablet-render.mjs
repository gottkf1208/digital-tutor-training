// Reuse the original workshop tablet asset; render once for all device thumbnails.
const pictures={};
async function renderPicture(kind){
  const THREE=await import('./vendor/three.module.js');
  const {GLTFLoader}=await import('./vendor/GLTFLoader.js');
  const gltf=await new GLTFLoader().loadAsync(new URL('./models/'+kind+'.glb',import.meta.url).href);
  const scene=new THREE.Scene(),model=gltf.scene;
  if(kind==='ipad')model.rotation.x+=Math.PI/2;
  const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3());
  model.position.sub(center);scene.add(model);
  scene.add(new THREE.HemisphereLight(0xffffff,0x6d8194,3));
  const light=new THREE.DirectionalLight(0xffffff,4);light.position.set(2,3,5);scene.add(light);
  const span=Math.max(size.x,size.y)*.68,camera=new THREE.OrthographicCamera(-span,span,span*.75,-span*.75,.001,100);
  camera.position.set(size.x*.25,size.y*.4,Math.max(size.x,size.y)*3);camera.lookAt(0,0,0);
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});
  renderer.setSize(640,480);renderer.setClearColor(0x000000,0);renderer.render(scene,camera);
  const url=renderer.domElement.toDataURL('image/png');
  renderer.dispose();model.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material]){m.map?.dispose();m.dispose();}}});return url;
}
export function paintTablets(){
 for(const kind of ['galaxy','ipad','chromebook']){
 pictures[kind]??=renderPicture(kind);
 pictures[kind].then(src=>document.querySelectorAll('[data-tablet="'+kind+'"]').forEach(img=>{img.src=src;})).catch(()=>document.querySelectorAll('[data-tablet="'+kind+'"]').forEach(img=>{img.alt+=' · 이미지 로딩 불가';}));
 }
}
