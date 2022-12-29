
import { useEffect,useState } from 'react';
import Character from './Character';
function NavPage(props){
    return(
    <header className='d-flex justify-content-between align-items-center'>
       <button onClick={()=>props.setPage(props.page - 1)} className='btn btn-primary btn-sm'>Back</button>
      <p>Page: {props.page}</p>
      <button onClick={()=>props.setPage(props.page + 1)} className='btn btn-primary btn-sm'>Next </button>
    </header>)
}

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(()=>{
    async function fetchData(){
      const response=await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data=await response.json()
    setLoading(false)
    setCharacters(data.results)
    
    }
    fetchData()
    },[page])
if(page<1||page>42){
    setPage(1)
}
 
    return (
    <div className='container '>
  <NavPage page={page}setPage={setPage}></NavPage>
   {loading?(<h1>Loading...</h1>):
   (
    <div className='row'>
    {characters.map(character=>{
        return(
           <div className='col-md-4'  key={character.id}> 
           <Character character={character}/>
           </div>
           
        )
      })}

    </div>
   )
   }
   
   <NavPage page={page}setPage={setPage}></NavPage>
    </div>
  )
}

export default CharacterList
