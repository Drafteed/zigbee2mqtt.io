"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45208],{360617:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-557e5293","path":"/devices/CCT5015-0001.html","title":"Schneider Electric CCT5015-0001 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric CCT5015-0001 control via MQTT","description":"Integrate your Schneider Electric CCT5015-0001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-31T16:51:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Lift_duration (numeric)","slug":"lift-duration-numeric","link":"#lift-duration-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1691827982000},"filePathRelative":"devices/CCT5015-0001.md"}')},7249:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var o=i(166252);const d=(0,o._)("h1",{id:"schneider-electric-cct5015-0001",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#schneider-electric-cct5015-0001","aria-hidden":"true"},"#"),(0,o.Uk)(" Schneider Electric CCT5015-0001")],-1),l=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"CCT5015-0001")],-1),c=(0,o._)("td",null,"Vendor",-1),a=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Roller shutter module")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"cover (state, position), lift_duration, linkquality")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CCT5015-0001.jpg",alt:"Schneider Electric CCT5015-0001"})])],-1),u=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),h=(0,o.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="lift-duration-numeric" tabindex="-1"><a class="header-anchor" href="#lift-duration-numeric" aria-hidden="true">#</a> Lift_duration (numeric)</h3><p>Duration of lift. Value can be found in the published state on the <code>lift_duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lift_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>300</code>. The unit of this value is <code>seconds</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),p={},v=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),d,(0,o._)("table",null,[l,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[c,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,o.w5)((()=>[(0,o.Uk)("Schneider Electric")])),_:1})])]),a,r,s])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),u,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);