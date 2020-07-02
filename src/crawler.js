import React from "react";
import axios from "axios";
import cheerio from "cheerio";

let linkTobeCrawled = ["http://localhost:8080"];
export let data = [];
const crawler = (url) => {
  console.log("linkTobeCrawled ==============>" + linkTobeCrawled);
  axios
    .all(url.map((a) => axios.get(a))) 
    .then(
      axios.spread((response) => {
        linkTobeCrawled = [];

        data.push(response.data);

        let $ = cheerio.load(response.data);

        $("a").each(async function (i, e) {
          let links = await $(e).attr("href");

          linkTobeCrawled.push(links);
        });
        if (linkTobeCrawled.length > 0) {
          callAgainWithNewSetOfURLs(linkTobeCrawled);
        } else return false;
      })
    )
    .catch((e) => {
      console.log(e);
    });
};

const callAgainWithNewSetOfURLs = (url) => {
  crawler(linkTobeCrawled);
};

// const data1 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/b92d9940cc389f002e5af8739a20b92a">b92d</a></div><div class="col"><a class="link" href="/a3825bb57f3c6142eb878b6e453e0735">a382</a></div><div class="col"><a class="link" href="/a3c994551ec4e78d050b2d109fc2c432">a3c9</a></div></div><div class="row"><div class="col"><div class="codes"><h1>fzztlv</h1><h1>fwjbng</h1><h1>zinwcu</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data2 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/3d768ae43b1f99f7433ffb4a78b2aa9b">3d76</a></div><div class="col"><a class="link" href="/3c13d12faa8c75ccdd1e4bc7261b78cb">3c13</a></div><div class="col"><a class="link" href="/348475984c1275f358f222ee1bc668cd">3484</a></div></div><div class="row"><div class="col"><div class="codes"><h1>ktqxob</h1><h1>jsvczm</h1><h1>odgukm</h1><h1>oudegx</h1><h1>nokxgh</h1><h1>yhbyum</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data3 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/75537dd40941d0c52a1fc7a842082f08">7553</a></div><div class="col"><a class="link" href="/7e8d5e16062c47f215cbbe5f6620ae16">7e8d</a></div><div class="col"><a class="link" href="/dd16116519820b5982a8ee3bd5d63e4d">dd16</a></div><div class="col"><a class="link" href="/74b82132c10d3ded10b0054b9af3ec97">74b8</a></div><div class="col"><a class="link" href="/43ab127594e1635393541a6cef142ac3">43ab</a></div><div class="col"><a class="link" href="/b9301ac299b2e88fc88b99f658cabe61">b930</a></div></div><div class="row"><div class="col"><div class="codes"><h1>cejquu</h1><h1>sfvomz</h1><h1>wgheqk</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data4 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/313aaa20d19bae16a5b6496bc60730b6">313a</a></div><div class="col"><a class="link" href="/bdf715d2ebaece768c43b6360d180d53">bdf7</a></div><div class="col"><a class="link" href="/be2f94d9390d20dd29934b20f8799da6">be2f</a></div><div class="col"><a class="link" href="/0652ab303841941a761824173207f818">0652</a></div><div class="col"><a class="link" href="/7331df845a2b463a8290a5f699e7f329">7331</a></div><div class="col"><a class="link" href="/c3e55a9bbd89a5996906c08a194c970f">c3e5</a></div></div><div class="row"><div class="col"><div class="codes"><h1>unkpxx</h1><h1>vmyogq</h1><h1>yfowwf</h1><h1>lxfulh</h1><h1>jvwcdo</h1><h1>uwpemq</h1><h1>tgnheq</h1><h1>oxyrvh</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data5 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/2571deebf69cf4b6acf7f1c86233bfd4">2571</a></div><div class="col"><a class="link" href="/6d0c1094098417337db22812ef65b7a5">6d0c</a></div><div class="col"><a class="link" href="/cb61e85fbcc0ef52689c7ec3c3e116e2">cb61</a></div><div class="col"><a class="link" href="/7e6d85e50d195cccb760e7d09a8e4be7">7e6d</a></div><div class="col"><a class="link" href="/4c8c257855421602f993bf82cb5871a0">4c8c</a></div></div><div class="row"><div class="col"><div class="codes"><h1>gigjud</h1><h1>ysocvf</h1><h1>ixibul</h1><h1>fxjgmz</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data6 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/2e8d64f458c83a1fb1d6e0863302b800">2e8d</a></div><div class="col"><a class="link" href="/377dd35ead29820dfaa60cdc56d2ebf9">377d</a></div></div><div class="row"><div class="col"><div class="codes"><h1>gklwgl</h1><h1>ecujyc</h1><h1>tjebpw</h1><h1>jymvnj</h1><h1>olgmpz</h1><h1>hrxxbf</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data7 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/b94c0fc2107013d895049cce376291ba">b94c</a></div><div class="col"><a class="link" href="/9c1e07efb1c6fa82aa6118c82a9184f5">9c1e</a></div><div class="col"><a class="link" href="/5f9477d2b732349370ff8b5ba413bf8b">5f94</a></div></div><div class="row"><div class="col"><div class="codes"><h1>tgxqlr</h1><h1>trplpy</h1><h1>kficrk</h1><h1>bndvvn</h1><h1>qcrhlt</h1><h1>lugymv</h1><h1>uvfvnc</h1><h1>wpzhjl</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data8 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/dfa15b3677c0d197a0fc8eb63605fcf0">dfa1</a></div><div class="col"><a class="link" href="/98d1e91d626427966ad3cb2e84f4a8d9">98d1</a></div></div><div class="row"><div class="col"><div class="codes"><h1>frmkmx</h1><h1>rtdibw</h1><h1>gnezwn</h1><h1>syvdep</h1><h1>wpfwzk</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data9 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/430a94c1840f99926dab5a212888a070">430a</a></div><div class="col"><a class="link" href="/ad1abafe9e236d8351dcb7acb98fe332">ad1a</a></div><div class="col"><a class="link" href="/4356b4f174faf45996b620e786b9b5f1">4356</a></div><div class="col"><a class="link" href="/f779a4f94e2a9403775ec68a7343b6ed">f779</a></div></div><div class="row"><div class="col"><div class="codes"><h1>uuqxkb</h1><h1>fqxctr</h1><h1>tvdlte</h1><h1>ilcruj</h1><h1>eeszzz</h1><h1>cvzvlv</h1><h1>ekhqvn</h1><h1>ideoxe</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data10 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/07a374dd0b12f71e9d60dcf41a79cda1">07a3</a></div><div class="col"><a class="link" href="/1ead2514e3aa97e7d703ad0176fe7521">1ead</a></div><div class="col"><a class="link" href="/0652ab303841941a761824173207f818">0652</a></div><div class="col"><a class="link" href="/43ebedeaabadb1bbfeb5f42b3c6b5d73">43eb</a></div></div><div class="row"><div class="col"><div class="codes"><h1>bthmtk</h1><h1>bqwlqm</h1><h1>xdpsxk</h1><h1>hifdbk</h1><h1>vmqsjt</h1><h1>dplzht</h1><h1>lryldd</h1><h1>yddsfn</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data11 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/ce1a4cc8facd515a87821534dc5cd053">ce1a</a></div><div class="col"><a class="link" href="/0ecd92c9ae868a10ec6c6ae149926a66">0ecd</a></div><div class="col"><a class="link" href="/9cc402c52a799b0715e359e455c586ea">9cc4</a></div><div class="col"><a class="link" href="/ec26f4dbb98c46cc1fd285d0c48dfe6c">ec26</a></div><div class="col"><a class="link" href="/d89e044cb006ec4161da09dc36216965">d89e</a></div></div><div class="row"><div class="col"><div class="codes"><h1>hxlsfx</h1><h1>myppku</h1><h1>olesgt</h1><h1>zwscpq</h1><h1>qscjhd</h1><h1>gtpybp</h1><h1>wtoioo</h1><h1>yjvdpy</h1><h1>ccmzvs</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data12 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/3f16dfe8e2049f0dab0ef44c2083266a">3f16</a></div><div class="col"><a class="link" href="/06f4c9d5495604ae9a96ad6b9bb17508">06f4</a></div><div class="col"><a class="link" href="/87b6b45885453acb546a4e6ebd18e2e0">87b6</a></div></div><div class="row"><div class="col"><div class="codes"><h1>wyhyql</h1><h1>fjxkbq</h1><h1>iygliq</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data13 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/b20521fe90ae1a890e41d83aa4ee4877">b205</a></div><div class="col"><a class="link" href="/f6c05d97eadd9304d8dac40b13d577d7">f6c0</a></div></div><div class="row"><div class="col"><div class="codes"><h1>uullph</h1><h1>qflzsl</h1><h1>uldqdh</h1><h1>hxebxq</h1><h1>gqhlxq</h1><h1>nocdke</h1><h1>dwdfid</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data14 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/3cb391a70a6e04f7ea3eb74e38299c71">3cb3</a></div><div class="col"><a class="link" href="/b416e8aa66eeaf9cb3d7ace8209e0f94">b416</a></div><div class="col"><a class="link" href="/7a24dbfa4d5ac37410e4abb4d83aac24">7a24</a></div><div class="col"><a class="link" href="/378306e99d19e63284b50944feccc885">3783</a></div><div class="col"><a class="link" href="/d991bc302b2865871a3642d977337c7e">d991</a></div><div class="col"><a class="link" href="/0935ef32843473d07639ad0bd587031c">0935</a></div><div class="col"><a class="link" href="/f61e1cbc256a097764d8d7254e38adf1">f61e</a></div><div class="col"><a class="link" href="/01110c24170f3aad50401a9a3ea4cbc2">0111</a></div></div><div class="row"><div class="col"><div class="codes"><h1>gipyum</h1><h1>sgmpgw</h1><h1>jzblww</h1><h1>mykbyp</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data15 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/e368b08312d31d75a58ab8cb6f4928f7">e368</a></div><div class="col"><a class="link" href="/b37cc9dcbd84931d38a906f23d76273c">b37c</a></div></div><div class="row"><div class="col"><div class="codes"><h1>iwmuyz</h1><h1>nnbgqe</h1><h1>ymssib</h1><h1>myuhrb</h1><h1>mdsetg</h1><h1>zeribx</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data16 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"><div class="col"><a class="link" href="/35152704ec5d34f374d0a2ee21219023">3515</a></div><div class="col"><a class="link" href="/6553fd8d1fe819c44b99e402533b48a6">6553</a></div><div class="col"><a class="link" href="/02db426748269de8a10e265c172754fe">02db</a></div><div class="col"><a class="link" href="/ac232436030aed3f9793250485ae0440">ac23</a></div></div><div class="row"><div class="col"><div class="codes"><h1>gbjnno</h1><h1>snnjwf</h1><h1>bgzsxp</h1><h1>bpqqwq</h1><h1>yznzeb</h1><h1>ojdbos</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';
// const data17 =
//   '<html><head><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/><title>string-factory.com</title><link rel="stylesheet" href="/app.css"/></head><body><div><div class="container"><div class="row"></div><div class="row"><div class="col"><div class="codes"><h1>kxvvym</h1><h1>tkufni</h1><h1>rvyebn</h1><h1>dxnqlz</h1></div></div></div><div class="qr-code"><img src="/qr-code.jpg"/></div></div></div></body></html>';

// export const data =
//   data1 +
//   data2 +
//   data3 +
//   data4 +
//   data5 +
//   data6 +
//   data7 +
//   data8 +
//   data9 +
//   data10 +
//   data11 +
//   data12 +
//   data13 +
//   data14 +
//   data15 +
//   data16 +
//   data17;
