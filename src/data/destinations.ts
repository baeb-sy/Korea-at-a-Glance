import type { Destination } from "./destinationTypes";
import gyeongbokgungPalaceImage from "../assets/images/destinations/gyeongbokgung-palace.webp";
import bukchonHanokVillageImage from "../assets/images/destinations/bukchon-hanok-village.webp";
import haeundaeBeachImage from "../assets/images/destinations/haeundae-beach.webp";
import bulguksaTempleImage from "../assets/images/destinations/bulguksa-temple.webp";
import seongsanIlchulbongImage from "../assets/images/destinations/seongsan-ilchulbong.webp";
import namiIslandImage from "../assets/images/destinations/nami-island.webp";

const placeholderImagePath =
  "/images/placeholders/destination-placeholder.webp";

type UnverifiedDestinationField =
  | "koreanAddress"
  | "coordinates"
  | "images"
  | "operatingInfo"
  | "externalMapUrl"
  | "officialInfoUrl"
  | "lastVerifiedAt"
  | "nearestTransit";

type DestinationContent = Omit<Destination, UnverifiedDestinationField> & {
  image?: Destination["images"][number];
};

function createDestination({
  image,
  ...content
}: DestinationContent): Destination {
  return {
    ...content,
    koreanAddress: null,
    coordinates: null,
    images: image
      ? [image]
      : [
          {
            src: placeholderImagePath,
            alt: {
              en: `Image placeholder for ${content.name.en}`,
              es: `Imagen provisional de ${content.name.es}`,
            },
          },
        ],
    operatingInfo: null,
    externalMapUrl: null,
    lastVerifiedAt: null,
  };
}

