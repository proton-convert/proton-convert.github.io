
document.getElementById('tgButton').onclick = function() {
    window.location.href = 'https://t.me/warp_1_1_1_1';
}

document.getElementById('promoButton').onclick = function() {
    window.location.href = 'https://storage.googleapis.com/amnezia/amnezia.org?m-path=premium&arf=VG755WBZDBAPGGYM';
}

document.getElementById('warpButton').onclick = function() {
    window.location.href = 'https://my-other-projects.vercel.app/';
}

document.getElementById('adButton').onclick = function() {
    window.location.href = 'https://t.me/AgnosiaVPN_bot'
}

window.addEventListener('DOMContentLoaded', function() {
  // Восстанавливаем состояние всех контейнеров
  toggleAWG15Containers();
  replaceMobileText();
});

function toggleAWG15Containers() {
  const awg15Disabled = document.getElementById('awg15').disabled;
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  const awg15Container = document.getElementById('15awg');
  const wiresockContainer = document.getElementById('15wiresock');
  
  // Сначала скрываем оба контейнера
  if (awg15Container) awg15Container.classList.add('hidden');
  if (wiresockContainer) wiresockContainer.classList.add('hidden');
  if (selectedOption === 'xray') {
	
  }
  if (selectedOption === 'clash' || selectedOption === 'awg' || selectedOption === 'xray') {awg15Container.classList.remove('hidden')} 
  else if (selectedOption === 'karing') {wiresockContainer.classList.remove('hidden')}
  
  if (awg15Disabled) {} else {toggleNolanContainer()}
}

// Добавляем обработчики для радиокнопок и чекбокса awg15
document.querySelectorAll('input[name="option"]').forEach(radio => {
  radio.addEventListener('change', toggleAWG15Containers);
});

document.getElementById('awg15').addEventListener('change', toggleAWG15Containers);
document.getElementById('wgFiles').addEventListener('change', function(e) {
    const files = e.target.files;
    const label = document.getElementById('fileUploadLabel');
    
    if (files.length === 0) {
        label.textContent = 'Выбрать файлы';
    } else {
        label.textContent = `Файлов выбрано: ${files.length}`;
    }
});
document.querySelector('.randombtn').onclick = function() {
  const jc = getRandomInt(1, 100);
  const jmin = getRandomInt(1, 200);
  const jmax = getRandomInt(jmin + 1, 201);
  
  document.getElementById('jc1').value = jc;
  document.getElementById('jmin1').value = jmin;
  document.getElementById('jmax1').value = jmax;
  document.getElementById('junk3').checked = true;
  convert()
};

document.querySelectorAll('.randombtn')[1].onclick = function() {
  // Генерация случайных значений для I1-I5
  const Hex = ['<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>', '<b 0xca000000010192000040523d20151ea578688a48502d1b7d5ae46906ceb14547fec9aee98a407dab61b229ca5f6707be89c159f3cf9b73a3b8d906f7d3e307f8e39fdb0d35b23c0ffc635d285418cea8bfd98009d234e0e4f95891a7f4>', '<b 0xcd00000001019500004050389e9d50b54adf3d7b201298e06ddc84decc476cbaae7f5caa99df689a3d8bc8cdf4f1d328ca82147d4afbcd607f76c4ec72dcfa3831afb10b2469557a604f9bfc70d78c149fc6fbc2217d7b1ff6166e>', '<b 0xc400000001015c000040570b2e25e1a2fb2e1d5cf2bfdaeb0ca79c3255f6384628e6e6c22adb43440db63fa1d26ad16120d9cbdbf0dc2f7a8eb3525561b193c6b6a0ef44e8d118c3b04a3ae880c081a9b9e97321315915787938abd8b925506b830d>', '<b 0xc70000000101eb00004055988000e4d3995e7951b41d23dbb150e211e82942d2acbfc4b0596a070887a0e75c6e9e125b838da7e42a511b381741c47bb784a497a0a47327046ce4e2007d611c6c119779f0f2e340d5d6c4525a87754d7c997c09>', '<b 0xcb0000000101d6000040500195593d5d325e28e7a9d879ff474b9a1a344d76a202d92776ceaee0e7f8d933ded8bc2f49a31d19cfa2f42a8b6e056c76c4d64b4f09d870f342e0872e69f5486b4e35e32314107a3937b8d3cf14cfc8>'];
  const RandomHex = Hex[Math.floor(Math.random() * Hex.length)];
  
  document.getElementById('i1').value = RandomHex;
  document.getElementById('i2').value = '';
  document.getElementById('i3').value = '';
  document.getElementById('i4').value = '';
  document.getElementById('i5').value = '';
  
  convert();
};

