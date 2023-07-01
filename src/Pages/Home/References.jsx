import chatGpt from '../../Images/64063dbcad97bd421b437096_chatgpt-removebg-preview (1).png';
import youtupe from '../../Images/yt_1200-removebg-preview.png';
import stack from '../../Images/stackoverflow-removebg-preview.png';
import school from '../../Images/download-removebg-preview.png';
import proProfs from '../../Images/5ao23cV94QJkYz5GtGa2BL-removebg-preview.png';
import codePen from '../../Images/code4-removebg-preview.png';
const References = () => {
return ( 
    <div className="References">
        <div className="container">
            <div className="title-References">
                <h1>References</h1>
                <img src="http://tionlineexam.rankhunt.in/images/img/arrow-ask.png" alt="" />
                <h3>References and websites that helped me learn and solve problems to build this site</h3>
            </div>
            <div className="ref-logo">
                <div className="row">
                <div className="col-md-4 col-sm-6 sol-12"><img className="img-fluid" src="https://aspire.jo/wp-content/uploads/2022/05/ASPIRE-logo-long.png" alt="" /></div>
                    <div className="col-md-4 col-sm-6 sol-12"><img className="img-fluid" src={chatGpt} alt="" /></div>
                    <div className="col-md-4 col-sm-6 sol-12"><img className="img-fluid" src={school} alt="" /></div>
                    <div className="col-md-4 col-sm-6 sol-12"><img className="img-fluid" src={stack} alt="" /></div>
                    <div className="col-md-4 col-sm-6 sol-12"><img className="img-fluid" src="https://cdn.cookielaw.org/logos/c7d0d27d-e055-4572-8927-d3c994df5f60/3275d2bc-df67-4c87-81ed-bdfb982b90c2/a3df5d54-4eba-4aeb-9fb3-189c22118d8c/udemy-logo.png" alt="" /></div>
                    <div className="col-md-4 col-sm-6 sol-12"><img className="img-fluid" src={youtupe} alt="" /></div>
                    <div className="col-md-4 col-sm-6 sol-12"><img className="img-fluid" src={proProfs} alt="" /></div>
                    <div className="col-md-4 col-sm-6 sol-12"><img className="img-fluid" src={codePen} alt="" /></div>
                    <div className="col-md-4 col-sm-6 sol-12"><img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" alt="" /></div>
                </div>
            </div>
    </div>
    </div>
)}
export default References;