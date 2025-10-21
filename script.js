document.addEventListener('DOMContentLoaded', () => {
  // Student data array (shortened for brevity)
  const data = [
    { MAT: "252531643819", NAME: "ABBES", PNAME: "ABDEL MOUMENE", SECT: "13", GRP_TP: "B" },
    { MAT: "252531471101", NAME: "ABDELAZIZ", PNAME: "YOUCEF ISLEM", SECT: "13", GRP_TP: "C" },
    { MAT: "242431724503", NAME: "ABDELBAKI", PNAME: "Houssem abdelileh", SECT: "13", GRP_TP: "E" },
    { MAT: "252531724113", NAME: "ABDELHAFID", PNAME: "BADEREDDINE", SECT: "13", GRP_TP: "A" },
    { MAT: "222231311815", NAME: "ABDESSELAM", PNAME: "MOHAMED TAHAR ABDENASSEI", SECT: "13", GRP_TP: "D" },
    { MAT: "242431694710", NAME: "ABID", PNAME: "ILHEM", SECT: "13", GRP_TP: "E" },
    { MAT: "252531772105", NAME: "ABROUS", PNAME: "MARIA", SECT: "13", GRP_TP: "F" },
    { MAT: "252531806220", NAME: "AHMANI", PNAME: "RIAD", SECT: "13", GRP_TP: "D" },
    { MAT: "242431614504", NAME: "AICHEKADRA", PNAME: "BILLAL", SECT: "13", GRP_TP: "A" },
    { MAT: "252531619811", NAME: "AISSANI", PNAME: "IDRIS ANES ZAKARIA", SECT: "13", GRP_TP: "F" },
    { MAT: "232331090313", NAME: "AIT BELKACEM", PNAME: "ROMAISSA", SECT: "13", GRP_TP: "E" },
    { MAT: "242431403914", NAME: "AITECHE", PNAME: "MOHAMED", SECT: "13", GRP_TP: "B" },
    { MAT: "252531785609", NAME: "AKNINE", PNAME: "DORIA", SECT: "13", GRP_TP: "B" },
    { MAT: "242431723505", NAME: "ALJOUNAIDY", PNAME: "MAHMOUD", SECT: "13", GRP_TP: "F" },
    { MAT: "252531796405", NAME: "ALLAD", PNAME: "OUSSAMA", SECT: "13", GRP_TP: "D" },
    { MAT: "252531697915", NAME: "AMEUR", PNAME: "MADINA", SECT: "13", GRP_TP: "C" },
    { MAT: "252531637219", NAME: "AMOKRANE", PNAME: "MARIA", SECT: "13", GRP_TP: "D" },
    { MAT: "252531716119", NAME: "AMROUCH", PNAME: "MOHAMED IHEB", SECT: "13", GRP_TP: "E" },
    { MAT: "252531399707", NAME: "AMROUCHE", PNAME: "MOHAMED WASSIM", SECT: "13", GRP_TP: "F" },
    { MAT: "252531702502", NAME: "AMROUCHE", PNAME: "NAZYM", SECT: "13", GRP_TP: "D" },
    { MAT: "252531506703", NAME: "AOUAS", PNAME: "AMIR MOHAMED AKLI", SECT: "13", GRP_TP: "E" },
    { MAT: "252531687805", NAME: "AROUCHE", PNAME: "MOHAMED", SECT: "13", GRP_TP: "A" },
    { MAT: "242431664705", NAME: "ATROUZ", PNAME: "RYM SERINE", SECT: "13", GRP_TP: "E" },
    { MAT: "252531785418", NAME: "BACHA", PNAME: "BESMALA", SECT: "13", GRP_TP: "B" },
    { MAT: "242431359320", NAME: "BADAQUI", PNAME: "AYA", SECT: "13", GRP_TP: "C" },
    { MAT: "242531672816", NAME: "BAGHDADI", PNAME: "NERDIES", SECT: "13", GRP_TP: "F" },
    { MAT: "232331424920", NAME: "BAOUCHE", PNAME: "MOHAMED ABDERRAOUF", SECT: "13", GRP_TP: "D" },
    { MAT: "252531734916", NAME: "BAZIZ", PNAME: "NADA", SECT: "13", GRP_TP: "A" },
    { MAT: "242531672201", NAME: "BEB", PNAME: "MESSAOUD", SECT: "13", GRP_TP: "E" },
    { MAT: "222231648020", NAME: "BELALIAT", PNAME: "ABDERRAHMANE SIDALI", SECT: "13", GRP_TP: "F" },
    { MAT: "242431741920", NAME: "BELGUENBOUR", PNAME: "YOUNES", SECT: "13", GRP_TP: "D" },
    { MAT: "242431448309", NAME: "BELHOCINE", PNAME: "ABDERRAHMANE", SECT: "13", GRP_TP: "B" },
    { MAT: "242431802303", NAME: "BELHOCINE", PNAME: "WALID", SECT: "13", GRP_TP: "C" },
    { MAT: "252531699218", NAME: "BELKADI", PNAME: "YASMINE", SECT: "13", GRP_TP: "E" },
    { MAT: "242431369820", NAME: "BELKAHLA", PNAME: "YOUCEF ABDELDIALIL", SECT: "13", GRP_TP: "A" },
    { MAT: "252531492312", NAME: "BELKEBLA", PNAME: "ISSAM", SECT: "13", GRP_TP: "F" },
    { MAT: "242531568218", NAME: "BEN AGOUNE", PNAME: "ABIR", SECT: "13", GRP_TP: "C" },
    { MAT: "252531723909", NAME: "BENAZIB", PNAME: "IMENE", SECT: "13", GRP_TP: "A" },
    { MAT: "242431616201", NAME: "BENBESSI", PNAME: "SABER", SECT: "13", GRP_TP: "F" },
    { MAT: "252531612201", NAME: "BENCHEAAH", PNAME: "IMANE", SECT: "13", GRP_TP: "B" },
    { MAT: "252531794904", NAME: "BENCHEIKH", PNAME: "ABDELMALEK", SECT: "13", GRP_TP: "C" },
    { MAT: "252531439603", NAME: "BENGUEDDOUDI", PNAME: "AYA", SECT: "13", GRP_TP: "D" },
    { MAT: "252531506404", NAME: "BENHALLA", PNAME: "AMINE", SECT: "13", GRP_TP: "A" },
    { MAT: "242431565214", NAME: "BENKHELIFA", PNAME: "ABIR DAOUSSANE", SECT: "13", GRP_TP: "B" },
    { MAT: "242431786808", NAME: "BENMERADI", PNAME: "SELSABIL", SECT: "13", GRP_TP: "D" },
    { MAT: "252531595320", NAME: "BENOUMECHIARA", PNAME: "RAFIK ABDELHAMID", SECT: "13", GRP_TP: "B" },
    { MAT: "252531613720", NAME: "BENSAAD", PNAME: "CHEMS EDDINE", SECT: "13", GRP_TP: "E" },
    { MAT: "252533207311", NAME: "BENSENOUCI", PNAME: "ABD NACER", SECT: "13", GRP_TP: "C" },
    { MAT: "242431367916", NAME: "BENTALBI", PNAME: "AYMEN", SECT: "13", GRP_TP: "F" },
    { MAT: "242531885512", NAME: "BENYOUNES", PNAME: "ACHERAF", SECT: "13", GRP_TP: "A" },
  { MAT: "252531480703", NAME: "BENZAOUI", PNAME: "IMAD", SECT: "13", GRP_TP: "C" },
  { MAT: "242431564120", NAME: "BENZID", PNAME: "YOUNES", SECT: "13", GRP_TP: "A" },
  { MAT: "242431677806", NAME: "BENZIOUCHE", PNAME: "MOHAMED MAHDI", SECT: "13", GRP_TP: "B" },
  { MAT: "252531436201", NAME: "BERKANE", PNAME: "ADEM", SECT: "13", GRP_TP: "B" },
  { MAT: "242531890412", NAME: "BERKATI", PNAME: "ASMA", SECT: "13", GRP_TP: "C" },
  { MAT: "252531491807", NAME: "BESSAAD", PNAME: "SAMI", SECT: "13", GRP_TP: "C" },
  { MAT: "252531785413", NAME: "BIBI", PNAME: "IMANE", SECT: "13", GRP_TP: "D" },
  { MAT: "242431775505", NAME: "BOUAQUINA", PNAME: "HAROUNE", SECT: "13", GRP_TP: "A" },
  { MAT: "232331344210", NAME: "BOUBETRA", PNAME: "AYA", SECT: "13", GRP_TP: "E" },
  { MAT: "242431460713", NAME: "BOUBGAR", PNAME: "MOHAMED", SECT: "13", GRP_TP: "F" },
  { MAT: "242431403213", NAME: "BOUCHABOU", PNAME: "KHADDIA", SECT: "13", GRP_TP: "B" },
  { MAT: "252531440417", NAME: "BOUCHAMA", PNAME: "ABDELDJALIL", SECT: "13", GRP_TP: "A" },
  { MAT: "252531439215", NAME: "BOUCHENDOUKA", PNAME: "YASSER", SECT: "13", GRP_TP: "D" },
  { MAT: "252531480810", NAME: "BOUDELLAL", PNAME: "MOHAMED SOHEIB", SECT: "13", GRP_TP: "E" },
  { MAT: "232331378207", NAME: "BOUDIAF", PNAME: "OUALID", SECT: "13", GRP_TP: "F" },
  { MAT: "252531809405", NAME: "BOUDISSA", PNAME: "ZAKARIA", SECT: "13", GRP_TP: "C" },
  { MAT: "252531496001", NAME: "BOUGAL", PNAME: "MOUHAMED", SECT: "13", GRP_TP: "E" },
  { MAT: "252531763408", NAME: "BOUGUEDOURA", PNAME: "ABDEREZAK", SECT: "13", GRP_TP: "B" },
  { MAT: "252531381417", NAME: "BOUGUERRA", PNAME: "SABER ABDELDJALIL", SECT: "13", GRP_TP: "F" },
  { MAT: "252531686110", NAME: "BOUGUETTAYA", PNAME: "NASMA EL ZAHRA", SECT: "13", GRP_TP: "A" },
  { MAT: "222231473711", NAME: "BOUHAMADI", PNAME: "MERIEM CERINE", SECT: "13", GRP_TP: "D" },
  { MAT: "252531709214", NAME: "BOUKERSI", PNAME: "HIBA IMENE", SECT: "13", GRP_TP: "D" },
  { MAT: "252531640611", NAME: "BOUKHARI", PNAME: "ABDERAOUF", SECT: "13", GRP_TP: "C" },
  { MAT: "232431649906", NAME: "BOUKHERIS", PNAME: "ACHIK EDDINE", SECT: "13", GRP_TP: "A" },
  { MAT: "232331547420", NAME: "BOULAHIA", PNAME: "LOKMENE", SECT: "13", GRP_TP: "B" },
  { MAT: "242431756701", NAME: "BOULAHLIB", PNAME: "YAHIA", SECT: "13", GRP_TP: "C" },
  { MAT: "212431525817", NAME: "BOUMAOUGAFI", PNAME: "IDRISS", SECT: "13", GRP_TP: "B" },
  { MAT: "252531472118", NAME: "BOUMCHEDA", PNAME: "MOHAMED", SECT: "13", GRP_TP: "E" },
  { MAT: "252531381119", NAME: "BOUNAB", PNAME: "Rawal", SECT: "13", GRP_TP: "A" },
  { MAT: "252531406515", NAME: "BOURAS", PNAME: "LINA", SECT: "13", GRP_TP: "B" },
  { MAT: "232331771109", NAME: "BOURBIA", PNAME: "RIM", SECT: "13", GRP_TP: "F" },
  { MAT: "222231659210", NAME: "BOUTELDJA", PNAME: "NARIMANE", SECT: "13", GRP_TP: "E" },
  { MAT: "252531611520", NAME: "BRADAIA", PNAME: "ANIS", SECT: "13", GRP_TP: "C" },
  { MAT: "252531702211", NAME: "BRAHIMI", PNAME: "YACINE", SECT: "13", GRP_TP: "D" },
  { MAT: "252531815008", NAME: "BRAHIMI", PNAME: "MERIEM", SECT: "13", GRP_TP: "E" },
  { MAT: "252531885502", NAME: "CHANANE", PNAME: "OUSSAMA", SECT: "13", GRP_TP: "F" },
  { MAT: "242431432402", NAME: "CHAQUAD", PNAME: "MAHDI", SECT: "13", GRP_TP: "C" },
  { MAT: "252531506205", NAME: "CHAREF", PNAME: "NOUR EL ISLAM", SECT: "13", GRP_TP: "F" },
  { MAT: "222231472204", NAME: "CHEHRIT", PNAME: "RACIM", SECT: "13", GRP_TP: "D" },
  { MAT: "252531413102", NAME: "CHERATTIA", PNAME: "ABDERRAOUF", SECT: "13", GRP_TP: "D" },
  { MAT: "252531785908", NAME: "CHERF", PNAME: "SARAH", SECT: "13", GRP_TP: "E" },
  { MAT: "252531480818", NAME: "CHERRAD", PNAME: "MERIEM", SECT: "13", GRP_TP: "F" },
  { MAT: "252531698203", NAME: "CHIKH", PNAME: "MASSINISSA", SECT: "13", GRP_TP: "A" },
  { MAT: "242431425002", NAME: "CHIKHI", PNAME: "FAYCAL", SECT: "13", GRP_TP: "E" },
  { MAT: "242431412401", NAME: "DAHMANI", PNAME: "ABDELMOUNAIM", SECT: "13", GRP_TP: "F" },
  { MAT: "252531380719", NAME: "DAOUD", PNAME: "IKRAM", SECT: "13", GRP_TP: "B" },
  { MAT: "232431838402", NAME: "DENAIB", PNAME: "ACHREF", SECT: "13", GRP_TP: "C" },
  { MAT: "212431544502", NAME: "DEROUAZ", PNAME: "AMAR", SECT: "13", GRP_TP: "D" },
  { MAT: "232331634602", NAME: "DIAB", PNAME: "IKRAM", SECT: "13", GRP_TP: "A" },
  { MAT: "252531707804", NAME: "DIB", PNAME: "SAIDA", SECT: "13", GRP_TP: "D" },
  { MAT: "252531707410", NAME: "DIARBOUA", PNAME: "DOUAA", SECT: "13", GRP_TP: "B" },
  { MAT: "252531822415", NAME: "DIEHA", PNAME: "HIDAYETTE NABILA", SECT: "13", GRP_TP: "A" },
  { MAT: "252531470501", NAME: "DIEMMANE", PNAME: "FERIEL", SECT: "13", GRP_TP: "E" },
  { MAT: "252531635401", NAME: "DRAHMOUNE", PNAME: "SARA", SECT: "13", GRP_TP: "B" },
  { MAT: "252531430315", NAME: "DRIDER", PNAME: "ABDELKRIM", SECT: "13", GRP_TP: "E" },
  { MAT: "232331403002", NAME: "DRIS", PNAME: "ANYA", SECT: "13", GRP_TP: "F" },
  { MAT: "222431854819", NAME: "DRIS", PNAME: "NESRINE", SECT: "13", GRP_TP: "F" },
  { MAT: "252531638019", NAME: "DZIRIL", PNAME: "MERIEM", SECT: "13", GRP_TP: "C" },
  { MAT: "242431789010", NAME: "FEDGHOUCHE", PNAME: "HADJER", SECT: "13", GRP_TP: "A" },
  { MAT: "252531813911", NAME: "FELLAH", PNAME: "ASMA", SECT: "13", GRP_TP: "D" },
  { MAT: "252531746409", NAME: "FERHAT", PNAME: "RAHMA DOUAA", SECT: "13", GRP_TP: "B" },
  { MAT: "242431712009", NAME: "FERRAG", PNAME: "AYMEN", SECT: "13", GRP_TP: "C" },
  { MAT: "232331705506", NAME: "FERRIA", PNAME: "LOUKMANE ABDELBASSET", SECT: "13", GRP_TP: "C" },
  { MAT: "252531635620", NAME: "FETHANI", PNAME: "SKANDER", SECT: "13", GRP_TP: "A" },
  { MAT: "252531711002", NAME: "FETMOUCHE", PNAME: "DOUAA NADA", SECT: "13", GRP_TP: "B" },
  { MAT: "252531437003", NAME: "FODIL", PNAME: "HAMZA ZAKARIA", SECT: "13", GRP_TP: "A" },
  { MAT: "252531598020", NAME: "GHEZALI", PNAME: "YOUSRA", SECT: "13", GRP_TP: "C" },
  { MAT: "242531871808", NAME: "GHODBANE", PNAME: "SIRADJ EDDINE", SECT: "13", GRP_TP: "E" },
  { MAT: "252531382414", NAME: "GOUBI", PNAME: "WISSAL", SECT: "13", GRP_TP: "B" },
  { MAT: "242431368517", NAME: "GUENDOUZI", PNAME: "SERINE", SECT: "13", GRP_TP: "D" },
  { MAT: "252531481715", NAME: "GUERMAN", PNAME: "MALAK", SECT: "13", GRP_TP: "E" },
  { MAT: "232331623713", NAME: "GUERROUMI", PNAME: "ZINEDDINE", SECT: "13", GRP_TP: "A" },
  { MAT: "252531449917", NAME: "GUERROUT", PNAME: "MOHAMED WASSIM", SECT: "13", GRP_TP: "F" },
  { MAT: "222231472107", NAME: "GUETTOUCHE", PNAME: "AHMED YACINE", SECT: "13", GRP_TP: "C" },
  { MAT: "242431595406", NAME: "GUIDOUM", PNAME: "MOHAMED CHAKIB", SECT: "13", GRP_TP: "A" },
  { MAT: "232331370214", NAME: "HADDAD", PNAME: "ROZA", SECT: "13", GRP_TP: "F" },
  { MAT: "252531427417", NAME: "HADJ ZEKRI", PNAME: "HAYET", SECT: "13", GRP_TP: "D" },
  { MAT: "242431461802", NAME: "HADJI", PNAME: "BILAL", SECT: "13", GRP_TP: "B" },
  { MAT: "242431705609", NAME: "HAFFAD", PNAME: "HADIL", SECT: "13", GRP_TP: "D" },
  { MAT: "242531568502", NAME: "HAMDINI", PNAME: "KENZA", SECT: "13", GRP_TP: "B" },
  { MAT: "252531437912", NAME: "HAMECH", PNAME: "ABDELAZIZ SAMI", SECT: "13", GRP_TP: "C" },
  { MAT: "242431695504", NAME: "HAMMADE", PNAME: "LINA", SECT: "13", GRP_TP: "E" },
  { MAT: "252531555004", NAME: "HAMMOUALI", PNAME: "ABDELHAFID", SECT: "13", GRP_TP: "F" },
  { MAT: "242431747719", NAME: "HANNACHI", PNAME: "HANAFI", SECT: "13", GRP_TP: "A" },
  { MAT: "252531752903", NAME: "HAOUA", PNAME: "NOUR EL MALEK", SECT: "13", GRP_TP: "C" },
  { MAT: "242431441404", NAME: "HASSANI", PNAME: "ADEM", SECT: "13", GRP_TP: "A" },
  { MAT: "252531587720", NAME: "HATEM", PNAME: "YACINE", SECT: "13", GRP_TP: "B" },
  { MAT: "242531547707", NAME: "HERAOUA", PNAME: "AVOUB ABDERRAOUF", SECT: "13", GRP_TP: "D" },
  { MAT: "252531503003", NAME: "HIRED", PNAME: "DJAAFAR", SECT: "13", GRP_TP: "E" },
  { MAT: "242431484903", NAME: "HOUAS", PNAME: "ABDELMOUMEN", SECT: "13", GRP_TP: "F" },
  { MAT: "242435467514", NAME: "IDIR", PNAME: "GHELAD", SECT: "13", GRP_TP: "B" },
  { MAT: "252531213716", NAME: "IKHLEF", PNAME: "SERINE RANIA", SECT: "13", GRP_TP: "C" },
  { MAT: "242431743205", NAME: "KAHLOUCHE", PNAME: "MERIEM", SECT: "13", GRP_TP: "E" },
  { MAT: "232331632407", NAME: "KASBADJI", PNAME: "MOHAMED SALIM", SECT: "13", GRP_TP: "C" },
  { MAT: "222231663910", NAME: "KDIB", PNAME: "HAROUN", SECT: "13", GRP_TP: "F" },
  { MAT: "232331336314", NAME: "KELKOULI", PNAME: "KHADIDJA", SECT: "13", GRP_TP: "D" },
  { MAT: "252531618712", NAME: "KHELLOUF", PNAME: "MOHAMED", SECT: "13", GRP_TP: "A" },
  { MAT: "252531598918", NAME: "KHENDEK", PNAME: "MOHAMED KENZI", SECT: "13", GRP_TP: "E" },
  { MAT: "232332308311", NAME: "KHOUAS", PNAME: "RAOUF", SECT: "13", GRP_TP: "D" },
  { MAT: "242531888419", NAME: "KIARED", PNAME: "YASMINE", SECT: "13", GRP_TP: "F" },
  { MAT: "252531506403", NAME: "KIRECHE", PNAME: "AMINE", SECT: "13", GRP_TP: "D" },
  { MAT: "252531643701", NAME: "KOUADRAI", PNAME: "HAMZA", SECT: "13", GRP_TP: "E" },
    { MAT: "242431422305", NAME: "LABED", PNAME: "LINA", SECT: "13", GRP_TP: "E" },
  { MAT: "232331685411", NAME: "LACHIBI", PNAME: "RAID ADDINE", SECT: "13", GRP_TP: "A" },
  { MAT: "242431750016", NAME: "LAGAB", PNAME: "SERINE", SECT: "13", GRP_TP: "F" },
  { MAT: "252531441108", NAME: "LAMARA", PNAME: "ABDELALI", SECT: "13", GRP_TP: "F" },
  { MAT: "242431790508", NAME: "LARAS", PNAME: "AVOUB", SECT: "13", GRP_TP: "B" },
  { MAT: "232335534102", NAME: "LARBI", PNAME: "Fares", SECT: "13", GRP_TP: "C" },
  { MAT: "242431474707", NAME: "LARBI DIDOUCHE", PNAME: "HADIA", SECT: "13", GRP_TP: "B" },
  { MAT: "252531794003", NAME: "LARROUSSI", PNAME: "AYA NIDHAL", SECT: "13", GRP_TP: "D" },
  { MAT: "242531559412", NAME: "LASMI", PNAME: "MOHAMED EL ARBI", SECT: "13", GRP_TP: "E" },
  { MAT: "252531478617", NAME: "LASSAKEUR", PNAME: "AICHA CHAIMA", SECT: "13", GRP_TP: "A" },
  { MAT: "252531599715", NAME: "LAZIZI", PNAME: "NAILA", SECT: "13", GRP_TP: "C" },
  { MAT: "252531778606", NAME: "LAZREG", PNAME: "SYRINE", SECT: "13", GRP_TP: "B" },
  { MAT: "242431412514", NAME: "LEECHIRI", PNAME: "FERIEL", SECT: "13", GRP_TP: "A" },
  { MAT: "242531870710", NAME: "LOUADAH", PNAME: "RAYANE", SECT: "13", GRP_TP: "B" },
  { MAT: "242431729009", NAME: "LOUAR", PNAME: "ROFIDA", SECT: "13", GRP_TP: "C" },
  { MAT: "212131072481", NAME: "MADOUCHE", PNAME: "MOHAMED ABDERRAOUF", SECT: "13", GRP_TP: "D" },
  { MAT: "252531726007", NAME: "MAKHLOUFI", PNAME: "MOUHAMED ABDELDIABAR", SECT: "13", GRP_TP: "F" },
  { MAT: "252531441015", NAME: "MALEM", PNAME: "RAFIK ISLEM", SECT: "13", GRP_TP: "A" },
  { MAT: "252531505316", NAME: "MANSOURI", PNAME: "YAHYA AIHAM", SECT: "13", GRP_TP: "D" },
  { MAT: "252531637608", NAME: "MEBAREK", PNAME: "MOHAMED AMINE", SECT: "13", GRP_TP: "E" },
  { MAT: "252531636103", NAME: "MEBARKI", PNAME: "SAFA YASMINE", SECT: "13", GRP_TP: "F" },
  { MAT: "252531701916", NAME: "MEHAMEL", PNAME: "LYNA", SECT: "13", GRP_TP: "D" },
  { MAT: "252531504313", NAME: "MEHENNAQUI", PNAME: "MOHAMED AMINE", SECT: "13", GRP_TP: "B" },
  { MAT: "252531794415", NAME: "MEKHALDI", PNAME: "SARA", SECT: "13", GRP_TP: "C" },
  { MAT: "252531644103", NAME: "MERIOUD", PNAME: "MOKRANE AMINE", SECT: "13", GRP_TP: "A" },
  { MAT: "252531707906", NAME: "MESSACI", PNAME: "CHANEZ", SECT: "13", GRP_TP: "C" },
  { MAT: "232331451603", NAME: "MESSAOUD", PNAME: "BOUSSAD", SECT: "13", GRP_TP: "A" },
  { MAT: "252531504618", NAME: "MESSAOUDI", PNAME: "MERIEM", SECT: "13", GRP_TP: "B" },
  { MAT: "252531120507", NAME: "MESSAOUDI", PNAME: "HAMOU RAMDANE", SECT: "13", GRP_TP: "E" },
  { MAT: "252531805902", NAME: "METENE", PNAME: "KHADIDJA", SECT: "13", GRP_TP: "C" },
  { MAT: "252531615103", NAME: "MEZIANI", PNAME: "LYNA", SECT: "13", GRP_TP: "E" },
  { MAT: "252531373710", NAME: "MIHOUBI", PNAME: "HADIL", SECT: "13", GRP_TP: "F" },
  { MAT: "252531502410", NAME: "MOGHRANI", PNAME: "AMAR", SECT: "13", GRP_TP: "D" },
  { MAT: "252531822307", NAME: "MOKEDEM", PNAME: "FAIROUZ", SECT: "13", GRP_TP: "F" },
  { MAT: "252531438810", NAME: "MOKHTARI", PNAME: "MILYNDA", SECT: "13", GRP_TP: "E" },
  { MAT: "252531491606", NAME: "MOUACI", PNAME: "RAOUNAK", SECT: "13", GRP_TP: "B" },
  { MAT: "252531638120", NAME: "MOUAKI BENANI", PNAME: "MOUAD ABDELKRIM", SECT: "13", GRP_TP: "A" },
  { MAT: "242431625901", NAME: "MOUKEBEL", PNAME: "WALID", SECT: "13", GRP_TP: "F" },
  { MAT: "252531502808", NAME: "MOUSSAOUI", PNAME: "AMINE", SECT: "13", GRP_TP: "B" },
  { MAT: "252531495802", NAME: "MOUZAOUI", PNAME: "SARAH", SECT: "13", GRP_TP: "D" },
  { MAT: "232331419207", NAME: "NAHNAH", PNAME: "MERIEM", SECT: "13", GRP_TP: "C" },
  { MAT: "252531470919", NAME: "NASRI", PNAME: "HIBA", SECT: "13", GRP_TP: "A" },
  { MAT: "252531588008", NAME: "NEKICHE", PNAME: "HAFSA", SECT: "13", GRP_TP: "D" },
  { MAT: "232331708205", NAME: "OUAL", PNAME: "ABDALLAH AVOUB", SECT: "13", GRP_TP: "E" },
  { MAT: "252531788210", NAME: "OUAZZOUG", PNAME: "SOUHA ZINA", SECT: "13", GRP_TP: "B" },
  { MAT: "252531439819", NAME: "OULD AMER", PNAME: "ABDESLAM", SECT: "13", GRP_TP: "F" },
  { MAT: "252531456404", NAME: "OUSSAL", PNAME: "SARAH", SECT: "13", GRP_TP: "C" },
  { MAT: "252531586712", NAME: "OUZZANE", PNAME: "MOHAMED YACINE", SECT: "13", GRP_TP: "C" },
  { MAT: "252531697607", NAME: "RAHMANI", PNAME: "MOHAMED AMINE", SECT: "13", GRP_TP: "A" },
  { MAT: "232331575913", NAME: "REBAI", PNAME: "ABDENOUR", SECT: "13", GRP_TP: "E" },
  { MAT: "252531641608", NAME: "REKAH", PNAME: "INIHAL", SECT: "13", GRP_TP: "D" },
    { MAT: "252531506119", NAME: "REZIG MERHOUNE", PNAME: "MAHDI", SECT: "13", GRP_TP: "E" },
  { MAT: "252531787512", NAME: "RIZOUG ZEGHLACHE", PNAME: "NOUFEL", SECT: "13", GRP_TP: "F" },
  { MAT: "252531741907", NAME: "ROUIKHA", PNAME: "ANYA", SECT: "13", GRP_TP: "F" },
  { MAT: "252531419605", NAME: "SAADAD", PNAME: "AICHA SEROUR", SECT: "13", GRP_TP: "D" },
  { MAT: "252531827214", NAME: "SAADAOUI", PNAME: "ABIR", SECT: "13", GRP_TP: "E" },
  { MAT: "232531563819", NAME: "SABER", PNAME: "HIBA", SECT: "13", GRP_TP: "D" },
  { MAT: "252531707310", NAME: "SAHRAOUI", PNAME: "HOUSSEM", SECT: "13", GRP_TP: "B" },
  { MAT: "232331546403", NAME: "SALHI", PNAME: "SOFIA CHIRAZ AMINA", SECT: "13", GRP_TP: "F" },
  { MAT: "252531457214", NAME: "SAYAH", PNAME: "MALAK", SECT: "13", GRP_TP: "C" },
  { MAT: "232331685210", NAME: "SEDDIKI", PNAME: "MOHAMED ILYES", SECT: "13", GRP_TP: "A" },
  { MAT: "232331442607", NAME: "SELMANE", PNAME: "MARWA", SECT: "13", GRP_TP: "D" },
  { MAT: "252531810220", NAME: "SIDI AISSA", PNAME: "OUMAIMA", SECT: "13", GRP_TP: "E" },
  { MAT: "242431563311", NAME: "SLIMANI", PNAME: "MOUNIA", SECT: "13", GRP_TP: "B" },
  { MAT: "242431485506", NAME: "TAKOUERT", PNAME: "MOHAMED OUSSAMA", SECT: "13", GRP_TP: "C" },
  { MAT: "252531736217", NAME: "TAQUINET", PNAME: "SAFA AMINA", SECT: "13", GRP_TP: "A" },
  { MAT: "252531471911", NAME: "TAYANE", PNAME: "QUALID", SECT: "13", GRP_TP: "E" },
  { MAT: "252531465012", NAME: "TELLACHE", PNAME: "MARIA", SECT: "13", GRP_TP: "F" },
  { MAT: "252531493120", NAME: "TENANI", PNAME: "MERIEM", SECT: "13", GRP_TP: "A" },
  { MAT: "252531697016", NAME: "TILMATINE", PNAME: "CAMILA", SECT: "13", GRP_TP: "B" },
  { MAT: "252531725503", NAME: "TOIAHRIA", PNAME: "FATIMA ZOHRA", SECT: "13", GRP_TP: "D" },
  { MAT: "252531596804", NAME: "TOUBAL", PNAME: "MOHAMED", SECT: "13", GRP_TP: "B" },
  { MAT: "252531766307", NAME: "TOUILEB", PNAME: "SONIA", SECT: "13", GRP_TP: "F" },
  { MAT: "252531888601", NAME: "TOUNSI", PNAME: "YOUNES", SECT: "13", GRP_TP: "C" },
  { MAT: "252531640304", NAME: "TRABELSI", PNAME: "RITEDJ", SECT: "13", GRP_TP: "A" },
  { MAT: "222231602619", NAME: "YAHOUI", PNAME: "MOHAMED ANIS", SECT: "13", GRP_TP: "D" },
  { MAT: "252531439605", NAME: "YAICHE TEMAM", PNAME: "AHMED OBEY", SECT: "13", GRP_TP: "C" },
  { MAT: "252531754417", NAME: "ZAMOUM", PNAME: "Ramzi mohamed ihcene", SECT: "13", GRP_TP: "A" },
  { MAT: "242531877914", NAME: "ZERGOUG", PNAME: "MARIA", SECT: "13", GRP_TP: "B" },
  { MAT: "252531478210", NAME: "ZIANE", PNAME: "ROMAISSA", SECT: "13", GRP_TP: "E" },
    { MAT: "19852005", NAME: "ADMIN", PNAME: "ACCESS", SECT: "13", GRP_TP: "A" }
  ];

  // Teacher matricules
  const teacherMatricules = ["ITCheckListST13G24", "ITCheckListST13G13"];
  let currentTeacherMode = null; // Tracks current teacher
  let teacherStudentList = []; // Stores students added by teacher
  let studentToDeleteIndex = null; // Tracks student to delete
  let crossGroupStudent = null; // Tracks cross-group student
  let attendanceStatus = null; // Tracks attendance status
  
  // Week management data
  let weeksData = {
    "ITCheckListST13G24": {},
    "ITCheckListST13G13": {}
  };
  
  let currentWeek = 1; // Current week number

  // Modal elements
  const deleteModal = document.getElementById('deleteModal');
  const modalStudentInfo = document.getElementById('modalStudentInfo');
  const confirmDeleteBtn = document.getElementById('confirmDelete');
  const cancelDeleteBtn = document.getElementById('cancelDelete');

  const crossGroupModal = document.getElementById('crossGroupModal');
  const crossGroupMessage = document.getElementById('crossGroupMessage');
  const crossGroupStudentInfo = document.getElementById('crossGroupStudentInfo');
  const correctTeacherMatricule = document.getElementById('correctTeacherMatricule');
  const correctGroup = document.getElementById('correctGroup');
  const attendanceYes = document.getElementById('attendanceYes');
  const attendanceNo = document.getElementById('attendanceNo');
  const saveCrossGroupBtn = document.getElementById('saveCrossGroup');

  // Hamburger menu elements
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const closeSidebar = document.getElementById('closeSidebar');
  const weekButtons = document.getElementById('weekButtons');
  const addWeekButton = document.getElementById('addWeekButton');

  // Teacher input elements
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const teacherInputs = document.getElementById('teacherInputs');
  const groupInput = document.getElementById('groupInput');
  const addStudentButton = document.getElementById('addStudentButton');
  const saveButton = document.getElementById('saveButton');
  const result = document.getElementById('result');
  const teacherListContainer = document.getElementById('teacherListContainer');

  // === HAMBURGER MENU FUNCTIONS ===

  // Show sidebar - only for teacher mode
  function showSidebar() {
    if (sidebar && currentTeacherMode) {
      sidebar.classList.add('active');
      sidebarOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Hide hamburger button
      if (hamburgerMenu) {
        hamburgerMenu.style.display = 'none';
      }
    }
  }

  // Hide sidebar with 200ms delay
  function hideSidebar() {
    if (sidebar) {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
      
      // 200ms delay before showing hamburger button again
      setTimeout(() => {
        if (hamburgerMenu && currentTeacherMode === "ITCheckListST13G24") {
          hamburgerMenu.style.display = 'flex';
        }
      }, 200);
    }
  }

  // === MODAL FUNCTIONS ===

  // Show delete confirmation modal
  function showDeleteModal(student, index) {
    studentToDeleteIndex = index;
    
    const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
    modalStudentInfo.innerHTML = `
      <strong>${formattedName} ${formattedPname}</strong><br>
      Section: ${student.SECT} | Group: ${student.GRP_TP}<br>
      Matricule: ${student.MAT}
    `;
    
    deleteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Hide delete modal
  function hideDeleteModal() {
    deleteModal.classList.remove('active');
    studentToDeleteIndex = null;
    document.body.style.overflow = '';
  }

  // Show cross-group warning modal
  function showCrossGroupModal(student) {
    crossGroupStudent = student;
    attendanceStatus = null;
    
    // Reset form
    correctTeacherMatricule.value = '';
    correctGroup.value = '';
    attendanceYes.classList.remove('selected');
    attendanceNo.classList.remove('selected');
    saveCrossGroupBtn.disabled = true;
    
    const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
    const studentGroups = student.GRP_TP;
    
    let correctTeacher, warningMessage;
    
    // Determine correct teacher based on student group
    if (["A", "B", "C"].includes(studentGroups)) {
      correctTeacher = "ITCheckListST13G13";
      warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> is NOT from Group 2 Or 4.`;
    } else {
      correctTeacher = "ITCheckListST13G24";
      warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> is NOT from Group 1 Or 3.`;
    }
    
    crossGroupMessage.innerHTML = warningMessage;
    crossGroupStudentInfo.innerHTML = `
      <strong>${formattedName} ${formattedPname}</strong><br>
      Section: ${student.SECT} | Current Group: ${student.GRP_TP}<br>
      Matricule: ${student.MAT}<br>
      <strong>Correct Teacher: ${correctTeacher}</strong>
    `;
    
    correctTeacherMatricule.value = correctTeacher;
    crossGroupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Hide cross-group modal
  function hideCrossGroupModal() {
    crossGroupModal.classList.remove('active');
    crossGroupStudent = null;
    attendanceStatus = null;
    document.body.style.overflow = '';
  }

  // Check if cross-group form is valid
  function checkCrossGroupForm() {
    const teacherValid = teacherMatricules.includes(correctTeacherMatricule.value.trim());
    const groupValid = correctGroup.value.trim().length > 0;
    const attendanceValid = attendanceStatus !== null;
    
    saveCrossGroupBtn.disabled = !(teacherValid && groupValid && attendanceValid);
  }

  // === WEEK MANAGEMENT FUNCTIONS ===

  // Show week menu for ITCheckListST13G24 teacher
  function showWeekMenu() {
    if (hamburgerMenu && currentTeacherMode === "ITCheckListST13G24") {
      hamburgerMenu.style.display = 'flex';
      updateWeekButtons();
    } else if (hamburgerMenu) {
      hamburgerMenu.style.display = 'none';
    }
  }

  // Hide week menu
  function hideWeekMenu() {
    if (hamburgerMenu) {
      hamburgerMenu.style.display = 'none';
    }
    hideSidebar();
  }

// Update week buttons with delete functionality
function updateWeekButtons() {
  if (!weekButtons) return;
  
  weekButtons.innerHTML = '';
  const teacherWeeks = weeksData[currentTeacherMode] || {};
  const weekNumbers = Object.keys(teacherWeeks).map(Number).sort((a, b) => a - b);
  
  weekNumbers.forEach(weekNum => {
    const weekItem = document.createElement('div');
    weekItem.className = 'week-item';
    
    const weekItemContent = document.createElement('div');
    weekItemContent.className = 'week-item-content';
    
    const weekBtn = document.createElement('button');
    weekBtn.className = `week-btn ${weekNum === currentWeek ? 'active' : ''}`;
    weekBtn.textContent = `Week ${weekNum}`;
    weekBtn.onclick = () => loadWeek(weekNum);
    
    const deleteWeekBtn = document.createElement('button');
    deleteWeekBtn.className = 'delete-week-btn';
    deleteWeekBtn.innerHTML = '🗑️';
    deleteWeekBtn.title = 'Delete Week';
    deleteWeekBtn.onclick = (e) => {
      e.stopPropagation(); // Prevent triggering week load
      deleteWeek(weekNum);
    };
    
    // Disable delete if it's the only week or current week
    if (weekNumbers.length <= 1 || weekNum === currentWeek) {
      deleteWeekBtn.disabled = true;
    }
    
    weekItemContent.appendChild(weekBtn);
    weekItemContent.appendChild(deleteWeekBtn);
    weekItem.appendChild(weekItemContent);
    weekButtons.appendChild(weekItem);
  });
}

// Delete week function
// Delete week function - show modal instead of alert
function deleteWeek(weekNumber) {
  if (!currentTeacherMode) return;
  
  const teacherWeeks = weeksData[currentTeacherMode] || {};
  const weekNumbers = Object.keys(teacherWeeks).map(Number).sort((a, b) => a - b);
  
  // Prevent deleting the only week
  if (weekNumbers.length <= 1) {
    alert("Cannot delete the only week!");
    return;
  }
  
  // Show confirmation modal instead of alert
  showDeleteWeekModal(weekNumber);
}

// Show week delete confirmation modal
function showDeleteWeekModal(weekNumber) {
  weekToDelete = weekNumber;
  
  const teacherWeeks = weeksData[currentTeacherMode] || {};
  const studentCount = teacherWeeks[weekNumber] ? teacherWeeks[weekNumber].length : 0;
  
  modalWeekInfo.innerHTML = `
    <strong>Week ${weekNumber}</strong><br>
    Students in this week: ${studentCount}<br>
    Current Week: ${weekNumber === currentWeek ? 'Yes ⭐' : 'No'}
  `;
  
  deleteWeekModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Hide week delete modal
function hideDeleteWeekModal() {
  deleteWeekModal.classList.remove('active');
  weekToDelete = null;
  document.body.style.overflow = '';
}

// Confirm week deletion
function confirmWeekDelete() {
  if (!weekToDelete) return;
  
  const teacherWeeks = weeksData[currentTeacherMode] || {};
  
  // Delete the week
  delete weeksData[currentTeacherMode][weekToDelete];
  
  // If deleted week was current week, load another week
  if (weekToDelete === currentWeek) {
    const remainingWeeks = Object.keys(weeksData[currentTeacherMode]).map(Number).sort((a, b) => a - b);
    currentWeek = remainingWeeks[0] || 1;
    loadWeek(currentWeek);
  }
  
  // Save to localStorage
  localStorage.setItem('weeksData', JSON.stringify(weeksData));
  
  // Update UI
  updateWeekButtons();
  
  result.innerHTML = `<div class="teacher-mode">🗑️ Week ${weekToDelete} deleted successfully!</div>`;
  hideDeleteWeekModal();
}

// Add modal elements at the top with other elements
const deleteWeekModal = document.getElementById('deleteWeekModal');
const modalWeekInfo = document.getElementById('modalWeekInfo');
const confirmWeekDeleteBtn = document.getElementById('confirmWeekDelete');
const cancelWeekDeleteBtn = document.getElementById('cancelWeekDelete');
let weekToDelete = null; // Track which week to delete

// Add these event listeners with your other event listeners
if (confirmWeekDeleteBtn) {
  confirmWeekDeleteBtn.addEventListener('click', confirmWeekDelete);
}

if (cancelWeekDeleteBtn) {
  cancelWeekDeleteBtn.addEventListener('click', hideDeleteWeekModal);
}

// Close modal when clicking outside
if (deleteWeekModal) {
  deleteWeekModal.addEventListener('click', (e) => {
    if (e.target === deleteWeekModal) hideDeleteWeekModal();
  });
}

  // Add new week
  function addWeek() {
    if (!currentTeacherMode) return;
    
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    const weekNumbers = Object.keys(teacherWeeks).map(Number).sort((a, b) => a - b);
    const newWeekNumber = weekNumbers.length > 0 ? Math.max(...weekNumbers) + 1 : 1;
    
    // Create new week with reset attendance
    const newWeekData = teacherStudentList.map(student => ({
      ...student,
      present: false
    }));
    
    if (!weeksData[currentTeacherMode]) {
      weeksData[currentTeacherMode] = {};
    }
    
    weeksData[currentTeacherMode][newWeekNumber] = newWeekData;
    currentWeek = newWeekNumber;
    teacherStudentList = [...newWeekData];
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    updateWeekButtons();
    displayTeacherList();
    
    result.innerHTML = `<div class="teacher-mode">✅ Week ${newWeekNumber} created successfully!</div>`;
  }

  // Load specific week
  function loadWeek(weekNumber) {
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    if (teacherWeeks[weekNumber]) {
      teacherStudentList = teacherWeeks[weekNumber];
      currentWeek = weekNumber;
      displayTeacherList();
      updateWeekButtons();
      result.innerHTML = `<div class="teacher-mode">📂 Loaded Week ${weekNumber}</div>`;
    }
  }

  // Save current week
  function saveCurrentWeek() {
    if (!currentTeacherMode) {
      alert("Please activate teacher mode first!");
      return;
    }
    
    // Check for cross-group students
    const crossGroupStudents = teacherStudentList.filter(student => 
      isStudentInWrongGroup(student.GRP_TP)
    );
    
    if (crossGroupStudents.length > 0) {
      showCrossGroupModal(crossGroupStudents[0]);
      return;
    }
    
    if (!weeksData[currentTeacherMode]) {
      weeksData[currentTeacherMode] = {};
    }
    
    weeksData[currentTeacherMode][currentWeek] = teacherStudentList;
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    result.innerHTML = `<div class="teacher-mode">✅ Week ${currentWeek} saved successfully!</div>`;
  }

  // === UTILITY FUNCTIONS ===

  // Get lab information based on group
  function getLabInfo(grpTP) {
    let chemistryLab = "";
    let physicsLab = "";
    let week1 = "";
    let week2 = "";

    if (grpTP === "A" || grpTP === "D") {
      chemistryLab = "A204";
      physicsLab = "C104";
    } else if (grpTP === "B" || grpTP === "E") {
      chemistryLab = "A205";
      physicsLab = "C105";
    } else if (grpTP === "C" || grpTP === "F") {
      chemistryLab = "A206";
      physicsLab = "C106";
    }

    if (grpTP === "A" || grpTP === "B" || grpTP === "C") {
      week1 = "Physics Lab";
      week2 = "Chemistry Lab";
    } else {
      week1 = "Chemistry Lab";
      week2 = "Physics Lab";
    }

    return { chemistryLab, physicsLab, week1, week2 };
  }

  // Format names for teacher display
  function formatNameForTeacher(name, pname) {
    const formattedName = name.toUpperCase();
    const formattedPname = pname.charAt(0).toUpperCase() + pname.slice(1).toLowerCase();
    return { formattedName, formattedPname };
  }

  // Get correct teacher for student based on group
  function getCorrectTeacherForStudent(studentGrpTP) {
    if (["A", "B", "C"].includes(studentGrpTP)) {
      return "ITCheckListST13G13";
    } else if (["D", "E", "F"].includes(studentGrpTP)) {
      return "ITCheckListST13G24";
    }
    return null;
  }

  // Check if student is in wrong group for current teacher
  function isStudentInWrongGroup(studentGrpTP) {
    const correctTeacher = getCorrectTeacherForStudent(studentGrpTP);
    return correctTeacher !== currentTeacherMode;
  }

  // === STUDENT MANAGEMENT FUNCTIONS ===

  // Delete student from table
  function deleteStudent(index) {
    teacherStudentList.splice(index, 1);
    displayTeacherList();
    result.innerHTML = `<div class="teacher-mode">🗑️ Student removed from the table</div>`;
  }

  // Save cross-group student to correct table
  function saveCrossGroupStudent() {
    const correctTeacher = correctTeacherMatricule.value.trim();
    const studentGroup = correctGroup.value.trim();
    
    const correctedStudent = {
      ...crossGroupStudent,
      customGroup: studentGroup,
      present: attendanceStatus,
      note: `Came with ${currentTeacherMode} groups in last session`
    };
    
    if (!weeksData[correctTeacher]) {
      weeksData[correctTeacher] = {};
    }
    if (!weeksData[correctTeacher][currentWeek]) {
      weeksData[correctTeacher][currentWeek] = [];
    }
    
    // Avoid duplicates
    if (!weeksData[correctTeacher][currentWeek].some(s => s.MAT === correctedStudent.MAT)) {
      weeksData[correctTeacher][currentWeek].push(correctedStudent);
    }
    
    // Remove from current teacher's list
    const index = teacherStudentList.findIndex(s => s.MAT === crossGroupStudent.MAT);
    if (index !== -1) {
      teacherStudentList.splice(index, 1);
    }
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    displayTeacherList();
    
    result.innerHTML = `<div class="teacher-mode">
      ✅ Cross-group student saved to ${correctTeacher} table<br>
      Attendance: ${attendanceStatus ? 'Present ✓' : 'Absent ✗'}
    </div>`;
  }

  // Display teacher student list
  function displayTeacherList() {
    if (!teacherListContainer) return;
    
    teacherListContainer.innerHTML = '';
    
    if (teacherStudentList.length === 0) {
      return;
    }
    
    let tableHTML = `
      <h2>📋 Student List - Week ${currentWeek}</h2>
      <table class="teacher-list">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PNAME</th>
            <th>SECTION</th>
            <th>GROUP</th>
            <th>MATRICULE</th>
            <th>ATTENDANCE</th>
            <th>NOTES</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    teacherStudentList.forEach((student, index) => {
      const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
      const itGroup = student.customGroup || student.GRP_TP;
      const inWrongGroup = isStudentInWrongGroup(student.GRP_TP);
      
      tableHTML += `
        <tr>
          <td>${formattedName}</td>
          <td>${formattedPname}</td>
          <td>${student.SECT}</td>
          <td>
            <input type="text" 
                   class="group-input" 
                   value="${itGroup}" 
                   data-index="${index}"
                   placeholder="Group">
          </td>
          <td>${student.MAT}</td>
          <td>
            <input type="checkbox" 
                   class="attendance-checkbox" 
                   data-index="${index}"
                   ${student.present ? 'checked' : ''}>
          </td>
          <td>
            ${student.note ? `
              <div class="note-text">
                ${student.note}
                <span class="remove-note" data-index="${index}">✕</span>
              </div>
            ` : ''}
            ${inWrongGroup ? `
              <div class="note-text" style="color: #ff4444;">
                From other group
              </div>
            ` : ''}
          </td>
          <td>
            <button class="delete-button" data-index="${index}">Delete</button>
          </td>
        </tr>
      `;
    });
    
    tableHTML += `
        </tbody>
      </table>
    `;
    
    teacherListContainer.innerHTML = tableHTML;
    
    // Add event listeners for table interactions
    teacherListContainer.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const index = this.getAttribute('data-index');
        teacherStudentList[index].present = this.checked;
      });
    });
    
    teacherListContainer.querySelectorAll('.group-input').forEach(input => {
      input.addEventListener('change', function() {
        const index = this.getAttribute('data-index');
        teacherStudentList[index].customGroup = this.value;
      });
    });
    
    teacherListContainer.querySelectorAll('.remove-note').forEach(button => {
      button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        teacherStudentList[index].note = '';
        displayTeacherList();
      });
    });
    
    teacherListContainer.querySelectorAll('.delete-button').forEach(button => {
      button.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const student = teacherStudentList[index];
        showDeleteModal(student, index);
      });
    });
  }

  // === SEARCH AND STUDENT ADDITION FUNCTIONS ===

  // Search for student or activate teacher mode
  function searchInfo() {
    const mat = searchInput.value.trim();
    result.textContent = "";

    if (!mat) {
      result.textContent = "⚠️ Please enter a matricule number.";
      return;
    }

    // Check if it's a teacher matricule
    if (teacherMatricules.includes(mat)) {
      currentTeacherMode = mat;
      teacherStudentList = [];
      result.innerHTML = `<div class="teacher-mode">🎓 Teacher Mode Activated (${mat})</div>`;
      searchInput.value = '';
      searchInput.placeholder = "Enter student matricule";
      teacherInputs.style.display = 'flex';
      
      // Show hamburger button only for ITCheckListST13G24
      showWeekMenu();
      loadWeek(currentWeek);
      return;
    }

    const student = data.find(s => s.MAT === mat);
    if (!student) {
      result.textContent = `❌ No student found with matricule "${mat}".`;
      return;
    }

    // Teacher mode - add student to list
    if (currentTeacherMode) {
      const alreadyExists = teacherStudentList.some(s => s.MAT === student.MAT);
      
      if (alreadyExists) {
        result.innerHTML = `<div class="teacher-mode">⚠️ Student with matricule "${mat}" is already in the list!</div>`;
      } else {
        const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
        const inWrongGroup = isStudentInWrongGroup(student.GRP_TP);
        
        result.innerHTML = `
          <div class="teacher-mode">
            ✅ Found: ${formattedName} ${formattedPname} | Section ${student.SECT}<br>
            ${inWrongGroup ? `<span style="color: #ff4444;">⚠️ This student belongs to other groups</span><br>` : ''}
            Enter group number and click "Add Student"
          </div>
        `;
        
        window.currentStudentToAdd = student;
      }
    } else {
      // Normal student mode display
      displayStudentResults(student);
    }
  }

  // Add student with custom group
  function addStudentWithGroup() {
    const groupInputValue = groupInput.value.trim();
    
    if (!window.currentStudentToAdd) {
      result.innerHTML = `<div class="teacher-mode">⚠️ Please search for a student first!</div>`;
      return;
    }
    
    if (!groupInputValue) {
      result.innerHTML = `<div class="teacher-mode">⚠️ Please enter a group number!</div>`;
      return;
    }
    
    const studentToAdd = {
      ...window.currentStudentToAdd,
      customGroup: groupInputValue,
      present: false
    };
    
    teacherStudentList.push(studentToAdd);
    displayTeacherList();
    
    const { formattedName, formattedPname } = formatNameForTeacher(studentToAdd.NAME, studentToAdd.PNAME);
    const inWrongGroup = isStudentInWrongGroup(studentToAdd.GRP_TP);
    
    result.innerHTML = `<div class="teacher-mode">
      ✅ Added: ${formattedName} ${formattedPname} | Section ${studentToAdd.SECT} | ${groupInputValue} | ${studentToAdd.MAT}
      ${inWrongGroup ? `<br><span style="color: #ff4444;">⚠️ This student will require cross-group assignment when saving</span>` : ''}
    </div>`;
    
    searchInput.value = '';
    groupInput.value = '';
    window.currentStudentToAdd = null;
  }

  // Display student results for normal mode
  function displayStudentResults(student) {
    const labInfo = getLabInfo(student.GRP_TP);
    const info = `${student.NAME} ${student.PNAME} — Section ${student.SECT} — Group ${student.GRP_TP}`;
    const lines = info.split('—').map(s => s.trim());
    
    result.innerHTML = lines.map((line, i) =>
      `<p class="result-line" style="animation-delay:${i * 0.4}s">${line}</p>`).join('');
    
    result.innerHTML += `<p class="result-line" style="animation-delay:${lines.length * 0.4}s">Matricule: ${student.MAT}</p>`;
    result.innerHTML += `<p class="result-line" style="animation-delay:${(lines.length + 1) * 0.4}s">🧪 Chemistry Lab: ${labInfo.chemistryLab}</p>`;
    result.innerHTML += `<p class="result-line" style="animation-delay:${(lines.length + 2) * 0.4}s">⚛️ Physics Lab: ${labInfo.physicsLab}</p>`;
    result.innerHTML += `<p class="result-line" style="animation-delay:${(lines.length + 3) * 0.4}s">📅 Week 1: ${labInfo.week1} in TP Class</p>`;
    result.innerHTML += `<p class="result-line" style="animation-delay:${(lines.length + 4) * 0.4}s">📅 Week 2: ${labInfo.week2} in TP Class</p>`;
  }

  // === EVENT LISTENERS ===

  // Delete modal events
  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', () => {
      if (studentToDeleteIndex !== null) {
        deleteStudent(studentToDeleteIndex);
        hideDeleteModal();
      }
    });
  }

  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener('click', hideDeleteModal);
  }

  // Cross-group modal events
  if (attendanceYes) {
    attendanceYes.addEventListener('click', () => {
      attendanceStatus = true;
      attendanceYes.classList.add('selected');
      if (attendanceNo) attendanceNo.classList.remove('selected');
      checkCrossGroupForm();
    });
  }

  if (attendanceNo) {
    attendanceNo.addEventListener('click', () => {
      attendanceStatus = false;
      attendanceNo.classList.add('selected');
      if (attendanceYes) attendanceYes.classList.remove('selected');
      checkCrossGroupForm();
    });
  }

  if (correctTeacherMatricule) {
    correctTeacherMatricule.addEventListener('input', checkCrossGroupForm);
  }

  if (correctGroup) {
    correctGroup.addEventListener('input', checkCrossGroupForm);
  }

  if (saveCrossGroupBtn) {
    saveCrossGroupBtn.addEventListener('click', () => {
      if (crossGroupStudent && attendanceStatus !== null) {
        saveCrossGroupStudent();
        hideCrossGroupModal();
      }
    });
  }

// Hamburger menu events - only available in teacher mode and invisible by default
if (hamburgerMenu) {
  // Hide hamburger by default
  hamburgerMenu.style.display = 'none';
  
  hamburgerMenu.addEventListener('click', function() {
    // Only work if teacher mode is active and it's ITCheckListST13G24
    if (currentTeacherMode && currentTeacherMode === "ITCheckListST13G24") {
      showSidebar();
    }
  });
}

  if (closeSidebar) {
    closeSidebar.addEventListener('click', hideSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', hideSidebar);
  }

  // Week management events
  if (addWeekButton) {
    addWeekButton.addEventListener('click', addWeek);
  }

  // Main button events
  if (searchButton) {
    searchButton.addEventListener('click', searchInfo);
  }

  if (addStudentButton) {
    addStudentButton.addEventListener('click', addStudentWithGroup);
  }

  if (saveButton) {
    saveButton.addEventListener('click', saveCurrentWeek);
  }
  
  // Enter key support
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchInfo();
      }
    });
  }
  
  if (groupInput) {
    groupInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addStudentWithGroup();
      }
    });
  }

  // Close modals when clicking outside
  if (deleteModal) {
    deleteModal.addEventListener('click', (e) => {
      if (e.target === deleteModal) hideDeleteModal();
    });
  }

  if (crossGroupModal) {
    crossGroupModal.addEventListener('click', (e) => {
      if (e.target === crossGroupModal) {
        alert("Please complete the cross-group assignment process or remove the student from your table.");
      }
    });
  }

  // Load saved data from localStorage
  const savedWeeksData = localStorage.getItem('weeksData');
  if (savedWeeksData) {
    weeksData = JSON.parse(savedWeeksData);
  }
});

// Walking animation for hamburger menu
function startHamburgerAnimation() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  if (!hamburgerMenu) return;

  let animationId;
  let isAnimating = false;

  // Start animation on hover
  hamburgerMenu.addEventListener('mouseenter', function() {
    if (isAnimating) return;
    isAnimating = true;
    animate();
  });

  // Stop animation when mouse leaves
  hamburgerMenu.addEventListener('mouseleave', function() {
    isAnimating = false;
    cancelAnimationFrame(animationId);
    
    // Reset positions
    const leftLeg = hamburgerMenu.querySelector('.left-leg');
    const rightLeg = hamburgerMenu.querySelector('.right-leg');
    const leftHand = hamburgerMenu.querySelector('.left-hand');
    const rightHand = hamburgerMenu.querySelector('.right-hand');
    const bodyLine = hamburgerMenu.querySelector('.body-line');
    const headLine = hamburgerMenu.querySelector('.head-line');
    
    if (leftLeg) leftLeg.style.transform = 'rotate(0deg)';
    if (rightLeg) rightLeg.style.transform = 'rotate(0deg)';
    if (leftHand) leftHand.style.transform = 'rotate(0deg)';
    if (rightHand) rightHand.style.transform = 'rotate(0deg)';
    if (bodyLine) bodyLine.style.transform = 'translateX(-50%) rotate(0deg)';
    if (headLine) headLine.style.transform = 'translateX(-50%) rotate(0deg)';
  });

  // Animation loop
  function animate() {
    if (!isAnimating) return;

    const time = Date.now() * 0.005;
    const leftLeg = hamburgerMenu.querySelector('.left-leg');
    const rightLeg = hamburgerMenu.querySelector('.right-leg');
    const leftHand = hamburgerMenu.querySelector('.left-hand');
    const rightHand = hamburgerMenu.querySelector('.right-hand');
    const bodyLine = hamburgerMenu.querySelector('.body-line');
    const headLine = hamburgerMenu.querySelector('.head-line');

    // Walking animation for legs
    if (leftLeg) leftLeg.style.transform = `rotate(${Math.sin(time) * 25}deg)`;
    if (rightLeg) rightLeg.style.transform = `rotate(${-Math.sin(time) * 25}deg)`;

    // Subtle hand movements
    if (leftHand) leftHand.style.transform = `rotate(${Math.sin(time + 1) * 8}deg)`;
    if (rightHand) rightHand.style.transform = `rotate(${-Math.sin(time + 1) * 8}deg)`;

    // Gentle body sway
    if (bodyLine) bodyLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5) * 2}deg)`;
    if (headLine) headLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5 + 0.5) * 1.5}deg)`;

    animationId = requestAnimationFrame(animate);
  }
}

// Start animation when page loads
document.addEventListener('DOMContentLoaded', startHamburgerAnimation);