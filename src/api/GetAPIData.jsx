export const getAPIDATA = async() => {
    try {
        const respon = await fetch(
            "http://www.omdbapi.com/?i=tt3896198&apikey=88d40235&s=titanic&page=1"
        );

        const result = respon.json();
        return result;
        
    } catch (error) {
        console.log(error);
        
    }
}