// Your jQuery goes here

var userData = {}
if(localStorage.getItem('userData'))
{
	var ls = localStorage.getItem('userData');
	userData = JSON.parse(ls);

	$("#answer").hide();
	$("#welcome").hide();
	$(".question").hide();
  	$("#"+userData.currentQuestion).fadeIn();

	$("#name").val(userData.name);
	$("#exampleInputEmail1").val(userData.email);

	//console.log(userData.html.likes);
	//console.log(userData.strengths.html);

	if(userData.strengths.html!="")
	{
		$('input[name=inlineRadioOptions][id=' + userData.strengths.html +']').attr('checked', true);

	} 
	if( userData.strengths.css!="")
	{
		$('input[name=inlineRadioOptions2][id=' + userData.strengths.css +']').attr('checked', true);

	} 
	if( userData.strengths.js!="")
	{
		$('input[name=inlineRadioOptions3][id=' + userData.strengths.js +']').attr('checked', true); 
	}
	
	

	var l = $("input[name='likesHTML']");
	for(var i=0; i<userData.html.likes.length; i++){

	    $(l[userData.html.likes[i]]).prop('checked', true);
	}

}
else{
	userData = {
    name:"",
    email:"",
    html: {likes: [], dislikes: []},
    css: {likes: [], dislikes: []},
    js: {likes: [], dislikes: []},
    strengths: {html:"", css:"", js:""},
    currentQuestion: "welcome"
  };
  localStorage.setItem('userData', JSON.stringify(userData));
 }

/*
}
  var userData = {
    name:"",
    email:"",
    html: [],
    css: [],
    js: [],
    strengths: {html:"", css:"", js:""},
    currentQuestion: "welcome"
 }
*/

var ques = [false, false, false];

