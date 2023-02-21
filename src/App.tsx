import React, { useState } from 'react';

const App: React.FC = () => {
    const [inputNumber, setInputNumber] = useState(0);

    // 素数を判定する関数
    const isPrime = (inputNumber: number) => {
        if (inputNumber < 2) {
            return false;
        }
        for (let i = 2; i < inputNumber; i++) {
            if (inputNumber % i === 0) {
                return false;
            }
        }
        return true;
    };

    // const Prime = () => {
    //     return (
    //         <div className="w-screen flex justify-center items-center">
    //             <h1 className="p-5 text-5xl font-bold text-blue-700">この数は素数ではありません</h1>
    //         </div>
    //     );
    // };

    return (
        <>
            <div className="w-screen flex justify-center items-center bg-green-200">
                <h1 className="p-5 text-5xl font-bold">素数チェッカー</h1>
            </div>
            <br />
            <div className="w-screen flex justify-center items-center text-2xl font-semibold">
                <p>素数チェッカーで簡単に素数かどうか調べてみよう！下のフォームに数字を入力してね！</p>
            </div>
            <br />
            <div className="flex justify-center items-center">
                <input
                    type="number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(Number(e.target.value))}
                    id="small-input"
                    className="block container mx-auto p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <h1 className="p-5 text-5xl font-bold">
                {(() => {
                    if (inputNumber < 2) {
                        return (
                            <div className="w-screen flex justify-center items-center">
                                <h1 className="p-5 text-5xl font-bold text-blue-700">この数は素数ではありません</h1>
                            </div>
                        );
                    }
                    for (let i = 2; i < inputNumber; i++) {
                        if (inputNumber % i === 0) {
                            return (
                                <div className="w-screen flex justify-center items-center">
                                    <h1 className="p-5 text-5xl font-bold text-blue-700">この数は素数ではありません</h1>
                                </div>
                            );
                        }
                    }
                    return (
                        <div className="w-screen flex justify-center items-center">
                            <h1 className="p-5 text-5xl font-bold text-red-700">この数は素数です！！！</h1>
                        </div>
                    );
                })()}
            </h1>
            <p className="flex justify-center items-center text-2xl font-semibold">
                制作：Sandyマン（
                <a href="https://twitter.com/sandyman_linux" className="text-blue-800">
                    @sandyman_linux）
                </a>
            </p>
        </>
    );
};

export default App;