document.querySelectorAll('.randombtn')[2].onclick = function() {
  const domains = [
    '175bru.ru',
    '1tv.ru',
    '2an.ru',
    '2gis.ru',
    '360tv.ru',
    '4ege.ru',
    '5-tv.ru',
    '9111.ru',
    'akbars.ru',
    'allhockey.ru',
    'amalgama-lab.com',
    'apteka.ru',
    'aptekamos.ru',
    'arbitr.ru',
    'arhangelskoe.su',
    'artchive.ru',
    'arzamas.academy',
    'asna.ru',
    'ati.su',
    'autonews.ru',
    'av.ru',
    'avtovzglyad.ru',
    'baby.ru',
    'babyblog.ru',
    'bashinform.ru',
    'bbr.ru',
    'beeline.ru',
    'belkacar.ru',
    'blizko.ru',
    'bolshoi.ru',
    'borodino.ru',
    'bspb.ru',
    'c2dns.net',
    'c2dns.ru',
    'cdek.ru',
    'championat.com',
    'chitalnya.ru',
    'consmed.ru',
    'consultant.ru',
    'cosmo.ru',
    'ctc.ru',
    'culture.ru',
    'dalenabank.ru',
    'datalesson.ru',
    'deepseek.com',
    'delimobil.ru',
    'delivery-club.ru',
    'dellin.ru',
    'dixy.ru',
    'dnevnik.ru',
    'dns-shop.ru',
    'docdoc.ru',
    'doctis.ru',
    'domashniy.ru',
    'doverie-tv.ru',
    'dzen.ru',
    'e-katalog.ru',
    'eapteka.ru',
    'edadeal.ru',
    'edimdoma.ru',
    'edu.ru',
    'elibrary.ru',
    'f1news.ru',
    'fantlab.ru',
    'fedsfm.ru',
    'fighttime.ru',
    'filmpro.ru',
    'fipi.ru',
    'fips.ru',
    'fitseven.ru',
    'forumhouse.ru',
    'foxford.ru',
    'friday.ru',
    'fsb.ru',
    'fss.ru',
    'fssprus.ru',
    'garant.ru',
    'gaso.ru',
    'gismeteo.ru',
    'gks.ru',
    'gosfilmofond.ru',
    'goskatalog.ru',
    'habr.ru',
    'health-diet.ru',
    'hermitagemuseum.org',
    'hi-news.ru',
    'histrf.ru',
    'ilibrary.ru',
    'in-space.ru',
    'indicator.ru',
    'infourok.ru',
    'interneturok.ru',
    'invb.ru',
    'irecommend.ru',
    'is74.ru',
    'ivi.ru',
    'joomag.com',
    'jv.ru',
    'karcher.ru',
    'kartaslov.ru',
    'karusel-tv.ru',
    'khl.ru',
    'kinopoisk.ru',
    'knigogid.ru',
    'kodeks.ru',
    'kolesa.ru',
    'kommersant.ru',
    'kopilkaurokov.ru',
    'kp.ru',
    'kreml.ru',
    'lektorium.tv',
    'letidor.ru',
    'lib.ru',
	'linkgroup.ru',
    'litres.ru',
    'livejournal.com',
    'livelib.ru',
    'livesport.ru',
    'lizaalert.org',
    'm24.ru',
    'maam.ru',
    'magnit.ru',
    'mail.ru',
    'mariinsky.ru',
    'matchtv.ru',
    'med-otzyv.ru',
    'medi.ru',
    'mediametrics.ru',
    'medicalinsider.ru',
    'medihost.ru',
    'medikforum.ru',
    'medlinks.ru',
    'medportal.ru',
    'medside.ru',
    'megafon.ru',
    'mel.fm',
    'mirtesen.ru',
    'mirtv.ru',
    'mkala.ru',
    'mob-edu.ru',
    'moluch.ru',
    'moskb.ru',
    'mts.ru',
    'multiurok.ru',
    'mybook.ru',
    'myskills.ru',
    'naked-science.ru',
    'nat-geo.ru',
    'nauchniestati.ru',
    'netology.ru',
    'nevasport.ru',
    'nic.ru',
    'nkj.ru',
    'nplus1.ru',
    'nskbl.ru',
    'nsportal.ru',
    'ntv.ru',
    'nukadeti.ru',
    'obrazovaka.ru',
    'ohotniki.ru',
    'olimpiada.ru',
    'onlinedoctor.ru',
    'onlinetrade.ru',
    'oprf.ru',
    'otr-online.ru',
    'otzovik.com',
    'oum.ru',
    'ped-kopilka.ru',
    'pedsovet.org',
    'pervbank.ru',
    'pikabu.ru',
    'pochtabank.ru',
    'popmech.ru',
    'postupi.online',
    'povar.ru',
    'professionali.ru',
    'profi.ru',
    'proza.ru',
    'psbank.ru',
    'pypi.org',
    'radiomayak.ru',
    'radiorus.ru',
    'radiovesti.ru',
    'rbc.ru',
    'ren.tv',
    'rgo.ru',
    'ria.ru',
    'rlsnet.ru',
    'rosbank.ru',
    'rosreestr.ru',
    'rosuchebnik.ru',
    'rsl.ru',
    'rt.ru',
    'rulit.me',
    'rusarchives.ru',
    'rusmuseum.ru',
    'rusneb.ru',
    'russkiiyazyk.ru',
    'rustih.ru',
    'rutube.ru',
    'samlib.ru',
    'sdamgia.ru',
    'selfpub.ru',
    'shm.ru',
    'sirius.online',
    'skyeng.ru',
    'sledcom.ru',
    'sm-news.ru',
    'smi2.ru',
    'smotrim.ru',
    'soccer.ru',
    'sovcombank.ru',
    'sovsport.ru',
    'spastv.ru',
    'sport24.ru',
    'sportmail.ru',
    'sportrbc.ru',
    'sportsdaily.ru',
    'stihi.ru',
    'sudact.ru',
    'sudrf.ru',
    'tamtam.chat',
    'tatar-inform.ru',
    'tele2.ru',
    'teleprogramma.pro',
    'tiu.ru',
    'tnt-online.ru',
    'tretyakovgallery.ru',
    'trudvsem.ru',
    'tv3.ru',
    'tvc.ru',
    'tvkultura.ru',
    'tvzvezda.ru',
    'ucheba.ru',
    'uchi.ru',
    'uchportal.ru',
    'unicreditbank.ru',
    'ura.news',
    'uteka.ru',
    'utkonos.ru',
    'vbr.ru',
    'verumreactor.ru',
    'vesti.ru',
    'vgtrk.ru',
    'videouroki.net',
    'vitrina.tv',
    'vk.ru',
    'vkvideo.ru',
    'vm.ru',
    'vokrugsveta.ru',
    'vrachirf.ru',
    'vsrf.ru',
    'webinar.ru',
    'wi-fi.ru',
    'wikireading.ru',
    'woman.ru',
    'worldskills.ru',
    'xn--80aesfpebagmfblc0a.xn--p1ai',
    'xn--80afcdbalict6afooklqi5o.xn--p1ai',
    'xn--j1ahfl.xn--p1ai',
    'xn----7sbb5adknde1cb0dyd.xn--p1ai',
    'xn--2020-f4dsa7cb5cl7h.xn--p1ai',
    'yaklass.ru',
    'youdo.com',
    'youla.ru',
    'zakon.ru',
    'zdorovie.ru',
    'zdorovieinfo.ru',
    'znaika.ru',
    'zoon.ru'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  document.getElementById('id').value = randomDomain;
  
  convert();
};

const COUNTRY_FLAGS = {
      'JP': '🇯🇵 JP',
      'US': '🇺🇸 US',
      'NL': '🇳🇱 NL',
      'DE': '🇩🇪 DE',
      'FR': '🇫🇷 FR',
      'GB': '🇬🇧 GB',
      'CA': '🇨🇦 CA',
      'AU': '🇦🇺 AU',
      'RO': '🇷🇴 RO',
	  'MX': '🇲🇽 MX',      
	  'NO': '🇳🇴 NO',      
	  'SG': '🇸🇬 SG',      
      'CH': '🇨🇭 CH',
      'PL': '🇵🇱 PL'
    };
let proxyList = [];
function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function generateAmneziaDefaults() {
  const selectedOption = document.querySelector('input[name="junk"]:checked').id;
  let jc, jmin, jmax;
  switch(selectedOption) {
    case 'junk1':
      jc = 3;
      jmin = 1;
      jmax = 3;
      break;
    case 'junk2':
      jc = 30;
      jmin = 10;
      jmax = 30;
      break;
    case 'junk3':
      jc = parseInt(document.getElementById('jc1').value) || 128;
      jmin = parseInt(document.getElementById('jmin1').value) || 1279;
      jmax = parseInt(document.getElementById('jmax1').value) || 1280;
      break;
    default:
      jc = 128;
      jmin = 1279;
      jmax = 1280;
  }

  if (jmax <= jmin) {
    jmax = jmin + 1;
  }

  return {
    jc: jc,
    jmin: jmin,
    jmax: jmax,
    s1: 0,
    s2: 0,
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4
  };
}

function parseWGConfig(text) {
  const config = { 
    interface: { amneziaOptions: {} },
    peers: []
  };
  let currentSection = null;
  let peerIndex = -1;

  const lines = text.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;

    // Обработка секций
    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.slice(1, -1).toLowerCase();
      if (currentSection === 'peer') {
        peerIndex++;
        config.peers.push({ amneziaOptions: {} });
        
        // Проверяем следующую строку на наличие имени (комментария)
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          const nameMatch = nextLine.match(/^#\s*(.+)/);
          if (nameMatch) {
            config.peers[peerIndex].name = nameMatch[1].trim();
            i++; // Пропускаем обработанную строку с именем
          }
        }
      }
      continue;
    }

    // Парсинг ключ=значение
    const equalsIndex = line.indexOf('=');
    if (equalsIndex === -1) continue;

    const key = line.substring(0, equalsIndex).trim();
    const value = line.substring(equalsIndex + 1).trim();
    const cleanKey = key.toLowerCase();

    if (currentSection === 'interface') {
      if (['jc', 'jmin', 'jmax', 's1', 's2', 'h1', 'h2', 'h3', 'h4'].includes(cleanKey)) {
        config.interface.amneziaOptions[cleanKey] = value;
      } else {
        config.interface[cleanKey] = value;
      }
    } else if (currentSection === 'peer' && peerIndex >= 0) {
      const peer = config.peers[peerIndex];
      if (['jc', 'jmin', 'jmax', 's1', 's2', 'h1', 'h2', 'h3', 'h4'].includes(cleanKey)) {
        peer.amneziaOptions[cleanKey] = value;
      } else if (cleanKey === 'presharedkey') {
        peer.presharedKey = value;
      } else {
        peer[cleanKey] = value;
      }
    }
  }

  // Если имя не было найдено через комментарий после [Peer], пробуем извлечь из комментариев
  if (config.peers.length > 0 && !config.peers[0].name) {
    // Ищем любое вхождение # NL-FREE#43 в тексте
    const nameMatch = text.match(/#\s*(NL-FREE#?\d+)/);
    if (nameMatch) {
      config.peers[0].name = nameMatch[1];
    }
  }

  return config;
}