function validateName(name){
	var re = /[a-zA-Z][a-zA-Z ]*/;
	return re.test(name);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$("#startButton").click(function()
	{
		//$("#welcome").fadeOut();
		$("#welcome").fadeOut();
		$("#q1").fadeIn();
	});


$("#q1next").click(function()
	{
		if(!validateName($("#name").val()))
		{
			alert("Please Enter Valid Name!");
		}
		else if (!validateEmail($("#exampleInputEmail1").val()) )
		{
			alert("Please Enter Valid Email!");
		}
		else 
		{
			userData.name = $("#name").val();
			userData.email = $("#exampleInputEmail1").val();

			$("#anname").append(userData.name);
			$("#anemail").append(userData.email);

			$("#q1").fadeOut();
			$("#q2").fadeIn();
			userData.currentQuestion = "q2";

			localStorage.setItem('userData', JSON.stringify(userData));

			//console.log(userData.name + " " + userData.email);

		}
   
		
	});


$("#q2html").click(function()
	{
		$("#q2").fadeOut();
		$("#q2a").fadeIn();
	});
$("#q2css").click(function()
	{
		$("#q2").fadeOut();
		$("#q2b").fadeIn();
	});
$("#q2js").click(function()
	{
		$("#q2").fadeOut();
		$("#q2c").fadeIn();
	});
$("#q2aprevious").click(function()
	{
		$("#q2a").fadeOut();
		$("#q2").fadeIn();

	});
$("#q2bprevious").click(function()
	{
		$("#q2b").fadeOut();
		$("#q2").fadeIn();

	});
$("#q2cprevious").click(function()
	{
		$("#q2c").fadeOut();
		$("#q2").fadeIn();

	});
$("#q2anext").click(function()
{
	
	
	
	if(userData.html.likes.length > 0)
	{
		ques[0] = true;
		
		if(ques[1] == false)
		{
			$("#q2a").fadeOut();
			$("#q2b").fadeIn();

		}
		else if(ques[2] == false)
		{
			$("#q2a").fadeOut();
			$("#q2c").fadeIn();	

		}
		else
		{

			$("#q2a").fadeOut();
			$("#q3").fadeIn();
			userData.currentQuestion = "q3";
			localStorage.setItem('userData', JSON.stringify(userData));

		}
	}
	else
	{
		alert("Please Choose atleast atleast one !");
	}
		

});
$("#q2bnext").click(function()
{
	
	if(userData.html.likes.length > 0)
	{
		ques[1] = true;
		
		if(ques[0] == false)
		{
			$("#q2b").fadeOut();
			$("#q2a").fadeIn();

		}
		else if(ques[2] == false)
		{
			$("#q2b").fadeOut();
			$("#q2c").fadeIn();	

		}
		else
		{
			$("#q2b").fadeOut();
			$("#q3").fadeIn();
			userData.currentQuestion = "q3";
			localStorage.setItem('userData', JSON.stringify(userData));

		}
	}
	else
	{
		alert("Please Choose atleast atleast !");
	}

});
$("#q2cnext").click(function()
{
	

	if(userData.html.likes.length > 0)
	{
		ques[2] = true;
		if(ques[0] == false)
		{
			$("#q2c").fadeOut();
			$("#q2a").fadeIn();

		}
		else if(ques[1] == false)
		{
			$("#q2c").fadeOut();
			$("#q2b").fadeIn();	

		}
		else
		{
			$("#q2c").fadeOut();
			$("#q3").fadeIn();
			userData.currentQuestion = "q3";
			localStorage.setItem('userData', JSON.stringify(userData));

		}
	}
	else
	{
		alert("Please Choose atleast atleast one !");
	}

});
$("#q3previous").click(function()
	{
		$("#q3").fadeOut();
		$("#q2").fadeIn();
	});
$("#q3next").click(function()
	{
		$("#q3").fadeOut();
		$("#thanks").fadeIn();
		//userData.currentQuestion = "thanks";
		localStorage.setItem('userData', JSON.stringify(userData));
	});

$("#viewanswer").click(function()
{
	$("#answer").fadeIn();

});

var line;

$("input[name='likesHTML']").click(function(event){
			if (this.checked) {

				line =  $(this).next('label').text();
				console.log("line: "+line);
				if($("input[name='likesHTML']").index(this)<4)
		    	{
		    		//line = this.value;
		     		$("#anhtmllikes").append(" ++ "+line+" ++ ");
		    	}
		    	else if($("input[name='likesHTML']").index(this)>3 && $("input[name='likesHTML']").index(this)<8)
		    	{
		    		//line = this.value;
		     		$("#anhtmldlikes").append(" ++ "+line+" ++ ");
		    	}
		    	else if($("input[name='likesHTML']").index(this)>7 && $("input[name='likesHTML']").index(this)<11)
		    	{
		    		$("#ancsslikes").append(" ++ "+line+" ++ ");
		    	}
		    	else if($("input[name='likesHTML']").index(this)>10 && $("input[name='likesHTML']").index(this)<15)
		    	{
		    		$("#ancssdlikes").append(" ++ "+line+" ++ ");
		    	}
		    	else if($("input[name='likesHTML']").index(this)>14 && $("input[name='likesHTML']").index(this)<19)
		    	{
		    		$("#anjslikes").append(" ++ "+line+" ++ ");
		    	}
		    	else{
		    		$("#anjsdlikes").append(" ++ "+line+" ++ ");
		    	}

		        console.log($("input[name='likesHTML']").index(this));
		        userData.html.likes.push($("input[name='likesHTML']").index(this));
		        console.log(userData.html);
		        localStorage.setItem('userData', JSON.stringify(userData));
        
		}
});

$("input[name='inlineRadioOptions']").click(function(event){
			if (this.checked) {

				
				$("#anhtmlstr").append(" "+$(this).next('label').text());
		        //console.log($("input[name='likesHTML']").index(this));
		        userData.strengths.html=$(this).attr('id');
		        console.log(userData.strengths.html);
		        localStorage.setItem('userData', JSON.stringify(userData));
        
		}
});

$("input[name='inlineRadioOptions2']").click(function(event){
			if (this.checked) {

				
				$("#ancssstr").append(" "+$(this).next('label').text());
		        //console.log($("input[name='likesHTML']").index(this));
		         userData.strengths.css=$(this).attr('id');
		        console.log(userData.strengths.css);
		        localStorage.setItem('userData', JSON.stringify(userData));
        
		}
});

$("input[name='inlineRadioOptions3']").click(function(event){
			if (this.checked) {

				
				$("#anjsstr").append(" "+$(this).next('label').text());
		        //console.log($("input[name='likesHTML']").index(this));
		        userData.strengths.js=$(this).attr('id');
		        console.log(userData.strengths.js);
		        localStorage.setItem('userData', JSON.stringify(userData));
        
		}
});

$("#delanswer").click(function(event){
  				$("#answer").fadeOut('blind');
			  	$("#welcome").fadeIn('blind');
			  delete userData;
			  userData = {
			    name:"",
			    email:"",
			    html: {likes: [], dislikes: []},
			    css: {likes: [], dislikes: []},
			    js: {likes: [], dislikes: []},
			    strengths: {html:"", css:"", js:""},
			    currentQuestion: "welcome"
			  };
			  localStorage.setItem('userData', JSON.stringify(userData));
			  location.reload();

});




