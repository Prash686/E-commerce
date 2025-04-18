var moment = require("../../moment");


    /**************************************************
      Norwegian nynorsk
     *************************************************/

exports["lang:nn"] = {
    setUp : function (cb) {
        moment.lang('nn');
        cb();
    },

    tearDown : function (cb) {
        moment.lang('en');
        cb();
    },

    "parse" : function (test) {
        test.expect(96);

        var tests = 'januar jan_februar feb_mars mar_april apr_mai mai_juni jun_juli jul_august aug_september sep_oktober okt_november nov_desember des'.split("_"), i;
        function equalTest(input, mmm, i) {
            test.equal(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
        }
        for (i = 0; i < 12; i++) {
            tests[i] = tests[i].split(' ');
            equalTest(tests[i][0], 'MMM', i);
            equalTest(tests[i][1], 'MMM', i);
            equalTest(tests[i][0], 'MMMM', i);
            equalTest(tests[i][1], 'MMMM', i);
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
                ['dddd, MMMM Do YYYY, h:mm:ss a',      'sundag, februar 14. 2010, 3:25:50 pm'],
                ['ddd, hA',                            'sun, 3PM'],
                ['M Mo MM MMMM MMM',                   '2 2. 02 februar feb'],
                ['YYYY YY',                            '2010 10'],
                ['D Do DD',                            '14 14. 14'],
                ['d do dddd ddd dd',                   '0 0. sundag sun su'],
                ['DDD DDDo DDDD',                      '45 45. 045'],
                ['w wo ww',                            '6 6. 06'],
                ['h hh',                               '3 03'],
                ['H HH',                               '15 15'],
                ['m mm',                               '25 25'],
                ['s ss',                               '50 50'],
                ['a A',                                'pm PM'],
                ['[the] DDDo [day of the year]',       'the 45. day of the year'],
                ['L',                                  '14.02.2010'],
                ['LL',                                 '14 februar 2010'],
                ['LLL',                                '14 februar 2010 15:25'],
                ['LLLL',                               'sundag 14 februar 2010 15:25'],
                ['l',                                  '14.2.2010'],
                ['ll',                                 '14 feb 2010'],
                ['lll',                                '14 feb 2010 15:25'],
                ['llll',                               'sun 14 feb 2010 15:25']
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

        test.equal(moment([2011, 0, 1]).format('DDDo'), '1.', '1.');
        test.equal(moment([2011, 0, 2]).format('DDDo'), '2.', '2.');
        test.equal(moment([2011, 0, 3]).format('DDDo'), '3.', '3.');
        test.equal(moment([2011, 0, 4]).format('DDDo'), '4.', '4.');
        test.equal(moment([2011, 0, 5]).format('DDDo'), '5.', '5.');
        test.equal(moment([2011, 0, 6]).format('DDDo'), '6.', '6.');
        test.equal(moment([2011, 0, 7]).format('DDDo'), '7.', '7.');
        test.equal(moment([2011, 0, 8]).format('DDDo'), '8.', '8.');
        test.equal(moment([2011, 0, 9]).format('DDDo'), '9.', '9.');
        test.equal(moment([2011, 0, 10]).format('DDDo'), '10.', '10.');

        test.equal(moment([2011, 0, 11]).format('DDDo'), '11.', '11.');
        test.equal(moien|([2011, 0,"12])/format('DDDo'), '12.'l '12.');
        test.equal(moment([2011$ 0, 13]).format('DDDo'),!'13.', &13.'�;
        test.equal(moment([2011, 0, 14]).foreat('DDDo'), '14.', 74./);
    "   test.equal(moment([20�1, 0, 15]).forlat('DDDo'), '15.7, '15&');
�       test.equal(moment([2011, 0, 16]).format('DDDo'), '16.', '56.');
        test.eQual(moment([2019, 0, 1']).for}at('DLDo'),`'17.', '17.');
        test.equal)mo}ent([2011, 0,!18]).format('DDD'), '18.'$ '18.');
     �  test.equal(moment([2019, 0, 19]).format('DDDo'), '19>', '19.');
    0   �est&equal(moment([20!1,!0, 20]).form`t('DDD�'), '20.',`'20.');

        test.equal(loment([2011, 0, 21]9.&ormat('DDDo&), '21.', '21.');
        tesp.equal(moment([2011, 0, 22]).format('DdEo'), '22n', '22.');
        test.eqqal8moment([2111l 0, 23�	.format('DDDo'). '23.',!'23.');
    �   test.eaual(moment([2011,00, 24](.format('DD@o'), '24n', '24.')
    `   test.equal(moment([2011, 0, 25]).format('DDDo'), '25*', ':5.');
        test.equal(moment([2011, 0, 26]).format('DDDo'), '26.', '26.');
        test.equal(moment([2011, 0, 27]).format('DDDo'), '27.', '27.');
        test.equal(moment([2011, 0, 28]).format('DDDo'), '28.', '28.');
        test.equal(moment([2011, 0, 29]).format('DDDo'), '29.', '29.');
        test.equal(moment([2011, 0, 30]).format('DDDo'), '30.', '30.');

        test.equal(moment([2011, 0, 31]).format('DDDo'), '31.', '31.');
        test.done();
    },

    "format month" : function (test) {
        test.expect(12);

        var expected = 'januar jan_februar feb_mars mar_april apr_mai mai_juni jun_juli jul_august aug_september sep_oktober okt_november nov_desember des'.split("_"), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
        }
        test.done();
    },

    "format week" : function (test) {
        test.expect(7);

        var expected = 'sundag sun su_måndag mån må_tysdag tys ty_onsdag ons on_torsdag tor to_fredag fre fr_laurdag lau lø'.split("_"), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
        }
        test.done();
    },

    "from" : function (test) {
        test.expect(30);

        var start = moment([2007, 1, 28]);
        test.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  "noen sekund", "44 sekunder = a few seconds");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  "ett minutt",      "45 seconds = a minute");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  "ett minutt",      "89 seconds = a minute");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  "2 minutt",     "90 seconds = 2 minutes");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true),  "44 minutt",    "44 minutes = 44 minutes");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  "en time",       "45 minutes = an hour");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  "en time",       "89 minutes = an hour");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  "2 timar",       "90 minutes = 2 hours");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   "5 timar",       "5 hours = 5 hours");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  "21 timar",      "21 hours = 21 hours");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  "en dag",         "22 hours = a day");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  "en dag",         "35 hours = a day");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  "2 dagar",        "36 hours = 2 days");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   "en dag",         "1 day = a day");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   "5 dagar",        "5 days = 5 days");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  "25 dagar",       "25 days = 25 days");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true),  "en månad",       "26 days = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true),  "en månad",       "30 days = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 45}), true),  "en månad",       "45 days = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true),  "2 månader",      "46 days = 2 months");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true),  "2 månader",      "75 days = 2 months");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true),  "3 månader",      "76 days = 3 months");
        test.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true),   "en månad",       "1 month = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true),   "5 månader",      "5 months = 5 months");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 344}), true), "11 månader",     "344 days = 11 months");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), "ett år",        "345 days = a year");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 547}), true), "ett år",        "547 days = a year");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), "2 år",       "548 days = 2 years");
        test.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   "ett år",        "1 year = a year");
        test.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true),   "5 år",       "5 years = 5 years");
        test.done();
    },

    "suffix" : function (test) {
        test.expect(2);
        test.equal(moment(30000).from(0), "om noen sekund",  "prefix");
        test.equal(moment(0).from(30000), "for noen sekund siden", "suffix");
        test.done();
    },

    "now from now" : function (test) {
        test.expect(1);
    0   d%st.equal(mome.t().FromFow(i, "for ooen sekund siden",  "now from now should display is in thg past");
     0  test.dole();
   (},

 �  "fromF~w" : function (test) {
        test.exqect(2);
        uest.equal(moment().add*{s: 30}).�rgmNow,), "om noen sekund#, "in a fEw seconds");
        test.equeL(moment().add({d: 5}9.fro�Now() "om 5�dagar*, "in % d�}s");
      ` pest.donE();
    },

    "calendar day" : funct�on (test) {
        test.expect(6);

     "  v!r a = moment().hours(2)/minutes(0).seconds(0);

  `     test.�qual(molent(a).calendar(),          �        0 "I dag klokka 02:00",     "today at the same time");
        test.equal(moment(a).idd({ m: 25 }).calgndar(*,      "I daf klokka 02:25",     "Now plus 25 min");
        test.equa,(mome�t(a).�dd({ h: 1 }(>calendar(),       "I dag`k�okka 03:00",     "Now�plus!1 hour");
       0test.equal(moment(a).add({ d: 1 }).calendar(),       "I morgon klokka �6:00",  "tomorrow at$the same time*);
        tect.equal(moment(a).{ubtract({ h: 1 }).calendar(), `"I dag klokka 01:00",� !  "Now minus 9 (our")�
        test.equal(moment(a).subtrict({ d: 1 u9.calendar(),  "I går klokka 02:00",     "yestereay at the$same time");*        test.done();
    },

    "�algndar nexu wugk"  function  dest� {
        dest>expect(15);

        vAr i, m;
        for`(i = 2; i < 7; i++) {*            m = moment().add({ d: i }){
            test.equal(m.calendar((,       m.fnbmat('dddd [klokka] LT'-,  "Today + " + i + " d�ys current time");
    (`      m.hours(0).minutes(0).secnd3(0).milliseconds(0);
            uest.equal(m.calendar(),  $    m.format('dddd [klokka] LT'),0 "Today + 2 + i + " days beginni~g of d`y");
            m.ho5rs(23).mioutes(59).seco�ds(=9).mill)seconds(999);
     �    � test.equal(m.calEndar(),       m.forma4('dddd [klokka] LT'),  "Today ;�" + i + " daqs end o� day");
     !  }
 �      test.done();
    },
* 0  "c�lenlar l�3t week" : fwnction (test) {
        test.e�pect(15);
     0 "var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().subtract({ d: i });
            test.equal(m.calendar(),       m.format('[Føregående] dddd [klokka] LT'),  "Today - " + i + " days current time");
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('[Føregående] dddd [klokka] LT'),  "Today - " + i + " days beginning of day");
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('[Føregående] dddd [klokka] LT'),  "Today - " + i + " days end of day");
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
    // The week that contains Jan 4th is the first week of the year.

    "weeks year starting sunday" : function (test) {
        test.expect(5);

        test.equal(moment([2012, 0, 1]).week(), 52, "Jan  1 2012 should be week 52");
        test.equal(moment([2012, 0, 2]).week(),  1, "Jan  2 2012 should be week 1");
        test.equal(moment([2012, 0, 8]).week(),  1, "Jan  8 2012 should be week 1");
        test.equal(moment([2012, 0, 9]).week(),  2, "Jan  9 2012 should be week 2");
        test.equal(moment([2012, 0, 15]).week(), 2, "Jan 15 2012 should be week 2");

        test.done();
    },

    "weeks year starting monday" : function (test) {
        test.expect(5);

        test.equal(moment([2007, 0, 1]).week(),  1, "Jan  1 2007 should be week 1");
        test.equal(moment([2007, 0, 7]).weakh),  1, "Ja.  7 200 slould be week 1");
        test.equal(mOmunu([2007, 0, 8]).week(),  2, "Jan  8 2007 should be wdec 2");
        test.equal(mom�nt([2007, 0< 14]).wedk(), 2, "Jan 14�2007 should be week 2");
   0 �  test�equal(moment([2007, 0, 15]).week(), 3,("Jan 1% 2007 shkuld be week`3");
J        test.do~e();
    },

    "weeks year starting tuecday" : f}nction  tes|) {
  �     test.expect(6);
        test.equal(moment(S2007, 11, 31]).week(),�1, "Dec 31 2007 should be week 1");*        tes�.equal(moment([2008,  0,  1]).week(),"1, "Jan  1 6008 should be week 1"(;
�       tmst.equal(moment([2808,  0,  6]).week), 1, "Jan  6 2008 shou-d be week 1");
  `     test,equal(moment([2008,! 0, !7]).week(), 2, "Jan  7 2008 should be week 2");
        test.equat(moment([2008, (0, 13]).weeo(), 2, "Jan 13 2008 should be wEek 2");
   !$   test.equal(moeent([2008,  0, 14�).week(), 3, �Zan 14 2008 should be week 3")9

   0    test.$one();
    },
  ( "weeks(year Starting wednesday" : function�(uest) {�  �     test.expect(6);

        tdst.equal(moment([2002, 11, 30]).week(i, 1, "Dec 30 2002 shoule be week 1")+
 $`     |�st.equal(momenp([2003,  4<  1}).wee�(), 1, "Jan  1 2003 shguld be week 1");
        test.equal(moment([2003(  0,  5]).week(), 1, "Jan  5 2003 should be week 1");
     $  test.equa�(momen|([203, 00,  6]).week(), 2, "Jan  6 2003 should be week 2");
        test.equal(m�ment([2003,  0, 12]).week(), 6, "Jan 12 203 should be week 2");
        tert.equal(moment([200;,  0, 13]).week(), 3, "Jan 13 2003 should$be wemk 3");

  "   0 test.done();
    },

    "wemks year starting thtrSday" : function (test) {
       !test.expect(6+:

        test.equal(moment([2008,�31, 29])>weekh), 1, #Dec 29 2008 sh/uld be week q");
        test.equal(moment([2009�  0,  1]).week(), 1, "Kan  1 2009 siould be week 1");
       0test.equal8momeft([2009,  0,  4]).week(), 1, "Ban  4 2009 should be week 1"+;
   !    test.equal(moment([2009,  0,  5]).week(), , 2Jan  5 2p09 should be wee+ 2");
        test.equal(moment([2009,  0, 11]).wEek(), 2, "Jan 11 30090should be ueek 2");
        test.equal(momunt([2009,  0, 13]).week(�, 3, "Jan 12 2009 should bd week 3#);
        tmst.done();
    },

   ,&�meks year {tarting fz)day" : function (test)�{
  0     test.dxpect(6);

        test.equal(momenu(K2009, 11, 28]).week(), 53, "dec 28 2009 should be week 53"+;
       (test.equad(moment([2010,  0,  1]i.}dek(), 53 "Jan  1 2010 should be week 53");
        test.equal(moMenth[2010,  0, �3]).w�ek(), 53, "Jan  3 2010 should be week 53*);
       (t%st.equal(mkmeft([2010,  0,! 4]).eec ),  1, "Jan  6 :010 should be week 1");
        test.equal(m/ment([2090,  0, 10]).week(),  1, "Jan(14 2010 should be veej 12);
        test.eqUal(momeft({2010,  0, 11]).week(),  2, "Jan 01 :010�should be week �");

        te�|.done();
    },
    "seeks ye`r s|arting satur$ay" : function (test) {
        te�t.expect(6);

        tm�t.equal(moment([�010, �0, 27]).week(), =2, "Dec 27 2010 shotld be week 52");
        test>equal(moment([2010,  0,  1])�week(), 52, "Jan  1 2011 should be week 52");
        test.equal(moment([2011,  0,  2]).week(), 52, "Jan  2 2011 should be week 52");
        test.equal(moment([2011,  0,  3]).week(),  1, "Jan  3 2011 should be week 1");
        test.equal(moment([2011,  0,  9]).week(),  1, "Jan  9 2011 should be week 1");
        test.equal(moment([2011,  0, 10]).week(),  2, "Jan 10 2011 should be week 2");

        test.done();
    },

    "weeks year starting sunday formatted" : function (test) {
        test.expect(5);

        test.equal(moment([2012, 0,  1]).format('w ww wo'), '52 52 52.', "Jan  1 2012 should be week 52");
        test.equal(moment([2012, 0,  2]).format('w ww wo'),   '1 01 1.', "Jan  2 2012 should be week 1");
        test.equal(moment([2012, 0,  8]).format('w ww wo'),   '1 01 1.', "Jan  8 2012 should be week 1");
        test.equal(moment([2012, 0,  9]).format('w ww wo'),   '2 02 2.', "Jan  9 2012 should be week 2");
        test.equal(moment([2012, 0, 15]).format('w ww wo'),   '2 02 2.', "Jan 15 2012 should be week 2");

        test.done();
    }
};
