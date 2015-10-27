$wnd.GwtBootstrap3Demo.runAsyncCallback40("function jEc(){}\nfunction nEc(){}\nfunction pEc(){}\nfunction qEc(){qEc=e9;mEc=new pEc}\nfunction iEc(){ZAb(this,kEc(new lEc))}\nfunction Sjc(a){Qpb.call(this,a);Rjc(this)}\nfunction cEc(a,b,c){oAb();KAb.call(this,a,b,c,(lkc(),kkc))}\nfunction lEc(){this.a=(new nEc,qEc(),mEc);oEc(this.a)}\nfunction lIc(a){var b;if(!a.L){b=new iEc(new jEc);a.L=b}return a.L}\nfunction kIc(a){var b;if(!a.K){b=new cEc(Pzb(mBb(a.a)),lIc(a),jIc(a));gAb((pBb(a.a),b),BBb(pBb(a.a)));a.K=b}return a.K}\nfunction oEc(a){if(!a.a){a.a=true;Ku((xA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction kEc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new wXb;BRb(a,(b=new MTb(Vid),BRb(b,(c=new nWb,c.a='Offline',mWb(c),c)),BRb(b,(d=new zSb,BRb(d,(e=new vUb((_3b(),Y3b)),idb(e.db,'GPBYFDECM',true),dkc(e.b,ipd),CRb(e,e.b,0),e)),BRb(d,new Zjc((j=new gHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new cbb(j.a)).a)),BRb(d,(f=new nOc,lXb(f,(k=new gHb,k.a+=jpd,new cbb(k.a)).a),idb(f.db,$id,true),f)),BRb(d,new Zjc((l=new gHb,l.a+=kpd,new cbb(l.a)).a)),BRb(d,(g=new nOc,lXb(g,(m=new gHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new cbb(m.a)).a),idb(g.db,$id,true),g)),idb(d.db,'GPBYFDEBM',true),d)),BRb(b,(h=new zWb,BRb(h,(n=new OWb,BRb(n,(o=new vUb(X3b),dkc(o.b,'What is Offline?'),CRb(o,o.b,0),o)),n)),BRb(h,(p=new BWb,BRb(p,new Sjc((q=new gHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new cbb(q.a)).a)),p)),BRb(h,new LWb),h)),BRb(b,(i=new zWb,BRb(i,(r=new OWb,BRb(r,(s=new vUb(X3b),dkc(s.b,'How to configure?'),CRb(s,s.b,0),s)),r)),BRb(i,(t=new BWb,BRb(t,new Zjc((u=new gHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new cbb(u.a)).a)),BRb(t,(v=new nOc,lXb(v,(w=new gHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new cbb(w.a)).a),idb(v.db,$id,true),v)),BRb(t,new Zjc((A=new gHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new cbb(A.a)).a)),BRb(t,(B=new nOc,lXb(B,(C=new gHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new cbb(C.a)).a),idb(B.db,$id,true),B)),BRb(t,new Zjc((D=new gHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new cbb(D.a)).a)),BRb(t,(F=new nOc,lXb(F,(G=new gHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new cbb(G.a)).a),idb(F.db,$id,true),F)),t)),BRb(i,new LWb),i)),b));return a}\nd9(379,216,hhd,Sjc);d9(894,48,Vfd,cEc);var l0=xFb(Jid,'OfflinePresenter',894);d9(1129,Wfd,Xfd,iEc);var q0=xFb(Jid,'OfflineView',1129);d9(1361,1,{},jEc);var p0=xFb(Jid,'OfflineView_BinderImpl',1361);d9(1362,1,{},lEc);var m0=xFb(Jid,'OfflineView_BinderImpl/Widgets',1362);d9(1686,1,{},nEc);var mEc;var o0=xFb(Jid,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1686);d9(1687,1,{},pEc);_.a=false;var n0=xFb(Jid,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1687);d9(818,1,fid);_.Ob=function JIc(){LCb(this.b,kIc(this.a.a))};Kdd(mm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")