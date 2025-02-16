import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />
      {/* Category, Search & Filter Section */}
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section>
      {/* Video Section */}
      <section className="m-4 md:mx-8 md:my-6">
        <div className="video-container w-full">
          <video
            src={require("client/assets/video.mp4")}
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
        </div>
      </section>

      <section className="m-4 md:mx-8 md:my-6 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-lg">
        <p className="mb-4 text-lg font-bold text-green-700">
          L'irrigation goutte à goutte datant des années 1960 semble de moins en
          moins capable de répondre aux exigences actuelles.
        </p>
        <p className="mb-4 text-lg italic text-green-600">
          Il devient impératif d'adapter notre système d'irrigation agricole à
          ces nouvelles conditions de pénurie d'eau et de chaleur estivale
          importante.
        </p>
        <p className="mb-4 text-lg font-semibold text-green-800">
          Waterloo est un système d'irrigation racinaire écologique et durable.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Il est composé d'un injecteur et d'un système de raccordement au
          réseau d'irrigation de surface.
        </p>
        <p className="mb-4 text-lg italic text-green-600">
          L'injecteur est composé d'un boîtier en carton biodégradable
          comportant un tube en polyéthylène multi perforé entouré par deux
          couches minérales.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Ces couches sont inertes et durables. Elle absorbe l'eau et la
          transmet aux racines tout en protégeant les orifices de l'injecteur de
          l'obstruction.
        </p>
        <p className="mb-4 text-lg font-semibold text-green-800">
          L'injecteur est branché aux réseaux de surface moyennant un tube en
          polyéthylène de quatre mm de diamètre, branché sur un goûteur dont le
          débit est de quatre litres par heure.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Les expériences menées en saison chaude estivale montrent bien que le
          système Wattrelos fournit une économie importante en eau d'irrigation
          par rapport au goutte à goutte classique en sol argilo calcaire.
        </p>
        <p className="mb-4 text-lg italic text-green-600">
          Cette économie dépasse les{" "}
          <span className="font-bold text-green-800">75 %</span> et elle
          avoisine les <span className="font-bold text-green-800">70 %</span> en
          sol sablonneux.
        </p>
        <p className="mb-4 text-lg font-semibold text-green-800">
          L'installation du système Waterloo en arboriculture est simple pour un
          jeune plant à mettre en terre.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          On place un injecteur de part et d'autre de la motte de terre à dix cm
          de celle-ci et à 20 cm de profondeur par rapport à la surface du sol.
        </p>
        <p className="mb-4 text-lg italic text-green-600">
          Les arbres déjà plantés peuvent également bénéficier du système
          Waterloo.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Il suffit de creuser un trou pour la descente de l'injecteur moyennant
          l'usage d'une tarière, la profondeur reste de 20 cm et la distance par
          rapport aux trous varie de 25 à 40 cm selon la taille de l'arbre.
        </p>
        <p className="mb-4 text-lg font-semibold text-green-800">
          Le système Waterloo peut durer plus de 20 ans.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          La seule maintenance consiste à vérifier la perméabilité du système de
          raccordement de surface qui peut facilement être remplacé.
        </p>
        <p className="mb-4 text-lg italic text-green-600">
          La technologie Waterloo est mise en application depuis février 2023
          dans un domaine agricole comportant 1200 arbres.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Elle a largement prouvé son excellente rentabilité hydrique.
        </p>
        <p className="mb-4 text-lg font-semibold text-white bg-green-700 px-4 py-2 rounded-md text-center shadow-md">
          L'eau, c'est la vie. <span className="text-blue-200">Water.</span>{" "}
          L'eau, c'est l'espoir.
        </p>
      </section>
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
