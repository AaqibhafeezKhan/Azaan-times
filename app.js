'use strict';

const ASMAUL_HUSNA = [
    { number: 1, ar: 'الرحمن', en: 'Ar-Rahman', meaning: 'The Most Gracious', desc: 'The One who has plenty of mercy for the believers and the blasphemers in this world and especially for the believers in the hereafter.' },
    { number: 2, ar: 'الرحيم', en: 'Ar-Rahim', meaning: 'The Most Merciful', desc: 'The One who has plenty of mercy for the believers.' },
    { number: 3, ar: 'الملك', en: 'Al-Malik', meaning: 'The King', desc: 'The Sovereign Lord, the One with the complete Dominion.' },
    { number: 4, ar: 'القدوس', en: 'Al-Quddus', meaning: 'The Most Holy', desc: 'The One who is pure from any imperfection.' },
    { number: 5, ar: 'السلام', en: 'As-Salam', meaning: 'The Source of Peace', desc: 'The One who is free from every imperfection.' },
    { number: 6, ar: 'المؤمن', en: 'Al-Mumin', meaning: 'The Guardian of Faith', desc: 'The One who witnessed for Himself that no one is God but Him.' },
    { number: 7, ar: 'المهيمن', en: 'Al-Muhaymin', meaning: 'The Protector', desc: 'The One who witnesses the saying and deeds of His creatures.' },
    { number: 8, ar: 'العزيز', en: 'Al-Aziz', meaning: 'The Mighty', desc: 'The Strong, The Defeater who is not defeated.' },
    { number: 9, ar: 'الجبار', en: 'Al-Jabbar', meaning: 'The Compeller', desc: 'The One that nothing happens in His Dominion except that which He willed.' },
    { number: 10, ar: 'المتكبر', en: 'Al-Mutakabbir', meaning: 'The Majestic', desc: 'The One who is clear from the attributes of the creatures.' },
    { number: 11, ar: 'الخالق', en: 'Al-Khaliq', meaning: 'The Creator', desc: 'The One who brings everything from non-existence to existence.' },
    { number: 12, ar: 'البارئ', en: 'Al-Bari', meaning: 'The Evolver', desc: 'The Maker, the Creator who has the Power to turn the entities.' },
    { number: 13, ar: 'المصور', en: 'Al-Musawwir', meaning: 'The Fashioner', desc: 'The One who forms His creatures in different pictures.' },
    { number: 14, ar: 'الغفار', en: 'Al-Ghaffar', meaning: 'The Great Forgiver', desc: 'The One who forgives the sins of His slaves time and time again.' },
    { number: 15, ar: 'القهار', en: 'Al-Qahhar', meaning: 'The Subduer', desc: 'The Dominant, The One who has the perfect Power.' },
    { number: 16, ar: 'الوهاب', en: 'Al-Wahhab', meaning: 'The Bestower', desc: 'The One who is Generous in giving plenty without any return.' },
    { number: 17, ar: 'الرزاق', en: 'Ar-Razzaq', meaning: 'The Provider', desc: 'The Sustainer, The Provider.' },
    { number: 18, ar: 'الفتاح', en: 'Al-Fattah', meaning: 'The Opener', desc: 'The One who opens for His slaves the closed worldly matters.' },
    { number: 19, ar: 'العليم', en: 'Al-Alim', meaning: 'The All-Knowing', desc: 'The Knowledgeable; The One nothing is absent from His knowledge.' },
    { number: 20, ar: 'القابض', en: 'Al-Qabid', meaning: 'The Constrictor', desc: 'The One who constricts the sustenance.' },
    { number: 21, ar: 'الباسط', en: 'Al-Basit', meaning: 'The Expander', desc: 'The One who expands and widens.' },
    { number: 22, ar: 'الخافض', en: 'Al-Khafid', meaning: 'The Abaser', desc: 'The One who lowers whoever He willed by His Destruction.' },
    { number: 23, ar: 'الرافع', en: 'Ar-Rafi', meaning: 'The Exalter', desc: 'The One who raises whoever He willed by His Endowment.' },
    { number: 24, ar: 'المعز', en: 'Al-Muizz', meaning: 'The Honorer', desc: 'He gives esteem to whoever He willed.' },
    { number: 25, ar: 'المذل', en: 'Al-Mudhill', meaning: 'The Humiliator', desc: 'The One who degrades whoever He willed by His Destruction.' },
    { number: 26, ar: 'السميع', en: 'As-Sami', meaning: 'The All-Hearing', desc: 'The One who Hears all things that are heard.' },
    { number: 27, ar: 'البصير', en: 'Al-Basir', meaning: 'The All-Seeing', desc: 'The One who Sees all things that are seen.' },
    { number: 28, ar: 'الحكم', en: 'Al-Hakam', meaning: 'The Judge', desc: 'He is the Ruler and His judgment is His Word.' },
    { number: 29, ar: 'العدل', en: 'Al-Adl', meaning: 'The Just', desc: 'The One who is entitled to do what He does.' },
    { number: 30, ar: 'اللطيف', en: 'Al-Latif', meaning: 'The Subtle One', desc: 'The One who is kind to His slaves and endows upon them.' },
    { number: 31, ar: 'الخبير', en: 'Al-Khabir', meaning: 'The Aware', desc: 'The One who knows the truth of things.' },
    { number: 32, ar: 'الحليم', en: 'Al-Halim', meaning: 'The Forbearing', desc: 'The One who delays the punishment for those who deserve it.' },
    { number: 33, ar: 'العظيم', en: 'Al-Azim', meaning: 'The Magnificent', desc: 'The One who is clear from the attributes of the creatures.' },
    { number: 34, ar: 'الغفور', en: 'Al-Ghafur', meaning: 'The Forgiver', desc: 'The One who forgives a lot.' },
    { number: 35, ar: 'الشكور', en: 'Ash-Shakur', meaning: 'The Appreciative', desc: 'The One who gives rewards to those who do good.' },
    { number: 36, ar: 'العلي', en: 'Al-Ali', meaning: 'The Most High', desc: 'The One who is clear from the attributes of the creatures.' },
    { number: 37, ar: 'الكبير', en: 'Al-Kabir', meaning: 'The Most Great', desc: 'The One who is greater than everything in status.' },
    { number: 38, ar: 'الحفيظ', en: 'Al-Hafiz', meaning: 'The Preserver', desc: 'The One who protects whatever and whoever He willed.' },
    { number: 39, ar: 'المقيت', en: 'Al-Muqit', meaning: 'The Nourisher', desc: 'The One who has the Power to create the provisions.' },
    { number: 40, ar: 'الحسيب', en: 'Al-Hasib', meaning: 'The Reckoner', desc: 'The One who gives the satisfaction.' },
    { number: 41, ar: 'الجليل', en: 'Al-Jalil', meaning: 'The Sublime One', desc: 'The One who is attributed with greatness of Power.' },
    { number: 42, ar: 'الكريم', en: 'Al-Karim', meaning: 'The Generous', desc: 'The One who is clear from abjectness.' },
    { number: 43, ar: 'الرقيب', en: 'Ar-Raqib', meaning: 'The Watchful', desc: 'The One that nothing is absent from Him.' },
    { number: 44, ar: 'المجيب', en: 'Al-Mujib', meaning: 'The Responsive', desc: 'The One who answers the one in need if he asks Him.' },
    { number: 45, ar: 'الواسع', en: 'Al-Wasi', meaning: 'The All-Embracing', desc: 'The Knowledgeable; The One who embraces all things.' },
    { number: 46, ar: 'الحكيم', en: 'Al-Hakim', meaning: 'The Wise', desc: 'The One who is correct in His doings.' },
    { number: 47, ar: 'الودود', en: 'Al-Wadud', meaning: 'The Loving', desc: 'The One who loves His believing slaves.' },
    { number: 48, ar: 'المجيد', en: 'Al-Majid', meaning: 'The Glorious', desc: 'The One who is with perfect Power.' },
    { number: 49, ar: 'الباعث', en: 'Al-Baith', meaning: 'The Resurrector', desc: 'The One who resurrects His slaves after death.' },
    { number: 50, ar: 'الشهيد', en: 'Ash-Shahid', meaning: 'The Witness', desc: 'The One who nothing is absent from Him.' },
    { number: 51, ar: 'الحق', en: 'Al-Haqq', meaning: 'The Truth', desc: 'The One who truly exists.' },
    { number: 52, ar: 'الوكيل', en: 'Al-Wakil', meaning: 'The Trustee', desc: 'The One who gives the satisfaction.' },
    { number: 53, ar: 'القوي', en: 'Al-Qawiyy', meaning: 'The Strong', desc: 'The One with the complete Power.' },
    { number: 54, ar: 'المتين', en: 'Al-Matin', meaning: 'The Firm', desc: 'The One with extreme Power.' },
    { number: 55, ar: 'الولي', en: 'Al-Waliyy', meaning: 'The Protecting Friend', desc: 'The One who directs the matters of those whom He befriends.' },
    { number: 56, ar: 'الحميد', en: 'Al-Hamid', meaning: 'The Praiseworthy', desc: 'The One who is praised.' },
    { number: 57, ar: 'المحصي', en: 'Al-Muhsi', meaning: 'The Counter', desc: 'The One who the count of things are known to him.' },
    { number: 58, ar: 'المبدئ', en: 'Al-Mubdi', meaning: 'The Originator', desc: 'The One who started the human being.' },
    { number: 59, ar: 'المعيد', en: 'Al-Muid', meaning: 'The Restorer', desc: 'The One who brings back the creatures after death.' },
    { number: 60, ar: 'المحيي', en: 'Al-Muhyi', meaning: 'The Giver of Life', desc: 'The One who took out a living human from semen.' },
    { number: 61, ar: 'المميت', en: 'Al-Mumit', meaning: 'The Creator of Death', desc: 'The One who renders the living dead.' },
    { number: 62, ar: 'الحي', en: 'Al-Hayy', meaning: 'The Alive', desc: 'The One attributed with a life that is unlike our life.' },
    { number: 63, ar: 'القيوم', en: 'Al-Qayyum', meaning: 'The Self-Subsisting', desc: 'The One who remains and does not end.' },
    { number: 64, ar: 'الواجد', en: 'Al-Wajid', meaning: 'The Finder', desc: 'The One who finds whatever He wants in the time He desires.' },
    { number: 65, ar: 'الماجد', en: 'Al-Majid', meaning: 'The Noble', desc: 'The One who is Glorious.' },
    { number: 66, ar: 'الواحد', en: 'Al-Wahid', meaning: 'The Unique', desc: 'The One without a partner.' },
    { number: 67, ar: 'الأحد', en: 'Al-Ahad', meaning: 'The One', desc: 'The Only One.' },
    { number: 68, ar: 'الصمد', en: 'As-Samad', meaning: 'The Eternal', desc: 'The One who does not need anyone.' },
    { number: 69, ar: 'القادر', en: 'Al-Qadir', meaning: 'The Able', desc: 'The One attributed with Power.' },
    { number: 70, ar: 'المقتدر', en: 'Al-Muqtadir', meaning: 'The Powerful', desc: 'The One with the perfect Power.' },
    { number: 71, ar: 'المقدم', en: 'Al-Muqaddim', meaning: 'The Expediter', desc: 'The One who puts things in their right places.' },
    { number: 72, ar: 'المؤخر', en: 'Al-Muakhkhir', meaning: 'The Delayer', desc: 'The One who puts things in their right places.' },
    { number: 73, ar: 'الأول', en: 'Al-Awwal', meaning: 'The First', desc: 'The One whose Existence is without a beginning.' },
    { number: 74, ar: 'الآخر', en: 'Al-Akhir', meaning: 'The Last', desc: 'The One whose Existence is without an end.' },
    { number: 75, ar: 'الظاهر', en: 'Az-Zahir', meaning: 'The Manifest', desc: 'The One that nothing is above Him.' },
    { number: 76, ar: 'الباطن', en: 'Al-Batin', meaning: 'The Hidden', desc: 'The One that nothing is underneath Him.' },
    { number: 77, ar: 'الوالي', en: 'Al-Wali', meaning: 'The Governor', desc: 'The One who owns things and manages them.' },
    { number: 78, ar: 'المتعالي', en: 'Al-Mutaali', meaning: 'The Most Exalted', desc: 'The One who is clear from the attributes of the creation.' },
    { number: 79, ar: 'البر', en: 'Al-Barr', meaning: 'The Source of Goodness', desc: 'The One who is kind to His creatures.' },
    { number: 80, ar: 'التواب', en: 'At-Tawwab', meaning: 'The Acceptor of Repentance', desc: 'The One who grants repentance to whoever He willed.' },
    { number: 81, ar: 'المنتقم', en: 'Al-Muntaqim', meaning: 'The Avenger', desc: 'The One who punishes those who deserve punishment.' },
    { number: 82, ar: 'العفو', en: 'Al-Afuww', meaning: 'The Pardoner', desc: 'The One with wide forgiveness.' },
    { number: 83, ar: 'الرؤوف', en: 'Ar-Rauf', meaning: 'The Compassionate', desc: 'The One with extreme Mercy.' },
    { number: 84, ar: 'مالك الملك', en: 'Malik-ul-Mulk', meaning: 'The Owner of All Sovereignty', desc: 'The One who controls the Dominion.' },
    { number: 85, ar: 'ذو الجلال والإكرام', en: 'Dhu-l-Jalal wa-l-Ikram', meaning: 'The Lord of Majesty and Bounty', desc: 'The One who deserves to be Exalted.' },
    { number: 86, ar: 'المقسط', en: 'Al-Muqsit', meaning: 'The Equitable', desc: 'The One who is Just in His judgment.' },
    { number: 87, ar: 'الجامع', en: 'Al-Jami', meaning: 'The Gatherer', desc: 'The One who gathers the creatures on a day.' },
    { number: 88, ar: 'الغني', en: 'Al-Ghani', meaning: 'The Self-Sufficient', desc: 'The One who does not need the creation.' },
    { number: 89, ar: 'المغني', en: 'Al-Mughni', meaning: 'The Enricher', 'desc': 'The One who satisfies the necessities of the creatures.' },
    { number: 90, ar: 'المانع', en: 'Al-Mani', meaning: 'The Preventer', desc: 'The One who stops harm.' },
    { number: 91, ar: 'الضار', en: 'Ad-Darr', meaning: 'The Distresser', desc: 'The One who makes harm reach to whoever He willed.' },
    { number: 92, ar: 'النافع', en: 'An-Nafi', meaning: 'The Propitious', desc: 'The One who makes beneficence reach to whoever He willed.' },
    { number: 93, ar: 'النور', en: 'An-Nur', meaning: 'The Light', desc: 'The One who guides.' },
    { number: 94, ar: 'الهادي', en: 'Al-Hadi', meaning: 'The Guide', desc: 'The One whom with His Guidance His believers were guided.' },
    { number: 95, ar: 'البديع', en: 'Al-Badi', meaning: 'The Incomparable', desc: 'The One who created the creation without any similarity.' },
    { number: 96, ar: 'الباقي', en: 'Al-Baqi', meaning: 'The Everlasting', desc: 'The One that the state of non-existence is impossible for Him.' },
    { number: 97, ar: 'الوارث', en: 'Al-Warith', meaning: 'The Inheritor', desc: 'The One whose Existence remains.' },
    { number: 98, ar: 'الرشيد', en: 'Ar-Rashid', meaning: 'The Guide to the Right Path', desc: 'The One who guides.' },
    { number: 99, ar: 'الصبور', en: 'As-Sabur', meaning: 'The Patient', desc: 'The One who does not quickly punish the sinners.' }
];

