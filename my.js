
const url = "./my3.js"
fetch(url)
  .then((response) => {
    const urlData = response.json();
    return urlData;
  })
  .then((productData) => {
    const productData1 = productData;
    console.log(productData1[0].url1);
    allButtons.forEach(button => {

      button.addEventListener("click", () => {

        if (button.classList.contains("match1")) {
          const zeroUrl1 = productData1[0].url1.replace("https://", "");
          videoFun2(zeroUrl1);
          console.log(productData1[0].url1)
        } else if (button.classList.contains("match2")) {
          console.log("world");
          const zeroUrl2 = productData1[0].url2.replace("https://", "");
          videoFun2(zeroUrl2);
        } else if (button.classList.contains("match3")) {
          console.log("world");
          const zeroUrl3 = productData1[0].url3.replace("https://", "");
          videoFun4(zeroUrl3);
        } else if (button.classList.contains("match4")) {
          console.log("world");
          const zeroUrl4 = productData1[0].url4.replace("https://", "");
          videoFun4(zeroUrl4);
        } else if (button.classList.contains("match5")) {
          console.log("world");
          const zeroUrl5 = productData1[0].url5.replace("https://", "");
          videoFun6(zeroUrl5);
        } else if (button.classList.contains("match6")) {
          console.log("world");
          const zeroUrl6 = productData1[0].url6.replace("https://", "");
          videoFun6(zeroUrl6);
          
        } else if (button.classList.contains("match7")) {
          console.log("world");
          const oneUrl1 = productData1[1].url1.replace("https://", "");
          videoFun2(oneUrl1);
        } else if (button.classList.contains("match8")) {
          const oneUrl2 = productData1[1].url2.replace("https://", "");
          videoFun2(oneUrl2);
        } else if (button.classList.contains("match9")) {
          const oneUrl3 = productData1[1].url3.replace("https://", "");
          videoFun4(oneUrl3);
        } else if (button.classList.contains("match10")) {
          const oneUrl4 = productData1[1].url4.replace("https://", "");
          videoFun4(oneUrl4);
        } else if (button.classList.contains("match11")) {
          const oneUrl5 = productData1[1].url5.replace("https://", "");
          videoFun6(oneUrl5);
        } else if (button.classList.contains("match12")) {
          console.log("world");
          const oneUrl6 = productData1[1].url6.replace("https://", "");
          videoFun6(oneUrl6);
          
        } else if (button.classList.contains("match13")) {
          console.log("world");
          const twoUrl1 = productData1[2].url1.replace("https://", "");
          videoFun2(twoUrl1);
        } else if (button.classList.contains("match14")) {
          const twoUrl2 = productData1[2].url2.replace("https://", "");
          videoFun2(twoUrl2);
        } else if (button.classList.contains("match15")) {
          const twoUrl3 = productData1[2].url3.replace("https://", "");
          videoFun4(twoUrl3);
        } else if (button.classList.contains("match16")) {
          const twoUrl4 = productData1[2].url4.replace("https://", "");
          videoFun4(twoUrl4);
        } else if (button.classList.contains("match17")) {
          const twoUrl5 = productData1[2].url5.replace("https://", "");
          videoFun6(twoUrl5);
        } else if (button.classList.contains("match18")) {
          const twoUrl6 = productData1[2].url6.replace("https://", "");
          videoFun6(twoUrl6);
          
        } else if (button.classList.contains("match19")) {
          const threeUrl1 = productData1[3].url1.replace("https://", "");
          videoFun2(threeUrl1);
        } else if (button.classList.contains("match20")) {
          const threeUrl2 = productData1[3].url2.replace("https://", "");
          videoFun2(threeUrl2);
        } else if (button.classList.contains("match21")) {
          const threeUrl3 = productData1[3].url3.replace("https://", "");
          videoFun4(threeUrl3);
        } else if (button.classList.contains("match22")) {
          const threeUrl4 = productData1[3].url4.replace("https://", "");
          videoFun4(threeUrl4);
        } else if (button.classList.contains("match23")) {
          const threeUrl5 = productData1[3].url5.replace("https://", "");
          videoFun6(threeUrl5);
        } else if (button.classList.contains("match24")) {
          const threeUrl6 = productData1[3].url6.replace("https://", "");
          videoFun6(threeUrl6);

          } else if (button.classList.contains("match25")) {
          const fourUrl1 = productData1[4].url1.replace("https://", "");
          videoFun2(fourUrl1);
        } else if (button.classList.contains("match26")) {
          const fourUrl2 = productData1[4].url2.replace("https://", "");
          videoFun2(fourUrl2);
        } else if (button.classList.contains("match27")) {
          const fourUrl3 = productData1[4].url3.replace("https://", "");
          videoFun4(fourUrl3);
        } else if (button.classList.contains("match28")) {
          const fourUrl4 = productData1[4].url4.replace("https://", "");
          videoFun4(fourUrl4);
        } else if (button.classList.contains("match29")) {
          const fourUrl5 = productData1[4].url5.replace("https://", "");
          videoFun6(fourUrl5);
        } else if (button.classList.contains("match30")) {
          const fourUrl6 = productData1[4].url6.replace("https://", "");
          videoFun6(fourUrl6);
          
        } else if (button.classList.contains("match31")) {
          const fiveUrl1 = productData1[5].url1.replace("https://", "");
          videoFun2(fiveUrl1);
        } else if (button.classList.contains("match32")) {
          const fiveUrl2 = productData1[5].url2.replace("https://", "");
          videoFun2(fiveUrl2);
        } else if (button.classList.contains("match33")) {
          const fiveUrl3 = productData1[5].url3.replace("https://", "");
          videoFun4(fiveUrl3);
        } else if (button.classList.contains("match34")) {
          const fiveUrl4 = productData1[5].url4.replace("https://", "");
          videoFun4(fiveUrl4);
        } else if (button.classList.contains("match35")) {
          const fiveUrl5 = productData1[5].url5.replace("https://", "");
          videoFun6(fiveUrl5);
        } else if (button.classList.contains("match36")) {
          const fiveUrl6 = productData1[5].url6.replace("https://", "");
          videoFun6(fiveUrl6);
          
        } else if (button.classList.contains("match37")) {
          const sixUrl1 = productData1[6].url1.replace("https://", "");
          videoFun2(sixUrl1);
        } else if (button.classList.contains("match38")) {
          const sixUrl2 = productData1[6].url2.replace("https://", "");
          videoFun2(sixUrl2);
        } else if (button.classList.contains("match39")) {
          const sixUrl3 = productData1[6].url3.replace("https://", "");
          videoFun4(sixUrl3);
        } else if (button.classList.contains("match40")) {
          const sixUrl4 = productData1[6].url4.replace("https://", "");
          videoFun4(sixUrl4);
        } else if (button.classList.contains("match41")) {
          const sixUrl5 = productData1[6].url5.replace("https://", "");
          videoFun6(sixUrl5);
        } else if (button.classList.contains("match42")) {
          const sixUrl6 = productData1[6].url6.replace("https://", "");
          videoFun6(sixUrl6);
          
        } else if (button.classList.contains("match43")) {
          const sevenUrl1 = productData1[7].url1.replace("https://", "");
          videoFun2(sevenUrl1);
        } else if (button.classList.contains("match44")) {
          const sevenUrl2 = productData1[7].url2.replace("https://", "");
          videoFun2(sevenUrl2);
        } else if (button.classList.contains("match45")) {
          const sevenUrl3 = productData1[7].url3.replace("https://", "");
          videoFun4(sevenUrl3);
        } else if (button.classList.contains("match46")) {
          const sevenUrl4 = productData1[7].url4.replace("https://", "");
          videoFun4(sevenUrl4);
        } else if (button.classList.contains("match47")) {
          const sevenUrl5 = productData1[7].url5.replace("https://", "");
          videoFun6(sevenUrl5);
        } else if (button.classList.contains("match48")) {
          const sevenUrl6 = productData1[7].url6.replace("https://", "");
          videoFun6(sevenUrl6);
          
        } else if (button.classList.contains("match49")) {
          const eightUrl1 = productData1[8].url1.replace("https://", "");
          videoFun2(eightUrl1);
        } else if (button.classList.contains("match50")) {
          const eightUrl2 = productData1[8].url2.replace("https://", "");
          videoFun2(eightUrl2);
        } else if (button.classList.contains("match51")) {
          const eightUrl3 = productData1[8].url3.replace("https://", "");
          videoFun4(eightUrl3);
        } else if (button.classList.contains("match52")) {
          console.log("world");
          const eightUrl4 = productData1[8].url4.replace("https://", "");
          videoFun4(eightUrl4);
        } else if (button.classList.contains("match53")) {
          const eightUrl5 = productData1[8].url5.replace("https://", "");
          videoFun6(eightUrl5);
        } else if (button.classList.contains("match54")) {
          const eightUrl6 = productData1[8].url6.replace("https://", "");
          videoFun6(eightUrl6);
          
        } else if (button.classList.contains("match55")) {
          console.log("world");
          const nineUrl1 = productData1[9].url1.replace("https://", "");
          videoFun2(nineUrl1);
        } else if (button.classList.contains("match56")) {
          const nineUrl2 = productData1[9].url2.replace("https://", "");
          videoFun2(nineUrl2);
        } else if (button.classList.contains("match57")) {
          const nineUrl3 = productData1[9].url3.replace("https://", "");
          videoFun4(nineUrl3);
        } else if (button.classList.contains("match58")) {
          const nineUrl4 = productData1[9].url4.replace("https://", "");
          videoFun4(nineUrl4);
        } else if (button.classList.contains("match59")) {
          const nineUrl5 = productData1[9].url5.replace("http://", "");
          videoFun6(nineUrl5);
        } else if (button.classList.contains("match60")) {
          const nineUrl6 = productData1[9].url6.replace("http://", "");
          videoFun6(nineUrl6);
          
        } else if (button.classList.contains("match61")) {
          const tenUrl1 = productData1[10].url1.replace("https://", "");
          videoFun2(tenUrl1);
        } else if (button.classList.contains("match62")) {
          const tenUrl2 = productData1[10].url2.replace("http://", "");
          videoFun2(tenUrl2);
        } else if (button.classList.contains("match63")) {
          const tenUrl3 = productData1[10].url3.replace("https://", "");
          videoFun4(tenUrl3);
        } else if (button.classList.contains("match64")) {
          const tenUrl4 = productData1[10].url4.replace("http://", "");
          videoFun4(tenUrl4);
        } else if (button.classList.contains("match65")) {
          const tenUrl5 = productData1[10].url5.replace("https://", "");
          videoFun6(tenUrl5);
        } else if (button.classList.contains("match66")) {
          const tenUrl6 = productData1[10].url6.replace("https://", "");
          videoFun6(tenUrl6);
          
        } else if (button.classList.contains("match67")) {
          const aOneUrl1 = productData1[11].url1.replace("https://", "");
          videoFun2(aOneUrl1);
        } else if (button.classList.contains("match68")) {
          const aOneUrl2 = productData1[11].url2.replace("https://", "");
          videoFun2(aOneUrl2);
        } else if (button.classList.contains("match69")) {
          const aOneUrl3 = productData1[11].url3.replace("https://", "");
          videoFun4(aOneUrl3);
        } else if (button.classList.contains("match70")) {
          const aOneUrl4 = productData1[11].url4.replace("https://", "");
          videoFun4(aOneUrl4);
        } else if (button.classList.contains("match71")) {
          const aOneUrl5 = productData1[11].url5.replace("https://", "");
          videoFun6(aOneUrl5);
        } else if (button.classList.contains("match72")) {
          const aOneUrl6 = productData1[11].url6.replace("https://", "");
          videoFun6(aOneUrl6);
          
        } else if (button.classList.contains("match73")) {
          const bOneUrl1 = productData1[12].url1.replace("https://", "");
          videoFun2(bOneUrl1);
        } else if (button.classList.contains("match74")) {
          const bOneUrl2 = productData1[12].url2.replace("https://", "");
          videoFun2(bOneUrl2);
        } else if (button.classList.contains("match75")) {
          const bOneUrl3 = productData1[12].url3.replace("https://", "");
          videoFun4(bOneUrl3);
        } else if (button.classList.contains("match76")) {
          const bOneUrl4 = productData1[12].url4.replace("https://", "");
          videoFun4(bOneUrl4);
        } else if (button.classList.contains("match77")) {
          const bOneUrl5 = productData1[12].url5.replace("https://", "");
          videoFun6(bOneUrl5);
        } else if (button.classList.contains("match78")) {
          const bOneUrl6 = productData1[12].url6.replace("https://", "");
          videoFun6(bOneUrl6);
          
        } else if (button.classList.contains("match79")) {
          const cOneUrl1 = productData1[13].url1.replace("https://", "");
          videoFun2(cOneUrl1);
        } else if (button.classList.contains("match80")) {
          const cOneUrl2 = productData1[13].url2.replace("https://", "");
          videoFun2(cOneUrl2);
        } else if (button.classList.contains("match81")) {
          const cOneUrl3 = productData1[13].url3.replace("https://", "");
          videoFun4(cOneUrl3);
        } else if (button.classList.contains("match82")) {
          const cOneUrl4 = productData1[13].url4.replace("https://", "");
          videoFun4(cOneUrl4);
        } else if (button.classList.contains("match83")) {
          const cOneUrl5 = productData1[13].url5.replace("https://", "");
          videoFun6(cOneUrl5);
        } else if (button.classList.contains("match84")) {
          const cOneUrl6 = productData1[13].url6.replace("https://", "");
          videoFun6(cOneUrl6);

        } else if (button.classList.contains("match85")) {
          const dOneUrl1 = productData1[14].url1.replace("https://", "");
          videoFun2(dOneUrl1);
        } else if (button.classList.contains("match86")) {
          const dOneUrl2 = productData1[14].url2.replace("https://", "");
          videoFun2(dOneUrl2);
        } else if (button.classList.contains("match87")) {
          const dOneUrl3 = productData1[14].url3.replace("https://", "");
          videoFun4(dOneUrl3);
        } else if (button.classList.contains("match88")) {
          const dOneUrl4 = productData1[14].url4.replace("https://", "");
          videoFun4(dOneUrl4);
        } else if (button.classList.contains("match89")) {
          const dOneUrl5 = productData1[14].url5.replace("http://", "");
          videoFun6(dOneUrl5);
        } else if (button.classList.contains("match90")) {
          const dOneUrl6 = productData1[14].url6.replace("http://", "");
          videoFun1(dOneUrl6);
          
        } else if (button.classList.contains("match91")) {
          const eOneUrl1 = productData1[15].url1.replace("http://", "");
          videoFun1(eOneUrl1);
        } else if (button.classList.contains("match92")) {
          const eOneUrl2 = productData1[15].url2.replace("https://", "");
          videoFun4(eOneUrl2);
        } else if (button.classList.contains("match93")) {
          const eOneUrl3 = productData1[15].url3.replace("http://", "");
          videoFun3(eOneUrl3);
        } else if (button.classList.contains("match94")) {
          const eOneUrl4 = productData1[15].url4.replace("https://", "");
          videoFun6(eOneUrl4);
        } else if (button.classList.contains("match95")) {
          const eOneUrl5 = productData1[15].url5.replace("http://", "");
          videoFun5(eOneUrl5);
        } else if (button.classList.contains("match96")) {
          const eOneUrl6 = productData1[15].url6.replace("http://", "");
          videoFun1(eOneUrl6);
          
        } else if (button.classList.contains("match97")) {
          const fOneUrl1 = productData1[16].url1.replace("http://", "");
          videoFun1(fOneUrl1);
        } else if (button.classList.contains("match98")) {
          const fOneUrl2 = productData1[16].url2.replace("http://", "");
          videoFun3(fOneUrl2);
        } else if (button.classList.contains("match99")) {
          const fOneUrl3 = productData1[16].url3.replace("http://", "");
          videoFun3(fOneUrl3);
        } else if (button.classList.contains("match100")) {
          const fOneUrl4 = productData1[16].url4.replace("http://", "");
          videoFun6(fOneUrl4);
        } else if (button.classList.contains("match101")) {
          const fOneUrl5 = productData1[16].url5.replace("http://", "");
          videoFun5(fOneUrl5);
        } else if (button.classList.contains("match102")) {
          const fOneUrl6 = productData1[16].url6.replace("https://", "");
          videoFun6(fOneUrl6);
          
        } else if (button.classList.contains("match103")) {
          const gOneUrl1 = productData1[17].url1.replace("https://", "");
          videoFun6(gOneUrl1);
        } else if (button.classList.contains("match104")) {
          const gOneUrl2 = productData1[17].url2.replace("https://", "");
          videoFun6(gOneUrl2);
        
        }
      })
    })
  })
  .catch((error) => {
    console.log("try catch error")
  })

