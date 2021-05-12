const SystemRoles=[
    {
        rolename: 'Administrator Raportów Różnic ',
        permissions: ['AC202','AC5','AC201', 'AC203']
    },

    {
        rolename:'Administrator użytkowników ',
        permissions: ['AC104','AC101','AC25','AC17','AC103','AC3','AC18','AC204','AC23','AC24',
        'AC2','AC27','AC184','AC22','AC102','AC14',]
    },

    {
        rolename: 'Administrator paczek ',
        permissions: ['AC5','AC9']
    },
    
    {
        rolename:'Administrator przewoźników ',
        permissions: ['AC162','AC163','AC159','AC161','AC160']
    },
       
    {
        rolename:'Administrator oświadczeń ',
        permissions: ['AC196','AC199','AC197','AC198']
    },
     
    {
        rolename:'Odbieranie Paczek ',
        permissions: ['PDA31','PDA28','PDA29','PDA35']
    },
     
    {
        rolename:'Administrator pracowników Szybkiej Paczki ',
        permissions: ['AC17','AC2','AC184','AC190','AC188','AC193','AC27','AC191','AC24',
        'AC194','AC18','AC14','AC192','AC195','AC189']
    },
     
    {
        rolename:'Administrator wpłatomatów ',
        permissions: ['AC150','AC146','AC147','AC148']
    },
     
    {
        rolename:'Kurier ',
        permissions: ['PDA4','PDA17','PDA28','PDA33','PDA8','PDA10','PDA32','PDA27','PDA18',
        'PDA31','PDA15','PDA13','PDA19','PDA21','PDA3','PDA12','PDA30','PDA36','PDA37','PDA9',
        'PDA7','PDA11','PDA26','PDA25','PDA29','PDA35','PDA20','PDA6','PDA1','PDA14']
    }, 
    
    {
        rolename:'Podejmowanie Paczek z Magazynu ',
        permissions: ['PDA6','PDA1','PDA9','PDA17','PDA7','PDA8','PDA11','PDA18','PDA3']
    },

    {
        rolename:'Administrator konfiguracji wskaźników monitorowanych ',
        permissions: ['AC108','AC107','AC109','AC106','AC105']
    },

    {
        rolename:'Kontrola pracy kuriera ',
        permissions: ['AC72','AC73','AC132','AC130','AC79','AC71','AC131','AC78','AC133']
    },

    {
        rolename:'Administrator konfiguracji finansowej ',
        permissions: ['AC93','AC95','AC81','AC94','AC96','AC82']
    },

    {
        rolename:'Administrator kurierów ',
        permissions: ['AC185','AC35','AC17','AC38','AC129','AC33','AC41','AC39','AC34','AC40','AC30','AC24','AC43',
        'AC18','AC44','AC32','AC37','AC45','AC2','AC186','AC184','AC31','AC27','AC14','AC128','AC42','AC36']
    },

    {
        rolename:'Kasjer ',
        permissions: ['AC89','AC55','AC86','AC92','AC51','AC53','AC157','AC84','AC63','AC57','AC56','AC90','AC88',
        'AC122','AC85','AC91','AC62','AC111','AC87','AC61','AC110','AC123','AC58','AC54','AC59','AC52','AC158',
        'AC60']
    },

    {
        rolename:'Podstawowe uprawnienia Kuriera ',
        permissions: ['PDA30','PDA37','PDA33','PDA32','PDA26']
    },

    {
        rolename:'Administrator książki telefonicznej ',
        permissions: ['AC117','AC119','AC118']
    },

    {
        rolename:'Administrator stref GPS ',
        permissions: ['AC68','AC65','AC67','AC66','AC64','AC69']
    },

    {
        rolename:'Obsługa ParcelShop ',
        permissions: ['PDA20','PDA21','PDA19']
    },
    
    {
        rolename:'Administrator uprawnień ',
        permissions: ['AC12','AC11','AC21','AC26','AC13','AC29','AC20','AC10','AC28']
    },

    {
        rolename:'Kontroler kurierów ',
        permissions: ['AC126','AC115','AC116','AC73','AC135','AC129','AC136','AC83','AC114','AC134','AC71','AC125',
        'AC133','AC138','AC72','AC165','AC132','AC130','AC137','AC79','AC124','AC131','AC78',]
    },

    {
        rolename:'Doręczanie Paczek ',
        permissions: ['PDA10','PDA25']
    },

    {
        rolename:'Pracownik SzP ',
        permissions: ['PS5','PS3','PS2','PS1','PS4']
    },

    {
        rolename:'Administrator eksportu SAP ',
        permissions: ['AC200','AC183']
    },

    {
        rolename:'Lista Odbiorów i Doręczeń ',
        permissions: ['PDA12','PDA4','PDA11','PDA27','PDA3']
    },

    {
        rolename:'Administrator szablonów SMS dla kurierów ',
        permissions: ['AC98','AC100','AC99']
    },
    
    {
        rolename:'Podstawowe uprawnienia Magazyniera ',
        permissions: ['MG4']
    },
    
    {
        rolename:'Zarządzanie listą punktów STOP ',
        permissions: ['PDA36','PDA14','PDA15','PDA13']
    },
    
    {
        rolename:'SzP - Obsługa Kuriera ',
        permissions: ['PS5','PS4']
    },
    
    {
        rolename:'SzP - Wydawanie Paczek Odbiorcy ',
        permissions: ['PS3','PS2']
    },
    
    {
        rolename:'Zarządzanie punktami stop tras ',
        permissions: ['AC140','AC141','AC143','AC145','AC144','AC139','AC142']
    },
    
    {
        rolename:'SzP - Przyjmowanie Paczek od Nadawcy',
        permissions: ['PS1']
    },
    // //LICZBA UPRAWNIEŃ RÓŻNI SIĘ MIEDZY SRODOWISKAMI
    // {
    //     rolename: 'Magazynier ',
    //     permissions: ['MG3','MG2','MG1', 'MG4']    
    // },
    // //LICZBA UPRAWNIEŃ RÓŻNI SIĘ MIĘDZY ŚRODOWISKAMI
    // {
    //     rolename:'Administrator kasjerów ',
    //     permissions: ['AC121','AC47','AC50','AC48','AC49','AC46']
    // },
    // //LICZBA UPRAWNIEŃ RÓŻNI SIĘ MIĘDZY ŚRODOWISKAMI
    // {
    //     rolename:'Proces poranny INB ',
    //     permissions: ['MG2','MG3','MG1']
    // },
    // //LICZBA UPRAWNIEŃ RÓŻNI SIĘ MIĘDZY ŚRODOWISKAMI
    // {
    //     rolename:'Kontrola finansowa ',
    //     permissions: ['AC156','AC75','AC76','AC169','AC182','AC97','AC173','AC181','AC152','AC122','AC77','AC176',
    //     'AC171','AC155','AC179','AC177','AC174','AC164','AC172','AC175','AC59','AC187','AC120','AC180','AC168',
    //     'AC170','AC113','AC166','AC112','AC47','AC153','AC167','AC74','AC151','AC154','AC178']
    // },

]
export default SystemRoles