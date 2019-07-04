<template>
  <div id="app" style="border-top: 2px solid #005e7c;">
    <el-header id="header" style="padding:0px;height:88px;">
        <el-row id="header-row">
            <el-col :span="4" style="margin-left:0;height:100%;">
                <div class="grid-content" style="height:100%;margin:0;">
                    <a href="/#/">
                        <img src="~@src/logo.png" style="height:100px;max-width:100%;">
                    </a>
                </div>
            </el-col>
            <el-col :span="19" style="margin-left:15px;">
                <div class="grid-content">
                
                </div>
            </el-col>
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
  /*border-top: 2px solid #005e7c;*/
}
#header-row{
    max-width: 705px;
    min-width: 768px;
    position: relative;
    margin: 0 auto;
    height: 100%;
}
</style>