const allButtons = document.querySelectorAll(`.match1,.match2,.match3,.match4,.match5,.match6,.match7,.match8,.match9,.match10,.match11,.match12,.match13,.match14,.match15,

.match16,.match17,.match18,.match19,.match20,.match21,.match22,.match23,.match24,.match25,.match26,.match27,.match28,.match29,.match30,.match31,.match32,.match33,.match34,.match35,
.match36,.match37,.match38,.match39,.match40,.match41,.match42,.match43,.match44,.match45,.match46,.match47,.match48,.match49,.match50,.match51,.match52,.match53,.match54,.match55,.match56,.match57,
.match58,.match59,.match60,.match61,.match62,.match63,.match64,.match65,.match66,.match67,.match68,.match69,.match70,.match71,.match72,.match73
,.match74,.match75,.match76,.match77,.match78,.match79,.match80,.match81,.match82,.match83
,.match84,.match85,.match86,.match87,.match88,.match89,.match90,.match91,.match92,.match93
,.match94,.match95,.match96,.match97,.match98,.match99,.match100`);

const videoFun1 = (m3u8URL2) => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL2}#Intent;scheme=http;type=video/*;package=org.videolan.vlc;end`;

      const testiframe = document.createElement('iframe');
      testiframe.style.display = 'none';
      testiframe.src = networkStreamPlayerURL;
      const redirectTimeout = 1000; 
      const redirectFunction = () => {
        document.body.removeChild(testiframe);
        window.location.href = "https://play.google.com/store/apps/details?id=org.videolan.vlc";
      };
      let appInstalled = false;

      testiframe.onload = () => {
        appInstalled = true;
        setTimeout(redirectFunction, redirectTimeout);
      };

      testiframe.onerror = () => {
        if (!appInstalled) {
          redirectFunction();
        }
      };

      document.body.appendChild(testiframe);
    } else {
      alert("This feature is only available on Android devices.");
    }
};

