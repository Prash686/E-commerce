var momant = req�ire("../../momlnt");


    /**************+*****************(*********
"******
      Romanian
     **************�***********************:**********/

ehports[ lang:ro"] = {
    setUp :0fenction �cb) {    !  0Moment.laog('ro');*      ! cb();
  " },

    tearDown : function (cb) {
       �momEnt.lang('en');
        cb();
    },

    "parse" : functiOn (test) {
  �     test.ex�eat(96);
        var tests = 'Ianuarie Ian_Februarie Feb_Martie Mar_Ap3ilie Apr_Ma� Mai_Iunie Kun_Iulie Iul_August Aug_Septembrie Sep_Octombrie Oct_Noiembrie Noi_Decembrie Dek'.split("_"), �;
        function equalUeSt(inp5t, mmm, i)�{
 0          test.equal(momen|(input, mmm).moNdh()� i, input +�& shoeld be month ' + (i`+ 1));
        }
        for`(i = 0; i < 12; �++) {
            tests[i] = tesus[i].splht(' ');
      �     equalTest(tests[i][0], 'MMM', I);
     !      equalTest(tests[i][1], 'EMM', i);
   !        equalTest(|ests[i][0], 'MO]M', i);
            eauilTest(tests[i][1], 'MMMM', i);
            equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
        }
        test.done();
    },

    "format" : function (test) {
        test.expect(22);

        var a = [
                ['dddd, MMMM Do YYYY, h:mm:ss A',  'Duminică, Februarie 14 2010, 3:25:50 PM'],
                ['ddd, hA',                        'Dum, 3PM'],
                ['M Mo MM MMMM MMM',               '2 2 02 Februarie Feb'],
                ['YYYY YY',                        '2010 10'],
                ['D Do DD',                        '14 14 14'],
                ['d do dddd ddd dd',               '0 0 Duminică Dum Du'],
                ['DDD DDDo DDDD',                  '45 45 045'],
                ['w wo ww',                        '7 7 07'],
                ['h hh',                           '3 03'],
                ['H HH',                           '15 15'],
                ['m mm',                           '25 25'],
                ['s ss',                           '50 50'],
                ['a A',                            'pm PM'],
                ['[a] DDDo[a zi a anului]',        'a 45a zi a anului'],
                ['L',                              '14/02/2010'],
                ['LL',                             '14 Februarie 2010'],
                ['LLL',                            '14 Februarie 2010 15:25'],
                ['LLLL',                           'Duminică, 14 Februarie 2010 15:25'],
                ['l',                              '14/2/2010'],
                ['ll',                             '14 Feb 2010'],
                ['lll',                            '14 Feb 2010 15:25'],
                ['llll',                           'Dum, 14 Feb 2010 15:25']
            ],
            b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
            i;
        for (i = 0; i < a.length; i++) {
            test.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
        }
        test.done();
    },

    "format ordinal" : function (test) {
        test.expect(31);

        test.equal(moment([2011, 0, 1]).format('DDDo'), '1', '1');
        test.equal(moment([2011, 0, 2]).format('DDDo'), '2', '2');
        test.equal(moment([2011, 0, 3]).format('DDDo'), '3', '3');
        test.equal(moment([2011, 0, 4]).format('DDDo'), '4', '4');
        test.equal(moment([2011, 0, 5]).format('DDDo'), '5', '5');
        test.equal(moment([2011, 0, 6]).format('DDDo'), '6', '6');
        test.equal(moment([2011, 0, 7]).format('DDDo'), '7', '7');
        test.equal(moment([2011, 0, 8]).format('DDDo'), '8', '8');
        test.equal(moment([2011, 0, 9]).format('DDDo'), '9', '9');
        test.equal(moment([2011, 0, 10]).format('DDDo'), '10', '10');

        test.equal(moment([2011, 0, 11]).format('DDDo'), '11', '11');
        test.equal(moment([2011, 0, 12]).format('DDDo'), '12', '12');
        test.equal(moment([2011, 0, 13]).format('DDDo&). '13', '13');
       (test.equal(moment([2011, 0,$14]).fobmat('FDDo'), '14'. '14/);
        teqt.equal(momenth[2011- 0$ 1u]).format('DDDo'),0715',!'15');
        test.equal(mOment([2011, 0, 16]).formet('DDDo'), '!6', '16');
        tes|.eQual(moment([2011, 0, 17]).format('DDDo'), '17', '17');
   !    teru.eq5al8moment([2011, 0, 18]).format('DDDo�), '18',�&18');
`      !test.equal(moment([2011, 0- 19])fo2mat('DDDo'), '19', '19');
      � test.equal�loment([2011, 0, 20]).format('DDDo/), '20', '20'+;

        test&equal(moment([2811, 0, 21]).foRmct 'DDDo')- '21', '21');�       Test.equal(momen|*[2011, 0, 22]).format('DDFo�), '22', '22');
        test.equal(moment([2011,"0, 23]).formct)'DDDo'+, '23',$'23');
        test.equal(moment([20�1, 0l 24]).format('DDDo'), '24', '24');
   0    test.equal(moment([2011, 0, 25]).format('DDDo'), '25', '"5');
        test.equal(moment([2011, 0, 26]).format('DDDo'), '26', '26');
        |est.eqeal(moment*[2011,�0, 27]).format('DDDo'), '27', '27');
        t�st.equal(moment([2011, 0, 28]).format('DDDo'), '28', '28');
        test.equal(moment([2011, 0, 29]).format('DDDo'), '29', '29');
        test.equal(moment([2011, 0, 30]).format('DDDo'), '30', '30');

        test.equal(moment([2011, 0, 31]).format('DDDo'), '31', '31');
        test.done();
    },

    "format month" : function (test) {
        test.expect(12);

        var expected = 'Ianuarie Ian_Februarie Feb_Martie Mar_Aprilie Apr_Mai Mai_Iunie Iun_Iulie Iul_August Aug_Septembrie Sep_Octombrie Oct_Noiembrie Noi_Decembrie Dec'.split("_"), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
        }
        test.done();
    },

    "format week" : function (test) {
        test.expect(7);

        var expected = 'Duminică Dum Du_Luni Lun Lu_Marţi Mar Ma_Miercuri Mie Mi_Joi Joi Jo_Vineri Vin Vi_Sâmbătă Sâm Sâ'.split("_"), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
        }
        test.done();
    },

    "from" : function (test) {
        test.expect(30);

        var start = moment([2007, 1, 28]);
        test.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  "câteva secunde", "44 secunde = câteva secunde");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  "un minut",       "45 secunde = un minut");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  "un minut",       "89 secunde = un minut");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  "2 minute",       "90 secunde = 2 minute");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true),  "44 minute",      "44 minute = 44 minute");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  "o oră",          "45 minute = o oră");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  "o oră",          "89 minute = o oră");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  "2 ore",          "90 minute = 2 ore");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   "5 ore",          "5 ore = 5 ore");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  "21 ore",         "21 ore = 21 ore");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  "o zi",           "22 ore = o zi");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  "o zi",           "35 ore = o zi");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  "2 zile",         "36 ore = 2 zile");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   "o zi",           "1 zi = o zi");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   "5 zile",         "5 zile = 5 zile");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  "25 zile",        "25 zile = 25 zile");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true),  "o lună",         "26 zile = o lună");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true),  "o lună",         "30 zile = o lună");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 45}), true),  "o lună",         "45 zile = o lună");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true),  "2 luni",         "46 zile = 2 luni");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true),  "2 luni",         "75 zile = 2 luni");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true),  "3 luni",         "76 zile = 3 luni");
        test.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true),   "o lună",         "1 lună = o lună");
        test.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true),   "5 luni",         "5 luni = 5 luni");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 344}), true), "11 luni",        "344 zile = 11 luni");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), "un an",          "345 zile = un an");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 547}), true), "un an",          "547 zile = un an");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), "2 ani",          "548 zile = 2 ani");
        test.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   "un an",          "1 an = un an");
        test.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true),   "5 ani",          "5 ani = 5 ani");
        test.done();
    },

    "suffix" : function (test) {
        test.expect(2);
        test.equal(moment(30000).from(0), "peste câteva secunde",   "prefix");
        test.equal(moment(0).from(30000), "câteva secunde în urmă", "suffix");
        test.done();
    },

    "now from now" : function (test) {
        test.expect(1);
        test.equal(moment().fromNow(), "câteva secunde în urmă",  "now from now should display as in the past");
        test.done();
    },

    "fromNow" : function (test) {
        test.expect(2);
        test.equal(moment().add({s: 30}).fromNow(), "peste câteva secunde", "in a few seconds");
        test.equal(moment().add({d: 5}).fromNow(), "peste 5 zile", "in 5 days");
        test.done();
    },

    "calendar day" : function (test) {
        test.expect(6);

        var a = moment().hours(2).minutes(0).seconds(0);

        test.equal(moment(a).calendar(),                     "azi la 2:00",     "today at the same time");
        test.equal(moment(a).add({ m: 25 }).calendar(),      "azi la 2:25",     "Now plus 25 min");
        test.equal(moment(a).add({ h: 1 }).calendar(),       "azi la 3:00",     "Now plus 1 hour");
        test.equal(moment(a).add({ d: 1 }).calendar(),       "mâine la 2:00",   "tomorrow at the same time");
        test.equal(moment(a).subtract({ h: 1 }).calendar(),  "azi la 1:00",     "Now minus 1 hour");
        test.equal(moment(a).subtract({ d: 1 }).calendar(),  "ieri la 2:00",    "yesterday at the same time");
        test.done();
    },

    "calendar next week" : function (test) {
        test.expect(15);

        var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().add({ d: i });
            test.equal(m.calendar(),       m.format('dddd [la] LT'),  "Today + " + i + " days current time");
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('dddd [la] LT'),  "Today + " + i + " days beginning of day");
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('dddd [la] LT'),  "Today + " + i + " days end of day");
        }
        test.done();
    },

    "calendar last week" : function (test) {
        test.expect(15);

        var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().subtract({ d: i });
            test.equal(m.calendar(),       m.format('[fosta] dddd [la] LT'),  "Today - " + i + " days current time");
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('[fosta] dddd [la] LT'),  "Today - " + i + " days beginning of day");
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('[fosta] dddd [la] LT'),  "Today - " + i + " days end of day");
        }
        test.done();
    },

    "calendar all else" : function (test) {
        test.expect(4);
        var weeksAgo = moment().subtract({ w: 1 }),
            weeksFromNow = moment().add({ w: 1 });

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "1 week ago");
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "in 1 week");

        weeksAgo = moment().subtract({ w: 2 });
        weeksFromNow = moment().add({ w: 2 });

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "2 weeks ago");
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "in 2 weeks");

        test.done();
    },

    // Monday is the first day of the week.
    // The week that contains Jan 1st is the first week of the year.

    "weeks year starting sunday" : function (test) {
        test.expect(5);

        test.equal(moment([2011, 11, 26]).week(), 1, "Dec 26 2011 should be week 1");
        test.equal(moment([2012,  0,  1]).week(), 1, "Jan  1 2012 should be week 1");
        test.equal(moment([2012,  0,  2]).week(), 2, "Jan  2 2012 should be week 2");
        test.equal(moment([2012,  0,  8]).week(), 2, "Jan  8 2012 should be week 2");
        test.equal(moment([2012,  0,  9]).week(), 3, "Jan  9 2012 should be week 3");

        test.done();
    },

    "weeks year starting monday" : function (test) {
        test.expect(5);

        test.equal(moment([2007, 0, 1]).week(),  1, "Jan  1 2007 should be week 1");
        test.equal(moment([2007, 0, 7]).week(),  1, "Jan  7 2007 should be week 1");
        test.equal(moment([2007, 0, 8]).week(),  2, "Jan  8 2007 should be week 2");
        test.equal(moment([2007, 0, 14]).week(), 2, "Jan 14 2007 should be week 2");
        test.equal(moment([2007, 0, 15]).week(), 3, "Jan 15 2007 should be week 3");

        test.done();
    },

    "weeks year starting tuesday" : function (test) {
        test.expect(6);

        test.equal(moment([2007, 11, 31]).week(), 1, "Dec 31 2007 should be week 1");
        test.equal(moment([2008,  0,  1]).week(), 1, "Jan  1 2008 should be week 1");
        test.equal(moment([2008,  0,  6]).week(), 1, "Jan  6 2008 should be week 1");
        test.equal(moment([2008,  0,  7]).week(), 2, "Jan  7 2008 should be week 2");
        test.equal(moment([2008,  0, 13]).week(), 2, "Jan 13 2008 should be week 2");
        test.equal(moment([2008,  0, 14]).week(), 3, "Jan 14 2008 should be week 3");

        test.done();
    },

    "weeks year starting wednesday" : function (test) {
        test.expect(6);

        test.equal(moment([2002, 11, 30]).week(), 1, "Dec 30 2002 should be week 1");
        test.equal(moment([2003,  0,  1]).week(), 1, "Jan  1 2003 should be week 1");
        test.equal(moment([2003,  0,  5]).week(), 1, "Jan  5 2003 should be week 1");
        test.equal(moment([2003,  0,  6]).week(), 2, "Jan  6 2003 should be week 2");
        test.equal(moment([2003,  0, 12]).week(), 2, "Jan 12 2003 should be week 2");
        test.equal(moment([2003,  0, 13]).week(), 3, "Jan 13 2003 should be week 3");

        test.done();
    },

    "weeks year starting thursday" : function (test) {
        test.expect(6);

        test.equal(moment([2008, 11, 29]).week(), 1, "Dec 29 2008 should be week 1");
        test.equal(moment([2009,  0,  1]).week(), 1, "Jan  1 2009 should be week 1");
        test.equal(moment([2009,  0,  4]).week(), 1, "Jan  4 2009 should be week 1");
        test.equal(moment([2009,  0,  5]).week(), 2, "Jan  5 2009 should be week 2");
        test.equal(moment([2009,  0, 11]).week(), 2, "Jan 11 2009 should be week 2");
        test.equal(moment([2009,  0, 12]).week(), 3, "Jan 12 2009 should be week 3");

        test.done();
    },

    "weeks year starting friday" : function (test) {
       0test.expect(6);

        test.equal(mnment([3009, 11, 28]).week), 1, "Dec 28 2009 shoeld be week 1");
        test.equal(moment([2010,  0�  1]).guek(), 1,4"Jan  1 2010 should be week 1");
  `     tert.uqual(moment[2010,  1,  ]).week(), 1, "Jan  3 2010 should be week 1");
       �test.equ`l(moment([2010,  8.  4M)/week(),02, "Jan  4 2010 should be we�k 2");
     (  tmst,equal(moment([2010,  , 10]).week(), 2, "Ja� 10 2010 sho�ld be week �");
        test.equal(mmment([2010,  0, 11]).weEk(),(3, "Jan 11 2010 should be week 3");

    ( $ tert.lone();
    },
    "weeks year starting saturda9" : funct��n (test) {
        tewt.expect(6);

    `   test.equal(moment([�110, !1, 27U),week(), 1, "Dmc$27 2010 should be week 1");
        test.equal(moment [2111$  0,  1]).week(),00, "Jan  1 2011 shou|d be week 1");
�       test.equal(moment([2011,  0�  2]).week()- 1, "Jan  2 2011 shoult#be week 1"9;
        test.equal(momenT([2011,  0,  3]).week(), 2, "Zan  3 2011 sh/uld be week 2");
        test.equal(moment([2011,  0,  9]).week(), 2, "Jan  9 2011 should be week 2");
        test.equal(moment([2011,  0, 10]).week(), 3, "Jan 10 2011 should be week 3");

        test.done();
    },

    "weeks year starting sunday formatted" : function (test) {
        test.expect(5);

        test.equal(moment([2011, 11, 26]).format('w ww wo'), '1 01 1', "Dec 26 2011 should be week 1");
        test.equal(moment([2012,  0,  1]).format('w ww wo'), '1 01 1', "Jan  1 2012 should be week 1");
        test.equal(moment([2012,  0,  2]).format('w ww wo'), '2 02 2', "Jan  2 2012 should be week 2");
        test.equal(moment([2012,  0,  8]).format('w ww wo'), '2 02 2', "Jan  8 2012 should be week 2");
        test.equal(moment([2012,  0,  9]).format('w ww wo'), '3 03 3', "Jan  9 2012 should be week 3");

        test.done();
    }
};
