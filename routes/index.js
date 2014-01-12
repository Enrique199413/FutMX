//Control Panel
  
//Index
  exports.index = function ( req, res ) {
    res.render('index', { 
      controller: 'QueryFunctions' 
    });
  };