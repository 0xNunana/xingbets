export const getFreebets=async()=>{
   
        const options ={ 
          headers:{
            Authorization:`Bearer ${process.env.STRAPI_API_KEY}`
          }
        }
        
        try {
          /*Adding '?populate=*' adds the images to the api call to be used*/
          const res = await fetch (`http://127.0.0.1:1337/api/free-bets?populate=*`,options);
          const data = await res.json()
          return data;
        } catch (error) {
          console.log(error)
        }
       
          
}

export type BetType ={
    id: number;
    attributes: {
      home: string;
      away: string;
      homeScore: string;
      awayScore: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      // Add other attributes as needed
    };
  }