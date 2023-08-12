"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79369],{752412:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-7869510b","path":"/devices/DIYRuZ_Zintercom.html","title":"DIYRuZ DIYRuZ_Zintercom control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"DIYRuZ DIYRuZ_Zintercom control via MQTT","description":"Integrate your DIYRuZ DIYRuZ_Zintercom via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-01T20:41:55.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"State (enum)","slug":"state-enum","link":"#state-enum","children":[]},{"level":3,"title":"Mode (enum)","slug":"mode-enum","link":"#mode-enum","children":[]},{"level":3,"title":"Sound (binary)","slug":"sound-binary","link":"#sound-binary","children":[]},{"level":3,"title":"Time_ring (numeric)","slug":"time-ring-numeric","link":"#time-ring-numeric","children":[]},{"level":3,"title":"Time_talk (numeric)","slug":"time-talk-numeric","link":"#time-talk-numeric","children":[]},{"level":3,"title":"Time_open (numeric)","slug":"time-open-numeric","link":"#time-open-numeric","children":[]},{"level":3,"title":"Time_bell (numeric)","slug":"time-bell-numeric","link":"#time-bell-numeric","children":[]},{"level":3,"title":"Time_report (numeric)","slug":"time-report-numeric","link":"#time-report-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1691827982000},"filePathRelative":"devices/DIYRuZ_Zintercom.md"}')},302877:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i=o(166252);const d=(0,i._)("h1",{id:"diyruz-diyruz-zintercom",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#diyruz-diyruz-zintercom","aria-hidden":"true"},"#"),(0,i.Uk)(" DIYRuZ DIYRuZ_Zintercom")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"DIYRuZ_Zintercom")],-1),n=(0,i._)("td",null,"Vendor",-1),u=(0,i._)("td",null,"Description",-1),l={href:"https://diyruz.github.io/posts/zintercom/",target:"_blank",rel:"noopener noreferrer"},r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"state, mode, sound, time_ring, time_talk, time_open, time_bell, time_report, battery, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DIYRuZ_Zintercom.jpg",alt:"DIYRuZ DIYRuZ_Zintercom"})])],-1),h=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="state-enum" tabindex="-1"><a class="header-anchor" href="#state-enum" aria-hidden="true">#</a> State (enum)</h3><p>Current state. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>idle</code>, <code>ring</code>, <code>talk</code>, <code>open</code>, <code>drop</code>.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum" aria-hidden="true">#</a> Mode (enum)</h3><p>Select open mode. Value can be found in the published state on the <code>mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>never</code>, <code>once</code>, <code>always</code>, <code>drop</code>.</p><h3 id="sound-binary" tabindex="-1"><a class="header-anchor" href="#sound-binary" aria-hidden="true">#</a> Sound (binary)</h3><p>Enable or disable sound. Value can be found in the published state on the <code>sound</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> sound is ON, if <code>OFF</code> OFF.</p><h3 id="time-ring-numeric" tabindex="-1"><a class="header-anchor" href="#time-ring-numeric" aria-hidden="true">#</a> Time_ring (numeric)</h3><p>Time to ring before answer. Value can be found in the published state on the <code>time_ring</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_ring&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_ring&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="time-talk-numeric" tabindex="-1"><a class="header-anchor" href="#time-talk-numeric" aria-hidden="true">#</a> Time_talk (numeric)</h3><p>Time to hold before open. Value can be found in the published state on the <code>time_talk</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_talk&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_talk&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="time-open-numeric" tabindex="-1"><a class="header-anchor" href="#time-open-numeric" aria-hidden="true">#</a> Time_open (numeric)</h3><p>Time to open before end. Value can be found in the published state on the <code>time_open</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_open&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_open&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="time-bell-numeric" tabindex="-1"><a class="header-anchor" href="#time-bell-numeric" aria-hidden="true">#</a> Time_bell (numeric)</h3><p>Time after last bell to finish ring. Value can be found in the published state on the <code>time_bell</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_bell&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_bell&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="time-report-numeric" tabindex="-1"><a class="header-anchor" href="#time-report-numeric" aria-hidden="true">#</a> Time_report (numeric)</h3><p>Reporting interval. Value can be found in the published state on the <code>time_report</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_report&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_report&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1440</code>. The unit of this value is <code>min</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',21),m={},p=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink"),m=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[c,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=DIYRuZ"},{default:(0,i.w5)((()=>[(0,i.Uk)("DIYRuZ")])),_:1})])]),(0,i._)("tr",null,[u,(0,i._)("td",null,[(0,i._)("a",l,[(0,i.Uk)("Matrix intercom auto opener"),(0,i.Wm)(m)])])]),r,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);