$wnd.GwtBootstrap3Demo.runAsyncCallback40("function LRc(){}\nfunction PRc(){}\nfunction RRc(){}\nfunction SRc(){SRc=jhb;ORc=new RRc}\nfunction Svc(a){Lyb.call(this,a);Rvc(this)}\nfunction KRc(){OJb.call(this);MJb(this,MRc(new NRc))}\nfunction ERc(a,b,c){$Ib();wJb.call(this,a,b,c,(mwc(),lwc))}\nfunction NRc(){this.a=(new PRc,SRc(),ORc);QRc(this.a)}\nfunction oWc(a){var b;if(!a.M){b=new KRc(new LRc);a.M=b}return a.M}\nfunction nWc(a){var b;if(!a.L){b=new ERc(zIb(bKb(a.a)),oWc(a),mWc(a));SIb((eKb(a.a),b),qKb(eKb(a.a)));a.L=b}return a.L}\nfunction QRc(a){if(!a.a){a.a=true;ax((oD(),'.GPBYFDEDM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEEM{margin-top:0 !important;}.GPBYFDEFM{margin-left:5px;}'));return true}return false}\nfunction MRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new C5b;V$b(a,(b=new o1b(FKd),V$b(b,(c=new g4b,c.a='Offline',f4b(c),c)),V$b(b,(d=new b0b,V$b(d,(e=new a2b((bec(),$dc)),rlb((Rsb(),e.eb),'GPBYFDEEM',true),ewc(e.b,KQd),W$b(e,e.b,0),e)),V$b(d,new $vc((j=new gQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new hjb(j.a)).a)),V$b(d,(f=new q0c,r5b(f,(k=new gQb,k.a+=LQd,new hjb(k.a)).a),rlb(f.eb,KKd,true),f)),V$b(d,new $vc((l=new gQb,l.a+=MQd,new hjb(l.a)).a)),V$b(d,(g=new q0c,r5b(g,(m=new gQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new hjb(m.a)).a),rlb(g.eb,KKd,true),g)),rlb(d.eb,'GPBYFDEDM',true),d)),V$b(b,(h=new t4b,V$b(h,(n=new I4b,V$b(n,(o=new a2b(Zdc),ewc(o.b,'What is Offline?'),W$b(o,o.b,0),o)),n)),V$b(h,(p=new v4b,V$b(p,new Svc((q=new gQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new hjb(q.a)).a)),p)),V$b(h,new F4b),h)),V$b(b,(i=new t4b,V$b(i,(r=new I4b,V$b(r,(s=new a2b(Zdc),ewc(s.b,'How to configure?'),W$b(s,s.b,0),s)),r)),V$b(i,(t=new v4b,V$b(t,new $vc((u=new gQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new hjb(u.a)).a)),V$b(t,(v=new q0c,r5b(v,(w=new gQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new hjb(w.a)).a),rlb(v.eb,KKd,true),v)),V$b(t,new $vc((A=new gQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new hjb(A.a)).a)),V$b(t,(B=new q0c,r5b(B,(C=new gQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new hjb(C.a)).a),rlb(B.eb,KKd,true),B)),V$b(t,new $vc((D=new gQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new hjb(D.a)).a)),V$b(t,(F=new q0c,r5b(F,(G=new gQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new hjb(G.a)).a),rlb(F.eb,KKd,true),F)),t)),V$b(i,new F4b),i)),b));return a}\nihb(405,228,uHd,Svc);ihb(1001,44,GHd,ERc);var Z5=wOb(uKd,'OfflinePresenter',1001);ihb(1236,48,HHd,KRc);var c6=wOb(uKd,'OfflineView',1236);ihb(1508,1,{},LRc);var b6=wOb(uKd,'OfflineView_BinderImpl',1508);ihb(1509,1,{},NRc);var $5=wOb(uKd,'OfflineView_BinderImpl/Widgets',1509);ihb(1852,1,{},PRc);var ORc;var a6=wOb(uKd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1852);ihb(1853,1,{},RRc);_.a=false;var _5=wOb(uKd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1853);ihb(925,1,SJd);_.Sb=function MWc(){JLb(this.b,nWc(this.a.a))};cFd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
