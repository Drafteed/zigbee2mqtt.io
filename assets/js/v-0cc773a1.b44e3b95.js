"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20675],{968040:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-0cc773a1","path":"/devices/UFO-R11.html","title":"Moes UFO-R11 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes UFO-R11 control via MQTT","description":"Integrate your Moes UFO-R11 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-28T20:02:27.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Control","slug":"control","link":"#control","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Learned_ir_code (text)","slug":"learned-ir-code-text","link":"#learned-ir-code-text","children":[]},{"level":3,"title":"Ir_code_to_send (text)","slug":"ir-code-to-send-text","link":"#ir-code-to-send-text","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1691827982000},"filePathRelative":"devices/UFO-R11.md"}')},322947:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var a=o(166252);const n=(0,a._)("h1",{id:"moes-ufo-r11",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#moes-ufo-r11","aria-hidden":"true"},"#"),(0,a.Uk)(" Moes UFO-R11")],-1),i=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"UFO-R11")],-1),s=(0,a._)("td",null,"Vendor",-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Universal smart IR remote control")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"switch (state), learned_ir_code, ir_code_to_send, battery, voltage, linkquality")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/UFO-R11.jpg",alt:"Moes UFO-R11"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Device can learn IR codes and send already known IR codes.</p><h3 id="control" tabindex="-1"><a class="header-anchor" href="#control" aria-hidden="true">#</a> Control</h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can control the device:</p><h4 id="switch-to-a-learning-mode" tabindex="-1"><a class="header-anchor" href="#switch-to-a-learning-mode" aria-hidden="true">#</a> Switch to a learning mode</h4><p>Request:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;learn_ir_code&quot;</span><span class="token operator">:</span><span class="token string">&quot;ON&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The command activates the orange light on the device. You have several seconds to take source IR remote, move it closer to the device and press a button. The learned IR code will be exposed as <code>learned_ir_code</code>.</p><h4 id="send-already-learned-ir-code" tabindex="-1"><a class="header-anchor" href="#send-already-learned-ir-code" aria-hidden="true">#</a> Send already learned IR code</h4><p>Request:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;ir_code_to_send&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;previously learned IR code&gt;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11),h=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>learn_ir_code</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;learn_ir_code&quot;: &quot;ON&quot;}</code>, <code>{&quot;learn_ir_code&quot;: &quot;OFF&quot;}</code> or <code>{&quot;learn_ir_code&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="learned-ir-code-text" tabindex="-1"><a class="header-anchor" href="#learned-ir-code-text" aria-hidden="true">#</a> Learned_ir_code (text)</h3><p>The IR code learned by device. Value can be found in the published state on the <code>learned_ir_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="ir-code-to-send-text" tabindex="-1"><a class="header-anchor" href="#ir-code-to-send-text" aria-hidden="true">#</a> Ir_code_to_send (text)</h3><p>The IR code to send by device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ir_code_to_send&quot;: NEW_VALUE}</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),p={},v=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[i,(0,a._)("tbody",null,[d,(0,a._)("tr",null,[s,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=Moes"},{default:(0,a.w5)((()=>[(0,a.Uk)("Moes")])),_:1})])]),r,l,c])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);