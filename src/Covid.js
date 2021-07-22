import React, {useEffect , useState} from 'react'

export const Covid = () => {
  let s;
  const [sear,setSear]=useState();
  const [user, setuser] = useState([]);
  const [india,setIndia]=useState([]);
  

  var flag=1;
    async function getData()
    {
        let res=await fetch('https://api.covid19india.org/data.json');
        s=await res.json();
        console.log(s.statewise[1]);
        setuser(s.statewise); 
        setIndia(s.statewise[0]);
    }

    useEffect(() => {
      getData();
    }, []);

    function ndata(index,i)
    { if(i===0)
      {
        return ;
      }

      else 
      return (
        <>
          
          <div className="col-sm-2 car first ">
        <div className="card bg-dark">
        <div class="card-header">
        <h4 className="card-title">{index.state}</h4>
                </div>
          <div className="card-body text-light ">
            
            <h6 className="card-text">Total Casses : {index.confirmed}</h6>
            <p className="card-text">Active : {index.active}</p>
            <p className="card-text">Recovered : {index.recovered}</p>
            <p className="card-text">Dead : {index.deaths}</p>
            <p className="card-text"> {index.lastupdatedtime}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        </div>
        </>
      )
    }

    function vdata(index,i)
    {
        
     
      var copyUser=index.state.substr(0,sear.length);
      copyUser=copyUser.toLocaleLowerCase()
      var searn=sear.toLocaleLowerCase()
       
      if(searn==copyUser)
      {
        flag=0;
          return (
            <>
              
              <div className="first  cp">
            <div className="card bg-dark">
            <div class="card-header">
            <h4 className="card-title">{index.state}</h4>
                    </div>
              <div className="card-body text-light">
                
                <h6 className="card-text">Total Casses : {index.confirmed}</h6>
                <p className="card-text">Active : {index.active}</p>
                <p className="card-text">Recovered : {index.recovered}</p>
                <p className="card-text">Dead : {index.deaths}</p>
                <p className="card-text"> {index.lastupdatedtime}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
            </div>
            </>
          )
      }
      
    }

   
    function check()
    {     
          if(sear)
          {   
              
                return(user.map(vdata));
              

              
          }

          else{ flag=1;
            return (user.map(ndata) );
         }

    }
  

    function handleInputs(e){

        var a=e.target.value;
        setSear(a);
        
      
    }


    function checkAgain()
    {
      if(sear)
      {
        if(flag===1)
              {
                return(<><h1>No such State</h1> </>)
              }
      }
    }

    return (
        <>
            <div className="Covid">
            
                <div className="heading"><h1>Covid Tracker </h1></div>
                <div className="container  India">
                  <h1 className="container indiaHeading">India Corona Status </h1>
                
                  <div className="container indiaHeading">
            <p className="card-text">Total corona casese is : {india.confirmed}</p>
            <p className="card-text">Active : {india.active}</p>
            <p className="card-text">Recovered : {india.recovered}</p>
            <p className="card-text">Dead : {india.deaths}</p>
            <p className="card-text">Last update : {india.lastupdatedtime}</p></div>
                </div>
<br />

                    <div className="searchH container">
                        <div className="input-group">
  <input type="search" className="form-control rounded" placeholder="Search For State" aria-label="Search"
    aria-describedby="search-addon"  
    value={sear} 
    onChange={handleInputs}
    />


  <button type="button" className="btn  btn-danger text-light">search</button>
</div>
</div>

<br />
<br />

        
             
            <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center row ">
            {check()}
            {checkAgain()}
             </div>

            </div>

    </div>
        </>
    )
}



// active: "18"
// confirmed: "7521"
// deaths: "129"
// deltaconfirmed: "0"
// deltadeaths: "0"
// deltarecovered: "0"
// lastupdatedtime: "21/07/2021 20:35:42"
// migratedother: "0"
// recovered: "7374"
// state: "Andaman and Nicobar Islands"
// statecode: "AN"
// statenotes: ""