const ISLAMIC_EVENTS = {
    1: { 1: 'Islamic New Year', 10: 'Ashura' },
    3: { 12: 'Mawlid' },
    7: { 27: 'Isra and Mi\'raj' },
    9: { 1: 'Ramadan Begins', 27: 'Laylat al-Qadr' },
    10: { 1: 'Eid al-Fitr' },
    12: { 8: 'Day of Arafah', 10: 'Eid al-Adha' }
};

const HijriCalendar = {
    ummAlQuraData: [
        28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931,
        28960, 28990, 29019, 29049, 29078, 29108, 29137, 29167, 29196, 29226, 29255, 29285,
        29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522, 29551, 29580, 29610, 29640,
        29669, 29699, 29729, 29759, 29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994,
        30023, 30053, 30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348,
        30377, 30406, 30436, 30465, 30495, 30525, 30554, 30584, 30613, 30643, 30672, 30702,
        30731, 30760, 30790, 30819, 30849, 30878, 30908, 30937, 30967, 30996, 31026, 31056,
        31085, 31115, 31144, 31173, 31203, 31232, 31262, 31291, 31321, 31350, 31380, 31409,
        31439, 31468, 31498, 31527, 31557, 31586, 31616, 31645, 31674, 31704, 31733, 31763,
        31792, 31822, 31852, 31881, 31911, 31940, 31970, 31999, 32028, 32058, 32087, 32117,
        32147, 32176, 32206, 32235, 32265, 32294, 32324, 32353, 32383, 32412, 32441, 32471,
        32500, 32530, 32559, 32589, 32618, 32648, 32678, 32707, 32737, 32766, 32796, 32825,
        32854, 32884, 32913, 32943, 32972, 33002, 33031, 33061, 33090, 33120, 33150, 33179,
        33209, 33238, 33268, 33297, 33327, 33356, 33385, 33415, 33444, 33474, 33503, 33533,
        33563, 33592, 33622, 33651, 33681, 33710, 33740, 33769, 33799, 33828, 33857, 33887,
        33916, 33946, 33975, 34005, 34034, 34064, 34093, 34123, 34152, 34182, 34212, 34241,
        34271, 34300, 34330, 34359, 34389, 34418, 34447, 34477, 34506, 34536, 34565, 34595,
        34625, 34654, 34684, 34713, 34743, 34772, 34802, 34831, 34860, 34890, 34919, 34949,
        34978, 35008, 35038, 35067, 35097, 35126, 35156, 35185, 35215, 35244, 35273, 35303,
        35332, 35362, 35391, 35421, 35451, 35480, 35510, 35539, 35569, 35598, 35628, 35657,
        35687, 35716, 35746, 35775, 35805, 35834, 35864, 35893, 35923, 35952, 35982, 36011,
        36041, 36070, 36100, 36129, 36159, 36188, 36218, 36247, 36277, 36306, 36336, 36365,
        36395, 36424, 36454, 36483, 36513, 36542, 36572, 36601, 36631, 36660, 36690, 36719,
        36749, 36778, 36808, 36837, 36867, 36896, 36926, 36955, 36985, 37014, 37044, 37073,
        37103, 37132, 37162, 37191, 37221, 37250, 37280, 37309, 37339, 37368, 37398, 37427,
        37457, 37487, 37516, 37546, 37575, 37605, 37634, 37664, 37693, 37723, 37752, 37782,
        37811, 37841, 37870, 37900, 37929, 37959, 37988, 38018, 38047, 38077, 38106, 38136,
        38165, 38195, 38225, 38254, 38284, 38313, 38343, 38372, 38402, 38431, 38461, 38490,
        38519, 38549, 38578, 38608, 38638, 38667, 38697, 38726, 38756, 38785, 38815, 38844,
        38874, 38903, 38933, 38963, 38992, 39022, 39051, 39081, 39110, 39140, 39169, 39199,
        39228, 39258, 39287, 39317, 39346, 39376, 39405, 39435, 39465, 39494, 39524, 39553,
        39583, 39612, 39642, 39671, 39701, 39730, 39760, 39789, 39819, 39849, 39878, 39908,
        39937, 39967, 39996, 40026, 40055, 40085, 40114, 40144, 40173, 40203, 40232, 40262,
        40291, 40321, 40351, 40380, 40410, 40439, 40469, 40498, 40528, 40557, 40587, 40616,
        40646, 40675, 40705, 40734, 40764, 40794, 40823, 40853, 40882, 40912, 40941, 40971,
        41000, 41030, 41059, 41089, 41118, 41148, 41177, 41207, 41236, 41266, 41296, 41325,
        41355, 41384, 41414, 41443, 41473, 41502, 41532, 41561, 41591, 41620, 41650, 41679,
        41709, 41738, 41768, 41798, 41827, 41857, 41886, 41916, 41945, 41975, 42004, 42034,
        42063, 42093, 42122, 42152, 42181, 42211, 42240, 42270, 42299, 42329, 42359, 42388,
        42418, 42447, 42477, 42506, 42536, 42565, 42595, 42624, 42654, 42683, 42713, 42742,
        42772, 42801, 42831, 42860, 42890, 42920, 42949, 42979, 43008, 43038, 43067, 43097,
        43126, 43156, 43185, 43215, 43244, 43274, 43303, 43333, 43363, 43392, 43422, 43451,
        43481, 43510, 43540, 43569, 43599, 43628, 43658, 43687, 43717, 43747, 43776, 43806,
        43835, 43865, 43894, 43924, 43953, 43983, 44012, 44042, 44072, 44101, 44131, 44160,
        44190, 44219, 44249, 44278, 44308, 44337, 44367, 44396, 44426, 44456, 44485, 44515
    ],

    gregorianToHijri(date) {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        
        let m = month + 1;
        let y = year;
        
        if (m < 3) {
            y -= 1;
            m += 12;
        }
        
        const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day - 1578645.5;
        
        let i = 0;
        for (i = 0; i < this.ummAlQuraData.length; i++) {
            if (this.ummAlQuraData[i] > jd) break;
        }
        
        const hijriYear = i + 1346;
        const monthStart = this.ummAlQuraData[i - 1] || this.ummAlQuraData[0];
        const hijriMonth = Math.floor((jd - monthStart) / 29.5) + 1;
        const hijriDay = Math.floor(jd - monthStart - (hijriMonth - 1) * 29.5) + 1;
        
        const monthNames = ['Muharram', 'Safar', 'Rabi\' al-Awwal', 'Rabi\' al-Thani', 'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'];
        const monthNamesAr = ['المحرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
        
        return {
            year: hijriYear,
            month: Math.min(Math.max(hijriMonth, 1), 12),
            day: Math.max(hijriDay, 1),
            monthName: monthNames[Math.min(Math.max(hijriMonth, 1), 12) - 1],
            monthNameAr: monthNamesAr[Math.min(Math.max(hijriMonth, 1), 12) - 1]
        };
    },

    getHijriDate(date) {
        return this.gregorianToHijri(date);
    },

    getMonthEvents(month) {
        return ISLAMIC_EVENTS[month] || {};
    }
};

const PrayerTimesModule = {
    prayTimes: null,
    currentTimes: {},
    countdownInterval: null,

    init() {
        this.prayTimes = new PrayTimes(SettingsModule.get('calcMethod') || 'MWL');
        this.updateSettings();
    },

    updateSettings() {
        const method = SettingsModule.get('calcMethod') || 'MWL';
        const madhab = SettingsModule.get('madhab') || 'Standard';
        
        this.prayTimes.setMethod(method);
        this.prayTimes.adjust({ asrMethod: madhab === 'Hanafi' ? 2 : 1 });
    },

    calculate() {
        const location = SettingsModule.get('location') || { lat: 21.3891, lng: 39.8579 };
        const date = new Date();
        const timeFormat = SettingsModule.get('timeFormat') === '24h' ? '24h' : '12h';
        
        const times = this.prayTimes.getTimes(
            [date.getFullYear(), date.getMonth() + 1, date.getDate()],
            [location.lat, location.lng],
            date.getTimezoneOffset() / -60,
            0,
            timeFormat
        );

        this.currentTimes = {
            fajr: { name: 'Fajr', nameAr: 'الفجر', time: times.fajr || '--:--' },
            sunrise: { name: 'Sunrise', nameAr: 'الشروق', time: times.sunrise || '--:--' },
            dhuhr: { name: 'Dhuhr', nameAr: 'الظهر', time: times.dhuhr || '--:--' },
            asr: { name: 'Asr', nameAr: 'العصر', time: times.asr || '--:--' },
            maghrib: { name: 'Maghrib', nameAr: 'المغرب', time: times.maghrib || '--:--' },
            isha: { name: 'Isha', nameAr: 'العشاء', time: times.isha || '--:--' }
        };

        this.render();
        this.updateNextPrayer();
    },

    render() {
        const container = document.getElementById('prayerTimesList');
        if (!container) return;

        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        
        let activePrayer = null;
        let minDiff = Infinity;

        Object.entries(this.currentTimes).forEach(([key, prayer]) => {
            const [h, m] = this.parseTime(prayer.time);
            const prayerMinutes = h * 60 + m;
            const diff = currentMinutes - prayerMinutes;
            
            if (diff >= 0 && diff < minDiff) {
                minDiff = diff;
                activePrayer = key;
            }
        });

        container.innerHTML = Object.entries(this.currentTimes).map(([key, prayer]) => {
            const isActive = key === activePrayer;
            const isPast = this.isPrayerPast(prayer.time);
            
            return `
                <div class="prayer-row flex items-center justify-between p-4 ${isActive ? 'active' : ''} ${isPast ? 'opacity-50' : ''}">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full ${isActive ? 'bg-emerald-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'} flex items-center justify-center">
                            <span class="text-xs font-bold">${prayer.name.substring(0, 2)}</span>
                        </div>
                        <div>
                            <p class="font-semibold text-gray-800 dark:text-white">${prayer.name}</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400 arabic">${prayer.nameAr}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="text-xl font-bold text-gray-800 dark:text-white">${prayer.time}</span>
                        <button class="notification-btn w-8 h-8 rounded-full ${SettingsModule.get(`notify_${key}`) === true ? 'bg-emerald-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'} flex items-center justify-center" data-prayer="${key}">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        container.querySelectorAll('.notification-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const prayer = btn.dataset.prayer;
                const current = SettingsModule.get(`notify_${prayer}`) || false;
                SettingsModule.set(`notify_${prayer}`, !current);
                this.render();
                
                if (!current && 'Notification' in window) {
                    Notification.requestPermission();
                }
            });
        });
    },

    parseTime(timeStr) {
        if (!timeStr) return [0, 0];
        const trimmed = timeStr.trim();
        const hasPeriod = trimmed.includes('AM') || trimmed.includes('PM');

        if (hasPeriod) {
            const [time, period] = trimmed.split(' ');
            let [h, m] = time.split(':').map(Number);
            if (period === 'PM' && h !== 12) h += 12;
            if (period === 'AM' && h === 12) h = 0;
            return [h, m || 0];
        } else {
            const [h, m] = trimmed.split(':').map(Number);
            return [h || 0, m || 0];
        }
    },

    isPrayerPast(timeStr) {
        const now = new Date();
        const [h, m] = this.parseTime(timeStr);
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const prayerMinutes = h * 60 + m;
        return currentMinutes > prayerMinutes + 30;
    },

    updateNextPrayer() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
        
        let nextPrayer = null;
        let nextTime = null;
        let minDiff = Infinity;
        
        Object.entries(this.currentTimes).forEach(([key, prayer]) => {
            const [h, m] = this.parseTime(prayer.time);
            const prayerMinutes = h * 60 + m;
            const diff = prayerMinutes - currentMinutes;
            
            if (diff > 0 && diff < minDiff) {
                minDiff = diff;
                nextPrayer = prayer;
            }
        });

        if (!nextPrayer) {
            nextPrayer = this.currentTimes.fajr;
            const [h, m] = this.parseTime(nextPrayer.time);
            minDiff = (24 * 60 - currentMinutes) + h * 60 + m;
        }

        document.getElementById('nextPrayerName').textContent = nextPrayer.name;
        document.getElementById('nextPrayerTime').textContent = nextPrayer.time;
        
        this.startCountdown(minDiff);
        this.scheduleNotification(nextPrayer, minDiff);
    },

    startCountdown(minutes) {
        if (this.countdownInterval) clearInterval(this.countdownInterval);
        
        let totalSeconds = Math.floor(minutes * 60);
        
        const updateDisplay = () => {
            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;
            
            const display = document.getElementById('countdown');
            if (display) {
                display.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            }
            
            totalSeconds--;
            if (totalSeconds < 0) {
                clearInterval(this.countdownInterval);
                this.calculate();
            }
        };
        
        updateDisplay();
        this.countdownInterval = setInterval(updateDisplay, 1000);
    },

    scheduleNotification(prayer, minutesUntil) {
        if (!SettingsModule.get('notifications')) return;
        if (!SettingsModule.get(`notify_${prayer.name.toLowerCase()}`)) return;
        
        const msUntil = minutesUntil * 60 * 1000;
        
        setTimeout(() => {
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification(`Time for ${prayer.name} prayer`, {
                    body: `${prayer.nameAr} - ${prayer.time}`,
                    icon: '/icons/icon-192.png',
                    badge: '/icons/icon-192.png'
                });
                
                if (SettingsModule.get('athan')) {
                    this.playAthan();
                }
            }
        }, msUntil);
    },

    playAthan() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 440;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 3);
        } catch (e) {
            console.log('Audio playback failed:', e);
        }
    }
};

const QiblaModule = {
    KAABA_LAT: 21.4225,
    KAABA_LNG: 39.8262,
    qiblaAngle: 0,
    deviceOrientationActive: false,

    calculate() {
        const location = SettingsModule.get('location') || { lat: 21.3891, lng: 39.8579 };
        
        const lat1 = location.lat * Math.PI / 180;
        const lat2 = this.KAABA_LAT * Math.PI / 180;
        const dLng = (this.KAABA_LNG - location.lng) * Math.PI / 180;
        
        const y = Math.sin(dLng) * Math.cos(lat2);
        const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
        
        let angle = Math.atan2(y, x) * 180 / Math.PI;
        angle = (angle + 360) % 360;
        
        this.qiblaAngle = angle;
        this.render();
    },

    render() {
        const degreeEl = document.getElementById('qiblaDegree');
        const directionEl = document.getElementById('qiblaDirection');
        const needle = document.getElementById('qiblaNeedle');
        const distanceEl = document.getElementById('distanceToMakkah');
        
        if (degreeEl) degreeEl.textContent = `${Math.round(this.qiblaAngle)}°`;
        if (directionEl) directionEl.textContent = this.getCardinalDirection(this.qiblaAngle);
        if (needle && !this.deviceOrientationActive) {
            needle.style.transform = `translate(-50%, -100%) rotate(${this.qiblaAngle}deg)`;
        }
        
        const location = SettingsModule.get('location') || { lat: 21.3891, lng: 39.8579 };
        const distance = this.calculateDistance(location.lat, location.lng, this.KAABA_LAT, this.KAABA_LNG);
        if (distanceEl) {
            distanceEl.textContent = `${Math.round(distance)} km (${Math.round(distance * 0.621371)} miles) to Makkah`;
        }
    },

    getCardinalDirection(degrees) {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(degrees / 22.5) % 16;
        return directions[index];
    },

    calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLng / 2) * Math.sin(dLng / 2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        
        return R * c;
    },

    enableDeviceOrientation() {
        const compassFace = document.getElementById('compassFace');
        const needle = document.getElementById('qiblaNeedle');
        const statusEl = document.getElementById('compassStatus');
        const instructionEl = document.getElementById('compassInstruction');
        
        if (typeof DeviceOrientationEvent !== 'undefined' && 
            typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(response => {
                    if (response === 'granted') {
                        this.startOrientationTracking(compassFace, needle, statusEl, instructionEl);
                    } else {
                        App.showToast('Compass permission denied');
                    }
                })
                .catch(console.error);
        } else {
            this.startOrientationTracking(compassFace, needle, statusEl, instructionEl);
        }
    },

    startOrientationTracking(compassFace, needle, statusEl, instructionEl) {
        window.addEventListener('deviceorientation', (event) => {
            let heading = event.alpha;
            
            if (event.webkitCompassHeading) {
                heading = event.webkitCompassHeading;
            }
            
            if (heading !== null) {
                this.deviceOrientationActive = true;
                
                if (compassFace) {
                    compassFace.style.transform = `rotate(${-heading}deg)`;
                }
                
                const relativeAngle = (this.qiblaAngle - heading + 360) % 360;
                if (needle) {
                    needle.style.transform = `translate(-50%, -100%) rotate(${relativeAngle}deg)`;
                }
                
                if (statusEl) statusEl.classList.remove('hidden');
                if (instructionEl) instructionEl.textContent = 'Rotate device until arrow points up';
            }
        });
        
        App.showToast('Compass active - rotate device');
    }
};

const TasbihModule = {
    count: 0,
    target: 33,
    currentDhikr: 'SubhanAllah',
    sessions: [],

    init() {
        this.sessions = JSON.parse(localStorage.getItem('islamicpwa_tasbih_sessions') || '[]');
        this.renderHistory();
    },

    increment() {
        this.count++;
        this.render();
        
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
        
        const btn = document.getElementById('tasbihBtn');
        if (btn) {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = '', 100);
        }
        
        if (this.count === this.target) {
            this.onTargetReached();
        }
    },

    onTargetReached() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 440;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            console.log('Audio failed:', e);
        }
        
        const btn = document.getElementById('tasbihBtn');
        if (btn) {
            btn.style.background = '#22c55e';
            setTimeout(() => {
                btn.style.background = '';
            }, 300);
        }
        
        if (navigator.vibrate) {
            navigator.vibrate([50, 50, 50]);
        }
        
        App.showToast('Target reached! Allahu Akbar!');
        
        this.saveSession();
    },

    saveSession() {
        const session = {
            date: new Date().toISOString(),
            dhikr: this.currentDhikr,
            count: this.count,
            target: this.target
        };
        
        this.sessions.unshift(session);
        if (this.sessions.length > 5) this.sessions.pop();
        
        localStorage.setItem('islamicpwa_tasbih_sessions', JSON.stringify(this.sessions));
        this.renderHistory();
    },

    reset() {
        if (this.count > 0) {
            if (this.count < this.target) {
                this.saveSession();
            }
        }
        
        this.count = 0;
        this.render();
    },

    setTarget(target) {
        this.target = target;
        this.render();
    },

    setDhikr(dhikr) {
        this.currentDhikr = dhikr;
        this.count = 0;
        this.render();
    },

    render() {
        const countEl = document.getElementById('tasbihCount');
        const targetEl = document.getElementById('tasbihTargetDisplay');
        
        if (countEl) countEl.textContent = this.count;
        if (targetEl) targetEl.textContent = this.target;
    },

    renderHistory() {
        const container = document.getElementById('tasbihHistory');
        if (!container) return;
        
        if (this.sessions.length === 0) {
            container.innerHTML = '<p class="text-sm text-gray-400 text-center py-4">No sessions yet</p>';
            return;
        }
        
        container.innerHTML = this.sessions.map(session => {
            const date = new Date(session.date);
            const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const completed = session.count >= session.target;
            
            return `
                <div class="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <div>
                        <p class="text-sm font-medium text-gray-800 dark:text-white">${session.dhikr}</p>
                        <p class="text-xs text-gray-500">${dateStr}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm font-bold ${completed ? 'text-emerald-600' : 'text-gray-600 dark:text-gray-400'}">${session.count}/${session.target}</p>
                        ${completed ? '<span class="text-xs text-emerald-500">Completed</span>' : ''}
                    </div>
                </div>
            `;
        }).join('');
    }
};

const CalendarModule = {
    currentDate: new Date(),
    displayedDate: new Date(),

    init() {
        this.render();
    },

    changeMonth(delta) {
        this.displayedDate.setMonth(this.displayedDate.getMonth() + delta);
        this.render();
    },

    render() {
        const year = this.displayedDate.getFullYear();
        const month = this.displayedDate.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();
        
        const monthYearEl = document.getElementById('calendarMonthYear');
        const hijriMonthEl = document.getElementById('calendarHijriMonth');
        
        if (monthYearEl) {
            monthYearEl.textContent = firstDay.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        }
        
        const midMonth = new Date(year, month, 15);
        const hijri = HijriCalendar.getHijriDate(midMonth);
        if (hijriMonthEl) {
            hijriMonthEl.textContent = `${hijri.monthNameAr} ${hijri.year} AH`;
        }
        
        const grid = document.getElementById('calendarGrid');
        if (!grid) return;
        
        let html = '';
        
        for (let i = 0; i < startingDay; i++) {
            html += '<div></div>';
        }
        
        const today = new Date();
        
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const hijriDate = HijriCalendar.getHijriDate(date);
            const isToday = date.toDateString() === today.toDateString();
            
            const events = HijriCalendar.getMonthEvents(hijriDate.month);
            const hasEvent = events[hijriDate.day];
            
            html += `
                <div class="calendar-day ${isToday ? 'today' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} ${hasEvent ? 'has-event' : ''} rounded-lg cursor-pointer p-1" data-date="${date.toISOString()}">
                    <span class="text-sm font-medium">${day}</span>
                    <span class="text-xs ${isToday ? 'text-emerald-100' : 'text-gray-400'}">${hijriDate.day}</span>
                </div>
            `;
        }
        
        grid.innerHTML = html;
        
        grid.querySelectorAll('.calendar-day').forEach(cell => {
            cell.addEventListener('click', () => {
                const date = new Date(cell.dataset.date);
                this.showDayDetails(date);
            });
        });
        
        this.renderEvents(hijri.month);
    },

    showDayDetails(date) {
        const hijri = HijriCalendar.getHijriDate(date);
        const events = HijriCalendar.getMonthEvents(hijri.month);
        const event = events[hijri.day];
        
        if (event) {
            App.showToast(`${hijri.day} ${hijri.monthName}: ${event}`);
        }
    },

    renderEvents(hijriMonth) {
        const container = document.getElementById('monthEvents');
        if (!container) return;
        
        const events = HijriCalendar.getMonthEvents(hijriMonth);
        
        if (Object.keys(events).length === 0) {
            container.innerHTML = '<p class="text-sm text-gray-400">No major events this month</p>';
            return;
        }
        
        container.innerHTML = Object.entries(events).map(([day, name]) => `
            <div class="flex items-center gap-3 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span class="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">${day}</span>
                <span class="text-sm font-medium">${name}</span>
            </div>
        `).join('');
    }
};

const NamesModule = {
    learnedNames: [],
    viewMode: 'grid',
    searchQuery: '',
    currentName: null,

    init() {
        this.learnedNames = JSON.parse(localStorage.getItem('islamicpwa_learned_names') || '[]');
        this.render();
        this.updateProgress();
    },

    render() {
        const container = document.getElementById('namesGrid');
        if (!container) return;
        
        const filtered = ASMAUL_HUSNA.filter(name => {
            const searchLower = this.searchQuery.toLowerCase();
            return name.en.toLowerCase().includes(searchLower) ||
                   name.meaning.toLowerCase().includes(searchLower) ||
                   name.ar.includes(searchQuery);
        });
        
        if (this.viewMode === 'grid') {
            container.className = 'grid grid-cols-3 gap-2 max-h-96 overflow-y-auto';
            container.innerHTML = filtered.map(name => {
                const isLearned = this.learnedNames.includes(name.number);
                return `
                    <div class="name-card p-3 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-lg cursor-pointer ${isLearned ? 'ring-2 ring-emerald-500' : ''}" data-number="${name.number}">
                        <p class="text-lg font-bold text-emerald-700 dark:text-emerald-400 arabic text-center">${name.ar}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">${name.en}</p>
                        ${isLearned ? '<span class="block text-center text-emerald-500 text-xs mt-1">Learned</span>' : ''}
                    </div>
                `;
            }).join('');
        } else {
            container.className = 'space-y-2 max-h-96 overflow-y-auto';
            container.innerHTML = filtered.map(name => {
                const isLearned = this.learnedNames.includes(name.number);
                return `
                    <div class="name-card flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer ${isLearned ? 'ring-2 ring-emerald-500' : ''}" data-number="${name.number}">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-400 rounded-full flex items-center justify-center text-sm font-bold">${name.number}</span>
                            <div>
                                <p class="font-bold text-emerald-700 dark:text-emerald-400 arabic">${name.ar}</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">${name.en} - ${name.meaning}</p>
                            </div>
                        </div>
                        ${isLearned ? '<span class="text-emerald-500 text-sm">Learned</span>' : ''}
                    </div>
                `;
            }).join('');
        }
        
        container.querySelectorAll('.name-card').forEach(card => {
            card.addEventListener('click', () => {
                const number = parseInt(card.dataset.number);
                this.showNameDetail(number);
            });
        });
    },

    showNameDetail(number) {
        const name = ASMAUL_HUSNA.find(n => n.number === number);
        if (!name) return;
        
        this.currentName = name;
        
        document.getElementById('modalNameNumber').textContent = `Name #${name.number} of 99`;
        document.getElementById('modalNameAr').textContent = name.ar;
        document.getElementById('modalNameEn').textContent = name.en;
        document.getElementById('modalNameMeaning').textContent = name.meaning;
        document.getElementById('modalNameDesc').textContent = name.desc;
        
        const btn = document.getElementById('markLearnedBtn');
        const isLearned = this.learnedNames.includes(number);
        btn.textContent = isLearned ? 'Mark as Not Learned' : 'Mark as Learned';
        btn.className = isLearned 
            ? 'bg-gray-500 text-white px-6 py-3 rounded-lg font-medium'
            : 'bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium';
        
        document.getElementById('nameModal').classList.add('active');
    },

    toggleLearned() {
        if (!this.currentName) return;
        
        const number = this.currentName.number;
        const index = this.learnedNames.indexOf(number);
        
        if (index > -1) {
            this.learnedNames.splice(index, 1);
        } else {
            this.learnedNames.push(number);
        }
        
        localStorage.setItem('islamicpwa_learned_names', JSON.stringify(this.learnedNames));
        
        this.updateProgress();
        this.render();
        this.showNameDetail(number);
        
        App.showToast(index > -1 ? 'Marked as not learned' : 'Marked as learned!');
    },

    updateProgress() {
        const progressEl = document.getElementById('namesProgress');
        const progressBar = document.getElementById('namesProgressBar');
        
        const learned = this.learnedNames.length;
        const percentage = (learned / 99) * 100;
        
        if (progressEl) progressEl.textContent = `${learned} / 99`;
        if (progressBar) progressBar.style.width = `${percentage}%`;
    },

    setViewMode(mode) {
        this.viewMode = mode;
        
        document.getElementById('namesGridView').className = mode === 'grid' 
            ? 'p-2 rounded-lg bg-emerald-500 text-white'
            : 'p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400';
        
        document.getElementById('namesListView').className = mode === 'list'
            ? 'p-2 rounded-lg bg-emerald-500 text-white'
            : 'p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400';
        
        this.render();
    },

    setSearch(query) {
        this.searchQuery = query;
        this.render();
    }
};

const SettingsModule = {
    defaults: {
        calcMethod: 'MWL',
        madhab: 'Standard',
        timeFormat: '24h',
        darkMode: 'auto',
        notifications: false,
        athan: false,
        location: { lat: 21.3891, lng: 39.8579, name: 'Makkah' },
        notify_fajr: false,
        notify_dhuhr: false,
        notify_asr: false,
        notify_maghrib: false,
        notify_isha: false
    },

    get(key) {
        const value = localStorage.getItem(`islamicpwa_${key}`);
        if (value === null) return this.defaults[key];
        
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    },

    set(key, value) {
        localStorage.setItem(`islamicpwa_${key}`, JSON.stringify(value));
    },

    init() {
        document.getElementById('settingMethod').value = this.get('calcMethod');
        document.querySelector(`input[name="madhab"][value="${this.get('madhab')}"]`).checked = true;
        document.getElementById('setting24h').checked = this.get('timeFormat') === '24h';
        document.getElementById('settingDarkMode').value = this.get('darkMode');
        document.getElementById('settingNotifications').checked = this.get('notifications');
        document.getElementById('settingAthan').checked = this.get('athan');
        
        this.updateLocationDisplay();
        
        document.getElementById('settingMethod').addEventListener('change', (e) => {
            this.set('calcMethod', e.target.value);
            PrayerTimesModule.updateSettings();
            PrayerTimesModule.calculate();
            App.showToast('Calculation method updated');
        });
        
        document.querySelectorAll('input[name="madhab"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.set('madhab', e.target.value);
                PrayerTimesModule.updateSettings();
                PrayerTimesModule.calculate();
                App.showToast('Madhab updated');
            });
        });
        
        document.getElementById('setting24h').addEventListener('change', (e) => {
            this.set('timeFormat', e.target.checked ? '24h' : '12h');
            PrayerTimesModule.calculate();
            App.showToast('Time format updated');
        });
        
        document.getElementById('settingDarkMode').addEventListener('change', (e) => {
            this.set('darkMode', e.target.value);
            ThemeModule.apply();
        });
        
        document.getElementById('settingNotifications').addEventListener('change', (e) => {
            this.set('notifications', e.target.checked);
            if (e.target.checked && 'Notification' in window) {
                Notification.requestPermission();
            }
        });
        
        document.getElementById('settingAthan').addEventListener('change', (e) => {
            this.set('athan', e.target.checked);
        });
        
        document.getElementById('detectLocationBtn').addEventListener('click', () => {
            LocationModule.detect();
        });
    },

    updateLocationDisplay() {
        const location = this.get('location');
        const display = document.getElementById('currentLocationDisplay');
        if (display && location) {
            display.textContent = `${location.name || 'Unknown'} (${location.lat.toFixed(2)}, ${location.lng.toFixed(2)})`;
        }
    }
};

