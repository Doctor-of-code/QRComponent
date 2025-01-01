import QRFoto from "./assets/image-qr-code.png"

function App() {
  return (
    <main className="bg-Slate_300 h-screen w-screen justify-center flex items-center font-Outfit">
      <div className="Card bg-White flex flex-col justify-center items-center rounded-2xl p-4 gap-4 mx-12 max-w-[300px]">
        <div className="Container_Img">
          <img src={QRFoto} alt="QR" className="rounded-xl" />
        </div>
        <div className="Text flex  flex-col justify-center items-center text-center gap-3">
          <h1 className="font-bold text-Slate_900 text-xl">Improve You Front-End Skills by Building Projects</h1>
          <p className="font-normal text-Slate_500 mb-3">Scan the QR code to visit FrontEnd Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </main>
  )
}

export default App
