import WebView from 'react-native-webview';
import {View} from 'react-native';
import React from 'react';
export const WebViewRender = () => {
  const onWebViewMessage = (event) => {
    console.log('evetne', event.nativeEvent.data);
  };

  return (
    <View>
      <WebView
        scrollEnabled={true}
        scalesPageToFit={false}
        useWebKit={true}
        originWhitelist={['*']}
        source={{
          html: `
            <html>
            <head>
            <script type="text/javascript">
                function myFunction() {
            var checkBox = document.getElementById("myCheck");
            if (checkBox.checked == true){
                window.ReactNativeWebView.postMessage(true);
                console.log('if');
            } else {
                console.log('else');
            }
            }
            </script>
                <style>
                    * {
                    font-size: 24;
                    }
                
                    img {
                    display: block;
                    max-width: 100%;
                    height: 200;
                    }
                
                    ul.bankList {
                    clear: both;
                    height: 202px;
                    width: 636px;
                    }
                
                    ul.bankList li {
                    list-style-position: outside;
                    list-style-type: none;
                    cursor: pointer;
                    float: left;
                    margin-right: 0;
                    padding: 5px 2px;
                    text-align: center;
                    width: 90px;
                    }
                
                    .list-content li {
                    list-style: none outside none;
                    margin: 0 0 10px;
                    }
                
                    .list-content li .boxContent {
                    display: none;
                    width: 636px;
                    border: 1px solid #cccccc;
                    padding: 10px;
                    }
                
                    .list-content li.active .boxContent {
                    display: block;
                    }
                
                    .list-content li .boxContent ul {
                    height: 280px;
                    }
                
                    i.VISA,
                    i.MASTE,
                    i.AMREX,
                    i.JCB,
                    i.VCB,
                    i.TCB,
                    i.MB,
                    i.VIB,
                    i.ICB,
                    i.EXB,
                    i.ACB,
                    i.HDB,
                    i.MSB,
                    i.NVB,
                    i.DAB,
                    i.SHB,
                    i.OJB,
                    i.SEA,
                    i.TPB,
                    i.PGB,
                    i.BIDV,
                    i.AGB,
                    i.SCB,
                    i.VPB,
                    i.VAB,
                    i.GPB,
                    i.SGB,
                    i.NAB,
                    i.BAB {
                    width: 80px;
                    height: 30px;
                    display: block;
                    background: url(https://www.nganluong.vn/webskins/skins/nganluong/checkout/version3/images/bank_logo.png) no-repeat;
                    }
                
                    i.MASTE {
                    background-position: 0px -31px;
                    }
                
                    i.AMREX {
                    background-position: 0px -62px;
                    }
                
                    i.JCB {
                    background-position: 0px -93px;
                    }
                
                    i.VCB {
                    background-position: 0px -124px;
                    }
                
                    i.TCB {
                    background-position: 0px -155px;
                    }
                
                    i.MB {
                    background-position: 0px -186px;
                    }
                
                    i.VIB {
                    background-position: 0px -217px;
                    }
                
                    i.ICB {
                    background-position: 0px -248px;
                    }
                
                    i.EXB {
                    background-position: 0px -279px;
                    }
                
                    i.ACB {
                    background-position: 0px -310px;
                    }
                
                    i.HDB {
                    background-position: 0px -341px;
                    }
                
                    i.MSB {
                    background-position: 0px -372px;
                    }
                
                    i.NVB {
                    background-position: 0px -403px;
                    }
                
                    i.DAB {
                    background-position: 0px -434px;
                    }
                
                    i.SHB {
                    background-position: 0px -465px;
                    }
                
                    i.OJB {
                    background-position: 0px -496px;
                    }
                
                    i.SEA {
                    background-position: 0px -527px;
                    }
                
                    i.TPB {
                    background-position: 0px -558px;
                    }
                
                    i.PGB {
                    background-position: 0px -589px;
                    }
                
                    i.BIDV {
                    background-position: 0px -620px;
                    }
                
                    i.AGB {
                    background-position: 0px -651px;
                    }
                
                    i.SCB {
                    background-position: 0px -682px;
                    }
                
                    i.VPB {
                    background-position: 0px -713px;
                    }
                
                    i.VAB {
                    background-position: 0px -744px;
                    }
                
                    i.GPB {
                    background-position: 0px -775px;
                    }
                
                    i.SGB {
                    background-position: 0px -806px;
                    }
                
                    i.NAB {
                    background-position: 0px -837px;
                    }
                
                    i.BAB {
                    background-position: 0px -868px;
                    }
                
                    ul.cardList {
                    margin-bottom: 30px;
                    }
                
                    ul.cardList li {
                    cursor: pointer;
                    float: left;
                    margin-right: 0;
                    padding: 5px 4px;
                    text-align: center;
                    width: 110px;
                    }
                </style>
                
                </head>
                <body> 
                <div class="boxContent">
                <p><i>
                    <span style="color:#ff5a00;font-weight:bold;text-decoration:underline;">Lưu ý</span>: Bạn cần đăng ký
                    Internet-Banking hoặc dịch vụ thanh toán trực tuyến tại ngân hàng trước khi thực hiện.</i></p>

                <ul class="cardList list_none clearfix">
                <li class="bank-online-methods ">
                    <label for="vcb_ck_on">
                    <i class="BIDV" title="Ngân hàng TMCP Đầu tư &amp; Phát triển Việt Nam"></i>
                    <input type="radio" value="BIDV" name="bankcode" onclick="myFunction()" id="myCheck" >

                    </label>
                </li>
                <div class="clear"></div>
                </ul>

                </div>
                </body>
        </html>`,
        }}
        onMessage={onWebViewMessage}
        injectedJavaScript="window.ReactNativeWebView.postMessage(true)"
      />
    </View>
  );
};

export default WebViewRender;