const videoFun2 = (m3u8URL) => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL}#Intent;scheme=https;type=video/*;package=org.videolan.vlc;S.title=sptvfree4u;end`;

      const testiframe = document.createElement('iframe');
      testiframe.style.display = 'none';
      testiframe.src = networkStreamPlayerURL;
      const redirectTimeout = 1000; 
      const redirectFunction = () => {
        document.body.removeChild(testiframe);
        window.location.href = "https://play.google.com/store/apps/details?id=org.videolan.vlc";
      };
      let appInstalled = false;

      testiframe.onload = () => {
        appInstalled = true;
        setTimeout(redirectFunction, redirectTimeout);
      };

      testiframe.onerror = () => {
        if (!appInstalled) {
          redirectFunction();
        }
      };

      document.body.appendChild(testiframe);
    } else {
      alert("This feature is only available on Android devices.");
    }
  };
const videoFun3 = (m3u8URL2) => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL2}#Intent;scheme=http;type=video/*;package=com.genuine.leone;S.title=sptvfree4u;end`;

      const testiframe = document.createElement('iframe');
      testiframe.style.display = 'none';
      testiframe.src = networkStreamPlayerURL;
      const redirectTimeout = 1000; 
      const redirectFunction = () => {
        document.body.removeChild(testiframe);
        window.location.href = "https://play.google.com/store/apps/details?id=com.genuine.leone";
      };
      let appInstalled = false;

      testiframe.onload = () => {
        appInstalled = true;
        setTimeout(redirectFunction, redirectTimeout);
      };

      testiframe.onerror = () => {
        if (!appInstalled) {
          redirectFunction();
        }
      };

      document.body.appendChild(testiframe);
    } else {
      alert("This feature is only available on Android devices.");
    }
};

