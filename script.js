document.addEventListener('DOMContentLoaded', () => {
  // Student data array (will be added by user)
  const data = [
    { MAT: "242431773116", NAME: "ABSA", PNAME: "RAOUAA", SECT: "13", GRP_TP: "E" },
    { MAT: "232331603603", NAME: "MERHOUM", PNAME: "MERIEM", SECT: "13", GRP_TP: "D" },
    { MAT: "222231694213", NAME: "BOUREZG", PNAME: "AGHILES", SECT: "13", GRP_TP: "Unknown" },
    { MAT: "242431653209", NAME: "ZERROUK", PNAME: "MANEL", SECT: "13", GRP_TP: "F" },
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

  ]; 


  // Teacher matricules
  const teacherMatricules = ["ITCheckListST13G24", "ITCheckListST13G13"];
  
  // Schedule Data
  let currentStudent = null;

 // Update the schedule data for all groups
const scheduleData = {
  "1": {
    name: "Group 1",
    schedule: {
      "Saturday": [
        { time: "8:00 - 9:30", course: "TD Analysis", location: "Class 373", groups: "1" },
        { time: "9:40 - 11:10", course: "TD Chemistry", location: "Class 373", groups: "1" },
        { time: "11:20 - 12:50", course: "Analysis Course", location: "Runway J", groups: "1,2,3,4" }
      ],
      "Sunday": [
        { time: "9:40 - 11:10", course: "Physics Course", location: "Runway P", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TD Physics", location: "Class 441", groups: "1" },
        { time: "13:00 - 14:30", course: "TD Analysis", location: "Class 373", groups: "1" }
      ],
      "Monday": [
        { time: "14:30 - 17:30", course: "TP", location: "Lab", groups: "1,2,3,4" }
      ],
      "Tuesday": [
        { time: "8:00 - 9:30", course: "Ethical and Deontological Dimension", location: "Online", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TP Of IT", location: "Lab", groups: "1,3" },
        { time: "13:00 - 14:30", course: "TP Of IT", location: "Lab", groups: "1,3" }
      ],
      "Wednesday": [
        { time: "8:00 - 9:30", course: "TD Algebra", location: "Class 215", groups: "1" },
        { time: "9:40 - 11:10", course: "Algebra Course", location: "Class 238T", groups: "1,2,3,4" }
      ],
      "Thursday": [
        { time: "8:00 - 9:30", course: "TD Chemistry", location: "Class 243", groups: "1" },
        { time: "9:40 - 11:10", course: "TD Physics", location: "Class 243", groups: "1" },
        { time: "11:20 - 12:50", course: "Chemistry Course", location: "Runway G", groups: "1,2,3,4" }
      ]
    }
  },
  "2": {
    name: "Group 2",
    schedule: {
      "Saturday": [
        { time: "8:00 - 9:30", course: "TD Analysis", location: "Class 375", groups: "2" },
        { time: "9:40 - 11:10", course: "TD Chemistry", location: "Class 375", groups: "2" },
        { time: "11:20 - 12:50", course: "Analysis Course", location: "Runway J", groups: "1,2,3,4" }
      ],
      "Sunday": [
        { time: "9:40 - 11:10", course: "Physics Course", location: "Runway P", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TD Physics", location: "Class 443", groups: "2" },
        { time: "13:00 - 14:30", course: "TD Analysis", location: "Class 375", groups: "2" }
      ],
      "Monday": [
        { time: "14:30 - 17:30", course: "TP", location: "Lab", groups: "1,2,3,4" }
      ],
      "Tuesday": [
        { time: "8:00 - 9:30", course: "Ethical and Deontological Dimension", location: "Online", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TP Of IT", location: "Lab", groups: "2,4" },
        { time: "13:00 - 14:30", course: "TP Of IT", location: "Lab", groups: "2,4" }
      ],
      "Wednesday": [
        { time: "8:00 - 9:30", course: "TD Physics", location: "Class 243", groups: "2" },
        { time: "9:40 - 11:10", course: "Algebra Course", location: "Class 238T", groups: "1,2,3,4" }
      ],
      "Thursday": [
        { time: "8:00 - 9:30", course: "TD Chemistry", location: "Class 245", groups: "2" },
        { time: "9:40 - 11:10", course: "TD Algebra", location: "Class 245", groups: "2" },
        { time: "11:20 - 12:50", course: "Chemistry Course", location: "Runway G", groups: "1,2,3,4" }
      ]
    }
  },
  "3": {
    name: "Group 3",
    schedule: {
      "Saturday": [
        { time: "8:00 - 9:30", course: "TD Chemistry", location: "Class 377", groups: "3" },
        { time: "9:40 - 11:10", course: "TD Analysis", location: "Class 377", groups: "3" },
        { time: "11:20 - 12:50", course: "Analysis Course", location: "Runway J", groups: "1,2,3,4" }
      ],
      "Sunday": [
        { time: "9:40 - 11:10", course: "Physics Course", location: "Runway P", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TD Analysis", location: "Class 445", groups: "3" },
        { time: "13:00 - 14:30", course: "TD Physics", location: "Class 377", groups: "3" }
      ],
      "Monday": [
        { time: "14:30 - 17:30", course: "TP", location: "Lab", groups: "1,2,3,4" }
      ],
      "Tuesday": [
        { time: "8:00 - 9:30", course: "Ethical and Deontological Dimension", location: "Online", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TP Of IT", location: "Lab", groups: "1,3" },
        { time: "13:00 - 14:30", course: "TP Of IT", location: "Lab", groups: "1,3" }
      ],
      "Wednesday": [
        { time: "8:00 - 9:30", course: "TD Physics", location: "Class 245", groups: "3" },
        { time: "9:40 - 11:10", course: "Algebra Course", location: "Class 238T", groups: "1,2,3,4" }
      ],
      "Thursday": [
        { time: "8:00 - 9:30", course: "TD Algebra", location: "Class 247", groups: "3" },
        { time: "9:40 - 11:10", course: "TD Chemistry", location: "Class 247", groups: "3" },
        { time: "11:20 - 12:50", course: "Chemistry Course", location: "Runway G", groups: "1,2,3,4" }
      ]
    }
  },
  "4": {
    name: "Group 4",
    schedule: {
      "Saturday": [
        { time: "8:00 - 9:30", course: "TD Chemistry", location: "Class 379", groups: "4" },
        { time: "9:40 - 11:10", course: "TD Analysis", location: "Class 379", groups: "4" },
        { time: "11:20 - 12:50", course: "Analysis Course", location: "Runway J", groups: "1,2,3,4" }
      ],
      "Sunday": [
        { time: "9:40 - 11:10", course: "Physics Course", location: "Runway P", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TD Analysis", location: "Class 449", groups: "4" },
        { time: "13:00 - 14:30", course: "TD Physics", location: "Class 379", groups: "4" }
      ],
      "Monday": [
        { time: "14:30 - 17:30", course: "TP", location: "Lab", groups: "1,2,3,4" }
      ],
      "Tuesday": [
        { time: "8:00 - 9:30", course: "Ethical and Deontological Dimension", location: "Online", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TP Of IT", location: "Lab", groups: "2,4" },
        { time: "13:00 - 14:30", course: "TP Of IT", location: "Lab", groups: "2,4" }
      ],
      "Wednesday": [
        { time: "8:00 - 9:30", course: "TD Algebra", location: "Class 259", groups: "4" },
        { time: "9:40 - 11:10", course: "Algebra Course", location: "Class 238T", groups: "1,2,3,4" }
      ],
      "Thursday": [
        { time: "8:00 - 9:30", course: "TD Physics", location: "Class 265", groups: "4" },
        { time: "9:40 - 11:10", course: "TD Chemistry", location: "Class 265", groups: "4" },
        { time: "11:20 - 12:50", course: "Chemistry Course", location: "Runway G", groups: "1,2,3,4" }
      ]
    }
  }
};
  
  let currentTeacherMode = null;
  let teacherStudentList = [];
  let studentToDeleteIndex = null;
  let crossGroupStudent = null;
  let attendanceStatus = null;

  // Week management data - for BOTH teachers
  let weeksData = {
    "ITCheckListST13G24": {},
    "ITCheckListST13G13": {}
  };
  
  let currentWeek = 1;

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

  // Week delete modal elements
  const deleteWeekModal = document.getElementById('deleteWeekModal');
  const modalWeekInfo = document.getElementById('modalWeekInfo');
  const confirmWeekDeleteBtn = document.getElementById('confirmWeekDelete');
  const cancelWeekDeleteBtn = document.getElementById('cancelWeekDelete');
  let weekToDelete = null;

  // Student elements
  const studentSidebar = document.getElementById('studentSidebar');
  const studentSidebarOverlay = document.getElementById('studentSidebarOverlay');
  const closeStudentSidebar = document.getElementById('closeStudentSidebar');
  const groupButtons = document.getElementById('groupButtons');
  const studentScheduleTable = document.getElementById('studentScheduleTable');
  const studentHamburgerMenu = document.getElementById('studentHamburgerMenu');

  // === HAMBURGER MENU FUNCTIONS ===

  // Show sidebar - for BOTH teacher modes
  function showSidebar() {
    if (sidebar && currentTeacherMode) {
      sidebar.classList.add('active');
      sidebarOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Update sidebar title with teacher name
      const sidebarTitle = document.querySelector('.sidebar h3');
      if (sidebarTitle) {
        sidebarTitle.textContent = `${currentTeacherMode} - Week Management`;
      }
      
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
        if (hamburgerMenu && currentTeacherMode) {
          hamburgerMenu.style.display = 'flex';
        }
      }, 200);
    }
  }

  // === MODAL FUNCTIONS ===

  function showDeleteModal(student, index) {
    studentToDeleteIndex = index;
    
    const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
    modalStudentInfo.innerHTML = `
      <strong>${formattedName} ${formattedPname}</strong><br>
      Section: ${student.SECT} | TP Group: ${student.GRP_TP} | GroupN: ${student.GroupN || 'Not set'}<br>
      Matricule: ${student.MAT}
    `;
    
    deleteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideDeleteModal() {
    deleteModal.classList.remove('active');
    studentToDeleteIndex = null;
    document.body.style.overflow = '';
  }

  function showCrossGroupModal(student) {
    crossGroupStudent = student;
    attendanceStatus = null;
    
    correctTeacherMatricule.value = '';
    correctGroup.value = '';
    attendanceYes.classList.remove('selected');
    attendanceNo.classList.remove('selected');
    saveCrossGroupBtn.disabled = true;
    
    const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
    
    let correctTeacher, warningMessage;

    // Determine correct teacher based on student's GroupN
    if (student.GroupN === "1" || student.GroupN === "3") {
      correctTeacher = "ITCheckListST13G13";
      warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> has GroupN ${student.GroupN} (belongs to Teacher for Groups 1 & 3).`;
    } else if (student.GroupN === "2" || student.GroupN === "4") {
      correctTeacher = "ITCheckListST13G24";
      warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> has GroupN ${student.GroupN} (belongs to Teacher for Groups 2 & 4).`;
    } else {
      // If no GroupN assigned, use old TP group logic as fallback
      if (["A", "B", "C"].includes(student.GRP_TP)) {
        correctTeacher = "ITCheckListST13G13";
        warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> is NOT from Group 2 Or 4.`;
      } else {
        correctTeacher = "ITCheckListST13G24";
        warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> is NOT from Group 1 Or 3.`;
      }
    }
    
    crossGroupMessage.innerHTML = warningMessage;
    crossGroupStudentInfo.innerHTML = `
      <strong>${formattedName} ${formattedPname}</strong><br>
      Section: ${student.SECT} | TP Group: ${student.GRP_TP} | GroupN: ${student.GroupN || 'Not set'}<br>
      Matricule: ${student.MAT}<br>
      <strong>Correct Teacher: ${correctTeacher}</strong>
    `;
    
    correctTeacherMatricule.value = correctTeacher;
    crossGroupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideCrossGroupModal() {
    crossGroupModal.classList.remove('active');
    crossGroupStudent = null;
    attendanceStatus = null;
    document.body.style.overflow = '';
  }

  function checkCrossGroupForm() {
    const teacherValid = teacherMatricules.includes(correctTeacherMatricule.value.trim());
    const groupValid = correctGroup.value.trim().length > 0;
    const attendanceValid = attendanceStatus !== null;
    
    saveCrossGroupBtn.disabled = !(teacherValid && groupValid && attendanceValid);
  }

  // === WEEK MANAGEMENT FUNCTIONS ===

  // Show week menu for BOTH teachers
  function showWeekMenu() {
    if (hamburgerMenu && currentTeacherMode) {
      hamburgerMenu.style.display = 'flex';
      updateWeekButtons();
    } else if (hamburgerMenu) {
      hamburgerMenu.style.display = 'none';
    }
  }

  function hideWeekMenu() {
    if (hamburgerMenu) {
      hamburgerMenu.style.display = 'none';
    }
    hideSidebar();
  }

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
      
      const weekData = teacherWeeks[weekNum];
      const displayName = weekData?.customName || `Week ${weekNum}`;
      weekBtn.textContent = displayName;
      weekBtn.onclick = () => loadWeek(weekNum);
      
      const renameWeekBtn = document.createElement('button');
      renameWeekBtn.className = 'rename-week-btn';
      renameWeekBtn.innerHTML = '✏️';
      renameWeekBtn.title = 'Rename Week';
      renameWeekBtn.onclick = (e) => {
        e.stopPropagation();
        showRenamePopup(weekNum);
      };
      
      const deleteWeekBtn = document.createElement('button');
      deleteWeekBtn.className = 'delete-week-btn';
      deleteWeekBtn.innerHTML = '🗑️';
      deleteWeekBtn.title = 'Delete Week';
      deleteWeekBtn.onclick = (e) => {
        e.stopPropagation();
        deleteWeek(weekNum);
      };
      
      if (weekNumbers.length <= 1 || weekNum === currentWeek) {
        deleteWeekBtn.disabled = true;
      }
      
      weekItemContent.appendChild(weekBtn);
      weekItemContent.appendChild(renameWeekBtn);
      weekItemContent.appendChild(deleteWeekBtn);
      weekItem.appendChild(weekItemContent);
      weekButtons.appendChild(weekItem);
    });
  }

  function showRenamePopup(weekNum) {
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    
    const weekData = weeksData[currentTeacherMode][weekNum] || {};
    const currentName = weekData.customName || `Week ${weekNum}`;
    
    const popup = document.createElement('div');
    popup.className = 'rename-popup';
    
    popup.innerHTML = `
      <h3>Rename Week</h3>
      <div class="rename-input-group">
        <label for="renameWeekInput">New Name:</label>
        <input type="text" id="renameWeekInput" value="${currentName}" placeholder="Enter week name..." />
      </div>
      <div class="popup-buttons">
        <button id="cancelRename">Cancel</button>
        <button id="confirmRename">Rename</button>
      </div>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    const input = document.getElementById('renameWeekInput');
    input.focus();
    input.select();
    
    document.getElementById('cancelRename').onclick = () => {
      document.body.removeChild(overlay);
    };
    
    document.getElementById('confirmRename').onclick = () => {
      confirmRename(weekNum, overlay);
    };
    
    input.onkeypress = (e) => {
      if (e.key === 'Enter') {
        confirmRename(weekNum, overlay);
      }
    };
    
    overlay.onclick = (e) => {
      if (e.target === overlay) {
        document.body.removeChild(overlay);
      }
    };
  }

  function confirmRename(weekNum, overlay) {
    const input = document.getElementById('renameWeekInput');
    const newName = input.value.trim();
    
    if (!newName) {
      alert('Please enter a week name');
      return;
    }
    
    document.body.removeChild(overlay);
    
    if (!weeksData[currentTeacherMode][weekNum]) {
      weeksData[currentTeacherMode][weekNum] = {};
    }
    
    weeksData[currentTeacherMode][weekNum].customName = newName;
    
    saveToLocalStorage();
    updateWeekButtons();
    
    if (weekNum === currentWeek) {
      loadWeek(weekNum);
    } else {
      updateAllWeekDisplays(weekNum, newName);
    }
    
    result.innerHTML = `<div class="teacher-mode">✅ Week renamed to "${newName}"</div>`;
  }

  function updateAllWeekDisplays(weekNum, weekName) {
    if (weekNum === currentWeek) {
      if (document.title.includes('Week')) {
        document.title = document.title.replace(/Week\s*\d+/, weekName);
      }
      
      const weekHeadings = document.querySelectorAll('h1, h2, h3, h4, .week-display, .current-week');
      weekHeadings.forEach(element => {
        if (element.textContent.includes('Week')) {
          element.textContent = element.textContent.replace(/Week\s*\d+/, weekName);
        }
      });
      
      if (result.innerHTML.includes('Week')) {
        result.innerHTML = result.innerHTML.replace(/Week\s*\d+/g, weekName);
      }
      
      const sidebarTitle = document.querySelector('.sidebar h3');
      if (sidebarTitle && sidebarTitle.textContent.includes('Week')) {
        sidebarTitle.textContent = sidebarTitle.textContent.replace(/Week\s*\d+/, weekName);
      }
    }
  }

  function loadWeek(weekNumber) {
    if (!currentTeacherMode) return;
    
    currentWeek = weekNumber;
    const weekData = weeksData[currentTeacherMode][weekNumber] || [];
    
    const displayName = weekData.customName || `Week ${weekNumber}`;
    
    updateAllWeekDisplays(weekNumber, displayName);
    
    displayTeacherList();
    updateWeekButtons();
  }

  function displayTeacherData(weekData) {
    if (!result) return;
    
    const displayName = weekData.customName || `Week ${currentWeek}`;
    
    let html = `<div class="teacher-mode">
      <h3>${displayName} - Students List</h3>`;
    
    if (!weekData || weekData.length === 0) {
      html += `<p>No students added for this week yet.</p>`;
    } else {
      html += `
        <table class="teacher-list">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Group</th>
              <th>Attendance</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>`;
      
      weekData.forEach((student, index) => {
        const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
        const itGroup = student.customGroup || student.GRP_TP;
        const inWrongGroup = isStudentInWrongGroup(student);
        
        html += `
          <tr>
            <td>${formattedName} ${formattedPname}</td>
            <td>
              <input type="text" 
                     class="group-input" 
                     value="${itGroup}" 
                     data-index="${index}"
                     placeholder="Group">
            </td>
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
      
      html += `
          </tbody>
        </table>`;
    }
    
    html += `</div>`;
    result.innerHTML = html;
    
    addTableEventListeners();
  }

  function addTableEventListeners() {
    result.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const weekData = weeksData[currentTeacherMode][currentWeek];
        if (weekData && weekData[index]) {
          weekData[index].present = this.checked;
          saveToLocalStorage();
        }
      });
    });
    
    result.querySelectorAll('.group-input').forEach(input => {
      input.addEventListener('change', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const weekData = weeksData[currentTeacherMode][currentWeek];
        if (weekData && weekData[index]) {
          weekData[index].customGroup = this.value;
          saveToLocalStorage();
        }
      });
    });
    
    result.querySelectorAll('.remove-note').forEach(button => {
      button.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const weekData = weeksData[currentTeacherMode][currentWeek];
        if (weekData && weekData[index]) {
          weekData[index].note = '';
          saveToLocalStorage();
          displayTeacherData(weekData);
        }
      });
    });
    
    result.querySelectorAll('.delete-button').forEach(button => {
      button.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const weekData = weeksData[currentTeacherMode][currentWeek];
        if (weekData && weekData[index]) {
          const student = weekData[index];
          showDeleteModal(student, index);
        }
      });
    });
  }

  function saveToLocalStorage() {
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
  }

  function addWeek() {
    if (!currentTeacherMode) return;
    
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    const weekNumbers = Object.keys(teacherWeeks).map(Number).sort((a, b) => a - b);
    const newWeekNumber = weekNumbers.length > 0 ? Math.max(...weekNumbers) + 1 : 1;
    
    const newWeekData = {
      customName: `Week ${newWeekNumber}`,
      students: []
    };
    
    if (!weeksData[currentTeacherMode]) {
      weeksData[currentTeacherMode] = {};
    }
    
    weeksData[currentTeacherMode][newWeekNumber] = newWeekData;
    currentWeek = newWeekNumber;
    teacherStudentList = [];
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    updateWeekButtons();
    
    displayTeacherList();
    
    result.innerHTML = `<div class="teacher-mode">✅ Week ${newWeekNumber} created successfully!</div>`;
  }

  function deleteWeek(weekNumber) {
    if (!currentTeacherMode) return;
    
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    const weekNumbers = Object.keys(teacherWeeks).map(Number).sort((a, b) => a - b);
    
    if (weekNumbers.length <= 1) {
      alert("Cannot delete the only week!");
      return;
    }
    
    showDeleteWeekModal(weekNumber);
  }

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

  function hideDeleteWeekModal() {
    deleteWeekModal.classList.remove('active');
    weekToDelete = null;
    document.body.style.overflow = '';
  }

  function confirmWeekDelete() {
    if (!weekToDelete) return;
    
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    
    delete weeksData[currentTeacherMode][weekToDelete];
    
    if (weekToDelete === currentWeek) {
      const remainingWeeks = Object.keys(weeksData[currentTeacherMode]).map(Number).sort((a, b) => a - b);
      currentWeek = remainingWeeks[0] || 1;
      loadWeek(currentWeek);
    }
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    
    updateWeekButtons();
    
    result.innerHTML = `<div class="teacher-mode">🗑️ Week ${weekToDelete} deleted successfully!</div>`;
    hideDeleteWeekModal();
  }

  function saveCurrentWeek() {
    if (!currentTeacherMode) {
      alert("Please activate teacher mode first!");
      return;
    }
    
    const crossGroupStudents = teacherStudentList.filter(student => 
      isStudentInWrongGroup(student)
    );
    
    if (crossGroupStudents.length > 0) {
      showCrossGroupModal(crossGroupStudents[0]);
      return;
    }
    
    if (!weeksData[currentTeacherMode]) {
      weeksData[currentTeacherMode] = {};
    }
    
    const currentWeekData = weeksData[currentTeacherMode][currentWeek];
    const currentCustomName = currentWeekData?.customName || `Week ${currentWeek}`;
    
    weeksData[currentTeacherMode][currentWeek] = {
      customName: currentCustomName,
      students: teacherStudentList
    };
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    result.innerHTML = `<div class="teacher-mode">✅ ${currentCustomName} saved successfully!</div>`;
  }

  // === UTILITY FUNCTIONS ===

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

