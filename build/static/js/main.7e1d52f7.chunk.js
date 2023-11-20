(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{22:function(e,t,n){e.exports={messages:"ChatBox_messages__19jSb",message:"ChatBox_message__2y8AG",messageInfo:"ChatBox_messageInfo__1Uegq",nameAndMessage:"ChatBox_nameAndMessage__2f0JZ",name:"ChatBox_name__1ZnyV",time:"ChatBox_time__2ms21",personalFlexEnd:"ChatBox_personalFlexEnd__3Bsos",leftConvo:"ChatBox_leftConvo__3yeCn",margin:"ChatBox_margin__2a3L3"}},29:function(e,t,n){e.exports={conversation:"PersonalMessages_conversation__DwH6m",conversationInfo:"PersonalMessages_conversationInfo__3B8ol",conversationDetails:"PersonalMessages_conversationDetails__14pAp"}},30:function(e,t,n){e.exports={info:"ChatInfo_info__2O5oK",conversation:"ChatInfo_conversation__2JZvU",conversationInfo:"ChatInfo_conversationInfo__2BQSg",conversationDetails:"ChatInfo_conversationDetails__2HTIR",backButton:"ChatInfo_backButton__2ug9V"}},31:function(e,t,n){e.exports={home:"HomeContent_home__2dpHN",container:"HomeContent_container__1sGoT",left:"HomeContent_left__3nwIX",action:"HomeContent_action__3OTHV",search:"HomeContent_search__qvOn-",conversation:"HomeContent_conversation__31RHE",right:"HomeContent_right__x2vJI",conversationInfo:"HomeContent_conversationInfo__2AKN9",conversationDetails:"HomeContent_conversationDetails__1h1hD",info:"HomeContent_info__CgNZ-",messages:"HomeContent_messages__19pjl",message:"HomeContent_message__1r2Wn",messageInfo:"HomeContent_messageInfo__30amj",input:"HomeContent_input__udSoR",dontShow:"HomeContent_dontShow__1phIB"}},35:function(e,t,n){e.exports={action:"CreateChat_action__en-HZ",groupImage:"CreateChat_groupImage__271vi",none:"CreateChat_none__8pSs7"}},46:function(e,t,n){e.exports={signinContainer:"SigninContent_signinContainer__3isNf",signin:"SigninContent_signin__3Jjqa",image:"SigninContent_image__3aV1k"}},50:function(e,t,n){e.exports={header:"AuthHeader_header__7Kx4G",name:"AuthHeader_name__Q6Mik"}},52:function(e,t,n){e.exports={input:"InputMessage_input__2eKQA",message:"InputMessage_message__2_SEW"}},53:function(e,t,n){e.exports={loginContainer:"LoginContent_loginContainer__3DO_j",login:"LoginContent_login__2p8BH"}},55:function(e,t,n){},60:function(e,t,n){e.exports={search:"Search_search__2DVx1",groupNameInvalid:"Search_groupNameInvalid__3ot_0"}},78:function(e,t,n){"use strict";n.r(t);var a=n(56),s=n.n(a),o=n(4),c=(n(55),n(18)),i=n(3),r=n(0),u=n.n(r),l=n(50),d=n.n(l),g=n(32),m=Object(g.b)({name:"authentication",initialState:{isAuthenticated:!1,token:"",userId:"",image:""},reducers:{login:function(e,t){e.isAuthenticated=!0,e.token=t.payload.token,e.userId=t.payload.userId,e.image=t.payload.image},logout:function(e){e.isAuthenticated=!1,e.token="",e.userId="",e.image=""}}}),h=m.actions,j=m.reducer,p=n(12),f=Object(g.b)({name:"conversation",initialState:{secondUser:"",name:"",user:"",agenda:[],filteredAgenda:[],filteredAgendaNotFound:"",displayedChat:"",isSearching:!1,message:"",conversations:[],createGroup:!1,groupUsers:[],leaveButton:!1,showInput:!1,error:"",showRight:!1,windowWidth:"",image:"",groupName:"",groupImageIsSelected:!1,showGroupNameInput:!1,groupImage:""},reducers:{name:function(e,t){e.name=t.payload},user:function(e,t){e.user=t.payload},userAgenda:function(e,t){e.agenda=t.payload},secondUser:function(e,t){e.secondUser=t.payload},isSearching:function(e,t){e.isSearching=t.payload},filteredAgenda:function(e,t){e.filteredConvo=t.payload},filteredAgendaNotFound:function(e,t){e.filteredAgendaNotFound=t.payload},displayedChat:function(e,t){e.displayedChat=t.payload},getMessage:function(e,t){e.message=t.payload},getConversations:function(e,t){e.conversations=t.payload},createGroup:function(e,t){e.createGroup=t.payload},groupName:function(e,t){e.groupName=t.payload},groupUsers:function(e,t){t.payload.length>=2?e.groupUsers=t.payload:!1===t.payload?e.groupUsers=[]:e.groupUsers.find((function(e){return e.userId===t.payload.userId}))?e.groupUsers=e.groupUsers.filter((function(e){return e.userId!==t.payload.userId})):e.groupUsers.push(t.payload)},updateConversations:function(e,t){if(t.payload.conversation){var n=e.conversations.findIndex((function(e){return e._id===t.payload.conversation._id}));e.conversations[n]=t.payload.conversation}else e.conversations=e.conversations.filter((function(e){return e._id!==t.payload._id})),e.conversations=[t.payload].concat(Object(p.a)(e.conversations))},leaveConversation:function(e,t){e.conversations=e.conversations.filter((function(e){return e._id!==t.payload._id}))},leaveButton:function(e,t){e.leaveButton=t.payload},showInput:function(e,t){e.showInput=t.payload},updateMessages:function(e,t){e.displayedChat.messages=t.payload},error:function(e,t){e.error=t.payload},showRight:function(e,t){e.showRight=t.payload},windowWidth:function(e,t){e.windowWidth=t.payload},personalImage:function(e,t){e.image=t.payload},groupImage:function(e,t){e.groupImage=t.payload},groupImageIsSelected:function(e,t){e.groupImageIsSelected=t.payload},showGroupNameInput:function(e,t){e.showGroupNameInput=t.payload}}}),v=f.actions,b=f.reducer,O=n(1),_=function(){var e=Object(i.n)(),t=Object(o.b)(),n=localStorage.getItem("isAuth");return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsxs)("header",{className:d.a.header,children:[Object(O.jsx)("div",{className:d.a.name,onClick:function(){return e("/live-chat")},children:"Live Chat"}),Object(O.jsx)("nav",{children:Object(O.jsx)("ul",{children:Object(O.jsxs)("li",{children:[!n&&Object(O.jsx)(c.a,{to:"/live-chat/signin",children:"Signin"}),n&&Object(O.jsx)(c.a,{onClick:function(){t(h.logout()),t(v.displayedChat("")),t(v.leaveButton(!1)),localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),localStorage.removeItem("isAuth"),localStorage.removeItem("image"),e("/live-chat/login")},to:"/live-chat/login",children:"Logout"}),!n&&Object(O.jsx)(c.a,{to:"/live-chat/login",children:"Login"})]})})})]}),Object(O.jsx)(i.a,{})]})},x=n(14),I=n(31),C=n.n(I),y=n(5),N=n(35),S=n.n(N),w=n(61),U=Object(w.a)("https://live-chat-scql.onrender.com"),A=u.a.createContext(),D=function(){var e=Object(r.useContext)(A),t=Object(o.b)(),n=Object(o.c)((function(e){return e.chat.displayedChat})),a=Object(o.c)((function(e){return e.chat.agenda})),s=Object(o.c)((function(e){return e.chat.name})),c=Object(o.c)((function(e){return e.chat.image})),i=localStorage.getItem("userId"),u=localStorage.getItem("token"),l=Object(o.c)((function(e){return e.chat.createGroup})),d=Object(o.c)((function(e){return e.chat.groupUsers})),g=Object(o.c)((function(e){return e.chat.groupName})),m=Object(r.useState)(""),h=Object(y.a)(m,2),j=h[0],f=h[1],b=Object(o.c)((function(e){return e.chat.groupImageIsSelected})),_=null===d||void 0===d?void 0:d.find((function(e){return e.userId===i}));return Object(O.jsxs)("div",{className:S.a.action,children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"file",name:"image",id:"image",onChange:function(n){n.preventDefault();var a=new FormData;a.append("image",n.target.files[0]),a.append("id",i),fetch("https://live-chat-scql.onrender.com/change-image",{method:"POST",headers:{Authorization:"Bearer "+u},body:a}).then((function(e){return e.json()})).then((function(n){n.errorMessage?t(v.error(n.errorMessage)):(t(v.error("")),t(v.personalImage(n.image)),localStorage.setItem("image",n.image),e.emit("change-image",n.conversations))})).catch((function(e){console.log(e)}))},className:S.a.none}),Object(O.jsx)("img",{src:c,alt:"user"})]}),d.length>=2&&!l&&!b&&Object(O.jsxs)("label",{className:S.a.groupImage,children:["Group Image",Object(O.jsx)("input",{type:"file",name:"image",id:"image",onChange:function(e){f(e.target.files[0]),t(v.groupImageIsSelected(!0))},className:S.a.none})]}),b&&Object(O.jsx)("button",{onClick:function(){t(v.createGroup(!0)),t(v.groupImageIsSelected(!1)),t(v.showGroupNameInput(!0))},children:"Group Name"}),l&&Object(O.jsx)("button",{onClick:function(o){o.preventDefault();var r=_?d:[].concat(Object(p.a)(d),[{name:s,image:c,userId:i}]),l=new FormData;l.append("name",g),l.append("image",j),l.append("groupUsers",JSON.stringify(r)),fetch("https://live-chat-scql.onrender.com/create-group",{method:"POST",headers:{Authorization:"Bearer "+u},body:l}).then((function(e){return e.json()})).then((function(s){if(s.errorMessage)s.goodFile||(t(v.createGroup(!1)),t(v.groupImageIsSelected(!1))),t(v.error(s.errorMessage)),t(v.groupUsers(s.oldInput.groupUsers));else{e.emit("conversations",n,s),t(v.groupName("")),t(v.groupUsers(!1));var o=a.map((function(e){return e.isChecked?Object(x.a)(Object(x.a)({},e),{},{isChecked:!1}):e}));t(v.filteredAgendaNotFound(!1)),t(v.filteredAgenda(a)),t(v.userAgenda(o)),t(v.createGroup(!1)),t(v.isSearching(!1)),t(v.error("")),t(v.showRight(!0)),t(v.groupImageIsSelected(!1)),t(v.showGroupNameInput(!1))}})).catch((function(e){console.log(e)}))},children:"Create Group "})]})},k=n(60),B=n.n(k),M=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.chat.showGroupNameInput})),n=Object(o.c)((function(e){return e.chat.isSearching})),a=Object(o.c)((function(e){return e.chat.agenda})),s=Object(o.c)((function(e){return e.chat.groupName}));return setTimeout((function(){}),3e3),Object(O.jsxs)("div",{className:B.a.search,children:[n&&Object(O.jsx)("button",{className:"fa",onClick:function(){var t=a.map((function(e){return e.isChecked?Object(x.a)(Object(x.a)({},e),{},{isChecked:!e.isChecked}):e}));e(v.userAgenda(t)),e(v.filteredAgendaNotFound(!1)),e(v.filteredAgenda(a)),e(v.groupUsers(!1)),e(v.isSearching(!1)),e(v.createGroup(!1)),e(v.groupName("")),e(v.showGroupNameInput(!1)),e(v.error(""))},children:"\uf104"}),!t&&Object(O.jsx)("input",{onChange:function(t){var n=t.target.value;if(n.trim().length>0){var s=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));0===s.length?e(v.filteredAgendaNotFound(!0)):e(v.filteredAgendaNotFound(!1)),e(v.filteredAgenda(s))}else e(v.filteredAgenda(a))},type:"text",placeholder:"Search...",onFocus:function(){e(v.isSearching(!0))}}),t&&Object(O.jsx)("input",{type:"text",placeholder:"Group Name",defaultValue:s,onChange:function(t){e(v.groupName(t.target.value))}})]})},F=n(29),H=n.n(F),G=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.chat.windowWidth})),n=Object(o.c)((function(e){return e.chat.isSearching})),a=Object(o.c)((function(e){return e.chat.name})),s=localStorage.getItem("image"),i=localStorage.getItem("userId"),u=Object(o.c)((function(e){return e.chat.agenda})),l=Object(o.c)((function(e){return e.chat.filteredAgenda})),d=Object(o.c)((function(e){return e.chat.filteredAgendaNotFound})),g=Object(o.c)((function(e){return e.chat.conversations})),m=Object(o.c)((function(e){return e.chat.createGroup}));return Object(O.jsx)("div",{className:H.a.conversation,children:(m?u:n?0!==l.length||d?l:u:g).map((function(o){var l,d;return Object(O.jsx)(r.Fragment,{children:Object(O.jsxs)(c.a,{onClick:function(t){if(t.stopPropagation(),t.preventDefault(),o.userId){e(v.isSearching(!1)),e(v.groupUsers(!1)),e(v.showInput(!0)),e(v.createGroup(!1)),e(v.groupName("")),e(v.showRight(!0)),e(v.error(!1));var c=g.map((function(e){var t;return 2===e.conversationUsers.length&&(e.conversationUsers[0].id!==i&&e.conversationUsers[0].id!==o.userId||e.conversationUsers[1].id!==i&&e.conversationUsers[1].id!==o.userId||(t=e)),t})).filter((function(e){return void 0!==e}));c[0]?(e(v.displayedChat(c[0])),e(v.leaveButton(!0))):(e(v.leaveButton(!1)),e(v.displayedChat({id:n?o.userId:o._id,name:a,image:o.image,secondUserName:o.name,messages:o.messages,conversationUsers:o.conversationUsers?o.conversationUsers:[{id:i,image:s,name:a},{id:o.userId,image:o.image,name:o.name}]})))}else e(v.displayedChat({id:n?o.userId:o._id,name:o.name,image:o.image,secondUserName:o.secondUserName,messages:o.messages,conversationUsers:n?[{id:i,image:s,name:a},{id:o.userId,image:o.image,name:o.name}]:o.conversationUsers})),e(v.leaveButton(!0)),e(v.showInput(!0)),e(v.groupUsers(!1)),e(v.showRight(!0))},className:H.a.conversationInfo,children:[Object(O.jsxs)("div",{className:H.a.conversationDetails,children:[Object(O.jsx)("img",{src:"".concat(2===(null===(l=o.conversationUsers)||void 0===l?void 0:l.length)?Object(p.a)(o.conversationUsers).filter((function(e){return e.id!==i}))[0].image:o.image),alt:"user"}),Object(O.jsxs)("div",{className:H.a.nameAndLastMessage,children:[Object(O.jsx)("div",{className:H.a.chatName,children:2===(null===(d=o.conversationUsers)||void 0===d?void 0:d.length)?o.secondUserName===a?t<960?o.name.slice(0,7)+"...":o.name:t<960?o.secondUserName.slice(0,7)+"...":o.secondUserName:t<960?o.name.slice(0,7)+"...":o.name}),Object(O.jsx)("div",{className:H.a.lastMessage,children:!n&&!m&&(0!==o.messages.length?o.messages[o.messages.length-1].name+" : "+(o.messages[o.messages.length-1].message.length>8?o.messages[o.messages.length-1].message.slice(0,8)+"...":o.messages[o.messages.length-1].message):"")})]})]}),Object(O.jsxs)("div",{className:H.a.lastMessageTime,children:[n&&Object(O.jsx)("input",{onClick:function(t){t.stopPropagation();var n=u.map((function(e){return e.userId===o.userId?Object(x.a)(Object(x.a)({},e),{},{isChecked:!o.isChecked}):e}));e(v.userAgenda(n)),e(v.groupUsers(o))},type:"checkbox",defaultChecked:o.isChecked}),!n&&!m&&(0!==o.messages.length?new Date(o.messages[o.messages.length-1].time).getHours()+":"+(new Date(o.messages[o.messages.length-1].time).getMinutes()<10?"0"+new Date(o.messages[o.messages.length-1].time).getMinutes():new Date(o.messages[o.messages.length-1].time).getMinutes()):"")]})]})},o._id?o._id:o.userId)}))})},T=function(){return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)(D,{}),Object(O.jsx)(M,{}),Object(O.jsx)(G,{})]})},E=n(30),L=n.n(E),P=function(){var e,t,n=Object(r.useContext)(A),a=Object(o.b)(),s=Object(o.c)((function(e){return e.chat.displayedChat})),c=Object(o.c)((function(e){return e.chat.windowWidth})),i=Object(o.c)((function(e){return e.chat.leaveButton})),u=Object(o.c)((function(e){return e.chat.name})),l=localStorage.getItem("userId"),d=localStorage.getItem("token");return Object(O.jsx)("div",{className:L.a.info,children:Object(O.jsxs)("div",{className:L.a.conversationInfo,children:[Object(O.jsxs)("div",{className:L.a.conversationDetails,children:[c<800&&Object(O.jsx)("button",{className:"fa ".concat(L.a.backButton),onClick:function(){a(v.showRight(!1))},children:"\uf104"}),s&&Object(O.jsx)("img",{src:2===(null===(e=s.conversationUsers)||void 0===e?void 0:e.length)?null===(t=Object.values(Object(x.a)({},s.conversationUsers)).filter((function(e){return e.id!==l}))[0])||void 0===t?void 0:t.image:s.image,alt:"user"}),c>380&&Object(O.jsxs)("div",{className:L.a.nameAndLastMessage,children:[Object(O.jsx)("div",{className:L.a.chatName,children:s.secondUserName===u?s.name:s.secondUserName}),Object(O.jsx)("div",{className:L.a.membersNames,children:s.messages&&0!==s.messages.length&&(s.messages?s.messages[s.messages.length-1].name:"")+": "+(s.messages?s.messages[s.messages.length-1].message.length>8?s.messages[s.messages.length-1].message.slice(0,8)+"...":s.messages[s.messages.length-1].message:"")})]})]}),i&&Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),a(v.showRight(!1)),a(v.leaveButton(!1)),fetch("https://live-chat-scql.onrender.com/leave-group",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+d},body:JSON.stringify({id:l,convId:s._id?s._id:s.id,leaveName:u})}).then((function(e){return e.json()})).then((function(e){n.emit("leave-conversation",e)})).catch((function(e){console.log(e)}))},children:"Leave"})]})})},R=n(22),q=n.n(R),W=function(){var e,t=Object(r.useContext)(A),n=Object(o.c)((function(e){return e.chat.displayedChat})),a=Object(o.b)(),s=Object(r.useRef)(null),c=localStorage.getItem("userId");return Object(r.useEffect)((function(){!function(){var e;null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[n]),Object(r.useEffect)((function(){return t.on("new-data",(function(e,t){t.conversationUsers.map((function(s){return s.id===c&&((n.id||n._id)&&(n._id?n._id:n.id)===(e._id?e._id:e.id)?(a(v.displayedChat(t)),a(v.updateConversations(t))):(a(v.displayedChat(n)),a(v.updateConversations(t)))),!0}))})),function(){t.removeAllListeners()}}),[n,a,c,t]),Object(O.jsxs)("div",{className:q.a.messages,children:[n.messages&&(null===(e=n.messages)||void 0===e?void 0:e.map((function(e){return Object(O.jsx)(r.Fragment,{children:Object(O.jsxs)("div",{className:"".concat(q.a.message," ").concat(e.messageUser===c?q.a.personalFlexEnd:""),children:[Object(O.jsxs)("div",{className:"".concat(q.a.messageInfo," ").concat(e.messageUser===c?q.a.personalFlexEnd:""),children:[e.messageUser!==c&&e.messageUser?Object(O.jsx)("img",{src:e.image,alt:"user"}):"",Object(O.jsxs)("div",{className:"".concat(q.a.nameAndMessage," ").concat(e.messageUser!==c?q.a.margin:""," ").concat(e.messageUser?"":q.a.leftConvo),children:[Object(O.jsx)("div",{className:q.a.name,children:e.messageUser!==c?e.name:""}),Object(O.jsx)("pre",{className:q.a.message,children:e.message})]})]}),e.messageUser&&Object(O.jsx)("div",{className:q.a.time,children:new Date(e.time).getHours()+":"+(new Date(e.time).getMinutes()<10?"0"+new Date(e.time).getMinutes():new Date(e.time).getMinutes())})]})},e._id)}))),Object(O.jsx)("div",{ref:s})]})},J=n(52),z=n.n(J),V=function(){var e=Object(r.useContext)(A),t=Object(o.b)(),n=Object(o.c)((function(e){return e.chat.displayedChat})),a=Object(o.c)((function(e){return e.chat.showInput})),s=Object(o.c)((function(e){return e.chat.name})),c=Object(o.c)((function(e){return e.chat.message})),i=localStorage.getItem("image"),u=localStorage.getItem("userId"),l=localStorage.getItem("token");return Object(O.jsx)("div",{className:z.a.input,children:Object(O.jsxs)("form",{className:z.a.message,onSubmit:function(a){a.preventDefault(),fetch("https://live-chat-scql.onrender.com/message",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+l},body:JSON.stringify({id:n._id?n._id:n.id,image:i,personalId:u,personalName:s,name:n.name,secondUserName:n.secondUserName,message:c,conversationUsers:n.conversationUsers,displayedChat:n})}).then((function(e){return e.json()})).then((function(a){e.emit("conversations",n,a),t(v.leaveButton(!0))})).catch((function(e){console.log(e)})),t(v.getMessage(""))},children:[a&&Object(O.jsx)("textarea",{type:"text",placeholder:"Type a message",name:"message",onChange:function(e){return t(v.getMessage(e.target.value))},value:c}),a&&Object(O.jsx)("button",{disabled:!c.trim().length>0,type:"submit",className:"material-icons",children:"\ue163"})]})})},Z=function(){return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)(P,{}),Object(O.jsx)(W,{}),Object(O.jsx)(V,{})]})},K=function(){var e=Object(r.useContext)(A),t=Object(i.n)(),n=Object(o.b)(),a=Object(o.c)((function(e){return e.chat.displayedChat})),s=Object(o.c)((function(e){return e.chat.error})),c=Object(o.c)((function(e){return e.chat.showRight})),u=Object(o.c)((function(e){return e.chat.windowWidth})),l=localStorage.getItem("isAuth"),d=localStorage.getItem("userId"),g=localStorage.getItem("token"),m=localStorage.getItem("image");Object(r.useEffect)((function(){if(l){var e=localStorage.getItem("expiryDate");j(new Date(e).getTime()-new Date(new Date).getTime())}else t("/live-chat/login")}));var j=function(e){setTimeout((function(){n(h.logout()),n(v.displayedChat("")),n(v.leaveButton(!1)),n(v.showInput(!1)),n(v.leaveButton(!1)),localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),localStorage.removeItem("isAuth"),t("/live-chat/login")}),e)};Object(r.useEffect)((function(){e.on("leave",(function(t){if("Deleted"===t)return n(v.displayedChat(""));var s=t.conversationUsers.find((function(e){return e.id===d}));return(null===s||void 0===s?void 0:s.id)===d&&t._id===(a._id?a._id:a.id)?(n(v.displayedChat(t)),n(v.updateConversations(t))):(null===s||void 0===s?void 0:s.id)===d?n(v.updateConversations(t)):(n(v.displayedChat("")),n(v.leaveConversation(t))),function(){e.removeAllListeners()}}))}),[n,d,a._id,a.id,e]),Object(r.useEffect)((function(){e.on("image",(function(e){e.map((function(e){return e.conversationUsers.map((function(t){return t.id.toString()===d&&(e._id.toString()===(a._id?a._id:a.id)?(n(v.updateConversations({conversation:e,image:!0})),n(v.displayedChat(e))):n(v.updateConversations({conversation:e,image:!0}))),!0})),!0}))}))}),[n,a,e,d]),fetch("https://live-chat-scql.onrender.com/users",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+g}}).then((function(e){return e.json()})).then((function(e){var t;n(v.name(null===(t=e.users.find((function(e){return e.userId===d})))||void 0===t?void 0:t.name)),n(v.user(e.users));var a=e.users.filter((function(e){return e.userId!==d}));a.map((function(e){return[Object(x.a)(Object(x.a)({},e),{},{isChecked:!1})]})),n(v.userAgenda(a))})).catch((function(e){console.log(e)})),fetch("https://live-chat-scql.onrender.com/conversation",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+g},body:JSON.stringify({id:d})}).then((function(e){return e.json()})).then((function(e){n(v.getConversations(e.conversations))})).catch((function(e){console.log(e)}));var p=c?C.a.dontShow:"",f=c?"":C.a.dontShow,b=function(){n(v.windowWidth(window.innerWidth))};return Object(r.useEffect)((function(){return window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}})),Object(r.useEffect)((function(){n(v.personalImage(m)),n(v.windowWidth(window.innerWidth))})),Object(O.jsxs)("div",{className:C.a.home,children:[Object(O.jsx)("p",{children:s}),l&&Object(O.jsxs)("div",{className:C.a.container,children:[Object(O.jsx)("div",{className:"".concat(C.a.left," ").concat(u<800?p:""),children:Object(O.jsx)(T,{})}),Object(O.jsx)("div",{className:"".concat(C.a.right," ").concat(u<800?f:""),children:Object(O.jsx)(Z,{})})]})]})},Q=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(K,{})})},X=n(53),Y=n.n(X),$=function(){var e=Object(o.b)(),t=Object(r.useState)(""),n=Object(y.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(""),u=Object(y.a)(c,2),l=u[0],d=u[1],g=Object(r.useState)(""),m=Object(y.a)(g,2),j=m[0],p=m[1],f=Object(i.n)();return Object(O.jsx)("div",{className:Y.a.loginContainer,children:Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("https://live-chat-scql.onrender.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:l})}).then((function(e){return e.json()})).then((function(t){if(t.errorMessage)s(t.oldInput.email),d(t.oldInput.password),p(t.errorMessage);else{e(h.login({token:t.token,userId:t.userId,image:t.image})),e(v.personalImage(t.image)),e(h.login({image:t.image})),localStorage.setItem("token",t.token),localStorage.setItem("userId",t.userId),localStorage.setItem("isAuth",!0),localStorage.setItem("image",t.image);var n=new Date((new Date).getTime()+36e5);localStorage.setItem("expiryDate",n),f("/live-chat")}})).catch((function(e){console.log(e)}))},className:Y.a.login,children:[Object(O.jsx)("p",{children:j}),Object(O.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(O.jsx)("input",{type:"email",name:"email",onChange:function(e){s(e.target.value)},value:a}),Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password",onChange:function(e){d(e.target.value)},value:l}),Object(O.jsx)("button",{type:"submit",children:"Login"})]})})},ee=function(){return Object(O.jsx)("div",{children:Object(O.jsx)($,{})})},te=n(46),ne=n.n(te),ae=function(){var e=Object(i.n)(""),t=Object(r.useState)(""),n=Object(y.a)(t,2),a=n[0],s=n[1],o=Object(r.useState)(""),c=Object(y.a)(o,2),u=c[0],l=c[1],d=Object(r.useState)(""),g=Object(y.a)(d,2),m=g[0],h=g[1],j=Object(r.useState)(""),p=Object(y.a)(j,2),f=p[0],v=p[1],b=Object(r.useState)(""),_=Object(y.a)(b,2),x=_[0],I=_[1];return Object(O.jsx)("div",{className:ne.a.signinContainer,children:Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=new FormData;n.append("name",a),n.append("image",x),n.append("email",u),n.append("password",m),t.preventDefault(),fetch("https://live-chat-scql.onrender.com/signup",{method:"POST",body:n}).then((function(e){return e.json()})).then((function(t){t.message?e("/live-chat/login"):(console.log(t.oldInput.image),s(t.oldInput.name),l(t.oldInput.email),h(t.oldInput.password),v(t.errorMessage))}))},className:ne.a.signin,children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name"}),Object(O.jsx)("input",{onChange:function(e){s(e.target.value)},type:"text",name:"name",value:a}),Object(O.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(O.jsx)("input",{onChange:function(e){l(e.target.value)},type:"email",name:"email",value:u}),Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{onChange:function(e){h(e.target.value)},type:"password",name:"password",value:m}),Object(O.jsxs)("label",{htmlFor:"image",children:["Avatar",Object(O.jsx)("input",{className:ne.a.image,onChange:function(e){e.preventDefault(),I(e.target.files[0])},type:"file",name:"image",id:"image"})]}),Object(O.jsx)("p",{children:f}),Object(O.jsx)("button",{type:"submit",children:"Signin"})]})})},se=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(ae,{})})},oe=Object(c.b)([{path:"/live-chat",element:Object(O.jsx)(_,{}),children:[{path:"/live-chat/signin",element:Object(O.jsx)(se,{})},{path:"/live-chat/login",element:Object(O.jsx)(ee,{})},{path:"/live-chat",element:Object(O.jsx)(Q,{})}]}]),ce=function(){return Object(O.jsx)(A.Provider,{value:U,children:Object(O.jsx)(i.c,{router:oe})})},ie=Object(g.a)({reducer:{auth:j,chat:b}});s.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(o.a,{store:ie,children:Object(O.jsx)(ce,{})}))}},[[78,1,2]]]);
//# sourceMappingURL=main.7e1d52f7.chunk.js.map