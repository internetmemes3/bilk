'use client';

import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import DesktopIcon from '../../components/DesktopIcon'
import Window from '../../components/Window'


export default function Home() {
  const [activeWindow, setActiveWindow] = useState(null)
  const [currentTime, setCurrentTime] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [showInstallWindow, setShowInstallWindow] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const canvasRef = useRef(null)
  
  useEffect(() => {
    setShowPopup(true)

    const timer = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit'
      });
      const date = now.toLocaleDateString('en-US', {
        timeZone: 'America/New_York',
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
      });
      setCurrentTime(`${date} ${time}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stockTickers = [
    { symbol: 'OSD', price: '173.50', change: '+69%' },
    { symbol: 'GFH', price: '402.75', change: '-69%' },
    { symbol: 'CDS', price: '142.25', change: '+420%' },
    { symbol: 'SDH', price: '178.90', change: '+96%' },
    { symbol: 'YUI', price: '185.30', change: '-420%' },
    { symbol: 'GJG', price: '142.25', change: '+690%' },
    { symbol: 'YTRE', price: '178.90', change: '+96%' },
    { symbol: 'UIY', price: '185.30', change: '-420%' },
  ]

  const handleInstallClick = () => {
    setShowPopup(false);
    setShowInstallWindow(true);
  };

  const handleComputerClick = () => {
    setShowPopup(true);
    setActiveWindow(null);
  };

  const handleNewsClick = () => {
    window.open('https://x.com/Bilk_sol', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/bilksol', '_blank');
  };

  const handleDexscreenerClick = () => {
    window.open('https://dexscreener.com/', '_blank');
  };

  const handlePfClick = () => {
    window.open('https://pump.fun/coin/5tHybob3FMVcPthsyTxYYKGZkhZ8CchtUPjNNGttpump', '_blank');
  };

  const generateMeme = async (bgImage) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 500

    const background = new Image()
    background.src = URL.createObjectURL(bgImage)
    await new Promise(resolve => background.onload = resolve)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    const bilk = new Image()
    bilk.src = '/bilk.png'
    await new Promise(resolve => bilk.onload = resolve)
    ctx.drawImage(bilk, 0, 0, canvas.width, canvas.height)
    setPreviewUrl(canvas.toDataURL('image/png'))
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setBackgroundImage(file)
      generateMeme(file)
    }
  }

  const handleDownload = () => {
    if (previewUrl) {
      const link = document.createElement('a')
      link.download = 'meme.png'
      link.href = previewUrl
      link.click()
    }
  }

  return (
    <div className="min-h-screen bg-[#008080] flex flex-col">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <p className="fixed bottom-14 right-8 text-sm text-gray-800">
        Please Activate: <br/> <span className="font-bold">5tHybob3FMVcPthsyTxYYKGZkhZ8CchtUPjNNGttpump</span>
      </p>
      <div className="flex-1 relative" style={{ height: 'calc(100vh - 48px)' }}>
        <div className="absolute left-0 top-0 w-[140px] p-2">
          <div className="grid grid-cols-1 gap-4">
            <DesktopIcon 
              icon="/icons/bilk.ico"
              label="Memes"
              onClick={handleComputerClick}
              isActive={activeWindow === 'computer'}
            />
            <DesktopIcon 
              icon="/icons/x.ico"
              label="News"
              onClick={handleNewsClick}
              isActive={activeWindow === 'news'}
            />
            <DesktopIcon 
              icon="/icons/telegram.ico"
              label="Telegram"
              onClick={handleTelegramClick}
              isActive={activeWindow === 'telegram'}
            />
            <DesktopIcon 
              icon="/icons/dexscreener.ico"
              label="Dexscreener"
              onClick={handleDexscreenerClick}
              isActive={activeWindow === 'dexscreener'}
            />
            <DesktopIcon 
              icon="/icons/pf.ico"
              label="PumpFun"
              onClick={handlePfClick}
              isActive={activeWindow === 'pumpfun'}
            />
          </div>
        </div>
        {showPopup && (
          <Window
            title="Memes.exe"
            onClose={() => setShowPopup(false)}
            onMinimize={() => setShowPopup(false)}
            className="w-[95%] md:w-[600px] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="font-['MS_Sans_Serif'] p-2 md:p-4">
              <div className="flex flex-col items-center gap-2 md:gap-4">
                <div>
                  <button className="win95-button px-3 py-1 md:px-4 md:py-2">
                    Buy $Bilk
                  </button>
                </div>
                <div className="border-2 border-gray-400 p-1 md:p-2">
                  <img 
                    src={previewUrl || "/bilk.png"} 
                    alt={previewUrl ? "Preview" : "Original"} 
                    className="w-32 h-32 md:w-48 md:h-48 object-contain" 
                  />
                </div>
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <p className="text-xs md:text-sm mb-1">Add a background:</p>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="win95-button p-1 md:p-2 w-full md:w-auto text-xs md:text-base"
                    />
                    {previewUrl && (
                      <button
                        className="win95-button px-3 py-1 md:px-4 md:py-2 text-xs md:text-base"
                        onClick={handleDownload}
                      >
                        Download Meme
                      </button>
                    )}
                  </div>
                </div>
                
                <canvas ref={canvasRef} style={{ display: 'none' }} />
              </div>
            </div>
          </Window>
        )}
      </div>
     
      <div className="">
        <div className="fixed bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf] flex items-center px-2">
          <button className="win95-button px-4 py-1 mr-2" onClick={() => setShowPopup(true)}>
            Start
          </button>
          <div className="win95-taskbar-divider mx-2" />
    
          <div className="flex-1 flex items-center space-x-4 overflow-x-auto px-2 font-['VT323']">
            {stockTickers.map((stock, index) => (
              <div key={stock.symbol} className="flex items-center space-x-1 min-w-fit">
                <span className="font-bold">{stock.symbol}</span>
                <span>${stock.price}</span>
                <span className={stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stock.change}
                </span>
                {index < stockTickers.length - 1 && <div className="win95-taskbar-divider mx-2" />}
              </div>
            ))}
          </div>
          <div className="win95-button px-3 py-1 min-w-[100px] text-center font-['VT323']">
            {currentTime}
          </div>
        </div>
      </div>
    </div>
  )
} 
