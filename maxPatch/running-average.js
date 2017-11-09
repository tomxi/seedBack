/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
NAME: running-average
DESCRIPTION: Computes a running average of the input
AUTHORS: John MacCallum
COPYRIGHT_YEARS: 2006-7
SVN_REVISION: $LastChangedRevision: 618 $
VERSION 1.0: First release
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

inlets = 1;
outlets = 1;

var avg_length = jsarguments[1];
var avg_array = new Array();
var avg_sum = 0;

function msg_float(x){
	addNewValue(x);
	output_average();
}

function msg_int(x){
	addNewValue(x);
	output_average();
}

function addNewValue(x){
	var popped;
	if(avg_array.length == avg_length){
		popped = avg_array.pop();
		avg_sum = avg_sum - popped;
	}
		
	avg_array.unshift(x);
	avg_sum = avg_sum + x;
}

function length(i){
	avg_length = i;
}

function output_average(){
	outlet(0, avg_sum / avg_array.length);
}

function bang(){
	output_average();
}

function clear(){
	avg_array = null;
	avg_array = new Array();
	avg_sum = 0;
}

function length(l){
	clear();
	avg_length = l;
}

