$wnd.GwtBootstrap3Demo.runAsyncCallback40("function RJc(){}\nfunction VJc(){}\nfunction XJc(){}\nfunction YJc(){YJc=ibb;UJc=new XJc}\nfunction vpc(a){Dsb.call(this,a);upc(this)}\nfunction QJc(){MDb.call(this);KDb(this,SJc(new TJc))}\nfunction KJc(a,b,c){YCb();uDb.call(this,a,b,c,(Qpc(),Ppc))}\nfunction TJc(){this.a=(new VJc,YJc(),UJc);WJc(this.a)}\nfunction XNc(a){var b;if(!a.M){b=new QJc(new RJc);a.M=b}return a.M}\nfunction WNc(a){var b;if(!a.L){b=new KJc(xCb(_Db(a.a)),XNc(a),VNc(a));QCb((cEb(a.a),b),oEb(cEb(a.a)));a.L=b}return a.L}\nfunction WJc(a){if(!a.a){a.a=true;Vu((MA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction SJc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new k_b;PUb(a,(b=new eXb(Nrd),PUb(b,(c=new YZb,c.a='Offline',XZb(c),c)),PUb(b,(d=new TVb,PUb(d,(e=new SXb((_7b(),Y7b)),lfb((Kmb(),e.eb),'GPBYFDECM',true),Ipc(e.b,Rxd),QUb(e,e.b,0),e)),PUb(d,new Cpc((j=new cKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new cdb(j.a)).a)),PUb(d,(f=new ZTc,_$b(f,(k=new cKb,k.a+=Sxd,new cdb(k.a)).a),lfb(f.eb,Srd,true),f)),PUb(d,new Cpc((l=new cKb,l.a+=Txd,new cdb(l.a)).a)),PUb(d,(g=new ZTc,_$b(g,(m=new cKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new cdb(m.a)).a),lfb(g.eb,Srd,true),g)),lfb(d.eb,'GPBYFDEBM',true),d)),PUb(b,(h=new j$b,PUb(h,(n=new y$b,PUb(n,(o=new SXb(X7b),Ipc(o.b,'What is Offline?'),QUb(o,o.b,0),o)),n)),PUb(h,(p=new l$b,PUb(p,new vpc((q=new cKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new cdb(q.a)).a)),p)),PUb(h,new v$b),h)),PUb(b,(i=new j$b,PUb(i,(r=new y$b,PUb(r,(s=new SXb(X7b),Ipc(s.b,'How to configure?'),QUb(s,s.b,0),s)),r)),PUb(i,(t=new l$b,PUb(t,new Cpc((u=new cKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new cdb(u.a)).a)),PUb(t,(v=new ZTc,_$b(v,(w=new cKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new cdb(w.a)).a),lfb(v.eb,Srd,true),v)),PUb(t,new Cpc((A=new cKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new cdb(A.a)).a)),PUb(t,(B=new ZTc,_$b(B,(C=new cKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new cdb(C.a)).a),lfb(B.eb,Srd,true),B)),PUb(t,new Cpc((D=new cKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new cdb(D.a)).a)),PUb(t,(F=new ZTc,_$b(F,(G=new cKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new cdb(G.a)).a),lfb(F.eb,Srd,true),F)),t)),PUb(i,new v$b),i)),b));return a}\nhbb(398,226,Zpd,vpc);hbb(919,48,Hod,KJc);var W1=tIb(Ard,'OfflinePresenter',919);hbb(1157,51,Iod,QJc);var _1=tIb(Ard,'OfflineView',1157);hbb(1392,1,{},RJc);var $1=tIb(Ard,'OfflineView_BinderImpl',1392);hbb(1393,1,{},TJc);var X1=tIb(Ard,'OfflineView_BinderImpl/Widgets',1393);hbb(1726,1,{},VJc);var UJc;var Z1=tIb(Ard,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1726);hbb(1727,1,{},XJc);_.a=false;var Y1=tIb(Ard,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1727);hbb(843,1,Xqd);_.Sb=function tOc(){HFb(this.b,WNc(this.a.a))};mmd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")