// === MODE MANAGEMENT FUNCTIONS ===

function activateTeacherMode(teacherMatricule) {
  // Deactivate student mode first
  deactivateStudentMode();
  
  // Activate teacher mode
  currentTeacherMode = teacherMatricule;
  
  // Initialize teacherStudentList from current week data
  const currentWeekData = weeksData[currentTeacherMode]?.[currentWeek];
  if (currentWeekData && currentWeekData.students) {
    teacherStudentList = currentWeekData.students;
  } else {
    teacherStudentList = [];
  }
  
  result.innerHTML = `<div class="teacher-mode">🎓 Teacher Mode Activated (${teacherMatricule})</div>`;
  searchInput.value = '';
  searchInput.placeholder = "Enter student matricule";
  teacherInputs.style.display = 'flex';
  
  // Show teacher hamburger button
  showWeekMenu();
  loadWeek(currentWeek);
  
  // Hide student elements
  if (studentHamburgerMenu) {
    studentHamburgerMenu.style.display = 'none';
  }
  
  // Clear student schedule display
  const studentScheduleDisplay = document.getElementById('studentScheduleDisplay');
  if (studentScheduleDisplay) {
    studentScheduleDisplay.remove();
  }
  
  currentStudent = null;
}

function activateStudentMode(student) {
  // Deactivate teacher mode first
  deactivateTeacherMode();
  
  // Activate student mode
  currentStudent = student;
  
  // Clear teacher elements
  teacherInputs.style.display = 'none';
  teacherListContainer.innerHTML = '';
  
  // Hide teacher hamburger
  if (hamburgerMenu) {
    hamburgerMenu.style.display = 'none';
  }
  
  // Show student hamburger button
  if (studentHamburgerMenu) {
    studentHamburgerMenu.style.display = 'flex';
  }
  
  // Display student results
  displayStudentResults(student);
}

