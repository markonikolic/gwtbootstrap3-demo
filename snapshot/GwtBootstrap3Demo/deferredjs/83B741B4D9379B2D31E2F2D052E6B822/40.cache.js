$wnd.GwtBootstrap3Demo.runAsyncCallback40("function oNc(){}\nfunction sNc(){}\nfunction uNc(){}\nfunction vNc(){vNc=Wdb;rNc=new uNc}\nfunction Dsc(a){rvb.call(this,a);Csc(this)}\nfunction nNc(){DGb.call(this);BGb(this,pNc(new qNc))}\nfunction hNc(a,b,c){PFb();lGb.call(this,a,b,c,(Zsc(),Ysc))}\nfunction qNc(){this.a=(new sNc,vNc(),rNc);tNc(this.a)}\nfunction TRc(a){var b;if(!a.M){b=new nNc(new oNc);a.M=b}return a.M}\nfunction SRc(a){var b;if(!a.L){b=new hNc(oFb(SGb(a.a)),TRc(a),RRc(a));HFb((VGb(a.a),b),fHb(VGb(a.a)));a.L=b}return a.L}\nfunction tNc(a){if(!a.a){a.a=true;fv((rB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction pNc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new o2b;KXb(a,(b=new a$b(ABd),KXb(b,(c=new U0b,c.a='Offline',T0b(c),c)),KXb(b,(d=new PYb,KXb(d,(e=new O$b((Oac(),Lac)),Zhb((vpb(),e.eb),'GPBYFDECM',true),Rsc(e.b,NHd),LXb(e,e.b,0),e)),KXb(d,new Lsc((j=new XMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Qfb(j.a)).a)),KXb(d,(f=new VXc,d2b(f,(k=new XMb,k.a+=OHd,new Qfb(k.a)).a),Zhb(f.eb,FBd,true),f)),KXb(d,new Lsc((l=new XMb,l.a+=PHd,new Qfb(l.a)).a)),KXb(d,(g=new VXc,d2b(g,(m=new XMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Qfb(m.a)).a),Zhb(g.eb,FBd,true),g)),Zhb(d.eb,'GPBYFDEBM',true),d)),KXb(b,(h=new f1b,KXb(h,(n=new u1b,KXb(n,(o=new O$b(Kac),Rsc(o.b,'What is Offline?'),LXb(o,o.b,0),o)),n)),KXb(h,(p=new h1b,KXb(p,new Dsc((q=new XMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Qfb(q.a)).a)),p)),KXb(h,new r1b),h)),KXb(b,(i=new f1b,KXb(i,(r=new u1b,KXb(r,(s=new O$b(Kac),Rsc(s.b,'How to configure?'),LXb(s,s.b,0),s)),r)),KXb(i,(t=new h1b,KXb(t,new Lsc((u=new XMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Qfb(u.a)).a)),KXb(t,(v=new VXc,d2b(v,(w=new XMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Qfb(w.a)).a),Zhb(v.eb,FBd,true),v)),KXb(t,new Lsc((A=new XMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Qfb(A.a)).a)),KXb(t,(B=new VXc,d2b(B,(C=new XMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Qfb(C.a)).a),Zhb(B.eb,FBd,true),B)),KXb(t,new Lsc((D=new XMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Qfb(D.a)).a)),KXb(t,(F=new VXc,d2b(F,(G=new XMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Qfb(G.a)).a),Zhb(F.eb,FBd,true),F)),t)),KXb(i,new r1b),i)),b));return a}\nVdb(405,232,Pzd,Dsc);Vdb(970,49,xyd,hNc);var z3=lLb(qBd,'OfflinePresenter',970);Vdb(1211,53,yyd,nNc);var E3=lLb(qBd,'OfflineView',1211);Vdb(1448,1,{},oNc);var D3=lLb(qBd,'OfflineView_BinderImpl',1448);Vdb(1449,1,{},qNc);var A3=lLb(qBd,'OfflineView_BinderImpl/Widgets',1449);Vdb(1795,1,{},sNc);var rNc;var C3=lLb(qBd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1795);Vdb(1796,1,{},uNc);_.a=false;var B3=lLb(qBd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1796);Vdb(894,1,OAd);_.Sb=function pSc(){yIb(this.b,SRc(this.a.a))};Vvd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
