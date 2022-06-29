import React from 'react';
import Logo from '../../components/Logo';
import Moto from '../../../assets/moto.png';
import {ArrowFatLinesRight,QrCode} from 'phosphor-react';

export default function Home(){


    return (
   <div className="min-h-full flex flex-col justify-center items-center max-w-[360px] w-full mx-auto text-white ">
<Logo/>
    <h1 className="text-black font-bold text-[1.2rem]">
    Seu moto-táxi na palma da sua mão!a
    </h1>
        <p className="mt-1 text-[0.8rem] leading-relaxed text-left max-w-[320px]">
        Na Speedy você pode negociar o preço com seu moto-táxi para viajar com segurança escolhendo a melhor opção!
        </p>
      <div className="flex flex-col  w-full">
        <h1 className="text-sm text-center text-black font-bold mt-1">Sobre o App</h1>
        <div className="mt-2 bg-white bg-opacity-50 text-black rounded px-2 py-2">
            <ul className="text-[0.9rem] text-left leading-relaxed">
                <li className="flex flex-row items-center gap-2"><ArrowFatLinesRight size={20}/>Usuário e piloto negociam o preço.</li>
                <li className="flex flex-row items-center gap-2"><ArrowFatLinesRight size={20}/>Diversos pilotos disponíveis.</li>
                <li className="flex flex-row items-center gap-2"><ArrowFatLinesRight size={20}/>Sistema de avaliação para motorista e passageiro.</li>
                <li className="flex flex-row items-center gap-2"><ArrowFatLinesRight size={20}/>Bate-papo.</li>
            </ul>
        </div>
      </div>
      <span className="block text-sm text-black mt-1">Seu moto-táxi em 3 cliques</span>
      <img className="mx-auto" width={180} height={60} src={Moto}/>
      <a target="_blank" href='https://www.figma.com/proto/kfo1YkdVXlc8GvLj8yx26p/Untitled?page-id=0%3A1&node-id=3%3A2&viewport=1038%2C479%2C1&scaling=scale-down' className="bg-bluex-100 rounded w-full text-center my-2 flex flex-row items-center justify-center gap-2">
      <QrCode size={20}/> TESTE DE USABILIDADE
        </a>
   </div>
    );
}