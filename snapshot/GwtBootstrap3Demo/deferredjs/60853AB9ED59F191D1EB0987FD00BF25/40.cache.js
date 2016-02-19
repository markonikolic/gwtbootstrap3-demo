$wnd.GwtBootstrap3Demo.runAsyncCallback40("function RRc(){}\nfunction VRc(){}\nfunction XRc(){}\nfunction YRc(){YRc=lhb;URc=new XRc}\nfunction Yvc(a){Jyb.call(this,a);Xvc(this)}\nfunction QRc(){VJb.call(this);TJb(this,SRc(new TRc))}\nfunction KRc(a,b,c){fJb();DJb.call(this,a,b,c,(swc(),rwc))}\nfunction TRc(){this.a=(new VRc,YRc(),URc);WRc(this.a)}\nfunction uWc(a){var b;if(!a.M){b=new QRc(new RRc);a.M=b}return a.M}\nfunction tWc(a){var b;if(!a.L){b=new KRc(GIb(iKb(a.a)),uWc(a),sWc(a));ZIb((lKb(a.a),b),xKb(lKb(a.a)));a.L=b}return a.L}\nfunction WRc(a){if(!a.a){a.a=true;gx((sD(),'.GPBYFDEDM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEEM{margin-top:0 !important;}.GPBYFDEFM{margin-left:5px;}'));return true}return false}\nfunction SRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new I5b;a_b(a,(b=new u1b(MKd),a_b(b,(c=new m4b,c.a='Offline',l4b(c),c)),a_b(b,(d=new h0b,a_b(d,(e=new g2b((hec(),eec)),plb((Nsb(),e.eb),'GPBYFDEEM',true),kwc(e.b,RQd),b_b(e,e.b,0),e)),a_b(d,new ewc((j=new nQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new fjb(j.a)).a)),a_b(d,(f=new w0c,x5b(f,(k=new nQb,k.a+=SQd,new fjb(k.a)).a),plb(f.eb,RKd,true),f)),a_b(d,new ewc((l=new nQb,l.a+=TQd,new fjb(l.a)).a)),a_b(d,(g=new w0c,x5b(g,(m=new nQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new fjb(m.a)).a),plb(g.eb,RKd,true),g)),plb(d.eb,'GPBYFDEDM',true),d)),a_b(b,(h=new z4b,a_b(h,(n=new O4b,a_b(n,(o=new g2b(dec),kwc(o.b,'What is Offline?'),b_b(o,o.b,0),o)),n)),a_b(h,(p=new B4b,a_b(p,new Yvc((q=new nQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new fjb(q.a)).a)),p)),a_b(h,new L4b),h)),a_b(b,(i=new z4b,a_b(i,(r=new O4b,a_b(r,(s=new g2b(dec),kwc(s.b,'How to configure?'),b_b(s,s.b,0),s)),r)),a_b(i,(t=new B4b,a_b(t,new ewc((u=new nQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new fjb(u.a)).a)),a_b(t,(v=new w0c,x5b(v,(w=new nQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new fjb(w.a)).a),plb(v.eb,RKd,true),v)),a_b(t,new ewc((A=new nQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new fjb(A.a)).a)),a_b(t,(B=new w0c,x5b(B,(C=new nQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new fjb(C.a)).a),plb(B.eb,RKd,true),B)),a_b(t,new ewc((D=new nQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new fjb(D.a)).a)),a_b(t,(F=new w0c,x5b(F,(G=new nQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new fjb(G.a)).a),plb(F.eb,RKd,true),F)),t)),a_b(i,new L4b),i)),b));return a}\nkhb(404,228,BHd,Yvc);khb(1001,44,NHd,KRc);var _5=DOb(BKd,'OfflinePresenter',1001);khb(1236,48,OHd,QRc);var e6=DOb(BKd,'OfflineView',1236);khb(1506,1,{},RRc);var d6=DOb(BKd,'OfflineView_BinderImpl',1506);khb(1507,1,{},TRc);var a6=DOb(BKd,'OfflineView_BinderImpl/Widgets',1507);khb(1851,1,{},VRc);var URc;var c6=DOb(BKd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1851);khb(1852,1,{},XRc);_.a=false;var b6=DOb(BKd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1852);khb(925,1,ZJd);_.Sb=function SWc(){QLb(this.b,tWc(this.a.a))};iFd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
