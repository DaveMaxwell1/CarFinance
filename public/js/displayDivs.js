$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

	//hide elements not required
	$("#first_cli_less_than_required_time").hide();
	$("#second_cli_less_than_required_time").hide();
	$("#lease_info").hide();
	$("#business-application").hide();
	$("#consumer-application").hide();
	$("#application").hide();
	$("#secondapplicant").hide();

	$("#first-account-details").hide();
	$("#first-repayments-no").hide();

	$("#second-account-details").hide();
	$("#second-repayments-no").hide();	

	
	//display lease info if lease option selected
	$("#btn-lease").click(function() {
 		$("#lease_info").fadeIn();
 		$("#application").fadeIn();
	});

	$("#btn-hp").click(function() {
 		$("#lease_info").hide();
 		$("#application").fadeIn();
	});

	//display business screen info if option selected
	$("#btn-business").click(function() {
		$("#consumer-application").hide();
		$("#first-applicant-address").hide();
 		$("#business-application").fadeIn();
 		$("#application").fadeIn();
		$("#business-address").fadeIn();

 		
	});	

	//display consumer screen info if option selected
	$("#btn-consumer").click(function() {
		$("#business-application").hide();
		$("#business-address").hide();
 		$("#consumer-application").fadeIn();
 		$("#first-applicant-address").fadeIn();
	})	

	$("#btn-sole").click(function() {
 		$("#application").fadeIn();
 		$("#secondapplicant").hide();
	})

	$("#btn-joint").click(function() {
 		$("#application").fadeIn();
 		$("#secondapplicant").fadeIn();
	})	


	//display first AIB account info
	$("#btn-first-yes").click(function() {
		$("#first-repayments-no").hide();
 		$("#first-account-details").fadeIn();
	})	
	$("#btn-first-no").click(function() {
 		$("#first-account-details").hide();
 		$("#first-repayments-no").fadeIn();
	})	

	$("#btn-first-repayments-no").click(function() {
		$("#first-repayments-no").fadeIn();
	})

	$("#btn-first-repayments-yes").click(function() {
		$("#first-repayments-no").hide();
	})


	//display second AIB account info
	$("#btn-second-yes").click(function() {
		$("#second-repayments-no").hide();
 		$("#second-account-details").fadeIn();
	})	
	$("#btn-second-no").click(function() {
 		$("#second-account-details").hide();
 		$("#second-repayments-no").fadeIn();
	})	

	$("#btn-second-repayments-no").click(function() {
		$("#second-repayments-no").fadeIn();
	})

	$("#btn-second-repayments-yes").click(function() {
		$("#second-repayments-no").hide();
	})

	//Update first applicants address
	$('#last_name').change(function() {
	var firstname = $("#first_name").val();
	var lastname = $("#last_name").val();

	if (firstname != ''  && lastname != '' ){
		$('div.first-applicant-address').html(firstname + ' ' + lastname + '\'s Address')
		$('div.first-applicant-account').html(firstname + ' ' + lastname + '\'s AIB Account Details')
		$('div.first-applicant-contact').html(firstname + ' ' + lastname + '\'s Contact Details')
	}	
	
	});


	//update second applicants address
	$('#SECOND_CLI_SURNAME').change(function() {
	var firstname = $("#SECOND_CLI_FIRST_NAME").val();
	var lastname = $("#SECOND_CLI_SURNAME").val();

	if (firstname != ''  && lastname != '' ){
		$('div.second-applicant-address').html(firstname + ' ' + lastname + '\'s Address')
		$('div.second-applicant-account').html(firstname + ' ' + lastname + '\'s AIB Account Details')
		$('div.second-applicant-contact').html(firstname + ' ' + lastname + '\'s Contact Details')
	}	
	
	});


	$('#secondary-address-same').click(function() {
	var address1 = $("#FIRST_CLI_ADDRESS_LINE_1").val();
	var address2 = $("#FIRST_CLI_ADDRESS_LINE_2").val();
	var address3 = $("#FIRST_CLI_ADDRESS_LINE_3").val();
	var address4 = $("#FIRST_CLI_ADDRESS_LINE_4").val();
	var address5 = $("#FIRST_CLI_ADDRESS_LINE_5").val();

	if (address1 == '' ){

			var firstname = $("#first_name").val();
			var lastname = $("#last_name").val();
			var name;

			if (firstname != '' && lastname != '' ){
				name = firstname + ' ' + lastname;
				alert('Please insert an address for ' + name);
			}
			else { 
				alert('Please insert an address above');
			}

		
	}

	if ( address1 != '' ) {
		$("#SECOND_CLI_ADDRESS_LINE_1").val(address1);
	}

	if ( address2 != '' ) {
		$("#SECOND_CLI_ADDRESS_LINE_2").val(address2);
	}

	if ( address3 != '' ) {
		$("#SECOND_CLI_ADDRESS_LINE_3").val(address3);
	}

	if ( address4 != '' ) {
		$("#SECOND_CLI_ADDRESS_LINE_4").val(address4);
	}

	if ( address5 != '' ) {
		$("#SECOND_CLI_ADDRESS_LINE_5").val(address5);
	}
	
	});
	



	//update 1st applicants name with business contact name
	$('#contact_name').change(function() {
	var str = $("#contact_name").val();

	if (str != '' ){
		var ret = str.split(" ");
		var str1 = ret[0];
		var str2 = ret[1];

		$("#first_name").val(str1);
		$("#last_name").val(str2);
	}	
	
	});


	//update 1st line of address with business name 
	$('#BUSINESS_NAME').change(function() {
	var str = $("#BUSINESS_NAME").val();

	if (str != '' ){

		$("#FIRST_CLI_ADDRESS_LINE_1").val(str2);
	}	
	
	});



	//numeric only text boxes:
	$("#payment_term").numeric();
	$("#payment_amount").numeric();
	$("#FIRST_CLI_YEARS_AT_ADDRESS").numeric();
	$("#SECOND_CLI_YEARS_AT_ADDRESS").numeric();

	$("#FIRST_CLI_HOME_PHONE_AREA").numeric();
	$("#FIRST_CLI_HOME_PHONE_NO").numeric();
	$("#FIRST_CLI_WORK_PHONE_AREA").numeric();	
	$("#FIRST_CLI_WORK_PHONE_NO").numeric();
	$("#FIRST_CLI_MOBILE_PHONE_NO").numeric();

	$("#sort_code").numeric();
	$("#account_number").numeric();

	$("#SECOND_CLI_HOME_PHONE_AREA").numeric();
	$("#SECOND_CLI_HOME_PHONE_NO").numeric();
	$("#SECOND_CLI_WORK_PHONE_AREA").numeric();	
	$("#SECOND_CLI_WORK_PHONE_NO").numeric();
	$("#SECOND_CLI_MOBILE_PHONE_NO").numeric();

	$("#SECOND_CLI_BANK_NSC").numeric();
	$("#SECOND_CLI_BANK_ACCOUNT_NUMBER").numeric();



	//years at address calculation - if years is < 3 ask for previous address

	$('#FIRST_CLI_YEARS_AT_ADDRESS').change(function() {
	FIRST_CLI_YEARS_AT_ADDRESS = $("#FIRST_CLI_YEARS_AT_ADDRESS").val();

	if (FIRST_CLI_YEARS_AT_ADDRESS != null && FIRST_CLI_YEARS_AT_ADDRESS < 3) {
		//display previous address form
		$("#first_cli_less_than_required_time").fadeIn();
	}
	else {
		$("#first_cli_less_than_required_time").hide();
	}
	});

	$('#SECOND_CLI_YEARS_AT_ADDRESS').change(function() {
	SECOND_CLI_YEARS_AT_ADDRESS = $("#SECOND_CLI_YEARS_AT_ADDRESS").val();

	if (SECOND_CLI_YEARS_AT_ADDRESS != null && SECOND_CLI_YEARS_AT_ADDRESS < 3) {
		//display previous address form
		$("#second_cli_less_than_required_time").fadeIn();
	}
	else {
		$("#second_cli_less_than_required_time").hide();
	}
	});

	//finance required calculation

	var financerequired, outstanding_finance_on_trade_in, deposit, trade_in, cash_price;

	$("#deposit").numeric();
	$("#trade_in").numeric();
	$("#cash_price").numeric();
	$("#outstanding_finance_on_trade_in").numeric();
	$("#finance_required").numeric();

	$('#deposit').change(function() {
	deposit = $("#deposit").val();

	if (trade_in != null && cash_price != null && outstanding_finance_on_trade_in != null) {
	financerequired = parseFloat(cash_price - trade_in - deposit) + parseFloat(outstanding_finance_on_trade_in);

	$("#finance_required").val(financerequired)

	}

	});

	$('#trade_in').change(function() {
	trade_in = $("#trade_in").val();

	if (deposit != null && cash_price != null && outstanding_finance_on_trade_in != null) {
	financerequired = parseFloat(cash_price - trade_in - deposit) + parseFloat(outstanding_finance_on_trade_in);

	$("#finance_required").val(financerequired)
	}

	});	

	$('#cash_price').change(function() {
	cash_price = $("#cash_price").val();

	if (deposit != null && trade_in != null && outstanding_finance_on_trade_in != null) {
	financerequired = parseFloat(cash_price - trade_in - deposit) + parseFloat(outstanding_finance_on_trade_in);

	$("#finance_required").val(financerequired)

	}


	});		

	$('#outstanding_finance_on_trade_in').change(function() {
	outstanding_finance_on_trade_in = $("#outstanding_finance_on_trade_in").val();

	if (deposit != null && trade_in != null && cash_price != null) {
	financerequired = parseFloat(cash_price - trade_in - deposit) + parseFloat(outstanding_finance_on_trade_in);

	$("#finance_required").val(financerequired)

	}


	});





	// form validation events
					$('#myForm').validate(
						 {
						  rules: {
						    first_name: {
						      minlength: 2,
						      required: true
						    },
						    last_name: {
						      minlength: 2,
						      required: true
						    },						    
						    email: {
						      required: true,
						      email: true
						    },
						    car_year: {
						      minlength: 2,
						      required: true,
						      number: true
						    },
						    deposit: {
						      minlength: 1,
						      required: true,
						      number: true
						    },
						    trade_in: {
						      minlength: 1,
						      required: true,
						      number: true
						    },
						    cash_price: {
						      minlength: 1,
						      required: true,
						      number: true
						    },
						    outstanding_finance_on_trade_in: {
						      minlength: 1,
						      required: true,
						      number: true
						    },						    						    						    						    
						    car_type: { 
					            required: {
					                depends: function(element) {
					                    return $("#type").val() == '';
					                }
					            }
						    }						    
						  },
						  highlight: function(element) {
						    $(element).closest('.control-group').removeClass('success').addClass('error');
						  },
						  success: function(element) {
						    element
						    .text('OK!').addClass('valid')
						    .closest('.control-group').removeClass('error').addClass('success');
						  },
						  messages: {
					        first_name: 'Please enter your first name e.g. David',
					        last_name: 'Please enter your surname e.g. Murphy',
					   	 }
					});



var data = [
		{"label":"Aragorn", "actor":"Viggo Mortensen"},
		{"label":"Arwen", "actor":"Liv Tyler"},
		{"label":"Bilbo Baggins", "actor":"Ian Holm"},
		{"label":"Boromir", "actor":"Sean Bean"},
		{"label":"Frodo Baggins", "actor":"Elijah Wood"},
		{"label":"Gandalf", "actor":"Ian McKellen"},
		{"label":"Gimli", "actor":"John Rhys-Davies"},
		{"label":"Gollum", "actor":"Andy Serkis"},
		{"label":"Legolas", "actor":"Orlando Bloom"},
		{"label":"Meriadoc Merry Brandybuck", "actor":"Dominic Monaghan"},
		{"label":"Peregrin Pippin Took", "actor":"Billy Boyd"},
		{"label":"Samwise Gamgee", "actor":"Sean Astin"}
		]


}); // end document.ready

