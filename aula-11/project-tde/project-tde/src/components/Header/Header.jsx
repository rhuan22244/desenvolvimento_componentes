function Header({enableSearch}) {
    return (
        <>
        {enableSearch ? 
        
        <div>
        <input />
            <h1>Titulo</h1>
        </div>
        :
        <div>
            <h1>Titulo</h1>
        </div>
        }
        </>
    )
}