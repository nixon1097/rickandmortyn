const paginationLogic = (currentPage,residents )=>{
 //! Exepcion para el primer render 
 if (residents.length === 0){
  return {  pages:[1],
    residentsInPage:[]}
 }

  //* la cantidad de residentes por pagina 
  const RESIDENTS_PER_PAG= 10;
  //*bcantidad total de paginas 
  const totalPages= Math.ceil(residents.length/ RESIDENTS_PER_PAG)
  //* Residentes que se van a mostrar en la pg Actual

  const sliceEnd= RESIDENTS_PER_PAG * currentPage
  const sliceStart= sliceEnd- RESIDENTS_PER_PAG
  const residentsInPage = residents.slice( sliceStart,sliceEnd)
//* Generacion de arreglo de lma pagina que se va a mostar 
  const pages = []
  for(let i=1;i<=totalPages; i++){
    pages.push(i)
  }
  return {pages ,  residentsInPage}
}
export{
    paginationLogic
}