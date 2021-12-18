import { getNgoByIdService} from "./services/NgoService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getNgoById} from '../redux/NgoSlice';

const NgoData = () => {

    const [ngoId, setngoId] = useState('');
    const dispatch = useDispatch();
    const ngoDataFromStore = useSelector((state) => state.ngo.ngoState);
    const ngoList = useSelector((state) => state.ngo.ngoList);

    const handleNgo = (n) => {
        console.log('handleNgo');
        setEid(n.target.value);
    }

    const submitGetNgoById = (evt) => {
        evt.preventDefault();
        console.log('submitGetNgoById');
        getNgoByIdService(ngoId)
            .then((response) => { dispatch(getNgoById(response.data)) })
            .catch(() => {
                alert(`NGO with ${ngoId} not found.`);
            });
        console.log(Object.keys(ngoList));
        setEid('');
    }

    // const submitGetAllEmps = (evt) => {
    //     evt.preventDefault();
    //     console.log('submitGetAllEmps');
    //     getAllEmpsService()
    //         .then((response) => {
    //             dispatch(getAllEmps(response.data));
    //         })
    //         .catch(() => {
    //             alert(`Something is wrong!`);
    //         });
    // }

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Ngo Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find NGO by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetNgoById}>
                    <input className="form-control mt-3" type="number" id="ngoid" name="ngo id" value={ngo} onChange={handleNgo} placeholder="Enter ngo to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Employee" />
                </form>
                <p>Data from store: {ngoDataFromStore.eid}</p>
            </div>

            {/* <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all employees</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllEmps} value="Find All Employees" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Eid</th>
                                <th>Name</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empList.map((emp, k) => {
                                return (
                                    <tr k={k}> <td>{emp.eid}</td>  <td>{emp.firstName}</td> <td>{emp.salary}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div> */}



        </div>
    );
}
export default NgoData;


