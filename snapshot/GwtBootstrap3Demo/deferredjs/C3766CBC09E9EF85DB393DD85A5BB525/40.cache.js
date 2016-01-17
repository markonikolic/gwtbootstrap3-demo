$wnd.GwtBootstrap3Demo.runAsyncCallback40("function hNc(){}\nfunction lNc(){}\nfunction nNc(){}\nfunction oNc(){oNc=Sdb;kNc=new nNc}\nfunction wsc(a){kvb.call(this,a);vsc(this)}\nfunction gNc(){vGb.call(this);tGb(this,iNc(new jNc))}\nfunction aNc(a,b,c){HFb();dGb.call(this,a,b,c,(Ssc(),Rsc))}\nfunction jNc(){this.a=(new lNc,oNc(),kNc);mNc(this.a)}\nfunction MRc(a){var b;if(!a.M){b=new gNc(new hNc);a.M=b}return a.M}\nfunction LRc(a){var b;if(!a.L){b=new aNc(gFb(KGb(a.a)),MRc(a),KRc(a));zFb((NGb(a.a),b),ZGb(NGb(a.a)));a.L=b}return a.L}\nfunction mNc(a){if(!a.a){a.a=true;bv((nB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction iNc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new h2b;CXb(a,(b=new VZb(sBd),CXb(b,(c=new N0b,c.a='Offline',M0b(c),c)),CXb(b,(d=new IYb,CXb(d,(e=new H$b((Hac(),Eac)),Vhb((ppb(),e.eb),'GPBYFDECM',true),Ksc(e.b,FHd),DXb(e,e.b,0),e)),CXb(d,new Esc((j=new PMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Mfb(j.a)).a)),CXb(d,(f=new OXc,Y1b(f,(k=new PMb,k.a+=GHd,new Mfb(k.a)).a),Vhb(f.eb,xBd,true),f)),CXb(d,new Esc((l=new PMb,l.a+=HHd,new Mfb(l.a)).a)),CXb(d,(g=new OXc,Y1b(g,(m=new PMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Mfb(m.a)).a),Vhb(g.eb,xBd,true),g)),Vhb(d.eb,'GPBYFDEBM',true),d)),CXb(b,(h=new $0b,CXb(h,(n=new n1b,CXb(n,(o=new H$b(Dac),Ksc(o.b,'What is Offline?'),DXb(o,o.b,0),o)),n)),CXb(h,(p=new a1b,CXb(p,new wsc((q=new PMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Mfb(q.a)).a)),p)),CXb(h,new k1b),h)),CXb(b,(i=new $0b,CXb(i,(r=new n1b,CXb(r,(s=new H$b(Dac),Ksc(s.b,'How to configure?'),DXb(s,s.b,0),s)),r)),CXb(i,(t=new a1b,CXb(t,new Esc((u=new PMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Mfb(u.a)).a)),CXb(t,(v=new OXc,Y1b(v,(w=new PMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Mfb(w.a)).a),Vhb(v.eb,xBd,true),v)),CXb(t,new Esc((A=new PMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Mfb(A.a)).a)),CXb(t,(B=new OXc,Y1b(B,(C=new PMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Mfb(C.a)).a),Vhb(B.eb,xBd,true),B)),CXb(t,new Esc((D=new PMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Mfb(D.a)).a)),CXb(t,(F=new OXc,Y1b(F,(G=new PMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Mfb(G.a)).a),Vhb(F.eb,xBd,true),F)),t)),CXb(i,new k1b),i)),b));return a}\nRdb(405,232,Hzd,wsc);Rdb(970,49,oyd,aNc);var v3=dLb(iBd,'OfflinePresenter',970);Rdb(1211,53,pyd,gNc);var A3=dLb(iBd,'OfflineView',1211);Rdb(1448,1,{},hNc);var z3=dLb(iBd,'OfflineView_BinderImpl',1448);Rdb(1449,1,{},jNc);var w3=dLb(iBd,'OfflineView_BinderImpl/Widgets',1449);Rdb(1795,1,{},lNc);var kNc;var y3=dLb(iBd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1795);Rdb(1796,1,{},nNc);_.a=false;var x3=dLb(iBd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1796);Rdb(894,1,GAd);_.Sb=function iSc(){qIb(this.b,LRc(this.a.a))};Ovd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