export const destinations = [
  createDestination({
    id: "gyeongbokgung-palace",
    slug: "gyeongbokgung-palace",
    name: { en: "Gyeongbokgung Palace", es: "Palacio Gyeongbokgung" },
    koreanName: "경복궁",
    image: {
      src: gyeongbokgungPalaceImage,
      alt: {
        en: "Geunjeongjeon Hall rising above visitors in the main courtyard of Gyeongbokgung Palace",
        es: "El pabellón Geunjeongjeon sobre los visitantes en el patio principal del palacio Gyeongbokgung",
      },
      credit: "Brady Bellini / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gyeongbokgung(palace)_Geunjeongjeon(hall).jpg",
      license: "CC0 1.0 Universal",
    },
    summary: {
      en: "A grand Joseon palace that introduces Seoul's royal history through gates, courtyards, and mountain views.",
      es: "Un gran palacio de Joseon que acerca a la historia real de Seúl entre puertas, patios y vistas a la montaña.",
    },
    description: {
      en: "Gyeongbokgung was the principal palace of the Joseon dynasty and remains one of the clearest places to understand Korea's royal architecture. Its ceremonial spaces, restored halls, and setting beneath Bugaksan Mountain make it a strong first stop for visitors interested in Seoul's past.",
      es: "Gyeongbokgung fue el palacio principal de la dinastía Joseon y sigue siendo uno de los mejores lugares para comprender la arquitectura real de Corea. Sus espacios ceremoniales, pabellones restaurados y el paisaje bajo la montaña Bugaksan ofrecen una buena introducción al pasado de Seúl.",
    },
    region: "seoul-capital",
    themes: ["history-heritage", "culture-arts"],
    seasons: ["all-season"],
    visitTips: [
      { en: "Allow time to explore the courtyards beyond the main gate.", es: "Reserva tiempo para recorrer los patios que hay más allá de la entrada principal." },
      { en: "Pair the palace with Gwanghwamun Square or nearby historic neighborhoods.", es: "Combina la visita con la plaza Gwanghwamun o los barrios históricos cercanos." },
    ],
  }),
  createDestination({
    id: "bukchon-hanok-village",
    slug: "bukchon-hanok-village",
    name: { en: "Bukchon Hanok Village", es: "Aldea Hanok de Bukchon" },
    koreanName: "북촌한옥마을",
    image: {
      src: bukchonHanokVillageImage,
      alt: {
        en: "Traditional hanok homes along a sloping lane with central Seoul in the distance",
        es: "Casas hanok tradicionales junto a una calle en pendiente con el centro de Seúl al fondo",
      },
      credit: "Bgag / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Bukchon_Hanok_Village_01.jpg",
      license: "CC0 1.0 Universal",
    },
    summary: {
      en: "A living Seoul neighborhood where traditional hanok houses line narrow hillside lanes.",
      es: "Un barrio habitado de Seúl donde las casas tradicionales hanok bordean estrechas calles en pendiente.",
    },
    description: {
      en: "Bukchon preserves clusters of traditional Korean houses between major royal palaces. Walking its lanes reveals rooflines and courtyards while showing how heritage architecture remains part of an active residential neighborhood.",
      es: "Bukchon conserva conjuntos de casas tradicionales coreanas entre importantes palacios reales. Al recorrer sus calles se descubren tejados y patios, además de la forma en que esta arquitectura sigue integrada en un barrio residencial activo.",
    },
    region: "seoul-capital",
    themes: ["history-heritage", "culture-arts"],
    seasons: ["spring", "autumn"],
    visitTips: [
      { en: "Keep voices low and respect signs because people live in the neighborhood.", es: "Habla en voz baja y respeta las señales, ya que es un barrio residencial." },
      { en: "Wear comfortable shoes for slopes, steps, and uneven lanes.", es: "Lleva calzado cómodo para las pendientes, escaleras y calles irregulares." },
    ],
  }),
  createDestination({
    id: "n-seoul-tower",
    slug: "n-seoul-tower",
    name: { en: "N Seoul Tower", es: "Torre N de Seúl" },
    koreanName: "남산서울타워",
    summary: {
      en: "A hilltop Seoul landmark with wide views across the capital's dense urban landscape.",
      es: "Un símbolo de Seúl situado en una colina, con amplias vistas sobre el paisaje urbano de la capital.",
    },
    description: {
      en: "N Seoul Tower rises above the city on Namsan Mountain and forms a recognizable point in the skyline. Visitors come for the elevated perspective, surrounding park paths, and contrast between wooded slopes and dense city streets.",
      es: "La Torre N de Seúl se eleva sobre la ciudad desde la montaña Namsan y es un punto reconocible de su perfil urbano. La visita combina vistas elevadas, senderos del parque y el contraste entre la ladera arbolada y las calles de la capital.",
    },
    region: "seoul-capital",
    themes: ["city-architecture", "family-leisure"],
    seasons: ["autumn", "winter"],
    visitTips: [
      { en: "Check visibility before choosing a day for panoramic views.", es: "Comprueba la visibilidad antes de elegir el día si buscas vistas panorámicas." },
      { en: "Leave time to enjoy the Namsan paths as well as the tower area.", es: "Reserva tiempo para recorrer los senderos de Namsan además de la zona de la torre." },
    ],
  }),
  createDestination({
    id: "changdeokgung-palace",
    slug: "changdeokgung-palace",
    name: { en: "Changdeokgung Palace", es: "Palacio Changdeokgung" },
    koreanName: "창덕궁",
    summary: {
      en: "A Joseon palace celebrated for the way its halls and garden follow the natural landscape.",
      es: "Un palacio de Joseon reconocido por la armonía de sus pabellones y jardines con el paisaje natural.",
    },
    description: {
      en: "Changdeokgung offers an intimate palace experience whose buildings adapt to the terrain. Its landscaped rear garden shows how architecture, water, stone, and woodland were composed as part of a royal retreat.",
      es: "Changdeokgung ofrece una experiencia palaciega íntima, con edificios adaptados al terreno. El jardín posterior muestra cómo la arquitectura, el agua, la piedra y el bosque formaban un retiro real.",
    },
    region: "seoul-capital",
    themes: ["history-heritage", "nature-scenic"],
    seasons: ["spring", "autumn"],
    visitTips: [
      { en: "Review current access rules for the rear garden before visiting.", es: "Consulta las condiciones actuales de acceso al jardín posterior antes de la visita." },
      { en: "Combine the palace with nearby Jongno streets for a full day of walking.", es: "Combina el palacio con las calles cercanas de Jongno para completar un día de paseo." },
    ],
  }),
  createDestination({
    id: "hongdae-red-road",
    slug: "hongdae-red-road",
    name: { en: "Hongdae Red Road", es: "Hongdae Red Road" },
    koreanName: "홍대 레드로드",
    summary: {
      en: "A lively Hongdae route shaped by independent music, street culture, fashion, and nightlife.",
      es: "Un animado recorrido por Hongdae marcado por la música independiente, la cultura urbana, la moda y la vida nocturna.",
    },
    description: {
      en: "Hongdae Red Road connects well-known streets around Hongik University. Performances, small shops, cafés, galleries, and late-night energy make it a useful window into contemporary youth culture in Seoul.",
      es: "Hongdae Red Road conecta varias calles conocidas alrededor de la Universidad Hongik. Las actuaciones, pequeñas tiendas, cafeterías, galerías y el ambiente nocturno permiten acercarse a la cultura juvenil contemporánea de Seúl.",
    },
    region: "seoul-capital",
    themes: ["culture-arts", "city-architecture"],
    seasons: ["all-season"],
    visitTips: [
      { en: "Explore side streets as well as the busiest central route.", es: "Explora también las calles laterales, no solo el recorrido central más concurrido." },
      { en: "Choose daytime for cafés and shops or evening for a livelier atmosphere.", es: "Elige el día para cafeterías y tiendas, o la tarde y noche para encontrar más ambiente." },
    ],
  }),
  createDestination({
    id: "seongsu-dong",
    slug: "seongsu-dong",
    name: { en: "Seongsu-dong", es: "Seongsu-dong" },
    koreanName: "성수동",
    summary: {
      en: "A former industrial area known for converted workshops, design spaces, cafés, and contemporary brands.",
      es: "Una antigua zona industrial conocida por sus talleres transformados, espacios de diseño, cafeterías y marcas contemporáneas.",
    },
    description: {
      en: "Seongsu-dong mixes traces of light industry with a fast-changing creative scene. Brick warehouses and compact workshops sit beside cafés, studios, shops, and temporary cultural spaces.",
      es: "Seongsu-dong mezcla las huellas de la industria ligera con una escena creativa en constante cambio. Almacenes de ladrillo y pequeños talleres conviven con cafeterías, estudios, tiendas y espacios culturales temporales.",
    },
    region: "seoul-capital",
    themes: ["city-architecture", "culture-arts"],
    seasons: ["all-season"],
    visitTips: [
      { en: "Save a few places on the same block because the neighborhood covers a broad area.", es: "Guarda varios lugares cercanos entre sí, ya que el barrio ocupa una zona amplia." },
      { en: "Look beyond temporary pop-ups for older workshops and local streets.", es: "Mira más allá de los espacios temporales para descubrir talleres antiguos y calles locales." },
    ],
  }),
  createDestination({
    id: "suwon-hwaseong-fortress",
    slug: "suwon-hwaseong-fortress",
    name: { en: "Suwon Hwaseong Fortress", es: "Fortaleza Hwaseong de Suwon" },
    koreanName: "수원 화성",
    summary: {
      en: "A late-Joseon city wall whose gates, pavilions, and walking sections frame central Suwon.",
      es: "Una muralla urbana de finales de Joseon cuyos portones, pabellones y senderos rodean el centro de Suwon.",
    },
    description: {
      en: "Hwaseong Fortress combines military planning, monumental gates, and scenic wall walks within a living city. Its long circuit offers changing views of Suwon and a clear example of late-eighteenth-century engineering.",
      es: "La fortaleza Hwaseong combina planificación militar, puertas monumentales y paseos sobre la muralla dentro de una ciudad habitada. Su extenso recorrido ofrece distintas vistas de Suwon y un claro ejemplo de ingeniería de finales del siglo XVIII.",
    },
    region: "seoul-capital",
    themes: ["history-heritage", "city-architecture"],
    seasons: ["spring", "autumn"],
    visitTips: [
      { en: "Choose a wall section in advance if you do not plan to walk the full circuit.", es: "Elige de antemano un tramo de la muralla si no piensas recorrer el circuito completo." },
      { en: "Bring comfortable footwear for stairs and sloped paths.", es: "Lleva calzado cómodo para las escaleras y los caminos en pendiente." },
    ],
  }),
  createDestination({
    id: "incheon-chinatown",
    slug: "incheon-chinatown",
    name: { en: "Incheon Chinatown", es: "Barrio Chino de Incheon" },
    koreanName: "인천 차이나타운",
    summary: {
      en: "A colorful district that reflects Incheon's port history through food streets and modern heritage.",
      es: "Un barrio lleno de color que refleja la historia portuaria de Incheon entre calles gastronómicas y patrimonio moderno.",
    },
    description: {
      en: "Incheon Chinatown grew around Korea's early modern open port and remains tied to migration, trade, and Chinese-Korean food culture. Its decorated streets connect with the wider Open Port Cultural District and its historic buildings.",
      es: "El Barrio Chino de Incheon se desarrolló alrededor del puerto abierto de la Corea moderna y mantiene vínculos con la migración, el comercio y la cultura gastronómica chino-coreana. Sus calles decoradas enlazan con el distrito histórico del puerto y sus edificios.",
    },
    region: "seoul-capital",
    themes: ["history-heritage", "city-architecture"],
    seasons: ["all-season"],
    visitTips: [
      { en: "Continue into the Open Port Cultural District for more historical context.", es: "Continúa hacia el distrito histórico del puerto para conocer mejor el contexto de la zona." },
      { en: "Expect hills and steps beyond the main food street.", es: "Ten en cuenta que hay pendientes y escaleras al salir de la calle gastronómica principal." },
    ],
  }),
  createDestination({
    id: "nami-island",
    slug: "nami-island",
    name: { en: "Nami Island", es: "Isla Nami" },
    koreanName: "남이섬",
    image: {
      src: namiIslandImage,
      alt: {
        en: "A shaded path lined with tall green trees on Nami Island",
        es: "Un sendero sombreado entre hileras de árboles altos y verdes en la isla Nami",
      },
      credit: "Fidel Fernando (@fifernando) / Unsplash",
      sourceUrl:
        "https://unsplash.com/photos/a-path-lined-with-tall-green-trees-9NqIUfTcotE",
      license: "Unsplash License",
    },
    summary: {
      en: "A landscaped island known for tree-lined paths, gardens, and strong seasonal scenery.",
      es: "Una isla ajardinada conocida por sus caminos arbolados, jardines y paisajes que cambian con las estaciones.",
    },
    description: {
      en: "Nami Island offers an easygoing outdoor escape built around avenues of trees, waterside paths, gardens, and cultural spaces. Spring growth and autumn foliage give the island especially distinct visual character.",
      es: "La Isla Nami ofrece una escapada tranquila al aire libre entre avenidas de árboles, senderos junto al agua, jardines y espacios culturales. La primavera y los colores del otoño le dan un carácter especialmente marcado.",
    },
    region: "gangwon",
    themes: ["nature-scenic", "family-leisure"],
    seasons: ["spring", "autumn"],
    visitTips: [
      { en: "Plan enough time for both the journey and an unhurried island walk.", es: "Reserva tiempo suficiente para el trayecto y para recorrer la isla sin prisas." },
      { en: "Explore beyond the best-known tree avenues for quieter waterside paths.", es: "Explora más allá de las avenidas más conocidas para encontrar senderos tranquilos junto al agua." },
    ],
  }),
  createDestination({
    id: "seoraksan-national-park",
    slug: "seoraksan-national-park",
    name: { en: "Seoraksan National Park", es: "Parque Nacional Seoraksan" },
    koreanName: "설악산국립공원",
    summary: {
      en: "A dramatic mountain landscape of granite peaks, forested valleys, streams, and seasonal color.",
      es: "Un espectacular paisaje de picos de granito, valles boscosos, arroyos y colores estacionales.",
    },
    description: {
      en: "Seoraksan offers routes ranging from valley walks to demanding mountain paths. Rock formations, streams, temples, and changing forests let visitors choose an experience that matches their time and ability.",
      es: "Seoraksan ofrece desde paseos por valles hasta rutas exigentes de montaña. Las formaciones rocosas, los arroyos, los templos y el bosque permiten elegir una experiencia adecuada al tiempo y la condición de cada visitante.",
    },
    region: "gangwon",
    themes: ["nature-scenic", "history-heritage"],
    seasons: ["spring", "autumn", "winter"],
    visitTips: [
      { en: "Choose a route that matches your available time and hiking experience.", es: "Elige una ruta acorde con el tiempo disponible y tu experiencia en montaña." },
      { en: "Check official trail and weather notices before setting out.", es: "Consulta los avisos oficiales sobre senderos y clima antes de salir." },
    ],
  }),
  createDestination({
    id: "gyeongpo-beach",
    slug: "gyeongpo-beach",
    name: { en: "Gyeongpo Beach", es: "Playa de Gyeongpo" },
    koreanName: "경포해변",
    summary: {
      en: "A broad East Sea beach in Gangneung near Gyeongpo Lake and a popular coastal district.",
      es: "Una amplia playa del mar del Este en Gangneung, junto al lago Gyeongpo y una conocida zona costera.",
    },
    description: {
      en: "Gyeongpo Beach brings together a long sandy shore, open sea views, and easy access to the nearby lake. It works well in a Gangneung visit that balances the coast with cafés, cultural sites, and lakeside walks.",
      es: "La playa de Gyeongpo reúne una larga franja de arena, vistas abiertas al mar y fácil acceso al lago cercano. Encaja bien en una visita a Gangneung que combine la costa con cafeterías, lugares culturales y paseos junto al lago.",
    },
    region: "gangwon",
    themes: ["coast-island", "family-leisure"],
    seasons: ["summer"],
    visitTips: [
      { en: "Pair the beach with a walk around part of Gyeongpo Lake.", es: "Combina la playa con un paseo por una parte del lago Gyeongpo." },
      { en: "Check local beach notices before planning water activities.", es: "Consulta los avisos locales de la playa antes de planear actividades en el agua." },
    ],
  }),
  createDestination({
    id: "sokcho-tourist-fishery-market",
    slug: "sokcho-tourist-fishery-market",
    name: { en: "Sokcho Tourist & Fishery Market", es: "Mercado Turístico y Pesquero de Sokcho" },
    koreanName: "속초관광수산시장",
    summary: {
      en: "A covered traditional market where East Coast seafood and Sokcho specialties fill compact alleys.",
      es: "Un mercado tradicional cubierto donde los mariscos de la costa este y las especialidades de Sokcho llenan estrechos pasillos.",
    },
    description: {
      en: "This central market is a practical place to encounter Sokcho's port-city food culture. Seafood stalls, prepared dishes, produce, and specialized alleys create an energetic contrast to nearby mountain and coastal sightseeing.",
      es: "Este mercado del centro permite conocer la cultura gastronómica de la ciudad portuaria de Sokcho. Los puestos de mariscos, platos preparados, productos frescos y pasillos especializados contrastan con las excursiones de montaña y costa cercanas.",
    },
    region: "gangwon",
    themes: ["culture-arts", "city-architecture", "family-leisure"],
    seasons: ["all-season"],
    visitTips: [
      { en: "Walk through several alleys before deciding what to try.", es: "Recorre varios pasillos antes de decidir qué probar." },
      { en: "Carry small personal items securely in the busiest sections.", es: "Lleva bien guardados tus objetos personales en las zonas más concurridas." },
    ],
  }),
  createDestination({
    id: "gongsanseong-fortress",
    slug: "gongsanseong-fortress",
    name: { en: "Gongsanseong Fortress", es: "Fortaleza Gongsanseong" },
    koreanName: "공산성",
    summary: {
      en: "A Baekje-era fortress in Gongju with wooded walls overlooking the Geumgang River and city.",
      es: "Una fortaleza de la época de Baekje en Gongju, con murallas arboladas y vistas al río Geumgang y a la ciudad.",
    },
    description: {
      en: "Gongsanseong reflects Gongju's period as a Baekje capital through a defensive ridge above the river. Walking the walls reveals gates, pavilions, archaeological traces, and changing city views.",
      es: "Gongsanseong refleja la etapa en que Gongju fue capital de Baekje mediante una cresta defensiva junto al río. Al recorrer las murallas aparecen puertas, pabellones, restos arqueológicos y distintas vistas de la ciudad.",
    },
    region: "chungcheong",
    themes: ["history-heritage", "nature-scenic"],
    seasons: ["spring", "autumn"],
    visitTips: [
      { en: "Wear shoes suitable for stone steps and sloped wall paths.", es: "Lleva calzado adecuado para escalones de piedra y caminos en pendiente." },
      { en: "Combine the fortress with another Baekje heritage site in Gongju.", es: "Combina la fortaleza con otro lugar del patrimonio de Baekje en Gongju." },
    ],
  }),
  createDestination({
    id: "busosanseong-fortress",
    slug: "busosanseong-fortress",
    name: { en: "Busosanseong Fortress", es: "Fortaleza Busosanseong" },
    koreanName: "부소산성",
    summary: {
      en: "A forested Baekje fortress landscape that rises behind the former royal area of Buyeo.",
      es: "Un paisaje fortificado y boscoso de Baekje que se eleva tras la antigua zona real de Buyeo.",
    },
    description: {
      en: "Busosanseong protected the Sabi capital of Baekje and now combines archaeological meaning with a woodland walk. Paths link former building sites, gates, pavilions, and river viewpoints.",
      es: "Busosanseong protegía la capital Sabi de Baekje y hoy combina valor arqueológico con un paseo por el bosque. Sus caminos enlazan antiguos emplazamientos, puertas, pabellones y miradores hacia el río.",
    },
    region: "chungcheong",
    themes: ["history-heritage", "nature-scenic"],
    seasons: ["spring", "autumn"],
    visitTips: [
      { en: "Set aside time for the wooded paths beyond the entrance area.", es: "Reserva tiempo para los senderos del bosque más allá de la entrada." },
      { en: "Pair the fortress with nearby Baekje sites to understand Buyeo's history.", es: "Combina la fortaleza con otros lugares de Baekje para comprender mejor la historia de Buyeo." },
    ],
  }),
  createDestination({
    id: "hanbat-arboretum",
    slug: "hanbat-arboretum",
    name: { en: "Hanbat Arboretum", es: "Arboreto Hanbat" },
    koreanName: "한밭수목원",
    summary: {
      en: "A spacious urban arboretum that brings gardens, walking paths, and seasonal plants into central Daejeon.",
      es: "Un amplio arboreto urbano con jardines, senderos y plantas estacionales en el centro de Daejeon.",
    },
    description: {
      en: "Hanbat Arboretum provides a green pause within Daejeon's civic and cultural district. Its varied garden spaces suit an easy walk, plant observation, or a break between nearby museums and public attractions.",
      es: "El Arboreto Hanbat ofrece una pausa verde dentro del distrito cívico y cultural de Daejeon. Sus distintos jardines son adecuados para pasear, observar plantas o descansar entre los museos y lugares públicos cercanos.",
    },
    region: "chungcheong",
    themes: ["nature-scenic", "family-leisure", "city-architecture"],
    seasons: ["spring", "summer", "autumn"],
    visitTips: [
      { en: "Choose one garden section first if your visit is short.", es: "Elige primero una sección del jardín si dispones de poco tiempo." },
      { en: "Combine the arboretum with nearby cultural institutions.", es: "Combina el arboreto con las instituciones culturales cercanas." },
    ],
  }),
  createDestination({
    id: "jeonju-hanok-village",
    slug: "jeonju-hanok-village",
    name: { en: "Jeonju Hanok Village", es: "Aldea Hanok de Jeonju" },
    koreanName: "전주한옥마을",
    summary: {
      en: "A large traditional district where hanok architecture, crafts, heritage sites, and local food come together.",
      es: "Un amplio barrio tradicional donde se reúnen la arquitectura hanok, la artesanía, el patrimonio y la gastronomía local.",
    },
    description: {
      en: "Jeonju Hanok Village contains a dense network of traditional houses and cultural spaces in a walkable district. Beyond its busiest streets are heritage buildings, craft traditions, small lanes, and Jeonju's well-known food culture.",
      es: "La Aldea Hanok de Jeonju reúne una densa red de casas tradicionales y espacios culturales en una zona fácil de recorrer. Más allá de las calles principales aparecen edificios históricos, artesanía, callejones y la reconocida cultura gastronómica local.",
    },
    region: "jeolla",
    themes: ["history-heritage", "culture-arts"],
    seasons: ["all-season"],
    visitTips: [
      { en: "Explore quieter lanes beyond the main commercial streets.", es: "Explora los callejones más tranquilos más allá de las calles comerciales principales." },
      { en: "Plan meals as part of the visit because food is central to the experience.", es: "Incluye las comidas en el plan, ya que son una parte importante de la experiencia." },
    ],
  }),
  createDestination({
    id: "suncheonman-wetland",
    slug: "suncheonman-wetland",
    name: { en: "Suncheonman Wetland", es: "Humedal de la bahía de Suncheon" },
    koreanName: "순천만습지",
    summary: {
      en: "A protected coastal wetland of reed fields, tidal flats, waterways, and wide open skies.",
      es: "Un humedal costero protegido con campos de juncos, llanuras de marea, canales y amplios cielos.",
    },
    description: {
      en: "Boardwalks lead through Suncheonman's reed fields toward tidal flats and observation points. Changing light, water levels, and birdlife make it a destination for slow walking and close attention to the coastal ecosystem.",
      es: "Las pasarelas atraviesan los campos de juncos de Suncheonman hacia las llanuras de marea y los miradores. La luz, el agua y las aves cambian constantemente, por lo que invita a caminar con calma y observar el ecosistema costero.",
    },
    region: "jeolla",
    themes: ["nature-scenic", "coast-island", "family-leisure"],
    seasons: ["spring", "summer", "autumn"],
    visitTips: [
      { en: "Allow time for both the boardwalk and a viewpoint if conditions permit.", es: "Reserva tiempo para la pasarela y un mirador si las condiciones lo permiten." },
      { en: "Bring sun protection because much of the route is open.", es: "Lleva protección solar, ya que gran parte del recorrido está al aire libre." },
    ],
  }),
  createDestination({
    id: "odongdo-island",
    slug: "odongdo-island",
    name: { en: "Odongdo Island", es: "Isla Odongdo" },
    koreanName: "오동도",
    summary: {
      en: "A small forested island in Yeosu with coastal paths, rocky viewpoints, and maritime scenery.",
      es: "Una pequeña isla boscosa de Yeosu con senderos costeros, miradores rocosos y paisaje marítimo.",
    },
    description: {
      en: "Odongdo extends just off Yeosu's waterfront and offers a compact mix of woodland and sea views. Paths cross the island to rocky edges and viewpoints, making it an accessible way to experience the city's coast.",
      es: "Odongdo se encuentra frente al paseo marítimo de Yeosu y combina en poco espacio bosque y vistas al mar. Los senderos atraviesan la isla hasta zonas rocosas y miradores, ofreciendo una forma sencilla de conocer la costa de la ciudad.",
    },
    region: "jeolla",
    themes: ["nature-scenic", "coast-island"],
    seasons: ["spring", "summer"],
    visitTips: [
      { en: "Wear comfortable shoes for wooded paths and coastal steps.", es: "Lleva calzado cómodo para los senderos del bosque y las escaleras de la costa." },
      { en: "Include the nearby Yeosu waterfront in the same walk.", es: "Incluye el paseo marítimo cercano de Yeosu en el mismo recorrido." },
    ],
  }),
  createDestination({
    id: "asia-culture-center",
    slug: "asia-culture-center",
    name: { en: "Asia Culture Center", es: "Centro de Cultura Asiática" },
    koreanName: "국립아시아문화전당",
    summary: {
      en: "A major Gwangju complex for exhibitions, performance, research, public space, and Asian creative exchange.",
      es: "Un gran complejo de Gwangju dedicado a exposiciones, artes escénicas, investigación, espacios públicos e intercambio creativo asiático.",
    },
    description: {
      en: "The Asia Culture Center brings museums, theaters, archives, creative facilities, and landscaped public areas into one urban complex. Its location connects contemporary cultural production with Gwangju's history of democracy, human rights, and civic memory.",
      es: "El Centro de Cultura Asiática reúne museos, teatros, archivos, espacios de creación y zonas públicas ajardinadas. Su ubicación vincula la producción cultural contemporánea con la historia de democracia, derechos humanos y memoria cívica de Gwangju.",
    },
    region: "jeolla",
    themes: ["culture-arts", "city-architecture", "family-leisure"],
    seasons: ["all-season"],
    visitTips: [
      { en: "Review the current program before deciding how long to spend inside.", es: "Consulta el programa actual antes de decidir cuánto tiempo dedicar al interior." },
      { en: "Walk through the public spaces to understand the site's urban context.", es: "Recorre los espacios públicos para comprender el contexto urbano del lugar." },
    ],
  }),
  createDestination({
    id: "haeundae-beach",
    slug: "haeundae-beach",
    name: { en: "Haeundae Beach", es: "Playa de Haeundae" },
    koreanName: "해운대해수욕장",
    image: {
      src: haeundaeBeachImage,
      alt: {
        en: "People walking along Haeundae Beach as the sun sets over the sea",
        es: "Personas caminando por la playa de Haeundae mientras el sol se pone sobre el mar",
      },
      credit: "Patrick (@astrobound) / Unsplash",
      sourceUrl:
        "https://unsplash.com/photos/people-on-seashore-HmiG5OB3QgM",
      license: "Unsplash License",
    },
    summary: {
      en: "Busan's best-known urban beach, framed by a broad bay, promenade, and dense city skyline.",
      es: "La playa urbana más conocida de Busan, rodeada por una amplia bahía, un paseo y un denso perfil urbano.",
    },
    description: {
      en: "Haeundae combines an open sandy waterfront with the cafés, restaurants, and high-rise skyline of a major city district. Outside the swimming season, its promenade and nearby coastal walks still make it a useful base for eastern Busan.",
      es: "Haeundae combina una extensa playa con las cafeterías, restaurantes y edificios altos de uno de los principales barrios de Busan. Fuera de la temporada de baño, el paseo y las rutas cercanas siguen siendo una buena base para explorar el este de la ciudad.",
    },
    region: "gyeongsang",
    themes: ["coast-island", "city-architecture"],
    seasons: ["summer"],
    visitTips: [
      { en: "Continue toward nearby coastal paths for a quieter view of the bay.", es: "Continúa por los senderos costeros cercanos para disfrutar de una vista más tranquila de la bahía." },
      { en: "Check local beach notices before planning water activities.", es: "Consulta los avisos locales de la playa antes de planear actividades en el agua." },
    ],
  }),
  createDestination({
    id: "bulguksa-temple",
    slug: "bulguksa-temple",
    name: { en: "Bulguksa Temple", es: "Templo Bulguksa" },
    koreanName: "불국사",
    image: {
      src: bulguksaTempleImage,
      alt: {
        en: "Stone steps and colorful wooden halls at Bulguksa Temple beneath a wooded hillside",
        es: "Escaleras de piedra y pabellones de madera coloridos en el templo Bulguksa bajo una ladera boscosa",
      },
      credit: "Bernard Gagnon (Bgag) / Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bulguksa_03.jpg",
      license: "CC0 1.0 Universal",
    },
    summary: {
      en: "A landmark of Silla Buddhist heritage known for balanced temple architecture and historic stonework.",
      es: "Un lugar emblemático del patrimonio budista de Silla, conocido por su arquitectura equilibrada y su trabajo histórico en piedra.",
    },
    description: {
      en: "Bulguksa presents Silla Buddhist art through terraces, bridges, pagodas, halls, and carefully arranged courtyards. Its wooded setting supports a calm visit while the architectural details reward close observation.",
      es: "Bulguksa expresa el arte budista de Silla mediante terrazas, puentes, pagodas, pabellones y patios cuidadosamente organizados. El entorno boscoso favorece una visita tranquila y los detalles arquitectónicos invitan a observar con atención.",
    },
    region: "gyeongsang",
    themes: ["history-heritage", "culture-arts"],
    seasons: ["autumn"],
    visitTips: [
      { en: "Wear comfortable shoes and observe posted temple etiquette.", es: "Lleva calzado cómodo y respeta las normas indicadas dentro del templo." },
      { en: "Look closely at the stone terraces and pagodas rather than rushing between halls.", es: "Observa las terrazas de piedra y las pagodas en lugar de pasar deprisa entre los pabellones." },
    ],
  }),
  createDestination({
    id: "gamcheon-culture-village",
    slug: "gamcheon-culture-village",
    name: { en: "Gamcheon Culture Village", es: "Aldea Cultural de Gamcheon" },
    koreanName: "감천문화마을",
    summary: {
      en: "A hillside Busan neighborhood of terraced houses, steep lanes, public art, and layered sea views.",
      es: "Un barrio de Busan en la ladera, con casas escalonadas, calles empinadas, arte público y vistas al mar.",
    },
    description: {
      en: "Gamcheon grew as a dense hillside settlement and later added cultural projects throughout its maze-like streets. Its history, painted façades, small galleries, and viewpoints are best explored on foot and with respect for residents.",
      es: "Gamcheon creció como un asentamiento denso en la ladera y más tarde incorporó proyectos culturales en sus calles laberínticas. Su historia, fachadas pintadas, pequeñas galerías y miradores se disfrutan mejor a pie y respetando a sus residentes.",
    },
    region: "gyeongsang",
    themes: ["culture-arts", "city-architecture", "family-leisure"],
    seasons: ["all-season"],
    visitTips: [
      { en: "Keep noise low and avoid photographing residents without permission.", es: "Habla en voz baja y evita fotografiar a residentes sin permiso." },
      { en: "Wear shoes suitable for steep lanes and many stairs.", es: "Lleva calzado adecuado para calles empinadas y numerosas escaleras." },
    ],
  }),
  createDestination({
    id: "haedong-yonggungsa-temple",
    slug: "haedong-yonggungsa-temple",
    name: { en: "Haedong Yonggungsa Temple", es: "Templo Haedong Yonggungsa" },
    koreanName: "해동용궁사",
    summary: {
      en: "A Buddhist temple on Busan's rocky coast where prayer halls face the open sea.",
      es: "Un templo budista en la costa rocosa de Busan, con pabellones orientados hacia el mar abierto.",
    },
    description: {
      en: "Unlike many Korean temples set in mountains, Haedong Yonggungsa occupies a dramatic coastal site. Stairs and paths connect shrines, stone figures, and sea-facing viewpoints shaped as much by the shoreline as by architecture.",
      es: "A diferencia de muchos templos coreanos situados en la montaña, Haedong Yonggungsa ocupa un entorno costero espectacular. Escaleras y senderos conectan santuarios, figuras de piedra y miradores donde la costa forma parte esencial de la experiencia.",
    },
    region: "gyeongsang",
    themes: ["history-heritage", "coast-island"],
    seasons: ["spring", "autumn"],
    visitTips: [
      { en: "Expect many steps between the entrance and coastal temple area.", es: "Ten en cuenta que hay muchas escaleras entre la entrada y la zona costera del templo." },
      { en: "Respect worship spaces and keep passageways clear when taking photos.", es: "Respeta los espacios de culto y no bloquees el paso al tomar fotografías." },
    ],
  }),
  createDestination({
    id: "donggung-palace-wolji-pond",
    slug: "donggung-palace-wolji-pond",
    name: { en: "Donggung Palace and Wolji Pond", es: "Palacio Donggung y estanque Wolji" },
    koreanName: "동궁과 월지",
    summary: {
      en: "A restored Silla palace setting where elegant pavilions reflect across a landscaped pond.",
      es: "Un conjunto palaciego restaurado de Silla donde elegantes pabellones se reflejan en un estanque ajardinado.",
    },
    description: {
      en: "Donggung Palace and Wolji Pond formed part of ancient Silla's royal complex. Reconstructed pavilions and a carefully shaped shoreline evoke court life, while reflections change the atmosphere as daylight fades.",
      es: "El Palacio Donggung y el estanque Wolji formaban parte del complejo real de la antigua Silla. Los pabellones reconstruidos y la orilla diseñada evocan la vida de la corte, mientras los reflejos cambian con la luz del día.",
    },
    region: "gyeongsang",
    themes: ["history-heritage", "nature-scenic", "city-architecture"],
    seasons: ["spring", "summer", "autumn"],
    visitTips: [
      { en: "Walk the full pond edge to see the pavilions from different angles.", es: "Recorre todo el borde del estanque para ver los pabellones desde distintos ángulos." },
      { en: "Combine the site with other central Gyeongju heritage stops.", es: "Combina el lugar con otros sitios históricos del centro de Gyeongju." },
    ],
  }),
  createDestination({
    id: "daewangam-park",
    slug: "daewangam-park",
    name: { en: "Daewangam Park", es: "Parque Daewangam" },
    koreanName: "대왕암공원",
    summary: {
      en: "An Ulsan coastal park of pine forest, rugged rock formations, sea views, and local legend.",
      es: "Un parque costero de Ulsan con pinos, formaciones rocosas, vistas al mar y leyendas locales.",
    },
    description: {
      en: "Daewangam Park follows a wooded headland to striking formations on the East Sea. Pine paths, viewpoints, a lighthouse, and the story of Daewangam Rock combine natural scenery with Silla-era cultural memory.",
      es: "El Parque Daewangam recorre un promontorio boscoso hasta llamativas formaciones del mar del Este. Los senderos, miradores, un faro y la leyenda de la roca Daewangam combinan paisaje natural y memoria cultural de Silla.",
    },
    region: "gyeongsang",
    themes: ["nature-scenic", "coast-island", "family-leisure"],
    seasons: ["spring", "summer", "autumn"],
    visitTips: [
      { en: "Allow time for both the forest route and coastal viewpoints.", es: "Reserva tiempo tanto para el sendero del bosque como para los miradores costeros." },
      { en: "Use caution on exposed coastal sections in strong wind.", es: "Ten precaución en los tramos costeros expuestos cuando haya viento fuerte." },
    ],
  }),
  createDestination({
    id: "seongsan-ilchulbong",
    slug: "seongsan-ilchulbong",
    name: { en: "Seongsan Ilchulbong", es: "Seongsan Ilchulbong" },
    koreanName: "성산일출봉",
    image: {
      src: seongsanIlchulbongImage,
      alt: {
        en: "A volcanic rock outcrop beside the trail with Seongsan village and the sea below",
        es: "Un afloramiento de roca volcánica junto al sendero, con el pueblo de Seongsan y el mar al fondo",
      },
      credit: "Bernard Gagnon (Bgag) / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Seongsan_Ilchulbong_03.jpg",
      license: "CC0 1.0 Universal",
    },
    summary: {
      en: "A distinctive volcanic tuff cone on Jeju's eastern coast with a broad crater and sea views.",
      es: "Un singular cono volcánico de toba en la costa este de Jeju, con un amplio cráter y vistas al mar.",
    },
    description: {
      en: "Seongsan Ilchulbong rises sharply from Jeju's eastern shoreline and is one of the island's defining volcanic landforms. The ascent reveals the crater rim, nearby village, ocean, and surrounding fields.",
      es: "Seongsan Ilchulbong se eleva de forma abrupta sobre la costa oriental de Jeju y es una de las formaciones volcánicas más representativas de la isla. El ascenso permite ver el borde del cráter, el pueblo, el océano y los campos cercanos.",
    },
    region: "jeju",
    themes: ["nature-scenic", "coast-island"],
    seasons: ["spring", "autumn"],
    visitTips: [
      { en: "Wear footwear suitable for a sustained stair climb to the crater viewpoint.", es: "Lleva calzado adecuado para una subida prolongada por escaleras hasta el mirador del cráter." },
      { en: "Check official access and weather guidance before setting out.", es: "Consulta las indicaciones oficiales de acceso y clima antes de salir." },
    ],
  }),
  createDestination({
    id: "hallasan-national-park",
    slug: "hallasan-national-park",
    name: { en: "Hallasan National Park", es: "Parque Nacional Hallasan" },
    koreanName: "한라산국립공원",
    summary: {
      en: "Jeju's central mountain national park, with volcanic landscapes and trails that change markedly by season.",
      es: "El parque nacional de la montaña central de Jeju, con paisajes volcánicos y senderos que cambian notablemente según la estación.",
    },
    description: {
      en: "Hallasan forms the high center of Jeju and supports varied forest, volcanic, and alpine environments. Its official trails have very different distances and elevation profiles, from shorter nature walks to demanding mountain days.",
      es: "Hallasan ocupa el centro elevado de Jeju y reúne ambientes forestales, volcánicos y de alta montaña. Sus senderos oficiales tienen distancias y desniveles muy distintos, desde paseos cortos hasta jornadas exigentes.",
    },
    region: "jeju",
    themes: ["nature-scenic"],
    seasons: ["spring", "autumn", "winter"],
    visitTips: [
      { en: "Choose an official trail based on distance, elevation, and your experience.", es: "Elige un sendero oficial según la distancia, el desnivel y tu experiencia." },
      { en: "Review current reservation, trail, and weather notices before visiting.", es: "Consulta los avisos actuales sobre reservas, senderos y clima antes de la visita." },
    ],
  }),
  createDestination({
    id: "seopjikoji",
    slug: "seopjikoji",
    name: { en: "Seopjikoji", es: "Seopjikoji" },
    koreanName: "섭지코지",
    summary: {
      en: "An eastern Jeju headland of grassland, volcanic rock, low cliffs, and views toward Seongsan Ilchulbong.",
      es: "Un cabo del este de Jeju con praderas, roca volcánica, acantilados bajos y vistas hacia Seongsan Ilchulbong.",
    },
    description: {
      en: "Seopjikoji projects into the sea through a landscape shaped by volcanic material, wind, and waves. Its route passes open grassland and rocky shore, with Seongsan Ilchulbong visible across the coast.",
      es: "Seopjikoji se adentra en el mar a través de un paisaje formado por materiales volcánicos, viento y olas. El recorrido atraviesa praderas abiertas y costa rocosa, con Seongsan Ilchulbong visible al otro lado.",
    },
    region: "jeju",
    themes: ["nature-scenic", "coast-island"],
    seasons: ["spring", "autumn"],
    visitTips: [
      { en: "Bring wind protection because the headland is exposed.", es: "Lleva protección contra el viento, ya que el cabo está muy expuesto." },
      { en: "Stay on established paths to protect the coastal landscape.", es: "Mantente en los senderos establecidos para proteger el paisaje costero." },
    ],
  }),
  createDestination({
    id: "jeongbang-waterfall",
    slug: "jeongbang-waterfall",
    name: { en: "Jeongbang Waterfall", es: "Cascada Jeongbang" },
    koreanName: "정방폭포",
    summary: {
      en: "A Seogwipo waterfall that drops from a dark cliff beside the sea, framed by rock and pine trees.",
      es: "Una cascada de Seogwipo que cae desde un acantilado oscuro junto al mar, rodeada de roca y pinos.",
    },
    description: {
      en: "Jeongbang Waterfall creates an unusual coastal scene where freshwater descends close to the sea below a vertical volcanic cliff. Steps lead to a rocky lower area framed by spray, old pines, and ocean views.",
      es: "La cascada Jeongbang forma un paisaje costero poco común, donde el agua dulce desciende junto al mar desde un acantilado volcánico. Unas escaleras llevan a una zona rocosa rodeada de bruma, pinos y vistas al océano.",
    },
    region: "jeju",
    themes: ["nature-scenic", "coast-island"],
    seasons: ["summer", "autumn"],
    visitTips: [
      { en: "Wear stable footwear for stairs and potentially wet rocks.", es: "Lleva calzado estable para las escaleras y las rocas que pueden estar mojadas." },
      { en: "Keep a safe distance from slippery edges and follow posted guidance.", es: "Mantén una distancia segura de los bordes resbaladizos y sigue las indicaciones del lugar." },
    ],
  }),
  createDestination({
    id: "jeju-stone-park",
    slug: "jeju-stone-park",
    name: { en: "Jeju Stone Park", es: "Parque de la Piedra de Jeju" },
    koreanName: "제주돌문화공원",
    summary: {
      en: "A museum and ecological park that explains Jeju's volcanic stone culture through myth, landscape, and objects.",
      es: "Un museo y parque ecológico que explica la cultura de la piedra volcánica de Jeju mediante mitos, paisaje y objetos.",
    },
    description: {
      en: "Jeju Stone Park presents basalt as a material connected to island homes, fields, beliefs, and everyday life. Indoor exhibitions and outdoor routes bring together stone figures, traditional structures, forest, and the story of Seolmundae Halmang.",
      es: "El Parque de la Piedra de Jeju presenta el basalto como un material ligado a las viviendas, campos, creencias y vida cotidiana de la isla. Las exposiciones y rutas exteriores reúnen figuras de piedra, construcciones tradicionales, bosque y el mito de Seolmundae Halmang.",
    },
    region: "jeju",
    themes: ["culture-arts", "nature-scenic", "family-leisure"],
    seasons: ["all-season"],
    visitTips: [
      { en: "Choose a priority route because the park covers a large area.", es: "Elige un recorrido prioritario, ya que el parque ocupa una superficie amplia." },
      { en: "Balance the indoor museum with outdoor paths to understand culture and landscape.", es: "Combina el museo interior con los senderos exteriores para comprender la cultura y el paisaje." },
    ],
  }),
] satisfies Destination[];
