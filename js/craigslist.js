$('#answers button').on('click',function(){
	if ($(this).parent().hasClass('single')){
		$(this).siblings().css('color','#4288D6');
		$(this).siblings().css('background-color','white');
		$(this).css('background-color','#4288D6'); 
		$(this).css('color','white'); 	
	} else {
		$(this).css('background-color','#4288D6'); 
		$(this).css('color','white'); 
	}
});

var question_1;
var answer_1;
var random_1;
var random1Fun = [" I'm also selling my Beanie Baby collection - yes, I still have a Beanie Baby collection and no, I am not selling it of my own free will.", " Please note that if you own a teacup pig and/or house in Bora Bora, you may receive an unfair advantage."," Please be advised that there is a secret door in my closet that we have never been able to open but that does sometimes emit strange noises, so it could be a portal to another dimension."];
var random1Serious = [" Please only email with serious inquiries and be prepared to provide proof of income immediately.", " Please link to your LinkedIn profile in any emails you send. Emails without a LinkedIn profile attached will be deleted."," Please provide phone number as well."];
var random1Normal = [" This is a great place and I'm sad to be leaving, but I'll be happy knowing that someone else gets to enjoy it."," Please get in touch if you're interested. I'm happy to chat over email or on the phone."," I'm looking to find a subletter as quickly as possible, so please get in touch if interested!"];

$('#answers #question1 button').on('click',function(){
	question_1 = $(this).text();
	console.log(question_1);
	if (question_1 === "Fun") {
		random_1 = random1Fun[Math.floor(Math.random()*random1Fun.length)];
		var answer_1 ="Hello Craigslisters! Much to my dismay, I am moving out of my wonderful home for a new adventure. I'll be subletting it for the remainder of the lease and am looking for someone awesome to take my place." + random_1 + "Here's a bit more about the space:";
	} else if (question_1 === "Serious"){
		random_1 = random1Serious[Math.floor(Math.random()*random1Serious.length)];
		var answer_1 = "I am moving and am looking for a subletter to take over my room for the remainder of our lease." + random_1 + " Here is a bit more information about the room:";
	} else if (question_1 === "Normal"){
		var answer_1 = "Hi there, I am putting my room up for sublet. Unfortunately, I have to move for personal reasons or else I'd definitely be staying. We're looking for a subletter to take over my lease and stay until the lease ends. After that, you can likely take over the lease." + random_1 + " A bit more info about the apartment:";
		random_1 = random1Normal[Math.floor(Math.random()*random1Normal.length)];	
	}
});

var answer_2to5;
var answer_2;
var answer_3;
var answer_4;
var answer_5;

$('#answers #question2 button').on('click',function(){
	answer_2 = $(this).text();
	console.log(answer_2);
});

$('#answers #question3 button').on('click',function(){
	answer_3 = $(this).text();
});


if (question_1 === "Fun") {
		answer_2to5 = "The room is in a wonderful " + answer_2 + " in the heart of" + answer_5 + ". You'll be sharing it with" + answer_3 + " other roommates, who are all awesome, like you (hopefully)! Total rent for the room is a cool" + answer_4 + " per month, which is honestly kind of a steal for a neighborhood/building this sweet.";
	} else if (question_1 === "Serious"){
		answer_2to5 = "The room is in a " + answer_2 + " in " + answer_5 + ". The unit has " + answer_3 + " total rooms, so you'll be sharing the place with" + answer_3 + " other roommates (duh). Total rent for the room is " + answer_4 + " per month.";
	} else if (question_1 === "Normal"){
		answer_2to5 = "My (your future) room is in a " + answer_2 + " in " + answer_5 + ". I have " + answer_3 + " other roommates, who you'll be sharing the place with. We pay " + answer_4 + " per month for rent.";
	};

$('#generatebutton').on('click',function(){
console.log(answer_1);
});

