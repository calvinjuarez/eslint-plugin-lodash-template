/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f36e9467240afa6b4984126034030024"
  },
  {
    "url": "assets/css/0.styles.13b03f61.css",
    "revision": "55ff38fe20d8c1662860f6598525fdbc"
  },
  {
    "url": "assets/fonts/codicon.a609dc0f.ttf",
    "revision": "a609dc0f334a7d4e64205247c4e8b97c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d50156d5.js",
    "revision": "a1ce053db34952a307436146573015ba"
  },
  {
    "url": "assets/js/10.dd240a6f.js",
    "revision": "6814a0cd06832cd6a0b49463d8dda3e9"
  },
  {
    "url": "assets/js/11.c3208df7.js",
    "revision": "d725cf7769ad27d79bbe939f4eba2e09"
  },
  {
    "url": "assets/js/12.0ea7da92.js",
    "revision": "6432c75ed8d99656bcdb6c7fad3d90c8"
  },
  {
    "url": "assets/js/13.31fd1c5b.js",
    "revision": "a7ff5036b906a1dbaa3c3211d7c5b978"
  },
  {
    "url": "assets/js/15.4368404c.js",
    "revision": "b3ecafee4a20be4276ee4972cad1b64a"
  },
  {
    "url": "assets/js/16.db5a563f.js",
    "revision": "810e0d97acafcb6d440fdfc11f781be4"
  },
  {
    "url": "assets/js/17.f40e5f8c.js",
    "revision": "555ca1f68735f3f485ffed3fe5d1e232"
  },
  {
    "url": "assets/js/18.9c6b6dfc.js",
    "revision": "f535b490edb7d26eca983e6b9f0166c1"
  },
  {
    "url": "assets/js/19.9b58a39e.js",
    "revision": "f6ce01daf1e028ba2212f12fa44b04ea"
  },
  {
    "url": "assets/js/2.a4699246.js",
    "revision": "4f20cd91c581d2cf8209ceeac8707112"
  },
  {
    "url": "assets/js/20.85ee08f2.js",
    "revision": "089f5da052b09ad2c1db3ece6238d88a"
  },
  {
    "url": "assets/js/21.3fef2e6d.js",
    "revision": "198b8d9797e6fe92cb1efd598b49dc83"
  },
  {
    "url": "assets/js/22.b1d684d3.js",
    "revision": "32429b823353990b05ff8aed6e261ea4"
  },
  {
    "url": "assets/js/23.7efb0c0e.js",
    "revision": "89a93bfb40d6b9e313678d2448d9af0c"
  },
  {
    "url": "assets/js/24.4a4fa21f.js",
    "revision": "40952b440d9d5fac23f7730983d12248"
  },
  {
    "url": "assets/js/25.603ba2f2.js",
    "revision": "9e693d9366dd662c131b3ae8fa92998c"
  },
  {
    "url": "assets/js/26.a0d8b5d9.js",
    "revision": "eb0d1043b73daceaf238e7b3f6a7284d"
  },
  {
    "url": "assets/js/27.82bf429f.js",
    "revision": "b0c2c0fc2968df907ea60c3a03979ed8"
  },
  {
    "url": "assets/js/28.929a181b.js",
    "revision": "097944b367273df4d3858617157e3378"
  },
  {
    "url": "assets/js/29.0c293f2d.js",
    "revision": "011e166cd51bf85a728132f5feaa2111"
  },
  {
    "url": "assets/js/30.32e04cfe.js",
    "revision": "ec903645275409dd0f292dc1a192b056"
  },
  {
    "url": "assets/js/31.eaee4f16.js",
    "revision": "a710ba2656f42863d779c41276ca2f05"
  },
  {
    "url": "assets/js/32.e3a0f01e.js",
    "revision": "58d50c9e40b0cb2a0e20054015bfa4e4"
  },
  {
    "url": "assets/js/33.9c49fd11.js",
    "revision": "1609055d909fe97f0772257b8266b159"
  },
  {
    "url": "assets/js/34.4fa9300e.js",
    "revision": "783e5c6543e9ab1498621e8435f39817"
  },
  {
    "url": "assets/js/35.f41bd155.js",
    "revision": "b0a33c3a4bfe6dc867ca11954d35e7e5"
  },
  {
    "url": "assets/js/36.ad711eff.js",
    "revision": "b0923dc0a9ebbf8e6577622ba6ee1bbc"
  },
  {
    "url": "assets/js/37.e205ba98.js",
    "revision": "209f8603da1509410a71abec9578def2"
  },
  {
    "url": "assets/js/38.46f0292c.js",
    "revision": "dd95cb6e95599c1f9a0b1cc93cf2417e"
  },
  {
    "url": "assets/js/39.066a8999.js",
    "revision": "6218afc51cccd4fa4f62bed7c50a135e"
  },
  {
    "url": "assets/js/4.098a0c7d.js",
    "revision": "128964e7d5b8b42a8d0002242237fb54"
  },
  {
    "url": "assets/js/40.4ecd1180.js",
    "revision": "9c4180e8606e137c4c0e538abac858ac"
  },
  {
    "url": "assets/js/41.c2f95938.js",
    "revision": "c45925b66ab2e30bfb4e80c1e2ea8fc0"
  },
  {
    "url": "assets/js/42.e3ee5d71.js",
    "revision": "a1a10ed9cb3e2de727deb530be48fbd1"
  },
  {
    "url": "assets/js/43.9b940bae.js",
    "revision": "b3bd5a3e0dc7a077340f905b84c8cd24"
  },
  {
    "url": "assets/js/44.d3e1470d.js",
    "revision": "9b83c8c563b156fd0e3398f27991763b"
  },
  {
    "url": "assets/js/45.83c17ca1.js",
    "revision": "cdbdc47588b13f6ded7ab9a2383ae9ca"
  },
  {
    "url": "assets/js/46.843565f0.js",
    "revision": "e15b53539a931c09d658dcde90740441"
  },
  {
    "url": "assets/js/47.9de01078.js",
    "revision": "a586d41abd998b52ec4993398cdf527b"
  },
  {
    "url": "assets/js/48.063dbaa7.js",
    "revision": "d3a2f2653d581c0fd3c442b6441c87ae"
  },
  {
    "url": "assets/js/49.2b01dda3.js",
    "revision": "389b477582b67542debd36765c723c4c"
  },
  {
    "url": "assets/js/5.20990516.js",
    "revision": "dff966b41cfbbe68927fc62abe885cbe"
  },
  {
    "url": "assets/js/50.0f13ac5f.js",
    "revision": "fd02418f088b8ea117684022a9992bc0"
  },
  {
    "url": "assets/js/51.d713cfd9.js",
    "revision": "3c59a556f092035d2204c5acae6cf160"
  },
  {
    "url": "assets/js/52.e4c1de15.js",
    "revision": "8ca2eb0f612dc17653582db977dc81f4"
  },
  {
    "url": "assets/js/53.87076825.js",
    "revision": "6104778682da9b343f4f4035f658104e"
  },
  {
    "url": "assets/js/54.7362549c.js",
    "revision": "d67558589edadba8997747166062fee8"
  },
  {
    "url": "assets/js/55.3a72788d.js",
    "revision": "23fd8e632554042b2d7589047790d11d"
  },
  {
    "url": "assets/js/56.dc594acd.js",
    "revision": "a72de4ee65d5291403f50704d2f16676"
  },
  {
    "url": "assets/js/57.5cf84a99.js",
    "revision": "5f62c38212959b73747fd5bf636823a4"
  },
  {
    "url": "assets/js/58.e64da08e.js",
    "revision": "04d22ba43339332d019a6482f53c40bc"
  },
  {
    "url": "assets/js/59.d68492ba.js",
    "revision": "c1733cc05ea772c7c54aedd3dfdef937"
  },
  {
    "url": "assets/js/6.09f2994b.js",
    "revision": "900be63f2b07bf63c6b8eb583f55d5a3"
  },
  {
    "url": "assets/js/60.d577e011.js",
    "revision": "91d92f58972c0ac85e05f29563a07215"
  },
  {
    "url": "assets/js/61.9d953820.js",
    "revision": "6d0fba1970182107247aebd96e77bd3b"
  },
  {
    "url": "assets/js/63.12f10ae3.js",
    "revision": "4a5bac4b86e5e43634737e3f62673e41"
  },
  {
    "url": "assets/js/64.ce8cbf3e.js",
    "revision": "99c49eb9862f65f75b2c3024a3c69dce"
  },
  {
    "url": "assets/js/7.059c227c.js",
    "revision": "f7f503f809b7b340a047a6564b083c3e"
  },
  {
    "url": "assets/js/8.b368c3f6.js",
    "revision": "72990efcf7e26bbde3608d195bc43f62"
  },
  {
    "url": "assets/js/9.4eaf2f96.js",
    "revision": "7ba2b7cce13feca23dcecd083d165589"
  },
  {
    "url": "assets/js/app.4b68f7f9.js",
    "revision": "13b29b02032f73fe5bf477ef1c037d5b"
  },
  {
    "url": "index.html",
    "revision": "405a1913f7c5d802d3893cddb9064ce5"
  },
  {
    "url": "logo.png",
    "revision": "dd716d4c8ac38b94b7030282b9367138"
  },
  {
    "url": "logo.svg",
    "revision": "0fbee4f5a02c657c5ff77dc9048e0784"
  },
  {
    "url": "migration/0.13to0.14.html",
    "revision": "bc4e2575314666d1ff887dcde53f2dba"
  },
  {
    "url": "migration/index.html",
    "revision": "d1eceaf42c6c372ee5cf492819cb7244"
  },
  {
    "url": "playground/index.html",
    "revision": "0063a7efb0f56e26fb90c2022921899b"
  },
  {
    "url": "rules/attribute-name-casing.html",
    "revision": "37ec5617befd5ab604fce9f8474b1173"
  },
  {
    "url": "rules/attribute-value-quote.html",
    "revision": "acc0ed66fcef61f8004b99044411713a"
  },
  {
    "url": "rules/element-name-casing.html",
    "revision": "bc2c81ac60eb631d9ecc50d9b39242ef"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "b2187142884d777777dc5f98637b9200"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "4e98c5669a2c9e5a644e3db05ef99069"
  },
  {
    "url": "rules/html-comment-content-newline.html",
    "revision": "0bc658bd13cf4863a0cb99f8244a74e9"
  },
  {
    "url": "rules/html-comment-spacing.html",
    "revision": "d9329b905a178997d57f0315af4e65e4"
  },
  {
    "url": "rules/html-content-newline.html",
    "revision": "79f34cd9ecd33ea771cd2f39aeaccd4e"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "8a6a38160874b66efdd1895a12e926a1"
  },
  {
    "url": "rules/index.html",
    "revision": "88b91ece78591d3ac8ceef922c724852"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "c32663772d92cba49d73a6699037b45b"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "1ec3df45976a702995009542283ecace"
  },
  {
    "url": "rules/no-empty-template-tag.html",
    "revision": "6686637c82e362d3fa4f727a7ad39728"
  },
  {
    "url": "rules/no-html-comments.html",
    "revision": "e20d140b5f4eff734f0c80332bf8faa1"
  },
  {
    "url": "rules/no-invalid-template-interpolation.html",
    "revision": "aba2e8bd7a1aec47ff0ccf6047246b9a"
  },
  {
    "url": "rules/no-irregular-whitespace.html",
    "revision": "80f3b1f4b3db2686f67a887206c943d7"
  },
  {
    "url": "rules/no-multi-spaces-in-html-tag.html",
    "revision": "175f31a6d89aef6427cb4f331199810f"
  },
  {
    "url": "rules/no-multi-spaces-in-script.html",
    "revision": "6a6c21edc3a5c86b0b48db327cdd218b"
  },
  {
    "url": "rules/no-multi-spaces-in-scriptlet.html",
    "revision": "8d4ed3346cdaf2a749dc58a7ca676a13"
  },
  {
    "url": "rules/no-script-parsing-error.html",
    "revision": "9b1085662f21886dfdb09def80bf7503"
  },
  {
    "url": "rules/no-semi-in-template-interpolation.html",
    "revision": "ad6eb5961cd070ceff819caed012181b"
  },
  {
    "url": "rules/no-space-attribute-equal-sign.html",
    "revision": "0258811b63747eaaf6114f686ed96528"
  },
  {
    "url": "rules/no-template-tag-in-start-tag.html",
    "revision": "e045a8851d55de3afe362db01e7baa41"
  },
  {
    "url": "rules/no-warning-html-comments.html",
    "revision": "c0556acece782df9d1cf004f9155df03"
  },
  {
    "url": "rules/plugin-option.html",
    "revision": "8b7cc8d04bff9fd59543feb2530761ac"
  },
  {
    "url": "rules/prefer-escape-template-interpolations.html",
    "revision": "82e81efe9acedf60fc88de4ca68f4870"
  },
  {
    "url": "rules/script-indent.html",
    "revision": "21875fb50411b48c1c40784426fe365d"
  },
  {
    "url": "rules/scriptlet-indent.html",
    "revision": "73c89636d1795a554082d67b33372cc1"
  },
  {
    "url": "rules/template-tag-spacing.html",
    "revision": "550deb139953ea566c1f0acb0c90e987"
  },
  {
    "url": "services/ast-for-html.html",
    "revision": "2e1e213b12bdf13f5becc33f27cea9d6"
  },
  {
    "url": "services/ast-for-template-tag.html",
    "revision": "db1bd2fe3a7abb9dcf3ca9815c5e6343"
  },
  {
    "url": "services/index.html",
    "revision": "77ee026b1e3a7914ba681813c3d4e126"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
