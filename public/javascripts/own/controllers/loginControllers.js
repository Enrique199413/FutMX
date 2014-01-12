var queryModule  = angular.module( 'Query', [] );

queryModule.controller( 'QueryFunctions', queryController );

queryController.$inject = [ '$scope', '$http', '$log' ];
function queryController( scope, http ,log){

  scope.refresh = function () {
    var url = 'http://www.ligamx.net/portalv2/webservices/ws_GetXMLExternal.aspx?&url=http%3A%2F%2Finterfaces.ligamx.net%3A8021%2F%3FCSeg%3D45%26Parametros%3D_Query%3DEstd_Mrcd_New2.txt%40%40pbbase%3D1%40%40IDDivision%3D1%40%40IDTemporada%3D64%40%40IDTorneo%3D2%40%40IDJornada%3D2%40%40Inst%3D1&_RDN=351604&rndm=0.17765948781743646';
    http({
        method: 'GET',
        url: url,
        async:   false,
        cache:   false,
        Origin: 'dadaa',
        host : 'www.ligamx.net',
        headers: {'Accept': 'application/json', 'Pragma': 'no-cache'}
      })
    .
    success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('success');
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('error');
      console.log(data);
      console.log(status);
      console.log(headers);
      console.log(config);
    });
  };
}
/*type: "GET", url: "/portalv2/TXT/XML/Divisiones.xml", async: false, cache: false,
        data: '&rdn=' + Math.random()*/