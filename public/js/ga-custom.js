// public/js/ga-custom.js

// ======================
// Google Analytics helpers
// ======================

window.SetGaUID = function (uid) {
    try {
        window.ga?.("www.set", "userId", uid);
        window.ga?.("www.send", "pageview");
        window.ga?.("testTracker.set", "userId", uid);
        window.ga?.("testTracker.send", "pageview");
    } catch (err) {
        console.warn("SetGaUID error:", err);
    }
};

window.PageTrack = function (key) {
    try {
        if (window.dataLayer) {
            window.dataLayer.push({ event: key });
        }
        window.ga?.("www.send", "pageview", key);
        window.ga?.("testTracker.send", "pageview", key);
    } catch (err) {
        console.warn("PageTrack error:", err);
    }
};

window.PageEvent = function (category, key) {
    try {
        window.ga?.("www.send", "event", category, key);
        window.ga?.("testTracker.send", "event", category, key);
    } catch (err) {
        console.warn("PageEvent error:", err);
    }
};

// ======================
// Encoding helpers
// ======================

function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, c =>
        "%" + c.charCodeAt(0).toString(16),
    );
}

function fixedDecodeURIComponent(str) {
    if (str == null) return null;
    try {
        return decodeURIComponent(str);
    } catch {
        console.warn("can't decode URI component");
        return null;
    }
}

function wrap(s) {
    return s == null ? null : `[${s}]`;
}

function conc(s1, s2) {
    return (s1 ?? "") + (s2 ?? "");
}

function concext(...args) {
    if (!args.length) return null;
    return args
        .filter(x => x != null)
        .map(x => wrap(x))
        .join("");
}

// ======================
// CookieParam class
// ======================

function CookieParam(name, value, expires) {
    this.name = name?.trim().toLowerCase() ?? "";
    this.value = value
        ? fixedDecodeURIComponent(value.trim().toLowerCase())
        : "";
    this.expires = expires || 0;
}

CookieParam.prototype.clone = function () {
    return new CookieParam(this.name, this.value, this.expires);
};

CookieParam.prototype.setTimeInSec = function () {
    const date = new Date();
    return date.setTime(date.getTime() + 90 * 24 * 3600 * 1000);
};

CookieParam.prototype.setTimeExpired = function () {
    return new Date(1970, 1, 1, 0, 0, 1).getTime();
};

CookieParam.prototype.toString = function () {
    const v =
        encodeURIComponent(this.value) +
        (this.expires
            ? ";expires=" + new Date(this.expires).toUTCString()
            : "");
    return this.name.trim() + "=" + v.trim();
};

CookieParam.prototype.toClear = function () {
    return (
        this.name.trim() +
        "=-;expires=" +
        new Date(1970, 1, 1, 0, 0, 1).toUTCString()
    );
};

// ======================
// CookieParamCollection class
// ======================

function CookieParamCollection(d) {
    this.items = [];
    if (d) {
        d.split(";").forEach(item => {
            const keys = item.split("=");
            if (keys && keys.length === 2) {
                this.items.push(new CookieParam(keys[0], keys[1], null));
            }
        });
    }
}

CookieParamCollection.prototype.Add = function (item) {
    const exists = this.Find(item.name);
    if (!exists) {
        this.items.push(item);
    } else {
        exists.value = item.value;
        exists.expires = item.expires;
    }
};

CookieParamCollection.prototype.Invalidate = function (...paramlst) {
    paramlst.forEach(name => {
        const c = this.Find(name);
        if (c) c.toClear();
    });
};

CookieParamCollection.prototype.Exists = function (...paramlst) {
    return paramlst.some(name => this.Find(name) != null);
};

CookieParamCollection.prototype.Find = function FindCookieParam(key) {
    return this.items?.find(i => i.name.localeCompare(key) === 0) ?? null;
};

CookieParamCollection.prototype.FindValue = function FindValueCookieParam(key) {
    return (
        this.items?.find(i => i.name.localeCompare(key) === 0)?.value ?? null
    );
};

CookieParamCollection.prototype.toString = function () {
    return (this.items || []).map(item => item.toString() + ";").join("");
};

CookieParamCollection.prototype.fillInCookies = function (d) {
    if (!d || !this.items) return;
    this.items.forEach(item => {
        if (["uc", "ua", "ul"].includes(item.name)) {
            d.cookie = item.toString();
        }
    });
};

// ======================
// Init evtobj
// ======================

(function (w, d, o) {
    const paramarray = d.location.search.replace("?", "").split("&");
    const obj = { domain: d.location.hostname, pathname: d.location.pathname };
    paramarray.forEach(item => {
        if (!item) return;
        const keys = item.split("=");
        if (keys && keys.length === 2) {
            obj[keys[0].trim().toLowerCase()] = fixedDecodeURIComponent(keys[1]);
        }
    });
    w[o] = obj;
    if (!w[o]) return;

    const cookies = new CookieParamCollection(d.cookie);
    const sec = new CookieParam().setTimeInSec();
    const exp = new CookieParam().setTimeExpired();
    let flg = false;

    if (w[o].u_category != null) {
        cookies.Add(new CookieParam("uc", w[o].u_category, sec));
        flg = true;
    } else {
        cookies.Add(new CookieParam("uc", "-", exp));
    }

    if (w[o].u_action != null) {
        cookies.Add(new CookieParam("ua", w[o].u_action, sec));
        flg = true;
    } else {
        cookies.Add(new CookieParam("ua", "-", exp));
    }

    if (w[o].u_label != null) {
        cookies.Add(new CookieParam("ul", w[o].u_label, sec));
        flg = true;
    } else {
        cookies.Add(new CookieParam("ul", "-", exp));
    }

    if (flg) cookies.fillInCookies(d);
})(window, document, "evtobj");

// ======================
// Event manager
// ======================

window.evtmng = function (o) {
    const cookies = new CookieParamCollection(document.cookie);
    let category, action, label;

    if (o.nodeName === "A" && window.evtobj) {
        category =
            wrap(window.evtobj.u_category) ||
            wrap(cookies.FindValue("uc")) ||
            wrap("downloads");
        action = concext(o.href, window.evtobj.u_action || cookies.FindValue("ua"));
        label = concext(
            window.evtobj.pathname,
            o.text === "" ? "img" : o.text,
            window.evtobj.u_label || cookies.FindValue("ul"),
        );
    } else if (window.evtobj) {
        category =
            wrap(window.evtobj.u_category) ||
            wrap(cookies.FindValue("uc")) ||
            wrap("downloads");
        action = wrap(window.evtobj.u_action) || wrap(cookies.FindValue("uc"));
        label = concext(
            window.evtobj.pathname,
            window.evtobj.u_label || cookies.FindValue("ul"),
        );
    }

    window.ga?.("ActionTracker.send", "event", category, action, label);
};
