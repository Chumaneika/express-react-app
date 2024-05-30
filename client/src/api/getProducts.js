const fetchRequest = async id => {
   try {
      const response = await fetch(`http://localhost:5000/api/product/by-category/${id}`, {
         method: 'GET',
         mode: 'cors',
         headers: {
            'Content-Type': 'application/json',
         }
      });
         
      if (!response.ok) {
         throw new Error('Network response was not ok');
      }
   
      return await response.json();

   } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
   }
}

export default fetchRequest;