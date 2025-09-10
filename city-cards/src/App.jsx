import React, { useState } from "react";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";

const citiesData = [
  {
    name: "Токио",
    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  },
  {
    name: "Киото",
    description:
      "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
    imageUrl:
      "https://go-japan.ru/upload/resize_cache/webp/iblock/6be/o1oeoj278iy1rm3neszm2eujmxjj0yv3/kyoto-dt.webp",
    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",
      "Этот город был столицей Японии более тысячи лет.",
    ],
  },
  {
    name: "Осака",
    description:
      "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
    imageUrl:
      "https://resize.tripster.ru/9jewSomCy9isqJ-dQg43jzYB8IM=/fit-in/1220x600/filters:no_upscale()/https://cdn.tripster.ru/photos/8ca86ddb-250e-4c66-9a87-22e750f5da5d.jpg",
    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
      "Город является кулинарной столицей Японии.",
    ],
  },
  {
    name: "Хоккайдо",
    description:
      "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
    imageUrl:
      "https://media.istockphoto.com/id/835421542/de/foto/die-onomichi-in-der-pr%C3%A4fektur-hiroshima.jpg?s=612x612&w=0&k=20&c=WkIf1KwZJ2AEoe8IlRbdNjm0F86yQxCR5XR5OCIvN10=",
    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
      "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
    ],
  },
  {
    name: "Нагоя",
    description:
      "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
    imageUrl:
      "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",
    facts: [
      "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
      "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
    ],
  },
];

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>City Cards</h1>
      <CitySelector cities={citiesData} onSelect={setSelectedCity} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
