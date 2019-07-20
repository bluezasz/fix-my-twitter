// dont fuck with our cut, copy, and paste, twitter

function unFucker(e) {
	e.stopImmediatePropagation();
	return true;
}

document.addEventListener('copy', unFucker, true);
document.addEventListener('paste', unFucker, true);
document.addEventListener('cut', unFucker, true);