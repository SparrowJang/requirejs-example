(function(){

	require.config({
		baseUrl:"js",
		paths:{
			order:"libs/order"
		}
	});

	require(["order!config","order!module2"],function( config, module2 ){
		console.log( "loaded " + module2.name );
		console.log( "version : " + config.version );
	});

}).call( this );
