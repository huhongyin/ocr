<template>

<el-container style="min-height:300px;margin-top:10px;display:block;">
  <el-row>
    <el-col :span="24">
      <div style="padding:15px 0;margin-bottom:60px;background: url(http://ocrmaker.com/images/bg-page-header.png) no-repeat center center;background-size: cover;width:100%;">
        <el-row style="margin:0 auto;max-width: 979px;min-width: 768px">
          <el-col :span="24" style="background-color: rgba(254,254,254,.7);border-radius:10px;padding:0 10px;border: 1px solid rgba(254,254,254,.85);width: 100%;margin: 0 auto;text-align: center;">
          <h1 style="font-weight: 300;margin-bottom: 10px;font-size: 25px;color: #2c3c69;margin-top: 2px;">在线文字识别，OCR服务</h1>
          <div style="vertical-align:baseline;">
            <ul style="list-style: none;margin-bottom: 20px;margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;">
              <li style="width: 25%;position: relative;float: left;text-align: center;margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;">
                <img class="fixedImg" src="~@src/upload.png" style="display: inline-block;width: 125px;height: 125px;padding: 0;border-radius: 50%;color: #fff;font-size: 50px;line-height: 80px;text-align: center;transition: padding .3s;">
                <div style="margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;">
                  <h3 style="color: #053664!important;margin-bottom: 8px;font-size: 18px;line-height: 34px;"><strong>上传图片</strong></h3>
                </div>
              </li>
              <li style="width: 25%;position: relative;float: left;text-align: center;margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;">
                <img class="fixedImg" src="~@src/start.png" style="display: inline-block;width: 125px;height: 125px;padding: 0;border-radius: 50%;color: #fff;font-size: 50px;line-height: 80px;text-align: center;transition: padding .3s;">
                <div style="margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;">
                  <h3 style="color: #053664!important;margin-bottom: 8px;font-size: 18px;line-height: 34px;"><strong>开始识别</strong></h3>
                </div>
              </li>
              <li style="width: 25%;position: relative;float: left;text-align: center;margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;">
                <img class="fixedImg" src="~@src/result.png" style="display: inline-block;width: 125px;height: 125px;padding: 0;border-radius: 50%;color: #fff;font-size: 50px;line-height: 80px;text-align: center;transition: padding .3s;">
                <div style="margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;">
                  <h3 style="color: #053664!important;margin-bottom: 8px;font-size: 18px;line-height: 34px;"><strong>获得结果</strong></h3>
                </div>
              </li>
              <li style="width: 25%;position: relative;float: left;text-align: center;margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;">
                <img class="fixedImg" src="~@src/overlay.png" style="display: inline-block;width: 125px;height: 125px;padding: 0;border-radius: 50%;color: #fff;font-size: 50px;line-height: 80px;text-align: center;transition: padding .3s;">
                <div style="margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;">
                  <h3 style="color: #053664!important;margin-bottom: 8px;font-size: 18px;line-height: 34px;"><strong>识别校正</strong></h3>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
  <el-row style="width:940px;position:relative;margin:0 auto;">
    <el-col :span="24">
      <h3 style="margin-bottom:60px;border-bottom: 1px solid #c4c4c4;max-width:100%;text-align:left;">
        <span style="display: inline-block;padding: 0 50px 5px 0;border-bottom: 6px solid #005e7c;margin-bottom: -1px;font-weight: bold;">在线文字识别，OCR服务</span>
      </h3>
    </el-col>
  </el-row>
  <el-row style="width:940px;position:relative;margin:0 auto;margin-bottom:60px;">
    <el-col :span="24">
      <el-form ref="form" :model="form" label-width="160px">
        <el-form-item label="上传文件 ( png / jpg )">
          <el-input type="file">
          </el-input>
        </el-form-item>
        <el-form-item label="输入图片url ( png / jpg )">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="选择识别语音">
          <el-select style="width:60%;" v-model="lang" placeholder="请选择">
            <el-option label="中文（简体）" value="chs" key="chs"></el-option>
            <el-option label="中文（繁体）" value="cht" key="cht"></el-option>
            <el-option label="英语" value="eng" key="eng"></el-option>
          </el-select>
          <el-button type="primary" @click="onSubmit" class="blue-button" style="width:18%;">开始</el-button>
          <el-button @click="reset" class="blue-button" style="width:18%;float:right;">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