const LocationModule = {
    detect() {
        if (!navigator.geolocation) {
            App.showToast('Geolocation not supported');
            this.showManualModal();
            return;
        }
        
        App.showToast('Detecting location...');
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                this.reverseGeocode(location.lat, location.lng);
            },
            (error) => {
                console.error('Geolocation error:', error);
                this.showManualModal();
            },
            { timeout: 10000, enableHighAccuracy: true }
        );
    },

    reverseGeocode(lat, lng) {
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
            .then(res => res.json())
            .then(data => {
                const city = data.address?.city || data.address?.town || data.address?.village || 'Unknown Location';
                const country = data.address?.country || '';
                const name = country ? `${city}, ${country}` : city;
                
                const location = { lat, lng, name };
                SettingsModule.set('location', location);
                SettingsModule.updateLocationDisplay();
                
                document.getElementById('cityName').textContent = city;
                
                PrayerTimesModule.calculate();
                QiblaModule.calculate();
                
                App.showToast(`Location set: ${city}`);
                document.getElementById('locationModal').classList.remove('active');
            })
            .catch(() => {
                const location = { lat, lng, name: `${lat.toFixed(2)}, ${lng.toFixed(2)}` };
                SettingsModule.set('location', location);
                SettingsModule.updateLocationDisplay();
                document.getElementById('cityName').textContent = location.name;
                
                PrayerTimesModule.calculate();
                QiblaModule.calculate();
                
                document.getElementById('locationModal').classList.remove('active');
            });
    },

    showManualModal() {
        document.getElementById('locationModal').classList.add('active');
    },

    saveManual() {
        const city = document.getElementById('manualCity').value || 'Custom Location';
        const lat = parseFloat(document.getElementById('manualLat').value);
        const lng = parseFloat(document.getElementById('manualLng').value);
        
        if (isNaN(lat) || isNaN(lng)) {
            App.showToast('Please enter valid coordinates');
            return;
        }
        
        const location = { lat, lng, name: city };
        SettingsModule.set('location', location);
        SettingsModule.updateLocationDisplay();
        
        document.getElementById('cityName').textContent = city;
        
        PrayerTimesModule.calculate();
        QiblaModule.calculate();
        
        document.getElementById('locationModal').classList.remove('active');
        App.showToast('Location saved');
    },

    useDefault() {
        const location = { lat: 21.3891, lng: 39.8579, name: 'Makkah' };
        SettingsModule.set('location', location);
        SettingsModule.updateLocationDisplay();
        
        document.getElementById('cityName').textContent = 'Makkah';
        document.getElementById('locationModal').classList.remove('active');
        
        PrayerTimesModule.calculate();
        QiblaModule.calculate();
        
        App.showToast('Location set to Makkah');
    }
};

