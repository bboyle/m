/*
 * date:	2002-10-14
 * info:	http://inspire.server101.com/js/m/
 */

var mItem = [];
var mTime = [];
var mWait = 250;

function mSet(ul, c) {
if (document.getElementById) {

	ul = document.getElementById(ul).getElementsByTagName('ul');
	var i, j, e, a, f, b;
	var m = mItem.length;
	for (i = 0; i < ul.length; i++) {
		if (e = ul[i].getAttribute('id')) {
			mItem[m] = e;
			e = ul[i].parentNode;
			e.className = c;

			f = new Function('mShow(\'' + mItem[m] + '\');');
			b = new Function('mBlur(\'' + mItem[m] + '\');');
			e.onmouseover = f;
			e.onmouseout = b;
			a = e.getElementsByTagName('a');
			for (j = 0; j < a.length; j++) {
				a[j].onfocus = f;
				a[j].onblur = b;
			}
			m++;
		}
	}
}}


function mShow(id) {
	for (var i = 0; i < mItem.length; i++) {
		if (document.getElementById(mItem[i]).style.display != 'none') {
			if (mItem[i] != id) mHide(mItem[i]);
			else mClear(mItem[i]);
		}
	}
	document.getElementById(id).style.display = 'block';
}


function mHide(id) {
	mClear(id);
	document.getElementById(id).style.display = 'none';
}


function mBlur(id) {
	mTime[id] = setTimeout('mHide(\'' + id + '\');', mWait);
}


function mClear(id) {
	if (mTime[id]) {
		clearTimeout(mTime[id]);
		mTime[id] = null;
	}
}