<!-- 图片预览 -->
  <el-row style="width:940px;position:relative;margin:0 auto;margin-bottom:60px;">
    <el-col :span="8">
      <div class="grid-content" style="border: solid 1px #053664;">
        <div style="margin: 0 13px 16px 13px;background-color: #053664;border-color: #053664;color: #fff;text-align: center;">
          <h3>图片预览</h3>
        </div>
        <div style="padding:15px;">
          <div style="display:block;height:80%;width:95%;font-weight: bold;text-align: center;padding: 1em 0;margin: 1em 0;color: #555;border: 2px dashed #555;border-radius: 7px;cursor: default;">
            你也可以把图片拖拽到这里
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <el-button @click="donwnload" class="blue-button">下载</el-button>
        <el-button @click="compare" class="blue-button">校对</el-button>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content" style="border: solid 1px #053664;">
        <div style="margin: 0 13px 16px 13px;background-color: #037455;border-color: #053664;color: #fff;text-align: center;">
          <h3>识别结果</h3>
        </div>
        <div style="padding:15px;">
          <el-input type="textarea" style="width:90%;widheightth:85%;padding:6px 12px;margin:1em 0px;"></el-input>
        </div>
      </div>
    </el-col>
  </el-row>

  <el-row style="width:940px;position:relative;margin:0 auto;">
    <el-col :span="24">
      <h3 style="margin-bottom:60px;border-bottom: 1px solid #c4c4c4;max-width:100%;text-align:left;">
        <span style="display: inline-block;padding: 0 50px 5px 0;border-bottom: 6px solid #005e7c;margin-bottom: -1px;font-weight: bold;">如何使用？</span>
      </h3>
    </el-col>
  </el-row>

  <el-row style="width:940px;position:relative;margin:0 auto;">
    <el-col :span="24" style="font-size:1.1em;text-align:left;">
      通过使用光学字符识别（Optical Character Recognition - OCR）技术将文本文档的扫描或（智能手机）图像转换为可编辑文件。它使用最先进的现代OCR软件。识别质量与商业OCR SDK软件（例如Abbyy）相当。
      <br><br>

      我们的在线OCR服务可以免费使用,只需上传您的图像文件。 OCR软件采用JPG，PNG或PDF（测试中），唯一的限制是图像/ PDF不能大于5MB。
      <br><br>        
      
      您上传的数据是绝对安全的：本站不存储任何数据。
      <br><br>
      支持识别的语言: 中文、英语、法语、德语、阿拉伯语、希腊语、日语、韩语、葡萄牙语、俄语、西班牙语 （如有其它需求请联系我们）。<br><br>

      为获得最佳OCR结果，请务必为文档选择正确的OCR语言。最好不要直接识别手写文档，本服务像任何当前可用的OCR软件一样，只能处理打印的文档。为了获得最佳结果，只包含数字的图像（Number OCR）使用韩语作为OCR语言。
    </el-col>
  </el-row>

  <el-row style="width:940px;position:relative;margin:0 auto;">
    <el-col :span="24">
      <h3 style="margin-bottom:60px;border-bottom: 1px solid #c4c4c4;max-width:100%;text-align:left;">
        <span style="display: inline-block;padding: 0 50px 5px 0;border-bottom: 6px solid #005e7c;margin-bottom: -1px;font-weight: bold;">如果我们帮助到了你，也请你帮助我们！</span>
      </h3>
    </el-col>
  </el-row>

  <el-row style="width:940px;position:relative;margin:0 auto;">
    <el-col :span="24" style="font-size:1.1em;text-align:left;">
      请把本站<span class="cytronHelp" style="color:#08ab89;font-weight:blod;">分享</span>给别人（右侧分享按钮），让更多的人使用我们的服务。因为：使用的人越多，我们的样本库（元数据）就越丰富，识别的准确率就会越来越高。
  </el-row>
  
  <el-row style="width:940px;position:relation;margin:0 auto;border-top: 1px solid #e8e8e8;margin-top:80px;">
    <el-col :span="8" style="margin-left:0;height:100%;">
      <div class="grid-content" style="height:100%;margin:12px 0;">
          <a href="/#/ocr">
              <img src="~@src/logo.png" style="height:100px;max-width:100%;">
          </a>
      </div>
    </el-col>
    <el-col :span="12">
      <ul style="list-style:none;display:inline-block;font-size:16px;width:100%;">
        <li style="list-style:none;height:20px;margin:20px 20px;float:left;">
          <a style="color:#08ab89;" target="_blank" href="/#/" title="常见问题">常见问题</a>
        </li>
        <li style="list-style:none;height:20px;margin:20px 20px;float:left;">
          <a style="color:#08ab89;" target="_blank" href="/#/" title="交流反馈">交流反馈</a>
        </li>
        <li style="list-style:none;height:20px;margin:20px 20px;float:left;">
          <a style="color:#08ab89;" target="_blank" href="/#/" title="免责申明">免责申明</a>
        </li>
        <li style="list-style:none;height:20px;margin:20px 20px;float:left;">
          <a style="color:#08ab89;" target="_blank" href="/#/" title="1468018323@qq.com">联系我们</a>
        </li>
      </ul>
    </el-col>
  </el-row>
</el-container>

</template>

<script>
export default {
  name: 'Ocr',
  data() {
      return {
        lang: 'chs',
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .blue-button{
    background-color: #053664;
    border-color: #2e6da4;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
  }
</style>
