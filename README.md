rottentomatoes
==============

Service for making rottentomatoes calls using their API

Additional Notes
=================
Using rottentomatoes in your own app is easy now.

Simply reference email in your module:

     var app = angular.module('myapp', ['movie']);

and then $email in your controller:

     function MyController($scope, $movie)
     
Finally request a book:

     $video.search(api_key,query,results); 

If you'd like to create a service for another data provider please add to NPM using angularjsservices, ng-services, or ngservices as the keyword I plan to aggregate using that at some point.