function convertToClashProxy(wgConfig, fileName) {
  const interfaceData = wgConfig.interface;
  const peerData = wgConfig.peers[0];
  const dnsList = interfaceData.dns ? interfaceData.dns.split(',').map(d => d.trim()) : [];
  const defaultAmnezia = generateAmneziaDefaults();
  let proxyName = peerData.name || fileName.replace('.conf', '');
  let originalName = proxyName;
  const selectedPort = document.querySelector('input[name="wgPort"]:checked')?.value || '51820';
  const mtuInput = document.getElementById('mtu');
  const mtuVal = mtuInput?.value.trim() || mtuInput?.placeholder || '1420';
  
  if (!proxyName) {
    proxyName = `Random_${Math.random().toString(36).substr(2, 5)}`;
  } else {
    proxyName = proxyName.replace(/FREE#?/g, '');
    proxyName = proxyName.replace(/-$/, '');
    
    const flagMatch = proxyName.match(/^([A-Z]{2})[-_]/);
    if (flagMatch && COUNTRY_FLAGS[flagMatch[1]]) {
      proxyName = proxyName.replace(flagMatch[1], COUNTRY_FLAGS[flagMatch[1]]);
    }
  }

  const addresses = interfaceData.address.split(',').map(addr => addr.trim());
  let ipv4 = '';
  let ipv6 = '';
  
  addresses.forEach(addr => {
    // Проверяем, содержит ли адрес двоеточие (признак IPv6)
    if (addr.includes(':')) {
      ipv6 = addr;
    } else {
      ipv4 = addr;
    }
  });

  const amneziaOptions = {};
  for (const key of ['jc', 'jmin', 'jmax', 's1', 's2', 'h1', 'h2', 'h3', 'h4']) {
    const interfaceValue = interfaceData.amneziaOptions[key];
    const peerValue = peerData.amneziaOptions[key];
    amneziaOptions[key] = interfaceValue || peerValue || defaultAmnezia[key];
  }

  return {
    name: proxyName,
    originalName: originalName,
    type: "wireguard",
    server: peerData.endpoint.split(':')[0],
    port: selectedPort,
    ip: interfaceData.address,
	ipv4: ipv4,
	ipv6: ipv6,
    private_key: interfaceData.privatekey,
    public_key: peerData.publickey,
    preshared_key: peerData.presharedKey, 
    allowed_ips: peerData.allowedips.split(',').map(ip => `'${ip.trim()}'`),
    udp: true,
    mtu: mtuVal,
    remote_dns_resolve: true,
    dns: dnsList,
    'amnezia-wg-option': amneziaOptions,
    isDefaultAmnezia: !(interfaceData.amneziaOptions.jc || peerData.amneziaOptions.jc)
  };
}

function generateAmneziaOptionsYAML(options) {
      const nojunkEnabled = document.getElementById('nojunk').checked;
	  const awg15Enabled = document.getElementById('awg15').checked;  
	  let yaml = `  amnezia-wg-option:
    version: 3\n`;
	  if (nojunkEnabled) {
      for (const [key, value] of Object.entries(options)) {
        yaml += `    ${key}: ${value}\n`;
      }}
	  if (awg15Enabled) {
		const i1 = document.getElementById('i1').value.trim() || '<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>';
      const i2 = document.getElementById('i2').value.trim();
      const i3 = document.getElementById('i3').value.trim();
      const i4 = document.getElementById('i4').value.trim();
      const i5 = document.getElementById('i5').value.trim();  
		  
		 yaml += `    i1: ${i1}\n`;
      if (i2) yaml += `    i2: ${i2}\n`;
      if (i3) yaml += `    i3: ${i3}\n`;
      if (i4) yaml += `    i4: ${i4}\n`;
      if (i5) yaml += `    i5: ${i5}\n`;
	  }
	  
	      // --- AWG 3.0 ---
    const isAwg3 = document.getElementById('awg3s')?.checked;
    const getValue = (id) => {
        const el = document.getElementById(id);
        return el?.value.trim() || el?.placeholder || '';
    };

    const cpa = isAwg3 ? getValue('cpaInput') : '';
    const rkat = isAwg3 ? getValue('rkatInput') : '';
    const rt = isAwg3 ? getValue('rtInput') : '';
    const rat = isAwg3 ? getValue('ratInput') : '';
    const kt = isAwg3 ? getValue('ktInput') : '';
    const mha = isAwg3 ? getValue('mhaInput') : '';

    if (isAwg3) {
        if (cpa) yaml += `    content-padding-addition: ${cpa}\n`;
        if (rkat) yaml += `    rekey-after-time: ${rkat}\n`;
        if (rt) yaml += `    rekey-timeout: ${rt}\n`;
        if (rat) yaml += `    reject-after-time: ${rat}\n`;
        if (kt) yaml += `    keepalive-timeout: ${kt}\n`;
        if (mha) yaml += `    max-handshake-attempts: ${mha}\n`;
    }

	        // --- AWG 3.1 ---
const isAwg31 = document.getElementById('awg31')?.checked;
if (isAwg31) {
	yaml += `    disable-cookies: true\n`; 
}

      return yaml;
    }

function generateProxyGroups(proxies) {
  const groups = [];
  const protonProxies = [];
  const otherProxies = [];

  proxies.forEach(proxy => {
    const isProton = /(^|[_-])([A-Z]{2})([-_]FREE)?([#_-]|$)/i.test(proxy.originalName || proxy.name);
    
    if (isProton) {
      protonProxies.push(proxy.name);
    } else {
      otherProxies.push(proxy.name);
    }
  });

  if (protonProxies.length > 0) {
    groups.push(`
- name: Proton
  type: select
  icon: https://res.cloudinary.com/dbulfrlrz/image/upload/v1703162849/static/logos/icons/vpn_f9embt.svg
  proxies:
    - ${protonProxies.join('\n    - ')}
  url: 'http://speed.cloudflare.com/'
  unified-delay: true
  interval: 300`);
  }

  if (otherProxies.length > 0) {
    groups.push(`
- name: Other
  type: select
  icon: https://raw.githubusercontent.com/zaeboba/page/refs/heads/main/archive/amnezia.svg
  proxies:
    - ${otherProxies.join('\n    - ')}
  url: 'http://speed.cloudflare.com/'
  unified-delay: true
  interval: 300`);
  }

  return groups.join('\n');
}

function convert() {
  const files = document.getElementById('wgFiles').files;
  if (!files.length) return alert('Выберите файлы .conf');

  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  enableToggles();
  
  proxyList = [];
  document.getElementById('fileList').innerHTML = `Обрабатываются файлы: ${Array.from(files).map(f => f.name).join(', ')}`;
  let filesProcessed = 0;
  
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function() {
      try {
        const wgConfig = parseWGConfig(reader.result);
        const proxy = convertToClashProxy(wgConfig, file.name);
        proxyList.push(proxy);
        filesProcessed++;
        if (filesProcessed === files.length) {
          switch(selectedOption) {
            case 'clash':
              generateClashYaml();
              break;
            case 'awg':
              generateAWGYaml();
              break;
            case 'karing':
              generateAWGYaml();
              break;
			case 'xray':
              generateXray();
              break;
          }
        }
      } catch (e) {
        alert(`Ошибка в файле ${file.name}: ${e.message}`);
        filesProcessed++; 
        if (filesProcessed === files.length) {
          generateClashYaml();
        }
      }
    };
    reader.onerror = function() {
      alert(`Ошибка чтения файла ${file.name}`);
      filesProcessed++;
      if (filesProcessed === files.length) {
        generateClashYaml();
      }
    };
    reader.readAsText(file);
  });
}

function generateClashYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
  }


