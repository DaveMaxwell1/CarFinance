$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

	//hide elements not required
	$("#first_cli_less_than_required_time").hide();
	$("#lease_info").hide();
	$("#business-application").hide();
	$("#consumer-application").hide();
	
	
	//display lease info if lease option selected
	$("#btn-lease").click(function() {
 		$("#lease_info").fadeIn();
	});

	$("#btn-hp").click(function() {
 		$("#lease_info").hide();
	});

	//display business screen info if option selected
	$("#btn-business").click(function() {
		$("#consumer-application").hide();
 		$("#business-application").fadeIn();
	});	

	//display consumer screen info if option selected
	$("#btn-consumer").click(function() {
		$("#business-application").hide();
 		$("#consumer-application").fadeIn();
	})	


	//numeric only text boxes:
	$("#payment_term").numeric();
	$("#payment_amount").numeric();
	$("#FIRST_CLI_YEARS_AT_ADDRESS").numeric();

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


}); // end document.ready