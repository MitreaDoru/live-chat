(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,a){e.exports={messages:"ChatBox_messages__19jSb",message:"ChatBox_message__2y8AG",messageInfo:"ChatBox_messageInfo__1Uegq",nameAndMessage:"ChatBox_nameAndMessage__2f0JZ",name:"ChatBox_name__1ZnyV",time:"ChatBox_time__2ms21",personalFlexEnd:"ChatBox_personalFlexEnd__3Bsos",leftConvo:"ChatBox_leftConvo__3yeCn",margin:"ChatBox_margin__2a3L3"}},15:function(e,t,a){e.exports={conversation:"PersonalMessages_conversation__DwH6m",conversationInfo:"PersonalMessages_conversationInfo__3B8ol",conversationDetails:"PersonalMessages_conversationDetails__14pAp"}},16:function(e,t,a){e.exports={info:"ChatInfo_info__2O5oK",conversation:"ChatInfo_conversation__2JZvU",conversationInfo:"ChatInfo_conversationInfo__2BQSg",conversationDetails:"ChatInfo_conversationDetails__2HTIR",backButton:"ChatInfo_backButton__2ug9V"}},17:function(e,t,a){e.exports={home:"HomeContent_home__2dpHN",container:"HomeContent_container__1sGoT",left:"HomeContent_left__3nwIX",action:"HomeContent_action__3OTHV",search:"HomeContent_search__qvOn-",conversation:"HomeContent_conversation__31RHE",right:"HomeContent_right__x2vJI",conversationInfo:"HomeContent_conversationInfo__2AKN9",conversationDetails:"HomeContent_conversationDetails__1h1hD",info:"HomeContent_info__CgNZ-",messages:"HomeContent_messages__19pjl",message:"HomeContent_message__1r2Wn",messageInfo:"HomeContent_messageInfo__30amj",input:"HomeContent_input__udSoR",dontShow:"HomeContent_dontShow__1phIB"}},19:function(e,t,a){e.exports={action:"CreateChat_action__en-HZ",groupImage:"CreateChat_groupImage__271vi",none:"CreateChat_none__8pSs7"}},24:function(e,t,a){e.exports={signinContainer:"SigninContent_signinContainer__3isNf",signin:"SigninContent_signin__3Jjqa",image:"SigninContent_image__3aV1k"}},28:function(e,t,a){e.exports={header:"AuthHeader_header__7Kx4G",name:"AuthHeader_name__Q6Mik"}},30:function(e,t,a){e.exports={input:"InputMessage_input__2eKQA",message:"InputMessage_message__2_SEW"}},31:function(e,t,a){e.exports={loginContainer:"LoginContent_loginContainer__3DO_j",login:"LoginContent_login__2p8BH"}},33:function(e,t,a){},38:function(e,t,a){e.exports={search:"Search_search__2DVx1",groupNameInvalid:"Search_groupNameInvalid__3ot_0"}},56:function(e,t,a){"use strict";a.r(t);var s=a(34),n=a.n(s),o=a(4),r=(a(33),a(9)),c=a(3),i=a(0),l=a.n(i),d=a(28),g=a.n(d),m=a(18);const h=Object(m.b)({name:"authentication",initialState:{isAuthenticated:!1,token:"",userId:"",image:""},reducers:{login(e,t){e.isAuthenticated=!0,e.token=t.payload.token,e.userId=t.payload.userId,e.image=t.payload.image},logout(e){e.isAuthenticated=!1,e.token="",e.userId="",e.image=""}}}),u=h.actions;var p=h.reducer;const j=Object(m.b)({name:"conversation",initialState:{secondUser:"",name:"",user:"",agenda:[],filteredAgenda:[],filteredAgendaNotFound:"",displayedChat:"",isSearching:!1,message:"",conversations:[],createGroup:!1,groupUsers:[],leaveButton:!1,showInput:!1,error:"",showRight:!1,windowWidth:"",image:"",groupName:"",groupImageIsSelected:!1,showGroupNameInput:!1,groupImage:""},reducers:{name(e,t){e.name=t.payload},user(e,t){e.user=t.payload},userAgenda(e,t){e.agenda=t.payload},secondUser(e,t){e.secondUser=t.payload},isSearching(e,t){e.isSearching=t.payload},filteredAgenda(e,t){e.filteredConvo=t.payload},filteredAgendaNotFound(e,t){e.filteredAgendaNotFound=t.payload},displayedChat(e,t){e.displayedChat=t.payload},getMessage(e,t){e.message=t.payload},getConversations(e,t){e.conversations=t.payload},createGroup(e,t){e.createGroup=t.payload},groupName(e,t){e.groupName=t.payload},groupUsers(e,t){if(t.payload.length>=2)e.groupUsers=t.payload;else if(!1===t.payload)e.groupUsers=[];else{e.groupUsers.find((e=>e.userId===t.payload.userId))?e.groupUsers=e.groupUsers.filter((e=>e.userId!==t.payload.userId)):e.groupUsers.push(t.payload)}},updateConversations(e,t){if(t.payload.conversation){const a=e.conversations.findIndex((e=>e._id===t.payload.conversation._id));e.conversations[a]=t.payload.conversation}else e.conversations=e.conversations.filter((e=>e._id!==t.payload._id)),e.conversations=[t.payload,...e.conversations]},leaveConversation(e,t){e.conversations=e.conversations.filter((e=>e._id!==t.payload._id))},leaveButton(e,t){e.leaveButton=t.payload},showInput(e,t){e.showInput=t.payload},updateMessages(e,t){e.displayedChat.messages=t.payload},error(e,t){e.error=t.payload},showRight(e,t){e.showRight=t.payload},windowWidth(e,t){e.windowWidth=t.payload},personalImage(e,t){e.image=t.payload},groupImage(e,t){e.groupImage=t.payload},groupImageIsSelected(e,t){e.groupImageIsSelected=t.payload},showGroupNameInput(e,t){e.showGroupNameInput=t.payload}}}),v=j.actions;var b=j.reducer,O=a(1);var _=()=>{const e=Object(c.n)(),t=Object(o.b)(),a=localStorage.getItem("isAuth");return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsxs)("header",{className:g.a.header,children:[Object(O.jsx)("div",{className:g.a.name,onClick:()=>e("/"),children:"Live Chat"}),Object(O.jsx)("nav",{children:Object(O.jsx)("ul",{children:Object(O.jsxs)("li",{children:[!a&&Object(O.jsx)(r.a,{to:"/signin",children:"Signin"}),a&&Object(O.jsx)(r.a,{onClick:()=>{t(u.logout()),t(v.displayedChat("")),t(v.leaveButton(!1)),localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),localStorage.removeItem("isAuth"),localStorage.removeItem("image"),e("/login")},to:"/login",children:"Logout"}),!a&&Object(O.jsx)(r.a,{to:"/login",children:"Login"})]})})})]}),Object(O.jsx)(c.a,{})]})},x=a(17),I=a.n(x),f=a(19),C=a.n(f),y=a(39);const N=Object(y.a)("https://live-chat-scql.onrender.com"),S=l.a.createContext();var w=()=>{const e=Object(i.useContext)(S),t=Object(o.b)(),a=Object(o.c)((e=>e.chat.displayedChat)),s=Object(o.c)((e=>e.chat.agenda)),n=Object(o.c)((e=>e.chat.name)),r=Object(o.c)((e=>e.chat.image)),c=localStorage.getItem("userId"),l=localStorage.getItem("token"),d=Object(o.c)((e=>e.chat.createGroup)),g=Object(o.c)((e=>e.chat.groupUsers)),m=Object(o.c)((e=>e.chat.groupName)),[h,u]=Object(i.useState)(""),p=Object(o.c)((e=>e.chat.groupImageIsSelected)),j=null===g||void 0===g?void 0:g.find((e=>e.userId===c));return Object(O.jsxs)("div",{className:C.a.action,children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"file",name:"image",id:"image",onChange:a=>{a.preventDefault();const s=new FormData;s.append("image",a.target.files[0]),s.append("id",c),fetch("https://live-chat-scql.onrender.com/change-image",{method:"POST",headers:{Authorization:"Bearer "+l},body:s}).then((e=>e.json())).then((a=>{a.errorMessage?t(v.error(a.errorMessage)):(t(v.error("")),t(v.personalImage(a.image)),localStorage.setItem("image",a.image),e.emit("change-image",a.conversations))})).catch((e=>{console.log(e)}))},className:C.a.none}),Object(O.jsx)("img",{src:r,alt:"user"})]}),g.length>=2&&!d&&!p&&Object(O.jsxs)("label",{className:C.a.groupImage,children:["Group Image",Object(O.jsx)("input",{type:"file",name:"image",id:"image",onChange:e=>{u(e.target.files[0]),t(v.groupImageIsSelected(!0))},className:C.a.none})]}),p&&Object(O.jsx)("button",{onClick:()=>{t(v.createGroup(!0)),t(v.groupImageIsSelected(!1)),t(v.showGroupNameInput(!0))},children:"Group Name"}),d&&Object(O.jsx)("button",{onClick:o=>{o.preventDefault();const i=j?g:[...g,{name:n,image:r,userId:c}],d=new FormData;d.append("name",m),d.append("image",h),d.append("groupUsers",JSON.stringify(i)),fetch("https://live-chat-scql.onrender.com/create-group",{method:"POST",headers:{Authorization:"Bearer "+l},body:d}).then((e=>e.json())).then((n=>{if(n.errorMessage)n.goodFile||(t(v.createGroup(!1)),t(v.groupImageIsSelected(!1))),t(v.error(n.errorMessage)),t(v.groupUsers(n.oldInput.groupUsers));else{e.emit("conversations",a,n),t(v.groupName("")),t(v.groupUsers(!1));const o=s.map((e=>e.isChecked?{...e,isChecked:!1}:e));t(v.filteredAgendaNotFound(!1)),t(v.filteredAgenda(s)),t(v.userAgenda(o)),t(v.createGroup(!1)),t(v.isSearching(!1)),t(v.error("")),t(v.showRight(!0)),t(v.groupImageIsSelected(!1)),t(v.showGroupNameInput(!1))}})).catch((e=>{console.log(e)}))},children:"Create Group "})]})},U=a(38),A=a.n(U);var D=()=>{const e=Object(o.b)(),t=Object(o.c)((e=>e.chat.showGroupNameInput)),a=Object(o.c)((e=>e.chat.isSearching)),s=Object(o.c)((e=>e.chat.agenda)),n=Object(o.c)((e=>e.chat.groupName));return setTimeout((()=>{}),3e3),Object(O.jsxs)("div",{className:A.a.search,children:[a&&Object(O.jsx)("button",{className:"fa",onClick:()=>{const t=s.map((e=>e.isChecked?{...e,isChecked:!e.isChecked}:e));e(v.userAgenda(t)),e(v.filteredAgendaNotFound(!1)),e(v.filteredAgenda(s)),e(v.groupUsers(!1)),e(v.isSearching(!1)),e(v.createGroup(!1)),e(v.groupName("")),e(v.showGroupNameInput(!1)),e(v.error(""))},children:"\uf104"}),!t&&Object(O.jsx)("input",{onChange:t=>{const a=t.target.value;if(a.trim().length>0){const t=s.filter((e=>e.name.toLowerCase().includes(a.toLowerCase())));0===t.length?e(v.filteredAgendaNotFound(!0)):e(v.filteredAgendaNotFound(!1)),e(v.filteredAgenda(t))}else e(v.filteredAgenda(s))},type:"text",placeholder:"Search...",onFocus:()=>{e(v.isSearching(!0))}}),t&&Object(O.jsx)("input",{type:"text",placeholder:"Group Name",defaultValue:n,onChange:t=>{e(v.groupName(t.target.value))}})]})},k=a(15),B=a.n(k);var M=()=>{const e=Object(o.b)(),t=Object(o.c)((e=>e.chat.windowWidth)),a=Object(o.c)((e=>e.chat.isSearching)),s=Object(o.c)((e=>e.chat.name)),n=localStorage.getItem("image"),c=localStorage.getItem("userId"),l=Object(o.c)((e=>e.chat.agenda)),d=Object(o.c)((e=>e.chat.filteredAgenda)),g=Object(o.c)((e=>e.chat.filteredAgendaNotFound)),m=Object(o.c)((e=>e.chat.conversations)),h=Object(o.c)((e=>e.chat.createGroup));return Object(O.jsx)("div",{className:B.a.conversation,children:(h?l:a?0!==d.length||g?d:l:m).map((o=>{var d,g;return Object(O.jsx)(i.Fragment,{children:Object(O.jsxs)(r.a,{onClick:t=>{if(t.stopPropagation(),t.preventDefault(),o.userId){e(v.isSearching(!1)),e(v.groupUsers(!1)),e(v.showInput(!0)),e(v.createGroup(!1)),e(v.groupName("")),e(v.showRight(!0)),e(v.error(!1));const t=m.map((e=>{let t;return 2===e.conversationUsers.length&&(e.conversationUsers[0].id!==c&&e.conversationUsers[0].id!==o.userId||e.conversationUsers[1].id!==c&&e.conversationUsers[1].id!==o.userId||(t=e)),t})).filter((e=>void 0!==e));t[0]?(e(v.displayedChat(t[0])),e(v.leaveButton(!0))):(e(v.leaveButton(!1)),e(v.displayedChat({id:a?o.userId:o._id,name:s,image:o.image,secondUserName:o.name,messages:o.messages,conversationUsers:o.conversationUsers?o.conversationUsers:[{id:c,image:n,name:s},{id:o.userId,image:o.image,name:o.name}]})))}else e(v.displayedChat({id:a?o.userId:o._id,name:o.name,image:o.image,secondUserName:o.secondUserName,messages:o.messages,conversationUsers:a?[{id:c,image:n,name:s},{id:o.userId,image:o.image,name:o.name}]:o.conversationUsers})),e(v.leaveButton(!0)),e(v.showInput(!0)),e(v.groupUsers(!1)),e(v.showRight(!0))},className:B.a.conversationInfo,children:[Object(O.jsxs)("div",{className:B.a.conversationDetails,children:[Object(O.jsx)("img",{src:"".concat(2===(null===(d=o.conversationUsers)||void 0===d?void 0:d.length)?[...o.conversationUsers].filter((e=>e.id!==c))[0].image:o.image),alt:"user"}),Object(O.jsxs)("div",{className:B.a.nameAndLastMessage,children:[Object(O.jsx)("div",{className:B.a.chatName,children:2===(null===(g=o.conversationUsers)||void 0===g?void 0:g.length)?o.secondUserName===s?t<960?o.name.slice(0,7)+"...":o.name:t<960?o.secondUserName.slice(0,7)+"...":o.secondUserName:t<960?o.name.slice(0,7)+"...":o.name}),Object(O.jsx)("div",{className:B.a.lastMessage,children:!a&&!h&&(0!==o.messages.length?o.messages[o.messages.length-1].name+" : "+(o.messages[o.messages.length-1].message.length>8?o.messages[o.messages.length-1].message.slice(0,8)+"...":o.messages[o.messages.length-1].message):"")})]})]}),Object(O.jsxs)("div",{className:B.a.lastMessageTime,children:[a&&Object(O.jsx)("input",{onClick:t=>{t.stopPropagation();const a=l.map((e=>e.userId===o.userId?{...e,isChecked:!o.isChecked}:e));e(v.userAgenda(a)),e(v.groupUsers(o))},type:"checkbox",defaultChecked:o.isChecked}),!a&&!h&&(0!==o.messages.length?new Date(o.messages[o.messages.length-1].time).getHours()+":"+(new Date(o.messages[o.messages.length-1].time).getMinutes()<10?"0"+new Date(o.messages[o.messages.length-1].time).getMinutes():new Date(o.messages[o.messages.length-1].time).getMinutes()):"")]})]})},o._id?o._id:o.userId)}))})};var F=()=>Object(O.jsxs)(i.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsx)(D,{}),Object(O.jsx)(M,{})]}),H=a(16),G=a.n(H);var T=()=>{var e,t;const a=Object(i.useContext)(S),s=Object(o.b)(),n=Object(o.c)((e=>e.chat.displayedChat)),r=Object(o.c)((e=>e.chat.windowWidth)),c=Object(o.c)((e=>e.chat.leaveButton)),l=Object(o.c)((e=>e.chat.name)),d=localStorage.getItem("userId"),g=localStorage.getItem("token");return Object(O.jsx)("div",{className:G.a.info,children:Object(O.jsxs)("div",{className:G.a.conversationInfo,children:[Object(O.jsxs)("div",{className:G.a.conversationDetails,children:[r<800&&Object(O.jsx)("button",{className:"fa ".concat(G.a.backButton),onClick:()=>{s(v.showRight(!1))},children:"\uf104"}),n&&Object(O.jsx)("img",{src:2===(null===(e=n.conversationUsers)||void 0===e?void 0:e.length)?null===(t=Object.values({...n.conversationUsers}).filter((e=>e.id!==d))[0])||void 0===t?void 0:t.image:n.image,alt:"user"}),r>380&&Object(O.jsxs)("div",{className:G.a.nameAndLastMessage,children:[Object(O.jsx)("div",{className:G.a.chatName,children:n.secondUserName===l?n.name:n.secondUserName}),Object(O.jsx)("div",{className:G.a.membersNames,children:n.messages&&0!==n.messages.length&&(n.messages?n.messages[n.messages.length-1].name:"")+": "+(n.messages?n.messages[n.messages.length-1].message.length>8?n.messages[n.messages.length-1].message.slice(0,8)+"...":n.messages[n.messages.length-1].message:"")})]})]}),c&&Object(O.jsx)("button",{onClick:e=>{e.preventDefault(),s(v.showRight(!1)),s(v.leaveButton(!1)),fetch("https://live-chat-scql.onrender.com/leave-group",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+g},body:JSON.stringify({id:d,convId:n._id?n._id:n.id,leaveName:l})}).then((e=>e.json())).then((e=>{a.emit("leave-conversation",e)})).catch((e=>{console.log(e)}))},children:"Leave"})]})})},E=a(12),L=a.n(E);var P=()=>{var e;const t=Object(i.useContext)(S),a=Object(o.c)((e=>e.chat.displayedChat)),s=Object(o.b)(),n=Object(i.useRef)(null),r=localStorage.getItem("userId");return Object(i.useEffect)((()=>{(()=>{var e;null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})})()}),[a]),Object(i.useEffect)((()=>(t.on("new-data",((e,t)=>{t.conversationUsers.map((n=>(n.id===r&&((a.id||a._id)&&(a._id?a._id:a.id)===(e._id?e._id:e.id)?(s(v.displayedChat(t)),s(v.updateConversations(t))):(s(v.displayedChat(a)),s(v.updateConversations(t)))),!0)))})),()=>{t.removeAllListeners()})),[a,s,r,t]),Object(O.jsxs)("div",{className:L.a.messages,children:[a.messages&&(null===(e=a.messages)||void 0===e?void 0:e.map((e=>Object(O.jsx)(i.Fragment,{children:Object(O.jsxs)("div",{className:"".concat(L.a.message," ").concat(e.messageUser===r?L.a.personalFlexEnd:""),children:[Object(O.jsxs)("div",{className:"".concat(L.a.messageInfo," ").concat(e.messageUser===r?L.a.personalFlexEnd:""),children:[e.messageUser!==r&&e.messageUser?Object(O.jsx)("img",{src:e.image,alt:"user"}):"",Object(O.jsxs)("div",{className:"".concat(L.a.nameAndMessage," ").concat(e.messageUser!==r?L.a.margin:""," ").concat(e.messageUser?"":L.a.leftConvo),children:[Object(O.jsx)("div",{className:L.a.name,children:e.messageUser!==r?e.name:""}),Object(O.jsx)("pre",{className:L.a.message,children:e.message})]})]}),e.messageUser&&Object(O.jsx)("div",{className:L.a.time,children:new Date(e.time).getHours()+":"+(new Date(e.time).getMinutes()<10?"0"+new Date(e.time).getMinutes():new Date(e.time).getMinutes())})]})},e._id)))),Object(O.jsx)("div",{ref:n})]})},R=a(30),q=a.n(R);var W=()=>{const e=Object(i.useContext)(S),t=Object(o.b)(),a=Object(o.c)((e=>e.chat.displayedChat)),s=Object(o.c)((e=>e.chat.showInput)),n=Object(o.c)((e=>e.chat.name)),r=Object(o.c)((e=>e.chat.message)),c=localStorage.getItem("image"),l=localStorage.getItem("userId"),d=localStorage.getItem("token");return Object(O.jsx)("div",{className:q.a.input,children:Object(O.jsxs)("form",{className:q.a.message,onSubmit:s=>{s.preventDefault(),fetch("https://live-chat-scql.onrender.com/message",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+d},body:JSON.stringify({id:a._id?a._id:a.id,image:c,personalId:l,personalName:n,name:a.name,secondUserName:a.secondUserName,message:r,conversationUsers:a.conversationUsers,displayedChat:a})}).then((e=>e.json())).then((s=>{e.emit("conversations",a,s),t(v.leaveButton(!0))})).catch((e=>{console.log(e)})),t(v.getMessage(""))},children:[s&&Object(O.jsx)("textarea",{type:"text",placeholder:"Type a message",name:"message",onChange:e=>t(v.getMessage(e.target.value)),value:r}),s&&Object(O.jsx)("button",{disabled:!r.trim().length>0,type:"submit",className:"material-icons",children:"\ue163"})]})})};var J=()=>Object(O.jsxs)(i.Fragment,{children:[Object(O.jsx)(T,{}),Object(O.jsx)(P,{}),Object(O.jsx)(W,{})]});var z=()=>{const e=Object(i.useContext)(S),t=Object(c.n)(),a=Object(o.b)(),s=Object(o.c)((e=>e.chat.displayedChat)),n=Object(o.c)((e=>e.chat.error)),r=Object(o.c)((e=>e.chat.showRight)),l=Object(o.c)((e=>e.chat.windowWidth)),d=localStorage.getItem("isAuth"),g=localStorage.getItem("userId"),m=localStorage.getItem("token"),h=localStorage.getItem("image");Object(i.useEffect)((()=>{if(d){const e=localStorage.getItem("expiryDate");p(new Date(e).getTime()-new Date(new Date).getTime())}else t("/login")}));const p=e=>{setTimeout((()=>{a(u.logout()),a(v.displayedChat("")),a(v.leaveButton(!1)),a(v.showInput(!1)),a(v.leaveButton(!1)),localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),localStorage.removeItem("isAuth"),t("/login")}),e)};Object(i.useEffect)((()=>{e.on("leave",(t=>{if("Deleted"===t)return a(v.displayedChat(""));{const e=t.conversationUsers.find((e=>e.id===g));(null===e||void 0===e?void 0:e.id)===g&&t._id===(s._id?s._id:s.id)?(a(v.displayedChat(t)),a(v.updateConversations(t))):(null===e||void 0===e?void 0:e.id)===g?a(v.updateConversations(t)):(a(v.displayedChat("")),a(v.leaveConversation(t)))}return()=>{e.removeAllListeners()}}))}),[a,g,s._id,s.id,e]),Object(i.useEffect)((()=>{e.on("image",(e=>{e.map((e=>(e.conversationUsers.map((t=>(t.id.toString()===g&&(e._id.toString()===(s._id?s._id:s.id)?(a(v.updateConversations({conversation:e,image:!0})),a(v.displayedChat(e))):a(v.updateConversations({conversation:e,image:!0}))),!0))),!0)))}))}),[a,s,e,g]),fetch("https://live-chat-scql.onrender.com/users",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+m}}).then((e=>e.json())).then((e=>{var t;a(v.name(null===(t=e.users.find((e=>e.userId===g)))||void 0===t?void 0:t.name)),a(v.user(e.users));const s=e.users.filter((e=>e.userId!==g));s.map((e=>[{...e,isChecked:!1}])),a(v.userAgenda(s))})).catch((e=>{console.log(e)})),fetch("https://live-chat-scql.onrender.com/conversation",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+m},body:JSON.stringify({id:g})}).then((e=>e.json())).then((e=>{a(v.getConversations(e.conversations))})).catch((e=>{console.log(e)}));const j=r?I.a.dontShow:"",b=r?"":I.a.dontShow,_=()=>{a(v.windowWidth(window.innerWidth))};return Object(i.useEffect)((()=>(window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_)}))),Object(i.useEffect)((()=>{a(v.personalImage(h)),a(v.windowWidth(window.innerWidth))})),Object(O.jsxs)("div",{className:I.a.home,children:[Object(O.jsx)("p",{children:n}),d&&Object(O.jsxs)("div",{className:I.a.container,children:[Object(O.jsx)("div",{className:"".concat(I.a.left," ").concat(l<800?j:""),children:Object(O.jsx)(F,{})}),Object(O.jsx)("div",{className:"".concat(I.a.right," ").concat(l<800?b:""),children:Object(O.jsx)(J,{})})]})]})};var V=()=>Object(O.jsx)("div",{children:Object(O.jsx)(z,{})}),Z=a(31),K=a.n(Z);var Q=()=>{const e=Object(o.b)(),[t,a]=Object(i.useState)(""),[s,n]=Object(i.useState)(""),[r,l]=Object(i.useState)(""),d=Object(c.n)();return Object(O.jsx)("div",{className:K.a.loginContainer,children:Object(O.jsxs)("form",{onSubmit:o=>{o.preventDefault(),fetch("https://live-chat-scql.onrender.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:s})}).then((e=>e.json())).then((t=>{if(t.errorMessage)a(t.oldInput.email),n(t.oldInput.password),l(t.errorMessage);else{e(u.login({token:t.token,userId:t.userId,image:t.image})),e(v.personalImage(t.image)),e(u.login({image:t.image})),localStorage.setItem("token",t.token),localStorage.setItem("userId",t.userId),localStorage.setItem("isAuth",!0),localStorage.setItem("image",t.image);const a=36e5,s=new Date((new Date).getTime()+a);localStorage.setItem("expiryDate",s),d("/")}})).catch((e=>{console.log(e)}))},className:K.a.login,children:[Object(O.jsx)("p",{children:r}),Object(O.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(O.jsx)("input",{type:"email",name:"email",onChange:e=>{a(e.target.value)},value:t}),Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password",onChange:e=>{n(e.target.value)},value:s}),Object(O.jsx)("button",{type:"submit",children:"Login"})]})})};var X=()=>Object(O.jsx)("div",{children:Object(O.jsx)(Q,{})}),Y=a(24),$=a.n(Y);var ee=()=>{const e=Object(c.n)(""),[t,a]=Object(i.useState)(""),[s,n]=Object(i.useState)(""),[o,r]=Object(i.useState)(""),[l,d]=Object(i.useState)(""),[g,m]=Object(i.useState)("");return Object(O.jsx)("div",{className:$.a.signinContainer,children:Object(O.jsxs)("form",{onSubmit:c=>{c.preventDefault();const i=new FormData;i.append("name",t),i.append("image",g),i.append("email",s),i.append("password",o),c.preventDefault(),fetch("https://live-chat-scql.onrender.com/signup",{method:"POST",body:i}).then((e=>e.json())).then((t=>{t.message?e("/login"):(console.log(t.oldInput.image),a(t.oldInput.name),n(t.oldInput.email),r(t.oldInput.password),d(t.errorMessage))}))},className:$.a.signin,children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name"}),Object(O.jsx)("input",{onChange:e=>{a(e.target.value)},type:"text",name:"name",value:t}),Object(O.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(O.jsx)("input",{onChange:e=>{n(e.target.value)},type:"email",name:"email",value:s}),Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{onChange:e=>{r(e.target.value)},type:"password",name:"password",value:o}),Object(O.jsxs)("label",{htmlFor:"image",children:["Avatar",Object(O.jsx)("input",{className:$.a.image,onChange:e=>{e.preventDefault(),m(e.target.files[0])},type:"file",name:"image",id:"image"})]}),Object(O.jsx)("p",{children:l}),Object(O.jsx)("button",{type:"submit",children:"Signin"})]})})};var te=()=>Object(O.jsx)("div",{children:Object(O.jsx)(ee,{})});const ae=Object(r.b)([{path:"/",element:Object(O.jsx)(_,{}),children:[{path:"/signin",element:Object(O.jsx)(te,{})},{path:"/login",element:Object(O.jsx)(X,{})},{path:"/",element:Object(O.jsx)(V,{})}]}]);var se=()=>Object(O.jsx)(S.Provider,{value:N,children:Object(O.jsx)(c.c,{router:ae})});var ne=Object(m.a)({reducer:{auth:p,chat:b}});n.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(o.a,{store:ne,children:Object(O.jsx)(se,{})}))}},[[56,1,2]]]);
//# sourceMappingURL=main.0c115f5d.chunk.js.map