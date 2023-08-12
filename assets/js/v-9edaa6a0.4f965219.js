"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[11446],{388676:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-9edaa6a0","path":"/devices/4512721.html","title":"Namron 4512721 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Namron 4512721 control via MQTT","description":"Integrate your Namron 4512721 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-08-11T22:17:44.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory Reset","slug":"factory-reset","link":"#factory-reset","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1691827982000},"filePathRelative":"devices/4512721.md"}')},319853:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n(166252);const o=(0,i._)("h1",{id:"namron-4512721",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#namron-4512721","aria-hidden":"true"},"#"),(0,i.Uk)(" Namron 4512721")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"4512721")],-1),l=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Zigbee 4 channel switch K8 (black)")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, action, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/4512721.jpg",alt:"Namron 4512721"})])],-1),u=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ol><li>Remove the remote from previous zigbee network if it has already been added to it, otherwise pairing will fail. Please refer to the part &quot;Factory Reset&quot;.</li><li>From your zigbee controller or hub interface, choose to add device or accessory and enter Pairing mode as instructed by the controller.</li><li>Press and hold down top two buttons (channel 1 ON and OFF) until LED indicator turns on.</li><li>Immediately short press the top right button (channel 1 OFF) to search nearby network, indicator flashes every 1 second, 20 seconds timeout if there is no network. Indicator will then blink 5 times quickly for successful pairing.</li></ol><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory Reset</h3><ol><li>Press and hold down top two buttons (channel 1 ON and OFF) until LED indicator turns on</li><li>Immediately short press the top left button (channel 1 ON) 5 times continuously, indicator flashes 3 times quickly to indicate successful reset.</li></ol>',5),h=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),p=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),m=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_l1</code>, <code>off_l1</code>, <code>brightness_move_up_l1</code>, <code>brightness_move_down_l1</code>, <code>brightness_stop_l1</code>, <code>on_l2</code>, <code>off_l2</code>, <code>brightness_move_up_l2</code>, <code>brightness_move_down_l2</code>, <code>brightness_stop_l2</code>, <code>on_l3</code>, <code>off_l3</code>, <code>brightness_move_up_l3</code>, <code>brightness_move_down_l3</code>, <code>brightness_stop_l3</code>, <code>on_l4</code>, <code>off_l4</code>, <code>brightness_move_up_l4</code>, <code>brightness_move_down_l4</code>, <code>brightness_stop_l4</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),_={},b=(0,n(983744).Z)(_,[["render",function(e,t){const n=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),o,(0,i._)("table",null,[a,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(n,{to:"/supported-devices/#v=Namron"},{default:(0,i.w5)((()=>[(0,i.Uk)("Namron")])),_:1})])]),d,r,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,i.kq)(" Notes END: Do not edit below this line "),h,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),p,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);