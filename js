// last updated 12/17/2015

function calculateRate () {
	var 	
		// amount column
		line1a = 1,
		line2a = 25,
		line3a = 2975,
		line4a = 1000,
		line5a = 0,
		line6a = 353,
		line7a = 0,
		line8a = 0,
		line10a = 452.82,
		line11a = 452.82,
		line12a = 452.82,
		line13a = 4353,
		line15a = $('#line14c').html(),
		line17a,
		//line15a = document.getElementById('#line14c').value,
		
		// rate column
		line1b = 19.00,
		line2b = 0.0,
		line3b = 0.109776,
		line4b = 0.103327,
		line5b = 0.089908,
		line6b = 0.011078,
		line7b = 0.008395,
		line8b = 0.007308,
		line10b = .109683,
		line11b = .094638,
		line12b = .021288,
		line13b = .032343,
		line15b = .029350,
		line17b = .07,
		
		// net column
		line1c, line2c, line3c, line4c, line5c, line6c, line7c, line8c, line9c, line10c, line11c, line12c, line13c, line14c, line15c, line16c, line17c, line18c,
		
		// get the sum of amount + rate and set to 2 decimals from the left
		line1 = (line1a * line1b).toFixed(2),
		line2 = (line2a * line2b).toFixed(2),
		line3 = (line3a * line3b).toFixed(2),
		line4 = (line4a * line4b).toFixed(2),
		line5 = (line5a * line5b).toFixed(2),
		line6 = (line6a * line6b).toFixed(2),
		line7 = (line7a * line7b).toFixed(2),
		line8 = (line8a * line8b).toFixed(2),
		line10 = (line10a * line10b).toFixed(2),
		line11 = (line11a * line11b).toFixed(2),
		line12 = (line12a * line12b).toFixed(2),
		line13 = (line13a * line13b).toFixed(2),
		line15 = (695.77 * line15b).toFixed(2),
		line17 = (716.19 * line17b).toFixed(2),
		
		billingDemand = document.getElementById('billingDemand').value,
		totalkWhusage = document.getElementById('totalkWhusage').value,
		baseRateSubTotal,
		eccrRate = line10b,
		nccrRate = line11b,
		dsmcRate = line12b,
		mffRate = line15,
		maxBucketkWh = billingDemand * 200,
		numOfBuckets = totalkWhusage / maxBucketkWh,
		eccr = (baseRateSubTotal * eccrRate).toFixed(2),
		nccr = (baseRateSubTotal * nccrRate).toFixed(2),
		dsmc = (baseRateSubTotal * dsmcRate).toFixed(2),
		mff = (baseRateSubTotal * mffRate).toFixed(2),
		taxValue = document.getElementById('salesTax').value,
		tax = (716.19 / taxValue).toFixed(2);
		//tax = (billingDemand * (salesTax * .01)),
		//var pct = (num*100).toFixed(1) + "%";
	console.log("Billing Demand = " + billingDemand);
	console.log("Max Bucket kWh = " + maxBucketkWh);
	console.log("Total kWh Usage = " + totalkWhusage);
	console.log("Number of Buckets = " + numOfBuckets);
	console.log("ECCR = " + eccrRate);
	console.log("NCCR = " + nccrRate);
	console.log("DSMC = " + dsmcRate);
	
	 //$('#line15a').html(line14c);
	
	line1 = line1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line1b').html(line1b);
		$('#line1c').html(line1);
	line2 = line2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line2a').html(line2a);
		$('#line2b').html(line2b);
		$('#line2c').html(line2);
	line3 = line3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line3a').html(line3a);
		$('#line3b').html(line3b);
		$('#line3c').html(line3);
	line4 = line4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line4a').html(line4a);
		$('#line4b').html(line4b);
		$('#line4c').html(line4);
	line5 = line5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line5a').html(line5a);
		$('#line5b').html(line5b);
		$('#line5c').html(line5);
	line6 = line6.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line6a').html(line6a);
		$('#line6b').html(line6b);
		$('#line6c').html(line6);
	line7 = line7.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line7a').html(line7a);
		$('#line7b').html(line7b);
		$('#line7c').html(line7);
	line8 = line8.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line8a').html(line8a);
		$('#line8b').html(line8b);
		$('#line8c').html(line8);
	line10 = line10.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line10a').html(line10a);
		$('#line10b').html(line10b);
		$('#line10c').html(line10);
	line11 = line11.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line11a').html(line11a);
		$('#line11b').html(line11b);
		$('#line11c').html(line11);
	line12 = line12.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line12a').html(line12a);
		$('#line12b').html(line12b);
		$('#line12c').html(line12);
	line13 = line13.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line13a').html(line13a);
		$('#line13b').html(line13b);
		$('#line13c').html(line13);
	line15 = line15.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line15a').html(line15a);
		$('#line15b').html(line15b);
		$('#line15c').html(line15);
	line17 = //line17.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('#line17a').html(line17a);
		$('#line17b').html(line17b);
		$('#line17c').html(line17);
	//var regularBillTotal = ((billingDemand / months) + tax).toFixed(2);
	//regularBillTotal = regularBillTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	//document.getElementById('regularBillTotal').innerHTML = "$"+regularBillTotal;

	// +num1 + +num2;
	var v_a1 = $('#line1c').html();
	var v_a2 = $('#line2c').html();
	var v_a3 = $('#line3c').html();
	var v_a4 = $('#line4c').html();
	var v_a5 = $('#line5c').html();
	var v_a6 = $('#line6c').html();
	var v_a7 = $('#line7c').html();
	var v_a8 = $('#line8c').html();
	var v_a9 = parseFloat(v_a1) + parseFloat(v_a2) + parseFloat(v_a3) + parseFloat(v_a4) + parseFloat(v_a5) + parseFloat(v_a6) + parseFloat(v_a7) + parseFloat(v_a8);
	//console.log(v_a9);
	
	var v_a10 = $('#line10c').html();
	var v_a11 = $('#line11c').html();
	var v_a12 = $('#line12c').html();
	var v_a13 = $('#line13c').html();
	var v_a14 = parseFloat(v_a10) + parseFloat(v_a11) + parseFloat(v_a12) + parseFloat(v_a13);
	//console.log(v_a14);
	
	var v_a15 = $('#line15c').html();
	var v_a16 = parseFloat(v_a14) + parseFloat(v_a15);

	var v_a17 = $('#line17c').html();
	var v_a18 = parseFloat(v_a16) + parseFloat(v_a17);	
	
	// run through the Net column and sum up subtotals and total
	function tally (selector) {
		$(selector).each(function () {
			var total = 0,
				//subtotal = 0,
				column = $(this).siblings(selector).andSelf().index(this);
			$(this).parents().prevUntil(':has(' + selector + ')').each(function () {
				total += parseFloat($('.sum:eq(' + column + ')', this).html()) || 0;
			})
			$(this).html(total);
			//console.log("Sub-Total = " + subtotal);
			console.log("Base Rate Sub-Total = " + total);
		});
	}
	tally('.subtotal');
	tally('.total');
}
