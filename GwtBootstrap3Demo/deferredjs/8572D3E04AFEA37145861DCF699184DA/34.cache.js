function jac(){}
function $9b(a,b,c){fdb.call(this,a,b,c,(LRb(),KRb))}
function sac(a){var b;if(!a.i){b=new hac(new jac);a.i=b}return a.i}
function rac(a){var b;if(!a.g){b=new $9b(ocb(Ldb(a.b)),sac(a),qac(a));Gcb((Mdb(a.b),b),Xdb(Mdb(a.b)));a.g=b}return a.g}
function hac(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;zdb(this,(a=new Fxb,Sqb(a,(b=new qtb(qnc),Sqb(b,(c=new zwb,c.b='Project Setup',ywb(c),c.c='basic setup and using custom themes',ywb(c),c)),Sqb(b,(d=new Hwb,Sqb(d,(g=new Twb,Swb(g,(i=new lub(3),cyb(i.d,rnc),i)),g)),Sqb(d,(j=new Kwb,Sqb(j,(k=new $ub,Zub(k,(n=new Ljb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new PS(n.b.b)).b),k)),Sqb(j,(o=new wxb,vxb(o,(p=new Ljb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new PS(p.b.b)).b),kV(o.ab,unc,true),kV(o.ab,vnc,true),o)),j)),d)),Sqb(b,(e=new Hwb,Sqb(e,(q=new Twb,Swb(q,(r=new lub(3),cyb(r.d,'Bootstrap2 Look-a-like Setup'),r)),q)),Sqb(e,(s=new Kwb,Sqb(s,(t=new $ub,Zub(t,(u=new Ljb,u.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new PS(u.b.b)).b),t)),Sqb(s,(v=new wxb,vxb(v,(w=new Ljb,w.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new PS(w.b.b)).b),kV(v.ab,unc,true),kV(v.ab,vnc,true),v)),s)),e)),Sqb(b,(f=new Hwb,Sqb(f,(x=new Twb,Swb(x,(y=new lub(3),cyb(y.d,'Custom Theme'),y)),x)),Sqb(f,(z=new Kwb,Sqb(z,(A=new $ub,Zub(A,(B=new Ljb,B.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new PS(B.b.b)).b),A)),Sqb(z,(C=new wxb,vxb(C,(D=new Ljb,D.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new PS(D.b.b)).b),kV(C.ab,unc,true),kV(C.ab,vnc,true),C)),z)),f)),b)),a))}
LR(1221,517,Mhc,$9b);LR(1224,522,Nhc,hac);LR(1225,1,{},jac);LR(1232,1,eic);_.Ab=function Iac(){ofb(this.c,rac(this.b.b))};var nO=gib(Mmc,'SetupPresenter',1221),pO=gib(Mmc,'SetupView',1224),oO=gib(Mmc,'SetupView_BinderImpl',1225);iic(oj)(34);