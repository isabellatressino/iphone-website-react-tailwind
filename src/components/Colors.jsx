import { useState } from "react"
import iphoneBlue from "../assets/images/iphone-blue.jpg";
import iphoneSilver from "../assets/images/iphone-silver.jpg";
import iphoneOrange from "../assets/images/iphone-orange.jpg";


function Colors() {

    const colors = [
        { id: 'blue', name: 'Titânio Azul', image: iphoneBlue, colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Titânio Natural', image: iphoneSilver, colorClass: 'bg-gray-300' },
        { id: 'orange', name: 'Titânio Laranja', image: iphoneOrange, colorClass: 'bg-orange-500' }
    ];


    const models = [
        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de vídeo', weight: '221g' },
        { name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', battery: '29h de vídeo', weight: '199g' },
    ]

    const [selectedColor, setSelectedColor] = useState('blue')

    function trocaNome() {

    }

    return (
        <section id="cores" className="bg-black py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center md:mb-4">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4">Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Quatro acabamentos em titânio lindos</p>
                </div>

                <div className="flex justify-center md:mb-10">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex items-center justify-center min-h-[500px]">
                            <img src={colors.find(color => color.id === selectedColor).image} alt="iphone 17" className="max-w-full max-h-[600px] mx-auto"></img>
                        </div>
                        <div className="absolute bottom-30 md:bottom-8 left-0 right-0 text-center">
                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                <h3 className="text-2xl font-semibold">{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-8">
                    {colors.map(color => (
                        <button key={color.id} onClick={() => setSelectedColor(color.id)} className={`relative transition-all duration-300`}>
                            <div className={`w-12 h-12 rounded-full ${color.colorClass} ${selectedColor == color.id ? 'border-white' : 'border-gray-600'} border-4 cursor-pointer`}></div>

                        </button>
                    ))}
                </div>

                <div className="grid gap-8 mt-20 md:grid-cols-2">
                    {models.map((model, index) => (
                        <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="txt-2xl font-bold mb-3">{model.name}</h3>
                            <p className="text-gray-400 mb-4">{model.screen}</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>{model.storage}</li>
                                <li>{model.battery}</li>
                                <li>{model.weight}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10 md:mt-16">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 md:px-8 md:py-4 py-2 rounded-full md:text-md font-md transition-all duration-300 cursor-pointer mb-4 hover:scale-105 shadow-lg shadow-blue-500/30">Compre agora a partir de R$ 9.299,00 </button>
                    <p className="text-sm">Ou em até 12x de R$ 774,92 sem juros</p>
                </div>

            </div>
        </section>
    )
}

export default Colors