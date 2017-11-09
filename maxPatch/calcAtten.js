/*
Written by Qingyang Xi, 2016
*/

inlets = 1;
outlets = 1;

var attenAtC4 = 0.99;
var out = attenAtC4;

if (jsarguments[1]) {
	attenAtC4 = jsarguments[1];
}

function msg_float(x) {
	var pow = x / 168.6;
	out = Math.pow(attenAtC4, pow);
	outlet(0, out);
}

function msg_int(x) {
	msg_float(x);
}

function setBaseAtten(x) {
	attenAtC4 = x;
}

function bang() {
	outlet(0, out);
}
	