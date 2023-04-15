export default function PriceList(){
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-5 md:space-y-0 mt-10">
            <div className="bg-white rounded-2xl px-4 py-10 text-black w-96 flex flex-col justify-center">
                <h1 className="bg-pink-500 text-white text-2xl font-bold mx-auto p-4 mb-10 text-center rounded-full">Basic (Start From IDR 70K)</h1>
                <ul className="max-w-xs mb-4 mx-auto text-pink-700 space-y-4">
                    <li>• Chat only (No supperchat dll style default dari YouTube)</li>
                    <li>• Support pembeda warna antara : Owner, Moderator, Viewer biasa, dan membership</li>
                    <li>• Bentuk dan warna bisa disesuaikan dengan permintaan</li>
                    <li className="text-gray-400 text">• styling supperchat, member join, member gift dll</li>
                </ul>
                <a className="bg-pink-500 text-white font-bold p-4 text-center rounded-full mx-auto" href="twitter.com/Revernry">Mulai Dari IDR 85K</a>

            </div>
            <div className="bg-pink-500 rounded-2xl px-4 py-10 text-black w-96 flex flex-col justify-center">
                <h1 className="bg-white text-pink-500 text-2xl font-bold mx-auto p-4 mb-10 text-center rounded-full">Full (Start From IDR 85K)</h1>
                <ul className="max-w-xs mb-4 mx-auto text-white space-y-4">
                    <li>• Chat only (No supperchat dll style default dari YouTube)</li>
                    <li>• Support pembeda warna antara : Owner, Moderator, Viewer biasa, dan membership</li>
                    <li>• Bentuk dan warna bisa disesuaikan dengan permintaan</li>
                    <li>• styling supperchat, member join, member gift dll</li>
                </ul>
                <a className="bg-white text-pink-500 font-bold p-4 text-center rounded-full mx-auto" href="twitter.com/Revernry">Mulai Dari IDR 85K</a>
            </div>
            
        </div>
    )
}