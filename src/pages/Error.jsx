import { NavLink, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    
 
    const error = useRouteError();

    if(error.status !== 404){
       console.log('all okey');
    }

  return (
        <section className="error-section">
            <div id="error-text">
                <figure>
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvTEtz0uvIWvEglF33uGLb9-n5KFH94KGEdzvB0xd4qkwOgy-iAbYYeJL&s=10" 
                    alt="404 Error"
                    />
                </figure>
                <div className="text-center">
                    <p className="p-a">
                        The Page you looking for  could not fiund
                    </p>
                    <p className="p-b">
                        Back to previous page
                    </p>

                    <NavLink to='/' className='btn'>
                        BAck To Home
                    </NavLink>
                </div>
            </div>
            

        </section>
  )
}

export default ErrorPage