function deactivateTeacherMode() {
  currentTeacherMode = null;
  teacherStudentList = [];
  teacherInputs.style.display = 'none';
  teacherListContainer.innerHTML = '';
  
  // Hide teacher hamburger
  if (hamburgerMenu) {
    hamburgerMenu.style.display = 'none';
  }
  
  // Close teacher sidebar if open
  hideSidebar();
}

function deactivateStudentMode() {
  currentStudent = null;
  
  // Hide student hamburger
  if (studentHamburgerMenu) {
    studentHamburgerMenu.style.display = 'none';
  }
  
  // Close student sidebar if open
  hideStudentSidebar();
  
  // Clear student schedule display
  const studentScheduleDisplay = document.getElementById('studentScheduleDisplay');
  if (studentScheduleDisplay) {
    studentScheduleDisplay.remove();
  }
}
  function formatNameForTeacher(name, pname) {
    const formattedName = name.toUpperCase();
    const formattedPname = pname.charAt(0).toUpperCase() + pname.slice(1).toLowerCase();
    return { formattedName, formattedPname };
  }

  // Get correct teacher for student based ONLY on GroupN
  function getCorrectTeacherForStudent(student) {
    // ONLY use GroupN - completely ignore TP groups
    if (student.GroupN === "1" || student.GroupN === "3") {
      return "ITCheckListST13G13";
    } else if (student.GroupN === "2" || student.GroupN === "4") {
      return "ITCheckListST13G24";
    }
    
    // If no GroupN assigned yet, no restrictions
    return null;
  }

  // Check if student is in wrong group for current teacher
  function isStudentInWrongGroup(student) {
    const correctTeacher = getCorrectTeacherForStudent(student);
    // Only check if GroupN is assigned, otherwise no restrictions
    return correctTeacher !== null && correctTeacher !== currentTeacherMode;
  }

  // === STUDENT MANAGEMENT FUNCTIONS ===

  function deleteStudent(index) {
    teacherStudentList.splice(index, 1);
    displayTeacherList();
    result.innerHTML = `<div class="teacher-mode">🗑️ Student removed from the table</div>`;
  }

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
    
    if (!weeksData[correctTeacher][currentWeek].some(s => s.MAT === correctedStudent.MAT)) {
      weeksData[correctTeacher][currentWeek].push(correctedStudent);
    }
    
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

  function displayTeacherList() {
    if (!teacherListContainer) return;
    
    teacherListContainer.innerHTML = '';
    
    if (teacherStudentList.length === 0) {
      return;
    }
    
    const displayName = weeksData[currentTeacherMode]?.[currentWeek]?.customName || `Week ${currentWeek}`;
    
    let tableHTML = `
      <h2>📋 Student List - ${displayName}</h2>
      <table class="teacher-list">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PNAME</th>
            <th>SECTION</th>
            <th>TP GROUP</th>
            <th>GROUP N</th>
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
      const inWrongGroup = isStudentInWrongGroup(student);
      
      tableHTML += `
        <tr>
          <td>${formattedName}</td>
          <td>${formattedPname}</td>
          <td>${student.SECT}</td>
          <td>${student.GRP_TP}</td>
          <td>
            <input type="text" 
                   class="group-input" 
                   value="${student.GroupN || ''}"
                   data-index="${index}"
                   placeholder="Group N">
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
    
    teacherListContainer.querySelectorAll('.group-input').forEach(input => {
      input.addEventListener('change', function() {
        const index = this.getAttribute('data-index');
        teacherStudentList[index].GroupN = this.value;
        teacherStudentList[index].customGroup = this.value;
        
        const weekData = weeksData[currentTeacherMode][currentWeek];
        if (weekData && weekData.students && weekData.students[index]) {
          weekData.students[index].GroupN = this.value;
          weekData.students[index].customGroup = this.value;
          localStorage.setItem('weeksData', JSON.stringify(weeksData));
        }
      });
    });
    
    teacherListContainer.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const index = this.getAttribute('data-index');
        teacherStudentList[index].present = this.checked;
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
      activateTeacherMode(mat);
      return;
    }

    const student = data.find(s => s.MAT === mat);
    if (!student) {
      result.textContent = `❌ No student found with matricule "${mat}".`;
      return;
    }

    // If we're in teacher mode and found a student, add to teacher list
    if (currentTeacherMode) {
      // Get current students from BOTH data structures to check for duplicates
      const currentWeekData = weeksData[currentTeacherMode]?.[currentWeek];
      let currentStudents = [];
      
      if (currentWeekData) {
        if (Array.isArray(currentWeekData)) {
          // Old structure
          currentStudents = currentWeekData;
        } else if (currentWeekData.students) {
          // New structure
          currentStudents = currentWeekData.students;
        }
      }
      
      // Also check teacherStudentList as backup
      if (currentStudents.length === 0) {
        currentStudents = teacherStudentList;
      }
      
      // Check if student already exists in the current week
      const alreadyExists = currentStudents.some(s => s.MAT === student.MAT);
      
      if (alreadyExists) {
        const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
        result.innerHTML = `
          <div class="teacher-mode">
            ⚠️ <strong>Student already in table!</strong><br>
            ${formattedName} ${formattedPname} is already in the current week's list.<br>
            Please search for a different student.
          </div>
        `;
      } else {
        const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
        
        result.innerHTML = `
          <div class="teacher-mode">
            ✅ Found: ${formattedName} ${formattedPname} | Section ${student.SECT} | TP Group: ${student.GRP_TP}<br>
            Enter <strong>GroupN (1, 2, 3, or 4)</strong> and click "Add Student"<br>
            <small>Note: GroupN is independent from TP Group</small>
          </div>
        `;
        
        window.currentStudentToAdd = student;
      }
    } else {
      // Activate student mode
      activateStudentMode(student);
    }
  }

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
    
    if (!["1", "2", "3", "4"].includes(groupInputValue)) {
      result.innerHTML = `
        <div class="teacher-mode" style="border: 2px solid #ff4444; background: #ffeaea; padding: 15px; border-radius: 8px;">
          🚫 <strong>INVALID GROUP NUMBER!</strong><br><br>
          Please enter a valid GroupN: <strong>1, 2, 3, or 4</strong><br>
          You entered: <strong>${groupInputValue}</strong>
        </div>
      `;
      return;
    }
    
    const studentToAdd = {
      ...window.currentStudentToAdd,
      GroupN: groupInputValue,
      customGroup: groupInputValue,
      present: false
    };
    
    const correctTeacher = getCorrectTeacherForStudent(studentToAdd);
    const isWrongTeacher = correctTeacher !== null && correctTeacher !== currentTeacherMode;
    
    if (isWrongTeacher) {
      const { formattedName, formattedPname } = formatNameForTeacher(studentToAdd.NAME, studentToAdd.PNAME);
      let correctTeacherName = "";
      
      if (correctTeacher === "ITCheckListST13G24") {
        correctTeacherName = "Teacher for Groups 2 & 4 (ITCheckListST13G24)";
      } else if (correctTeacher === "ITCheckListST13G13") {
        correctTeacherName = "Teacher for Groups 1 & 3 (ITCheckListST13G13)";
      }

      result.innerHTML = `
        <div class="teacher-mode" style="border: 2px solid #ff4444; background: #ffeaea; padding: 15px; border-radius: 8px;">
          🚫 <strong>This Table Is for Group 1 Or 3 Students</strong><br><br>
          You tried to add a student with <strong>GroupN ${groupInputValue}</strong><br>
          Please switch to the correct teacher table.
        </div>
      `;
      window.currentStudentToAdd = null;
      return;
    }
    
    const currentWeekData = weeksData[currentTeacherMode]?.[currentWeek];
    let currentStudents = [];
    
    if (currentWeekData) {
      if (Array.isArray(currentWeekData)) {
        currentStudents = currentWeekData;
      } else if (currentWeekData.students) {
        currentStudents = currentWeekData.students;
      }
    }
    
    const alreadyExists = currentStudents.some(s => s.MAT === window.currentStudentToAdd.MAT);
    
    if (alreadyExists) {
      const { formattedName, formattedPname } = formatNameForTeacher(window.currentStudentToAdd.NAME, window.currentStudentToAdd.PNAME);
      result.innerHTML = `
        <div class="teacher-mode">
          ⚠️ <strong>Cannot add duplicate student!</strong><br>
          ${formattedName} ${formattedPname} is already in the table.<br>
          Please search for a different student.
        </div>
      `;
      window.currentStudentToAdd = null;
      return;
    }
    
    teacherStudentList.push(studentToAdd);
    
    if (!weeksData[currentTeacherMode]) {
      weeksData[currentTeacherMode] = {};
    }
    
    const currentWeekDataUpdated = weeksData[currentTeacherMode][currentWeek];
    if (currentWeekDataUpdated && currentWeekDataUpdated.students) {
      currentWeekDataUpdated.students.push(studentToAdd);
    } else {
      const displayName = currentWeekDataUpdated?.customName || `Week ${currentWeek}`;
      weeksData[currentTeacherMode][currentWeek] = {
        customName: displayName,
        students: [studentToAdd]
      };
    }
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    
    displayTeacherList();
    
    const { formattedName, formattedPname } = formatNameForTeacher(studentToAdd.NAME, studentToAdd.PNAME);
    
    result.innerHTML = `<div class="teacher-mode">
      ✅ Added: ${formattedName} ${formattedPname} | Section ${studentToAdd.SECT} | GroupN: ${groupInputValue} | ${studentToAdd.MAT}
    </div>`;
    
    searchInput.value = '';
    groupInput.value = '';
    window.currentStudentToAdd = null;
  }

