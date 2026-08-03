const e=Object.freeze({therapy:"9BFCB2C3-78B9-4982-8501-2BFF113D4207",meditation:"8D82CC00-C9F5-4B9E-B256-A879D4623B3C",inquiry:"46CBB5AE-79D5-4808-A400-4B804DA91E12",wholeLife:"57DD9481-6C89-46EC-9270-E50C6D7D3F11",gut:"122F2132-908C-4776-84B7-447BEE89648D",heart:"3384EDA4-D1A9-42B7-96F5-6F339ED8986E",head:"2BCA4D00-A9F5-4787-A967-DA3112B3C710",therapyGut:"603213D6-B5FA-45FA-BB59-54A856689737",meditationGut:"36427FBE-C564-4D65-BB73-F39A50739EC1",inquiryGut:"7CCDAF5B-021D-4529-B046-07A7D7D876E0",therapyHeart:"0333222B-4D90-49F8-8CE0-BE14C58BC80F",meditationHeart:"0A93D3FB-F6E7-4EA5-9F51-D93C3D89059D",inquiryHeart:"F0454F70-7EEB-4751-A9B1-CF750C9A8056",therapyHead:"3E6051C6-FDBC-4CD0-AB74-08494B82DBBC",meditationHead:"3724C031-9F80-446E-9194-2FBBFD092ECE",inquiryHead:"C5A190FB-A963-4697-8CC8-2B320A044633",horizon:"4A481D1E-5DB6-4ABB-B9D0-8164F41393F9"}),n=Object.freeze({therapy:120,meditation:0,inquiry:-120}),i=Object.freeze({therapy:18,meditation:24,inquiry:36}),t=Object.freeze({origin:-46,gut:-23,heart:0,head:23,horizon:42}),r=180,l=[{id:e.therapy,text:`BEFRIENDING
therapy • cleaning up
turn toward what hurts`,lat:t.origin,lng:n.therapy,color:i.therapy,size:88,slides:211},{id:e.meditation,text:`TRAINING
meditation • growing up
cultivate what frees`,lat:t.origin,lng:n.meditation,color:i.meditation,size:88,slides:212},{id:e.inquiry,text:`DISCOVERING
direct inquiry • waking up
see through what binds`,lat:t.origin,lng:n.inquiry,color:i.inquiry,size:88,slides:213},{id:e.wholeLife,text:`THREE WAYS
ONE WHOLE LIFE`,lat:t.origin,lng:r,color:9,size:88,slides:void 0,labelOnly:!0},{id:e.gut,text:`GUT
How do I stand?`,lat:t.gut,lng:r,color:9,size:92,slides:void 0,labelOnly:!0},{id:e.heart,text:`HEART
How do I meet?`,lat:t.heart,lng:r,color:9,size:92,slides:void 0,labelOnly:!0},{id:e.head,text:`HEAD
How do I see?`,lat:t.head,lng:r,color:9,size:92,slides:void 0,labelOnly:!0},{id:e.therapyGut,text:`GUT
Feel the need
recover choice`,lat:t.gut,lng:n.therapy,color:i.therapy,size:96,slides:void 0},{id:e.meditationGut,text:`GUT
Return to the body
steady attention`,lat:t.gut,lng:n.meditation,color:i.meditation,size:84,slides:void 0},{id:e.inquiryGut,text:`GUT
Meet experience bare
find no controller`,lat:t.gut,lng:n.inquiry,color:i.inquiry,size:84,slides:void 0},{id:e.therapyHeart,text:`HEART
Stay with the wound
restore connection`,lat:t.heart,lng:n.therapy,color:i.therapy,size:84,slides:void 0},{id:e.meditationHeart,text:`HEART
Open into care
hold all equally`,lat:t.heart,lng:n.meditation,color:i.meditation,size:84,slides:void 0},{id:e.inquiryHeart,text:`HEART
Let separation fall
rest as intimacy`,lat:t.heart,lng:n.inquiry,color:i.inquiry,size:84,slides:void 0},{id:e.therapyHead,text:`HEAD
Loosen the story
recover meaning`,lat:t.head,lng:n.therapy,color:i.therapy,size:84,slides:void 0},{id:e.meditationHead,text:`HEAD
See change clearly
release clinging`,lat:t.head,lng:n.meditation,color:i.meditation,size:84,slides:void 0},{id:e.inquiryHead,text:`HEAD
Look for the knower
find no boundary`,lat:t.head,lng:n.inquiry,color:i.inquiry,size:84,slides:void 0},{id:e.horizon,text:`PEACE • LOVE • TRUTH
one shared horizon`,lat:t.horizon,lng:180,color:9,size:84,slides:void 0,labelOnly:!0}];for(const a of l)a.compassStyle=!0,a.castShadow=!1;const y=new Set([e.therapy,e.meditation,e.inquiry,e.therapyGut,e.meditationGut,e.inquiryGut,e.therapyHeart,e.meditationHeart,e.inquiryHeart]);for(const a of l)y.has(a.id)&&(a.connectionStyle="path");function d(){return l.map(({id:a})=>[a])}const h=d();function o(a,s){h.find(([u])=>u===a).push(s)}o(e.therapy,e.therapyGut);o(e.meditation,e.meditationGut);o(e.inquiry,e.inquiryGut);o(e.therapyGut,e.therapyHeart);o(e.meditationGut,e.meditationHeart);o(e.inquiryGut,e.inquiryHeart);o(e.therapyHeart,e.therapyHead);o(e.meditationHeart,e.meditationHead);o(e.inquiryHeart,e.inquiryHead);const E=d(),p=d(),D=d();export{E as planetArrowedConnections,h as planetConnections,p as planetDashedConnections,l as planetTagData,D as planetTunnelConnections};
//# sourceMappingURL=planetCompassData-8G5lfBZb.js.map
