<template>
 <div id="demand">
  <div id="demand_l"> </div>
  <div id="demand_2">
   <div class="notice">
    <pre style="color: #72767b;text-align: left;line-height: 50px;border: #8cc5ff;font-size: 18px;font-family: 微软雅黑">                             随时在线填写、提交需求信息，我们将尽快与您联系 !</pre>
   </div>
   <div id="detail">
    <table style="border: 1px;border: #82848a" id="contact_table" >
     <tr>
      <td style="width: 80px;text-align: right;padding-bottom: 20px;white-space:pre">联系人   ：</td>
      <td style="width: 200px;padding-bottom: 20px"><input type="text" id="name" ></td>
     </tr>
     <tr>
      <td style="width: 80px;text-align: right;padding-bottom: 20px">联系电话：</td>
      <td style="width: 200px;padding-bottom: 20px"><input type="text" id="tel"></td>
     </tr>
     <tr>
      <td style="width: 80px;text-align: right;padding-bottom: 20px">学生需求：</td>
      <td style="width: 200px;padding-bottom: 20px"><textarea id="request" style="height: 50px;width: 160px;resize: none"></textarea><input type="hidden" name="action_token"></td>
     </tr>
     <tr>
      <td>&nbsp;</td>
      <td><input name="submit" type="submit" class="buttonSubmit" id="submit" value="提 交 需 求" @click="open1"></td>
     </tr>
    </table>
   </div>
   <div id="belongs">
    <table style="border: 1px;border: #82848a" id="requirement">
     <tr>
      <td style="width: 80px;text-align: center;padding-bottom: 20px;font-size: large;white-space: pre" id="belongs_1">                                  我的需求</td>
      <td style="width: 80px;text-align: center;padding-bottom: 20px;font-size: large;white-space: pre" id="belongs_2">             状态</td>
     </tr>
     <tr>
      <td style="width: 80px;text-align: center;padding-bottom: 20px;font-size: large;white-space: pre" id="belongs_3"></td>
      <td style="width: 80px;text-align: center;padding-bottom: 20px;font-size: large;white-space: pre" id="belongs_4">    </td>
     </tr>

    </table>
   </div>
  </div>
 </div>

</template>

<script>
 export default {
     name: "TempDemand",
     methods: {
         open1() {
             this.$notify.info({
                 title: '成功',
                 message: '提交成功，等待我们的联系吧',
                 offset: 75,
                 duration: 4500,
             })
             document.getElementById('name').value = '';
             document.getElementById('tel').value = '';
             document.getElementById('belongs_3').innerText = document.getElementById('request').value;
             document.getElementById('request').value = '';
             document.getElementById('belongs_4').innerText = '等待中';


         },
     },

 }
</script>

<style scoped>
 .notice{
  text-shadow: #3a8ee6;
 }
 #detail{
  border-style: outset;
  border-left-width: 6px;
  border-top-width: 6px;
  border-top-color: lightblue;
  border-left-color: lightgray;
  background-color: #bcdcdd;
  opacity:0.85;
  border-right-width: 7px;
  border-right-color: #8cc5ff;
  border-bottom-color: #c6e2ff;
  border-bottom-width: 7px;
  width: 400px;
  height: fit-content;
  margin-left: 150px;
  margin-top: 50px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 80px;
 }
 body{
  width: 100%;
  height: 100%;
 }
 .buttonSubmit {
  font-size:14px;
  color:#FFFFFF;
  border: 2px #ebb563 solid;
  background-color:#f0c78a;/*#DFAC63*/
  cursor: hand;
  height:32px;
  width: 200px;
  margin-top:3px;
  margin-left: 10px;
  -moz-border-radius: 5px;      /* Gecko browsers */
  -webkit-border-radius: 5px;   /* Webkit browsers */
  border-radius:5px;            /* W3C syntax */

 }
 #belongs{
  border-style: outset;
  border-left-width: 6px;
  border-top-width: 6px;
  border-top-color: lightblue;
  border-left-color: lightgray;
  background-color: #bcdcdd;
  opacity:0.9;
  border-right-width: 7px;
  border-right-color: #8cc5ff;
  border-bottom-color: #c6e2ff;
  border-bottom-width: 7px;
  width: 600px;
  height: fit-content;
  margin-left: 100px;
  margin-top: 50px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 1px;
  border-collapse:collapse;
 }
 #belongs
 {
  text-align: center;
 }
 #belongs_1
  {
   font-size:1em;
   border:1px solid #6bb3b6;
   padding:2px 150px 2px 7px;
  }
 #belongs_2
 {
  font-size:1em;
  border:1px solid #6bb3b6;
  padding:2px 80px 2px 7px;
 }
 #belongs_3
 {
  font-size:1em;
  border:1px solid #6bb3b6;
  padding:2px 300px 8px 7px;
 }
 #belongs_4
 {
  font-size:1em;
  border:1px solid #6bb3b6;
  padding:2px 70px 2px 7px;
 }
</style>
