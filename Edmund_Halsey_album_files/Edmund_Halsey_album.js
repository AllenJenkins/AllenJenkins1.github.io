// Created by iWeb 3.0.4 local-build-20140115

function createMediaStream_id2()
{return IWCreateMediaCollection("file://localhost/Users/joyce/Dropbox/Public/Halsey%20Jenkins%20iWeb%20site/Halsey_iWeb_webpage_site/Edmund_Halsey_album/Edmund_Halsey_album_files/rss.xml",false,1,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/joyce/Dropbox/Public/Halsey%20Jenkins%20iWeb%20site/Halsey_iWeb_webpage_site/Edmund_Halsey_album',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget4'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/joyce/Dropbox/Public/Halsey%20Jenkins%20iWeb%20site/Halsey_iWeb_webpage_site/Edmund_Halsey_album',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(1,new IWSize(482,362),new IWSize(482,34),new IWSize(618,411),27,27,0,new IWSize(93,77)),new IWPhotoFrame([IWCreateImage('Edmund_Halsey_album_files/leatherbook_ul.png'),IWCreateImage('Edmund_Halsey_album_files/leatherbook_top.png'),IWCreateImage('Edmund_Halsey_album_files/leatherbook_ur.png'),IWCreateImage('Edmund_Halsey_album_files/leatherbook_right.png'),IWCreateImage('Edmund_Halsey_album_files/leatherbook_lr.png'),IWCreateImage('Edmund_Halsey_album_files/leatherbook_bottom.png'),IWCreateImage('Edmund_Halsey_album_files/leatherbook_ll.png'),IWCreateImage('Edmund_Halsey_album_files/leatherbook_left.png')],null,0,0.700000,6.000000,6.000000,6.000000,6.000000,87.000000,54.000000,60.000000,69.000000,20.000000,16.000000,18.000000,16.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget4',null,'widget5',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Edmund_Halsey_album_files/Edmund_Halsey_albumMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');fixupIECSS3Opacity('id4');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
