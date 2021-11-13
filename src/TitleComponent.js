import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'


function TitleComp(){
    return(
        <div className="col-md-6 col-xl-6">
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col" style={{color: "rgb(255,255,255)"}}>
                        <div className="row">
                            <div className="col">
                                <h4 className="small font-weight-bold">Hi Vasu,</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4 className="small font-weight-bold" style={{"fontSize": "45px"}}><strong>Blah,Blah Blah Blah Blah Blah,Blah Blah Blah Blah</strong><br /><br /></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TitleComp;