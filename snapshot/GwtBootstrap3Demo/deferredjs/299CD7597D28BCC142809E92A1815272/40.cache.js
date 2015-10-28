$wnd.GwtBootstrap3Demo.runAsyncCallback40("function BJc(){}\nfunction FJc(){}\nfunction HJc(){}\nfunction IJc(){IJc=cbb;EJc=new HJc}\nfunction fpc(a){ksb.call(this,a);epc(this)}\nfunction AJc(){zDb.call(this);xDb(this,CJc(new DJc))}\nfunction uJc(a,b,c){LCb();hDb.call(this,a,b,c,(Apc(),zpc))}\nfunction DJc(){this.a=(new FJc,IJc(),EJc);GJc(this.a)}\nfunction HNc(a){var b;if(!a.M){b=new AJc(new BJc);a.M=b}return a.M}\nfunction GNc(a){var b;if(!a.L){b=new uJc(kCb(ODb(a.a)),HNc(a),FNc(a));DCb((RDb(a.a),b),bEb(RDb(a.a)));a.L=b}return a.L}\nfunction GJc(a){if(!a.a){a.a=true;ev((QA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction CJc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new W$b;AUb(a,(b=new SWb(jrd),AUb(b,(c=new IZb,c.a='Offline',HZb(c),c)),AUb(b,(d=new FVb,AUb(d,(e=new EXb((L7b(),I7b)),gfb(e.eb,'GPBYFDECM',true),spc(e.b,pxd),BUb(e,e.b,0),e)),AUb(d,new mpc((j=new QJb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new adb(j.a)).a)),AUb(d,(f=new JTc,L$b(f,(k=new QJb,k.a+=qxd,new adb(k.a)).a),gfb(f.eb,ord,true),f)),AUb(d,new mpc((l=new QJb,l.a+=rxd,new adb(l.a)).a)),AUb(d,(g=new JTc,L$b(g,(m=new QJb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new adb(m.a)).a),gfb(g.eb,ord,true),g)),gfb(d.eb,'GPBYFDEBM',true),d)),AUb(b,(h=new VZb,AUb(h,(n=new i$b,AUb(n,(o=new EXb(H7b),spc(o.b,'What is Offline?'),BUb(o,o.b,0),o)),n)),AUb(h,(p=new XZb,AUb(p,new fpc((q=new QJb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new adb(q.a)).a)),p)),AUb(h,new f$b),h)),AUb(b,(i=new VZb,AUb(i,(r=new i$b,AUb(r,(s=new EXb(H7b),spc(s.b,'How to configure?'),BUb(s,s.b,0),s)),r)),AUb(i,(t=new XZb,AUb(t,new mpc((u=new QJb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new adb(u.a)).a)),AUb(t,(v=new JTc,L$b(v,(w=new QJb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new adb(w.a)).a),gfb(v.eb,ord,true),v)),AUb(t,new mpc((A=new QJb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new adb(A.a)).a)),AUb(t,(B=new JTc,L$b(B,(C=new QJb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new adb(C.a)).a),gfb(B.eb,ord,true),B)),AUb(t,new mpc((D=new QJb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new adb(D.a)).a)),AUb(t,(F=new JTc,L$b(F,(G=new QJb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new adb(G.a)).a),gfb(F.eb,ord,true),F)),t)),AUb(i,new f$b),i)),b));return a}\nbbb(397,226,vpd,fpc);bbb(918,48,dod,uJc);var Q1=fIb(Yqd,'OfflinePresenter',918);bbb(1157,51,eod,AJc);var V1=fIb(Yqd,'OfflineView',1157);bbb(1393,1,{},BJc);var U1=fIb(Yqd,'OfflineView_BinderImpl',1393);bbb(1394,1,{},DJc);var R1=fIb(Yqd,'OfflineView_BinderImpl/Widgets',1394);bbb(1724,1,{},FJc);var EJc;var T1=fIb(Yqd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1724);bbb(1725,1,{},HJc);_.a=false;var S1=fIb(Yqd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1725);bbb(842,1,tqd);_.Sb=function dOc(){tFb(this.b,GNc(this.a.a))};Mld(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")