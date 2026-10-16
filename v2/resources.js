export const curriculum='https://drive.google.com/drive/folders/1Egm--2MVPK7iXvqDDVLZUzy-BuIWn7Jw';
export const goeGuide='https://www.goe.go.kr/resource/goe/na/bbs_2459/2025/05/3fba4bc0-b6a3-4e1c-bb32-cf3a11320c71.pdf';
export const glossary=[
 ['계정','서비스에 로그인하는 신분. 기기의 번호가 아니에요.','명단 → 계정 생성 → 학급·권한 확인 → 로그인 확인. 기기 관리 등록은 따로 확인합니다.'],
 ['학급 명부','누가 어느 학급에 속하는지 적은 학생 목록.','계정·학급 편성과 대조하는 자료입니다. 이 앱에는 가상 학생 코드만 쓰세요.'],
 ['관리번호','학교가 붙인 기기 이름표.','뒷면 스티커와 관리대장, 관리 화면의 기기를 연결합니다. 번호만으로 동일 기기를 확정하기 어려우면 시리얼도 대조합니다.'],
 ['시리얼 번호','제조사가 제품 한 대에 부여한 식별번호.','학교 관리번호와 구분합니다. 설정의 기기 정보·제조사 표기로 확인합니다.'],
 ['관리대장','기기의 배정·대여·반납·수리 이력을 남긴 기록.','실물이 돌아왔는지, 충전기가 빠졌는지, 예비기가 아직 대여 중인지 따로 남깁니다.'],
 ['MDM','등록된 단말에 설정·앱 관리 명령을 보내고 상태를 확인하는 시스템.','경기도 스마트단말 관리시스템을 우선 봅니다. 모든 OS가 같은 관리 경로를 쓰는 것은 아닙니다.'],
 ['에이전트','기기에서 관리 시스템과 통신을 돕는 프로그램.','경기도 MDM의 기종별 설치 안내를 확인합니다. 앱 존재와 정상 등록·통신은 각각 확인합니다.'],
 ['기기 등록','단말을 해당 학교·조직의 관리 대상으로 연결하는 과정.','학생 계정으로 로그인 성공했다고 등록까지 끝난 것은 아닙니다.'],
 ['조직·그룹','관리 대상과 정책을 묶는 단위.','학급 편성과 관리 그룹은 시스템에 따라 별도로 연결·확인해야 합니다.'],
 ['정책','관리자가 기기에 적용하도록 정한 설정·규칙.','앱 허용, 기능 제한 등이 포함됩니다. 메뉴가 막히면 고장으로 단정하지 않습니다.'],
 ['앱 배포','관리 시스템에서 앱 설치·적용을 요청하는 일.','명령을 보낸 기록과 기기에서 설치·실행된 결과를 구분합니다.'],
 ['설치 확인','기기에서 앱의 존재와 실행 결과를 확인하는 일.','배포 표시만 보지 말고 전원·통신·설치 상태와 실제 실행을 함께 봅니다.'],
 ['동기화·통신','기기가 서버와 상태·명령을 주고받는 과정.','Wi-Fi 아이콘만으로 MDM 통신까지 정상이라고 단정하지 않습니다. 최근 연결 시각도 확인합니다.'],
 ['OS','기기를 움직이는 기본 소프트웨어.','iPadOS / Android / ChromeOS / Windows. 모델·구입연도·OS 버전을 따로 기록합니다.'],
 ['업데이트','소프트웨어를 새 버전으로 바꾸는 작업.','자동 업데이트 설정과 실제 설치 버전은 다릅니다. 지원 기간·정책·전원·네트워크도 확인합니다.'],
 ['감독·관리 프로필','iPad가 조직 관리에 연결된 상태를 확인하는 단서.','설정의 관리 표시·프로필을 관찰합니다. 프로필 삭제는 실습하지 않습니다.'],
 ['개인·관리 영역','개인용 앱·계정과 조직 관리 범위를 구분하는 표현.','Android의 실제 구성은 학교·등록 방식마다 다릅니다. 모든 기기에 두 영역이 있다고 가정하지 않습니다.'],
 ['Chrome Education Upgrade(CEU)','ChromeOS 기기의 교육용 관리 기능을 이용하기 위한 업그레이드.','크롬북은 Google 관리 콘솔의 기기 등록·정책을 확인합니다. 일반 Chrome 브라우저 로그인과 구분합니다.'],
 ['Apple School Manager(ASM)','학교의 Apple 계정·기기 할당 등을 지원하는 서비스.','MDM과 연계될 수 있지만 ASM 자체와 MDM은 같은 시스템이 아닙니다. 학교 도입 여부를 확인합니다.'],
 ['재시작','기기를 껐다 다시 켜는 일.','데이터를 지우는 초기화와 다릅니다.'],
 ['설정 재설정','선택한 설정을 기본값으로 되돌리는 작업.','네트워크 재설정과 전체 데이터 삭제의 영향을 구분합니다.'],
 ['간편 초기화','경기도 MDM에서 일부 관리 설정을 유지하며 정리하는 기능.','공장 초기화와 삭제 범위가 다릅니다. 기종별 지원·학교 절차를 공식 매뉴얼에서 확인합니다.'],
 ['공장 초기화·Powerwash','기기의 사용자 데이터·설정을 지우고 다시 설정하는 작업.','백업·실행 권한·재등록 경로를 확인해야 합니다. 초기화가 관리 해제를 보장하지 않습니다.'],
 ['활성화 잠금·FRP','초기화 후에도 이전 계정 확인 등이 필요할 수 있는 보호 기능.','잠금 우회 대신 학교 관리자와 공식 지원 경로로 이관합니다.'],
 ['BitLocker 복구 키','암호화된 Windows 저장장치에 접근할 때 필요한 복구 정보.','초기화·복구 전에 학교 담당자와 확보 여부를 확인합니다. 이 앱에 키를 입력하지 않습니다.'],
 ['양품화','다음 사용자가 정상 사용하도록 점검·정리하는 과정.','외관·전원·충전·구성품·관리 상태·수업 앱을 확인합니다. 초기화 한 번과 동의어가 아닙니다.'],
 ['예비기·대체기','수업을 이어가도록 임시로 빌려주는 다른 기기.','원기기 수리가 끝나도 예비기 반납과 대장 정리는 별도입니다.'],
 ['보류·이관','근거 또는 권한이 부족해 실행을 멈추고 담당자에게 넘기는 판단.','기기 식별정보·증상·확인한 내용·필요한 지원을 기록합니다.']
];
export const portals=[
 {title:'경기도 스마트단말 관리시스템',url:'https://mdm.goe.go.kr/',type:'경기도 · 관리자 로그인',who:'학교에서 부여한 MDM 관리자 권한',look:'단말 현황 → 대상 기기 → 단말 정보·설치 앱·처리 이력. 시리얼·통신·설치 상태를 대조해요.',note:'주소만 열어서는 학교 정보가 보이지 않습니다. 학교의 계정 발급·권한 절차를 확인하세요.'},
 {title:'경기도 MDM 에이전트 다운로드',url:'https://mdm.goe.go.kr/down',type:'경기도 · 설치 자료',who:'기종·도입 사업 확인 후 담당자',look:'Android / iOS / Windows의 해당 기종 안내를 확인해요.',note:'아무 패키지나 설치하지 말고 학교 도입 유형과 맞추세요.'},
 {title:'경기도교육청 디지털튜터 업무 길라잡이',url:goeGuide,type:'경기도 · 공식 업무 근거 · 2025',who:'튜터·교사',look:'p.28 학교 스마트단말 관리시스템 운영 및 안내 자료 경로.',note:'이 문서의 크롬북·웨일북 연동 설명에는 기준일이 있습니다. 현행 학교 구성은 관리자에게 확인하세요.'},
 {title:'Google 관리 콘솔',url:'https://admin.google.com/',type:'크롬북 · 관리자 로그인',who:'학교 Google Workspace / Chrome 관리자',look:'기기 → Chrome 관리에서 대상 기기·조직·정책을 확인해요.',note:'학교 관리 계정과 위임 권한이 필요합니다. 개인 Gmail 로그인과 구분하세요.'},
 {title:'WhaleSpace Admin',url:'https://admin.whalespace.io/',type:'웨일북 · 교안 비교용',who:'해당 학교 WhaleSpace 관리자',look:'관리 기기·사용자·조직·정책을 구분해요.',note:'이번 모둠 실물은 Windows입니다. 웨일북은 교안 비교로만 다룹니다.'},
 {title:'웨일 공식 관리자 안내',url:'https://help.whale.naver.com/ko/whalespace/admin/',type:'공식 사용 안내',who:'튜터·교사',look:'어드민 로그인·관리 기기·정책 설명.',note:'관리자 기능의 의미를 먼저 읽을 때 쓰세요.'},
 {title:'Apple School Manager',url:'https://school.apple.com/',type:'iPad · 도입 학교만',who:'학교 ASM 관리자',look:'Apple 기기 할당·관리형 계정과 MDM 연계를 구분해요.',note:'경기도 MDM과 동일한 사이트가 아닙니다. 학교 도입 여부부터 확인하세요.'},
 {title:'제공 연수 교안 폴더',url:curriculum,type:'2026 · 사용자 제공 교안',who:'강사·수강생',look:'1일차 4·5·6차시 원문과 활동지.',note:'이 앱의 50분 진행 배분은 교안의 명시 활동 시간을 토대로 만든 운영 제안입니다.'}
];
export const devices={
 ipad:{name:'아이패드',os:'iPadOS',asset:'IP-A001',serial:'DEMO-IP-001',year:'2022',info:['설정','일반','정보'],check:'모델명·일련번호·iPadOS 버전을 관찰해요.',manage:['설정','일반','VPN 및 기기 관리'],manageCheck:'학교 관리 표시와 구성 프로필을 읽어요. 프로필을 삭제하지 않습니다.',update:['설정','일반','소프트웨어 업데이트'],reset:['설정','일반','전송 또는 iPad 재설정','모든 콘텐츠 및 설정 지우기'],resetCheck:'백업·활성화 잠금·재등록 경로·승인 확인 후 학교 절차에 따릅니다.',source:'https://support.apple.com/ko-kr/102291',resetSource:'https://support.apple.com/ko-kr/108344'},
 galaxy:{name:'갤럭시패드',os:'Android',asset:'TB-B002',serial:'DEMO-TB-002',year:'2023',info:['설정','태블릿 정보','소프트웨어 정보'],check:'모델명·시리얼은 태블릿 정보, Android·One UI 버전은 소프트웨어 정보에서 찾아요.',manage:['학교 설치 관리 앱','기기·등록 상태 확인'],manageCheck:'학교 안내 에이전트와 관리 상태를 확인해요. 업무 프로필 여부는 등록 방식에 따라 다릅니다.',update:['설정','소프트웨어 업데이트','다운로드 및 설치'],reset:['설정','일반','초기화','기기 전체 초기화'],resetCheck:'기종에 따라 “디바이스 전체 초기화”로 표시됩니다. MDM 간편 초기화와 범위가 다릅니다. FRP·백업·재등록을 확인해요.',source:'https://www.samsungsvc.co.kr/solution/26006',resetSource:'https://www.samsungsvc.co.kr/solution/214114'},
 chromebook:{name:'크롬북',os:'ChromeOS',asset:'CB-C003',serial:'DEMO-CB-003',year:'2024',info:['시간 영역','설정','ChromeOS 정보'],check:'OS 버전·지원 정보를 관찰하고 하판 시리얼과 관리 콘솔을 대조해요.',manage:['학교 Google 관리 콘솔','기기','Chrome'],manageCheck:'기기 등록·조직·정책을 관리자 권한으로 확인해요. Chrome 브라우저의 관리 표시만으로 기기 등록 완료를 확정하지 않습니다.',update:['설정','ChromeOS 정보','업데이트 확인'],reset:['관리 기기인지 확인','관리자에게 초기화·재등록 절차 요청'],resetCheck:'학교 관리 Chromebook은 사용자가 직접 초기화할 수 없습니다. 일반 개인 기기의 Powerwash 단축키를 학교 실습에 적용하지 않아요.',source:'https://support.google.com/chrome/a/answer/2984343?hl=ko',resetSource:'https://support.google.com/chromebook/answer/183084?hl=ko'},
 windows:{name:'윈도우북',os:'Windows',asset:'NB-D004',serial:'DEMO-NB-004',year:'2021',info:['시작','설정','시스템','정보'],check:'Windows 버전·장치 사양과 하판 식별정보를 봐요. 구입연도와 OS 버전을 혼용하지 않습니다.',manage:['설정','계정','회사 또는 학교 액세스'],manageCheck:'연결 정보와 학교 지정 관리 에이전트를 관찰해요. 이 화면만으로 모든 MDM 상태를 확정하지 않습니다.',update:['설정','Windows 업데이트'],reset:['설정','시스템','복구','PC 초기화'],resetCheck:'Windows 11 예시. Windows 10은 업데이트 및 보안 → 복구. 내 파일 유지도 앱·설정은 제거될 수 있어요. BitLocker 복구 키와 재등록 경로를 확인합니다.',source:'https://support.microsoft.com/ko-kr/windows/experience/exploring-windows-settings',resetSource:'https://support.microsoft.com/ko-kr/windows/experience/backup-recovery/reset-your-pc'}
};
export const cases=[
 {lesson:4,title:'계정은 만들었는데, 이 기기 누구 거죠?',story:'학급 명부에는 학생 코드가 있어요. 갤럭시 뒷면은 TB-B002인데 대장은 TB-B020입니다.',where:'갤럭시 선택 → 뒤·하판 보기 → 관리대장 → 관리 화면의 시리얼 비교',options:['로그인만 되면 바로 배부','배정 보류 후 시리얼·기존 이력을 확인'],correct:1,why:'계정 생성과 기기 식별·배정은 별도입니다. 번호가 다르면 임의로 덮어쓰지 않고 근거를 확인합니다.'},
 {lesson:4,title:'어젯밤 배포했는데 앱이 없어요',story:'관리 화면에는 명령 전송. 실제 아이패드는 전원이 꺼져 있었어요.',where:'실물 충전·전원 → 학교 Wi-Fi → MDM 최근 통신·처리 이력 → 기기에서 앱 실행',options:['배포했으니 설치 완료로 기록','충전·통신을 확인하고 실제 설치·실행을 확인'],correct:1,why:'명령 전송과 기기의 실행 결과를 구분합니다. 수업이 급하면 예비기 등 대안을 먼저 준비하고 미확인 기기를 기록합니다.'},
 {lesson:5,title:'앱이 안 보이면 다시 깔까요?',story:'홈 화면에 수업 앱이 없어요. 검색에는 앱이 있고 학교 관리 설정이 적용되어 있어요.',where:'기기 앱 검색 → 해당 계정·관리 영역 → 앱 실행 → 관리자에게 정책 확인',options:['검색·영역·정책부터 확인','바로 개인 계정으로 재설치'],correct:0,why:'숨김·계정·관리 범위를 확인한 뒤 판단합니다. 학교 정책을 우회하는 개인 계정 설치를 해결책으로 삼지 않습니다.'},
 {lesson:5,title:'자동 업데이트 켰으니 최신이죠?',story:'구입연도가 다른 네 기기. 자동 설정은 켜져 있는데 실제 버전은 제각각이에요.',where:'기기 정보 → 현재 버전 → 업데이트 화면 → 지원 범위·정책·전원·공간 확인',options:['실제 버전과 적용 조건을 확인','자동 설정이 켜졌으니 모두 최신'],correct:0,why:'자동 설정은 설치 결과가 아닙니다. 수업 중 대규모 업데이트 대신 확인한 상태와 후속 점검 계획을 남깁니다.'},
 {lesson:6,title:'수리가 끝났으니 대여도 끝?',story:'원기기는 수리됐지만 빌려준 예비기는 아직 학생에게 있어요. 충전기도 한 개가 없어요.',where:'원기기·예비기 관리번호 → 대여·수리 이력 → 구성품 → 반납 상태 분리',options:['수리 완료와 반납·구성품을 별도로 기록','원기기 수리가 끝났으니 모두 완료'],correct:0,why:'수리 완료·예비기 반납·구성품 회수는 각각 확인해야 합니다. 실물·대장·구성품이 맞아야 다음 배정이 가능합니다.'},
 {lesson:6,title:'느리니까 일단 초기화?',story:'기기가 느려요. 백업 여부도, 관리 재등록 방법도 아직 몰라요.',where:'증상·기기 식별 → 백업·잠금 → 권한 → 초기화 종류 → 재등록·검수 계획',options:['원인을 확인하고 승인·복구 경로가 없으면 보류','공장 초기화부터 실행'],correct:0,why:'초기화는 재시작이나 양품화와 같은 뜻이 아닙니다. 삭제 영향과 다시 쓸 수 있는 조건을 설명하고 담당자에게 이관합니다.'}
];

export const guideSources={
 ipad:{info:'https://support.apple.com/ko-kr/guide/ipad/welcome/26/ipados/26',update:'https://support.apple.com/ko-kr/guide/ipad/welcome/26/ipados/26'},
 galaxy:{info:'https://www.samsungsvc.co.kr/download?code=SM-T',manage:'https://mdm.goe.go.kr/down'},
 chromebook:{info:'https://support.google.com/chromebook/answer/177889?hl=ko',update:'https://support.google.com/chromebook/answer/177889?hl=ko'},
 windows:{manage:'https://support.microsoft.com/ko-kr/windows/security/identity-signin/manage-user-accounts-in-windows'}
};