const videoFun4 = (m3u8URL) => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL}#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.title=sptvfree4u;end`;

      const testiframe = document.createElement('iframe');
      testiframe.style.display = 'none';
      testiframe.src = networkStreamPlayerURL;
      const redirectTimeout = 1000; 
      const redirectFunction = () => {
        document.body.removeChild(testiframe);
        window.location.href = "https://play.google.com/store/apps/details?id=com.genuine.leone";
      };
      let appInstalled = false;

      testiframe.onload = () => {
        appInstalled = true;
        setTimeout(redirectFunction, redirectTimeout);
      };

      testiframe.onerror = () => {
        if (!appInstalled) {
          redirectFunction();
        }
      };

      document.body.appendChild(testiframe);
    } else {
      alert("This feature is only available on Android devices.");
    }
  };

const videoFun5 = (m3u8URL2) => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL2}#Intent;scheme=http;type=video/*;package=com.mxtech.videoplayer.pro;S.title=sptvfree4u;end`;

      const testiframe = document.createElement('iframe');
      testiframe.style.display = 'none';
      testiframe.src = networkStreamPlayerURL;
      const redirectTimeout = 1000; 
      const redirectFunction = () => {
        document.body.removeChild(testiframe);
        window.location.href = "https://s.id/2866g";
      };
      let appInstalled = false;

      testiframe.onload = () => {
        appInstalled = true;
        setTimeout(redirectFunction, redirectTimeout);
      };

      testiframe.onerror = () => {
        if (!appInstalled) {
          redirectFunction();
        }
      };

      document.body.appendChild(testiframe);
    } else {
      alert("This feature is only available on Android devices.");
    }
};

const videoFun6 = (m3u8URL) => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL}#Intent;scheme=https;type=video/*;package=com.mxtech.videoplayer.pro;S.title=sptvfree4u;end`;

      const testiframe = document.createElement('iframe');
      testiframe.style.display = 'none';
      testiframe.src = networkStreamPlayerURL;
      const redirectTimeout = 1000; 
      const redirectFunction = () => {
        document.body.removeChild(testiframe);
        window.location.href = "https://s.id/2866g";
      };
      let appInstalled = false;

      testiframe.onload = () => {
        appInstalled = true;
        setTimeout(redirectFunction, redirectTimeout);
      };

      testiframe.onerror = () => {
        if (!appInstalled) {
          redirectFunction();
        }
      };

      document.body.appendChild(testiframe);
    } else {
      alert("This feature is only available on Android devices.");
    }
  };