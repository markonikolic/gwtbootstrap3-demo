function Kjc(){}
function zjc(a,b,c){Qjb.call(this,a,b,c,(wZb(),vZb))}
function Tjc(a){var b;if(!a.i){b=new Ijc(new Kjc);a.i=b}return a.i}
function Sjc(a){var b;if(!a.g){b=new zjc(Zib(ukb(a.b)),Tjc(a),Rjc(a));pjb((vkb(a.b),b),Gkb(vkb(a.b)));a.g=b}return a.g}
function Ijc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;ikb(this,(a=new LEb,Pxb(a,(b=new uAb(Fzc),Pxb(b,(c=new GDb,c.b='Project Setup',FDb(c),c.c='basic setup and using custom themes',FDb(c),c)),Pxb(b,(d=new ODb,Pxb(d,(i=new $Db,ZDb(i,(j=new qBb(3),hFb(j.d,Gzc),j)),i)),Pxb(d,(k=new RDb,Pxb(k,new dCb((n=new Dqb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new vZ(n.b.b)).b)),Pxb(k,(o=new Xoc,CEb(o,(p=new Dqb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new vZ(p.b.b)).b),U_(o.ab,Jzc,true),o)),k)),d)),Pxb(b,(e=new ODb,Pxb(e,(q=new $Db,ZDb(q,(r=new qBb(3),hFb(r.d,'Bootstrap2 Look-a-like Setup'),r)),q)),Pxb(e,(s=new RDb,Pxb(s,new dCb((t=new Dqb,t.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new vZ(t.b.b)).b)),Pxb(s,(u=new Xoc,CEb(u,(v=new Dqb,v.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new vZ(v.b.b)).b),U_(u.ab,Jzc,true),u)),s)),e)),Pxb(b,(f=new ODb,Pxb(f,(w=new $Db,ZDb(w,(x=new qBb(3),hFb(x.d,'Custom Theme'),x)),w)),Pxb(f,(y=new RDb,Pxb(y,new dCb((z=new Dqb,z.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new vZ(z.b.b)).b)),Pxb(y,(A=new Xoc,CEb(A,(B=new Dqb,B.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new vZ(B.b.b)).b),U_(A.ab,Jzc,true),A)),y)),f)),Pxb(b,(g=new ODb,Pxb(g,(C=new $Db,ZDb(C,(D=new qBb(3),hFb(D.d,'Support for IE8'),D)),C)),Pxb(g,(E=new RDb,Pxb(E,new dCb((F=new Dqb,F.b.b+='For support for IE8 you need to inherit the Respond module into your *.gwt.xml.',new vZ(F.b.b)).b)),Pxb(E,(G=new Xoc,CEb(G,(H=new Dqb,H.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n',new vZ(H.b.b)).b),U_(G.ab,Jzc,true),G)),E)),g)),b)),a))}
rY(1272,528,Stc,zjc);rY(1275,533,Ttc,Ijc);rY(1276,1,{},Kjc);rY(1283,1,tuc);_.Ab=function hkc(){Zlb(this.c,Sjc(this.b.b))};var eU=Tob(bzc,'SetupPresenter',1272),gU=Tob(bzc,'SetupView',1275),fU=Tob(bzc,'SetupView_BinderImpl',1276);wuc(Pm)(35);