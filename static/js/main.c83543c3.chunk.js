(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(5),c=a.n(s),r=a(6),i=a(7),u=a(8),o=a(2),d=a(11),j=a(10),h=a(4),l=a.n(h),b=a(9),p=a.n(b),O=(a(17),a(0)),f=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={users_data:[],loading:!1},n.updateState=n.updateState.bind(Object(o.a)(n)),n}return Object(u.a)(a,[{key:"updateState",value:function(){this.setState({loading:!0}),setTimeout(Object(r.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://reqres.in/api/users?page=1");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,console.log(a),this.setState({users_data:a.data,loading:!1});case 8:case"end":return t.stop()}}),t,this)}))).bind(this),2e3)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("nav",{className:"navbar",children:Object(O.jsxs)("div",{className:"navitems",children:[Object(O.jsx)("h2",{children:"LGMVIP"}),Object(O.jsx)("button",{className:"fetchbtn",onClick:this.updateState,children:"Get Users"})]})}),Object(O.jsx)("div",{className:"userdatacontainer",children:Object(O.jsx)(p.a,{loading:this.state.loading,users:this.state.users_data})})]})}}]),a}(n.Component),v=document.getElementById("root");c.a.render(Object(O.jsx)(n.StrictMode,{children:Object(O.jsx)(f,{})}),v)},9:function(t,e){}},[[19,1,2]]]);
//# sourceMappingURL=main.c83543c3.chunk.js.map