const ThemeModule = {
    apply() {
        const mode = SettingsModule.get('darkMode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const isDark = mode === 'dark' || (mode === 'auto' && prefersDark);
        
        document.documentElement.classList.toggle('dark', isDark);
        
        const moonIcon = document.getElementById('moonIcon');
        const sunIcon = document.getElementById('sunIcon');
        
        if (moonIcon && sunIcon) {
            moonIcon.classList.toggle('hidden', isDark);
            sunIcon.classList.toggle('hidden', !isDark);
        }
    },

    toggle() {
        const current = SettingsModule.get('darkMode');
        const next = current === 'dark' ? 'light' : 'dark';
        SettingsModule.set('darkMode', next);
        this.apply();
    }
};

const App = {
    installPrompt: null,
    visitCount: parseInt(localStorage.getItem('islamicpwa_visits') || '0'),

    init() {
        this.visitCount++;
        localStorage.setItem('islamicpwa_visits', this.visitCount);
        
        ThemeModule.apply();
        
        PrayerTimesModule.init();
        TasbihModule.init();
        CalendarModule.init();
        NamesModule.init();
        SettingsModule.init();
        
        PrayerTimesModule.calculate();
        QiblaModule.calculate();
        
        this.setupEventListeners();
        
        this.setupServiceWorker();
        
        this.updateCurrentTime();
        setInterval(() => this.updateCurrentTime(), 1000);
        
        const location = SettingsModule.get('location');
        if (location && location.name && location.name !== 'Makkah') {
            document.getElementById('cityName').textContent = location.name;
        } else {
            LocationModule.detect();
        }
        
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            this.checkFirstVisit();
        }, 1000);
        
        if (this.visitCount >= 2) {
            setTimeout(() => this.showInstallPrompt(), 3000);
        }
    },

    setupEventListeners() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                this.switchTab(tab);
            });
        });
        
        document.getElementById('themeToggle').addEventListener('click', () => {
            ThemeModule.toggle();
        });
        
        document.getElementById('enableCompassBtn').addEventListener('click', () => {
            QiblaModule.enableDeviceOrientation();
        });
        
        document.getElementById('tasbihBtn').addEventListener('click', () => {
            TasbihModule.increment();
        });
        
        document.getElementById('resetTasbih').addEventListener('click', () => {
            TasbihModule.reset();
        });
        
        document.querySelectorAll('.tasbih-target').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = parseInt(btn.dataset.target);
                TasbihModule.setTarget(target);
                
                document.querySelectorAll('.tasbih-target').forEach(b => {
                    b.className = 'tasbih-target px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm font-medium';
                });
                btn.className = 'tasbih-target px-3 py-1 rounded-full bg-emerald-500 text-white text-sm font-medium';
            });
        });
        
        document.getElementById('customTarget').addEventListener('change', (e) => {
            const target = parseInt(e.target.value);
            if (target > 0) {
                TasbihModule.setTarget(target);
            }
        });
        
        document.getElementById('dhikrSelect').addEventListener('change', (e) => {
            if (e.target.value === 'Custom') {
                document.getElementById('customDhikr').classList.remove('hidden');
            } else {
                document.getElementById('customDhikr').classList.add('hidden');
                TasbihModule.setDhikr(e.target.value);
            }
        });
        
        document.getElementById('customDhikr').addEventListener('change', (e) => {
            TasbihModule.setDhikr(e.target.value);
        });
        
        document.getElementById('prevMonth').addEventListener('click', () => {
            CalendarModule.changeMonth(-1);
        });
        
        document.getElementById('nextMonth').addEventListener('click', () => {
            CalendarModule.changeMonth(1);
        });
        
        document.getElementById('namesGridView').addEventListener('click', () => {
            NamesModule.setViewMode('grid');
        });
        
        document.getElementById('namesListView').addEventListener('click', () => {
            NamesModule.setViewMode('list');
        });
        
        document.getElementById('namesSearch').addEventListener('input', (e) => {
            NamesModule.setSearch(e.target.value);
        });
        
        document.getElementById('markLearnedBtn').addEventListener('click', () => {
            NamesModule.toggleLearned();
        });
        
        document.getElementById('closeNameModal').addEventListener('click', () => {
            document.getElementById('nameModal').classList.remove('active');
        });
        
        document.getElementById('saveLocationBtn').addEventListener('click', () => {
            LocationModule.saveManual();
        });
        
        document.getElementById('useDefaultLocation').addEventListener('click', () => {
            LocationModule.useDefault();
        });
        
        document.getElementById('showTutorialBtn').addEventListener('click', () => {
            this.showTutorial();
        });
        
        document.getElementById('installBtn').addEventListener('click', () => {
            this.installApp();
        });
        
        document.getElementById('dismissInstall').addEventListener('click', () => {
            document.getElementById('installPrompt').style.display = 'none';
        });
        
        document.getElementById('closeTutorial').addEventListener('click', () => {
            document.getElementById('tutorialModal').classList.remove('active');
        });
        
        document.getElementById('tutorialGotIt').addEventListener('click', () => {
            document.getElementById('tutorialModal').classList.remove('active');
            localStorage.setItem('islamicpwa_tutorial_seen', 'true');
        });
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.installPrompt = e;
        });
        
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });
        
        let touchStartY = 0;
        const homeTab = document.getElementById('homeTab');
        
        homeTab.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        homeTab.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchEndY - touchStartY;
            
            if (diff > 100 && homeTab.scrollTop === 0) {
                this.showToast('Refreshing...');
                PrayerTimesModule.calculate();
            }
        }, { passive: true });
    },

    switchTab(tabName) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            const isActive = btn.dataset.tab === tabName;
            btn.classList.toggle('text-emerald-500', isActive);
            btn.classList.toggle('text-gray-400', !isActive);
            btn.classList.toggle('dark:text-gray-500', !isActive);
        });
        
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const activeTab = document.getElementById(`${tabName}Tab`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        if (tabName === 'calendar') {
            CalendarModule.render();
        } else if (tabName === 'qibla') {
            QiblaModule.calculate();
        }
    },

    updateCurrentTime() {
        const now = new Date();
        const timeFormat = SettingsModule.get('timeFormat');
        
        const timeStr = timeFormat === '24h'
            ? now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
            : now.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' });
        
        const display = document.getElementById('currentTimeDisplay');
        if (display) display.textContent = timeStr;
        
        const hijri = HijriCalendar.getHijriDate(now);
        const hijriEl = document.getElementById('hijriDateHeader');
        if (hijriEl) {
            hijriEl.textContent = `${hijri.day} ${hijri.monthNameAr} ${hijri.year} H`;
        }
        
        const gregorianEl = document.getElementById('gregorianDate');
        if (gregorianEl) {
            gregorianEl.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        }
    },

    showToast(message) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    },

    showInstallPrompt() {
        if (this.installPrompt && document.getElementById('installPrompt')) {
            document.getElementById('installPrompt').style.display = 'block';
        }
    },

    installApp() {
        if (this.installPrompt) {
            this.installPrompt.prompt();
            this.installPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    this.showToast('App installed!');
                }
                document.getElementById('installPrompt').style.display = 'none';
                this.installPrompt = null;
            });
        }
    },

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered:', registration);
                })
                .catch(error => {
                    console.log('SW registration failed:', error);
                });
        }
    },

    showTutorial() {
        document.getElementById('tutorialModal').classList.add('active');
    },

    checkFirstVisit() {
        const tutorialSeen = localStorage.getItem('islamicpwa_tutorial_seen');
        if (!tutorialSeen) {
            setTimeout(() => {
                this.showTutorial();
            }, 1500);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
