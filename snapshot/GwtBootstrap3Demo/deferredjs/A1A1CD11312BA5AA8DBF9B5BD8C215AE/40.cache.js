$wnd.GwtBootstrap3Demo.runAsyncCallback40("function qKc(){}\nfunction uKc(){}\nfunction wKc(){}\nfunction xKc(){xKc=Lbb;tKc=new wKc}\nfunction Wpc(a){etb.call(this,a);Vpc(this)}\nfunction pKc(){nEb.call(this);lEb(this,rKc(new sKc))}\nfunction jKc(a,b,c){zDb();XDb.call(this,a,b,c,(pqc(),oqc))}\nfunction sKc(){this.a=(new uKc,xKc(),tKc);vKc(this.a)}\nfunction wOc(a){var b;if(!a.M){b=new pKc(new qKc);a.M=b}return a.M}\nfunction vOc(a){var b;if(!a.L){b=new jKc($Cb(CEb(a.a)),wOc(a),uOc(a));rDb((FEb(a.a),b),REb(FEb(a.a)));a.L=b}return a.L}\nfunction vKc(a){if(!a.a){a.a=true;Vu((_A(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction rKc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new L_b;pVb(a,(b=new GXb(lsd),pVb(b,(c=new x$b,c.a='Offline',w$b(c),c)),pVb(b,(d=new tWb,pVb(d,(e=new sYb((A8b(),x8b)),Ofb((lnb(),e.eb),'GPBYFDECM',true),hqc(e.b,nyd),qVb(e,e.b,0),e)),pVb(d,new bqc((j=new EKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Fdb(j.a)).a)),pVb(d,(f=new yUc,A_b(f,(k=new EKb,k.a+=oyd,new Fdb(k.a)).a),Ofb(f.eb,qsd,true),f)),pVb(d,new bqc((l=new EKb,l.a+=pyd,new Fdb(l.a)).a)),pVb(d,(g=new yUc,A_b(g,(m=new EKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Fdb(m.a)).a),Ofb(g.eb,qsd,true),g)),Ofb(d.eb,'GPBYFDEBM',true),d)),pVb(b,(h=new K$b,pVb(h,(n=new Z$b,pVb(n,(o=new sYb(w8b),hqc(o.b,'What is Offline?'),qVb(o,o.b,0),o)),n)),pVb(h,(p=new M$b,pVb(p,new Wpc((q=new EKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Fdb(q.a)).a)),p)),pVb(h,new W$b),h)),pVb(b,(i=new K$b,pVb(i,(r=new Z$b,pVb(r,(s=new sYb(w8b),hqc(s.b,'How to configure?'),qVb(s,s.b,0),s)),r)),pVb(i,(t=new M$b,pVb(t,new bqc((u=new EKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Fdb(u.a)).a)),pVb(t,(v=new yUc,A_b(v,(w=new EKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Fdb(w.a)).a),Ofb(v.eb,qsd,true),v)),pVb(t,new bqc((A=new EKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Fdb(A.a)).a)),pVb(t,(B=new yUc,A_b(B,(C=new EKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Fdb(C.a)).a),Ofb(B.eb,qsd,true),B)),pVb(t,new bqc((D=new EKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Fdb(D.a)).a)),pVb(t,(F=new yUc,A_b(F,(G=new EKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Fdb(G.a)).a),Ofb(F.eb,qsd,true),F)),t)),pVb(i,new W$b),i)),b));return a}\nKbb(397,226,xqd,Wpc);Kbb(918,48,fpd,jKc);var x2=VIb($rd,'OfflinePresenter',918);Kbb(1157,51,gpd,pKc);var C2=VIb($rd,'OfflineView',1157);Kbb(1392,1,{},qKc);var B2=VIb($rd,'OfflineView_BinderImpl',1392);Kbb(1393,1,{},sKc);var y2=VIb($rd,'OfflineView_BinderImpl/Widgets',1393);Kbb(1726,1,{},uKc);var tKc;var A2=VIb($rd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1726);Kbb(1727,1,{},wKc);_.a=false;var z2=VIb($rd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1727);Kbb(842,1,vrd);_.Sb=function UOc(){hGb(this.b,vOc(this.a.a))};Nmd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
