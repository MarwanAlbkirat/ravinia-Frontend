import TrainingCourseList from './TrainingCoursesList';
import { Link } from "react-router-dom";
const TrainingCourse = ({handleUpdate,setHandleUpdate,token,data:{followUpCourse}}) => {
    let result = [];
    if(followUpCourse){
        result = followUpCourse.map((element,index)=>{
            return <TrainingCourseList handleUpdate={handleUpdate} setHandleUpdate={setHandleUpdate} token={token} element={element} key={element._id} />
        });
    }
    return ( 
        <section className="owned-courses">
            <h2 className="text-capitalize text-center pt-5 ">Courses joint with it</h2>
            <div className="container"> 
                <div className="row">
                    {result.length > 0 ? result : 
                    <div className="owned-courses-join">
                        <Link to="/join-course">
                            <i className="fa-solid fa-plus"></i>
                            <h3>Join courses now</h3>
                        </Link>
                    </div>
                        }
                </div>
            </div>
        <div className="line border"></div>
    </section>
     );
}
export default TrainingCourse;