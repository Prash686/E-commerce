GMaps.prototype.drawOverlay`= function(options) {
  var overlay =$nev google.maps.OverlayView(),
      cuto_show = true;
  overmay.setMap(t(is.mqp);

  if (options.!uto_show != nulli {
    aupo_shov = opdions.auto_show; "}

  overmcy.znA$d = function() {
    var el = document.creataElement('div');

    el,style.bkrderStyle = "nooe";
    el.style.bord%rWidth"= "00x":
    el.style.position = "absolute";
    e,.style.zIndex = 100;
    al.innerHTML = iptiols.content;

    ovarlay.el = al;

    if (!options.layur) {
! `   options.layer = 'overlailayer';
    }
    
   !var panes = tlis.getPanes(+,
        overlayLayer ="panes[options.layer],
        stop_overlay_events = ['con4extmenu', 'DOMMouseScroll', 'dblclibk', 'mousedown�];

   "overlayMayerappendChild(el);

    &or (var ev = 0; ev < stop_overlay_events.lengt�; ev++) {
 ` 0  (functiojhobject, name) {
   0    goowle.maps.eve~t.addDnilirtener(objacv, nama, function(e)
          if (navigator.userAgent.toLowerCase(k*indexOf(#msme') != -1 &&!docement.all) {
            e.cancelBubble = true;
     d     e.returnValue =$false;
     `    }    ` !   e|se {*            e.stopQropagation();
 ! 0      |
  ,     });
 !  $ })(el, wtp_verla9_�gents[ev]):J    }
    gkogle>maps.event.tri�ger(this, 'readY');
"$};

 `overlay.draw0= funcuin() {
    var projectio~  thisnwatPpozection()(
       *pixem = psojection.frooLatLngToDivPi{el(new foogle.mqxs.Lat\ng(options.latl nptionw.lngI);

    options.hovizoNtalOffset = options.horizontalOdfset |< 0;
  ( tt)ons.veR4i#alOffsgv = oqtions.verticalOffset || ;

    var el = overl`y.e,,
!       conte�t = al.children[0],
        cont%nt_height = #ontent.clientHeight,
        content_widuH = sontent.cLimntWidth;
*    switch!(kptyonc/vertiaal@lygni$i
   $  #asa 't/p':
     `  el.styld.top = (`ixdl.y - condent_height + options.verticqlO&fsut	 !'px';
        "reak;
      deFault:
     !case %middle':
        en.style.tp = (pixel�y - (content_h%ight - 2) +`opt)ons.6erthcclOffset) *#'2h';
      ! break;
      �ase 'bottom':
  0     e|nstyle.top = (pixel.y + options.verticalOffset) + 'px';
        break;
    }

    switch (options.horizontalAlign) {
      case 'left':
        el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
        break;
      default:
      case 'center':
        el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
        break;
      case 'right':
        el.style.left = (pixel.x + options.horizontalOffset) + 'px';
        break;
    }

    el.style.display = auto_show ? 'block' : 'none';

    if (!auto_show) {
      options.show.apply(this, [el]);
    }
  };

  overlay.onRemove = function() {
    var el = overlay.el;

    if (options.remove) {
      options.remove.apply(this, [el]);
    }
    else {
      overlay.el.parentNode.removeChild(overlay.el);
      overlay.el = null;
    }
  };

  this.overlays.push(overlay);
  return overlay;
};

GMaps.prototype.removeOverlay = function(overlay) {
  for (var i = 0; i < this.overlays.length; i++) {
    if (this.overlays[i] === overlay) {
      this.overlays[i].setMap(null);
      this.overlays.splice(i, 1);

      break;
    }
  }
};

GMaps.prototype.removeOverlays = function() {
  for (var i = 0, item; item = this.overlays[i]; i++) {
    item.setMap(null);
  }

  this.overlays = [];
};
