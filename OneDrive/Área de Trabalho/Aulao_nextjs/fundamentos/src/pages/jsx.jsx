export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    
    return (
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome:'Marcos',idade:54})}
            </p>
        </div>
    )
}