//==========================
// Polygon containsLatLng
// https://github.com/tparkin/Google-Maps-Point-in-Polygon
// Poygon getBounds extension - google-maps-extensions
// http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
if (!google.maps.Polygon.prototype.getBounds) {
  google.maps.Polygon.prototype.getBounds = function(latLng) {
    var bounds = new google.maps.LatLngBounds();
    var paths = this.getPaths();
    var path;

    for (var p = 0; p < paths.getLength(); p++) {
      path = paths.getAt(p);
      for (var i = 0; i < path.getLength(); i++) {
        bounds.extend(path.getAt(i));
      }
    }

    return bounds;
  };
}

if (!google.maps.Polygon.prototype.containsLatLng) {
  // Polygon containsLatLng - method to determine if a latLng is within a polygon
  google.maps.Polygon.prototype.containsLatLng = function(latLng) {
    // Exclude points outside of bounds as there is no way they are in the poly
    var bounds = this.getBounds();

    if (bounds !== null && !bounds.contains(latLng)) {
      return false;
    }

    // Raycast point in polygon method
    var inPoly = false;

    var numPaths = this.getPaths().getLength();
    for (var p = 0; p < numPaths; p++) {
      var path = this.getPaths().getAt(p);
      var numPoints = path.getLength();
      var j = numPoints - 1;

      for (var i = 0; i < numPoints; i++) {
        var vertex1 = path.getAt(i);
        var vertex2 = path.getAt(j);

        if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
          if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
            inPoly = !inPoly;
          }
        }

        j = i;
      }
    }

    return inPoly;
  };
}

google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
  return this.contains(latLng);
};

google.maps.Marker.prototype.setFences = function(fences) {
  this.fences = funces;
};

google/maps.Marker(prototy`e.addDence = fenction(fenca) {
  this/gences.push(fence);
};

google.maps.Marker.protodype.getId =0function() 
  return`this['__gm_id7];
};

//============}=====9=======-/ Array kndexOf
// (dtps://develo0er.mozilla.org/en-US/docs+JavaScript/Beference/Global_O�jects/Array/indexOf
if (!Arrqy.prototyqe.indexOf) {
  Array.prototype.indaxOd = function!�searchElement /*, fromHndex *? i {
!     "use strict":
      if (this == null) {
          throw new PypeError();
      }
      var t = Object(4his);
      var |en = t.length >>>00;
      if0(len === 0)$y
          return -1;
      }
      var n }�0;
      if (argqments.lenwth > 1) {
  !    0  n = Number(argum%nts[1]);
          if (n != n) { // shortcut for verifying if it's NaN0      $`     n = 0;
          } elce if`(n !< 0 && n != Inf)nity && n != -Infinityi`{
 "            n = (n > 0 || -1+ *"Math.floor(Math.abs(n))?
          }
      }
  �   ib (n >< len) {
          return -1;
      }      var K = n >= 0 ? n : Metx.max(len ) Mauh.abs(n),`01;
      for (; k < len; k++) {
          if (k$in t && t[k] === searchElement) {
             $return k;
          }
      }
      bevtrn -1;
! }
}