export default function FakeIngredients (){
     const fakeInge = [
        "2 cups all-purpose flour",
        "1 cup granulated sugar",
        "2 large eggs",
        "1 cup milk",
        "1/2 cup unsalted butter (melted)",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "1 tsp vanilla extract",
        "1/2 cup chocolate chips",
        "1 tsp ground cinnamon"
        ];
       return(
         fakeInge.map((item,index)=>(
        <li key={index}>{item}</li>))
       )
}