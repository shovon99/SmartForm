// Your jQuery goes here

var userData = {}
if(localStorage.getItem('userData'))
{
	var ls = localStorage.getItem('userData');
	userData = JSON.parse(ls);

	$("#name").val(userData.name);
	$("#exampleInputEmail1").val(userData.email);

}
else{
	userData = {
    name:"",
    email:"",
    html: [],
    css: [],
    js: [],
    strengths: {html:"", css:"", js:""},
    currentQuestion: "welcome"
 }

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

var ques = [false, false, false];

function validateName(name){
	var re = /^[a-zA-Z]{3,20}$/;
	return re.test(name);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$("#startButton").click(function()
	{
		$("#welcome").hide();
		$("#q1").show();
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

			localStorage.setItem('userData', JSON.stringify(userData));

			$("#q1").hide();
			$("#q2").show();

			//console.log(userData.name + " " + userData.email);

		}
   
		
	});


$("#q2html").click(function()
	{
		$("#q2").hide();
		$("#q2a").show();
	});
$("#q2css").click(function()
	{
		$("#q2").hide();
		$("#q2b").show();
	});
$("#q2js").click(function()
	{
		$("#q2").hide();
		$("#q2c").show();
	});
$("#q2aprevious").click(function()
	{
		$("#q2a").hide();
		$("#q2").show();

	});
$("#q2bprevious").click(function()
	{
		$("#q2b").hide();
		$("#q2").show();

	});
$("#q2cprevious").click(function()
	{
		$("#q2c").hide();
		$("#q2").show();

	});
$("#q2anext").click(function()
{
	
	
	
	if(userData.html.length > 0)
	{
		ques[0] = true;
		
		if(ques[1] == false)
		{
			$("#q2a").hide();
			$("#q2b").show();

		}
		else if(ques[2] == false)
		{
			$("#q2a").hide();
			$("#q2c").show();	

		}
		else
		{

			$("#q2a").hide();
			$("#q3").show();

		}
	}
	else
	{
		alert("Please Choose atleast atleast one !");
	}
		

});
$("#q2bnext").click(function()
{
	
	if(userData.html.length > 0)
	{
		ques[1] = true;
		
		if(ques[0] == false)
		{
			$("#q2b").hide();
			$("#q2a").show();

		}
		else if(ques[2] == false)
		{
			$("#q2b").hide();
			$("#q2c").show();	

		}
		else
		{
			$("#q2b").hide();
			$("#q3").show();

		}
	}
	else
	{
		alert("Please Choose atleast atleast !");
	}

});
$("#q2cnext").click(function()
{
	

	if(userData.html.length > 0)
	{
		ques[2] = true;
		if(ques[0] == false)
		{
			$("#q2c").hide();
			$("#q2a").show();

		}
		else if(ques[1] == false)
		{
			$("#q2c").hide();
			$("#q2b").show();	

		}
		else
		{
			$("#q2c").hide();
			$("#q3").show();

		}
	}
	else
	{
		alert("Please Choose atleast atleast one !");
	}

});
$("#q3previous").click(function()
	{
		$("#q3").hide();
		$("#q2").show();
	});
$("#q3next").click(function()
	{
		$("#q3").hide();
		$("#thanks").show();
	});

$("#q2a input[name='likesHTML']").click(function(event){
			if (this.checked) {

				

		        console.log($("input[name='likesHTML']").index(this));
		        userData.html.push($("input[name='likesHTML']").index(this));
		        console.log(userData.html);
        
		}
});