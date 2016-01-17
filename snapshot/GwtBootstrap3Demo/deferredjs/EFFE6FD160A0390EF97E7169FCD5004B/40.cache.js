$wnd.GwtBootstrap3Demo.runAsyncCallback40("function LNc(){}\nfunction PNc(){}\nfunction RNc(){}\nfunction SNc(){SNc=veb;ONc=new RNc}\nfunction $sc(a){Wvb.call(this,a);Zsc(this)}\nfunction KNc(){ZGb.call(this);XGb(this,MNc(new NNc))}\nfunction ENc(a,b,c){jGb();HGb.call(this,a,b,c,(utc(),ttc))}\nfunction NNc(){this.a=(new PNc,SNc(),ONc);QNc(this.a)}\nfunction oSc(a){var b;if(!a.M){b=new KNc(new LNc);a.M=b}return a.M}\nfunction nSc(a){var b;if(!a.L){b=new ENc(KFb(mHb(a.a)),oSc(a),mSc(a));bGb((pHb(a.a),b),BHb(pHb(a.a)));a.L=b}return a.L}\nfunction QNc(a){if(!a.a){a.a=true;_u((CB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction MNc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new L2b;eYb(a,(b=new x$b(XBd),eYb(b,(c=new p1b,c.a='Offline',o1b(c),c)),eYb(b,(d=new kZb,eYb(d,(e=new j_b((jbc(),gbc)),Cib((aqb(),e.eb),'GPBYFDECM',true),mtc(e.b,eId),fYb(e,e.b,0),e)),eYb(d,new gtc((j=new rNb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new tgb(j.a)).a)),eYb(d,(f=new qYc,A2b(f,(k=new rNb,k.a+=fId,new tgb(k.a)).a),Cib(f.eb,aCd,true),f)),eYb(d,new gtc((l=new rNb,l.a+=gId,new tgb(l.a)).a)),eYb(d,(g=new qYc,A2b(g,(m=new rNb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new tgb(m.a)).a),Cib(g.eb,aCd,true),g)),Cib(d.eb,'GPBYFDEBM',true),d)),eYb(b,(h=new C1b,eYb(h,(n=new R1b,eYb(n,(o=new j_b(fbc),mtc(o.b,'What is Offline?'),fYb(o,o.b,0),o)),n)),eYb(h,(p=new E1b,eYb(p,new $sc((q=new rNb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new tgb(q.a)).a)),p)),eYb(h,new O1b),h)),eYb(b,(i=new C1b,eYb(i,(r=new R1b,eYb(r,(s=new j_b(fbc),mtc(s.b,'How to configure?'),fYb(s,s.b,0),s)),r)),eYb(i,(t=new E1b,eYb(t,new gtc((u=new rNb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new tgb(u.a)).a)),eYb(t,(v=new qYc,A2b(v,(w=new rNb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new tgb(w.a)).a),Cib(v.eb,aCd,true),v)),eYb(t,new gtc((A=new rNb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new tgb(A.a)).a)),eYb(t,(B=new qYc,A2b(B,(C=new rNb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new tgb(C.a)).a),Cib(B.eb,aCd,true),B)),eYb(t,new gtc((D=new rNb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new tgb(D.a)).a)),eYb(t,(F=new qYc,A2b(F,(G=new rNb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new tgb(G.a)).a),Cib(F.eb,aCd,true),F)),t)),eYb(i,new O1b),i)),b));return a}\nueb(406,232,kAd,$sc);ueb(970,49,Tyd,ENc);var $3=HLb(NBd,'OfflinePresenter',970);ueb(1211,53,Uyd,KNc);var d4=HLb(NBd,'OfflineView',1211);ueb(1450,1,{},LNc);var c4=HLb(NBd,'OfflineView_BinderImpl',1450);ueb(1451,1,{},NNc);var _3=HLb(NBd,'OfflineView_BinderImpl/Widgets',1451);ueb(1796,1,{},PNc);var ONc;var b4=HLb(NBd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1796);ueb(1797,1,{},RNc);_.a=false;var a4=HLb(NBd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1797);ueb(894,1,jBd);_.Sb=function MSc(){UIb(this.b,nSc(this.a.a))};qwd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