function displayStudentResults(student) {
    const labInfo = getLabInfo(student.GRP_TP);
    const info = `${student.NAME} ${student.PNAME} — Section ${student.SECT} — Group ${student.GRP_TP}`;
    const lines = info.split('—').map(s => s.trim());
    
    result.innerHTML = lines.map((line, i) =>
        `<p class="result-line" style="animation-delay:${i * 0.4}s">${line}</p>`).join('');
    
    result.innerHTML += `<p class="result-line" style="animation-delay:${lines.length * 0.4}s">Matricule: ${student.MAT}</p>`;
    result.innerHTML += `<p class="result-line" style="animation-delay:${(lines.length + 1) * 0.4}s">🧪 Chemistry Lab: ${labInfo.chemistryLab}</p>`;
    result.innerHTML += `<p class="result-line" style="animation-delay:${(lines.length + 2) * 0.4}s">⚛️ Physics Lab: ${labInfo.physicsLab}</p>`;
    
}

  // === STUDENT SIDEBAR FUNCTIONS ===

  function showStudentSidebar() {
    if (studentSidebar && currentStudent) {
      studentSidebar.classList.add('active');
      studentSidebarOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function hideStudentSidebar() {
    if (studentSidebar) {
      studentSidebar.classList.remove('active');
      studentSidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

function loadGroupSchedule(groupNumber) {
  const groupData = scheduleData[groupNumber];
  if (!groupData) return;
  
  // Use the current student's GRP_TP for Monday TP, not derived from group number
  const tpGroup = currentStudent ? currentStudent.GRP_TP : "A";
  const nextMondayTP = getNextLabDateAndType(tpGroup);
  
  let html = `<h3>📚 Weekly Schedule for ${groupData.name}</h3>`;
  
  const timeSlots = [
    "8:00 - 9:30",
    "9:40 - 11:10", 
    "11:20 - 12:50",
    "13:00 - 14:30",
    "14:30 - 17:30"
  ];
  
  const daysOrder = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  
  html += `
    <div class="timetable">
      <table class="schedule-table">
        <thead>
          <tr>
            <th class="day-header">Day/Time</th>
  `;
  
  timeSlots.forEach(timeSlot => {
    html += `<th class="time-header">${timeSlot}</th>`;
  });
  
  html += `
          </tr>
        </thead>
        <tbody>
  `;
  
  daysOrder.forEach(day => {
    html += `<tr><td class="day-cell">${day}</td>`;
    
    const daySchedule = groupData.schedule[day] || [];
    
    timeSlots.forEach(timeSlot => {
      const session = daySchedule.find(s => s.time === timeSlot);
      
      if (session) {
        let displayText = `${session.course}<br><small>${session.location}</small>`;
        
        if (day === "Monday" && timeSlot === "14:30 - 17:30" && session.course === "TP") {
          displayText = `
            <strong>${nextMondayTP.displayName}</strong><br>
            <small>${session.location}</small>
            <div class="small-tp-timer" id="schedule-monday-tp-timer-${groupNumber}">
              <div class="small-timer-label">⏰ Next Session</div>
              <div class="small-timer-display">--:--:--</div>
            </div>
          `;
        } else if (day === "Tuesday" && (timeSlot === "11:20 - 12:50" || timeSlot === "13:00 - 14:30") && session.course.includes('TP Of IT') && session.groups.includes(groupNumber)) {
          displayText = `
            <div class="tp-it-note">⏰ Start At 12:30</div>
            <strong>${session.course}</strong><br>
            <small>${session.location}</small>
            <div class="small-tp-timer" id="schedule-tp-it-timer-${groupNumber}">
              <div class="small-timer-label">⏰ Next Session</div>
              <div class="small-timer-display">--:--:--</div>
            </div>
          `;
        }
        
        html += `<td class="session-cell">${displayText}</td>`;
      } else {
        html += `<td class="empty-cell">/</td>`;
      }
    });
    
    html += `</tr>`;
  });
  
  html += `
        </tbody>
      </table>
    </div>
    
    <div class="small-timers-summary">
      <h4>⏰ Upcoming TP Sessions</h4>
      <div id="smallTimersContainer-${groupNumber}"></div>
    </div>
  `;
  
  existingSchedule.innerHTML = html;
  
  const timers = initializeScheduleTPTimers(groupNumber);
  const timersContainer = document.getElementById(`smallTimersContainer-${groupNumber}`);
  if (timersContainer) {
    timersContainer.innerHTML = timers.mondayTP + timers.tpIt;
  }
  
  setTimeout(() => {
    startSmallTPTimers(groupNumber);
    
    const mondayTP = getNextLabDateAndType(tpGroup);
    startSingleSmallTimer(`schedule-monday-tp-timer-${groupNumber}`, mondayTP.date, mondayTP.displayName, groupNumber);
    
    if (groupData.schedule["Tuesday"]?.some(s => s.course.includes('TP Of IT') && s.groups.includes(groupNumber))) {
      startSingleSmallTimer(`schedule-tp-it-timer-${groupNumber}`, getNextTPOfITDate(groupNumber), 'TP Of IT', groupNumber);
    }
  }, 100);
  
  hideStudentSidebar();
}

  function startStudentHamburgerAnimation() {
    if (!studentHamburgerMenu) return;

    let animationId;
    let isAnimating = false;

    studentHamburgerMenu.addEventListener('mouseenter', function() {
      if (isAnimating) return;
      isAnimating = true;
      animateStudent();
    });

    studentHamburgerMenu.addEventListener('mouseleave', function() {
      isAnimating = false;
      cancelAnimationFrame(animationId);
      
      const leftLeg = studentHamburgerMenu.querySelector('.left-leg');
      const rightLeg = studentHamburgerMenu.querySelector('.right-leg');
      const leftHand = studentHamburgerMenu.querySelector('.left-hand');
      const rightHand = studentHamburgerMenu.querySelector('.right-hand');
      const bodyLine = studentHamburgerMenu.querySelector('.body-line');
      const headLine = studentHamburgerMenu.querySelector('.head-line');
      
      if (leftLeg) leftLeg.style.transform = 'rotate(0deg)';
      if (rightLeg) rightLeg.style.transform = 'rotate(0deg)';
      if (leftHand) leftHand.style.transform = 'rotate(0deg)';
      if (rightHand) rightHand.style.transform = 'rotate(0deg)';
      if (bodyLine) bodyLine.style.transform = 'translateX(-50%) rotate(0deg)';
      if (headLine) headLine.style.transform = 'translateX(-50%) rotate(0deg)';
    });

    function animateStudent() {
      if (!isAnimating) return;

      const time = Date.now() * 0.005;
      const leftLeg = studentHamburgerMenu.querySelector('.left-leg');
      const rightLeg = studentHamburgerMenu.querySelector('.right-leg');
      const leftHand = studentHamburgerMenu.querySelector('.left-hand');
      const rightHand = studentHamburgerMenu.querySelector('.right-hand');
      const bodyLine = studentHamburgerMenu.querySelector('.body-line');
      const headLine = studentHamburgerMenu.querySelector('.head-line');

      if (leftLeg) leftLeg.style.transform = `rotate(${Math.sin(time) * 25}deg)`;
      if (rightLeg) rightLeg.style.transform = `rotate(${-Math.sin(time) * 25}deg)`;

      if (leftHand) leftHand.style.transform = `rotate(${Math.sin(time + 1) * 8}deg)`;
      if (rightHand) rightHand.style.transform = `rotate(${-Math.sin(time + 1) * 8}deg)`;

      if (bodyLine) bodyLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5) * 2}deg)`;
      if (headLine) headLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5 + 0.5) * 1.5}deg)`;

      animationId = requestAnimationFrame(animateStudent);
    }
  }

  // === EVENT LISTENERS ===

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

  // Hamburger menu events - available for BOTH teacher modes
  if (hamburgerMenu) {
    // Hide hamburger by default
    hamburgerMenu.style.display = 'none';
    
    hamburgerMenu.addEventListener('click', function() {
      // Only work if teacher mode is active (BOTH teachers)
      if (currentTeacherMode) {
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

  if (addWeekButton) {
    addWeekButton.addEventListener('click', addWeek);
  }

  if (searchButton) {
    searchButton.addEventListener('click', searchInfo);
  }

  if (addStudentButton) {
    addStudentButton.addEventListener('click', addStudentWithGroup);
  }

  if (saveButton) {
    saveButton.addEventListener('click', saveCurrentWeek);
  }
  
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

  if (confirmWeekDeleteBtn) {
    confirmWeekDeleteBtn.addEventListener('click', confirmWeekDelete);
  }

  if (cancelWeekDeleteBtn) {
    cancelWeekDeleteBtn.addEventListener('click', hideDeleteWeekModal);
  }

  if (deleteWeekModal) {
    deleteWeekModal.addEventListener('click', (e) => {
      if (e.target === deleteWeekModal) hideDeleteWeekModal();
    });
  }

  // Student event listeners
  if (closeStudentSidebar) {
    closeStudentSidebar.addEventListener('click', hideStudentSidebar);
  }

  if (studentSidebarOverlay) {
    studentSidebarOverlay.addEventListener('click', hideStudentSidebar);
  }

  if (studentHamburgerMenu) {
    studentHamburgerMenu.addEventListener('click', function() {
      if (currentStudent) {
        showStudentSidebar();
      }
    });
  }

// Add click events for group buttons
document.querySelectorAll('.group-btn').forEach(button => {
  button.addEventListener('click', function() {
    const groupNumber = this.getAttribute('data-group');
    loadGroupSchedule(groupNumber);
  });
});

  // Start student hamburger animation
  if (studentHamburgerMenu) {
    startStudentHamburgerAnimation();
  }

  // Load saved data from localStorage
  const savedWeeksData = localStorage.getItem('weeksData');
  if (savedWeeksData) {
    weeksData = JSON.parse(savedWeeksData);
  }

  // Start teacher hamburger animation
  startHamburgerAnimation();
    // Initialize both hamburger menus as hidden
  if (hamburgerMenu) {
    hamburgerMenu.style.display = 'none';
  }

  if (studentHamburgerMenu) {
    studentHamburgerMenu.style.display = 'none';
  }
});

// Walking animation for hamburger menu
function startHamburgerAnimation() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  if (!hamburgerMenu) return;

  let animationId;
  let isAnimating = false;

  hamburgerMenu.addEventListener('mouseenter', function() {
    if (isAnimating) return;
    isAnimating = true;
    animate();
  });

  hamburgerMenu.addEventListener('mouseleave', function() {
    isAnimating = false;
    cancelAnimationFrame(animationId);
    
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

  function animate() {
    if (!isAnimating) return;

    const time = Date.now() * 0.005;
    const leftLeg = hamburgerMenu.querySelector('.left-leg');
    const rightLeg = hamburgerMenu.querySelector('.right-leg');
    const leftHand = hamburgerMenu.querySelector('.left-hand');
    const rightHand = hamburgerMenu.querySelector('.right-hand');
    const bodyLine = hamburgerMenu.querySelector('.body-line');
    const headLine = hamburgerMenu.querySelector('.head-line');

    if (leftLeg) leftLeg.style.transform = `rotate(${Math.sin(time) * 25}deg)`;
    if (rightLeg) rightLeg.style.transform = `rotate(${-Math.sin(time) * 25}deg)`;

    if (leftHand) leftHand.style.transform = `rotate(${Math.sin(time + 1) * 8}deg)`;
    if (rightHand) rightHand.style.transform = `rotate(${-Math.sin(time + 1) * 8}deg)`;

    if (bodyLine) bodyLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5) * 2}deg)`;
    if (headLine) headLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5 + 0.5) * 1.5}deg)`;

    animationId = requestAnimationFrame(animate);
  }
}


function getNextTPOfITDate(groupNumber) {
    const now = new Date();
    const targetDay = 2; // Tuesday
    const targetHour = 12; // 12:30 PM
    const targetMinute = 30;
    
    // Find next Tuesday 12:30 PM
    let nextDate = new Date(now);
    nextDate.setDate(now.getDate() + ((7 + targetDay - now.getDay()) % 7));
    nextDate.setHours(targetHour, targetMinute, 0, 0);
    
    // If we've passed this Tuesday 12:30 PM, go to next Tuesday
    if (nextDate <= now) {
        nextDate.setDate(nextDate.getDate() + 7);
    }
    
    // Groups 2 & 4: this week, Groups 1 & 3: next week
    if (groupNumber === "1" || groupNumber === "3") {
        nextDate.setDate(nextDate.getDate() + 7);
    }
    
    return nextDate;
}


function createTPOfITTimerHTML(groupNumber, targetDate) {
    return `
        <div class="tp-it-timer-container">
            <div class="tp-it-timer-header">
                📅 Next TP Of IT (Group ${groupNumber})
            </div>
            <div class="countdown-timer-tp-it" id="tp-it-timer-${groupNumber}">
                <div class="tp-it-time-display">00W:00D:00H:00M:00S</div>
            </div>
        </div>
    `;
}


function startSingleTPOfITTimer(timerId, targetDate) {
    function updateTimer() {
        const now = new Date();
        const timeDiff = targetDate - now;
        
        if (timeDiff <= 0) {
            const groupNumber = timerId.split('-')[3];
            targetDate = getNextTPOfITDate(groupNumber);
            updateTimer();
            return;
        }
        
        const weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        const timeDisplay = `${weeks.toString().padStart(2, '0')}W:${days.toString().padStart(2, '0')}D:${hours.toString().padStart(2, '0')}H:${minutes.toString().padStart(2, '0')}M:${seconds.toString().padStart(2, '0')}S`;
        
        const timerElement = document.getElementById(timerId);
        if (timerElement) {
            const displayElement = timerElement.querySelector('.tp-it-time-display');
            if (displayElement) {
                displayElement.textContent = timeDisplay;
                timerElement.classList.toggle('warning', days === 0 && hours < 24);
            }
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Enhanced function to get next lab date with type
function getNextLabDateAndType(grpTP) {
    const now = new Date();
    const targetDay = 1; // Monday
    const targetHour = 14; // 2:30 PM
    const targetMinute = 30;
    
    let nextDate = new Date(now);
    nextDate.setDate(now.getDate() + ((7 + targetDay - now.getDay()) % 7));
    nextDate.setHours(targetHour, targetMinute, 0, 0);
    
    if (nextDate <= now) {
        nextDate.setDate(nextDate.getDate() + 7);
    }
    
    // Determine lab type based ONLY on GRP_TP
    let labType;
    if (["A", "B", "C"].includes(grpTP)) {
        labType = 'physics';
    } else {
        labType = 'chemistry';
    }
    
    return {
        date: nextDate,
        type: labType,
        displayName: labType === 'physics' ? 'Physics Lab' : 'Chemistry Lab'
    };
}

// === Small TP Timers for Dynamic Monday TP ===

function initializeScheduleTPTimers(groupNumber) {
    const tpGroup = currentStudent ? currentStudent.GRP_TP : "A";
    const nextLab = getNextLabDateAndType(tpGroup);
    const tpItDate = getNextTPOfITDate(groupNumber);
    
    return {
        mondayTP: createSmallTimerHTML('monday-tp', nextLab.date, groupNumber, nextLab.displayName),
        tpIt: createSmallTimerHTML('tp-it', tpItDate, groupNumber, 'TP Of IT')
    };
}

function createSmallTimerHTML(type, targetDate, groupNumber, displayName) {
    const timerId = `small-${type}-timer-${groupNumber}`;
    const icons = {
        'monday-tp': '🔬',
        'tp-it': '💻'
    };
    
    return `
        <div class="small-tp-timer small-${type}-timer" id="${timerId}">
            <div class="small-timer-label">${icons[type]} Next ${displayName}</div>
            <div class="small-timer-display">--:--:--</div>
        </div>
    `;
}

function startSmallTPTimers(groupNumber) {
    const tpGroup = currentStudent ? currentStudent.GRP_TP : "A";
    const nextLab = getNextLabDateAndType(tpGroup);
    const tpItDate = getNextTPOfITDate(groupNumber);
    
    startSingleSmallTimer(`small-monday-tp-timer-${groupNumber}`, nextLab.date, nextLab.displayName, groupNumber);
    startSingleSmallTimer(`small-tp-it-timer-${groupNumber}`, tpItDate, 'TP Of IT', groupNumber);
}

function startSingleSmallTimer(timerId, targetDate, displayName, groupNumber) {
    function updateTimer() {
        const now = new Date();
        const timeDiff = targetDate - now;
        
        if (timeDiff <= 0) {
            const parts = timerId.split('-');
            const type = parts[1];
            
            if (type === 'monday-tp') {
                const tpGroup = currentStudent ? currentStudent.GRP_TP : "A";
                const nextLab = getNextLabDateAndType(tpGroup);
                targetDate = nextLab.date;
                displayName = nextLab.displayName;
                
                const timerElement = document.getElementById(timerId);
                if (timerElement) {
                    const labelElement = timerElement.querySelector('.small-timer-label');
                    if (labelElement) {
                        labelElement.textContent = `🔬 Next ${displayName}`;
                    }
                }
            } else if (type === 'tp-it') {
                targetDate = getNextTPOfITDate(groupNumber);
            }
            updateTimer();
            return;
        }
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        
        const timeDisplay = `${days}d ${hours}h ${minutes}m`;
        
        const timerElement = document.getElementById(timerId);
        if (timerElement) {
            const displayElement = timerElement.querySelector('.small-timer-display');
            if (displayElement) {
                displayElement.textContent = timeDisplay;
                timerElement.classList.toggle('warning', days === 0 && hours < 24);
            }
        }
    }
    function startSingleSmallTimer(timerId, targetDate, displayName, groupNumber) {
    function updateTimer() {
        const now = new Date();
        const timeDiff = targetDate - now;
        
        if (timeDiff <= 0) {
            const parts = timerId.split('-');
            const type = parts[1];
            
            if (type === 'monday-tp') {
                const tpGroup = currentStudent ? currentStudent.GRP_TP : "A";
                const nextLab = getNextLabDateAndType(tpGroup);
                targetDate = nextLab.date;
                displayName = nextLab.displayName;
                
                const timerElement = document.getElementById(timerId);
                if (timerElement) {
                    const labelElement = timerElement.querySelector('.small-timer-label');
                    if (labelElement) {
                        labelElement.textContent = `🔬 Next ${displayName}`;
                    }
                }
            } else if (type === 'tp-it') {
                targetDate = getNextTPOfITDate(groupNumber);
            }
            updateTimer();
            return;
        }
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        
        const timeDisplay = `${days}d ${hours}h ${minutes}m`;
        
        const timerElement = document.getElementById(timerId);
        if (timerElement) {
            const displayElement = timerElement.querySelector('.small-timer-display');
            if (displayElement) {
                displayElement.textContent = timeDisplay;
                timerElement.classList.toggle('warning', days === 0 && hours < 24);
            }
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 60000);
}
}




