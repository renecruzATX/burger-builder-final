(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(42),i=n.n(o),l=n(113),c=n(9),u=n(18),s=n(44),d=(n(68),n(3)),p=n(4),m=n(6),h=n(5),g=n(7),f=n(116),E=n(75),v=n(114),b=n(117),_=function(e){return e.children},O=n(45),y=n.n(O),C=n(27),k=n.n(C),S=n(46),I=n.n(S),j=n(47),D=n.n(j),T=function(e){return a.a.createElement("div",{className:D.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:I.a,alt:"Cruz Burger"}))},N=n(48),A=n.n(N),w=n(115),B=n(31),R=n.n(B),L=function(e){return a.a.createElement("li",{className:R.a.NavigationItem},a.a.createElement(w.a,{to:e.link,exact:e.exact,activeClassName:R.a.active},e.children))},H=function(e){return a.a.createElement("ul",{className:A.a.NavigationItems},a.a.createElement(L,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(L,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(L,{link:"/logout"},"Logout"):a.a.createElement(L,{link:"/login"},"Login"))},x=n(49),U=n.n(x),P=function(e){return a.a.createElement("div",{className:U.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},F=function(e){return a.a.createElement("header",{className:k.a.Toolbar},a.a.createElement(P,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:k.a.Logo},a.a.createElement(T,null)),a.a.createElement("nav",{className:k.a.DesktopOnly},a.a.createElement(H,{isAuthenticated:e.isAuth})))},M=n(19),G=n.n(M),V=n(50),q=n.n(V),Y=function(e){return e.show?a.a.createElement("div",{className:q.a.Backdrop,onClick:e.clicked}):null},z=function(e){var t=[G.a.SideDrawer,G.a.Closed];return e.open&&(t=[G.a.SideDrawer,G.a.Open]),a.a.createElement(_,null,a.a.createElement(Y,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:G.a.Logo},a.a.createElement(T,null)),a.a.createElement("nav",null,a.a.createElement(H,{isAuthenticated:e.isAuth}))))},K=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(_,null,a.a.createElement(F,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(z,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:y.a.Content},this.props.children))}}]),t}(r.Component),W=Object(c.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(K),J=n(2),X=n(58),Z=n(51),$=n.n(Z),Q=n(15),ee=n.n(Q),te=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=a.a.createElement("div",{className:ee.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:ee.a.BreadTop},a.a.createElement("div",{className:ee.a.Seeds1}),a.a.createElement("div",{className:ee.a.Seeds2}));break;case"meat":e=a.a.createElement("div",{className:ee.a.Meat});break;case"cheese":e=a.a.createElement("div",{className:ee.a.Cheese});break;case"lettuce":e=a.a.createElement("div",{className:ee.a.Lettuce});break;case"bacon":e=a.a.createElement("div",{className:ee.a.Bacon});break;default:e=null}return e}}]),t}(r.Component),ne=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(X.a)(Array(e.ingredients[t])).map(function(e,n){return a.a.createElement(te,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please add ingredients to your burger!")),a.a.createElement("div",{className:$.a.Burger},a.a.createElement(te,{type:"bread-top"}),t,a.a.createElement(te,{type:"bread-bottom"}))},re=n(32),ae=n.n(re),oe=n(23),ie=n.n(oe),le=function(e){return a.a.createElement("div",{className:ie.a.BuildControl},a.a.createElement("div",{className:ie.a.Label},e.label),a.a.createElement("button",{className:ie.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:ie.a.More,onClick:e.added},"More"))},ce=[{label:"Lettuce",type:"lettuce"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ue=function(e){return a.a.createElement("div",{className:ae.a.BuildControls},a.a.createElement("p",null,"Current Price: $",a.a.createElement("strong",null,e.price.toFixed(2))),ce.map(function(t){return a.a.createElement(le,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:ae.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN IN TO ORDER"))},se=n(52),de=n.n(se),pe=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return a.a.createElement(_,null,a.a.createElement(Y,{show:this.props.show,clicked:this.props.modalClosed}),a.a.createElement("div",{className:de.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(r.Component),me=n(33),he=n.n(me),ge=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[he.a.Button,he.a[e.btnType]].join(" "),onClick:e.clicked}," ",e.children)},fe=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return a.a.createElement(_,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(ge,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(ge,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),Ee=n(53),ve=n.n(Ee),be=function(){return a.a.createElement("div",{className:ve.a.Loader},"Loading...")},_e=function(e,t){return function(n){function r(){var e,t;Object(d.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(h.a)(r)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(g.a)(r,n),Object(p.a)(r,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.request.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(_,null,a.a.createElement(pe,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error:null),a.a.createElement(e,this.props))}}]),r}(r.Component)},Oe=n(12),ye=n.n(Oe),Ce=function(e,t){return{type:"AUTH_SUCCESS",token:e,userId:t}},ke=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},Se=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},Ie=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/login"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(J.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(be,null);return this.props.ings&&(r=a.a.createElement(_,null,a.a.createElement(ne,{ingredients:this.props.ings}),a.a.createElement(ue,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchaseable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=a.a.createElement(fe,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(_,null,a.a.createElement(pe,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),je=Object(c.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e(function(e){ye.a.get("/ingredients").then(function(t){e({type:"SET_INGREDIENTS",ingredients:t.data.shift()})}).catch(function(t){e({type:"FETCH_INGREDIENTS_FAILED"})})})},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(Se(t))}}})(_e(Ie,ye.a)),De=n(54),Te=n.n(De),Ne=function(e){return a.a.createElement("div",{className:Te.a.CheckoutSummary},a.a.createElement("h1",null,"Hope it tastes Great!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(ne,{ingredients:e.ingredients})),a.a.createElement(ge,{btnType:"Danger",clicked:e.checkoutCancelled},"Cancel"),a.a.createElement(ge,{btnType:"Success",clicked:e.checkoutContinued},"Continue"))},Ae=n(55),we=n.n(Ae),Be=n(20),Re=n.n(Be),Le=function(e){var t=null,n=[Re.a.InputElement],r=null;switch(e.invalid&&e.touched&&(r=a.a.createElement("p",{className:Re.a.ValidationError},"Please enter a valid ",e.valueType,"!")),e.invalid&&e.shouldValidate&&e.touched&&n.push(Re.a.Invalid),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:Re.a.Input},a.a.createElement("label",{className:Re.a.Label},e.label),t,r)},He=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street Address"},value:"",validation:{required:!0},valid:!1,touched:!1},city:{elementType:"input",elementConfig:{type:"text",placeholder:"Your City"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email Address"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault();var t={};for(var r in n.state.orderForm)t[r]=n.state.orderForm[r].value;var a={order:{ingredients:n.props.ings,price:n.props.price,orderData:t,userId:n.props.userId}};n.props.onOrderBurger(a,n.props.token)},n.inputChangeHandler=function(e,t){var r=Object(J.a)({},n.state.orderForm),a=Object(J.a)({},r[t]);a.value=e.target.value,a.valid=n.checkValidity(a.value,a.validation),a.touched=!0,r[t]=a;var o=!0;for(var i in r)o=r[i].valid&&o;n.setState({orderForm:r,formIsValid:o})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"checkValidity",value:function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.minLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return a.a.createElement(Le,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,valueType:t.id,changed:function(n){return e.inputChangeHandler(n,t.id)}})}),a.a.createElement(ge,{btnType:"Success",disabled:!this.state.formIsValid},"Place Your Order"));return this.state.loading&&(r=a.a.createElement(be,null)),a.a.createElement("div",{className:we.a.ContactData},a.a.createElement("h4",null,"Enter your Data"),r)}}]),t}(r.Component),xe=Object(c.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),ye.a.post("/orders?auth="+t,e).then(function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data._id,e))}).catch(function(e){console.log("Error: ",e),n(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))})}}(t,n))}}})(_e(He,ye.a)),Ue=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=a.a.createElement(v.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?a.a.createElement(v.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(Ne,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),a.a.createElement(E.a,{path:this.props.match.path+"/contact-data",component:xe}))}return e}}]),t}(r.Component),Pe=Object(c.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(Ue),Fe=n(56),Me=n.n(Fe),Ge=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map(function(e){return a.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,") ")});return a.a.createElement("div",{className:Me.a.Order},a.a.createElement("p",null,"Ingredients: ",r),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"$",e.price.toFixed(2))),a.a.createElement(ge,{clicked:e.orderDetails,btnType:"Success"},"Order Details"),a.a.createElement(ge,{clicked:e.orderDelete,btnType:"Danger"},"Delete Order"))},Ve=n(14),qe=n.n(Ve),Ye=function(e){return a.a.createElement("div",{className:qe.a.Font},a.a.createElement("strong",null,"Ingredients:"),a.a.createElement("p",{className:qe.a.Line},"Lettuce: ",e.order.ingredients.lettuce),a.a.createElement("p",{className:qe.a.Line},"Bacon: ",e.order.ingredients.bacon),a.a.createElement("p",{className:qe.a.Line},"Cheese: ",e.order.ingredients.cheese),a.a.createElement("p",{className:qe.a.Line},"Meat: ",e.order.ingredients.meat),a.a.createElement("strong",null,"Total Price: $",e.order.price.toFixed(2)),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("strong",null,"Delivery Address:"),a.a.createElement("p",{className:qe.a.Line},"Name: ",e.order.orderData.name),a.a.createElement("p",{className:qe.a.Line},"Street: ",e.order.orderData.street),a.a.createElement("p",{className:qe.a.Line},"City: ",e.order.orderData.city),a.a.createElement("p",{className:qe.a.Line},"ZipCode: ",e.order.orderData.zipCode),a.a.createElement("p",{className:qe.a.Line},"Email: ",e.order.orderData.email),a.a.createElement("p",{className:qe.a.Line},"Delivery Method: ",e.order.orderData.deliveryMethod))},ze=function(e){return a.a.createElement("div",null,a.a.createElement("h3",null,"Are you sure you want to delete this order?"),a.a.createElement(ge,{clicked:e.deleteOrder,btnType:"Danger"},"CLICK HERE TO DELETE!"))},Ke=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={show:!1,deleted:null},n.closeModalHandler=function(){n.props.onConfirmDelete(!1),n.setState({show:!1,deleted:null}),n.props.onSetOrderId(0)},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token)}},{key:"orderDetailsHandler",value:function(e){this.props.onSetOrderId(e.order),this.setState({show:!0})}},{key:"confirmDeleteHandler",value:function(e){this.props.onSetOrderId(e._id),this.props.onConfirmDelete(!0),this.setState({show:!0,deleted:null})}},{key:"deletOrderHandler",value:function(){var e=this;ye.a.delete("/orders/"+this.props.orderId).then(function(t){e.setState({deleted:t.data})}).catch(function(e){return e})}},{key:"render",value:function(){var e=this,t=null;this.props.orderId&&!this.props.confDelete&&(t=a.a.createElement(Ye,{order:this.props.orderId}));var n=null;this.props.confDelete&&(n=a.a.createElement(ze,{deleteOrder:function(){return e.deletOrderHandler()}}));var r=a.a.createElement(be,null);return this.props.loading||(r=this.props.orders.map(function(t){return a.a.createElement("div",{key:7*t.id},a.a.createElement(Ge,{key:t.id,ingredients:t.order.ingredients,price:+t.order.price,orderDetails:function(){return e.orderDetailsHandler(t)},orderDelete:function(){return e.confirmDeleteHandler(t)}}))})),this.state.deleted&&(window.alert("Order Deleted!!!!"),this.closeModalHandler(),this.props.onFetchOrders(this.props.token)),a.a.createElement("div",null,a.a.createElement(pe,{show:this.state.show,modalClosed:this.closeModalHandler},t,n),r)}}]),t}(r.Component),We=Object(c.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,orderId:e.order.orderId,confDelete:e.order.confDelete}},function(e){return{onFetchOrders:function(t){return e(function(e){return function(t){t({type:"FETCH_ORDERS_START"}),ye.a.get("/orders?auth="+e).then(function(e){var n=[];for(var r in e.data)n.push(Object(J.a)({},e.data[r],{id:r}));t({type:"FETCH_ORDERS_SUCCESS",orders:n})}).catch(function(e){t({type:"FETCH_ORDERS_FAIL",error:e})})}}(t))},onSetOrderId:function(t){return e(function(e){return{type:"SET_ORDER_ID",orderId:e}}(t))},onConfirmDelete:function(t){return e(function(e){return{type:"CONFIRM_DELETE",confDelete:e}}(t))}}})(Ke),Je=n(17),Xe=n(21),Ze=n.n(Xe),$e=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignUp:!0},n.inputChangeHandler=function(e,t){var r=Object(J.a)({},n.state.controls,Object(Je.a)({},t,Object(J.a)({},n.state.controls[t],{value:e.target.value,valid:n.checkValidity(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:r})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignUp)},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.minLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map(function(t){return a.a.createElement(Le,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,valueType:t.id,changed:function(n){return e.inputChangeHandler(n,t.id)}})}),o=this.state.isSignUp?a.a.createElement("h3",null,"Sign Up to order a Delicious Burger!"):a.a.createElement("h3",null,"Welcome Back! Log in for Burger!");this.props.loading&&(r=a.a.createElement(be,null));var i=null;this.props.error&&(i=a.a.createElement("p",{className:Ze.a.ErrorMessage},this.props.error));var l=null;return this.props.isAuthenticated&&(l=a.a.createElement(v.a,{to:this.props.authRedirectPath})),a.a.createElement("div",{className:Ze.a.Auth},l,i,a.a.createElement("div",{className:Ze.a.wrapper},a.a.createElement("button",{onClick:function(){return e.setState({isSignUp:!1})},className:Ze.a.button},"Log In"),a.a.createElement("button",{onClick:function(){return e.setState({isSignUp:!0})},className:Ze.a.button},"Sign Up")),o,a.a.createElement("form",{onSubmit:this.submitHandler},r,a.a.createElement(ge,{btnType:"Success"},"SUBMIT")))}}]),t}(r.Component),Qe=Object(c.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,n,r){return e(function(e,t,n){return function(r){r({type:"AUTH_START"});var a={username:e,password:t},o="/users";n||(o="/sessions"),ye.a.post(o,a).then(function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.username),r(Ce(e.data.token,e.data.username))}).catch(function(e){r({type:"AUTH_FAIL",error:e.response.data.error})})}}(t,n,r))},onSetAuthRedirectPath:function(){return e(Se("/"))}}})($e),et=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(v.a,{to:"/"})}}]),t}(r.Component),tt=Object(c.b)(null,function(e){return{onLogout:function(){return e(ke())}}})(et),nt=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(f.a,null,a.a.createElement(E.a,{path:"/login",component:Qe}),a.a.createElement(E.a,{path:"/",exact:!0,component:je}),a.a.createElement(v.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(f.a,null,a.a.createElement(E.a,{path:"/checkout",component:Pe}),a.a.createElement(E.a,{path:"/orders",component:We}),a.a.createElement(E.a,{path:"/logout",component:tt}),a.a.createElement(E.a,{path:"/",exact:!0,component:je}),a.a.createElement(v.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(W,null,e))}}]),t}(r.Component),rt=Object(b.a)(Object(c.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(function(e){var t=localStorage.getItem("token");if(t){var n=localStorage.getItem("userId");e(Ce(t,n))}else e(ke())})}}})(nt));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var at={ingredients:null,totalPrice:4,error:!1,building:!1},ot={lettuce:.5,cheese:.4,meat:1.3,bacon:.7},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Object(J.a)({},e,{ingredients:Object(J.a)({},e.ingredients,Object(Je.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+ot[t.ingredientName],building:!0});case"REMOVE_INGREDIENT":return Object(J.a)({},e,{ingredients:Object(J.a)({},e.ingredients,Object(Je.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-ot[t.ingredientName],building:!0});case"SET_INGREDIENTS":return Object(J.a)({},e,{ingredients:t.ingredients,totalPrice:4,error:!1,building:!1});case"FETCH_INGREDIENTS_FAILED":return Object(J.a)({},e,{error:!0});default:return e}},lt={orders:[],loading:!1,purchased:!1,orderId:0,confDelete:!1},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return Object(J.a)({},e,{purchased:!1});case"PURCHASE_BURGER_START":return Object(J.a)({},e,{loading:!0});case"PURCHASE_BURGER_SUCCESS":var n=Object(J.a)({},t.orderData,{id:t.orderId});return Object(J.a)({},e,{loading:!1,purchased:!0,orders:e.orders.concat(n)});case"PURCHASE_BURGER_FAIL":return Object(J.a)({},e,{loading:!1});case"FETCH_ORDERS_START":return Object(J.a)({},e,{loading:!0});case"FETCH_ORDERS_SUCCESS":return Object(J.a)({},e,{orders:t.orders,loading:!1});case"FETCH_ORDERS_FAIL":return Object(J.a)({},e,{loading:!1});case"SET_ORDER_ID":return Object(J.a)({},e,{orderId:t.orderId});case"CONFIRM_DELETE":return Object(J.a)({},e,{confDelete:t.confDelete});default:return e}},ut={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Object(J.a)({},e,{error:null,loading:!0});case"AUTH_SUCCESS":return Object(J.a)({},e,{token:t.token,userId:t.userId,error:null,loading:!1});case"AUTH_FAIL":return Object(J.a)({},e,{error:t.error,loading:!1});case"AUTH_LOGOUT":return Object(J.a)({},e,{token:null,userId:null});case"SET_AUTH_REDIRECT_PATH":return Object(J.a)({},e,{authRedirectPath:t.path});default:return e}},dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,pt=Object(u.c)({burgerBuilder:it,order:ct,auth:st}),mt=Object(u.e)(pt,dt(Object(u.a)(s.a))),ht=a.a.createElement(c.a,{store:mt},a.a.createElement(l.a,null,a.a.createElement(rt,null)));i.a.render(ht,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},14:function(e,t,n){e.exports={Font:"OrderDeets_Font__18tff",Line:"OrderDeets_Line__3WVbm",Burger:"OrderDeets_Burger__1E7jt"}},15:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__JRUUF",BreadTop:"BurgerIngredient_BreadTop__3LSj1",Seeds1:"BurgerIngredient_Seeds1__1ldDT",Seeds2:"BurgerIngredient_Seeds2__laPy0",Meat:"BurgerIngredient_Meat__2Mm0a",Cheese:"BurgerIngredient_Cheese__27eot",Lettuce:"BurgerIngredient_Lettuce__2M5FF",Bacon:"BurgerIngredient_Bacon__1PfzA"}},19:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__5p31L",Open:"SideDrawer_Open__22FY2",Closed:"SideDrawer_Closed__GeY67",Logo:"SideDrawer_Logo__11a0M"}},20:function(e,t,n){e.exports={Input:"Input_Input__3lgXo",Label:"Input_Label__XKQIJ",InputElement:"Input_InputElement__2uuFZ",Invalid:"Input_Invalid__3kf1R",ValidationError:"Input_ValidationError__1CwAS"}},21:function(e,t,n){e.exports={Auth:"Auth_Auth__fVwyo",wrapper:"Auth_wrapper__2b_Xl",button:"Auth_button__1iGuX",active:"Auth_active__12BYK",ErrorMessage:"Auth_ErrorMessage__PcAjd"}},23:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__Nx0bk",Label:"BuildControl_Label__2JKNP",Less:"BuildControl_Less__1-lKu",More:"BuildControl_More__xRmA3"}},27:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1iJd9",Logo:"Toolbar_Logo__34vyk",DesktopOnly:"Toolbar_DesktopOnly__5tzB_"}},31:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__CLgbL",active:"NavigationItem_active__lpeGS"}},32:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3mOtk",OrderButton:"BuildControls_OrderButton__1ShX2",enable:"BuildControls_enable__Ckfpe"}},33:function(e,t,n){e.exports={Button:"Button_Button__1Y3RF",Success:"Button_Success__334ZM",Danger:"Button_Danger__3KaI3"}},45:function(e,t,n){e.exports={Content:"Layout_Content__22di8"}},46:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},47:function(e,t,n){e.exports={Logo:"Logo_Logo__1AjkF"}},48:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3M_zj"}},49:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__LT7qc"}},50:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1YARA"}},51:function(e,t,n){e.exports={Burger:"Burger_Burger__29poK"}},52:function(e,t,n){e.exports={Modal:"Modal_Modal__10KJw"}},53:function(e,t,n){e.exports={Loader:"Spinner_Loader__DpW9U",load2:"Spinner_load2__1Aj2E"}},54:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3FR7k"}},55:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__3Z9fA"}},56:function(e,t,n){e.exports={Order:"Order_Order__1d75e"}},59:function(e,t,n){e.exports=n(112)},68:function(e,t,n){}},[[59,2,1]]]);
//# sourceMappingURL=main.1d15fdfe.chunk.js.map