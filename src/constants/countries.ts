
const countries = [
    [
        "Afghanistan",
        "AF",
        "Badakhshan~BDS|Badghis~BDG|Baghlan~BGL|Balkh~BAL|Bamyan~BAM|Daykundi~DAY|Farah~FRA|Faryab~FYB|Ghazni~GHA|Ghor~GHO|Helmand~HEL|Herat~HER|Jowzjan~JOW|Kabul~KAB|Kandahar~KAN|Kapisa~KAP|Khost~KHO|Kunar~KNR|Kunduz~KDZ|Laghman~LAG|Logar~LOW|Maidan Wardak~WAR|Nangarhar~NAN|Nimruz~NIM|Nuristan~NUR|Paktia~PIA|Paktika~PKA|Panjshir~PAN|Parwan~PAR|Samangan~SAM|Sar-e Pol~SAR|Takhar~TAK|Urozgan~ORU|Zabul~ZAB"
    ],
    [
        "Åland Islands",
        "AX",
        "Brändö~BR|Eckerö~EC|Finström~FN|Föglö~FG|Geta~GT|Hammarland~HM|Jomala~JM|Kumlinge~KM|Kökar~KK|Lemland~LE|Lumparland~LU|Mariehamn~MH|Saltvik~SV|Sottunga~ST|Sund~SD|Vårdö~VR"
    ],
    [
        "Albania",
        "AL",
        "Berat~01|Dibër~09|Durrës~02|Elbasan~03|Fier~04|Gjirokastër~05|Korçë~06|Kukës~07|Lezhë~08|Shkodër~10|Tirana~11|Vlorë~12"
    ],
    [
        "Algeria",
        "DZ",
        "Adrar~01|Aïn Defla~44|Aïn Témouchent~46|Algiers~16|Annaba~23|Batna~05|Béchar~08|Béjaïa~06|Biskra~07|Blida~09|Bordj Bou Arréridj~34|Bouïra~10|Boumerdès~35|Chlef~02|Constantine~25|Djelfa~17|El Bayadh~32|El Oued~39|El Tarf~36|Ghardaïa~47|Guelma~24|Illizi~33|Jijel~18|Khenchela~40|Laghouat~03|Mascara~29|Médéa~26|Mila~43|Mostaganem~27|Msila~28|Naâma~45|Oran~31|Ouargla~30|Oum el Bouaghi~04|Relizane~48|Saïda~20|Sétif~19|Sidi Bel Abbès~22|Skikda~21|Souk Ahras~41|Tamanghasset~11|Tébessa~12|Tiaret~14|Tindouf~37|Tipaza~42|Tissemsilt~38|Tizi Ouzou~15|Tlemcen~13"
    ],
    [
        "American Samoa",
        "AS",
        "Tutuila~01|Aunu'u~02|Ta'ū~03|Ofu‑Olosega~04|Rose Atoll~21|Swains Island~22"
    ],
    [
        "Andorra",
        "AD",
        "Andorra la Vella~07|Canillo~02|Encamp~03|Escaldes-Engordany~08|La Massana~04|Ordino~05|Sant Julià de Lòria~06"
    ],
    [
        "Angola",
        "AO",
        "Bengo~BGO|Benguela~BGU|Bié~BIE|Cabinda~CAB|Cuando Cubango~CCU|Cuanza Norte~CNO|Cuanza Sul~CUS|Cunene~CNN|Huambo~HUA|Huíla~HUI|Luanda~LUA|Lunda Norte~LNO|Lunda Sul~LSU|Malanje~MAL|Moxico~MOX|Namibe~NAM|Uíge~UIG|Zaire~ZAI"
    ],
    [
        "Anguilla",
        "AI",
        "Anguilla~01|Anguillita Island~02|Blowing Rock~03|Cove Cay~04|Crocus Cay~05|Deadman's Cay~06|Dog Island~07|East Cay~08|Little Island~09|Little Scrub Island~10|Mid Cay~11|North Cay~12|Prickly Pear Cays~13|Rabbit Island~14|Sandy Island/Sand Island~15|Scilly Cay~16|Scrub Island~17|Seal Island~18|Sombrero/Hat Island~19|South Cay~20|South Wager Island~21|West Cay~22"
    ],
    [
        "Antarctica",
        "AQ",
        "Antarctica~AQ"
    ],
    [
        "Antigua and Barbuda",
        "AG",
        "Antigua Island~01|Barbuda Island~02|Bird Island~04|Bishop Island~05|Blake Island~06|Crump Island~09|Dulcina Island~10|Exchange Island~11|Five Islands~12|Great Bird Island~13|Green Island~14|Guiana Island~15|Hawes Island~17|Hells Gate Island~16|Henry Island~18|Johnson Island~19|Kid Island~20|Lobster Island~22|Maiden Island~24|Moor Island~25|Nanny Island~26|Pelican Island~27|Prickly Pear Island~28|Rabbit Island~29|Red Head Island~31|Redonda Island~03|Sandy Island~32|Smith Island~33|The Sisters~34|Vernon Island~35|Wicked Will Island~36|York Island~37"
    ],
    [
        "Argentina",
        "AR",
        "Buenos Aires~B|Capital Federal~C|Catamarca~K|Chaco~H|Chubut~U|Córdoba~X|Corrientes~W|Entre Ríos~E|Formosa~P|Jujuy~Y|La Pampa~L|La Rioja~F|Mendoza~M|Misiones~N|Neuquén~Q|Río Negro~R|Salta~A|San Juan~J|San Luis~D|Santa Cruz~Z|Santa Fe~S|Santiago del Estero~G|Tierra del Fuego~V|Tucumán~T"
    ],
    [
        "Armenia",
        "AM",
        "Aragatsotn~AG|Ararat~AR|Armavir~AV|Gegharkunik~GR|Kotayk~KT|Lori~LO|Shirak~SH|Syunik~SU|Tavush~TV|Vayots Dzor~VD|Yerevan~ER"
    ],
    [
        "Aruba",
        "AW",
        "Aruba~AW"
    ],
    [
        "Australia",
        "AU",
        "Australian Capital Territory~ACT|New South Wales~NSW|Northern Territory~NT|Queensland~QLD|South Australia~SA|Tasmania~TAS|Victoria~VIC|Western Australia~WA"
    ],
    [
        "Austria",
        "AT",
        "Burgenland~1|Kärnten~2|Niederösterreich~3|Oberösterreich~4|Salzburg~5|Steiermark~6|Tirol~7|Vorarlberg~8|Wien~9"
    ],
    [
        "Azerbaijan",
        "AZ",
        "Abşeron~ABS|Ağcabədi~AGC|Ağdam~AGM|Ağdaş~AGS|Ağstafa~AGA|Ağsu~AGU|Astara~AST|Bakı~BAK|Babək~BAB|Balakən~BAL|Bərdə~BAR|Beyləqan~BEY|Biləsuvar~BIL|Cəbrayıl~CAB|Cəlilabad~CAL|Culfa~CUL|Daşkəsən~DAS|Füzuli~FUZ|Gədəbəy~GAD|Goranboy~GOR|Göyçay~GOY|Göygöl~GYG|Hacıqabul~HAC|İmişli~IMI|İsmayıllı~ISM|Kəlbəcər~KAL|Kǝngǝrli~KAN|Kürdəmir~KUR|Laçın~LAC|Lənkəran~LAN|Lerik~LER|Masallı~MAS|Neftçala~NEF|Oğuz~OGU|Ordubad~ORD|Qəbələ~QAB|Qax~QAX|Qazax~QAZ|Qobustan~QOB|Quba~QBA|Qubadli~QBI|Qusar~QUS|Saatlı~SAT|Sabirabad~SAB|Şabran~SBN|Sədərək~SAD|Şahbuz~SAH|Şəki~SAK|Salyan~SAL|Şamaxı~SMI|Şəmkir~SKR|Samux~SMX|Şərur~SAR|Siyəzən~SIY|Şuşa~SUS|Tərtər~TAR|Tovuz~TOV|Ucar~UCA|Xaçmaz~XAC|Xızı~XIZ|Xocalı~XCI|Xocavənd~XVD|Yardımlı~YAR|Yevlax~YEV|Zəngilan~ZAN|Zaqatala~ZAQ|Zərdab~ZAR"
    ],
    [
        "Bahamas",
        "BS",
        "Acklins Island~01|Berry Islands~22|Bimini~02|Black Point~23|Cat Island~03|Central Abaco~24|Crooked Island and Long Cay~28|East Grand Bahama~29|Exuma~04|Freeport~05|Fresh Creek~06|Governor's Harbour~07|Green Turtle Cay~08|Harbour Island~09|High Rock~10|Inagua~11|Kemps Bay~12|Long Island~13|Marsh Harbour~14|Mayaguana~15|Moore’s Island~40|New Providence~16|Nichollstown and Berry Islands~17|North Abaco~42|North Andros~41|North Eleuthera~33|Ragged Island~18|Rock Sound~19|San Salvador and Rum Cay~20|Sandy Point~21|South Abaco~35|South Andros~36|South Eleuthera~37|West Grand Bahama~39|Central Andros~43|Central Eleuthera~44|Grand Cay~45|Hope Town~46|Mangrove Cay~47|Spanish Wells~48"
    ],
    [
        "Bahrain",
        "BH",
        "Al Janūbīyah~14|Al Manāmah~13|Al Muḩarraq~15|Al Wusţá~16|Ash Shamālīyah~17"
    ],
    [
        "Bangladesh",
        "BD",
        "Barisal~A|Chittagong~B|Dhaka~C|Khulna~D|Mymensingh~M|Rajshahi~E|Rangpur~F|Sylhet~G"
    ],
    [
        "Barbados",
        "BB",
        "Christ Church~01|Saint Andrew~02|Saint George~03|Saint James~04|Saint John~05|Saint Joseph~06|Saint Lucy~07|Saint Michael~08|Saint Peter~09|Saint Philip~10|Saint Thomas~11"
    ],
    [
        "Belarus",
        "BY",
        "Brest voblast~BR|Gorod Minsk~HM|Homiel voblast~HO|Hrodna voblast~HR|Mahilyow voblast~MA|Minsk voblast~MI|Vitsebsk voblast~VI"
    ],
    [
        "Belgium",
        "BE",
        "Brussels~BRU|Flanders~VLG|Wallonia~WAL"
    ],
    [
        "Belize",
        "BZ",
        "Belize District~BZ|Cayo District~CY|Corozal District~CZL|Orange Walk District~OW|Stann Creek District~SC|Toledo District~TOL"
    ],
    [
        "Benin",
        "BJ",
        "Alibori~AL|Atakora~AK|Atlantique~AQ|Borgou~BO|Collines Department~CO|Donga~DO|Kouffo~KO|Littoral Department~LI|Mono Department~MO|Ouémé~OU|Plateau~PL|Zou~ZO"
    ],
    [
        "Bermuda",
        "BM",
        "City of Hamilton~03|Devonshire Parish~01|Hamilton Parish~02|Paget Parish~04|Pembroke Parish~05|Sandys Parish~08|Smith's Parish~09|Southampton Parish~10|St. George's Parish~07|Town of St. George~06|Warwick Parish~11"
    ],
    [
        "Bhutan",
        "BT",
        "Bumthang~33|Chhukha~12|Dagana~22|Gasa~GA|Haa~13|Lhuntse~44|Mongar~42|Paro~11|Pemagatshel~43|Punakha~23|Samdrup Jongkhar~45|Samtse~14|Sarpang~31|Thimphu~15|Trashigang~41|Trashiyangtse~TY|Trongsa~32|Tsirang~21|Wangdue Phodrang~24|Zhemgang~34"
    ],
    [
        "Bolivia",
        "BO",
        "Beni~BE|Chuquisaca~CH|Cochabamba~CB|La Paz~LP|Oruro~OR|Pando~PD|Potosí~PT|Santa Cruz~SC|Tarija~TJ"
    ],
    [
        "Bonaire, Sint Eustatius and Saba",
        "BQ",
        "Bonaire~BO|Saba Isand~SA|Sint Eustatius~SE"
    ],
    [
        "Bosnia and Herzegovina",
        "BA",
        "Brčko Distrikt~BRC|Federacija Bosne i Hercegovine~BIH|Republika Srpska~SRP"
    ],
    [
        "Botswana",
        "BW",
        "Central~CE|Ghanzi~GH|Kgalagadi~KG|Kgatleng~KL|Kweneng~KW|North West~NW|North-East~NE|South East~SE|Southern~SO"
    ],
    [
        "Bouvet Island",
        "BV",
        "Bouvet Island~BV"
    ],
    [
        "Brazil",
        "BR",
        "Acre~AC|Alagoas~AL|Amapá~AP|Amazonas~AM|Bahia~BA|Ceará~CE|Distrito Federal~DF|Espírito Santo~ES|Goiás~GO|Maranhão~MA|Mato Grosso~MT|Mato Grosso do Sul~MS|Minas Gerais~MG|Pará~PA|Paraíba~PB|Paraná~PR|Pernambuco~PE|Piauí~PI|Rio de Janeiro~RJ|Rio Grande do Norte~RN|Rio Grande do Sul~RS|Rondônia~RO|Roraima~RR|Santa Catarina~SC|São Paulo~SP|Sergipe~SE|Tocantins~TO"
    ],
    [
        "British Indian Ocean Territory",
        "IO",
        "British Indian Ocean Territory~IO"
    ],
    [
        "Brunei Darussalam",
        "BN",
        "Belait~BE|Brunei Muara~BM|Temburong~TE|Tutong~TU"
    ],
    [
        "Bulgaria",
        "BG",
        "Blagoevgrad~01|Burgas~02|Dobrich~08|Gabrovo~07|Jambol~28|Khaskovo~26|Kjustendil~10|Kurdzhali~09|Lovech~11|Montana~12|Pazardzhik~13|Pernik~14|Pleven~15|Plovdiv~16|Razgrad~17|Ruse~18|Shumen~27|Silistra~19|Sliven~20|Smoljan~21|Sofija~23|Sofija-Grad~22|Stara Zagora~24|Turgovishhe~25|Varna~03|Veliko Turnovo~04|Vidin~05|Vraca~06"
    ],
    [
        "Burkina Faso",
        "BF",
        "Balé~BAL|Bam/Lake Bam~BAM|Banwa Province~BAN|Bazèga~BAZ|Bougouriba~BGR|Boulgou Province~BLG|Boulkiemdé~BLK|Comoé/Komoe~COM|Ganzourgou Province~GAN|Gnagna~GNA|Gourma Province~GOU|Houet~HOU|Ioba~IOB|Kadiogo~KAD|Kénédougou~KEN|Komondjari~KMD|Kompienga~KMP|Kossi Province~KOS|Koulpélogo~KOP|Kouritenga~KOT|Kourwéogo~KOW|Léraba~LER|Loroum~LOR|Mouhoun~MOU|Namentenga~NAM|Naouri/Nahouri~NAO|Nayala~NAY|Noumbiel~NOU|Oubritenga~OUB|Oudalan~OUD|Passoré~PAS|Poni~PON|Sanguié~SNG|Sanmatenga~SMT|Séno~SEN|Sissili~SIS|Soum~SOM|Sourou~SOR|Tapoa~TAP|Tui/Tuy~TUI|Yagha~YAG|Yatenga~YAT|Ziro~ZIR|Zondoma~ZON|Zoundwéogo~ZOU"
    ],
    [
        "Burundi",
        "BI",
        "Bubanza~BB|Bujumbura Mairie~BM|Bujumbura Rural~BL|Bururi~BR|Cankuzo~CA|Cibitoke~CI|Gitega~GI|Karuzi~KR|Kayanza~KY|Kirundo~KI|Makamba~MA|Muramvya~MU|Muyinga~MY|Mwaro~MW|Ngozi~NG|Rutana~RT|Ruyigi~RY"
    ],
    [
        "Cambodia",
        "KH",
        "Baat Dambang~2|Banteay Mean Chey~1|Kampong Chaam~3|Kampong Chhnang~4|Kampong Spueu~5|Kampong Thum~6|Kampot~7|Kandaal~8|Kaoh Kong~9|Kracheh~10|Krong Kaeb~23|Krong Pailin~24|Krong Preah Sihanouk~18|Mondol Kiri~11|Otdar Mean Chey~22|Phnom Penh~12|Pousaat~15|Preah Vihear~13|Prey Veaeng~14|Rotanah Kiri~16|Siem Reab~17|Stueng Treng~19|Svaay Rieng~20|Taakaev~21|Tbong Khmum~25"
    ],
    [
        "Cameroon",
        "CM",
        "Adamaoua~AD|Centre~CE|Est~ES|Extrême-Nord~EN|Littoral~LT|Nord~NO|Nord-Ouest~NW|Ouest~OU|Sud~SU|Sud-Ouest~SW"
    ],
    [
        "Canada",
        "CA",
        "Alberta~AB|British Columbia~BC|Manitoba~MB|New Brunswick~NB|Newfoundland and Labrador~NL|Northwest Territories~NT|Nova Scotia~NS|Nunavut~NU|Ontario~ON|Prince Edward Island~PE|Quebec~QC|Saskatchewan~SK|Yukon~YT"
    ],
    [
        "Cape Verde",
        "CV",
        "Boa Vista~BV|Brava~BR|Calheta de São Miguel~CS|Maio~MA|Mosteiros~MO|Paúl~PA|Porto Novo~PN|Praia~PR|Ribeira Brava~RB|Ribeira Grande~RG|Sal~SL|Santa Catarina~CA|Santa Cruz~CR|São Domingos~SD|São Filipe~SF|São Nicolau~SN|São Vicente~SV|Tarrafal~TA|Tarrafal de São Nicolau~TS"
    ],
    [
        "Cayman Islands",
        "KY",
        "Bodden Town~BT|East End~EE|George Town~GT|North Side~NS|Sister Islands~SI|West Bay~WB"
    ],
    [
        "Central African Republic",
        "CF",
        "Bamingui-Bangoran~BB|Bangui~BGF|Basse-Kotto~BK|Haute-Kotto~HK|Haut-Mbomou~HM|Kémo~KG|Lobaye~LB|Mambéré-Kadéï~HS|Mbomou~MB|Nana-Grebizi~10|Nana-Mambéré~NM|Ombella-M'Poko~MP|Ouaka~UK|Ouham~AC|Ouham Péndé~OP|Sangha-Mbaéré~SE|Vakaga~VK"
    ],
    [
        "Chad",
        "TD",
        "Bahr el Ghazal~BG|Batha~BA|Borkou~BO|Chari-Baguirmi~CB|Ennedi-Est~EE|Ennedi-Ouest~EO|Guéra~GR|Hadjer Lamis~HL|Kanem~KA|Lac~LC|Logone Occidental~LO|Logone Oriental~LR|Mondoul~MA|Mayo-Kébbi-Est~ME|Moyen-Chari~MC|Ouaddai~OD|Salamat~SA|Sila~SI|Tandjilé~TA|Tibesti~TI|Ville de Ndjamena~ND|Wadi Fira~WF"
    ],
    [
        "Chile",
        "CL",
        "Aisén del General Carlos Ibáñez del Campo~AI|Antofagasta~AN|Araucanía~AR|Arica y Parinacota~AP|Atacama~AT|Bío-Bío~BI|Coquimbo~CO|Libertador General Bernardo O'Higgins~LI|Los Lagos~LL|Los Ríos~LR|Magallanes y Antartica Chilena~MA|Marga-Marga~|Maule~ML|Ñuble~NB|Región Metropolitana de Santiago~RM|Tarapacá~TA|Valparaíso~VS"
    ],
    [
        "China",
        "CN",
        "Anhui~AH|Beijing~BJ|Chongqing~CQ|Fujian~FJ|Gansu~GS|Guangdong~GD|Guangxi~GX|Guizhou~GZ|Hainan~HI|Hebei~HE|Heilongjiang~HL|Henan~HA|Hong Kong~HK|Hubei~HB|Hunan~HN|Inner Mongolia~NM|Jiangsu~JS|Jiangxi~JX|Jilin~JL|Liaoning~LN|Macau~MO|Ningxia~NX|Qinghai~QH|Shaanxi~SN|Shandong~SD|Shanghai~SH|Shanxi~SX|Sichuan~SC|Tianjin~TJ|Tibet~XZ|Xinjiang~XJ|Yunnan~YN|Zhejiang~ZJ"
    ],
    [
        "Christmas Island",
        "CX",
        "Christmas Island~CX"
    ],
    [
        "Cocos (Keeling) Islands",
        "CC",
        "Direction Island~DI|Home Island~HM|Horsburgh Island~HR|North Keeling Island~NK|South Island~SI|West Island~WI"
    ],
    [
        "Colombia",
        "CO",
        "Amazonas~AMA|Antioquia~ANT|Arauca~ARA|Archipiélago de San Andrés~SAP|Atlántico~ATL|Bogotá D.C.~DC|Bolívar~BOL|Boyacá~BOY|Caldas~CAL|Caquetá~CAQ|Casanare~CAS|Cauca~CAU|Cesar~CES|Chocó~CHO|Córdoba~COR|Cundinamarca~CUN|Guainía~GUA|Guaviare~GUV|Huila~HUI|La Guajira~LAG|Magdalena~MAG|Meta~MET|Nariño~NAR|Norte de Santander~NSA|Putumayo~PUT|Quindío~QUI|Risaralda~RIS|Santander~SAN|Sucre~SUC|Tolima~TOL|Valle del Cauca~VAC|Vaupés~VAU|Vichada~VID"
    ],
    [
        "Comoros",
        "KM",
        "Andjazîdja~G|Andjouân~A|Moûhîlî~M"
    ],
    [
        "Congo, Republic of the (Brazzaville)",
        "CG",
        "Bouenza~11|Brazzaville~BZV|Cuvette~8|Cuvette-Ouest~15|Kouilou~5|Lékoumou~2|Likouala~7|Niari~9|Plateaux~14|Pointe-Noire~16|Pool~12|Sangha~13"
    ],
    [
        "Congo, the Democratic Republic of the (Kinshasa)",
        "CD",
        "Bandundu~BN|Bas-Congo~BC|Équateur~EQ|Kasaï-Occidental~KE|Kasaï-Oriental~KW|Katanga~KA|Kinshasa~KN|Maniema~MA|Nord-Kivu~NK|Orientale~OR|Sud-Kivu~SK"
    ],
    [
        "Cook Islands",
        "CK",
        "Aitutaki~|Atiu~|Avarua~|Mangaia~|Manihiki~|Ma'uke~|Mitiaro~|Nassau~|Palmerston~|Penrhyn~|Pukapuka~|Rakahanga~"
    ],
    [
        "Costa Rica",
        "CR",
        "Alajuela~2|Cartago~3|Guanacaste~5|Heredia~4|Limón~7|Puntarenas~6|San José~1"
    ],
    [
        "Côte d'Ivoire, Republic of",
        "CI",
        "Agnéby~16|Bafing~17|Bas-Sassandra~09|Denguélé~10|Dix-Huit Montagnes~06|Fromager~18|Haut-Sassandra~02|Lacs~07|Lagunes~01|Marahoué~12|Moyen-Cavally~19|Moyen-Comoé~05|N'zi-Comoé~11|Savanes~03|Sud-Bandama~15|Sud-Comoé~13|Vallée du Bandama~04|Worodougou~14|Zanzan~08"
    ],
    [
        "Croatia",
        "HR",
        "Bjelovarsko-bilogorska županija~07|Brodsko-posavska županija~12|Dubrovačko-neretvanska županija~19|Grad Zagreb~21|Istarska županija~18|Karlovačka županija~04|Koprivničko-križevačka županija~06|Krapinsko-zagorska županija~02|Ličko-senjska županija~09|Međimurska županija~20|Osječko-baranjska županija~14|Požeško-slavonska županija~11|Primorsko-goranska županija~08|Sisačko-moslavačka županija~03|Splitsko-dalmatinska županija~17|Šibensko-kninska županija~15|Varaždinska županija~05|Virovitičko-podravska županija~10|Vukovarsko-srijemska županija~16|Zadarska županija~13|Zagrebačka županija~01"
    ],
    [
        "Cuba",
        "CU",
        "Artemisa~15|Camagüey~09|Ciego de Ávila~08|Cienfuegos~06|Granma~12|Guantánamo~14|Holguín~11|Isla de la Juventud~99|La Habana~03|Las Tunas~10|Matanzas~04|Mayabeque~16|Pinar del Río~01|Sancti Spíritus~07|Santiago de Cuba~13|Villa Clara~05"
    ],
    [
        "Curaçao",
        "CW",
        "Curaçao~CW"
    ],
    [
        "Cyprus",
        "CY",
        "Ammochostos~04|Keryneia~06|Larnaka~03|Lefkosia~01|Lemesos~02|Pafos~05"
    ],
    [
        "Czech Republic",
        "CZ",
        "Hlavní město Praha~10|Jihočeský kraj~31|Jihomoravský kraj~64|Karlovarský kraj~41|Královéhradecký kraj~52|Liberecký kraj~51|Moravskoslezský kraj~80|Olomoucký kraj~71|Pardubický kraj~53|Plzeňský kraj~32|Středočeský kraj~20|Ústecký kraj~42|Vysočina~63|Zlínský kraj~72"
    ],
    [
        "Denmark",
        "DK",
        "Hovedstaden~DK-84|Midtjylland~DK-82|Nordjylland~DK-81|Sjælland~DK-85|Syddanmark~DK-83"
    ],
    [
        "Djibouti",
        "DJ",
        "Ali Sabieh~AS|Arta~AR|Dikhil~DI|Obock~OB|Tadjourah~TA"
    ],
    [
        "Dominica",
        "DM",
        "Saint Andrew Parish~02|Saint David Parish~03|Saint George Parish~04|Saint John Parish~05|Saint Joseph Parish~06|Saint Luke Parish~07|Saint Mark Parish~08|Saint Patrick Parish~09|Saint Paul Parish~10|Saint Peter Parish~11"
    ],
    [
        "Dominican Republic",
        "DO",
        "Cibao Central~02|Del Valle~37|Distrito Nacional~01|Enriquillo~38|Norcentral~04|Nordeste~33|Noroeste~34|Norte~35|Valdesia~42"
    ],
    [
        "Ecuador",
        "EC",
        "Azuay~A|Bolívar~B|Cañar~F|Carchi~C|Chimborazo~H|Cotopaxi~X|El Oro~O|Esmeraldas~E|Galápagos~W|Guayas~G|Imbabura~I|Loja~L|Los Ríos~R|Manabí~M|Morona-Santiago~S|Napo~N|Orellana~D|Pastaza~Y|Pichincha~P|Santa Elena~SE|Santo Domingo de los Tsáchilas~SD|Sucumbíos~U|Tungurahua~T|Zamora-Chinchipe~Z"
    ],
    [
        "Egypt",
        "EG",
        "Alexandria~ALX|Aswan~ASN|Asyout~AST|Bani Sueif~BNS|Beheira~BH|Cairo~C|Daqahlia~DK|Dumiat~DT|El Bahr El Ahmar~BA|El Ismailia~IS|El Suez~SUZ|El Wadi El Gedeed~WAD|Fayoum~FYM|Gharbia~GH|Giza~GZ|Helwan~HU|Kafr El Sheikh~KFS|Luxor~LX|Matrouh~MT|Menia~MN|Menofia~MNF|North Sinai~SIN|Port Said~PTS|Qalubia~KB|Qena~KN|Sharqia~SHR|Sixth of October~SU|Sohag~SHG|South Sinai~JS"
    ],
    [
        "El Salvador",
        "SV",
        "Ahuachapán~AH|Cabañas~CA|Cuscatlán~CU|Chalatenango~CH|La Libertad~LI|La Paz~PA|La Unión~UN|Morazán~MO|San Miguel~SM|San Salvador~SS|Santa Ana~SA|San Vicente~SV|Sonsonate~SO|Usulután~US"
    ],
    [
        "Equatorial Guinea",
        "GQ",
        "Annobón~AN|Bioko Norte~BN|Bioko Sur~BS|Centro Sur~CS|Kié-Ntem~KN|Litoral~LI|Wele-Nzas~WN"
    ],
    [
        "Eritrea",
        "ER",
        "Anseba~AN|Debub~DU|Debub-Keih-Bahri~DK|Gash-Barka~GB|Maekel~MA|Semien-Keih-Bahri~SK"
    ],
    [
        "Estonia",
        "EE",
        "Harjumaa (Tallinn)~37|Hiiumaa (Kardla)~39|Ida-Virumaa (Johvi)~44|Järvamaa (Paide)~41|Jõgevamaa (Jogeva)~49|Läänemaa~57|Lääne-Virumaa (Rakvere)~59|Pärnumaa (Parnu)~67|Põlvamaa (Polva)~65|Raplamaa (Rapla)~70|Saaremaa (Kuessaare)~74|Tartumaa (Tartu)~78|Valgamaa (Valga)~82|Viljandimaa (Viljandi)~84|Võrumaa (Voru)~86"
    ],
    [
        "Ethiopia",
        "ET",
        "Addis Ababa~AA|Afar~AF|Amhara~AM|Benshangul-Gumaz~BE|Dire Dawa~DD|Gambela~GA|Harari~HA|Oromia~OR|Somali~SO|Southern Nations Nationalities and People's Region~SN|Tigray~TI"
    ],
    [
        "Falkland Islands (Islas Malvinas)",
        "FK",
        "Falkland Islands (Islas Malvinas)~"
    ],
    [
        "Faroe Islands",
        "FO",
        "Bordoy~|Eysturoy~|Mykines~|Sandoy~|Skuvoy~|Streymoy~|Suduroy~|Tvoroyri~|Vagar~"
    ],
    [
        "Fiji",
        "FJ",
        "Ba~01|Bua~02|Cakaudrove~03|Kadavu~04|Lau~05|Lomaiviti~06|Macuata~07|Nadroga and Navosa~08|Naitasiri~09|Namosi~10|Ra~11|Rewa~12|Rotuma~R|Serua~13|Tailevu~14"
    ],
    [
        "Finland",
        "FI",
        "Ahvenanmaan maakunta~FI-01|Etelä-Karjala~FI-02|Etelä-Pohjanmaa~FI-03|Etelä-Savo~FI-04|Kainuu~FI-05|Kanta-Häme~FI-06|Keski-Pohjanmaa~FI-07|Keski-Suomi~FI-08|Kymenlaakso~FI-09|Lappi~FI-10|Pirkanmaa~FI-11|Pohjanmaa~FI-12|Pohjois-Karjala~FI-13|Pohjois-Pohjanmaa~FI-14|Pohjois-Savo~FI-15|Päijät-Häme~FI-16|Satakunta~FI-17|Uusimaa~FI-18|Varsinais-Suomi~FI-19"
    ],
    [
        "France",
        "FR",
        "Auvergne-Rhône-Alpes~ARA|Bourgogne-Franche-Comté~BFC|Bretagne~BRE|Centre-Val de Loire~CVL|Corse~COR|Grand Est~GES|Hauts-de-France~HDF|Île-de-France~IDF|Normandie~NOR|Nouvelle-Aquitaine~NAQ|Occitanie~OCC|Pays de la Loire~PDL|Provence-Alpes-Côte d'Azur~PAC|Clipperton~CP|Guadeloupe~GP|Guyane~GF|Martinique~MQ|Mayotte~YT|Nouvelle-Calédonie~NC|Polynésie~PF|Saint-Pierre-et-Miquelon~PM|Saint Barthélemy~BL|Saint Martin~MF|Réunion~RE|Terres Australes Françaises~TF|Wallis-et-Futuna~WF"
    ],
    [
        "French Guiana",
        "GF",
        "French Guiana~"
    ],
    [
        "French Polynesia",
        "PF",
        "Archipel des Marquises~|Archipel des Tuamotu~|Archipel des Tubuai~|Iles du Vent~|Iles Sous-le-Vent~"
    ],
    [
        "French Southern and Antarctic Lands",
        "TF",
        "Adelie Land~|Ile Crozet~|Iles Kerguelen~|Iles Saint-Paul et Amsterdam~"
    ],
    [
        "Gabon",
        "GA",
        "Estuaire~1|Haut-Ogooué~2|Moyen-Ogooué~3|Ngounié~4|Nyanga~5|Ogooué-Ivindo~6|Ogooué-Lolo~7|Ogooué-Maritime~8|Woleu-Ntem~9"
    ],
    [
        "Gambia, The",
        "GM",
        "Banjul~B|Central River~M|Lower River~L|North Bank~N|Upper River~U|Western~W"
    ],
    [
        "Georgia",
        "GE",
        "Abkhazia (Sokhumi)~AB|Ajaria (Bat'umi)~AJ|Guria~GU|Imereti~IM|K'akheti~KA|Kvemo Kartli~KK|Mtshkheta-Mtianeti~MM|Rach'a-Lexhkumi-KvemoSvaneti~RL|Samegrelo-Zemo Svaneti~SZ|Samtskhe-Javakheti~SJ|Shida Kartli~SK|Tbilisi~TB"
    ],
    [
        "Germany",
        "DE",
        "Baden-Württemberg~BW|Bayern~BY|Berlin~BE|Brandenburg~BB|Bremen~HB|Hamburg~HH|Hessen~HE|Mecklenburg-Vorpommern~MV|Niedersachsen~NI|Nordrhein-Westfalen~NW|Rheinland-Pfalz~RP|Saarland~SL|Sachsen~SN|Sachsen-Anhalt~ST|Schleswig-Holstein~SH|Thüringen~TH"
    ],
    [
        "Ghana",
        "GH",
        "Ahafo~AF|Ashanti~AH|Bono~BO|Bono East~BE|Central~CP|Eastern~EP|Greater Accra~AA|Northern~NP|North East~NE|Oti~OT|Savannah~SV|Upper East~UE|Upper West~UW|Volta~TV|Western~WP|Western North~WN"
    ],
    [
        "Gibraltar",
        "GI",
        "Gibraltar~"
    ],
    [
        "Greece",
        "GR",
        "Anatolikí Makedonía kai Thráki~A|Attikḯ~I|Dytikí Elláda~G|Dytikí Makedonía~C|Ionía Nísia~F|Kentrikí Makedonía~B|Krítí~M|Notío Aigaío~L|Peloponnísos~J|Stereá Elláda~H|Thessalía~E|Voreío Aigaío~K|Ípeiros~D|Ágion Óros~69"
    ],
    [
        "Greenland",
        "GL",
        "Kommune Kujalleq~KU|Kommuneqarfik Sermersooq~SM|Qaasuitsup Kommunia~QA|Qeqqata Kommunia~QE"
    ],
    [
        "Grenada",
        "GD",
        "Saint Andrew~01|Saint David~02|Saint George~03|Saint John~04|Saint Mark~05|Saint Patrick~06|Southern Grenadine Islands~10"
    ],
    [
        "Guadeloupe",
        "GP",
        "Guadeloupe~"
    ],
    [
        "Guam",
        "GU",
        "Guam~"
    ],
    [
        "Guatemala",
        "GT",
        "Alta Verapaz~AV|Baja Verapaz~BV|Chimaltenango~CM|Chiquimula~CQ|El Progreso~PR|Escuintla~ES|Guatemala~GU|Huehuetenango~HU|Izabal~IZ|Jalapa~JA|Jutiapa~JU|Petén~PE|Quetzaltenango~QZ|Quiché~QC|Retalhuleu~Re|Sacatepéquez~SA|San Marcos~SM|Santa Rosa~SR|Sololá~SO|Suchitepéquez~SU|Totonicapán~TO|Zacapa~ZA"
    ],
    [
        "Guernsey",
        "GG",
        "Castel~|Forest~|St. Andrew~|St. Martin~|St. Peter Port~|St. Pierre du Bois~|St. Sampson~|St. Saviour~|Torteval~|Vale~"
    ],
    [
        "Guinea",
        "GN",
        "Boké~B|Conakry~C|Faranah~F|Kankan~K|Kindia~D|Labé~L|Mamou~M|Nzérékoré~N"
    ],
    [
        "Guinea-Bissau",
        "GW",
        "Bafatá~BA|Biombo~BM|Bissau~BS|Bolama-Bijagos~BL|Cacheu~CA|Gabú~GA|Oio~OI|Quinara~QU|Tombali~TO"
    ],
    [
        "Guyana",
        "GY",
        "Barima-Waini~BA|Cuyuni-Mazaruni~CU|Demerara-Mahaica~DE|East Berbice-Corentyne~EB|Essequibo Islands-West Demerara~ES|Mahaica-Berbice~MA|Pomeroon-Supenaam~PM|Potaro-Siparuni~PT|Upper Demerara-Berbice~UD|Upper Takutu-Upper Essequibo~UT"
    ],
    [
        "Haiti",
        "HT",
        "Artibonite~AR|Centre~CE|Grand'Anse~GA|Nippes~NI|Nord~ND|Nord-Est~NE|Nord-Ouest~NO|Ouest~OU|Sud~SD|Sud-Est~SE"
    ],
    [
        "Heard Island and McDonald Islands",
        "HM",
        "Heard Island and McDonald Islands~"
    ],
    [
        "Holy See (Vatican City)",
        "VA",
        "Holy See (Vatican City)~01"
    ],
    [
        "Honduras",
        "HN",
        "Atlántida~AT|Choluteca~CH|Colón~CL|Comayagua~CM|Copán~CP|Cortés~CR|El Paraíso~EP|Francisco Morazán~FM|Gracias a Dios~GD|Intibucá~IN|Islas de la Bahía~IB|La Paz~LP|Lempira~LE|Ocotepeque~OC|Olancho~OL|Santa Bárbara~SB|Valle~VA|Yoro~YO"
    ],
    [
        "Hong Kong",
        "HK",
        "Hong Kong~HK"
    ],
    [
        "Hungary",
        "HU",
        "Bács-Kiskun~BK|Baranya~BA|Békés~BE|Békéscsaba~BC|Borsod-Abauj-Zemplen~BZ|Budapest~BU|Csongrád~CS|Debrecen~DE|Dunaújváros~DU|Eger~EG|Érd~ER|Fejér~FE|Győr~GY|Győr-Moson-Sopron~GS|Hajdú-Bihar~HB|Heves~HE|Hódmezővásárhely~HV|Jász-Nagykun-Szolnok~JN|Kaposvár~KV|Kecskemét~KM|Komárom-Esztergom~KE|Miskolc~MI|Nagykanizsa~NK|Nógrád~NO|Nyíregyháza~NY|Pécs~PS|Pest~PE|Salgótarján~ST|Somogy~SO|Sopron~SN|Szabolcs-á-Bereg~SZ|Szeged~SD|Székesfehérvár~SF|Szekszárd~SS|Szolnok~SK|Szombathely~SH|Tatabánya~TB|Tolna~TO|Vas~VA|Veszprém~VE|Veszprém (City)~VM|Zala~ZA|Zalaegerszeg~ZE"
    ],
    [
        "Iceland",
        "IS",
        "Austurland~7|Höfuðborgarsvæði~1|Norðurland eystra~6|Norðurland vestra~5|Suðurland~8|Suðurnes~2|Vestfirðir~4|Vesturland~3"
    ],
    [
        "India",
        "IN",
        "Andaman and Nicobar Islands~AN|Andhra Pradesh~AP|Arunachal Pradesh~AR|Assam~AS|Bihar~BR|Chandigarh~CH|Chhattisgarh~CT|Dadra and Nagar Haveli and Daman and Diu~DH|Delhi~DL|Goa~GA|Gujarat~GJ|Haryana~HR|Himachal Pradesh~HP|Jammu and Kashmir~JK|Jharkhand~JH|Karnataka~KA|Kerala~KL|Ladakh~LA|Lakshadweep~LD|Madhya Pradesh~MP|Maharashtra~MH|Manipur~MN|Meghalaya~ML|Mizoram~MZ|Nagaland~NL|Odisha~OR|Puducherry~PY|Punjab~PB|Rajasthan~RJ|Sikkim~SK|Tamil Nadu~TN|Telangana~TG|Tripura~TR|Uttarakhand~UT|Uttar Pradesh~UP|West Bengal~WB"
    ],
    [
        "Indonesia",
        "ID",
        "Aceh~AC|Bali~BA|Bangka Belitung~BB|Banten~BT|Bengkulu~BE|Gorontalo~GO|Jakarta Raya~JK|Jambi~JA|Jawa Barat~JB|Jawa Tengah~JT|Jawa Timur~JI|Kalimantan Barat~KB|Kalimantan Selatan~KS|Kalimantan Tengah~KT|Kalimantan Timur~KI|Kalimantan Utara~KU|Kepulauan Riau~KR|Lampung~LA|Maluku~MA|Maluku Utara~MU|Nusa Tenggara Barat~NB|Nusa Tenggara Timur~NT|Papua~PA|Papua Barat~PB|Riau~RI|Sulawesi Selatan~SR|Sulawesi Tengah~ST|Sulawesi Tenggara~SG|Sulawesi Utara~SA|Sumatera Barat~SB|Sumatera Selatan~SS|Sumatera Utara~SU|Yogyakarta~YO"
    ],
    [
        "Iran, Islamic Republic of",
        "IR",
        "Alborz~32|Ardabīl~03|Āz̄arbāyjān-e Gharbī~02|Āz̄arbāyjān-e Sharqī~01|Būshehr~06|Chahār Maḩāl va Bakhtīārī~08|Eşfahān~04|Fārs~14|Gīlān~19|Golestān~27|Hamadān~24|Hormozgān~23|Īlām~05|Kermān~15|Kermānshāh~17|Khorāsān-e Jonūbī~29|Khorāsān-e Raẕavī~30|Khorāsān-e Shomālī~61|Khūzestān~10|Kohgīlūyeh va Bowyer Aḩmad~18|Kordestān~16|Lorestān~20|Markazi~22|Māzandarān~21|Qazvīn~28|Qom~26|Semnān~12|Sīstān va Balūchestān~13|Tehrān~07|Yazd~25|Zanjān~11"
    ],
    [
        "Iraq",
        "IQ",
        "Al Anbār~AN|Al Başrah~BA|Al Muthanná~MU|Al Qādisīyah~QA|An Najaf~NA|Arbīl~AR|As Sulaymānīyah~SU|Bābil~BB|Baghdād~BG|Dohuk~DA|Dhī Qār~DQ|Diyālá~DI|Karbalā'~KA|Kirkuk~KI|Maysān~MA|Nīnawá~NI|Şalāḩ ad Dīn~SD|Wāsiţ~WA"
    ],
    [
        "Ireland",
        "IE",
        "Carlow~CW|Cavan~CN|Clare~CE|Cork~CO|Donegal~DL|Dublin~D|Galway~G|Kerry~KY|Kildare~KE|Kilkenny~KK|Laois~LS|Leitrim~LM|Limerick~LK|Longford~LD|Louth~LH|Mayo~MO|Meath~MH|Monaghan~MN|Offaly~OY|Roscommon~RN|Sligo~SO|Tipperary~TA|Waterford~WD|Westmeath~WH|Wexford~WX|Wicklow~WW"
    ],
    [
        "Isle of Man",
        "IM",
        "Isle of Man~"
    ],
    [
        "Israel",
        "IL",
        "HaDarom~D|HaMerkaz~M|HaTsafon~Z|H̱efa~HA|Tel-Aviv~TA|Yerushalayim~JM"
    ],
    [
        "Italy",
        "IT",
        "Abruzzo~65|Basilicata~77|Calabria~78|Campania~72|Emilia-Romagna~45|Friuli-Venezia Giulia~36|Lazio~62|Liguria~42|Lombardia~25|Marche~57|Molise~67|Piemonte~21|Puglia~75|Sardegna~88|Sicilia~82|Toscana~52|Trentino-Alto Adige~32|Umbria~55|Valle d'Aosta~23|Veneto~34"
    ],
    [
        "Jamaica",
        "JM",
        "Clarendon~13|Hanover~09|Kingston~01|Manchester~12|Portland~04|Saint Andrew~02|Saint Ann~06|Saint Catherine~14|Saint Elizabeth~11|Saint James~08|Saint Mary~05|Saint Thomas~03|Trelawny~07|Westmoreland~10"
    ],
    [
        "Japan",
        "JP",
        "Aichi~23|Akita~05|Aomori~02|Chiba~12|Ehime~38|Fukui~18|Fukuoka~40|Fukushima~07|Gifu~21|Gunma~10|Hiroshima~34|Hokkaido~01|Hyogo~28|Ibaraki~08|Ishikawa~17|Iwate~03|Kagawa~37|Kagoshima~46|Kanagawa~14|Kochi~39|Kumamoto~43|Kyoto~26|Mie~24|Miyagi~04|Miyazaki~45|Nagano~20|Nagasaki~42|Nara~29|Niigata~15|Oita~44|Okayama~33|Okinawa~47|Osaka~27|Saga~41|Saitama~11|Shiga~25|Shimane~32|Shizuoka~22|Tochigi~09|Tokushima~36|Tokyo~13|Tottori~31|Toyama~16|Wakayama~30|Yamagata~06|Yamaguchi~35|Yamanashi~19"
    ],
    [
        "Jersey",
        "JE",
        "Jersey~"
    ],
    [
        "Jordan",
        "JO",
        "‘Ajlūn~AJ|Al 'Aqabah~AQ|Al Balqā’~BA|Al Karak~KA|Al Mafraq~MA|Al ‘A̅şimah~AM|Aţ Ţafīlah~AT|Az Zarqā’~AZ|Irbid~IR|Jarash~JA|Ma‘ān~MN|Mādabā~MD"
    ],
    [
        "Kazakhstan",
        "KZ",
        "Almaty~ALA|Aqmola~AKM|Aqtobe~AKT|Astana~AST|Atyrau~ATY|Batys Qazaqstan~ZAP|Bayqongyr~|Mangghystau~MAN|Ongtustik Qazaqstan~YUZ|Pavlodar~PAV|Qaraghandy~KAR|Qostanay~KUS|Qyzylorda~KZY|Shyghys Qazaqstan~VOS|Soltustik Qazaqstan~SEV|Zhambyl~ZHA"
    ],
    [
        "Kenya",
        "KE",
        "Baringo~01|Bomet~02|Bungoma~03|Busia~04|Eleyo/Marakwet~05|Embu~06|Garissa~07|Homa Bay~08|Isiolo~09|Kajiado~10|Kakamega~11|Kericho~12|Kiambu~13|Kilifi~14|Kirinyaga~15|Kisii~16|Kisumu~17|Kitui~18|Kwale~19|Laikipia~20|Lamu~21|Machakos~22|Makueni~23|Mandera~24|Marsabit~25|Meru~26|Migori~27|Mombasa~28|Murang'a~29|Nairobi City~30|Nakuru~31|Nandi~32|Narok~33|Nyamira~34|Nyandarua~35|Nyeri~36|Samburu~37|Siaya~38|Taita/Taveta~39|Tana River~40|Tharaka-Nithi~41|Trans Nzoia~42|Turkana~43|Uasin Gishu~44|Vihiga~45|Wajir~46|West Pokot~47"
    ],
    [
        "Kiribati",
        "KI",
        "Abaiang~|Abemama~|Aranuka~|Arorae~|Banaba~|Beru~|Butaritari~|Central Gilberts~|Gilbert Islands~G|Kanton~|Kiritimati~|Kuria~|Line Islands~L|Maiana~|Makin~|Marakei~|Nikunau~|Nonouti~|Northern Gilberts~|Onotoa~|Phoenix Islands~P|Southern Gilberts~|Tabiteuea~|Tabuaeran~|Tamana~|Tarawa~|Teraina~"
    ],
    [
        "Korea, Democratic People's Republic of",
        "KP",
        "Chagang-do (Chagang Province)~04|Hamgyong-bukto (North Hamgyong Province)~09|Hamgyong-namdo (South Hamgyong Province)~08|Hwanghae-bukto (North Hwanghae Province)~06|Hwanghae-namdo (South Hwanghae Province)~05|Kangwon-do (Kangwon Province)~07|Nasŏn (Najin-Sŏnbong)~13|P'yongan-bukto (North P'yongan Province)~03|P'yongan-namdo (South P'yongan Province)~02|P'yongyang-si (P'yongyang City)~01|Yanggang-do (Yanggang Province)~10"
    ],
    [
        "Korea, Republic of",
        "KR",
        "Chungcheongbuk-do~43|Chungcheongnam-do~44|Jeju-teukbyeoljachido~49|Jeollabuk-do~45|Jeollanam-do~46|Incheon-gwangyeoksi~28|Gangwon-do~42|Gwangju-gwangyeoksi~29|Gyeonggi-do~41|Gyeongsangbuk-do~47|Gyeongsangnam-do~48|Busan-gwangyeoksi~26|Seoul-teukbyeolsi~11|Sejong-teukbyeoljachisi~50|Daegu-gwangyeoksi~27|Daejeon-gwangyeoksi~30|Ulsan-gwangyeoksi~31"
    ],
    [
        "Kosovo",
        "XK",
        "Farizaj~FZ|Gjakova~GK|Gjilan~GL|Mitrovica~MI|Peja/Peć~PE|Pristina~PR|Prizren~PZ"
    ],
    [
        "Kuwait",
        "KW",
        "Al Aḩmadi~AH|Al Farwānīyah~FA|Al Jahrā’~JA|Al ‘Āşimah~KU|Ḩawallī~HA|Mubārak al Kabir~MU"
    ],
    [
        "Kyrgyzstan",
        "KG",
        "Batken Oblasty~B|Bishkek Shaary~GB|Chuy Oblasty (Bishkek)~C|Jalal-Abad Oblasty~J|Naryn Oblasty~N|Osh Oblasty~O|Talas Oblasty~T|Ysyk-Kol Oblasty (Karakol)~Y"
    ],
    [
        "Laos",
        "LA",
        "Attapu~AT|Bokèo~BK|Bolikhamxai~BL|Champasak~CH|Houaphan~HO|Khammouan~KH|Louang Namtha~LM|Louangphabang~LP|Oudômxai~OU|Phôngsali~PH|Salavan~SL|Savannakhét~SV|Vientiane~VI|Xaignabouli~XA|Xékong~XE|Xaisomboun~XS|Xiangkhouang~XI"
    ],
    [
        "Latvia",
        "LV",
        "Aglona~001|Aizkraukle~002|Aizpute~003|Aknīste~004|Aloja~005|Alsunga~06|Alūksne~007|Amata~008|Ape~009|Auce~010|Ādaži~011|Babīte~012|Baldone~013|Baltinava~014|Balvi~015|Bauska~016|Beverīna~017|Brocēni~018|Burtnieki~019|Carnikava~020|Cesvaine~021|Cēsis~022|Cibla~023|Dagda~024|Daugavpils~025|Daugavpils (City)~DGV|Dobele~026|Dundaga~027|Durbe~028|Engure~029|Ērgļi~030|Garkalne~031|Grobiņa~032|Gulbene~033|Iecava~034|Ikšķile~035|Ilūkste~036|Inčukalns~037|Jaunjelgava~038|Jaunpiebalga~039|Jaunpils~040|Jelgava~041|Jelgava (City)~JEL|Jēkabpils~042|Jēkabpils (City)~JKB|Jūrmala (City)~JUR|Kandava~043|Kārsava~044|Kocēni~045|Koknese~046|Krāslava~047|Krimulda~048|Krustpils~049|Kuldīga~050|Ķegums~051|Ķekava~052|Lielvārde~053|Liepāja~LPX|Limbaži~054|Līgatne~055|Līvāni~056|Lubāna~057|Ludza~058|Madona~059|Mazsalaca~060|Mālpils~061|Mārupe~062|Mērsrags~063|Naukšēni~064|Nereta~065|Nīca~066|Ogre~067|Olaine~068|Ozolnieki~069|Pārgauja~070|Pāvilosta~071|Pļaviņas~072|Preiļi~073|Priekule~074|Priekuļi~075|Rauna~076|Rēzekne~077|Rēzekne (City)~REZ|Riebiņi~078|Rīga~RIX|Roja~079|Ropaži~080|Rucava~081|Rugāji~082|Rundāle~083|Rūjiena~084|Sala~085|Salacgrīva~086|Salaspils~087|Saldus~088|Saulkrasti~089|Sēja~090|Sigulda~091|Skrīveri~092|Skrunda~093|Smiltene~094|Stopiņi~095|Strenči~096|Talsi~097|Tērvete~098|Tukums~099|Vaiņode~100|Valka~101|Valmiera~VMR|Varakļāni~102|Vārkava~103|Vecpiebalga~104|Vecumnieki~105|Ventspils~106|Ventspils (City)~VEN|Viesīte~107|Viļaka~108|Viļāni~109|Zilupe~110"
    ],
    [
        "Lebanon",
        "LB",
        "Aakkâr~AK|Baalbelk-Hermel~BH|Béqaa~BI|Beyrouth~BA|Liban-Nord~AS|Liban-Sud~JA|Mont-Liban~JL|Nabatîyé~NA"
    ],
    [
        "Lesotho",
        "LS",
        "Berea~D|Butha-Buthe~B|Leribe~C|Mafeteng~E|Maseru~A|Mohales Hoek~F|Mokhotlong~J|Qacha's Nek~H|Quthing~G|Thaba-Tseka~K"
    ],
    [
        "Liberia",
        "LR",
        "Bomi~BM|Bong~BG|Gbarpolu~GP|Grand Bassa~GB|Grand Cape Mount~CM|Grand Gedeh~GG|Grand Kru~GK|Lofa~LO|Margibi~MG|Maryland~MY|Montserrado~MO|Nimba~NI|River Cess~RI|River Geee~RG|Sinoe~SI"
    ],
    [
        "Libya",
        "LY",
        "Al Buţnān~BU|Al Jabal al Akhḑar~JA|Al Jabal al Gharbī~JG|Al Jafārah~JI|Al Jufrah~JU|Al Kufrah~FK|Al Marj~MJ|Al Marquab~MB|Al Wāḩāt~WA|An Nuqaţ al Khams~NQ|Az Zāwiyah~ZA|Banghāzī~BA|Darnah~DR|Ghāt~GH|Mişrātah~MI|Murzuq~MQ|Nālūt~NL|Sabhā~SB|Surt~SR|Ţarābulus~TB|Yafran~WD|Wādī ash Shāţiʾ~WS"
    ],
    [
        "Liechtenstein",
        "LI",
        "Balzers~01|Eschen~02|Gamprin~03|Mauren~04|Planken~05|Ruggell~06|Schaan~07|Schellenberg~08|Triesen~09|Triesenberg~10|Vaduz~11"
    ],
    [
        "Lithuania",
        "LT",
        "Alytaus~AL|Kauno~KU|Klaipėdos~KL|Marijampolės~MR|Panevėžio~PN|Šiaulių~SA|Tauragės~TA|Telšių~TE|Utenos~UT|Vilniaus~VL"
    ],
    [
        "Luxembourg",
        "LU",
        "Capellen~CA|Clevaux~CL|Diekirch~DI|Echternach~EC|Esch-sur-Alzette~ES|Grevenmacher~GR|Luxembourg~LU|Mersch~ME|Redange~RD|Remich~RM|Vianden~VD|Wiltz~WI"
    ],
    [
        "Macao",
        "MO",
        "Macao~"
    ],
    [
        "Macedonia, Republic of",
        "MK",
        "Aračinovo~02|Berovo~03|Bitola~04|Bogdanci~05|Bogovinje~06|Bosilovo~07|Brvenica~08|Centar Župa~78|Čaška~80|Češinovo-Obleševo~81|Čučer Sandevo~82|Debar~21|Debarca~22|Delčevo~23|Demir Hisar~25|Demir Kapija~24|Doran~26|Dolneni~27|Gevgelija~18|Gostivar~19|Gradsko~20|Ilinden~34|Jegunovce~35|Karbinci~37|Kavadarci~36|Kičevo~40|Kočani~42|Konče~41|Kratovo~43|Kriva Palanka~44|Krivogaštani~45|Kruševo~46|Kumanovo~47|Lipkovo~48|Lozovo~49|Makedonska Kamenica~51|Makedonski Brod~52|Mavrovo i Rostuša~50|Mogila~53|Negotino~54|Novaci~55|Novo Selo~56|Ohrid~58|Pehčevo~60|Petrovec~59|Plasnica~61|Prilep~62|Probištip~63|Radoviš~|Rankovce~65|Resen~66|Rosoman~67|Skopje~85|Sopište~70|Staro Nagoričane~71|Struga~72|Strumica~73|Studeničani~74|Sveti Nikole~69|Štip~83|Tearce~75|Tetovo~76|Valandovo~10|Vasilevo~11|Veles~13|Vevčani~12|Vinica~14|Vrapčište~16|Zelenikovo~32|Zrnovci~33|Želino~30"
    ],
    [
        "Madagascar",
        "MG",
        "Antananarivo~T|Antsiranana~D|Fianarantsoa~F|Mahajanga~M|Toamasina~A|Toliara~U"
    ],
    [
        "Malawi",
        "MW",
        "Balaka~BA|Blantyre~BL|Chikwawa~CK|Chiradzulu~CR|Chitipa~CT|Dedza~DE|Dowa~DO|Karonga~KR|Kasungu~KS|Likoma~LK|Lilongwe~LI|Machinga~MH|Mangochi~MG|Mchinji~MC|Mulanje~MU|Mwanza~MW|Mzimba~MZ|Nkhata Bay~NE|Nkhotakota~NB|Nsanje~NS|Ntcheu~NU|Ntchisi~NI|Phalombe~PH|Rumphi~RU|Salima~SA|Thyolo~TH|Zomba~ZO"
    ],
    [
        "Malaysia",
        "MY",
        "Johor~01|Kedah~02|Kelantan~03|Melaka~04|Negeri Sembilan~05|Pahang~06|Perak~08|Perlis~09|Pulau Pinang~07|Sabah~12|Sarawak~13|Selangor~10|Terengganu~11|Wilayah Persekutuan (Kuala Lumpur)~14|Wilayah Persekutuan (Labuan)~15|Wilayah Persekutuan (Putrajaya)~16"
    ],
    [
        "Maldives",
        "MV",
        "Alifu Alifu~02|Alifu Dhaalu~00|Baa~20|Dhaalu~17|Faafu~14|Gaafu Alifu~27|Gaafu Dhaalu~28|Gnaviyani~29|Haa Alifu~07|Haa Dhaalu~23|Kaafu~26|Laamu~05|Lhaviyani~03|Malé~MLE|Meemu~12|Noonu~25|Raa~13|Seenu~01|Shaviyani~24|Thaa~08|Vaavu~04"
    ],
    [
        "Mali",
        "ML",
        "Bamako~BKO|Gao~7|Kayes~1|Kidal~8|Koulikoro~2|Mopti~5|Segou~4|Sikasso~3|Tombouctou~6|Taoudénit~9|Ménaka~10"
    ],
    [
        "Malta",
        "MT",
        "Attard~01|Balzan~02|Birgu~03|Birkirkara~04|Birżebbuġa~05|Bormla~06|Dingli~07|Fgura~08|Floriana~09|Fontana~10|Guda~11|Gżira~12|Għajnsielem~13|Għarb~14|Għargħur~15|Għasri~16|Għaxaq~17|Ħamrun~18|Iklin~19|Isla~20|Kalkara~21|Kerċem~22|Kirkop~23|Lija~24|Luqa~25|Marsa~26|Marsaskala~27|Marsaxlokk~28|Mdina~29|Mellieħa~30|Mġarr~31|Mosta~32|Mqabba~33|Msida~34|Mtarfa~35|Munxar~36|Nadur~37|Naxxar~38|Paola~39|Pembroke~40|Pietà~41|Qala~42|Qormi~43|Qrendi~44|Rabat Għawdex~45|Rabat Malta~46|Safi~47|San Ġiljan~48|San Ġwann~49|San Lawrenz~50|San Pawl il-Baħar~51|Sannat~52|Santa Luċija~53|Santa Venera~54|Siġġiewi~55|Sliema~56|Swieqi~57|Tai Xbiex~58|Tarzien~59|Valletta~60|Xagħra~61|Xewkija~62|Xgħajra~63|Żabbar~64|Żebbuġ Għawde~65|Żebbuġ Malta~66|Żejtun~67|Żurrieq~68"
    ],
    [
        "Marshall Islands",
        "MH",
        "Ailinglaplap~ALL|Ailuk~ALK|Arno~ARN|Aur~AUR|Bikini and Kili~KIL|Ebon~EBO|Jabat~JAB|Jaluit~JAL|Kwajalein~KWA|Lae~LAE|Lib~LIB|Likiep~LIK|Majuro~MAJ|Maloelap~MAL|Mejit~MEJ|Namdrik~NMK|Namu~NMU|Rongelap~RON|Ujae~UJA|Utrik~UTI|Wotho~WTH|Wotje~WTJ"
    ],
    [
        "Martinique",
        "MQ",
        "Martinique~"
    ],
    [
        "Mauritania",
        "MR",
        "Adrar~07|Assaba~03|Brakna~05|Dakhlet Nouadhibou~08|Gorgol~04|Guidimaka~10|Hodh Ech Chargui~01|Hodh El Gharbi~02|Inchiri~12|Nouakchott Nord~14|Nouakchott Ouest~13|Nouakchott Sud~15|Tagant~09|Tiris Zemmour~11|Trarza~06"
    ],
    [
        "Mauritius",
        "MU",
        "Agalega Islands~AG|Beau Bassin-Rose Hill~BR|Black River~BL|Cargados Carajos Shoals~CC|Curepipe~CU|Flacq~FL|Grand Port~GP|Moka~MO|Pamplemousses~PA|Plaines Wilhems~PW|Port Louis (City)~PU|Port Louis~PL|Riviere du Rempart~RR|Rodrigues Island~RO|Savanne~SA|Vacoas-Phoenix~CP"
    ],
    [
        "Mayotte",
        "YT",
        "Dzaoudzi~01|Pamandzi~02|Mamoudzou~03|Dembeni~04|Bandrélé~05|Kani-Kéli~06|Bouéni~07|Chirongui~08|Sada~09|Ouangani~10|Chiconi~11|Tsingoni~12|M'Tsangamouji~13|Acoua~14|Mtsamboro~15|Bandraboua~16|Koungou~17"
    ],
    [
        "Mexico",
        "MX",
        "Aguascalientes~AGU|Baja California~BCN|Baja California Sur~BCS|Campeche~CAM|Ciudad de México~CMX|Chiapas~CHP|Chihuahua~CHH|Coahuila de Zaragoza~COA|Colima~COL|Durango~DUR|Estado de México~MEX|Guanajuato~GUA|Guerrero~GRO|Hidalgo~HID|Jalisco~JAL|Michoacán de Ocampo~MIC|Morelos~MOR|Nayarit~NAY|Nuevo León~NLE|Oaxaca~OAX|Puebla~PUE|Querétaro de Arteaga~QUE|Quintana Roo~ROO|San Luis Potosí~SLP|Sinaloa~SIN|Sonora~SON|Tabasco~TAB|Tamaulipas~TAM|Tlaxcala~TLA|Veracruz~VER|Yucatán~YUC|Zacatecas~ZAC"
    ],
    [
        "Micronesia, Federated States of",
        "FM",
        "Chuuk (Truk)~TRK|Kosrae~KSA|Pohnpei~PNI|Yap~YAP"
    ],
    [
        "Moldova",
        "MD",
        "Anenii Noi~AN|Basarabeasca~BS|Bălți~BA|Bender~BD|Briceni~BR|Cahul~CA|Cantemir~CT|Călărași~CL|Căușeni~CS|Chișinău~CU|Cimișlia~CM|Criuleni~CR|Dondușeni~DO|Drochia~DR|Dubăsari~DU|Edineț~ED|Fălești~FA|Florești~FL|Găgăuzia~GA|Glodeni~GL|Hîncești~HI|Ialoveni~IA|Leova~LE|Nisporeni~NI|Ocnița~OC|Orhei~OR|Rezina~RE|Rîșcani~RI|Sîngerei~SI|Soroca~SO|Stânga Nistrului~SN|Strășeni~ST|Șoldănești~SD|Ștefan Vodă~SV|Taraclia~TA|Telenești~TE|Ungheni~UN"
    ],
    [
        "Monaco",
        "MC",
        "Colle~CL|Condamine~CO|Fontvieille~FO|Gare~GA|Jardin Exotique~JE|Larvotto~LA|Malbousquet~MA|Monaco-Ville~MO|Moneghetti~MG|Monte-Carlo~MC|Moulins~MU|Port-Hercule~PH|Saint-Roman~SR|Sainte-Dévote~SD|Source~SO|Spélugues~SP|Vallon de la Rousse~VR"
    ],
    [
        "Mongolia",
        "MN",
        "Arhangay~073|Bayan-Olgiy~071|Bayanhongor~069|Bulgan~067|Darhan~037|Dornod~061|Dornogovi~063|Dundgovi~059|Dzavhan~057|Govi-Altay~065|Govi-Sumber~064|Hovd~043|Hovsgol~041|Omnogovi~053|Ovorhangay~055|Selenge~049|Suhbaatar~051|Tov~047|Ulaanbaatar~1|Uvs~046|Erdenet~074"
    ],
    [
        "Montenegro",
        "ME",
        "Andrijevica~01|Bar~02|Berane~03|Bijelo Polje~04|Budva~05|Cetinje~06|Danilovgrad~07|Gusinje~22|Herceg Novi~08|Kolašin~09|Kotor~10|Mojkovac~11|Nikšić~12|Petnica~23|Plav~13|Plužine~14|Pljevlja~15|Podgorica~16|Rožaje~17|Šavnik~18|Tivat~19|Ulcinj~20|Žabljak~21"
    ],
    [
        "Montserrat",
        "MS",
        "Saint Anthony~|Saint Georges~|Saint Peter's~"
    ],
    [
        "Morocco",
        "MA",
        "Tanger-Tétouan-Al Hoceïma~MA-01|L'Oriental~MA-02|Fès-Meknès~MA-03|Rabat-Salé-Kénitra~MA-04|Béni Mellal-Khénifra~MA-05|Casablanca-Settat~MA-06|Marrakech-Safi~MA-07|Drâa-Tafilalet~MA-08|Souss-Massa~MA-09|Guelmim-Oued Noun~MA-10|Laâyoune-Sakia El Hamra~MA-11|Dakhla-Oued Ed-Dahab~MA-12"
    ],
    [
        "Mozambique",
        "MZ",
        "Cabo Delgado~P|Gaza~G|Inhambane~I|Manica~B|Maputo~L|Maputo (City)~MPM|Nampula~N|Niassa~A|Sofala~S|Tete~T|Zambezia~Q"
    ],
    [
        "Myanmar",
        "MM",
        "Ayeyarwady~07|Bago~02|Chin~14|Kachin~11|Kayah~12|Kayin~13|Magway~03|Mandalay~04|Mon~15|Nay Pyi Taw~18|Rakhine~16|Sagaing~01|Shan~17|Tanintharyi~05|Yangon~06"
    ],
    [
        "Namibia",
        "NA",
        "Erongo~ER|Hardap~HA|Kavango East~KE|Kavango West~KW|Karas~KA|Khomas~KH|Kunene~KU|Ohangwena~OW|Omaheke~OH|Omusati~OS|Oshana~ON|Oshikoto~OT|Otjozondjupa~OD|Zambezi~CA"
    ],
    [
        "Nauru",
        "NR",
        "Aiwo~01|Anabar~02|Anetan~03|Anibare~04|Baiti~05|Boe~06|Buada~07|Denigomodu~08|Ewa~09|Ijuw~10|Meneng~11|Nibok~12|Uaboe~13|Yaren~14"
    ],
    [
        "Nepal",
        "NP",
        "Province No. 1~1|Madhesh Province~2|Bagmati Province~3|Gandaki Province~4|Lumbini Province~5|Karnali Province~6|Sudurpashchim Province~7"
    ],
    [
        "Netherlands",
        "NL",
        "Drenthe~DR|Flevoland~FL|Friesland~FR|Gelderland~GE|Groningen~GR|Limburg~LI|Noord-Brabant~NB|Noord-Holland~NH|Overijssel~OV|Utrecht~UT|Zeeland~ZE|Zuid-Holland~ZH"
    ],
    [
        "New Caledonia",
        "NC",
        "Iles Loyaute~|Nord~|Sud~"
    ],
    [
        "New Zealand",
        "NZ",
        "Auckland~AUK|Bay of Plenty~BOP|Canterbury~CAN|Gisborne~GIS|Hawke's Bay~HKB|Marlborough~MBH|Manawatu-Wanganui~MWT|Northland~NTL|Nelson~NSN|Otago~OTA|Southland~STL|Taranaki~TKI|Tasman~TAS|Waikato~WKO|Wellington~WGN|West Coast~WTC|Chatham Islands Territory~CIT"
    ],
    [
        "Nicaragua",
        "NI",
        "Boaco~BO|Carazo~CA|Chinandega~CI|Chontales~CO|Estelí~ES|Granada~GR|Jinotega~JI|León~LE|Madriz~MD|Managua~MN|Masaya~MS|Matagalpa~MT|Nueva Segovia~NS|Río San Juan~SJ|Rivas~RI|Atlántico Norte~AN|Atlántico Sur~AS"
    ],
    [
        "Niger",
        "NE",
        "Agadez~1|Diffa~2|Dosso~3|Maradi~4|Niamey~8|Tahoua~5|Tillabéri~6|Zinder~7"
    ],
    [
        "Nigeria",
        "NG",
        "Abia~AB|Abuja Federal Capital Territory~FC|Adamawa~AD|Akwa Ibom~AK|Anambra~AN|Bauchi~BA|Bayelsa~BY|Benue~BE|Borno~BO|Cross River~CR|Delta~DE|Ebonyi~EB|Edo~ED|Ekiti~EK|Enugu~EN|Gombe~GO|Imo~IM|Jigawa~JI|Kaduna~KD|Kano~KN|Katsina~KT|Kebbi~KE|Kogi~KO|Kwara~KW|Lagos~LA|Nasarawa~NA|Niger~NI|Ogun~OG|Ondo~ON|Osun~OS|Oyo~OY|Plateau~PL|Rivers~RI|Sokoto~SO|Taraba~TA|Yobe~YO|Zamfara~ZA"
    ],
    [
        "Niue",
        "NU",
        "Niue~"
    ],
    [
        "Norfolk Island",
        "NF",
        "Norfolk Island~"
    ],
    [
        "Northern Mariana Islands",
        "MP",
        "Northern Islands~|Rota~|Saipan~|Tinian~"
    ],
    [
        "Norway",
        "NO",
        "Akershus~02|Aust-Agder~09|Buskerud~06|Finnmark~20|Hedmark~04|Hordaland~12|Møre og Romsdal~15|Nordland~18|Nord-Trøndelag~17|Oppland~05|Oslo~03|Rogaland~11|Sogn og Fjordane~14|Sør-Trøndelag~16|Telemark~08|Troms~19|Vest-Agder~10|Vestfold~07|Østfold~01|Jan Mayen~22|Svalbard~21"
    ],
    [
        "Oman",
        "OM",
        "Ad Dakhiliyah~DA|Al Buraymi~BU|Al Wusta~WU|Az Zahirah~ZA|Janub al Batinah~BS|Janub ash Sharqiyah~SS|Masqat~MA|Musandam~MU|Shamal al Batinah~BJ|Shamal ash Sharqiyah~SJ|Zufar~ZU"
    ],
    [
        "Pakistan",
        "PK",
        "Azad Kashmir~JK|Balochistan~BA|Gilgit-Baltistan~GB|Islamabad~IS|Khaibar Pakhtunkhwa~KP|Punjab~PB|Sindh~SD|Federally Administered Tribal Areas~TA"
    ],
    [
        "Palau",
        "PW",
        "Aimeliik~002|Airai~004|Angaur~010|Hatobohei~050|Kayangel~100|Koror~150|Melekeok~212|Ngaraard~214|Ngarchelong~218|Ngardmau~222|Ngatpang~224|Ngchesar~226|Ngeremlengui~227|Ngiwal~228|Peleliu~350|Sonsoral~370"
    ],
    [
        "Palestine",
        "PS",
        "Ak Khalīl~HBN|Al Quds~JEM|Arīḩā wal Aghwār~JRH|Bayt Laḩm~BTH|Dayr al Balaḩ~DEB|Ghazzah~GZA|Janīn~JEN|Khān Yūnis~KYS|Nāblus~NBS|Qalqīyah~QQA|Rafaḩ~RFH|Rām Allāh wal Bīrah~RBH|Salfīt~SLT|Shamāl Ghazzah~NGZ|Ţūbās~TBS|Ţūlkarm~TKM"
    ],
    [
        "Panama",
        "PA",
        "Bocas del Toro~1|Chiriquí~4|Coclé~2|Colón~3|Darién~5|Emberá~EM|Herrera~6|Kuna Yala~KY|Los Santos~7|Ngäbe-Buglé~NB|Panamá~8|Panamá Oeste~10|Veraguas~9"
    ],
    [
        "Papua New Guinea",
        "PG",
        "Bougainville~NSB|Central~CPM|Chimbu~CPK|East New Britain~EBR|East Sepik~ESW|Eastern Highlands~EHG|Enga~EPW|Gulf~GPK|Hela~HLA|Jiwaka~JWK|Madang~MOM|Manus~MRL|Milne Bay~MBA|Morobe~MPL|Port Moresby~NCD|New Ireland~NIK|Northern~NPP|Southern Highlands~SHM|West New Britain~WBK|West Sepik~SAN|Western~WPD|Western Highlands~WHM"
    ],
    [
        "Paraguay",
        "PY",
        "Alto Paraguay~16|Alto Parana~10|Amambay~13|Asuncion~ASU|Caaguazu~5|Caazapa~6|Canindeyu~14|Central~11|Concepcion~1|Cordillera~3|Boqueron~17|Guaira~4|Itapua~7|Misiones~8|Neembucu~12|Paraguari~9|Presidente Hayes~15|San Pedro~2"
    ],
    [
        "Peru",
        "PE",
        "Amazonas~AMA|Ancash~ANC|Apurimac~APU|Arequipa~ARE|Ayacucho~AYA|Cajamarca~CAJ|Callao~CAL|Cusco~CUS|Huancavelica~HUV|Huanuco~HUC|Ica~ICA|Junin~JUN|La Libertad~LAL|Lambayeque~LAM|Lima~LIM|Loreto~LOR|Madre de Dios~MDD|Moquegua~MOQ|Municipalidad Metropolitana de Lima~LMA|Pasco~PAS|Piura~PIU|Puno~PUN|San Martin~SAM|Tacna~TAC|Tumbes~TUM|Ucayali~UCA"
    ],
    [
        "Philippines",
        "PH",
        "Autonomous Region in Muslim Mindanao~PH-14|Bicol~PH-05|Cagayan Valley~PH-02|Calabarzon~PH-40|Caraga~PH-13|Central Luzon~PH-03|Central Visayas~PH-07|Cordillera Administrative Region~PH-15|Davao~PH-11|Eastern Visayas~PH-08|Ilocos~PH-01|Mimaropa~PH-41|National Capital Region~PH-00|Northern Mindanao~PH-10|Soccsksargen~PH-12|Western Visayas~PH-06|Zamboanga Peninsula~PH-09"
    ],
    [
        "Pitcairn",
        "PN",
        "Pitcairn Islands~"
    ],
    [
        "Poland",
        "PL",
        "Dolnośląskie~02|Kujawsko-pomorskie~04|Łódzkie~10|Lubelskie~06|Lubuskie~08|Małopolskie~12|Mazowieckie~14|Opolskie~16|Podkarpackie~18|Podlaskie~20|Pomorskie~22|Śląskie~24|Świętokrzyskie~26|Warmińsko-mazurskie~28|Wielkopolskie~30|Zachodniopomorskie~32"
    ],
    [
        "Portugal",
        "PT",
        "Açores~20|Aveiro~01|Beja~02|Braga~03|Bragança~04|Castelo Branco~05|Coimbra~06|Évora~07|Faro~08|Guarda~09|Leiria~10|Lisboa~11|Madeira~30|Portalegre~12|Porto~13|Santarém~14|Setúbal~15|Viana do Castelo~16|Vila Real~17|Viseu~18"
    ],
    [
        "Puerto Rico",
        "PR",
        "Adjuntas~|Aguada~|Aguadilla~|Aguas Buenas~|Aibonito~|Anasco~|Arecibo~|Arroyo~|Barceloneta~|Barranquitas~|Bayamon~|Cabo Rojo~|Caguas~|Camuy~|Canovanas~|Carolina~|Cat~|Ceiba~|Ciales~|Cidra~|Coamo~|Comerio~|Corozal~|Culebra~|Dorado~|Fajardo~|Florida~|Guanica~|Guayama~|Guayanilla~|Guaynabo~|Gurabo~|Hatillo~|Hormigueros~|Humacao~|Isabe~|Juana Diaz~|Juncos~|Lajas~|Lares~|Las Marias~|Las oiza~|Luquillo~|Manati~|Maricao~|Maunabo~|Mayaguez~|Moca~|Morovis~|Naguabo~|Naranjito~|Orocovis~|Patillas~|Penuelas~|Ponce~|Quebradillas~|Rincon~|Rio Grande~|Sabana linas~|San German~|San Juan~|San Lorenzo~|San Sebastian~|Santa Isabel~|Toa Alta~|Toa Baja~|Trujillo Alto~|Utuado~|Vega Alta~|Vega ues~|Villalba~|Yabucoa~|Yauco~"
    ],
    [
        "Qatar",
        "QA",
        "Ad Dawḩah~DA|Al Khawr wa adh Dhakhīrah~KH|Al Wakrah~WA|Ar Rayyān~RA|Ash Shamāl~MS|Az̧ Za̧`āyin~ZA|Umm Şalāl~US"
    ],
    [
        "Réunion",
        "RE",
        "Réunion~"
    ],
    [
        "Romania",
        "RO",
        "Alba~RO-AB|Arad~RO-AR|Arges~RO-AG|Bacau~RO-BC|Bihor~RO-BH|Bistrita-Nasaud~RO-BN|Botosani~RO-BT|Braila~RO-BR|Brasov~RO-BV|Bucharest~RO-B|Buzau~RO-BZ|Calarasi~RO-CL|Caras-Severin~RO-CS|Cluj~RO-CJ|Constanta~RO-CT|Covasna~RO-CV|Dambovita~RO-DB|Dolj~RO-DJ|Galati~RO-GL|Giurgiu~RO-GR|Gorj~RO-GJ|Harghita~RO-HR|Hunedoara~RO-HD|Ialomita~RO-IL|Iasi~RO-IS|Ilfov~RO-IF|Maramures~RO-MM|Mehedinti~RO-MH|Mures~RO-MS|Neamt~RO-NT|Olt~RO-OT|Prahova~RO-PH|Salaj~RO-SJ|Satu Mare~RO-SM|Sibiu~RO-SB|Suceava~RO-SV|Teleorman~RO-TR|Timis~RO-TM|Tulcea~RO-TL|Valcea~RO-VL|Vaslui~RO-VS|Vrancea~RO-VN"
    ],
    [
        "Russian Federation",
        "RU",
        "Republic of Adygea~AD|Republic of Altai (Gorno-Altaysk)~AL|Altai Krai~ALT|Amur Oblast~AMU|Arkhangelsk Oblast~ARK|Astrakhan Oblast~AST|Republic of Bashkortostan~BA|Belgorod Oblast~BEL|Bryansk Oblast~BRY|Republic of Buryatia~BU|Chechen Republic~CE|Chelyabinsk Oblast~CHE|Chukotka Autonomous Okrug~CHU|Chuvash Republic~CU|Republic of Dagestan~DA|Republic of Ingushetia~IN|Irkutsk Oblast~IRK|Ivanovo Oblast~IVA|Jewish Autonomous Oblast~JEW|Kabardino-Balkar Republic~KB|Kaliningrad Oblast~KLN|Republic of Kalmykia~KL|Kaluga Oblast~KLU|Kamchatka Krai~KAM|Karachay-Cherkess Republic~KC|Republic of Karelia~KR|Khabarovsk Krai~KHA|Republic of Khakassia~KK|Khanty-Mansi Autonomous Okrug - Yugra~KHM|Kemerovo Oblast~KEM|Kirov Oblast~KIR|Komi Republic~KO|Kostroma Oblast~KOS|Krasnodar Krai~KDA|Krasnoyarsk Krai~KYA|Kurgan Oblast~KGN|Kursk Oblast~KRS|Leningrad Oblast~LEN|Lipetsk Oblast~LIP|Magadan Oblast~MAG|Mari El Republic~ME|Republic of Mordovia~MO|Moscow Oblast~MOS|Moscow~MOW|Murmansk Oblast~MU|Nenets Autonomous Okrug~NEN|Nizhny Novgorod Oblast~NIZ|Novgorod Oblast~NGR|Novosibirsk Oblast~NVS|Omsk Oblast~OMS|Orenburg Oblast~ORE|Oryol Oblast~ORL|Penza Oblast~PNZ|Perm Krai~PER|Primorsky Krai~PRI|Pskov Oblast~PSK|Rostov Oblast~ROS|Ryazan Oblast~RYA|Saint Petersburg~SPE|Sakha (Yakutia) Republic~SA|Sakhalin Oblast~SAK|Samara Oblast~SAM|Saratov Oblast~SAR|Republic of North Ossetia-Alania~NOA|Smolensk Oblast~SMO|Stavropol Krai~STA|Sverdlovsk Oblast~SVE|Tambov Oblast~TAM|Republic of Tatarstan~TA|Tomsk Oblast~TOM|Tuva Republic~TU|Tula Oblast~TUL|Tver Oblast~TVE|Tyumen Oblast~TYU|Udmurt Republic~UD|Ulyanovsk Oblast~ULY|Vladimir Oblast~VLA|Volgograd Oblast~VGG|Vologda Oblast~VLG|Voronezh Oblast~VOR|Yamalo-Nenets Autonomous Okrug~YAN|Yaroslavl Oblast~YAR|Zabaykalsky Krai~ZAB"
    ],
    [
        "Rwanda",
        "RW",
        "Kigali~01|Eastern~02|Northern~03|Western~04|Southern~05"
    ],
    [
        "Saint Barthélemy",
        "BL",
        "Au Vent~02|Sous le Vent~01"
    ],
    [
        "Saint Helena, Ascension and Tristan da Cunha",
        "SH",
        "Ascension~AC|Saint Helena~HL|Tristan da Cunha~TA"
    ],
    [
        "Saint Kitts and Nevis",
        "KN",
        "Saint Kitts~K|Nevis~N"
    ],
    [
        "Saint Lucia",
        "LC",
        "Anse-la-Raye~01|Canaries~12|Castries~02|Choiseul~03|Dennery~05|Gros Islet~06|Laborie~07|Micoud~08|Soufriere~10|Vieux Fort~11"
    ],
    [
        "Saint Martin",
        "MF",
        "Saint Martin~"
    ],
    [
        "Saint Pierre and Miquelon",
        "PM",
        "Miquelon~|Saint Pierre~"
    ],
    [
        "Saint Vincent and the Grenadines",
        "VC",
        "Charlotte~01|Grenadines~06|Saint Andrew~02|Saint David~03|Saint George~04|Saint Patrick~05"
    ],
    [
        "Samoa",
        "WS",
        "A'ana~AA|Aiga-i-le-Tai~AL|Atua~AT|Fa'asaleleaga~FA|Gaga'emauga~GE|Gagaifomauga~GI|Palauli~PA|Satupa'itea~SA|Tuamasaga~TU|Va'a-o-Fonoti~VF|Vaisigano~VS"
    ],
    [
        "San Marino",
        "SM",
        "Acquaviva~01|Borgo Maggiore~06|Chiesanuova~02|Domagnano~03|Faetano~04|Fiorentino~05|Montegiardino~08|San Marino~07|Serravalle~09"
    ],
    [
        "Sao Tome and Principe",
        "ST",
        "Principe~P|Sao Tome~S"
    ],
    [
        "Saudi Arabia",
        "SA",
        "'Asir~14|Al Bahah~11|Al Hudud ash Shamaliyah~08|Al Jawf~12|Al Madinah al Munawwarah~03|Al Qasim~05|Ar Riyad~01|Ash Sharqiyah~04|Ha'il~06|Jazan~09|Makkah al Mukarramah~02|Najran~10|Tabuk~07"
    ],
    [
        "Senegal",
        "SN",
        "Dakar~DK|Diourbel~DB|Fatick~FK|Kaffrine~KA|Kaolack~KL|Kedougou~KE|Kolda~KD|Louga~LG|Matam~MT|Saint-Louis~SL|Sedhiou~SE|Tambacounda~TC|Thies~TH|Ziguinchor~ZG"
    ],
    [
        "Serbia",
        "RS",
        "Beograd (Belgrade)~00|Borski~14|Braničevski~11|Jablanički~23|Južnobački~06|Južnobanatski~04|Kolubarski~09|Kosovski~25|Kosovsko-Mitrovački~28|Kosovsko-Pomoravski~29|Mačvanski~08|Moravički~17|Nišavski~20|Pčinjski~24|Pećki~26|Pirotski~22|Podunavski~10|Pomoravski~13|Prizrenski~27|Rasinski~19|Raški~18|Severnobački~01|Severnobanatski~03|Srednjebanatski~02|Sremski~07|Šumadijski~12|Toplički~21|Zaječarski~15|Zapadnobački~05|Zlatiborski~16"
    ],
    [
        "Seychelles",
        "SC",
        "Anse aux Pins~01|Anse Boileau~02|Anse Etoile~03|Anse Royale~05|Anu Cap~04|Baie Lazare~06|Baie Sainte Anne~07|Beau Vallon~08|Bel Air~09|Bel Ombre~10|Cascade~11|Glacis~12|Grand'Anse Mahe~13|Grand'Anse Praslin~14|La Digue~15|La Riviere Anglaise~16|Les Mamelles~24|Mont Buxton~17|Mont Fleuri~18|Plaisance~19|Pointe La Rue~20|Port Glaud~21|Roche Caiman~25|Saint Louis~22|Takamaka~23"
    ],
    [
        "Sierra Leone",
        "SL",
        "Eastern~E|Northern~N|Southern~S|Western~W"
    ],
    [
        "Singapore",
        "SG",
        "Central Singapore~01|North East~02|North West~03|South East~04|South West~05"
    ],
    [
        "Sint Maarten (Dutch part)",
        "SX",
        "Sint Maarten~"
    ],
    [
        "Slovakia",
        "SK",
        "Banskobystricky~BC|Bratislavsky~BL|Kosicky~KI|Nitriansky~NI|Presovsky~PV|Trenciansky~TC|Trnavsky~TA|Zilinsky~ZI"
    ],
    [
        "Slovenia",
        "SI",
        "Ajdovscina~001|Apace~195|Beltinci~002|Benedikt~148|Bistrica ob Sotli~149|Bled~003|Bloke~150|Bohinj~004|Borovnica~005|Bovec~006|Braslovce~151|Brda~007|Brezice~009|Brezovica~008|Cankova~152|Celje~011|Cerklje na Gorenjskem~012|Cerknica~013|Cerkno~014|Cerkvenjak~153|Cirkulane~196|Crensovci~015|Crna na Koroskem~016|Crnomelj~017|Destrnik~018|Divaca~019|Dobje~154|Dobrepolje~020|Dobrna~155|Dobrova-Polhov Gradec~021|Dobrovnik~156|Dol pri Ljubljani~022|Dolenjske Toplice~157|Domzale~023|Dornava~024|Dravograd~025|Duplek~026|Gorenja Vas-Poljane~027|Gorisnica~028|Gorje~207|Gornja Radgona~029|Gornji Grad~030|Gornji Petrovci~031|Grad~158|Grosuplje~032|Hajdina~159|Hoce-Slivnica~160|Hodos~161|Horjul~162|Hrastnik~034|Hrpelje-Kozina~035|Idrija~036|Ig~037|Ilirska Bistrica~038|Ivancna Gorica~039|Izola~040|Jesenice~041|Jursinci~042|Kamnik~043|Kanal~044|Kidricevo~045|Kobarid~046|Kobilje~047|Kocevje~048|Komen~049|Komenda~164|Koper~050|Kodanjevica na Krki~197|Kostel~165|Kozje~051|Kranj~052|Kranjska Gora~053|Krizevci~166|Krsko~054|Kungota~055|Kuzma~056|Lasko~057|Lenart~058|Lendava~059|Litija~060|Ljubljana~061|Ljubno~062|Ljutomer~063|Log-Dragomer~208|Logatec~064|Loska Dolina~065|Loski Potok~066|Lovrenc na Pohorju~167|Lukovica~068|Luce~067|Majsperk~069|Makole~198|Maribor~070|Markovci~168|Medvode~071|Menges~072|Metlika~073|Mezica~074|Miklavz na Dravskem Polju~169|Miren-Kostanjevica~075|Mirna~212|Mirna Pec~170|Mislinja~076|Mokronog-Trebelno~199|Moravce~077|Moravske Toplice~078|Mozirje~079|Murska Sobota~080|Naklo~082|Nazarje~083|Nova Gorica~084|Novo Mesto~085|Odranci~086|Ormoz~087|Osilnica~088|Pesnica~089|Piran~090|Pivka~091|Podcetrtek~092|Podlehnik~172|Podvelka~093|Poljcane~200|Postojna~094|Prebold~174|Preddvor~095|Prevalje~175|Ptuj~096|Race-Fram~098|Radece~099|Radenci~100|Radlje ob Dravi~101|Radovljica~102|Ravne na Koroskem~103|Razkrizje~176|Recica ob Savinji~209|Rence-Vogrsko~201|Ribnica~104|Ribnica na Poboriu~177|Rogaska Slatina~106|Rogasovci~105|Rogatec~107|Ruse~108|Salovci~033|Selnica ob Dravi~178|Semic~109|Sempeter-Vrtojba~183|Sencur~117|Sentilj~118|Sentjernej~119|Sentjur~120|Sentrupert~211|Sevnica~110|Sezana~111|Skocjan~121|Skofja Loka~122|Skofljica~123|Slovenj Gradec~112|Slovenska Bistrica~113|Slovenske Konjice~114|Smarje pri elsah~124|Smarjeske Toplice~206|Smartno ob Paki~125|Smartno pri Litiji~194|Sodrazica~179|Solcava~180|Sostanj~126|Sredisce ob Dravi~202|Starse~115|Store~127|Straza~203|Sveta Ana~181|Sveta Trojica v Slovenskih Goricah~204|Sveta Andraz v Slovenskih Goricah~182|Sveti Jurij~116|Sveti Jurij v Slovenskih Goricah~210|Sveti Tomaz~205|Tabor~184|Tisina~010|Tolmin~128|Trbovlje~129|Trebnje~130|Trnovska Vas~185|Trzin~186|Trzic~131|Turnisce~132|Velenje~133|Velika Polana~187|Velike Lasce~134|Verzej~188|Videm~135|Vipava~136|Vitanje~137|Vodice~138|Vojnik~139|Vransko~189|Vrhnika~140|Vuzenica~141|Zagorje ob Savi~142|Zavrc~143|Zrece~144|Zalec~190|Zelezniki~146|Zetale~191|Ziri~147|Zirovnica~192|Zuzemberk~193"
    ],
    [
        "Solomon Islands",
        "SB",
        "Central~CE|Choiseul~CH|Guadalcanal~GU|Honiara~CT|Isabel~IS|Makira-Ulawa~MK|Malaita~ML|Rennell and Bellona~RB|Temotu~TE|Western~WE"
    ],
    [
        "Somalia",
        "SO",
        "Awdal~AW|Bakool~BK|Banaadir~BN|Bari~BR|Bay~BY|Galguduud~GA|Gedo~GE|Hiiraan~HI|Jubbada Dhexe~JD|Jubbada Hoose~JH|Mudug~MU|Nugaal~NU|Sanaag~SA|Shabeellaha Dhexe~SD|Shabeellaha Hoose~SH|Sool~SO|Togdheer~TO|Woqooyi Galbeed~WO"
    ],
    [
        "South Africa",
        "ZA",
        "Eastern Cape~EC|Free State~FS|Gauteng~GT|KwaZulu-Natal~NL|Limpopo~LP|Mpumalanga~MP|Northern Cape~NC|North West~NW|Western Cape~WC"
    ],
    [
        "South Georgia and South Sandwich Islands",
        "GS",
        "Bird Island~|Bristol Island~|Clerke Rocks~|Montagu Island~|Saunders Island~|South Georgia~|Southern Thule~|Traversay Islands~"
    ],
    [
        "South Sudan",
        "SS",
        "Central Equatoria~CE|Eastern Equatoria~EE|Jonglei~JG|Lakes~LK|Northern Bahr el Ghazal~BN|Unity~UY|Upper Nile~NU|Warrap~WR|Western Bahr el Ghazal~BW|Western Equatoria~EW"
    ],
    [
        "Spain",
        "ES",
        "Andalucìa~AN|Albacete~AB|Alicante~A|Almería~AL|Araba/Álava~VI|Asturias~O|Ávila~AV|Aragòn~AR|Badajoz~BA|Barcelona~B|Bizkaia~BI|Burgos~BU|Cáceres~CC|Cádiz~CA|Canarias~CN|Cantabria~S|Castellón/Castelló~CS|Ceuta~CE|Ciudad Real~CR|Córdoba~CO|A Coruña~C|Cuenca~CU|Gipuzkoa~SS|Girona~GI|Granada~GR|Guadalajara~GU|Huelva~H|Huesca~HU|Illes Balears~PM|Jaén~J|León~LE|Lleida~L|Lugo~LU|Madrid~M|Málaga~MA|Melilla~ML|Murcia~MU|Navarra/Nafarroa~NA|Ourense~OR|Palencia~P|Las Palmas~GC|Pontevedra~PO|La Rioja~LO|Salamanca~SA|Santa Cruz de Tenerife~TF|Segovia~SG|Sevilla~SE|Soria~SO|Tarragona~T|Teruel~TE|Toledo~TO|Valencia/València~V|Valladolid~VA|Zamora~ZA|Zaragoza~Z"
    ],
    [
        "Sri Lanka",
        "LK",
        "Basnahira~1|Dakunu~3|Madhyama~2|Naegenahira~5|Sabaragamuwa~9|Uturu~4|Uturumaeda~7|Vayamba~6|Uva~8"
    ],
    [
        "Sudan",
        "SD",
        "Al Bahr al Ahmar~RS|Al Jazirah~GZ|Al Khartum~KH|Al Qadarif~GD|An Nil al Abyad~NW|An Nil al Azraq~NB|Ash Shamaliyah~NO|Gharb Darfur~DW|Gharb Kurdufan~GK|Janub Darfur~DS|Janub Kurdufan~KS|Kassala~KA|Nahr an Nil~NR|Shamal Darfur~DN|Sharq Darfur~DE|Shiamal Kurdufan~KN|Sinnar~SI|Wasat Darfur Zalinjay~DC"
    ],
    [
        "Suriname",
        "SR",
        "Brokopondo~BR|Commewijne~CM|Coronie~CR|Marowijne~MA|Nickerie~NI|Para~PR|Paramaribo~PM|Saramacca~SA|Sipaliwini~SI|Wanica~WA"
    ],
    [
        "Eswatini",
        "SZ",
        "Hhohho~HH|Lubombo~LU|Manzini~MA|Shiselweni~SH"
    ],
    [
        "Sweden",
        "SE",
        "Blekinge~K|Dalarna~W|Gävleborg~X|Gotland~I|Halland~N|Jämtland~Z|Jönköping~F|Kalmar~H|Kronoberg~G|Norrbotten~BD|Örebro~T|Östergötland~E|Skåne~M|Södermanland~D|Stockholm~AB|Uppsala~C|Värmland~S|Västerbotten~AC|Västernorrland~Y|Västmanland~U|Västra Götaland~O"
    ],
    [
        "Switzerland",
        "CH",
        "Aargau~AG|Appenzell Ausserrhoden~AR|Appenzell Innerhoden~AI|Basel-Landschaft~BL|Basel-Stadt~BS|Bern~BE|Fribourg~FR|Genève~GE|Glarus~GL|Graubünden~GR|Jura~JU|Luzern~LU|Neuchâtel~NE|Nidwalden~NW|Obwalden~OW|Sankt Gallen~SG|Schaffhausen~SH|Schwyz~SZ|Solothurn~SO|Thurgau~TG|Ticino~TI|Uri~UR|Valais~VS|Vaud~VD|Zug~ZG|Zürich~ZH"
    ],
    [
        "Syrian Arab Republic",
        "SY",
        "Al Hasakah~HA|Al Ladhiqiyah~LA|Al Qunaytirah~QU|Ar Raqqah~RA|As Suwayda'~SU|Dar'a~DR|Dayr az Zawr~DY|Dimashq~DI|Halab~HL|Hamah~HM|Hims~HI|Idlib~ID|Rif Dimashq~RD|Tartus~TA"
    ],
    [
        "Taiwan",
        "TW",
        "Changhua~CHA|Chiayi~CYQ|Hsinchu~HSQ|Hualien~HUA|Kaohsiung~KHH|Keelung~KEE|Kinmen~KIN|Lienchiang~LIE|Miaoli~MIA|Nantou~NAN|Penghu~PEN|New Taipei~NWT|Pingtung~PIF|Taichung~TXG|Tainan~TNN|Taipei~TPE|Taitung~TTT|Taoyuan~TAO|Yilan~ILA|Yunlin~YUN"
    ],
    [
        "Tajikistan",
        "TJ",
        "Dushanbe~DU|Kŭhistoni Badakhshon~GB|Khatlon~KT|Sughd~SU"
    ],
    [
        "Tanzania, United Republic of",
        "TZ",
        "Arusha~01|Coast~19|Dar es Salaam~02|Dodoma~03|Iringa~04|Kagera~05|Kigoma~08|Kilimanjaro~09|Lindi~12|Manyara~26|Mara~13|Mbeya~14|Morogoro~16|Mtwara~17|Mwanza~18|Pemba North~06|Pemba South~10|Rukwa~20|Ruvuma~21|Shinyanga~22|Singida~23|Tabora~24|Tanga~25|Zanzibar North~07|Zanzibar Central/South~11|Zanzibar Urban/West~15"
    ],
    [
        "Thailand",
        "TH",
        "Amnat Charoen~37|Ang Thong~15|Bueng Kan~38|Buri Ram~31|Chachoengsao~24|Chai Nat~18|Chaiyaphum~36|Chanthaburi~22|Chiang Mai~50|Chiang Rai~57|Chon Buri~20|Chumphon~86|Kalasin~46|Kamphaeng Phet~62|Kanchanaburi~71|Khon Kaen~40|Krabi~81|Krung Thep Mahanakhon (Bangkok)~10|Lampang~52|Lamphun~51|Loei~42|Lop Buri~16|Mae Hong Son~58|Maha Sarakham~44|Mukdahan~49|Nakhon Nayok~26|Nakhon Phathom~73|Nakhon Phanom~48|Nakhon Ratchasima~30|Nakhon Sawan~60|Nakhon Si Thammarat~80|Nan~55|Narathiwat~96|Nong Bua Lam Phu~39|Nong Khai~43|Nonthaburi~12|Pathum Thani~13|Pattani~94|Phangnga~82|Phatthalung~93|Phayao~56|Phetchabun~67|Phetchaburi~76|Phichit~66|Phitsanulok~65|Phra Nakhon Si Ayutthaya~14|Phrae~54|Phuket~83|Prachin Buri~25|Prachuap Khiri Khan~77|Ranong~85|Ratchaburi~70|Rayong~21|Roi Et~45|Sa Kaeo~27|Sakon Nakhon~47|Samut Prakan~11|Samut Sakhon~74|Samut Songkhram~75|Saraburi~19|Satun~91|Sing Buri~17|Si Sa ket~33|Songkhla~90|Sukhothai~64|Suphan Buri~72|Surat Thani~84|Surin~32|Tak~63|Trang~92|Trat~23|Ubon Ratchathani~34|Udon Thani~41|Uthai Thani~61|Uttaradit~53|Yala~95|Yasothon~35"
    ],
    [
        "Timor-Leste",
        "TL",
        "Aileu~AL|Ainaro~AN|Baucau~BA|Bobonaro~BO|Cova Lima~CO|Dili~DI|Ermera~ER|Lautem~LA|Liquica~LI|Manatuto~MT|Manufahi~MF|Oecussi~OE|Viqueque~VI"
    ],
    [
        "Togo",
        "TG",
        "Centre~C|Kara~K|Maritime~M|Plateaux~P|Savannes~S"
    ],
    [
        "Tokelau",
        "TK",
        "Atafu~|Fakaofo~|Nukunonu~"
    ],
    [
        "Tonga",
        "TO",
        "'Eua~01|Ha'apai~02|Niuas~03|Tongatapu~04|Vava'u~05"
    ],
    [
        "Trinidad and Tobago",
        "TT",
        "Arima~ARI|Chaguanas~CHA|Couva-Tabaquite-Talparo~CTT|Diefo Martin~DMN|Mayaro-Rio Claro~MRC|Penal-Debe~PED|Point Fortin~PTF|Port-of-Spain~POS|Princes Town~PRT|San Fernando~SFO|San Juan-Laventille~SJL|Sangre Grande~SGE|Siparia~SIP|Tobago~TOB|Tunapuna-Piarco~TUP"
    ],
    [
        "Tunisia",
        "TN",
        "Ariana~12|Beja~31|Ben Arous~13|Bizerte~23|Gabes~81|Gafsa~71|Jendouba~32|Kairouan~41|Kasserine~42|Kebili~73|Kef~33|Mahdia~53|Medenine~82|Monastir~52|Nabeul~21|Sfax~61|Sidi Bouzid~43|Siliana~34|Sousse~51|Tataouine~83|Tozeur~72|Tunis~11|Zaghouan~22"
    ],
    [
        "Turkey",
        "TR",
        "Adana~01|Adiyaman~02|Afyonkarahisar~03|Agri~04|Aksaray~68|Amasya~05|Ankara~06|Antalya~07|Ardahan~75|Artvin~08|Aydin~09|Balikesir~10|Bartin~74|Batman~72|Bayburt~69|Bilecik~11|Bingol~12|Bitlis~13|Bolu~14|Burdur~15|Bursa~16|Canakkale~17|Cankiri~18|Corum~19|Denizli~20|Diyarbakir~21|Duzce~81|Edirne~22|Elazig~23|Erzincan~24|Erzurum~25|Eskisehir~26|Gaziantep~27|Giresun~28|Gumushane~29|Hakkari~30|Hatay~31|Igdir~76|Isparta~32|Istanbul~34|Izmir~35|Kahramanmaras~46|Karabuk~78|Karaman~70|Kars~36|Kastamonu~37|Kayseri~38|Kilis~79|Kirikkale~71|Kirklareli~39|Kirsehir~40|Kocaeli~41|Konya~42|Kutahya~43|Malatya~44|Manisa~45|Mardin~47|Mersin~33|Mugla~48|Mus~49|Nevsehir~50|Nigde~51|Ordu~52|Osmaniye~80|Rize~53|Sakarya~54|Samsun~55|Sanliurfa~63|Siirt~56|Sinop~57|Sirnak~73|Sivas~58|Tekirdag~59|Tokat~60|Trabzon~61|Tunceli~62|Usak~64|Van~65|Yalova~77|Yozgat~66|Zonguldak~67"
    ],
    [
        "Turkmenistan",
        "TM",
        "Ahal~A|Asgabat~S|Balkan~B|Dashoguz~D|Lebap~L|Mary~M"
    ],
    [
        "Turks and Caicos Islands",
        "TC",
        "Turks and Caicos Islands~"
    ],
    [
        "Tuvalu",
        "TV",
        "Funafuti~FUN|Nanumanga~NMG|Nanumea~NMA|Niutao~NIT|Nui~NUI|Nukufetau~NKF|Nukulaelae~NKL|Vaitupu~VAU"
    ],
    [
        "Uganda",
        "UG",
        "Abim~317|Adjumani~301|Amolatar~314|Amuria~216|Amuru~319|Apac~302|Arua~303|Budaka~217|Bududa~223|Bugiri~201|Bukedea~224|Bukwa~218|Buliisa~419|Bundibugyo~401|Bushenyi~402|Busia~202|Butaleja~219|Dokolo~318|Gulu~304|Hoima~403|Ibanda~416|Iganga~203|Isingiro~417|Jinja~204|Kaabong~315|Kabale~404|Kabarole~405|Kaberamaido~213|Kalangala~101|Kaliro~220|Kampala~102|Kamuli~205|Kamwenge~413|Kanungu~414|Kapchorwa~206|Kasese~406|Katakwi~207|Kayunga~112|Kibaale~407|Kiboga~103|Kiruhura~418|Kisoro~408|Kitgum~305|Koboko~316|Kotido~306|Kumi~208|Kyenjojo~415|Lira~307|Luwero~104|Lyantonde~116|Manafwa~221|Maracha~320|Masaka~105|Masindi~409|Mayuge~214|Mbale~209|Mbarara~410|Mityana~114|Moroto~308|Moyo~309|Mpigi~106|Mubende~107|Mukono~108|Nakapiripirit~311|Nakaseke~115|Nakasongola~109|Namutumba~222|Nebbi~310|Ntungamo~411|Oyam~321|Pader~312|Pallisa~210|Rakai~110|Rukungiri~412|Sembabule~111|Sironko~215|Soroti~211|Tororo~212|Wakiso~113|Yumbe~313"
    ],
    [
        "Ukraine",
        "UA",
        "Cherkaska oblast~71|Chernihivska oblast~74|Chernivetska oblast~77|Dnipropetrovska oblast~12|Donetska oblast~14|Ivano-Frankivska oblast~26|Kharkivska oblast~63|Khersonska oblast~65|Khmelnytska oblast~68|Kyivska oblast~32|Kirovohradska oblast~35|Luhanska oblast~09|Lvivska oblast~46|Mykolaivska oblast~48|Odeska oblast~51|Poltavska oblast~53|Rivnenska oblast~56|Sumska oblast~59|Ternopilska oblast~61|Vinnytska oblast~05|Volynska oblast~07|Zakarpatska oblast~21|Zaporizka oblast~23|Zhytomyrska oblast~18|Avtonomna Respublika Krym~43|Kyiv~30|Sevastopol~40"
    ],
    [
        "United Arab Emirates",
        "AE",
        "Abu Dhabi~AZ|Ajman~AJ|Dubai~DU|Fujairah~FU|Ras al Khaimah~RK|Sharjah~SH|Umm Al Quwain~UQ"
    ],
    [
        "United Kingdom",
        "GB",
        "Aberdeen City~ABE|Aberdeenshire~ABD|Angus~ANS|Antrim and Newtownabbey~ANN|Ards and North Down~AND|Argyll and Bute~AGB|Armagh City, Banbridge and Craigavon~ABC|Barking and Dagenham~BDG|Barnet~BNE|Barnsley~BNS|Bath and North East Somerset~BAS|Bedford~BDF|Belfast City~BFS|Berkshire~BRK|Bexley~BEX|Birmingham~BIR|Blackburn with Darwen~BBD|Blackpool~BPL|Blaenau Gwent~BGW|Bolton~BOL|Bournemouth, Christchurch and Poole~BCP|Bracknell Forest~BRC|Bradford~BRD|Brent~BEN|Bridgend~BGE|Brighton and Hove~BNH|Bristol, City of~BST|Bromley~BRY|Buckinghamshire~BKM|Bury~BUR|Caerphilly~CAY|Calderdale~CLD|Cambridgeshire~CAM|Camden~CMD|Cardiff~CRF|Carmarthenshire~CMN|Causeway Coast and Glens~CCG|Central Bedfordshire~CBF|Ceredigion~CGN|Cheshire East~CHE|Cheshire West and Chester~CHW|Clackmannanshire~CLK|Conwy~CWY|Cornwall~CON|Coventry~COV|Croydon~CRY|Cumbria~CMA|Darlington~DAL|Denbighshire~DEN|Derby~DER|Derbyshire~DBY|Derry and Strabane~DRS|Devon~DEV|Doncaster~DNC|Dorset~DOR|Dudley~DUD|Dumfries and Galloway~DGY|Dundee City~DND|Durham, County~DUR|Ealing~EAL|East Ayrshire~EAY|East Dunbartonshire~EDU|East Lothian~ELN|East Renfrewshire~ERW|East Riding of Yorkshire~ERY|East Sussex~ESX|Edinburgh, City of~EDH|Eilean Siar~ELS|Enfield~ENF|Essex~ESS|Falkirk~FAL|Fermanagh and Omagh~FMO|Fife~FIF|Flintshire~FLN|Gateshead~GAT|Glasgow City~GLG|Gloucestershire~GLS|Greenwich~GRE|Gwynedd~GWN|Hackney~HCK|Halton~HAL|Hammersmith and Fulham~HMF|Hampshire~HAM|Haringey~HRY|Harrow~HRW|Hartlepool~HPL|Havering~HAV|Herefordshire~HEF|Hertfordshire~HRT|Highland~HLD|Hillingdon~HIL|Hounslow~HNS|Inverclyde~IVC|Isle of Anglesey~AGY|Isle of Wight~IOW|Isles of Scilly~IOS|Islington~ISL|Kensington and Chelsea~KEC|Kent~KEN|Kingston upon Hull~KHL|Kingston upon Thames~KTT|Kirklees~KIR|Knowsley~KWL|Lambeth~LBH|Lancashire~LAN|Leeds~LDS|Leicester~LCE|Leicestershire~LEC|Lewisham~LEW|Lincolnshire~LIN|Lisburn and Castlereagh~LBC|Liverpool~LIV|London, City of~LND|Luton~LUT|Manchester~MAN|Medway~MDW|Merthyr Tydfil~MTY|Merton~MRT|Mid and East Antrim~MEA|Mid-Ulster~MUL|Middlesbrough~MDB|Midlothian~MLN|Milton Keynes~MIK|Monmouthshire~MON|Moray~MRY|Neath Port Talbot~NTL|Newcastle upon Tyne~NET|Newham~NWM|Newport~NWP|Newry, Mourne and Down~NMD|Norfolk~NFK|North Ayrshire~NAY|North East Lincolnshire~NEL|North Lanarkshire~NLK|North Lincolnshire~NLN|North Somerset~NSM|North Tyneside~NTY|North Yorkshire~NYK|Northamptonshire~NTH|Northumberland~NBL|Nottingham~NGM|Nottinghamshire~NTT|Oldham~OLD|Orkney Islands~ORK|Oxfordshire~OXF|Pembrokeshire~PEM|Perth and Kinross~PKN|Peterborough~PTE|Plymouth~PLY|Portsmouth~POR|Powys~POW|Reading~RDG|Redbridge~RDB|Redcar and Cleveland~RCC|Renfrewshire~RFW|Rhondda Cynon Taff~RCT|Richmond upon Thames~RIC|Rochdale~RCH|Rotherham~ROT|Rutland~RUT|Salford~SLF|Sandwell~SAW|Scottish Borders~SCB|Sefton~SFT|Sheffield~SHF|Shetland Islands~ZET|Shropshire~SHR|Slough~SLG|Solihull~SOL|Somerset~SOM|South Ayrshire~SAY|South Gloucestershire~SGC|South Lanarkshire~SLK|South Tyneside~STY|Southampton~STH|Southend-on-Sea~SOS|Southwark~SWK|St. Helens~SHN|Staffordshire~STS|Stirling~STG|Stockport~SKP|Stockton-on-Tees~STT|Stoke-on-Trent~STE|Suffolk~SFK|Sunderland~SND|Surrey~SRY|Sutton~STN|Swansea~SWA|Swindon~SWD|Tameside~TAM|Telford and Wrekin~TFW|Thurrock~THR|Torbay~TOB|Torfaen~TOF|Tower Hamlets~TWH|Trafford~TRF|Vale of Glamorgan, The~VGL|Wakefield~WKF|Walsall~WLL|Waltham Forest~WFT|Wandsworth~WND|Warrington~WRT|Warwickshire~WAR|West Berkshire~WBK|West Dunbartonshire~WDU|West Lothian~WLN|West Sussex~WSX|Westminster~WSM|Wigan~WGN|Wiltshire~WIL|Windsor and Maidenhead~WNM|Wirral~WRL|Wokingham~WOK|Wolverhampton~WLV|Worcestershire~WOR|Wrexham~WRX|York~YOR"
    ],
    [
        "United States",
        "US",
        "Alabama~AL|Alaska~AK|American Samoa~AS|Arizona~AZ|Arkansas~AR|California~CA|Colorado~CO|Connecticut~CT|Delaware~DE|District of Columbia~DC|Micronesia~FM|Florida~FL|Georgia~GA|Guam~GU|Hawaii~HI|Idaho~ID|Illinois~IL|Indiana~IN|Iowa~IA|Kansas~KS|Kentucky~KY|Louisiana~LA|Maine~ME|Marshall Islands~MH|Maryland~MD|Massachusetts~MA|Michigan~MI|Minnesota~MN|Mississippi~MS|Missouri~MO|Montana~MT|Nebraska~NE|Nevada~NV|New Hampshire~NH|New Jersey~NJ|New Mexico~NM|New York~NY|North Carolina~NC|North Dakota~ND|Northern Mariana Islands~MP|Ohio~OH|Oklahoma~OK|Oregon~OR|Palau~PW|Pennsylvania~PA|Puerto Rico~PR|Rhode Island~RI|South Carolina~SC|South Dakota~SD|Tennessee~TN|Texas~TX|Utah~UT|Vermont~VT|Virgin Islands~VI|Virginia~VA|Washington~WA|West Virginia~WV|Wisconsin~WI|Wyoming~WY|Armed Forces Americas~AA|Armed Forces Europe, Canada, Africa and Middle East~AE|Armed Forces Pacific~AP"
    ],
    [
        "United States Minor Outlying Islands",
        "UM",
        "Baker Island~81|Howland Island~84|Jarvis Island~86|Johnston Atoll~67|Kingman Reef~89|Midway Islands~71|Navassa Island~76|Palmyra Atoll~95|Wake Island~79|Bajo Nuevo Bank~BN|Serranilla Bank~SB"
    ],
    [
        "Uruguay",
        "UY",
        "Artigas~AR|Canelones~CA|Cerro Largo~CL|Colonia~CO|Durazno~DU|Flores~FS|Florida~FD|Lavalleja~LA|Maldonado~MA|Montevideo~MO|Paysandú~PA|Río Negro~RN|Rivera~RV|Rocha~RO|Salto~SA|San José~SJ|Soriano~SO|Tacuarembó~TA|Treinta y Tres~TT"
    ],
    [
        "Uzbekistan",
        "UZ",
        "Toshkent shahri~TK|Andijon~AN|Buxoro~BU|Farg‘ona~FA|Jizzax~JI|Namangan~NG|Navoiy~NW|Qashqadaryo (Qarshi)~QA|Samarqand~SA|Sirdaryo (Guliston)~SI|Surxondaryo (Termiz)~SU|Toshkent wiloyati~TO|Xorazm (Urganch)~XO|Qoraqalpog‘iston Respublikasi (Nukus)~QR"
    ],
    [
        "Vanuatu",
        "VU",
        "Malampa~MAP|Pénama~PAM|Sanma~SAM|Shéfa~SEE|Taféa~TAE|Torba~TOB"
    ],
    [
        "Venezuela, Bolivarian Republic of",
        "VE",
        "Dependencias Federales~W|Distrito Federal~A|Amazonas~Z|Anzoátegui~B|Apure~C|Aragua~D|Barinas~E|Bolívar~F|Carabobo~G|Cojedes~H|Delta Amacuro~Y|Falcón~I|Guárico~J|Lara~K|Mérida~L|Miranda~M|Monagas~N|Nueva Esparta~O|Portuguesa~P|Sucre~R|Táchira~S|Trujillo~T|Vargas~X|Yaracuy~U|Zulia~V"
    ],
    [
        "Vietnam",
        "VN",
        "An Giang~44|Bà Rịa - Vũng Tàu~43|Bình Dương~57|Bình Phước~58|Bình Định~31|Bình Thuận~40|Bạc Liêu~55|Bắc Giang~54|Bắc Kạn~53|Bắc Ninh~56|Bến Tre~50|Cao Bằng~04|Cà Mau~59|Đắk Lắk~33|Đắk Nông~72|Điện Biên~71|Đồng Nai~39|Đồng Tháp~45|Gia Lai~30|Hà Giang~03|Hà Nam~63|Hà Tây~15|Hà Tĩnh~23|Hải Dương~61|Hậu Giang~73|Hòa Bình~14|Hưng Yên~66|Khánh Hòa~34|Kiên Giang~47|Kon Tum~28|Lai Châu~01|Lâm Đồng~35|Lạng Sơn~09|Lào Cai~02|Long An~41|Nam Định~67|Nghệ An~22|Ninh Bình~18|Ninh Thuận~36|Phú Thọ~68|Phú Yên~32|Quảng Bình~24|Quảng Nam~27|Quảng Ngãi~29|Quảng Ninh~13|Quảng Trị~25|Sóc Trăng~52|Sơn La~05|Tây Ninh~37|Thái Bình~20|Thái Nguyên~69|Thanh Hóa~21|Thừa Thiên–Huế~26|Tiền Giang~46|Trà Vinh~51|Tuyên Quang~07|Vĩnh Long~49|Vĩnh Phúc~70|Yên Bái~06|Cần Thơ~CT|Đà Nẵng~DN|Hà Nội~HN|Hải Phòng~HP|Hồ Chí Minh (Sài Gòn)~SG"
    ],
    [
        "Virgin Islands, British",
        "VG",
        "Anegada~ANG|Jost Van Dyke~JVD|Tortola~TTA|Virgin Gorda~VGD"
    ],
    [
        "Virgin Islands, U.S.",
        "VI",
        "St. Thomas~STH|St. John~SJO|St. Croix~SCR"
    ],
    [
        "Wallis and Futuna",
        "WF",
        "Alo~ALO|Sigave~SIG|Wallis~WAL"
    ],
    [
        "Western Sahara",
        "EH",
        "Es Smara~ESM|Boujdour~BOD|Laâyoune~LAA|Aousserd~AOU|Oued ed Dahab~OUD"
    ],
    [
        "Yemen",
        "YE",
        "Abyān~AB|'Adan~AD|Aḑ Ḑāli'~DA|Al Bayḑā'~BA|Al Ḩudaydah~HU|Al Jawf~JA|Al Mahrah~MR|Al Maḩwīt~MW|'Amrān~AM|Dhamār~DH|Ḩaḑramawt~HD|Ḩajjah~HJ|Ibb~IB|Laḩij~LA|Ma'rib~MA|Raymah~RA|Şā‘dah~SD|Şan‘ā'~SN|Shabwah~SH|Tā‘izz~TA"
    ],
    [
        "Zambia",
        "ZM",
        "Central~02|Copperbelt~08|Eastern~03|Luapula~04|Lusaka~09|Muchinga~10|Northern~05|North-Western~06|Southern~07|Western~01"
    ],
    [
        "Zimbabwe",
        "ZW",
        "Bulawayo~BU|Harare~HA|Manicaland~MA|Mashonaland Central~MC|Mashonaland East~ME|Mashonaland West~MW|Masvingo~MV|Matabeleland North~MN|Matabeleland South~MS|Midlands~MI"
    ]
];

export default countries;