import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function ListComp(){
    return(
    <div className="col-md-6 col-xl-6">
    <div className="card shadow mb-4" style={{opacity: 1,filter: "blur(0px)",height: "380px",backgroundColor: "rgba(255,255,255,0)",color: "rgb(255,255,255)"}}>
        <div className="card-body">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h4 className="small font-weight-bold" style={{"fontSize":"26px"}}>Bitcoin</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4 className="small font-weight-bold">BTC</h4>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col" style={{"fontSize":"27px"}}>
                            <h4 className="small font-weight-bold"><span className="float-right">Complete!</span></h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4 className="small font-weight-bold"><span className="float-right">Complete!</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</div>
    )
}

export default ListComp;