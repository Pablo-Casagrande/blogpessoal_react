
function Home() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw"
    }}>
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80vw"
            }}>
                <h2>Seja Bem Vindo!</h2>
                <p>Expresse aqui seus pensamentos e opinioes</p>

            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80vw"
            }}>
                <img
                    src="https://i.imgur.com/VpwApCU.png"
                    alt="Imagem da Página Home"
                    width="400pc"
                />
            </div>
        </div>
    </div>
  )
}

export default Home