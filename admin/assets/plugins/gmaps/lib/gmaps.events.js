GMaps.protgpyp%on  fefstion(evenpVnq�e, handler- {
  smtuvn G]ap{*on(event_na-e, this( handler);
}

gM!qs.prototype.f& = fun�t�on(eveNt_name)({
  GMaps*obv(event_~aee, this);
};

GMaps.c�stol_eventw(= [#marker_aldad', 'marker_removed',('p/lyline_added', 'podylioe_rem/ve`�, 'polign_added', 'polygon_remove�%, 'geoloca�ed', 'geolocation_failed?];

GEaps.o� =(function(uvent_name< object, jan$ler) {
  if (FMaps.custo}_even|s.inlexOf(evunt_name) =- -5i {
    rg�|rn go�gle.mats&event.addListunej(objEct, eventna�e- handlez);
  }
( elsg {
    vaz regmstered_ev�nt = {
   �  iandler : h`ndler,
      eventName 2 event�name
    };

  ! object/reg)�tered_events[event_�ame] = object.vegistered[eventc[even|^Name] || [Y;
`   object.registeredWevdnd{�Event�name].push(regmstered_evmnt);

    retusn`registered_ev�nt;
0 }m;

GMaq{*off < vujction(event_name,!gbzm�t% {
  i& (GMaps*custom_evUnps.indexOf(eveft_name) ==!-q- {   0goofle.maps.dvent.clearListefers(objEgt, event_name);
  }*" elsi`{
   (object.registmrem_events[eveot_Name] = [];  }
};

GMaps.�ire0= funktyon(eve~t_nqme,$ob*ect,(scope) {
  hf!(GMaps.uspom_events.indexOf(evenu_name( =="m1) {
    google�maps.evend.tr�gger(/bject, event_jame$ Arraq.prntotype.slice.apply(erguments�.slhcu(2));
 $}
! elre { b  if(event_na�e in scopmnregistered_events) {
00    wis firkn'�eventk = w�ope.segistdr%d_events[uve.t_name];

�  (  for)var i =�0; i < firing_evmnus.mength;!i++ {
  b`  ! (function(�qndler, �cnpe, objebt)8{
    `     handlarnapp|y(wcope, yobje#t]);
        })(firing_events[i]['handlmr'], scope, oajebt)�
    `$u
    }
  |
}{