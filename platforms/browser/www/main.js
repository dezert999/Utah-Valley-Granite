   console.log('loaded');
      function showGranite(gNum){
        var graniteLength;
        firebase.database().ref('/Granite/'+gNum).once('value').then(function(snapshot){
          graniteLength = snapshot.val().length;
          var div = document.getElementById("posts");
          var granitePost = document.createElement('div');
          var storageRef = firebase.storage().ref();
		  storageRef.child(snapshot.val().picNum+'.jpg').getDownloadURL().then(function(url) {
			  // Get the download URL for 'images/stars.jpg'
			  // This can be inserted into an <img> tag
			  var img = document.createElement('img');
			  img.setAttribute('id',snapshot.val().picNum)
			  img.setAttribute('src', url);
			  img.setAttribute('width',"90%");
			  img.setAttribute('height','90%')
			  granitePost.appendChild(img)
			  granitePost.appendChild(document.createElement("br"));
	          granitePost.appendChild(document.createTextNode(snapshot.val().Name+" "));
	          granitePost.appendChild(document.createElement("br"));
	          granitePost.appendChild(document.createTextNode(snapshot.val().AvgSize+" "));
	          granitePost.appendChild(document.createElement("br"));
	          granitePost.appendChild(document.createTextNode(snapshot.val().Thickness+" "));
	          granitePost.appendChild(document.createElement("br"));
	          granitePost.appendChild(document.createTextNode(snapshot.val().Price));
	          granitePost.appendChild(document.createElement("br"));
	          granitePost.appendChild(document.createElement("br"));
	          granitePost.appendChild(document.createElement("br"));


	          div.appendChild(granitePost);
	          console.log(snapshot.val());
			}).catch(function(error) {
				storageRef.child('error.jpg').getDownloadURL().then(function(url) {
				  // Get the download URL for 'images/stars.jpg'
				  // This can be inserted into an <img> tag
				  var img = document.createElement('img');
				  img.setAttribute('src', url);
				  img.setAttribute('width',"40%");
				  img.setAttribute('height','40%')
				  granitePost.appendChild(img)
		          granitePost.appendChild(document.createTextNode(snapshot.val().Name));
		          div.appendChild(granitePost);
		          console.log(snapshot.val());
				}).catch(function(error) {
				  console.error(error);
				});
			  console.error(error);
			});
          
        });
      }
      function errors(){
      		alert("cant call")
      }
      function onSuccess(){
      	alert("called")
      }
      	function call(){
      		alert("pressed");
      		window.plugins.CallNumber.callNumber(onSuccess(), errors(), "7189748628", false);
      	}
