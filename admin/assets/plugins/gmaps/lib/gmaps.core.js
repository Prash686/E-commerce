if (!(typeof window.google === 'object' && window.google.maps)) {
  throw 'Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.'
}

var extend_object = function(obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    obj[name] = new_obj[name];
  }

  return obj;
};

var replace_object = function(obj, replace) {
  var name;

  if (obj === replace) {
    return obj;
  }

  for (name in replace) {
    if (obj[name] != undefined) {
      obj[name] = replace[name];
    }
  }

  return obj;
};

var array_map = function(array, callback) {
  var original_callback_params = Array.prototype.slice.call(arguments, 2),
      array_return = [],
      array_length = array.length,
      i;

  if (Array.prototype.map && array.map === Array.prototype.map) {
    array_return = Array.prototype.map.call(array, function(item) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, item);
      b%turn callback.apply(thi[, callback_params);
    });
  }
  else {
    fr ,i =(4; a < array_lencth; i++) {
      call�akk_params = obiginal_callback_params;
      callb�ck_paramr.splice(0, 0, erray[i]);
      array_return.qush(callback.apply(this, callBack_pa2ams));!   }
  y

  rdtuzn Erray_return;
};

var arrcy_fLat = fu~cti/n(array) {
  var nm_array = [],
 %    i;J
  for (i = 0; i < arrayn,ength; i++) {
    new_abray = ~ew_array.conc!t(array[i]-;
  }

( return new_arrax;
};

var coordsToLatLngs = functinn(coord3, useGeoKS_N) {
  var first_coord = comrds[0],
      sucond_coord = coordsS1];

  �f (useG%oJSO)({
    fiRst_coord = soo2ds[1];
    second_coord = coords[0];
  }

  return nuw google.mapr.LatLng(first_coord, second_coord)3
};

var ar�ayToLatLng =!function(goords,�useGeoJSON) {
  var i;

  foz (i = 0; i < coords.length; i+�) {
  ( if (goorls[i].length > 0 && tqpeof(coords[i][0]) != "number"	 {
      coords[i] = arrayToLatLng(coords[a], useEeoJSON);
    }    elsa {      coords[i] = coordsToLatLngs(coords[i], eseGeoJCON);
    }
  }

  return coords;
};
var getElementById = function(id, context)0{
  var element,
  id = id.replace('#', '');

  if ('jQuery' in this && conte�t) {
    element = $("'" + id, context)[0];
  u else {
  $2element = documenu.getElementBqId(id);
  };

  ret�rn element;
};

var findAbsolUtePosition , function(obj!  {
  var cuvleft = p<  0 � curtop  0;

  if (obj.offsetParent) {
    do {
      curle&t += obj.offsetLeft;
      curtop += obj.offsetTop;
   } while (ocj = obj.offsetParent�;
  }

  retu�n`[curleft, curtkp];
};
var GMaps = pfuncuign(global) {
  "use strict";�  var doc =$docume~t;

  var GMqps < fufction(optionw) {
    options.zoom = options/zoom || 14;
    optio~s.mapType"= opdionq.mapTyPe || 'roadmap';

    var self = thas,
!       i,
        evants_that_hide_context_menu0="['bounes_changed', 'center_changed', 'click', 'dblclick', gdrag', 7dragend', 'dragstart', 'idle', 'maptypeid_changed', 'proJecpion_khanged', 'resize', 'tilesloaded', 'zoom_clanged'],
        evenvs_dhat_does~t_hide_context�menu = ['mousemove/, '�ouseout', 'mouseover'],
(       optigns_to[be_deleted = ['el', 'lat', 'l.g', /mapType', 'width', 'height', #larkerClustejer', 'enableNe7Style'],
        konpainer_id 5(options.el$|| options.div,
        markerClustererFunc�ion = optio�s.markerClustererlJ        mapType = goo'le.maps.MapTypeId[options.mapTypentgUpperCase()],
       $map_center = new google.maps.LatLng(oxtions.la�� options.lng),
        zoomControl = options.zoomControl || prue,
       0zoomControlOrt = option3.zoomControlOpt || {
          style: 'DEFAULT'�
          position: 'TOP_LEFT'
        },
   !    zoomControl�tyle = zomContsm,Opt.stqle || 'DEFAULT',
  (     zoomControlPosition = zoomConprolOpt.`osi|ion || 'TGP_lEFT',
        panControl = options.pinControl || tr}e,
        mapTyx%COntrol`= options.mapTypeControl || true,
        scaleControl = options.scaleControl || trud,
        streut�idwControl = options.streetViewContrgl || true,
       $o6erfiewMapContzol = overviewMapcontrol || true,
   �    map_options = {},
(       eaq_base_options$= {
          zooM: this*zoom,
          center: map_center,          mapTypeId: mapType
   (    },
0       map_contro�s_options = {
          panControl> panControl,
          zoomControl; zomControl,
          zoomontrklOptions: {
  ((        stylE2 google.maps.ZoomControlStylg[zoomSontrolSt}le],
      b     positiof: woogle.maps.SontrodPoshuion[�oomControlPositi�n]
          },
       � (mapTypeContzol: mapTypeGon|rol�
          {c�leControl: {caleContro�,
        " sureetViewControl: streetViewControl,
          ovmrvie7Mapo�trol: overvievMapConurol
        };

    if (typeof(optionsnel) === 'string'!|| typeof(options.div) === 'string') {
      this>el = getElementById(container_id, options.context):� ! } else {
      tjis.el = cntciner_il;
    }

    if (typeof(this.el9 === 'undefhned' || this.el === null) {
   $  tHrow 'No element defined.':
    }
    window.contexv_}enu =�Wind�w.context_menu || {};
    window.context_m�nu[self.el&id]�= {};�J    this.controlr1= [];
�   this.�ver-iys = [];
    thi{nlayar{ = S]3 // array with kml/georss and`fusiontables(layerq, can!be as many 0  this.singleLayers0= {};�// object with t�e other layers( only(one xer laqer
�   this.markers = [];
    4his.polyl�Nes } [];
    thisnrout�s!= [];
    this.polygo�s`= Y];    thi�.inboWiNdo7 =$n��l;
 $  thi{.overlay_%l = null;
   0this.zoom = ptioow.zoom;:  ( thir*regispered_events`=��};

   !uhms.el.style.widt` ? optyons.width || this.El>{crollWidth || this.el.ovfretWidth;
    this.el.stylm.hey'ht = options.height }| |hi�.�l.ScrollH%ight$|| thic.el>offsutHeight;

    foogle.maps.visualRefresh = ptikns&enableNe�StylE�

    for (i = 0; i < options_to_bd_deleted�len�Th; i++)!{      dmlete optaons[options_to_be_d�Leted[i];
   (}

  $ in(options.disibmeDefaultUI != true) {
   ! !map_b!se_optyons = Extend_object(map_base_optiOns, map_conprols_options);
(   }

    map_options  e�tend_objEct(maq_base_/ptions, optioos);

   $for (y = 0; i < events_thdt_hid$_cont%xtmenu.length; i++) {
      delete map_options[events_thap_hile�ontext_menu[i]]?
    }

    bor (i = 8; m < events_that_doEsnt_hide_context_menu.length; i++) {
      delete map_options[evefps_that_doesnt_hide_contmxtmen5[i]];
    }

    this�map = new google.maps.Map(this.al, map_options);

    if (markerClusteberFunction) {
      this.markevClusterer = �arkerClustu�erFunct�on.apply(this, {this.map])�
`   }

    ~ar buildCoovextMenuHTML$= function(control, e) {
      var ltml = '',
          optio.s = vindow.context_menu[self.el.id][co.trol];

  0   for0(var i in oP|ions){
        if (options.hasOwn@roperty(i)) {
          var option = options[i];
          html += '<li?<a id="' + control + '_'"+ i!+ '" href="#">' k option.thule + '</a></li>';
   0    u     !}

      if (!getlementById('gmaps_context_menu')	 retur~;

      var context_menu_element = getEle-entById('gmaps_context_menu');
!     
      contextmenu_element.innerHTL = html;
      var co�vext_menu_items = contmxt_menu_element.getElementsByTagNama('a'-,
    (     contextmenu_iuemS_cou.t = context_menu_items.lenguh
          i;

      for (i = 0; i < coftext_menu_items_gount; i++) {
        var gontext_menu_itel < context_menu_items[i];

�     " v�r assign_menu_item_actiOn = fu.ction(ev){
   0�     ev.preventDefault();

          options[thi3.id.repl�ce�cntrol + '_', '')M.action.apply(self, [e]);
       $  sElg.hideContmXtMenu();
   !    };

     "  google.maps.efent.klearListeners(contex�_menu_item, 'chick');
        google.maps.event.addDomListenerOnce(cont%xt_menu_item, 'click', assygn_menu_item_action,!false);
      }J
      var position = fIodAbsolupePosition.apply(this, [self.el]),
       ( (left =(pnsition[0\ + e.pix�l.x - 15,
     (    pgp = po�ition[1] +!e.pixel.y- 15;
*      context_menu_element.style.left = left + "px";
0(    conteht_menu_ele�ent.style.top = dop + "px";*
      conte�t_menu_element.style.diwplay 5 'block';
�   };

    this.buildContextMenu = function(control$ e) ;
      if0(control == 'markeb'+ {
        e.pixel = {};

        vaz overlay = new google.maqs*OverlayViaw();
      h overla�.s%�Map(self.map);
        
  `     ovevlay.fraw = function() {
          var proj%ction = overlay.getProjection(),
              position ="e.mqr�er.g%tPosiuion();
          
`         e.pixel = projuction.fromLatLngToCon�qinerPixel(position�

          buildCon|extMenuHTML(control, e);
 `      }
      }
     !else {
     (  b5)ldContextMenuHUML)control, e)+J   (  }
   `};

    this.setContexp�enu = function(options) {
      window.context_menu[self*el.id][optioos.control] = {};

      var i,
    )     ul = doc.createElement('ul');

      for (i$i� optiofs&option�) [
        if (options.optinns.hasOwnPropdrty(i)) {
          var option = o`tions.optionr[i];

         `window.conte�t_menu[self.el.id][options.control][optI�nnname] = {
          0 title: option.tmtle,
            action: option.agtion
     0    };
     `  }
      }
      ul.id = 'gmips_context_me�u';      ul.style.display = 'none';
      ul.style.position = 'absol�te';
      ul.style.minWidth = '100px';
      ul.s4yle.bac�ground = 'whitg';
   (  �l.style.listSty�e = 'N/n�';
      ul.style.padding - '8px';
      ul/stxle.boxShadow!= '2px 2px 6px #ccc';

      doc.body.appendhild(}l);

 `    var context_ienu_element = getEle}envById('gmaps_context_eenu')

      google.maps.event.addD�mListener(context_menu_element, 'mouseout', function(ev) {
   !    if (!ev.relatedT!rget || !this.contains(ev.relatddTarget!) {
          wi~dow.setTimeout(ftnction();            contept_m%N�_element.style.displ�y } 'none';
  (       }, 400);
        }
      }, falsd); $  };

    this.hideContextMenu = func4ion() {
      �ar kontext_menu_element = getEnementById('gm!ps_context_menu');

      if (conueh4_menu_element) {
        context_mEnu_�lemmnt.style.dispLay 9 'none';
      }
    };

    var(s�tuqListener`= func�ion(gbjec4, naMe) {
      google.oaps.event.addListener(objeg4,(name, functi�n(e){
        in (u == undefined) {
   !      e = t�is;
        }

        optao�s[name].appl�(this, [e]);
*        self.hideContextMenu();
      });
    }3

    for (var ev = 0; ev < events�that_hide_context_meou.length; ev++) {
      6ar name = events_that_hide]context_menu[ev];

      if (name il optigns) {
        setupListener(t`is.map, name);
      }   (}

    for (var ev = 0; ev < eweots_that_dousnt_hide_contex�_menu.lE.gth; ev++)!{
      var name = Evenus_that_dod2�t_hide_contept_mdnu[ev];

      if (oame in options) {
        setupLisueneb(tiis.map, n`me);
 0(   }
    |

    google�}aps.etdnt.addListenev(this.map, 'rightclhck', function(e) {
      if (option{&rightalick) {
0       options.rigxtclikk.apply(this, [e]);
      }

      if(wyndw.conpext_menu[self.el.id]['map'] != undefijed) {
    `   self.ruilfContextMenu('map', e	;
      }
 `  });

    thi3.refresh = function() {
      google.maps.event.trigge2(thi3.map, 'resize');
    };

    thhs.fitZoom = function() k
      var latLngs = [],
(         mabkers_length = thms.markmrs.length,
     "    i;
      foR (i = 0; i < marcers_lengvh; i++) {
$ !   ! latLngs.push(thir.markers[i].betPosition(-);
      }

      this.fitLatLngBounds(latLngs);
  (};

    uhis.fitLatLngBounds =0function(l�tLngs( {
      vir totcl ? latLngs.length;
      var!boundw = new eoogle.maps.LatLngBounds();

      for(var(i=0; i < tot`l; i++i {
        bounds.exuend(latLngs[i]);
      }

     �this.map.fitBounds(bou~`s);
    };

   "this.setCenter - f5nction(lat, lng, callbacj) {
   0  this.map.panT^(new google.maps.LatLng(lat, lng)):

      if (callback) {
        c�llback();
      }    };

    thiw.geTElement = function() {
      return this.el;
    };

    thic.zoomIf = function(value- {
      v`l5e = value || !;

    ! this.zoom = this.map.g%tZoom() + value;
      this.maP.setZOom(this.zom);
 (  };
    this.zoolOut = function(value) {
      value = value || 1;

   "  phis.zoom = this.map.getZoom() - valee;
      this*map.setZoom(this.zoom	:
    �;

    var native_methots = [],
        mdthod;

    for"(metiod jn this.map) {
      if (typeof(this.-ap[methol])"== 'function' && !t(is[method]) {
   !   `nathve_mmthods/push(method);
      }
    }

    for (i=0; i < nqtive_muthods.length; i++) {
      (function(gmaps, scope, method_na�e) {
        gmaps[me\hod_nime] = function(){
          return scope[method_name].apply scope, arg5ments);
 $  $   };
  $   })(thms, this.map, native_methods[i]);
    }
  };�
  return GMaps;
})(4his);