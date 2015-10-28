$wnd.GwtBootstrap3Demo.runAsyncCallback40("function LJc(){}\nfunction PJc(){}\nfunction RJc(){}\nfunction SJc(){SJc=Sab;OJc=new RJc}\nfunction ppc(a){isb.call(this,a);opc(this)}\nfunction KJc(){HDb.call(this);FDb(this,MJc(new NJc))}\nfunction EJc(a,b,c){TCb();pDb.call(this,a,b,c,(Kpc(),Jpc))}\nfunction NJc(){this.a=(new PJc,SJc(),OJc);QJc(this.a)}\nfunction RNc(a){var b;if(!a.M){b=new KJc(new LJc);a.M=b}return a.M}\nfunction QNc(a){var b;if(!a.L){b=new EJc(sCb(WDb(a.a)),RNc(a),PNc(a));LCb((ZDb(a.a),b),jEb(ZDb(a.a)));a.L=b}return a.L}\nfunction QJc(a){if(!a.a){a.a=true;Yu((GA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction MJc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new e_b;JUb(a,(b=new _Wb(Hrd),JUb(b,(c=new SZb,c.a='Offline',RZb(c),c)),JUb(b,(d=new OVb,JUb(d,(e=new NXb((V7b(),S7b)),Veb((omb(),e.eb),'GPBYFDECM',true),Cpc(e.b,Lxd),KUb(e,e.b,0),e)),JUb(d,new wpc((j=new YJb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Mcb(j.a)).a)),JUb(d,(f=new TTc,V$b(f,(k=new YJb,k.a+=Mxd,new Mcb(k.a)).a),Veb(f.eb,Mrd,true),f)),JUb(d,new wpc((l=new YJb,l.a+=Nxd,new Mcb(l.a)).a)),JUb(d,(g=new TTc,V$b(g,(m=new YJb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Mcb(m.a)).a),Veb(g.eb,Mrd,true),g)),Veb(d.eb,'GPBYFDEBM',true),d)),JUb(b,(h=new d$b,JUb(h,(n=new s$b,JUb(n,(o=new NXb(R7b),Cpc(o.b,'What is Offline?'),KUb(o,o.b,0),o)),n)),JUb(h,(p=new f$b,JUb(p,new ppc((q=new YJb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Mcb(q.a)).a)),p)),JUb(h,new p$b),h)),JUb(b,(i=new d$b,JUb(i,(r=new s$b,JUb(r,(s=new NXb(R7b),Cpc(s.b,'How to configure?'),KUb(s,s.b,0),s)),r)),JUb(i,(t=new f$b,JUb(t,new wpc((u=new YJb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Mcb(u.a)).a)),JUb(t,(v=new TTc,V$b(v,(w=new YJb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Mcb(w.a)).a),Veb(v.eb,Mrd,true),v)),JUb(t,new wpc((A=new YJb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Mcb(A.a)).a)),JUb(t,(B=new TTc,V$b(B,(C=new YJb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Mcb(C.a)).a),Veb(B.eb,Mrd,true),B)),JUb(t,new wpc((D=new YJb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Mcb(D.a)).a)),JUb(t,(F=new TTc,V$b(F,(G=new YJb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Mcb(G.a)).a),Veb(F.eb,Mrd,true),F)),t)),JUb(i,new p$b),i)),b));return a}\nRab(396,226,Tpd,ppc);Rab(918,48,Bod,EJc);var E1=nIb(urd,'OfflinePresenter',918);Rab(1157,51,Cod,KJc);var J1=nIb(urd,'OfflineView',1157);Rab(1390,1,{},LJc);var I1=nIb(urd,'OfflineView_BinderImpl',1390);Rab(1391,1,{},NJc);var F1=nIb(urd,'OfflineView_BinderImpl/Widgets',1391);Rab(1723,1,{},PJc);var OJc;var H1=nIb(urd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1723);Rab(1724,1,{},RJc);_.a=false;var G1=nIb(urd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1724);Rab(842,1,Rqd);_.Sb=function nOc(){BFb(this.b,QNc(this.a.a))};gmd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")