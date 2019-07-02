<template>
  <div id="app">
    <el-header id="header">
    <el-row id="header-row">
        <el-col :span="4" style="margin-left:0;" style="height:100%;">
            <div class="grid-content" style="height:100%;">
                <a href="/#/ocr">
                    <img src="http://ocrmaker.com/images/logo.png" style="height:100%;max-width:100%;">
                </a>
            </div>
        </el-col>
        <!-- <el-col :span="20" style="margin-left:15px;">
            <div class="grid-content">
            right div
            </div>
        </el-col> -->
    </el-row>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  },
  created(){
    console.log(this.logoUrl)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#header{
  border-top: 2px solid #005e7c;
}
#header-row{
    max-width: 979px;
    min-width: 768px;
    position: relative;
    margin: 0 auto;
    height: 100%;
}
</style>
