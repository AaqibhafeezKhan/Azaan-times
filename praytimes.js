/* PrayTimes.js - Prayer Times Calculator (version 2.3)
 * Copyright (C) 2007-2011 PrayTimes.org
 * Licensed under GNU LGPL v3.0
 * Corrected and cleaned implementation
 */

function PrayTimes(method) {
    var co = this;

    var timeNames = {
        imsak:   'Imsak',
        fajr:    'Fajr',
        sunrise: 'Sunrise',
        dhuhr:   'Dhuhr',
        asr:     'Asr',
        sunset:  'Sunset',
        maghrib: 'Maghrib',
        isha:    'Isha',
        midnight:'Midnight'
    };

    var methods = {
        MWL: {
            name: 'Muslim World League',
            params: { fajr: 18, isha: 17 }
        },
        ISNA: {
            name: 'Islamic Society of North America',
            params: { fajr: 15, isha: 15 }
        },
        Egypt: {
            name: 'Egyptian General Authority',
            params: { fajr: 19.5, isha: 17.5 }
        },
        Makkah: {
            name: 'Umm al-Qura University, Makkah',
            params: { fajr: 18.5, isha: '90 min' }
        },
        Karachi: {
            name: 'University of Karachi',
            params: { fajr: 18, isha: 18 }
        },
        Tehran: {
            name: 'Institute of Geophysics, Tehran',
            params: { fajr: 17.5, isha: 14, maghrib: 4.5, midnight: 'Jafari' }
        },
        Jafari: {
            name: 'Shia Ithna-Ashari (Jafari)',
            params: { fajr: 16, isha: 14, maghrib: 4, midnight: 'Jafari' }
        }
    };

    var defParams = {
        maghrib: '0 min',
        midnight: 'Standard'
    };

    var calcMethod = methods[method] ? method : 'MWL';
    var setting = {};
    var offset = {};

    var numIterations = 1;
    var lat, lng, elv, timeZone, jDate;

    // Initialize settings from method
    function loadMethod(m) {
        for (var i in methods[m].params) {
            setting[i] = methods[m].params[i];
        }
        for (var i in defParams) {
            if (typeof setting[i] === 'undefined') {
                setting[i] = defParams[i];
            }
        }
    }

    loadMethod(calcMethod);

    for (var i in timeNames) {
        offset[i] = 0;
    }

    co.setMethod = function(m) {
        if (methods[m]) {
            calcMethod = m;
            setting = {};
            loadMethod(m);
        }
    };

    co.adjust = function(params) {
        for (var id in params) {
            setting[id] = params[id];
        }
    };

    co.tune = function(timeOffsets) {
        for (var i in timeOffsets) {
            offset[i] = timeOffsets[i];
        }
    };

    co.getMethod  = function() { return calcMethod; };
    co.getSetting = function() { return setting; };
    co.getOffsets = function() { return offset; };
    co.getDefaults= function() { return methods; };
    co.getMethods = function() { return methods; };

    // ---- Math helpers ----
    var DMath = {
        dtr: function(d) { return (d * Math.PI) / 180.0; },
        rtd: function(r) { return (r * 180.0) / Math.PI; },
        sin: function(d) { return Math.sin(this.dtr(d)); },
        cos: function(d) { return Math.cos(this.dtr(d)); },
        tan: function(d) { return Math.tan(this.dtr(d)); },
        arcsin: function(x) { return this.rtd(Math.asin(x)); },
        arccos: function(x) { return this.rtd(Math.acos(x)); },
        arctan: function(x) { return this.rtd(Math.atan(x)); },
        arccot: function(x) { return this.rtd(Math.atan(1.0 / x)); },
        arctan2: function(y, x) { return this.rtd(Math.atan2(y, x)); },
        fixAngle: function(a) { return this.fix(a, 360); },
        fixHour:  function(a) { return this.fix(a, 24); },
        fix: function(a, b) {
            a = a - b * Math.floor(a / b);
            return a < 0 ? a + b : a;
        },
        diff: function(a, b) { return this.fixHour(b - a); }
    };

    // ---- Main API ----
    co.getTimes = function(date, coords, timezone, dst, format) {
        lat      = 1 * coords[0];
        lng      = 1 * coords[1];
        elv      = coords[2] ? 1 * coords[2] : 0;
        timeZone = 1 * timezone + (dst ? 1 : 0);
        jDate    = julian(date[0], date[1], date[2]) - lng / (15 * 24);

        return computeTimes(format || '24h');
    };

    // ---- Calculation ----
    function computeTimes(format) {
        // Default seed times (in 24h float UTC-local)
        var times = {
            imsak:   5,
            fajr:    5,
            sunrise: 6,
            dhuhr:   12,
            asr:     13,
            sunset:  18,
            maghrib: 18,
            isha:    18,
            midnight:0
        };

        // Iterative computation
        for (var i = 0; i < numIterations; i++) {
            times = computePrayerTimes(times);
        }
        times = adjustTimes(times);
        times = tuneTimes(times);
        return modifyFormats(times, format);
    }

    function computePrayerTimes(times) {
        // Sun position for standard times
        times.imsak   = sunAngleTime(times.imsak,   setting.imsak  || setting.fajr - 10/60, true);
        times.fajr    = sunAngleTime(times.fajr,    setting.fajr,   true);
        times.sunrise = sunAngleTime(times.sunrise,  0.833,          true);
        times.dhuhr   = midDay(times.dhuhr);
        times.asr     = asrTime(setting.asrMethod || 1, times.asr);
        times.sunset  = sunAngleTime(times.sunset,   0.833,          false);
        times.maghrib = sunAngleTime(times.maghrib,  setting.maghrib || 0.833, false);
        times.isha    = sunAngleTime(times.isha,     setting.isha,   false);
        times.midnight= (setting.midnight === 'Jafari')
                        ? times.sunset + DMath.diff(times.sunset, times.fajr) / 2
                        : times.sunset + DMath.diff(times.sunset, times.sunrise) / 2;
        return times;
    }

    function adjustTimes(times) {
        for (var i in times) {
            times[i] += timeZone - lng / 15;
        }

        if (setting.highLats) {
            times = adjustHighLats(times);
        }

        // Fixed offsets from settings expressed as 'N min'
        if (typeof setting.imsak === 'string') {
            times.imsak = times.fajr - parseFloat(setting.imsak) / 60;
        }
        if (typeof setting.maghrib === 'string') {
            times.maghrib = times.sunset + parseFloat(setting.maghrib) / 60;
        }
        if (typeof setting.isha === 'string') {
            times.isha = times.maghrib + parseFloat(setting.isha) / 60;
        }
        times.dhuhr += (setting.dhuhr || 0) / 60;

        return times;
    }

    function tuneTimes(times) {
        for (var i in times) {
            times[i] += (offset[i] || 0) / 60;
        }
        return times;
    }

    function modifyFormats(times, format) {
        if (format === 'Float') return times;
        var res = {};
        for (var i in times) {
            res[i] = getFormattedTime(times[i], format);
        }
        return res;
    }

    function getFormattedTime(time, format) {
        if (isNaN(time)) return '-----';
        if (format === 'Float') return time;
        time = DMath.fixHour(time + 0.5 / 60); // round to nearest minute
        var hours   = Math.floor(time);
        var minutes = Math.floor((time - hours) * 60);
        var suffix  = '';
        if (format === '12h') {
            suffix = hours >= 12 ? ' PM' : ' AM';
            hours  = ((hours + 11) % 12) + 1;
        }
        var hrs  = (hours < 10 ? '0' : '') + hours;
        var mins = (minutes < 10 ? '0' : '') + minutes;
        return hrs + ':' + mins + suffix;
    }

    // ---- Astronomical helpers ----

    function midDay(time) {
        var eqt = sunPosition(jDate + time).eqt;
        return DMath.fixHour(12 - eqt);
    }

    function sunAngleTime(time, angle, ccw) {
        // angle=0 means rise/set (0.833 deg standard refraction)
        var decl = sunPosition(jDate + time).dec;
        var numAngle = typeof angle === 'string' ? parseFloat(angle) : angle;
        var cosVal = (-DMath.sin(numAngle) - DMath.sin(decl) * DMath.sin(lat)) /
                     (DMath.cos(decl) * DMath.cos(lat));
        // clamp to avoid NaN from acos out of domain
        cosVal = Math.max(-1, Math.min(1, cosVal));
        var t = DMath.arccos(cosVal) / 15;
        return midDay(time) + (ccw ? -t : t);
    }

    function asrTime(factor, time) {
        var decl = sunPosition(jDate + time).dec;
        var angle = DMath.arccot(factor + DMath.tan(Math.abs(lat - decl)));
        return sunAngleTime(time, angle, false);
    }

    function sunPosition(jd) {
        var D = jd - 2451545.0;
        var g = DMath.fixAngle(357.529 + 0.98560028 * D);
        var q = DMath.fixAngle(280.459 + 0.98564736 * D);
        var L = DMath.fixAngle(q + 1.915 * DMath.sin(g) + 0.020 * DMath.sin(2 * g));
        var R = 1.00014 - 0.01671 * DMath.cos(g) - 0.00014 * DMath.cos(2 * g);
        var e = 23.439 - 0.00000036 * D;
        var RA = DMath.arctan2(DMath.cos(e) * DMath.sin(L), DMath.cos(L)) / 15;
        var eqt  = q / 15 - DMath.fixHour(RA);
        var decl = DMath.arcsin(DMath.sin(e) * DMath.sin(L));
        return { decl: decl, eqt: eqt };
    }

    function julian(year, month, day) {
        if (month <= 2) { year -= 1; month += 12; }
        var A = Math.floor(year / 100);
        var B = 2 - A + Math.floor(A / 4);
        return Math.floor(365.25 * (year + 4716)) +
               Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
    }

    // ---- High-latitude adjustments ----
    function adjustHighLats(times) {
        var nightTime = DMath.diff(times.sunset, times.sunrise);
        times.imsak   = adjustHLTime(times.imsak,   times.sunrise, parseFloat(setting.imsak  ) || 0, nightTime, true);
        times.fajr    = adjustHLTime(times.fajr,    times.sunrise, parseFloat(setting.fajr   ) || 0, nightTime, true);
        times.isha    = adjustHLTime(times.isha,     times.sunset,  parseFloat(setting.isha   ) || 0, nightTime, false);
        times.maghrib = adjustHLTime(times.maghrib,  times.sunset,  parseFloat(setting.maghrib) || 0, nightTime, false);
        return times;
    }

    function adjustHLTime(time, base, angle, night, ccw) {
        var portion  = nightPortion(angle, night);
        var timeDiff = ccw
            ? DMath.diff(time, base)
            : DMath.diff(base, time);
        if (isNaN(time) || timeDiff > portion) {
            time = base + (ccw ? -portion : portion);
        }
        return time;
    }

    function nightPortion(angle, night) {
        var method  = setting.highLats;
        var portion = 1 / 2.0; // default: NightMiddle
        if (method === 'AngleBased') portion = 1 / 60.0 * angle;
        if (method === 'OneSeventh') portion = 1 / 7.0;
        return portion * night;
    }
}
