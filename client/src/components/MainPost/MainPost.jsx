
import React from "react";
import CarexLogo from "../../assets/img/carex_logo.png";
import {FaThumbsUp, FaShare, FaChevronCircleRight } from 'react-icons/fa';
export function MainPost() {
    return (
        <div className="containerPost bg-gray-900 border border-gray-700 rounded-md p-4">
                        <div className="whoViewdPost flex justify-between text-gray-400 ">
                            <span className='whoViewdPostName cursor-pointer'><span className="text-white font-semibold">Nvuala Carvalho</span> comentou isto</span>
                            <span className='whoViewdPostDots text-white cursor-pointer'>...</span>
                        </div>
                        <div className="hr-line w-full h-px bg-gray-600 my-1"></div>
                        <div className="userPostDetails flex items-center mb-1">
                            <img src={CarexLogo} alt="" className="w-12 h-12 rounded-full"/>
                            <div className="userPostMainDetails ml-4">
                                <span className="userDetailsNamePost text-white font-semibold cursor-pointer">Carex Angola</span>
                                <span className="userDetails-about text-gray-400 text-sm"> Despachante e Transportadora</span>
                            </div>
                        </div>
                        <div className="mainFeedPost text-white mb-2 text-justify">
                            <p className="mb-4">A empresa em si é uma empresa de muito sucesso. 
                            Você nos deve isso, quão maior é essa grande escolha para nós? 
                            E quando com o presente acusamos o exercício da mais digna distinção, 
                            o prazer da flexibilidade de algo cego?</p>
                            <img src={CarexLogo} alt="" className="w-full"/>
                        </div>
                        <div className="flex justify-evenly items-center mb-4">
                            <button className="flex items-center text-blue-400"><FaThumbsUp className="mr-2"/> Curtir</button>
                            <button className="flex items-center text-blue-400"><FaShare className="mr-2"/> Compartilhar</button>
                        </div>
                        <div className="bg-gray-800 rounded-md p-2 mb-2 flex justify-between">
                            <input type="text" placeholder='Comentar...' className="w-full h-10 rounded-full pl-4 border border-gray-600 bg-gray-600 text-white"/>
                            <button className='text-blue-400 text-3xl ml-2'><FaChevronCircleRight/></button>
                        </div>
                        <div className="bg-gray-800 rounded-md p-2 mb-2">
                            <div className="flex justify-between text-gray-400 mb-2 text-sm">
                                <span className="text-white font-bold">Nvuala Carvalho</span>
                                <button className="text-blue-400"><FaThumbsUp className="mr-2"/></button>
                            </div>
                            <p className="text-white text-sm"> Já aderi muitos dos serviços da Carex, e são excelentes.</p>
                        </div>
                        <div className="bg-gray-800 rounded-md p-2">
                            <div className="flex justify-between text-gray-400 mb-2 text-sm">
                                <span className="text-white font-bold">Anderson Cláudio</span>
                                <button className="text-blue-400"><FaThumbsUp className="mr-2"/></button>
                            </div>
                            <p className="text-white text-sm">Serviço de excelência</p>
                        </div>
                    </div>
    );
}