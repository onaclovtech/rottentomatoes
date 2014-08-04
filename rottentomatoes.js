//rottentomatoes angular service
  angular.module('video', []).factory('$video', ['$http', function($http) {
      return { $search : function (api_key, query, page_limit)
                  {
                          var method = 'GET';
                          var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?";
                          $http({method: method, url: url + "apikey=" + api_key +
                                                                           "&q=" + query // Should I encode query to web stuff or is that taken care of?
                                                                           "&page_limit=" + limit}).
                          success(function(data, status) {}).
                          error(function(data, status) {});
                  }
            };
    }
  ]);
  
  // Need to update to return the promise and the success and error are managed in the returned function (unless someone has a better idea)
