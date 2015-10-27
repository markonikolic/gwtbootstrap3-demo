$wnd.GwtBootstrap3Demo.runAsyncCallback40("function wKc(){}\nfunction AKc(){}\nfunction CKc(){}\nfunction DKc(){DKc=Zbb;zKc=new CKc}\nfunction aqc(a){ftb.call(this,a);_pc(this)}\nfunction vKc(){uEb.call(this);sEb(this,xKc(new yKc))}\nfunction pKc(a,b,c){GDb();cEb.call(this,a,b,c,(vqc(),uqc))}\nfunction yKc(){this.a=(new AKc,DKc(),zKc);BKc(this.a)}\nfunction COc(a){var b;if(!a.M){b=new vKc(new wKc);a.M=b}return a.M}\nfunction BOc(a){var b;if(!a.L){b=new pKc(fDb(JEb(a.a)),COc(a),AOc(a));yDb((MEb(a.a),b),YEb(MEb(a.a)));a.L=b}return a.L}\nfunction BKc(a){if(!a.a){a.a=true;ev((mB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction xKc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new R_b;vVb(a,(b=new NXb(esd),vVb(b,(c=new D$b,c.a='Offline',C$b(c),c)),vVb(b,(d=new AWb,vVb(d,(e=new zYb((G8b(),D8b)),bgb(e.eb,'GPBYFDECM',true),nqc(e.b,jyd),wVb(e,e.b,0),e)),vVb(d,new hqc((j=new LKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Xdb(j.a)).a)),vVb(d,(f=new EUc,G_b(f,(k=new LKb,k.a+=kyd,new Xdb(k.a)).a),bgb(f.eb,jsd,true),f)),vVb(d,new hqc((l=new LKb,l.a+=lyd,new Xdb(l.a)).a)),vVb(d,(g=new EUc,G_b(g,(m=new LKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Xdb(m.a)).a),bgb(g.eb,jsd,true),g)),bgb(d.eb,'GPBYFDEBM',true),d)),vVb(b,(h=new Q$b,vVb(h,(n=new d_b,vVb(n,(o=new zYb(C8b),nqc(o.b,'What is Offline?'),wVb(o,o.b,0),o)),n)),vVb(h,(p=new S$b,vVb(p,new aqc((q=new LKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Xdb(q.a)).a)),p)),vVb(h,new a_b),h)),vVb(b,(i=new Q$b,vVb(i,(r=new d_b,vVb(r,(s=new zYb(C8b),nqc(s.b,'How to configure?'),wVb(s,s.b,0),s)),r)),vVb(i,(t=new S$b,vVb(t,new hqc((u=new LKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Xdb(u.a)).a)),vVb(t,(v=new EUc,G_b(v,(w=new LKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Xdb(w.a)).a),bgb(v.eb,jsd,true),v)),vVb(t,new hqc((A=new LKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Xdb(A.a)).a)),vVb(t,(B=new EUc,G_b(B,(C=new LKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Xdb(C.a)).a),bgb(B.eb,jsd,true),B)),vVb(t,new hqc((D=new LKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Xdb(D.a)).a)),vVb(t,(F=new EUc,G_b(F,(G=new LKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Xdb(G.a)).a),bgb(F.eb,jsd,true),F)),t)),vVb(i,new a_b),i)),b));return a}\nYbb(397,226,qqd,aqc);Ybb(917,48,$od,pKc);var L2=aJb(Trd,'OfflinePresenter',917);Ybb(1156,51,_od,vKc);var Q2=aJb(Trd,'OfflineView',1156);Ybb(1392,1,{},wKc);var P2=aJb(Trd,'OfflineView_BinderImpl',1392);Ybb(1393,1,{},yKc);var M2=aJb(Trd,'OfflineView_BinderImpl/Widgets',1393);Ybb(1725,1,{},AKc);var zKc;var O2=aJb(Trd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1725);Ybb(1726,1,{},CKc);_.a=false;var N2=aJb(Trd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1726);Ybb(841,1,ord);_.Sb=function $Oc(){oGb(this.b,BOc(this.a.a))};Hmd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
