import React from 'react';
import { FaSuitcase, FaHouse, FaLocationPin, FaRss} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
export function Intro() {
    return (
      <div className="shadow-fb rounded w-full bg-gray-900 p-4">
        <div className="text-xl font-bold text-fBlack">Sobre</div>
        <div className="mt-4 flex items-center">
          <FaSuitcase />
          <span className="ml-2">
            Importação e exportação de produtos diversos
          </span>
        </div>
        <div className="mt-4 flex items-center">
          <FaHouse />
          <span className="ml-2">
           Edifício Azul <b> AP. 101 - 3º Andar </b>
          </span>
        </div>
        <div className="mt-4 flex items-center">
          <FaLocationPin />
          <span className="ml-2">
            Luanda, Angola - <b>Largo da Mutamba</b>
          </span>
        </div>
        <div className="mt-4 flex items-center">
          <FaRss />
          <span className="ml-2">
            Numero de Conexões <b>97</b>
          </span>
        </div>
        <div className="mt-5 flex items-center justify-center">
       
          <Link className=" text-center">
           Ver mais
          </Link>
        </div>
      </div>
    );
  }