const iskeepalive = document.getElementById('kepalive')?.checked;
const keepaliveInput = document.getElementById('keepaliveInput');
const keepaliveVal = keepaliveInput?.value.trim() || keepaliveInput?.placeholder || '25';

  const yamlProxies = proxyList.map(proxy => {
    let yaml = `- name: ${proxy.name}\n`;
    yaml += `  type: ${proxy.type}\n`;
    yaml += `  server: ${proxy.server}\n`;
    yaml += `  port: ${proxy.port}\n`;
    yaml += `  ip: ${proxy.ipv4}\n`;
	if (proxy.ipv6) {
    yaml += `  ipv6: ${proxy.ipv6}\n`;
    }
    yaml += `  private-key: ${proxy.private_key}\n`;
    yaml += `  public-key: ${proxy.public_key}\n`;
    yaml += `  allowed-ips: [${proxy.allowed_ips.join(', ')}]\n`;
	if (proxy.preshared_key) {
    yaml += `  pre-shared-key: ${proxy.preshared_key}\n`}
	if (iskeepalive) {
	yaml += `  persistent-keepalive: ${keepaliveVal}\n`}
    yaml += `  udp: ${proxy.udp}\n`;
    yaml += `  mtu: ${proxy.mtu}\n`;
    yaml += `  remote-dns-resolve: ${proxy.remote_dns_resolve}\n`;
    yaml += `  dns: [${proxy.dns.join(', ')}]\n`;
    yaml += generateAmneziaOptionsYAML(proxy['amnezia-wg-option'], proxy.isDefaultAmnezia);
    return yaml;
  }).join('\n');

  const proxyGroups = generateProxyGroups(proxyList);
  const fullYaml = `proxies:\n${yamlProxies}\nproxy-groups:${proxyGroups}`;
  
  document.getElementById('yamlOutput').value = fullYaml;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('copyBtn').classList.remove('hidden');
  document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = () => downloadYAML(fullYaml, 'clash-config.yaml');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(fullYaml)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

function generateAWGYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
}

  const awgConfigs = proxyList.map(proxy => generateSingleAWGConfig(proxy));
  const finalOutput = awgConfigs.join('\n\n');

  document.getElementById('yamlOutput').value = finalOutput;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = downloadAWGConfigs;
  document.getElementById('copyBtn').classList.remove('hidden');
  document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(finalOutput)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

function generateXray() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
}

  const awgConfigs = proxyList.map(proxy => generateSingleXrayConfig(proxy));
  const finalOutput = awgConfigs.join('\n\n');

  document.getElementById('yamlOutput').value = finalOutput;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = downloadXrayConfigs;
  document.getElementById('copyBtn').classList.remove('hidden');
  document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(finalOutput)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

function downloadYAML(yamlContent, fileName) {
  const blob = new Blob([yamlContent], { type: 'text/yaml; charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName || 'config.yaml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadAWGConfigs() {
  if (proxyList.length === 0) return;
  const downloadFrame = document.createElement('iframe');
  downloadFrame.style.display = 'none';
  document.body.appendChild(downloadFrame);
  proxyList.forEach((proxy, index) => {
    setTimeout(() => {
      const awgConfig = generateSingleAWGConfig(proxy);
      const fileName = getAWGFileName(proxy, index);
      
      const blob = new Blob([awgConfig], { type: 'application/x-config; charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      downloadFrame.contentDocument.body.appendChild(link);
      link.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 10000);
    }, 1000 * index);
  });
  setTimeout(() => {
    document.body.removeChild(downloadFrame);
  }, 1000 * proxyList.length + 1000);
}

function downloadXrayConfigs() {
  if (proxyList.length === 0) return;
  const downloadFrame = document.createElement('iframe');
  downloadFrame.style.display = 'none';
  document.body.appendChild(downloadFrame);
  proxyList.forEach((proxy, index) => {
    setTimeout(() => {
      const awgConfig = generateSingleXrayConfig(proxy);
      const fileName = getXrayFileName(proxy, index);
      
      const blob = new Blob([awgConfig], { type: 'application/x-config; charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      downloadFrame.contentDocument.body.appendChild(link);
      link.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 10000);
    }, 1000 * index);
  });
  setTimeout(() => {
    document.body.removeChild(downloadFrame);
  }, 1000 * proxyList.length + 1000);
}

function generateSingleAWGConfig(proxy) {
  const amneziaOptions = proxy['amnezia-wg-option'];
  const awg15Enabled = document.getElementById('awg15').checked;
  const awg2wEnabled = document.getElementById('awg2w').checked;
  const nojunkEnabled = document.getElementById('nojunk').checked;
  const nolanEnabled = document.getElementById('nolan').checked;
  const selectedPort = document.querySelector('input[name="wgPort"]:checked')?.value || '51820';
  const mtuInput = document.getElementById('mtu');
  const mtuVal = mtuInput?.value.trim() || mtuInput?.placeholder || '1420';
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  
  let awgConfig = '';
  
  if (proxy.originalName) {
    awgConfig += `# ${proxy.originalName}\n`;
  } else {
    awgConfig += `# Безымянный конфиг\n`;
  }
  
  awgConfig += `[Interface]\n`;
  awgConfig += `PrivateKey = ${proxy.private_key}\n`;
  awgConfig += `Address = ${proxy.ip}\n`;
  
  if (proxy.dns && proxy.dns.length > 0) {
    awgConfig += `DNS = ${proxy.dns.join(', ')}\n`;
  }
  
  awgConfig += `MTU = ${mtuVal}\n`;
  if (nojunkEnabled) {
  awgConfig += `S1 = 0\n`;
  awgConfig += `S2 = 0\n`;
  awgConfig += `Jc = ${amneziaOptions.jc}\n`;
  awgConfig += `Jmin = ${amneziaOptions.jmin}\n`;
  awgConfig += `Jmax = ${amneziaOptions.jmax}\n`;
  awgConfig += `H1 = ${amneziaOptions.h1}\n`;
  awgConfig += `H2 = ${amneziaOptions.h2}\n`;
  awgConfig += `H3 = ${amneziaOptions.h3}\n`;
  awgConfig += `H4 = ${amneziaOptions.h4}\n`;
  }
if (awg15Enabled && selectedOption === 'awg') {
	const i1 = document.getElementById('i1').value.trim() || '<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>';
	const i2 = document.getElementById('i2').value.trim();
	const i3 = document.getElementById('i3').value.trim();
	const i4 = document.getElementById('i4').value.trim();
	const i5 = document.getElementById('i5').value.trim();
      
	awgConfig += `I1 = ${i1}\n`;
	if (i2) awgConfig += `I2 = ${i2}\n`;
	if (i3) awgConfig += `I3 = ${i3}\n`;
	if (i4) awgConfig += `I4 = ${i4}\n`;
	if (i5) awgConfig += `I5 = ${i5}\n`;
}

if (awg2wEnabled && selectedOption === 'karing') {
    const idValue = document.getElementById('id').value.trim() || 'apteka.ru';
    const ipValue = document.getElementById('ip').value || 'quic';
    const ibValue = document.getElementById('ib').value || 'firefox';

    awgConfig += `Id = ${idValue}\n`;
    awgConfig += `Ip = ${ipValue}\n`;
    awgConfig += `Ib = ${ibValue}\n`;
}
    
    // --- AWG 3.0 ---
    const isAwg3 = document.getElementById('awg3s')?.checked;
    const getValue = (id) => {
        const el = document.getElementById(id);
        return el?.value.trim() || el?.placeholder || '';
    };

    const cpa = isAwg3 ? getValue('cpaInput') : '';
    const rkat = isAwg3 ? getValue('rkatInput') : '';
    const rt = isAwg3 ? getValue('rtInput') : '';
    const rat = isAwg3 ? getValue('ratInput') : '';
    const kt = isAwg3 ? getValue('ktInput') : '';
    const mha = isAwg3 ? getValue('mhaInput') : '';

    if (isAwg3) {
        if (cpa) awgConfig += `ContentPaddingAddition = ${cpa}\n`;
        if (rkat) awgConfig += `RekeyAfterTime = ${rkat}\n`;
        if (rt) awgConfig += `RekeyTimeout = ${rt}\n`;
        if (rat) awgConfig += `RejectAfterTime = ${rat}\n`;
        if (kt) awgConfig += `KeepaliveTimeout = ${kt}\n`;
        if (mha) awgConfig += `MaxHandshakeAttempts = ${mha}\n`;
    }
  
      // --- AWG 3.1 ---
const isAwg31 = document.getElementById('awg31')?.checked;
if (isAwg31) {awgConfig += `DisableCookies = on\n`}

  
  awgConfig += `\n[Peer]\n`;
  awgConfig += `PublicKey = ${proxy.public_key}\n`;
  if (proxy.preshared_key) {
  awgConfig += `PresharedKey = ${proxy.preshared_key}\n`;}
   if (nolanEnabled) {
    awgConfig += `AllowedIPs = 1.0.0.0/8, 2.0.0.0/7, 4.0.0.0/6, 8.0.0.0/7, 11.0.0.0/8, 12.0.0.0/6, 16.0.0.0/4, 32.0.0.0/3, 64.0.0.0/3, 96.0.0.0/4, 112.0.0.0/5, 120.0.0.0/6, 124.0.0.0/7, 126.0.0.0/8, 128.0.0.0/3, 160.0.0.0/5, 168.0.0.0/8, 169.0.0.0/9, 169.128.0.0/10, 169.192.0.0/11, 169.224.0.0/12, 169.240.0.0/13, 169.248.0.0/14, 169.252.0.0/15, 169.255.0.0/16, 170.0.0.0/7, 172.0.0.0/12, 172.32.0.0/11, 172.64.0.0/10, 172.128.0.0/9, 173.0.0.0/8, 174.0.0.0/7, 176.0.0.0/4, 192.0.0.0/9, 192.128.0.0/11, 192.160.0.0/13, 192.169.0.0/16, 192.170.0.0/15, 192.172.0.0/14, 192.176.0.0/12, 192.192.0.0/10, 193.0.0.0/8, 194.0.0.0/7, 196.0.0.0/6, 200.0.0.0/5, 208.0.0.0/4, 224.0.0.0/4, ::/1, 8000::/2, c000::/3, e000::/4, f000::/5, f800::/6, fe00::/9, fec0::/10, ff00::/8\n`;
  } else {
    awgConfig += `AllowedIPs = ${proxy.allowed_ips.join(', ').replace(/'/g, '')}\n`;
  }
  awgConfig += `Endpoint = ${proxy.server}:${selectedPort}\n`;
  
  const isKeepalive = document.getElementById('kepalive')?.checked;
    if (isKeepalive) {
        const pkInput = document.getElementById('keepaliveInput');
        const pkVal = pkInput?.value.trim() || pkInput?.placeholder || '25';
        awgConfig += `PersistentKeepalive = ${pkVal}\n`;
	}
  
  return awgConfig;
}

function generateSingleXrayConfig(proxy) {
  const amneziaOptions = proxy['amnezia-wg-option'];
  const awg15Enabled = document.getElementById('awg15').checked;
  const awg2wEnabled = document.getElementById('awg2w').checked;
  const nojunkEnabled = document.getElementById('nojunk').checked;
  const nolanEnabled = document.getElementById('nolan').checked;
  const selectedPort = document.querySelector('input[name="wgPort"]:checked')?.value || '51820';
  const mtuInput = document.getElementById('mtu');
  const mtuVal = mtuInput?.value.trim() || mtuInput?.placeholder || '1420';
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  let awg1 = ''
  if (nojunkEnabled) { awg1 = Array.from({ length: amneziaOptions.jc }, () => `,
                    {
                        "delay": "1-3",
                        "packet": "${amneziaOptions.jmin}-${amneziaOptions.jmax}",
                        "type": "rand"
                    }`).join(''); }

	let i1 = document.getElementById('i1').value.trim() || '<b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>';
	const match = i1.match(/0x([0-9a-fA-F]+)/);
	i1 = match ? match[1] : '';

let preSharedKey = ''
 if (proxy.preshared_key) {
 preSharedKey = `\n                        "preSharedKey": "${proxy.preshared_key}",`}
  
  let persistentKeepalive = ''
  const isKeepalive = document.getElementById('kepalive')?.checked;
    if (isKeepalive) {
        const pkInput = document.getElementById('keepaliveInput');
        pkVal = pkInput?.value.trim() || pkInput?.placeholder || '25';
		persistentKeepalive = `\n                        "keepAlive": ${pkVal},`;
	}
  
  let awgConfig = `{
    "dns": {
        "servers": [
            "${proxy.dns.join('",\n            "')}"
        ]
    },
    "inbounds": [
        {
            "listen": "127.0.0.1",
            "port": 10808,
            "protocol": "socks",
            "settings": {
                "auth": "noauth",
                "udp": true
            },
            "sniffing": {
                "destOverride": [
                    "http",
                    "tls"
                ],
                "enabled": true
            },
            "tag": "socks-in"
        },
        {
            "listen": "127.0.0.1",
            "port": 10809,
            "protocol": "http",
            "settings": {
            },
             "sniffing": {
                "destOverride": [
                    "http",
                    "tls"
                ],
                "enabled": true
            },
            "tag": "http-in"
        }
    ],
    "log": {
        "loglevel": "warning"
    },
    "meta": null,
    "outbounds": [
        {
            "protocol": "wireguard",
            "settings": {
                "address": [
                    "${proxy.ip.replace(/, /g, '",\n                    "')}"
                ],
                "mtu": ${mtuVal},
                "peers": [
                    {
                        "allowedIPs": [
                            "${proxy.allowed_ips.join('",\n                            "').replace(/'/g, '')}"
                        ],${preSharedKey}
                        "endpoint": "${proxy.server}:${selectedPort}",${persistentKeepalive}
                        "publicKey": "${proxy.public_key}"
                    }
                ],
                "secretKey": "${proxy.private_key}"
            },
            "streamSettings": {
                "sockopt": {
                    "dialerProxy": "noise-out"
                }
            },
            "tag": "proton"
        },
        {
            "protocol": "freedom",
            "settings": {
                "domainStrategy": "AsIs",
                "noises": [
                    {
                        "delay": "1-2",
                        "packet": "${i1}",
                        "type": "hex"
                    }${awg1}
                ]
            },
            "tag": "noise-out"
        }
    ],
    "remarks": "${proxy.originalName.replace(/-FREE|[^a-z0-9]/gi, m => m === '-FREE' ? '' : '_')}",
    "routing": {
        "domainStrategy": "AsIs",
        "rules": [
            {
                "network": "tcp,udp",
                "outboundTag": "proton",
                "type": "field"
            }
        ]
    }
}`;
  
  return awgConfig;
}

function getXrayFileName(proxy, index) {
  if (proxy.originalName) {
    const cleanedName = proxy.originalName.replace(/-FREE/g, '');
    return `${cleanedName.replace(/[^a-z0-9]/gi, '_')}.json`;
  }
  return `${index + 1}.json`;
}

function getAWGFileName(proxy, index) {
  if (proxy.originalName) {
    const cleanedName = proxy.originalName.replace(/-FREE/g, '');
    return `${cleanedName.replace(/[^a-z0-9]/gi, '_')}.conf`;
  }
  return `config_${index + 1}.conf`;
}

function replaceMobileText() {
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;

    // Заменяем подписи к полям ввода
    const labels = document.querySelectorAll('.musor2 .jc');
    labels[0].previousSibling.textContent = "fake_packets = ";
    labels[1].previousSibling.textContent = "fake_packets_size = ";
    labels[2].previousSibling.textContent = "fake_packets_delay = ";
}

// Вызываем при загрузке и при изменении размера окна
window.addEventListener('DOMContentLoaded', replaceMobileText);
window.addEventListener('resize', replaceMobileText);

function enableToggles() {
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  const awg15Toggle = document.getElementById('awg15');
  const awg2wToggle = document.getElementById('awg2w');
  const awg3Toggle = document.getElementById('awg3s');
  const nojunkToggle = document.getElementById('nojunk');
  const nolanToggle = document.getElementById('nolan');
  awg15Toggle.disabled = false;
  awg2wToggle.disabled = false;
  awg3Toggle.disabled = false;
  nojunkToggle.disabled = false;
  nolanToggle.disabled = false;
  toggleAWG15Containers();
}

['nolan', 'awg15', 'nojunk', 'clash', 'awg', 'karing', 'fake1', 'fake2', 'fake3', 'junk1', 'junk2', 'junk3', 'i1', 'i2', 'i3', 'i4', 'i5', 'id', 'ip', 'ib', 'awg2w', 'awg3s','awg31','kepalive','keepaliveInput','mtu', 'xray' ].forEach(id => {
    document.getElementById(id)?.addEventListener('change', function() {
		
        if (!this.disabled) {
            // Если изменился option, обновляем видимость контейнеров
            if ( id === 'clash' || id === 'awg' || id === 'karing') {
                toggleAWG15Containers();
            }
            convert();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
const awg15Input = document.getElementById('awg15');
const awg2wInput = document.getElementById('awg2w');

if (awg15Input && awg2wInput) {
  awg15Input.addEventListener('change', () => {
    awg2wInput.checked = awg15Input.checked;
  });

  awg2wInput.addEventListener('change', () => {
    awg15Input.checked = awg2wInput.checked;
  });
}

const textareas = document.querySelectorAll('.jc');
    
    textareas.forEach(textarea => {
        textarea.addEventListener('keydown', function(e) {
            // Если нажата клавиша Enter без Shift
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Отменяем стандартное поведение (перенос строки)
                this.blur();
            }
        });
    });
});

// Открытие modal
document.querySelector('.genbtn')?.addEventListener('click', function() {
    const modal = document.getElementById('Modal');
    if (modal) {
        modal.style.display = 'block';
    }
});

// Закрытие модального окна при клике на крестик
function closeModal() {
    const modal = document.getElementById('Modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    const modal = document.getElementById('Modal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработчик для кнопки подтверждения в модальном окне
const selectDomainBtn = document.getElementById('selectDomain');
if (selectDomainBtn) {
    selectDomainBtn.addEventListener('click', async function() {
    const domainInput = document.getElementById('domain');
    const domain = domainInput.value.trim();
    
    if (domain) {
        const i1 = await generateI1FromDomain(domain);
		document.getElementById('i1').value = i1;
        closeModal();
        convert();
		
    } else {
        alert('Пожалуйста, введите домен');
    }
});
}

// NolanClash
function toggleNolanContainer() {
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  const nolanToggle = document.getElementById('nolan');
  const awg31Toggle = document.getElementById('awg31');
  const awg3Toggle = document.getElementById('awg3s');
  const awg1Toggle = document.getElementById('nojunk');
  const i2_5 = document.getElementById('i2-5');

if (selectedOption === 'clash' || selectedOption === 'xray') {
	nolanToggle.disabled = true;
	nolanToggle.checked = false;
} else {
	nolanToggle.disabled = false;
}
if (selectedOption === 'xray') {
	awg31Toggle.disabled = true;
	awg31Toggle.checked = false;
	awg3Toggle.disabled = true;
	awg3Toggle.checked = false;
    i2_5.style.filter = 'grayscale(100%)';
    i2_5.style.opacity = '0.5';
    i2_5.style.pointerEvents = 'none';
} else {
	awg31Toggle.disabled = false;
	awg3Toggle.disabled = false;
	i2_5.style.filter = '';
    i2_5.style.opacity = '';
    i2_5.style.pointerEvents = '';
}
}

// Случайно AWG 3.0
function randomizeAwg3() {
    const getRandomRange = (minLow, minHigh, maxLow, maxHigh) => {
        const min = Math.floor(Math.random() * (minHigh - minLow + 1)) + minLow;
        const max = Math.floor(Math.random() * (maxHigh - maxLow + 1)) + maxLow;
        return `${min}-${max}`;
    };

    const cpa = document.getElementById('cpaInput');
    const mha = document.getElementById('mhaInput');
    const kt = document.getElementById('ktInput');
    const rat = document.getElementById('ratInput');
    const rkat = document.getElementById('rkatInput');
    const rt = document.getElementById('rtInput');

    if (cpa) cpa.value = getRandomRange(5, 49, 50, 110);
    if (mha) mha.value = getRandomRange(5, 24, 25, 40);
    if (kt) kt.value = getRandomRange(5, 10, 11, 25);
    if (rat) rat.value = getRandomRange(50, 99, 100, 200);
    if (rkat) rkat.value = getRandomRange(50, 99, 100, 150);
    if (rt) rt.value = getRandomRange(3, 9, 10, 15);
	convert()
}
