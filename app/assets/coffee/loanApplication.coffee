$ ->
	$('#car_make').typeahead
		source: $cf.makes

	$('#financial_institution').typeahead
		source: $cf.financial_institutions

	$("#car_make").change ->

		make = $(this).val()
		models = $cf.makesModels[make]

		# Bit verbose
		$('#car_model').typeahead().data('typeahead').source = models