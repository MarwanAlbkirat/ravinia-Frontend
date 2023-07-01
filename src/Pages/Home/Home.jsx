import image1 from '../../Images/16008293281.png';
import image2 from '../../Images/image1-9.jpg';
import image3 from '../../Images/online-examination-system.jpg';
import image4 from '../../Images/Tips-Online-Exams-1110x380.jpg';
import image5 from '../../Images/student-passing-online-exam-home-student-passing-online-exam-home-closeup-181815769.jpg';
import CarouselSlider from './CarouselSlider';
import OnlineExamination from './onlineExamination'
import Features from './Features';
import References from './References';
const Home = () => {
    const slides =[
    {image:image1},
    {image:image2},
    {image:image3},
    {image:image4},
    {image:image5},
    ];
    return (
        <div className="wrapperr">
            <div style={{width:"100%",height:"80vh",margin:"0 auto"}}>
                <CarouselSlider slides={slides}/>
            </div>
           <OnlineExamination />
           <Features />
           <References />
        </div>
     );
}
export default Home;