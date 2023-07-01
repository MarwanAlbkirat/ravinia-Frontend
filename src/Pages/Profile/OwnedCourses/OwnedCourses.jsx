import OwnedCourseList from "./OwnedCoursesList";

const OwnedCourse = ({onUpdait,data,handleUpdate,setHandleUpdate,token}) => {
    const {ownedCourse}=data;
    let result = null;
    if(ownedCourse){
        result = ownedCourse.map((element,index)=>{
            return <OwnedCourseList onUpdait={onUpdait} handleUpdate={handleUpdate} setHandleUpdate={setHandleUpdate} token={token} element={element} key={element._id} />
        });
    }
    return ( 
        <section className="owned-courses">
            <div className=" d-flex align-items-center justify-content-around pt-4 pb-4">
                <h5 data-toggle="modal" data-target="#createcourse" style={{backgroundColor:"#003c78",padding:"1rem",color:"white",cursor:"pointer"}} className=" text-capitalize"><i className="pr-1 pl-1 fa-solid fa-plus"></i>create course now</h5>
                <h2 className="text-capitalize text-center ">Courses you are own it</h2>
            </div>
        
        <div className="container"> 
            <div className="row">
            {result ? result : <></>       }
        </div>
        </div>
        <div className="line border"></div>
    </section>
     );
}
 
export default OwnedCourse;